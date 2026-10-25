#!/usr/bin/env python3
"""Render the four proposed French lab-guide Markdown sources as readable PDFs.

Only the standard library and the bundled ReportLab / pypdf / pypdfium2 / Pillow
packages are used. The source Markdown remains the canonical editable content.
"""

from __future__ import annotations

import argparse
import hashlib
import html
import math
import re
import sys
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib.parse import urlparse

from PIL import Image, ImageOps, ImageDraw
from pypdf import PdfReader
import pypdfium2 as pdfium
from reportlab.lib.enums import TA_CENTER
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Flowable,
    LongTable,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PREVIEW_DIR = ROOT / "tmp" / "pdfs"
STATUS_LINE = "PLAN PROPOSÉ - À VALIDER"
PAGE_SIZE = A4
PAGE_WIDTH, PAGE_HEIGHT = PAGE_SIZE
LEFT_MARGIN = RIGHT_MARGIN = 17 * mm
TOP_MARGIN = 16 * mm
BOTTOM_MARGIN = 18 * mm
CONTENT_WIDTH = PAGE_WIDTH - LEFT_MARGIN - RIGHT_MARGIN
NAVY = colors.HexColor("#193E50")
BLUE_GREY = colors.HexColor("#EAF0F3")
PALE = colors.HexColor("#F5F7F8")
RULE = colors.HexColor("#C7D4DB")
TEXT = colors.HexColor("#202B31")
LINK = colors.HexColor("#245D77")
MUTED = colors.HexColor("#52616A")

GUIDES = (
    (Path("BUILD_PLAN.md"), Path("Feuille_de_route_2_PC_1_jour.pdf")),
    (Path("docs/MACHINE_A.md"), Path("01_PC_A.pdf")),
    (Path("docs/MACHINE_B.md"), Path("02_PC_B.pdf")),
    (Path("docs/LIAISON.md"), Path("03_Liaison_VMs.pdf")),
)

FONT_NAMES: dict[str, str] = {}
FAMILY = "GuideSans"
CODE_FONT = "GuideMono"


def _register_fonts() -> None:
    """Register installed Windows fonts so French text and code render cleanly."""
    global FONT_NAMES
    font_root = Path("C:/Windows/Fonts")
    candidates = (
        ("segoeui.ttf", "segoeuib.ttf", "segoeuii.ttf", "segoeuiz.ttf"),
        ("arial.ttf", "arialbd.ttf", "ariali.ttf", "arialbi.ttf"),
    )
    chosen = None
    for normal, bold, italic, bold_italic in candidates:
        files = [font_root / name for name in (normal, bold, italic, bold_italic)]
        if all(path.exists() for path in files):
            chosen = files
            break
    if chosen is None:
        raise RuntimeError("Segoe UI or Arial regular/bold/italic font files were not found.")

    names = (FAMILY, f"{FAMILY}-Bold", f"{FAMILY}-Italic", f"{FAMILY}-BoldItalic")
    for name, path in zip(names, chosen):
        pdfmetrics.registerFont(TTFont(name, str(path)))
    pdfmetrics.registerFontFamily(
        FAMILY,
        normal=names[0],
        bold=names[1],
        italic=names[2],
        boldItalic=names[3],
    )

    mono_path = font_root / "consola.ttf"
    if not mono_path.exists():
        raise RuntimeError("Consolas font file C:/Windows/Fonts/consola.ttf was not found.")
    pdfmetrics.registerFont(TTFont(CODE_FONT, str(mono_path)))
    FONT_NAMES = {"family": FAMILY, "bold": names[1], "italic": names[2], "code": CODE_FONT}


_register_fonts()


def _styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()["BodyText"].clone("GuideBody")
    base.fontName = FAMILY
    base.fontSize = 10.2
    base.leading = 14
    base.textColor = TEXT
    base.spaceAfter = 5
    base.allowWidows = 0
    base.allowOrphans = 0
    base.splitLongWords = 1
    base.linkColor = LINK

    title = ParagraphStyle(
        "GuideTitle",
        parent=base,
        fontName=f"{FAMILY}-Bold",
        fontSize=23,
        leading=27,
        textColor=NAVY,
        spaceBefore=2,
        spaceAfter=4,
        keepWithNext=True,
    )
    status = ParagraphStyle(
        "GuideStatus",
        parent=base,
        fontName=f"{FAMILY}-Bold",
        fontSize=8.3,
        leading=11,
        textColor=LINK,
        spaceAfter=17,
        keepWithNext=True,
    )
    h2 = ParagraphStyle(
        "GuideH2",
        parent=base,
        fontName=f"{FAMILY}-Bold",
        fontSize=14,
        leading=18,
        textColor=NAVY,
        spaceBefore=12,
        spaceAfter=5,
        keepWithNext=True,
    )
    h3 = ParagraphStyle(
        "GuideH3",
        parent=base,
        fontName=f"{FAMILY}-Bold",
        fontSize=12,
        leading=15,
        textColor=NAVY,
        spaceBefore=9,
        spaceAfter=4,
        keepWithNext=True,
    )
    h4 = ParagraphStyle(
        "GuideH4",
        parent=base,
        fontName=f"{FAMILY}-Bold",
        fontSize=10.5,
        leading=13,
        textColor=NAVY,
        spaceBefore=7,
        spaceAfter=3,
        keepWithNext=True,
    )
    code = ParagraphStyle(
        "GuideCode",
        parent=base,
        fontName=CODE_FONT,
        fontSize=8.0,
        leading=10,
        textColor=TEXT,
        backColor=PALE,
        borderColor=RULE,
        borderWidth=0.45,
        borderPadding=5,
        leftIndent=3,
        rightIndent=3,
        spaceBefore=3,
        spaceAfter=8,
        wordWrap="CJK",
        splitLongWords=1,
        allowWidows=0,
        allowOrphans=0,
    )
    inline_code = ParagraphStyle(
        "GuideInlineCode",
        parent=base,
        fontName=CODE_FONT,
        fontSize=8.6,
        leading=11,
        backColor=PALE,
        textColor=TEXT,
        splitLongWords=1,
        wordWrap="CJK",
    )
    quote = ParagraphStyle(
        "GuideQuote",
        parent=base,
        leftIndent=10,
        rightIndent=7,
        borderColor=RULE,
        borderWidth=1.5,
        borderPadding=6,
        textColor=MUTED,
        backColor=PALE,
        spaceBefore=3,
        spaceAfter=8,
    )
    bullet = ParagraphStyle(
        "GuideBullet",
        parent=base,
        leftIndent=17,
        firstLineIndent=-10,
        spaceAfter=3,
    )
    table = ParagraphStyle(
        "GuideTableCell",
        parent=base,
        fontSize=8,
        leading=10,
        spaceAfter=0,
        splitLongWords=1,
        wordWrap="CJK",
    )
    table_header = ParagraphStyle(
        "GuideTableHeader",
        parent=table,
        fontName=f"{FAMILY}-Bold",
        textColor=colors.white,
    )
    diagram_label = ParagraphStyle(
        "GuideDiagramLabel",
        parent=base,
        fontName=FAMILY,
        fontSize=8.5,
        leading=10,
        alignment=TA_CENTER,
        textColor=TEXT,
        splitLongWords=1,
        wordWrap="CJK",
    )
    return {
        "body": base,
        "title": title,
        "status": status,
        "h2": h2,
        "h3": h3,
        "h4": h4,
        "code": code,
        "inline_code": inline_code,
        "quote": quote,
        "bullet": bullet,
        "table": table,
        "table_header": table_header,
        "diagram_label": diagram_label,
    }


STYLES = _styles()


def _ascii_dashes(text: str) -> str:
    return text.translate(str.maketrans({"\u2010": "-", "\u2011": "-", "\u2012": "-", "\u2013": "-", "\u2014": "-", "\u2015": "-"}))


def _slug(text: str) -> str:
    plain = re.sub(r"<[^>]+>", "", text)
    plain = re.sub(r"`([^`]*)`", r"\1", plain)
    plain = re.sub(r"[*_~]", "", plain)
    ascii_text = unicodedata.normalize("NFKD", plain).encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_text.casefold()).strip("-")
    return slug or "section"


def _plain_markdown(text: str) -> str:
    text = re.sub(r"!\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"`([^`]*)`", r"\1", text)
    text = re.sub(r"\*\*(.*?)\*\*|__(.*?)__", lambda m: m.group(1) or m.group(2), text)
    text = re.sub(r"\*(.*?)\*|_(.*?)_", lambda m: m.group(1) or m.group(2), text)
    text = re.sub(r"~~(.*?)~~", r"\1", text)
    text = re.sub(r"\s+", " ", text).strip()
    return _ascii_dashes(text)


def _heading_destinations(lines: list[str]) -> tuple[dict[str, str], dict[int, str]]:
    anchors: dict[str, str] = {}
    by_line: dict[int, str] = {}
    seen: dict[str, int] = {}
    for index, line in enumerate(lines):
        match = re.match(r"^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$", line)
        if not match:
            continue
        title = match.group(2)
        explicit = re.search(r"\s+\{#([A-Za-z0-9_-]+)\}\s*$", title)
        if explicit:
            destination = explicit.group(1)
            title = title[: explicit.start()].rstrip()
        else:
            base = _slug(title)
            occurrence = seen.get(base, 0) + 1
            seen[base] = occurrence
            destination = base if occurrence == 1 else f"{base}-{occurrence}"
        by_line[index] = destination
        anchors[destination.casefold()] = destination
        anchors[_slug(title).casefold()] = destination
    return anchors, by_line


def _link_label(target: str) -> str:
    parsed = urlparse(target)
    label = parsed.netloc or parsed.path
    label = label.removeprefix("www.")
    return label[:48] if label else "lien externe"


INLINE_RE = re.compile(
    r"(?P<image>!\[[^\]]*\]\([^)]*\))"
    r"|(?P<link>\[[^\]]+\]\([^)]*\))"
    r"|(?P<autolink><https?://[^>]+>)"
    r"|(?P<rawurl>https?://[^\s<>]+)"
    r"|(?P<code>`[^`]+`)"
    r"|(?P<bold>\*\*.+?\*\*|__.+?__)"
    r"|(?P<strike>~~.+?~~)"
    r"|(?P<italic>\*[^*\n]+?\*|_[^_\n]+?_)"
)
LINK_RE = re.compile(r"^\[(?P<label>[^\]]+)\]\((?P<target><[^>]+>|[^\s)]+)(?:\s+[\"'][^)]*[\"'])?\)$")
IMAGE_RE = re.compile(r"^!\[(?P<label>[^\]]*)\]\((?P<target>[^)]*)\)$")
RAW_URL_RE = re.compile(r"^https?://[^\s<>]+$")


def _inline(text: str, anchors: dict[str, str], depth: int = 0) -> str:
    """Convert common inline Markdown to ReportLab's restricted paragraph XML."""
    text = _ascii_dashes(text)
    chunks: list[str] = []
    cursor = 0
    for match in INLINE_RE.finditer(text):
        chunks.append(html.escape(text[cursor : match.start()], quote=False))
        token = match.group(0)
        kind = match.lastgroup
        if kind == "image":
            image = IMAGE_RE.match(token)
            label = (image.group("label").strip() if image else "") or "illustration"
            chunks.append(html.escape(f"[Illustration : {label}]", quote=False))
        elif kind == "link":
            link = LINK_RE.match(token)
            if not link:
                chunks.append(html.escape(token, quote=False))
            else:
                label = link.group("label")
                target = link.group("target").strip("<>")
                if target.startswith("#"):
                    key = target[1:].casefold()
                    destination = anchors.get(key) or anchors.get(_slug(key))
                    href = f"#{destination}" if destination else f"#{_slug(key)}"
                    chunks.append(f'<link href="{html.escape(href, quote=True)}">{_inline(label, anchors, depth + 1)}</link>')
                elif target.lower().startswith(("http://", "https://", "mailto:")):
                    chunks.append(f'<link href="{html.escape(target, quote=True)}">{_inline(label, anchors, depth + 1)}</link>')
                else:
                    # Relative links remain visible and readable, without exposing filesystem paths.
                    chunks.append(_inline(label, anchors, depth + 1))
        elif kind == "autolink":
            target = token[1:-1]
            chunks.append(f'<link href="{html.escape(target, quote=True)}">{html.escape(_link_label(target), quote=False)}</link>')
        elif kind == "rawurl":
            target = token
            punctuation = ".,;:!?)]}"
            suffix = ""
            while target and target[-1] in punctuation:
                suffix, target = target[-1] + suffix, target[:-1]
            chunks.append(f'<link href="{html.escape(target, quote=True)}">{html.escape(_link_label(target), quote=False)}</link>')
            if suffix:
                chunks.append(html.escape(suffix, quote=False))
        elif kind == "code":
            code = token[1:-1]
            chunks.append(f'<font name="{CODE_FONT}">{html.escape(code, quote=False)}</font>')
        elif kind == "bold":
            inner = token[2:-2]
            chunks.append(f"<b>{_inline(inner, anchors, depth + 1)}</b>")
        elif kind == "strike":
            chunks.append(f"<strike>{_inline(token[2:-2], anchors, depth + 1)}</strike>")
        elif kind == "italic":
            chunks.append(f"<i>{_inline(token[1:-1], anchors, depth + 1)}</i>")
        cursor = match.end()
    chunks.append(html.escape(text[cursor:], quote=False))
    rendered = "".join(chunks)
    rendered = re.sub(r"\\([\\`*_{}\[\]()#+.!|>-])", r"\1", rendered)
    return rendered


def _split_table_row(line: str) -> list[str]:
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|") and not line.endswith("\\|"):
        line = line[:-1]
    cells: list[str] = []
    current: list[str] = []
    escaped = False
    for char in line:
        if char == "|" and not escaped:
            cells.append("".join(current).strip())
            current = []
            escaped = False
            continue
        if char == "\\" and not escaped:
            escaped = True
        else:
            escaped = False
        current.append(char)
    cells.append("".join(current).strip())
    return [cell.replace("\\|", "|") for cell in cells]


def _is_table_delimiter(line: str) -> bool:
    cells = _split_table_row(line)
    return bool(cells) and all(re.fullmatch(r":?-{3,}:?", cell.replace(" ", "")) for cell in cells)


def _table_flowable(rows: list[list[str]], available_width: float, anchors: dict[str, str]) -> LongTable:
    columns = max(len(row) for row in rows)
    normalized_rows = [row + [""] * (columns - len(row)) for row in rows]
    font_size = 8 if columns <= 4 else 7.2 if columns <= 6 else 6.5
    header_style = STYLES["table_header"].clone("TableHeaderDynamic")
    body_style = STYLES["table"].clone("TableBodyDynamic")
    header_style.fontSize = body_style.fontSize = font_size
    header_style.leading = body_style.leading = font_size + 2
    cells = [
        [Paragraph(_inline(_ascii_dashes(text), anchors), header_style if row_index == 0 else body_style) for text in row]
        for row_index, row in enumerate(normalized_rows)
    ]
    weights = []
    for column in range(columns):
        lengths = [len(_plain_markdown(row[column])) for row in normalized_rows]
        estimate = max([5] + [min(length, 36) for length in lengths])
        weights.append(max(0.7, estimate ** 0.64))
    total = sum(weights)
    widths = [available_width * weight / total for weight in weights]
    table = LongTable(
        cells,
        colWidths=widths,
        repeatRows=1,
        splitByRow=1,
        hAlign="LEFT",
        spaceBefore=4,
        spaceAfter=9,
    )
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), NAVY),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, BLUE_GREY]),
                ("GRID", (0, 0), (-1, -1), 0.35, RULE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 4),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ("LINEBELOW", (0, 0), (-1, 0), 0.8, NAVY),
            ]
        )
    )
    return table


NODE_RE = re.compile(r"^\s*([A-Za-z_][\w.:-]*)(?:\s*\[([^\]]*)\]|\s*\(\((.*?)\)\)|\s*\(([^)]*)\)|\s*\{([^}]*)\})?\s*$")
ARROW_RE = re.compile(r"\s*(?:-->|---|==>|-\.->|--o|--x|->)\s*")


@dataclass
class _Node:
    key: str
    label: str
    paragraph: Paragraph
    width: float
    height: float


class TopologyFlowable(Flowable):
    """A small vector flowchart that preserves Mermaid-defined nodes and edges."""

    def __init__(self, nodes: dict[str, str], edges: list[tuple[str, str]], direction: str):
        super().__init__()
        self.nodes = nodes
        self.edges = edges
        self.direction = direction
        self._layout: dict[str, object] = {}
        self.height = 1

    def _depths(self) -> dict[str, int]:
        order = list(self.nodes)
        adjacency: dict[str, list[str]] = {key: [] for key in order}
        indegree = {key: 0 for key in order}
        for source, target in self.edges:
            if source in adjacency and target in adjacency:
                adjacency[source].append(target)
                indegree[target] += 1
        queue = [key for key in order if indegree[key] == 0]
        depth = {key: 0 for key in queue}
        cursor = 0
        visited: set[str] = set()
        while cursor < len(queue):
            key = queue[cursor]
            cursor += 1
            visited.add(key)
            for target in adjacency[key]:
                depth[target] = max(depth.get(target, 0), depth[key] + 1)
                indegree[target] -= 1
                if indegree[target] == 0:
                    queue.append(target)
        next_depth = max(depth.values(), default=0) + 1
        for key in order:
            if key not in visited:
                depth[key] = next_depth
                next_depth += 1
        return depth

    def _measure(self, avail_width: float, direction: str) -> tuple[dict[str, _Node], dict[str, int], float, float]:
        measured: dict[str, _Node] = {}
        max_box_width = min(126.0, max(80.0, avail_width / 3.2))
        for key, label in self.nodes.items():
            para = Paragraph(_inline(label, {}), STYLES["diagram_label"])
            para_width = max_box_width - 14
            text_width, text_height = para.wrap(para_width, 120)
            box_width = max(78, min(max_box_width, text_width + 14))
            measured[key] = _Node(key, label, para, box_width, max(30, text_height + 13))
        depth = self._depths()
        groups: dict[int, list[str]] = {}
        for key in self.nodes:
            groups.setdefault(depth[key], []).append(key)
        gap = 16.0
        if direction == "LR":
            group_widths = [max(measured[key].width for key in keys) for keys in groups.values()]
            width = sum(group_widths) + gap * max(0, len(group_widths) - 1)
            height = max((sum(measured[key].height for key in keys) + 11 * max(0, len(keys) - 1) for keys in groups.values()), default=32)
        else:
            width = max((sum(measured[key].width for key in keys) + gap * max(0, len(keys) - 1) for keys in groups.values()), default=80)
            height = sum(max(measured[key].height for key in keys) for keys in groups.values()) + gap * max(0, len(groups) - 1)
        return measured, depth, width, height

    def wrap(self, availWidth: float, availHeight: float) -> tuple[float, float]:
        direction = self.direction
        measured, depth, width, height = self._measure(availWidth, direction)
        if direction == "LR" and width > availWidth:
            direction = "TB"
            measured, depth, width, height = self._measure(availWidth, direction)
        # Keep the figure compact enough for a page while retaining the source graph.
        if height > max(520, availHeight - 35):
            direction = "TB"
            measured, depth, width, height = self._measure(availWidth, direction)
        self.width = availWidth
        self.height = height + 8
        self._layout = {"direction": direction, "nodes": measured, "depth": depth}
        return self.width, self.height

    def draw(self) -> None:
        layout = self._layout
        direction = str(layout["direction"])
        measured: dict[str, _Node] = layout["nodes"]  # type: ignore[assignment]
        depth: dict[str, int] = layout["depth"]  # type: ignore[assignment]
        groups: dict[int, list[str]] = {}
        for key in self.nodes:
            groups.setdefault(depth[key], []).append(key)
        group_keys = sorted(groups)
        positions: dict[str, tuple[float, float]] = {}
        margin_y = 4
        gap = 16.0

        if direction == "LR":
            layer_widths = [max(measured[key].width for key in groups[d]) for d in group_keys]
            total_width = sum(layer_widths) + gap * max(0, len(layer_widths) - 1)
            x = max(0, (self.width - total_width) / 2)
            for d, layer_width in zip(group_keys, layer_widths):
                keys = groups[d]
                total_height = sum(measured[key].height for key in keys) + 11 * max(0, len(keys) - 1)
                y = margin_y + max(0, (self.height - 8 - total_height) / 2)
                for key in keys:
                    node = measured[key]
                    positions[key] = (x + (layer_width - node.width) / 2, y)
                    y += node.height + 11
                x += layer_width + gap
        else:
            total_height = sum(max(measured[key].height for key in groups[d]) for d in group_keys) + gap * max(0, len(group_keys) - 1)
            y = margin_y + max(0, (self.height - 8 - total_height) / 2) + total_height
            for d in group_keys:
                keys = groups[d]
                layer_height = max(measured[key].height for key in keys)
                y -= layer_height
                total_width = sum(measured[key].width for key in keys) + gap * max(0, len(keys) - 1)
                x = max(0, (self.width - total_width) / 2)
                for key in keys:
                    node = measured[key]
                    positions[key] = (x, y + (layer_height - node.height) / 2)
                    x += node.width + gap
                y -= gap

        canvas = self.canv
        canvas.setStrokeColor(LINK)
        canvas.setFillColor(LINK)
        canvas.setLineWidth(0.9)
        for source, target in self.edges:
            if source not in positions or target not in positions:
                continue
            sx, sy = positions[source]
            tx, ty = positions[target]
            s_node, t_node = measured[source], measured[target]
            s_center = (sx + s_node.width / 2, sy + s_node.height / 2)
            t_center = (tx + t_node.width / 2, ty + t_node.height / 2)
            if direction == "LR":
                start = (sx + s_node.width, s_center[1])
                end = (tx, t_center[1])
            else:
                start = (s_center[0], sy)
                end = (t_center[0], ty + t_node.height)
            canvas.line(start[0], start[1], end[0], end[1])
            angle = math.atan2(end[1] - start[1], end[0] - start[0])
            size = 5
            p1 = (end[0] - size * math.cos(angle - 0.45), end[1] - size * math.sin(angle - 0.45))
            p2 = (end[0] - size * math.cos(angle + 0.45), end[1] - size * math.sin(angle + 0.45))
            path = canvas.beginPath()
            path.moveTo(end[0], end[1])
            path.lineTo(p1[0], p1[1])
            path.lineTo(p2[0], p2[1])
            path.close()
            canvas.drawPath(path, fill=1, stroke=0)
        for key, node in measured.items():
            x, y = positions[key]
            canvas.setFillColor(colors.white)
            canvas.setStrokeColor(NAVY)
            canvas.setLineWidth(0.9)
            canvas.roundRect(x, y, node.width, node.height, 4, stroke=1, fill=1)
            _, text_height = node.paragraph.wrap(node.width - 12, node.height - 6)
            node.paragraph.drawOn(canvas, x + 6, y + max(3, (node.height - text_height) / 2))


def _parse_mermaid(lines: list[str]) -> TopologyFlowable | None:
    direction = "TB"
    nodes: dict[str, str] = {}
    edges: list[tuple[str, str]] = []
    found_flow = False
    for original in lines:
        line = original.strip()
        if not line or line.startswith("%%"):
            continue
        start = re.match(r"^(?:flowchart|graph)\s+(TB|TD|BT|LR|RL)\b", line, re.I)
        if start:
            found_flow = True
            direction = start.group(1).upper()
            if direction in {"TD", "BT"}:
                direction = "TB"
            elif direction == "RL":
                direction = "LR"
            line = line[start.end() :].strip()
            if not line:
                continue
        if line.startswith(("subgraph", "class ", "classDef ", "style ", "linkStyle ", "direction ")) or line == "end":
            return None
        if "|" in line:
            return None
        parts = ARROW_RE.split(line)
        parsed_parts: list[str] = []
        for part in parts:
            match = NODE_RE.fullmatch(part)
            if not match:
                return None
            key = match.group(1)
            label = next((value for value in match.groups()[1:] if value is not None), None) or key
            parsed_parts.append(key)
            nodes.setdefault(key, label)
        for left, right in zip(parsed_parts, parsed_parts[1:]):
            edges.append((left, right))
    if not found_flow or not nodes or len(nodes) > 22:
        return None
    return TopologyFlowable(nodes, edges, direction)


def _fenced_code(lines: list[str], language: str, anchors: dict[str, str]) -> Flowable:
    if language.casefold() in {"mermaid", "mmd"}:
        diagram = _parse_mermaid(lines)
        if diagram:
            return diagram
    # Preformatted retains leading spaces, which matter in ASCII network sketches.
    # Consolas is fixed-width; 96 characters fit comfortably in the A4 text frame.
    return Preformatted("\n".join(_ascii_dashes(line) for line in lines), STYLES["code"], maxLineLength=96)


def _parse_frontmatter(lines: list[str]) -> tuple[list[str], dict[str, str]]:
    if not lines or lines[0].strip() != "---":
        return lines, {}
    end = next((i for i in range(1, len(lines)) if lines[i].strip() == "---"), None)
    if end is None:
        return lines, {}
    metadata: dict[str, str] = {}
    for line in lines[1:end]:
        match = re.match(r"^([A-Za-z_-]+):\s*(.*?)\s*$", line)
        if match:
            metadata[match.group(1).casefold()] = match.group(2).strip("\"'")
    return lines[end + 1 :], metadata


def _line_is_block_start(lines: list[str], index: int) -> bool:
    line = lines[index]
    stripped = line.strip()
    if not stripped:
        return True
    if re.match(r"^\s{0,3}#{1,6}\s+", line) or stripped.startswith("```"):
        return True
    if re.match(r"^\s{0,3}(?:---+|___+|\*\*\*+)\s*$", line) or re.match(r"^\s*>", line):
        return True
    if re.match(r"^\s*(?:[-+*]|\d+[.)])\s+", line):
        return True
    return index + 1 < len(lines) and "|" in line and _is_table_delimiter(lines[index + 1])


def _build_story(source: str, fallback_title: str) -> tuple[list[Flowable], str, list[str], int, int]:
    lines, metadata = _parse_frontmatter(source.replace("\r\n", "\n").replace("\r", "\n").split("\n"))
    anchors, heading_lines = _heading_destinations(lines)
    story: list[Flowable] = []
    title_text = metadata.get("title", "")
    if not title_text:
        for line in lines:
            match = re.match(r"^\s{0,3}#\s+(.+?)\s*#*\s*$", line)
            if match:
                title_text = _plain_markdown(match.group(1))
                break
    if not title_text:
        title_text = fallback_title
        story.extend([Paragraph(_inline(title_text, anchors), STYLES["title"]), Paragraph(STATUS_LINE, STYLES["status"])])

    used_status = False
    heading_texts: list[str] = []
    source_link_count = len(re.findall(r"\[[^\]]+\]\((?:https?://|mailto:|#)[^)]+\)", source)) + len(re.findall(r"https?://[^\s<>]+", source))
    source_table_count = 0
    index = 0
    first_h1_used = False
    while index < len(lines):
        line = lines[index]
        stripped = line.strip()
        if not stripped:
            index += 1
            continue
        if stripped.startswith("```"):
            fence = len(stripped) - len(stripped.lstrip("`"))
            language = stripped[fence:].strip().casefold()
            block: list[str] = []
            index += 1
            closing = "`" * fence
            while index < len(lines) and not lines[index].strip().startswith(closing):
                block.append(lines[index])
                index += 1
            if index < len(lines):
                index += 1
            flowable = _fenced_code(block, language, anchors)
            if isinstance(flowable, TopologyFlowable):
                story.extend([flowable, Spacer(1, 4)])
            else:
                story.append(flowable)
            continue

        heading = re.match(r"^\s{0,3}(#{1,6})\s+(.+?)\s*#*\s*$", line)
        if heading:
            level = len(heading.group(1))
            text = heading.group(2)
            text = re.sub(r"\s+\{#[A-Za-z0-9_-]+\}\s*$", "", text)
            clean_title = _plain_markdown(text)
            destination = heading_lines.get(index, _slug(text))
            if level == 1 and not first_h1_used:
                first_h1_used = True
                title_text = _plain_markdown(text)
                story.append(Paragraph(f'<a name="{html.escape(destination, quote=True)}"/>{_inline(text, anchors)}', STYLES["title"]))
                if not used_status:
                    story.append(Paragraph(STATUS_LINE, STYLES["status"]))
                    used_status = True
            else:
                style = STYLES["h2"] if level <= 2 else STYLES["h3"] if level == 3 else STYLES["h4"]
                story.append(Paragraph(f'<a name="{html.escape(destination, quote=True)}"/>{_inline(text, anchors)}', style))
            heading_texts.append(clean_title)
            index += 1
            continue

        if re.match(r"^\s{0,3}(?:---+|___+|\*\*\*+)\s*$", line):
            story.extend([Spacer(1, 2), Paragraph("", STYLES["body"]), Spacer(1, 2)])
            index += 1
            continue

        if line.strip().startswith("|") and index + 1 < len(lines) and _is_table_delimiter(lines[index + 1]):
            table_lines = [line]
            index += 2
            while index < len(lines) and lines[index].strip() and "|" in lines[index]:
                table_lines.append(lines[index])
                index += 1
            rows = [_split_table_row(row) for row in table_lines]
            if rows:
                story.append(_table_flowable(rows, CONTENT_WIDTH, anchors))
                source_table_count += 1
            continue

        if re.match(r"^\s*>", line):
            quote_lines: list[str] = []
            while index < len(lines) and re.match(r"^\s*>", lines[index]):
                quote_lines.append(re.sub(r"^\s*>\s?", "", lines[index]))
                index += 1
            quote_text = " ".join(q.strip() for q in quote_lines)
            if quote_text.startswith("[!WARNING]"):
                quote_text = "Attention - " + quote_text[len("[!WARNING]") :].strip()
            elif quote_text.startswith("[!NOTE]"):
                quote_text = "À noter - " + quote_text[len("[!NOTE]") :].strip()
            elif quote_text.startswith("[!IMPORTANT]"):
                quote_text = "Important - " + quote_text[len("[!IMPORTANT]") :].strip()
            story.append(Paragraph(_inline(quote_text, anchors), STYLES["quote"]))
            continue

        if re.match(r"^\s*(?:[-+*]|\d+[.)])\s+", line):
            ordered = bool(re.match(r"^\s*\d+[.)]\s+", line))
            items: list[str] = []
            while index < len(lines):
                item = re.match(r"^\s*(?:[-+*]|\d+[.)])\s+(.*)$", lines[index])
                if not item or bool(re.match(r"^\s*\d+[.)]\s+", lines[index])) != ordered:
                    break
                items.append(item.group(1))
                index += 1
            for number, item in enumerate(items, start=1):
                prefix = f"{number}." if ordered else "•"
                story.append(Paragraph(f"{prefix}&nbsp;&nbsp;{_inline(item, anchors)}", STYLES["bullet"]))
            story.append(Spacer(1, 2))
            continue

        paragraph_lines = [line]
        index += 1
        while index < len(lines) and not _line_is_block_start(lines, index):
            paragraph_lines.append(lines[index])
            index += 1
        rendered_parts = []
        for part in paragraph_lines:
            hard_break = part.endswith("  ")
            rendered_parts.append(_inline(part.rstrip(), anchors))
            if hard_break:
                rendered_parts.append("<br/>")
            else:
                rendered_parts.append(" ")
        story.append(Paragraph("".join(rendered_parts).rstrip(), STYLES["body"]))

    if not first_h1_used and title_text:
        story.insert(0, Paragraph(_inline(title_text, anchors), STYLES["title"]))
        story.insert(1, Paragraph(STATUS_LINE, STYLES["status"]))
    elif not used_status:
        story.insert(1 if story else 0, Paragraph(STATUS_LINE, STYLES["status"]))
    return story, title_text, heading_texts, source_link_count, source_table_count


def _draw_footer(title: str):
    def draw(canvas, document) -> None:
        canvas.saveState()
        canvas.setTitle(title)
        canvas.setAuthor("Virtualisation et Cloud - guides de laboratoire")
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.55)
        y = 12 * mm
        canvas.line(LEFT_MARGIN, y + 6, PAGE_WIDTH - RIGHT_MARGIN, y + 6)
        canvas.setFillColor(MUTED)
        canvas.setFont(FAMILY, 8)
        canvas.drawString(LEFT_MARGIN, y - 1, "Virtualisation et Cloud | Document proposé")
        canvas.drawRightString(PAGE_WIDTH - RIGHT_MARGIN, y - 1, f"Page {document.page}")
        canvas.restoreState()
    return draw


def _make_pdf(source_path: Path, output_path: Path) -> dict[str, object]:
    source = source_path.read_text(encoding="utf-8-sig")
    story, title, headings, source_link_count, table_count = _build_story(source, source_path.stem.replace("_", " "))
    output_path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=PAGE_SIZE,
        rightMargin=RIGHT_MARGIN,
        leftMargin=LEFT_MARGIN,
        topMargin=TOP_MARGIN,
        bottomMargin=BOTTOM_MARGIN,
        title=title,
        author="Virtualisation et Cloud - guides de laboratoire",
        subject="Document de laboratoire proposé - approbation requise",
        pageCompression=1,
        allowSplitting=1,
    )
    footer = _draw_footer(title)
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    return {
        "source": str(source_path.relative_to(ROOT)),
        "output": str(output_path.relative_to(ROOT)),
        "title": title,
        "headings": headings,
        "source_links": source_link_count,
        "source_tables": table_count,
        "bytes": output_path.stat().st_size,
    }


def _normalized(text: str) -> str:
    text = unicodedata.normalize("NFKC", text).casefold()
    return re.sub(r"\s+", " ", text).strip()


def _validate_pdf(item: dict[str, object]) -> dict[str, object]:
    path = ROOT / str(item["output"])
    if not path.is_file() or path.stat().st_size <= 1000:
        raise AssertionError(f"PDF is missing or unexpectedly small: {path}")
    reader = PdfReader(str(path))
    if reader.is_encrypted:
        raise AssertionError(f"Generated PDF is encrypted: {path.name}")
    if not reader.pages:
        raise AssertionError(f"Generated PDF has no pages: {path.name}")
    page_texts: list[str] = []
    page_sizes: list[tuple[float, float]] = []
    link_annotations = 0
    for page in reader.pages:
        page_text = page.extract_text() or ""
        if len(page_text.strip()) < 20:
            raise AssertionError(f"A page has insufficient extractable text: {path.name}, page {len(page_texts)+1}")
        page_texts.append(page_text)
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)
        page_sizes.append((width, height))
        for annotation in page.get("/Annots", []):
            obj = annotation.get_object()
            if obj.get("/Subtype") == "/Link":
                link_annotations += 1

    source = (ROOT / str(item["source"])).read_text(encoding="utf-8-sig")
    full_text = _normalized("\n".join(page_texts))
    required = [STATUS_LINE, str(item["title"])]
    required.extend(str(value) for value in item["headings"] if len(str(value)) >= 4)
    missing = [marker for marker in required if _normalized(marker) not in full_text]
    if missing:
        raise AssertionError(f"Text markers missing from {path.name}: {missing}")
    if re.search(r"(?m)^\s*(?:bash|sh|shell|powershell|text|python)\s*$", "\n".join(page_texts), re.I):
        raise AssertionError(f"A fenced-code language label leaked into visible text: {path.name}")
    if int(item["source_links"]) and link_annotations == 0:
        raise AssertionError(f"Source has link targets but generated PDF has no link annotations: {path.name}")

    windows_command_markers: list[str] = []
    if Path(str(item["source"])).name == "MACHINE_B.md":
        windows_command_markers = [
            r"net use Z: \\10.77.30.10\projet /user:alice *",
            r"'version initiale' | Set-Content Z:\preuve.txt",
            r"Get-Content Z:\preuve.txt",
            r"net use \\10.77.30.10\projet /delete",
        ]
        missing_commands = [command for command in windows_command_markers if _normalized(command) not in full_text]
        if missing_commands:
            raise AssertionError(f"Windows UNC/drive commands did not survive PDF text extraction: {missing_commands}")

    chars_outside = 0
    try:
        import pdfplumber

        with pdfplumber.open(str(path)) as pdf:
            for page in pdf.pages:
                width, height = page.width, page.height
                for char in page.chars:
                    epsilon = 0.5
                    if char["x0"] < -epsilon or char["x1"] > width + epsilon or char["top"] < -epsilon or char["bottom"] > height + epsilon:
                        chars_outside += 1
    except Exception as error:
        raise AssertionError(f"Could not check PDF text bounds for {path.name}: {error}") from error
    if chars_outside:
        raise AssertionError(f"Found {chars_outside} PDF characters outside page bounds in {path.name}")

    return {
        "pages": len(reader.pages),
        "bytes": path.stat().st_size,
        "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
        "links": link_annotations,
        "source_links": int(item["source_links"]),
        "tables": int(item["source_tables"]),
        "heading_markers": len(item["headings"]),
        "required_markers": len(required),
        "page_sizes_pt": page_sizes,
        "chars_outside_page": chars_outside,
        "source_text_markers": [STATUS_LINE, str(item["title"]), *[str(h) for h in item["headings"] if len(str(h)) >= 4]],
        "windows_command_markers": windows_command_markers,
    }


def _make_contact_sheet(pdf_path: Path) -> dict[str, object]:
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    pdf = pdfium.PdfDocument(str(pdf_path))
    page_count = len(pdf)
    if page_count == 0:
        raise AssertionError(f"Cannot preview zero-page PDF: {pdf_path.name}")
    columns = 3
    thumb_width = 280
    padding = 14
    label_height = 24
    thumbs: list[Image.Image] = []
    page_char_counts: list[int] = []
    reader = PdfReader(str(pdf_path))
    for index in range(page_count):
        page = pdf[index]
        bitmap = page.render(scale=0.62)
        rendered = bitmap.to_pil().convert("RGB")
        width = thumb_width
        height = round(rendered.height * width / rendered.width)
        thumb = rendered.resize((width, height), Image.Resampling.LANCZOS)
        canvas = Image.new("RGB", (thumb_width, height + label_height), "white")
        canvas.paste(thumb, (0, label_height))
        draw = ImageDraw.Draw(canvas)
        draw.text((5, 4), f"Page {index + 1}", fill="#52616A")
        thumbs.append(canvas)
        page_char_counts.append(len((reader.pages[index].extract_text() or "").strip()))
        bitmap.close()
        rendered.close()
        thumb.close()
        page.close()
    pdf.close()

    rows = math.ceil(page_count / columns)
    cell_height = max(image.height for image in thumbs)
    sheet = Image.new(
        "RGB",
        (columns * thumb_width + (columns + 1) * padding, rows * cell_height + (rows + 1) * padding),
        "#E7ECEF",
    )
    for index, thumb in enumerate(thumbs):
        x = padding + (index % columns) * (thumb_width + padding)
        y = padding + (index // columns) * (cell_height + padding)
        sheet.paste(thumb, (x, y))
        thumb.close()
    contact_path = PREVIEW_DIR / f"{pdf_path.stem}_contact.png"
    sheet.save(contact_path, optimize=True)
    sheet.close()

    key_pages = sorted({0, max(range(page_count), key=lambda i: page_char_counts[i]), page_count - 1})
    pdf = pdfium.PdfDocument(str(pdf_path))
    key_paths = []
    for index in key_pages:
        page = pdf[index]
        rendered = page.render(scale=1.45).to_pil().convert("RGB")
        image_path = PREVIEW_DIR / f"{pdf_path.stem}_p{index + 1:02d}.png"
        rendered.save(image_path, optimize=True)
        rendered.close()
        page.close()
        key_paths.append(str(image_path.relative_to(ROOT)))
    pdf.close()
    return {
        "contact_sheet": str(contact_path.relative_to(ROOT)),
        "key_page_images": key_paths,
        "rendered_pages": page_count,
        "densest_page": max(range(page_count), key=lambda i: page_char_counts[i]) + 1,
    }


def build_all() -> list[dict[str, object]]:
    missing_sources = [str(source) for source, _ in GUIDES if not (ROOT / source).is_file()]
    if missing_sources:
        raise FileNotFoundError("Source Markdown not ready: " + ", ".join(missing_sources))
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    results: list[dict[str, object]] = []
    for source_relative, output_name in GUIDES:
        result = _make_pdf(ROOT / source_relative, OUTPUT_DIR / output_name)
        checks = _validate_pdf(result)
        previews = _make_contact_sheet(OUTPUT_DIR / output_name)
        results.append({**result, **checks, **previews})
    return results


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--json", action="store_true", help="Print concise machine-readable generation and validation results.")
    args = parser.parse_args()
    try:
        results = build_all()
    except Exception as error:
        print(f"PDF build failed: {error}", file=sys.stderr)
        return 1
    if args.json:
        import json

        print(json.dumps(results, ensure_ascii=False, indent=2))
    else:
        for result in results:
            print(
                f"{result['output']}: {result['pages']} pages, {result['bytes']} bytes, "
                f"SHA-256 {result['sha256']}, {result['links']} links, contact {result['contact_sheet']}"
            )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
