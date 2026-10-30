// Live presenter controller: four sections, hash routing, one enter() contract.
import {gsap} from 'gsap';
import {createScene} from './scene.mjs';
import {scenarios} from './scenarios.mjs';
import {sections, proofs, scenarioSection, demos} from './sections.mjs';
import {security} from './security.mjs';
import {makeMap} from './map.mjs';
import {iconElement} from './icons.mjs';

const $ = id => document.getElementById(id);
const params = new URLSearchParams(location.search);
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
const flows = Object.fromEntries(scenarios.map(f => [f.id, f]));
const el = (tag, cls, text) => {const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e;};

let model = null, scene = null, nav = 0;
let view = {section: -1, scene: 0};
let steps = [], flow = null, pathIndex = -1, playing = false, map2d = false, infoId = null, infoReturn = null;
let evidence = [], evidenceIndex = 0;

function pathSteps(sc) {
  if (!sc.path) return [];
  if (sc.path.steps) return sc.path.steps;
  const f = flows[sc.path.flow];
  return [...f.steps.slice(sc.path.from, sc.path.to + 1), ...(sc.path.extra || [])];
}
const reduced = () => motionQuery.matches;
// Sections 0-3 are the talk; index 4 is the blocked-scenarios track (#scenarios/n).
const ALL = [...sections, scenarioSection], SCEN = 4;
let paused = false;

// ---------- routing ----------
function parseHash() {
  const [id, n] = location.hash.replace(/^#/, '').split('/');
  const s = ALL.findIndex(x => x.id === id);
  if (s < 0) return {section: -1, scene: 0};
  const k = Math.min(Math.max((parseInt(n, 10) || 1) - 1, 0), ALL[s].scenes.length - 1);
  return {section: s, scene: k};
}
function hashFor(s, k) {return s < 0 ? '#' : '#' + ALL[s].id + (k > 0 ? '/' + (k + 1) : '');}
function go(s, k) {
  const target = hashFor(s, k);
  if (location.hash === target || (s < 0 && !location.hash)) enter(s, k);
  else location.hash = target; // hashchange calls enter(); history keeps Back working.
}
function route() {const r = parseHash(); enter(r.section, r.scene);}

// ---------- enter(section, scene) ----------
function enter(s, k, {replay = true} = {}) {
  const token = ++nav;
  const live = () => token === nav;
  gsap.globalTimeline.getChildren(true, true, true).forEach(t => t.kill());
  closeInfo(false);
  hideTip();
  setPaused(false);
  if ($('evidence').open) $('evidence').close();
  $('details').open = false;
  view = {section: s, scene: k};
  steps = []; flow = null; pathIndex = -1; playing = false;
  scene?.resetAll();
  const home = s < 0;
  $('home').hidden = !home;
  document.body.classList.toggle('at-home', home);
  if (!home) {
    const sc = ALL[s].scenes[k];
    scene?.setMode(sc.mode || 'physical');
    if (sc.inspect) scene?.open(sc.inspect);
    if (sc.shot === 'overview') scene?.overview();
    if (sc.shot === 'focus') {scene?.highlight(sc.focus[0]); scene?.frame(sc.focus);}
    scene?.setFocus(sc.focus);
    if (sc.path) {
      steps = pathSteps(sc); flow = flows[sc.path.flow];
      const animate = replay && !reduced() && !map2d && !!scene;
      if (scene) {
        playing = animate;
        scene.playPath(steps, {flow, animate, isLive: live,
          onStep: i => {if (!live()) return; pathIndex = i; syncTag(); if (map2d) renderMap();},
          onDone: () => {if (!live()) return; playing = false; pathIndex = steps.length - 1; syncBar(); if (map2d) renderMap();}});
      } else pathIndex = steps.length - 1;
      syncTag();
    }
  }
  syncBar();
  renderMap();
}

// ---------- bars ----------
function syncBar() {
  const {section: s, scene: k} = view;
  document.querySelectorAll('#tabs button').forEach((b, i) => {if (i === s) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');});
  $('reset-section').disabled = s < 0;
  const dots = $('dots'); dots.replaceChildren();
  if (s < 0) {
    $('position').textContent = 'Quatre sections · 15 min';
    $('scene-title').textContent = 'Le laboratoire, en perspective';
    $('scene-line').textContent = 'Choisissez une section ou commencez par l’architecture.';
    $('prev').disabled = true;
    $('next').textContent = 'Commencer : ' + sections[0].title;
    $('details').hidden = true; $('proofs').hidden = true; $('replay').hidden = true; $('pause').hidden = true; $('tag-btn').hidden = true;
    document.querySelectorAll('#scenarios-btn').forEach(b => b.removeAttribute('aria-current'));
    return;
  }
  const sec = ALL[s], sc = sec.scenes[k], last = k === sec.scenes.length - 1;
  $('position').textContent = s === SCEN ? `Scénario ${k + 1}/${sec.scenes.length} · ${sc.evidence === 'datée' ? 'Preuve datée' : 'Règle appliquée'}` : `Section ${s + 1}/4 · Étape ${k + 1}/${sec.scenes.length}`;
  $('position').dataset.evidence = s === SCEN ? sc.evidence : '';
  $('scene-title').textContent = sc.title;
  $('scene-line').textContent = sc.line;
  sec.scenes.forEach((x, i) => {
    const d = el('button', 'dot'); d.type = 'button';
    d.setAttribute('aria-label', `${s === SCEN ? 'Scénario' : 'Étape'} ${i + 1} sur ${sec.scenes.length} : ${x.title}`);
    if (i === k) d.setAttribute('aria-current', 'step');
    d.addEventListener('click', () => go(s, i));
    dots.append(d);
  });
  $('prev').disabled = false;
  $('next').textContent = last ? (s < 3 ? 'Section suivante : ' + sections[s + 1].title : 'Retour aux sections') : 'Suivant';
  renderDetails(sc);
  $('details').hidden = false;
  syncTag();
  $('proofs').hidden = !sc.proofs.length;
  $('proofs').textContent = sc.proofs.length > 1 ? `Preuves (${sc.proofs.length})` : 'Preuve';
  $('replay').hidden = !sc.path || !scene || map2d;
  $('replay').disabled = playing;
  $('pause').hidden = !sc.path || !scene || map2d || reduced();
  $('pause').disabled = !playing && !paused;
  syncPause();
  document.querySelectorAll('#scenarios-btn').forEach(b => {if (s === SCEN) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');});
}
// Moves within the current path playback without re-entering the scene.
function stepTo(i) {
  ++nav; // invalidates callbacks of the playback that was running
  gsap.globalTimeline.getChildren(true, true, true).forEach(t => t.kill());
  hideTip(); setPaused(false);
  playing = false;
  pathIndex = Math.min(Math.max(i, 0), steps.length - 1);
  if (scene && !map2d) scene.showAt(steps, pathIndex, flow);
  syncBar(); renderMap();
}
function next() {
  const {section: s, scene: k} = view;
  if (s < 0) return go(0, 0);
  if (steps.length && !playing && pathIndex < steps.length - 1) return stepTo(pathIndex + 1);
  if (k < ALL[s].scenes.length - 1) return go(s, k + 1);
  go(s < 3 ? s + 1 : -1, 0);
}
function prev() {
  const {section: s, scene: k} = view;
  if (s < 0) return;
  if (steps.length && pathIndex > 0) return stepTo(pathIndex - 1);
  if (k > 0) return go(s, k - 1);
  if (s === SCEN) return go(-1, 0);
  if (s > 0) return go(s - 1, sections[s - 1].scenes.length - 1);
  go(-1, 0);
}

// ---------- 2D map ----------
function renderMap() {
  if (!model) return;
  const sc = view.section >= 0 ? ALL[view.section].scenes[view.scene] : null;
  const index = steps.length ? Math.max(pathIndex, 0) : 0;
  $('map2d').innerHTML = makeMap(model, steps, index, sc?.inspect || sc?.focus?.[0] || '');
  $('map2d').querySelectorAll('[data-id]').forEach(g => {
    g.addEventListener('click', () => openInfo(g.dataset.id));
    g.addEventListener('keydown', e => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault(); openInfo(g.dataset.id);}});
  });
}
function setMap(on) {
  map2d = on || !scene;
  $('map2d').hidden = !map2d;
  scene?.setVisible(!map2d);
  $('toggle-2d').setAttribute('aria-pressed', String(map2d));
  $('toggle-2d').textContent = map2d && scene ? 'Maquette 3D' : 'Plan 2D';
  enter(view.section, view.scene, {replay: false});
}

// ---------- info card ----------
function cardFor(id) {
  if (id.startsWith('host:')) {const h = model.hosts.find(h => h.id === id.slice(5)); return h && {name: h.name, icon: 'host', card: h.card, extra: null};}
  const n = model.nodes.find(n => n.id === id);
  return n && {name: n.name, icon: n.id, card: n.card, extra: n};
}
function openInfo(id) {
  const info = cardFor(id || '');
  if (!info) return;
  if (!infoId) infoReturn = document.activeElement;
  infoId = id;
  const p = $('info-panel'), {card} = info;
  $('info-icon').replaceChildren(iconElement(info.icon));
  $('info-location').textContent = card.location + ' · ' + card.type;
  $('info-title').textContent = info.name;
  $('info-role').textContent = card.role;
  $('info-purpose').textContent = card.purpose;
  $('info-config').replaceChildren(...card.config.map(row => {
    const i = row.indexOf(' : '), li = el('li');
    if (i > 0) li.append(el('span', '', row.slice(0, i)), el('strong', '', row.slice(i + 3))); else li.append(el('strong', '', row));
    return li;
  }));
  const more = $('info-more'), body = $('info-more-body'); more.open = false; body.replaceChildren();
  const n = info.extra;
  if (n) {
    if (n.interfaces?.length) {const t = el('table'); for (const r of n.interfaces) {const tr = el('tr'); r.forEach(c => tr.append(el('td', '', c))); t.append(tr);} body.append(el('h3', '', 'Interfaces'), t);}
    if (n.controls?.length) {const ul = el('ul'); ul.append(...n.controls.map(c => el('li', '', c))); body.append(el('h3', '', 'Contrôles'), ul);}
    if (n.evidence) body.append(el('h3', '', 'Preuves'), el('p', '', n.evidence));
    if (n.source) body.append(el('p', 'source', 'Sources : ' + n.source));
  }
  more.hidden = !n;
  p.hidden = false;
  scene?.highlight(id);
  $('info-close').focus();
}
function closeInfo(restore = true) {
  if (!infoId) return;
  infoId = null;
  $('info-panel').hidden = true;
  if (restore) {enter(view.section, view.scene, {replay: false}); infoReturn?.focus?.();}
}

// ---------- evidence ----------
function openEvidence() {
  const sc = ALL[view.section]?.scenes[view.scene];
  if (!sc?.proofs.length) return;
  evidence = sc.proofs.map(id => proofs[id]).filter(Boolean).slice(0, 2);
  evidenceIndex = 0; showEvidence(); $('evidence').showModal();
}
function openEvidenceAt(i) {openEvidence(); if (evidence[i]) {evidenceIndex = i; showEvidence();}
}
function showEvidence() {
  const item = evidence[evidenceIndex], img = $('evidence-image');
  $('evidence-title').textContent = item.title;
  $('evidence-caption').textContent = item.caption;
  $('evidence-scope').textContent = item.scope;
  $('evidence-missing').hidden = true; img.hidden = false;
  img.alt = item.caption;
  img.src = 'network-assets/evidence/' + item.image;
  $('evidence-count').textContent = evidence.length > 1 ? `${evidenceIndex + 1} / ${evidence.length}` : '';
  $('evidence-prev').hidden = $('evidence-next').hidden = evidence.length < 2;
  $('evidence-prev').disabled = evidenceIndex === 0;
  $('evidence-next').disabled = evidenceIndex === evidence.length - 1;
}
function stepEvidence(d) {const i = evidenceIndex + d; if (i >= 0 && i < evidence.length) {evidenceIndex = i; showEvidence();}}


// ---------- details: Contrôles + Preuves (+ command panels) ----------
function renderDetails(sc) {
  const body = $('details-body'); body.replaceChildren();
  const ul = el('ul'); ul.append(...sc.controls.map(t => el('li', '', t)));
  body.append(el('h3', '', 'Contrôles'), ul);
  if (sc.proofs.length) {
    const pl = el('ul', 'proof-list');
    sc.proofs.forEach((id, i) => {const p = proofs[id], b = el('button', 'proof-link'); b.type = 'button'; b.append(el('strong', '', p.title), el('span', '', p.scope)); b.addEventListener('click', () => {$('details').open = false; openEvidenceAt(i);}); const li = el('li'); li.append(b); pl.append(li);});
    body.append(el('h3', '', 'Preuves'), pl);
  }
  if (sc.demos?.length) body.append(el('h3', '', 'Commandes et sorties type'));
  for (const id of sc.demos || []) {
    const d = demos[id], box = el('figure', 'console');
    const head = el('figcaption'); head.append(el('span', 'demo-badge', 'Commande et sortie type'), el('strong', '', d.title));
    const pre = el('pre'); pre.append(el('code', 'cmd', d.cmd + '\n'), el('code', '', d.out));
    box.append(head, pre, el('small', '', 'Source : ' + d.source + '.'));
    body.append(box);
  }
}

// ---------- pause ----------
function setPaused(v) {
  paused = !!v;
  gsap.globalTimeline.paused(paused);
  scene?.setFrozen(paused);
  syncPause();
}
function syncPause() {
  const b = $('pause'); if (!b) return;
  b.setAttribute('aria-pressed', String(paused));
  b.textContent = paused ? 'Reprendre' : 'Pause';
}

// ---------- tag tooltip ----------
const TAGS = [
  [/sans tag|non tagu/i, 'Non tagué', 'Trame Ethernet ordinaire, sans en-tête 802.1Q. Le réseau ou le port d’accès définit son appartenance : CLIENTS et MGMT sont non tagués, et SW-B remet les trames sans tag à Ubuntu et au NAS.'],
  [/vlan ?20|tag ?20/i, 'Tagué · VLAN 20', 'Sur le trunk entre OPNsense et SW-B, la trame porte le tag 802.1Q 20 (SERVEURS). SW-B le retire sur le port d’accès d’Ubuntu.'],
  [/vlan ?30|tag ?30/i, 'Tagué · VLAN 30', 'Sur le trunk, la trame porte le tag 802.1Q 30 (STOCKAGE). SW-B le retire sur le port d’accès du NAS.'],
  [/tagu|802\.1q/i, 'Tagué', 'Un tag 802.1Q indique le VLAN de la trame. Il n’existe que sur le trunk VMnet12 entre les deux PC.']
];
let tipAnchor = null;
function showTip(text, anchor) {
  const t = TAGS.find(([re]) => re.test(text || ''));
  if (!t) return;
  const tip = $('tag-tip');
  $('tag-tip-title').textContent = t[1]; $('tag-tip-text').textContent = t[2];
  tip.hidden = false; tipAnchor = anchor || null;
  const r = (anchor || $('tag-btn')).getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
  tip.style.left = Math.round(Math.min(Math.max(8, r.left + r.width / 2 - w / 2), innerWidth - w - 8)) + 'px';
  tip.style.top = Math.round(r.top - h - 10 < 8 ? r.bottom + 10 : r.top - h - 10) + 'px';
}
function hideTip() {const tip = $('tag-tip'); if (tip && !tip.hidden) {tip.hidden = true; tipAnchor?.focus?.(); tipAnchor = null;}}
function syncTag() {
  const st = steps[Math.max(pathIndex, 0)], b = $('tag-btn');
  const text = st?.tag || (st?.link === 'clients' || st?.link === 'mgmt' ? 'Non tagué · ' + st.link.toUpperCase() : '');
  b.hidden = !text; b.textContent = text; b.dataset.tag = text;
}

// ---------- security page ----------
function buildSecurity() {
  const body = $('security-body');
  body.append(el('p', 'sec-intro', security.intro), el('h3', '', 'Risques de la virtualisation et réponses du laboratoire'));
  const grid = el('div', 'risk-grid');
  for (const r of security.risks) {const c = el('article', 'risk'); c.append(el('strong', '', r.risk), el('p', '', r.text), el('p', 'mitigation', r.mitigation)); grid.append(c);}
  body.append(grid, el('h3', '', 'Mesures en place'));
  const m = el('ul', 'measures'); m.append(...security.measures.map(t => el('li', '', t))); body.append(m);
  const sum = el('div', 'summary-grid');
  for (const s of security.summaries) {const c = el('section', 'summary'); const ul = el('ul'); ul.append(...s.items.map(t => el('li', '', t))); c.append(el('h3', '', s.title), ul); sum.append(c);}
  body.append(sum);
}

// ---------- fullscreen ----------
function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen?.();
  else document.documentElement.requestFullscreen?.().catch(() => {});
}

// ---------- boot ----------
function buildHome() {
  const tabs = $('tabs'), cards = $('home-cards');
  sections.forEach((sec, i) => {
    const t = el('button', 'tab'); t.type = 'button'; t.textContent = sec.title; t.addEventListener('click', () => go(i, 0)); tabs.append(t);
    const c = el('button', 'section-card'); c.type = 'button';
    c.append(el('span', 'card-index', String(i + 1)), el('strong', '', sec.title), el('span', 'card-summary', sec.summary), el('span', 'card-meta', `${sec.duration} · ${sec.scenes.length} étapes`));
    c.addEventListener('click', () => go(i, 0));
    cards.append(c);
  });
}
function bind() {
  $('home-btn').addEventListener('click', () => go(-1, 0));
  $('scenarios-btn').addEventListener('click', () => go(SCEN, 0));
  $('security-btn').addEventListener('click', () => {closeInfo(false); $('security').showModal();});
  $('security-close').addEventListener('click', () => $('security').close());
  $('security').addEventListener('click', e => {if (e.target === $('security')) $('security').close();});
  $('pause').addEventListener('click', () => setPaused(!paused));
  $('tag-btn').addEventListener('click', e => {e.stopPropagation(); $('tag-tip').hidden ? showTip($('tag-btn').dataset.tag, $('tag-btn')) : hideTip();});
  $('tag-tip-close').addEventListener('click', hideTip);
  document.addEventListener('lab-tag', e => showTip(e.detail.text, e.detail.el));
  document.addEventListener('click', e => {const t = e.target.closest?.('[data-tag]'); if (t && t.id !== 'tag-btn') {showTip(t.dataset.tag, t); return;} if (!e.target.closest?.('#tag-tip,#tag-btn,.packet-chip')) hideTip();});
  $('reset-section').addEventListener('click', () => view.section >= 0 && go(view.section, 0));
  $('fullscreen').addEventListener('click', toggleFullscreen);
  $('toggle-2d').addEventListener('click', () => setMap(!map2d));
  $('prev').addEventListener('click', prev);
  $('next').addEventListener('click', next);
  $('replay').addEventListener('click', () => enter(view.section, view.scene));
  $('proofs').addEventListener('click', openEvidence);
  $('info-close').addEventListener('click', () => closeInfo());
  $('evidence-close').addEventListener('click', () => $('evidence').close());
  $('evidence-prev').addEventListener('click', () => stepEvidence(-1));
  $('evidence-next').addEventListener('click', () => stepEvidence(1));
  $('evidence-image').addEventListener('error', () => {$('evidence-image').hidden = true; $('evidence-missing').hidden = false;});
  $('evidence').addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {e.preventDefault(); e.stopPropagation(); stepEvidence(1);}
    if (e.key === 'ArrowLeft') {e.preventDefault(); e.stopPropagation(); stepEvidence(-1);}
  });
  $('evidence').addEventListener('click', e => {if (e.target === $('evidence')) $('evidence').close();});
  addEventListener('hashchange', route);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('tag-tip').hidden) {e.preventDefault(); hideTip(); return;}
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || $('evidence').open || $('security').open) return;
    if (e.target.closest?.('input,select,textarea')) return;
    if (e.key === 'ArrowRight') {e.preventDefault(); next();}
    else if (e.key === 'ArrowLeft') {e.preventDefault(); prev();}
    else if (e.key === 'f' || e.key === 'F') {e.preventDefault(); toggleFullscreen();}
    else if ((e.key === 'p' || e.key === 'P') && !$('pause').hidden) {e.preventDefault(); setPaused(!paused);}
    else if (e.key === 'Escape' && infoId) closeInfo();
  });
  document.addEventListener('fullscreenchange', () => {$('fullscreen').textContent = document.fullscreenElement ? 'Quitter le plein écran' : 'Plein écran';});
  motionQuery.addEventListener?.('change', () => {scene?.setReduced(reduced()); enter(view.section, view.scene, {replay: false});});
  document.addEventListener('lab-webgl-lost', () => {scene?.pause(); scene?.setVisible(false); scene = null; $('fallback').hidden = false; setMap(true);});
}

async function boot() {
  buildHome(); buildSecurity(); bind();
  model = await (await fetch('network-assets/topology.json', {cache: 'no-store'})).json();
  const want2d = params.get('renderer') === '2d';
  if (!want2d) {
    try {scene = createScene(model, openInfo, {quality: params.get('quality') === 'high' ? 'high' : 'economy'}); scene.setReduced(reduced());}
    catch {scene = null; $('fallback').hidden = false;}
  }
  $('loading').hidden = true;
  if (!scene) {map2d = true; $('map2d').hidden = false; $('toggle-2d').disabled = true; $('toggle-2d').setAttribute('aria-pressed', 'true');}
  route();
}

window.labDiagram = {
  getState: () => {
    const sec = ALL[view.section], sc = sec?.scenes[view.scene];
    return {view: view.section < 0 ? 'home' : 'section', section: sec?.id || null, sectionIndex: view.section + 1, scene: view.section < 0 ? 0 : view.scene + 1,
      scenes: sec?.scenes.length || 0, title: sc?.title || null, hash: location.hash, path: sc?.path ? sc.path.flow : null, pathStep: pathIndex + 1, pathLength: steps.length, playing, paused, nav,
      playing, paused, tip: !$('tag-tip').hidden, securityOpen: $('security').open, map2d, webgl: !!scene, reduced: reduced(), infoOpen: infoId, evidenceOpen: $('evidence').open, render: scene?.info() || null};
  },
  go: (section, n = 1) => go(ALL.findIndex(s => s.id === section), n - 1)
};

boot().catch(err => {console.error(err); $('loading').textContent = 'Impossible de charger la topologie.';});
