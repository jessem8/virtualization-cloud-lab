// Live presenter controller: four sections, hash routing, one enter() contract.
import {gsap} from 'gsap';
import {createScene} from './scene.mjs';
import {scenarios} from './scenarios.mjs';
import {sections, proofs} from './sections.mjs';
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
  const f = flows[sc.path.flow];
  return [...f.steps.slice(sc.path.from, sc.path.to + 1), ...(sc.path.extra || [])];
}
const reduced = () => motionQuery.matches;

// ---------- routing ----------
function parseHash() {
  const [id, n] = location.hash.replace(/^#/, '').split('/');
  const s = sections.findIndex(x => x.id === id);
  if (s < 0) return {section: -1, scene: 0};
  const k = Math.min(Math.max((parseInt(n, 10) || 1) - 1, 0), sections[s].scenes.length - 1);
  return {section: s, scene: k};
}
function hashFor(s, k) {return s < 0 ? '#' : '#' + sections[s].id + (k > 0 ? '/' + (k + 1) : '');}
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
  if ($('evidence').open) $('evidence').close();
  $('details').open = false;
  view = {section: s, scene: k};
  steps = []; flow = null; pathIndex = -1; playing = false;
  scene?.resetAll();
  const home = s < 0;
  $('home').hidden = !home;
  document.body.classList.toggle('at-home', home);
  if (!home) {
    const sc = sections[s].scenes[k];
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
          onStep: i => {if (!live()) return; pathIndex = i; if (map2d) renderMap();},
          onDone: () => {if (!live()) return; playing = false; pathIndex = steps.length - 1; syncBar(); if (map2d) renderMap();}});
      } else pathIndex = steps.length - 1;
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
    $('details').hidden = true; $('proofs').hidden = true; $('replay').hidden = true;
    return;
  }
  const sec = sections[s], sc = sec.scenes[k], last = k === sec.scenes.length - 1;
  $('position').textContent = `Section ${s + 1}/4 · Étape ${k + 1}/${sec.scenes.length}`;
  $('scene-title').textContent = sc.title;
  $('scene-line').textContent = sc.line;
  sec.scenes.forEach((x, i) => {
    const d = el('button', 'dot'); d.type = 'button';
    d.setAttribute('aria-label', `Étape ${i + 1} sur ${sec.scenes.length} : ${x.title}`);
    if (i === k) d.setAttribute('aria-current', 'step');
    d.addEventListener('click', () => go(s, i));
    dots.append(d);
  });
  $('prev').disabled = false;
  $('next').textContent = last ? (s < 3 ? 'Section suivante : ' + sections[s + 1].title : 'Retour aux sections') : 'Suivant';
  const list = $('details-list'); list.replaceChildren(...sc.details.map(t => el('li', t.startsWith('Limite') ? 'limit' : '', t)));
  $('details').hidden = false;
  $('proofs').hidden = !sc.proofs.length;
  $('proofs').textContent = sc.proofs.length > 1 ? `Preuves (${sc.proofs.length})` : 'Preuve';
  $('replay').hidden = !sc.path || !scene || map2d;
  $('replay').disabled = playing;
}
function next() {
  const {section: s, scene: k} = view;
  if (s < 0) return go(0, 0);
  if (k < sections[s].scenes.length - 1) return go(s, k + 1);
  go(s < 3 ? s + 1 : -1, 0);
}
function prev() {
  const {section: s, scene: k} = view;
  if (s < 0) return;
  if (k > 0) return go(s, k - 1);
  if (s > 0) return go(s - 1, sections[s - 1].scenes.length - 1);
  go(-1, 0);
}

// ---------- 2D map ----------
function renderMap() {
  if (!model) return;
  const sc = view.section >= 0 ? sections[view.section].scenes[view.scene] : null;
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
    if (n.next) body.append(el('h3', '', 'Limite'), el('p', '', n.next));
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
  const sc = sections[view.section]?.scenes[view.scene];
  if (!sc?.proofs.length) return;
  evidence = sc.proofs.map(id => proofs[id]).filter(Boolean).slice(0, 2);
  evidenceIndex = 0; showEvidence(); $('evidence').showModal();
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
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || $('evidence').open) return;
    if (e.target.closest?.('input,select,textarea')) return;
    if (e.key === 'ArrowRight') {e.preventDefault(); next();}
    else if (e.key === 'ArrowLeft') {e.preventDefault(); prev();}
    else if (e.key === 'f' || e.key === 'F') {e.preventDefault(); toggleFullscreen();}
    else if (e.key === 'Escape' && infoId) closeInfo();
  });
  document.addEventListener('fullscreenchange', () => {$('fullscreen').textContent = document.fullscreenElement ? 'Quitter le plein écran' : 'Plein écran';});
  motionQuery.addEventListener?.('change', () => {scene?.setReduced(reduced()); enter(view.section, view.scene, {replay: false});});
  document.addEventListener('lab-webgl-lost', () => {scene?.pause(); scene?.setVisible(false); scene = null; $('fallback').hidden = false; setMap(true);});
}

async function boot() {
  buildHome(); bind();
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
    const sec = sections[view.section], sc = sec?.scenes[view.scene];
    return {view: view.section < 0 ? 'home' : 'section', section: sec?.id || null, sectionIndex: view.section + 1, scene: view.section < 0 ? 0 : view.scene + 1,
      scenes: sec?.scenes.length || 0, title: sc?.title || null, hash: location.hash, path: sc?.path ? sc.path.flow : null, pathStep: pathIndex + 1, pathLength: steps.length,
      playing, map2d, webgl: !!scene, reduced: reduced(), infoOpen: infoId, evidenceOpen: $('evidence').open, render: scene?.info() || null};
  },
  go: (section, n = 1) => go(sections.findIndex(s => s.id === section), n - 1)
};

boot().catch(err => {console.error(err); $('loading').textContent = 'Impossible de charger la topologie.';});
