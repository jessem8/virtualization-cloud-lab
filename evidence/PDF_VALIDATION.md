# PDF validation record

Generated on 2026-10-25 from the four final Markdown sources with `tools/build_guides.py`. The PDF skill's create marker was invoked once before the first PDF write (four PDF outputs). The final pages were rendered with the bundled `pypdfium2` runtime.

| Source | PDF | Pages | Bytes | SHA-256 |
|---|---|---:|---:|---|
| `BUILD_PLAN.md` | `Feuille_de_route_2_PC_1_jour.pdf` | 5 | 81,884 | `6126ea92217c7eefc5d9c44442175d15b3cb6071200f2d3ccb90e902e0ee6d77` |
| `docs/MACHINE_A.md` | `01_PC_A.pdf` | 4 | 77,365 | `c8d5b39e956cac42ab797ee16d39f09c866e38fa5204f12a2bc647b3fa419ec5` |
| `docs/MACHINE_B.md` | `02_PC_B.pdf` | 2 | 70,066 | `83c828c4e89a2bff180da619ef43d4fcf1bb6105397de378110ba782df69af9e` |
| `docs/LIAISON.md` | `03_Liaison_VMs.pdf` | 3 | 71,628 | `e1f12b7bd37db2890db43d910c00639abc547c4510dc9c0ca7ea95cc1ae600eb` |

## Checks performed

- All four PDFs are non-empty, open with `pypdf`, are not encrypted, and contain extractable text on every page.
- The document title, `PLAN PROPOSÉ - À VALIDER` status line, and every Markdown heading are present in extracted text for each PDF (14, 11, 9, and 9 required markers respectively).
- All 14 pages have A4 media boxes (595.2756 x 841.8898 pt). `pdfplumber` found zero text characters outside the page bounds in every file.
- The plan contains 12 clickable external reference links. No links are declared in the other three source files.
- Markdown tables (4, 2, 1, and 2 per source) render with wrapped cells and repeating headers.
- The PC B PowerShell command examples preserve four exact checks, including `\\10.77.30.10\projet`, `Z:\preuve.txt`, and `net use` paths. The commands were visually checked on page 2 of `02_PC_B.pdf`.
- Fenced code uses a fixed-width font and preserves indentation. The ASCII topology in the plan and liaison guide was checked at full-page scale; its source-defined branches and labels remain aligned.
- Every page was rendered. The complete contact sheets are `tmp/pdfs/Feuille_de_route_2_PC_1_jour_contact.png`, `tmp/pdfs/01_PC_A_contact.png`, `tmp/pdfs/02_PC_B_contact.png`, and `tmp/pdfs/03_Liaison_VMs_contact.png`. Full-page spot-check renders were removed after inspection; only the contact sheets remain in `tmp/pdfs/` for review.
- Visual review covered the all-page contact sheets and full-page samples of dense content and continuation pages. Headings, tables, code, footer, and page numbering are legible; no clipping or overlapping text was seen. The last page of the 5-page plan and the last page of the 3-page liaison guide are sparse continuation pages.

## Limits

These PDFs describe proposed work and retain the source's explicit unverified state. No VM, host network, VLAN, firewall rule, NAS, VPN, or application behavior was tested during PDF production. PDF validation does not approve the plan or authorize deployment.
