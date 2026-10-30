import {createScene} from './scene.mjs';
import {scenarios} from './scenarios.mjs';
import {chapters,proofs,presentationFlow} from './presentation.mjs';
import {makeMap} from './map.mjs';
import {iconElement} from './icons.mjs';
import {faults as faultList,simulate,describe} from './whatif.mjs';
import {createQuiz} from './quiz.mjs';
const $=id=>document.getElementById(id);
let model,scene=null,selected=null,mode='physical',flow=null,step=0,playing=false,timer=null,mapMode=false;
let showStoryDetails=false,quizMode=false,cardTimer=null,finaleTimer=null;
let presenting=true,presentationStep=0,evidenceItems=[],evidenceIndex=0;
const faults=new Set();
const quiz=createQuiz($('quiz'),()=>renderStory(true));
const reduced=$('reduce-motion');reduced.checked=matchMedia('(prefers-reduced-motion: reduce)').matches;
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
const button=(text,fn,kind)=>{const n=el('button',text,kind);n.type='button';n.addEventListener('click',fn);return n;};
function pause(){playing=false;clearTimeout(timer);timer=null;scene?.pause();$('play').replaceChildren(iconElement('play'),document.createTextNode('Lire le parcours'));$('play').setAttribute('aria-pressed','false');}
function syncStoryMode(){const active=flow?.id==='presentation',toggle=$('toggle-story-details');document.body.classList.toggle('guided-mode',active);if(!active){showStoryDetails=false;document.body.classList.remove('guided-details-open');}document.body.classList.toggle('guided-details-open',active&&showStoryDetails);toggle.hidden=!active;toggle.setAttribute('aria-expanded',String(active&&showStoryDetails));toggle.textContent=showStoryDetails?'Masquer les détails techniques':'Afficher les détails techniques';}
function syncSide(){const security=mode==='security'&&$('component-panel').hidden;$('security-panel').hidden=!security;document.querySelector('.lab-view').classList.toggle('has-side-panel',security||!$('component-panel').hidden);$('transport-strip').hidden=!!selected&&!selected.startsWith('link:');$('back-network').hidden=!selected;}
function modeView(value){pause();scene?.stop();if(!$('component-panel').hidden)closePanel();mode=value;scene?.setMode(value);document.querySelectorAll('[data-mode]').forEach(n=>n.setAttribute('aria-pressed',String(n.dataset.mode===value)));$('scene-hint').textContent=value==='physical'?'Cliquez sur un équipement pour l’ouvrir.':value==='logical'?'Suivez les connexions, sans changer la place des machines.':'Zones séparées, accès filtrés : choisissez un exemple à droite.';syncSide();if(flow)renderStory();else renderMap();}
function list(title,values){const section=el('section'),ul=el('ul');section.append(el('h3',title));values.forEach(t=>ul.append(el('li',t)));section.append(ul);return section;}
function factsGrid(rows){
const dl=el('dl',undefined,'fact-grid');
for(const [label,value] of rows){const row=el('div');row.append(el('dt',label),el('dd',value));dl.append(row);}
return dl;
}
const nodeProofs={};for(const s of presentationFlow.steps){const c=chapters.find(c=>c.id===s.module);if(!c)continue;for(const id of [s.node,s.inspect,s.from,s.to].filter(Boolean))nodeProofs[id]=[...new Set([...(nodeProofs[id]||[]),...c.proofs])];}
function fillPanel(id){
const hostId=id.startsWith('host:')?id.slice(5):null,n=model.nodes.find(n=>n.id===id),h=model.hosts.find(h=>h.id===hostId);
$('component-panel').hidden=false;$('component-icon').replaceChildren(iconElement(h?'host':id));
$('node-location').textContent=h?'Hôte physique':n.kind+' · PC '+n.host.toUpperCase();
$('node-title').textContent=h?h.name:n.name;
$('node-purpose').textContent=h?(h.id==='a'?'Contrôle les communications et héberge le poste de démonstration.':'Héberge la commutation, les services et le stockage.'):n.purpose;
const layers=$('component-layers');layers.replaceChildren();
if(h){layers.append(factsGrid([['Hyperviseur','VMware Workstation'],['Machines',h.id==='a'?'OPNsense · Windows':'Alpine · Ubuntu · TrueNAS'],['Mémoire physique',h.ram],['Rôle',h.id==='a'?'Accès et contrôle':'Services et données']]));}
else layers.append(factsGrid(n.facts||n.interfaces.slice(0,4).map(r=>[r[0],r.slice(1).join(' · ')])));
const out=$('component-details');out.replaceChildren();
const children=model.nodes.filter(v=>h?v.host===h.id&&!v.parent: v.parent===id);
if(children.length){const actions=el('div',undefined,'service-actions');for(const child of children)actions.append(button(child.name,()=>openComponent(child.id),'service-action'));out.append(actions);}
if(nodeProofs[id])out.append(button('Preuves associées',()=>openEvidence(nodeProofs[id]),'inline-action'));
if(h)return;
const tech=el('details');tech.append(el('summary','Configuration complète'));
const body=el('div',undefined,'technical-body');body.append(el('p',n.status,'state-note'),el('p',n.resources));
const table=el('table');for(const row of n.interfaces){const tr=el('tr');row.forEach(v=>tr.append(el('td',v)));table.append(tr);}
body.append(table,list('Protections documentées',n.controls),el('h3','Portée de la preuve'),el('p',n.evidence),el('p','Source : '+n.source,'source-note'));tech.append(body);out.append(tech);
}
function buildChapterNav(){
$('chapter-nav').replaceChildren(...chapters.map((c,i)=>{const b=button('',()=>chooseChapter(c.id),'chapter-button');b.dataset.chapter=c.id;b.append(el('span',String(i+1).padStart(2,'0'),'chapter-number'),el('span',c.title,'chapter-name'));b.setAttribute('aria-label','Chapitre '+(i+1)+' : '+c.title);return b;}));
}
function currentChapter(){return flow?.id==='presentation'?chapters.find(c=>c.id===flow.steps[step].module):null;}
function syncChapters(){
const current=currentChapter(),index=chapters.indexOf(current);
for(const b of $('chapter-nav').children){b.setAttribute('aria-current',b.dataset.chapter===current?.id?'step':'false');b.classList.toggle('done',index>=0&&chapters.findIndex(c=>c.id===b.dataset.chapter)<index);}
$('chapter-summary').textContent=current?'Chapitre '+(index+1)+' / 9':'9 chapitres · environ 15 min';
$('present-mode').setAttribute('aria-pressed',String(presenting));$('explore-mode').setAttribute('aria-pressed',String(!presenting));
$('show-evidence').setAttribute('aria-label',current?'Voir les preuves : '+current.title:'Voir les preuves du laboratoire');
}
function chooseChapter(id){
presenting=true;document.body.classList.add('presenting');document.body.classList.remove('exploring');toggleWhatIf(false);
if(flow?.id!=='presentation')chooseFlow('presentation');
const index=flow.steps.findIndex(s=>s.module===id);go(Math.max(0,index));syncChapters();
}
function setExperience(value){
if(presenting&&flow?.id==='presentation')presentationStep=step;
presenting=value;document.body.classList.toggle('presenting',value);document.body.classList.toggle('exploring',!value);
pause();toggleWhatIf(false);
if(value){const resume=presentationStep;chooseFlow('presentation');go(resume);}else{if(selected)closePanel();flow=null;step=0;scene?.reset();modeView('physical');renderStory();}
syncChapters();
}
function renderEvidence(){
const proof=evidenceItems[evidenceIndex],image=$('evidence-image');
$('evidence-empty').hidden=!!proof;image.hidden=!proof;
$('evidence-caption').textContent=proof?.caption||'';$('evidence-scope').textContent=proof?.scope||'';
$('evidence-count').textContent=proof?(evidenceIndex+1)+' / '+evidenceItems.length:'';
$('evidence-prev').disabled=evidenceIndex===0;$('evidence-next').disabled=evidenceIndex>=evidenceItems.length-1;
for(const b of $('evidence-list').children)b.setAttribute('aria-current',String(b.dataset.proof===proof?.id));
if(proof){image.alt=proof.caption;image.src='network-assets/evidence/'+proof.image;}
}
function openEvidence(ids=currentChapter()?.proofs||proofs.map(p=>p.id)){
pause();evidenceItems=ids.map(id=>proofs.find(p=>p.id===id)).filter(Boolean);evidenceIndex=0;
$('evidence-title').textContent='Preuves · '+(currentChapter()?.title||'laboratoire');
$('evidence-list').replaceChildren(...evidenceItems.map((p,i)=>{const b=button(p.title,()=>{evidenceIndex=i;renderEvidence();},'evidence-item');b.dataset.proof=p.id;return b;}));
renderEvidence();if(!$('evidence-dialog').open)$('evidence-dialog').showModal();
}
function renderOwnership(id){
const nav=$('ownership-trail');nav.replaceChildren(button('Réseau',globalView));if(id.startsWith('link:'))return;
const n=model.nodes.find(n=>n.id===id),host=id.startsWith('host:')?id.slice(5):n.host;
nav.append(el('span','›'),button('PC '+host.toUpperCase(),()=>openComponent('host:'+host)));
if(n?.parent)nav.append(el('span','›'),button('Ubuntu',()=>openComponent(n.parent)));
if(n)nav.append(el('span','›'),el('strong',n.name));
}
function fillLink(id){const l=model.links.find(l=>l.id===id);$('component-panel').hidden=false;$('component-icon').replaceChildren(iconElement('switch'));$('node-location').textContent=l.kind==='storage'?'Relation de stockage locale':'Connexion · '+(l.kind==='network'?'réseau':'service interne');$('node-title').textContent=l.label;$('node-purpose').textContent=l.kind==='storage'?'La base active reste dans un volume Ubuntu. Ce lien ne traverse ni le trunk ni le VLAN30.':l.id.startsWith('trunk')?'Les deux VLANs partagent un câble Ethernet. Chaque trame porte son tag802.1Q ; SW-B commute et OPNsense route.':l.label+' : les extrémités et le sens sont montrés dans la scène.';
$('component-layers').replaceChildren(...[[l.from,l.fromPort],[l.to,l.toPort]].map(([node,port])=>{const b=button('',()=>openComponent(node));b.append(iconElement(node),el('span',model.nodes.find(n=>n.id===node).name+' · '+port));return b;}));
$('component-details').replaceChildren(el('p',l.kind==='storage'?'Volume local Ubuntu · aucun tag réseau':l.id.startsWith('trunk')?'VMnet12 ↔ Ethernet A ↔ câble ↔ Ethernet B ↔ VMnet12 · VLAN'+l.zone+' tagué':l.label,'state-note'));
}
function syncPacketButton(open=!!scene?.packetOpen()){const b=$('open-packet'),visible=!!flow?.steps[step]?.link&&!selected&&!mapMode&&!quiz.awaiting()&&!!scene;b.hidden=!visible;b.setAttribute('aria-pressed',String(open));b.firstChild.textContent=open?'Refermer le paquet ':'Ouvrir le paquet ';}
function togglePacket(){if(!scene||mapMode)return;let open=false;if(!scene.packetOpen()){if(!scene.packetVisible())return;pause();open=scene.explodePacket(true);$('scene-hint').textContent='Paquet ouvert · chaque couche porte une information différente.';}else{scene.explodePacket(false);$('scene-hint').textContent='Suivez le paquet jusqu’au contrôle suivant.';}syncPacketButton(open);}
function syncQuality(){const q=scene?.quality()||'economy';$('quality').textContent='Qualité visuelle : '+(q==='high'?'haute':'économie');$('quality').setAttribute('aria-pressed',String(q==='high'));}
function quizEntries(){return flow?flow.steps.map((s,i)=>[flow.id+':'+i,s.quiz]).filter(([,q])=>q):[];}
function chapterCard(current){if(flow.id!=='presentation')return;const prev=flow.steps[step-1];if(prev&&prev.module===current.module)return;const ch=chapters.find(c=>c.id===current.module),card=$('chapter-card');card.querySelector('small').textContent='Chapitre '+(chapters.indexOf(ch)+1)+' / '+chapters.length;card.querySelector('strong').textContent=ch?.title||current.chapter;card.hidden=false;card.classList.remove('show');void card.offsetWidth;card.classList.add('show');clearTimeout(cardTimer);cardTimer=setTimeout(()=>{card.hidden=true;},reduced.checked?1600:2600);}
function finale(){clearTimeout(finaleTimer);if(!quizMode||!flow||step!==flow.steps.length-1)return;const entries=quizEntries();if(entries.length)finaleTimer=setTimeout(()=>{if(quizMode&&flow&&step===flow.steps.length-1)quiz.summary(quiz.score(entries));},900);}
function openComponent(id){if(id==='packet'){togglePacket();return;}const isLink=id.startsWith('link:');if(isLink?!model.links.some(l=>'link:'+l.id===id):id.startsWith('host:')?!model.hosts.some(h=>'host:'+h.id===id):!model.nodes.some(n=>n.id===id))return;pause();scene?.stop();selected=id;if(isLink){fillLink(id.slice(5));scene?.reset();scene?.finishView();scene?.inspectLink(id.slice(5));}else{fillPanel(id);scene?.open(id);}renderOwnership(id);syncSide();$('scene-hint').textContent='Vue fonctionnelle · le parcours est conservé pendant l’inspection.';renderMap();syncPacketButton();}
function closePanel(resetScene=true){$('component-panel').hidden=true;selected=null;if(resetScene){scene?.reset();scene?.finishView();if(flow)scene?.showStep(flow.steps,step,false,()=>{},flow,{hold:quizMode&&!!flow.steps[step].quiz&&!quiz.answered(flow.id+':'+step)});}syncSide();renderMap();syncPacketButton();}
function globalView(){pause();closePanel();scene?.stop();scene?.setMode(mode);$('scene-hint').textContent='Cliquez sur un équipement ou suivez un parcours.';renderStory();}
function renderMap(){if(!model)return;$('map2d').innerHTML=makeMap(model,flow?.steps||[],step,selected||'');$('map2d').querySelectorAll('[data-id]').forEach(g=>{g.addEventListener('click',()=>openComponent(g.dataset.id));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openComponent(g.dataset.id);}});});}
function mapView(value){mapMode=value;$('map2d').hidden=!value;scene?.setVisible(!value);$('toggle-2d').textContent=value?'Revenir à la maquette3D':'Afficher le plan2D';pause();if(scene?.packetOpen())scene.explodePacket(false);renderMap();syncPacketButton();$('options').open=false;}
function schedule(ms){clearTimeout(timer);if(playing)timer=setTimeout(()=>{if(step===flow.steps.length-1){pause();return;}step++;renderStory(true);},ms);}
function updateJourney(current){
const l=model.links.find(l=>l.id===current?.link),from=l?current.from:current?.node,to=l?current.to:null;
const name=id=>model.nodes.find(n=>n.id===id)?.name||'';
const pc=id=>model.nodes.find(n=>n.id===id)?.host?.toUpperCase()||'';
$('hop-from').textContent=from?name(from)+' · PC '+pc(from):'PC A · OPNsense';
$('hop-to').textContent=to?name(to)+' · PC '+pc(to):current?.decision?'Décision au point de contrôle':'PC B · Alpine SW-B';
$('hop-ingress').textContent=l?(l.from===from?l.fromPort:l.toPort):'VMnet12 → Ethernet A';
$('hop-egress').textContent=l?(l.to===to?l.toPort:l.fromPort):'Ethernet B → VMnet12';
if(current&&!l){const ingress=current.module==='security'||['deny','vpnapp'].includes(flow?.id)?'Entrée : interface VPN':current.module==='storage'||flow?.id==='backup'?'Entrée : VLAN20':'Entrée : CLIENTS';$('hop-ingress').textContent=current.node==='fw'?ingress:'Dans '+name(current.node);
$('hop-egress').textContent=current.denied&&current.node==='fw'?'Aucune sortie · paquet arrêté':current.node==='fw'?(current.module==='storage'||flow?.id==='backup'?'Sortie : VLAN30':'Sortie : VLAN20'):current.node==='nas'?'Compte et ACL du dataset':current.node==='app'?'Ubuntu · données locales':'Contrôle du service';}
$('hop-direction').textContent=l?(l.id.startsWith('trunk')?'PC '+pc(from)+' → PC '+pc(to)+' · VLAN'+l.zone:current.tag||l.label):(current?.denied&&current.node==='fw'?'REFUS · ':'')+(current?.decision||'Un câble Ethernet · deux VLANs tagués');
if(flow?.id==='presentation'&&!l){if(current.module==='virtualization'){$('hop-from').textContent='PC A · OPNsense + Windows';$('hop-to').textContent='PC B · SW-B + Ubuntu + TrueNAS';$('hop-ingress').textContent='Deux hôtes physiques';$('hop-egress').textContent='Trois VM sur PC B';$('hop-direction').textContent='Cinq VM · les conteneurs vivent dans Ubuntu';}else if(current.node){$('hop-from').textContent=name(current.node)+' · PC '+pc(current.node);$('hop-to').textContent=current.decision?'Point de contrôle':'Rôle du composant';$('hop-ingress').textContent='Élément mis en évidence';$('hop-egress').textContent=current.denied&&(current.module==='security'||flow?.id==='deny')?'Trafic arrêté au pare-feu':current.denied?'Sonde en alerte':current.decision?'Contrôle attendu':'Voir son rôle dans le récit';$('hop-direction').textContent=current.denied&&(current.module==='security'||flow?.id==='deny')?'REFUS simulé':current.denied?'Indisponibilité simulée':current.decision||'Composant mis en évidence';}}
$('inspect-hop').hidden=!l;$('inspect-hop').textContent=l?'Inspecter cette connexion':'';
$('transport-strip').dataset.active=current?.link||'';
const outcome=(current?.denied&&current.node==='fw'?'REFUS · ':'')+(current?.decision||'Choisissez un trajet autorisé ou refusé.');$('rule-outcome').textContent=outcome;$('rule-outcome').classList.toggle('denied',!!current?.denied);
$('rule-match').textContent=flow?flow.source+' → '+flow.destination+' · '+flow.protocol:'Le VPN donne accès à HTTPS8443 ; pas au NAS445.';
$('rule-control').textContent=current?.node==='app'?(current.denied?'Disponibilité : la sonde HTTPS détecte la panne applicative.':'Contrôle indépendant : session et rôle InvoiceShelf.'):current?.node==='nas'?'Contrôle indépendant : compte et ACL du dataset.':current?.node==='fw'?'Point de contrôle : interface entrante OPNsense.':'Le marqueur dans la scène situe le contrôle courant.';
}
function renderStory(animate=false){
syncChapters();
if(!flow){syncStoryMode();updateJourney();$('step-title').classList.remove('denied');$('step-position').textContent='Vue d’ensemble · 0 / '+scenarios.find(s=>s.id==='presentation').steps.length;$('step-title').textContent='Explorer le laboratoire';$('step-copy').textContent='Cliquez une machine pour l’ouvrir. « Présenter » reprend le récit.';$('speaker-cue').hidden=true;$('speaker-cue').textContent='';$('packet-meta').replaceChildren();$('step-track').replaceChildren();$('play').disabled=true;$('prev-step').disabled=true;$('next-step').disabled=true;quiz.hide();$('whatif-banner').hidden=true;syncPacketButton();return;}
syncStoryMode();
const current=flow.steps[step];if(flow.id==='presentation')presentationStep=step;updateJourney(current);$('step-position').textContent=(current.chapter||(flow.id==='whatif'?'Et si…':'Parcours'))+' · '+(step+1)+' / '+flow.steps.length+' · '+(flow.id==='whatif'?'simulation de panne':'simulation explicative');
$('whatif-banner').hidden=flow.id!=='whatif';$('whatif-banner').textContent='Simulation de panne · '+describe(new Set(flow.faults||[]))+' · '+flow.name.replace('Et si… · ','');$('step-title').textContent=current.title;$('step-copy').textContent=current.text;$('speaker-cue').hidden=!current.cue||!$('notes-toggle').checked;$('speaker-cue').textContent=current.cue?'À dire : '+current.cue:'';$('step-title').classList.toggle('denied',!!current.denied);$('packet-meta').replaceChildren(...[flow.source+' → '+flow.destination,flow.protocol,current.tag||current.decision||''].filter(Boolean).map(t=>el('span',t)));
$('play').disabled=false;$('prev-step').disabled=step===0;$('next-step').disabled=step===flow.steps.length-1;
const chapter=currentChapter(),visibleSteps=flow.steps.map((s,i)=>({s,i})).filter(({s})=>!chapter||s.module===chapter.id);
if(chapter)$('step-position').textContent='Chapitre '+(chapters.indexOf(chapter)+1)+' / 9 · '+(visibleSteps.findIndex(v=>v.i===step)+1)+' / '+visibleSteps.length;
$('step-track').replaceChildren(...visibleSteps.map(({s,i},j)=>{const b=button('',()=>go(i));b.setAttribute('aria-label','Étape '+(j+1)+' / '+visibleSteps.length+' : '+s.title);b.setAttribute('aria-current',step===i?'step':'false');if(i<step)b.classList.add('done');return b;}));
{const nx=flow.steps[step+1],nc=flow.id==='presentation'&&nx&&nx.module!==current.module?chapters.find(c=>c.id===nx.module):null;$('next-step').replaceChildren(document.createTextNode(step===flow.steps.length-1?'Fin du parcours':nc?'Chapitre suivant : '+nc.title:'Suivant'),iconElement('next'));}
clearTimeout(finaleTimer);
const key=flow.id+':'+step,entries=quizEntries();
if(quizMode&&current.quiz&&!quiz.answered(key)){scene?.showStep(flow.steps,step,false,()=>{},flow,{hold:true});renderMap();quiz.ask(current.quiz,key,entries.findIndex(([k])=>k===key)+1,entries.length);$('scene-hint').textContent='Question : répondez avant de voir l’animation.';syncPacketButton();return;}
quiz.hide();if(animate)chapterCard(current);
scene?.showStep(flow.steps,step,animate&&!mapMode,()=>{schedule(1100);finale();},flow);renderMap();syncPacketButton();
if(animate&&(!current.link||reduced.checked||mapMode||!scene))schedule(3200);
if(!animate||!current.link||reduced.checked||mapMode)finale();
}
function go(index){if(!flow)return;if(!$('component-panel').hidden)closePanel();pause();scene?.stop();step=Math.max(0,Math.min(flow.steps.length-1,index));renderStory(true);}
function chooseFlow(id){pause();flow=scenarios.find(s=>s.id===id)||null;step=0;modeView('logical');closePanel();scene?.stop();renderStory();}
function download(name,text,type){const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function buildWhatIf(){
scenarios.filter(s=>s.id!=='presentation').forEach(s=>{const o=el('option',s.name);o.value=s.id;$('whatif-flow').append(o);});
for(const f of faultList){const row=el('label',undefined,'fault'),input=document.createElement('input'),text=el('span');input.type='checkbox';input.value=f.id;input.addEventListener('change',()=>{if(input.checked)faults.add(f.id);else faults.delete(f.id);});text.append(el('strong',f.label),el('small',f.hint));row.append(input,text);$('whatif-faults').append(row);}
}
function toggleWhatIf(open=$('whatif-panel').hidden){if(open&&presenting)setExperience(false);$('whatif-panel').hidden=!open;$('whatif-toggle').setAttribute('aria-expanded',String(open));if(open){$('options').open=false;$('whatif-flow').value=flow&&flow.id!=='presentation'?(flow.id==='whatif'?flow.base:flow.id):'app';}}
function runWhatIf(){const base=scenarios.find(s=>s.id===$('whatif-flow').value)||scenarios.find(s=>s.id==='app');pause();scene?.stop();flow=simulate(model,base,faults);step=0;$('scenario-select').value='';toggleWhatIf(false);modeView('logical');$('scene-hint').textContent=flow.broken?'Suivez le paquet jusqu’au point de rupture.':'Aucune des pannes choisies ne touche ce trajet.';$('play').click();}
function resetWhatIf(){faults.clear();$('whatif-faults').querySelectorAll('input').forEach(i=>{i.checked=false;});if(flow?.id==='whatif'){const base=flow.base;chooseFlow(base);$('scenario-select').value=base;}}
async function start(){
try{const r=await fetch('network-assets/topology.json');if(!r.ok)throw Error('HTTP '+r.status);model=await r.json();const ids=new Set(model.nodes.map(n=>n.id));if(ids.size!==model.nodes.length||model.links.some(l=>!ids.has(l.from)||!ids.has(l.to)))throw Error('Liaisons incohérentes');}
catch(e){$('loading').textContent='Impossible de charger le modèle. Utiliser le lanceur local. '+e.message;return;}
buildChapterNav();
$('evidence-close').append(iconElement('close'));$('evidence-prev').append(iconElement('prev'));$('evidence-next').append(iconElement('next'));
$('present-mode').addEventListener('click',()=>setExperience(true));$('explore-mode').addEventListener('click',()=>setExperience(false));
$('show-evidence').addEventListener('click',()=>openEvidence());$('evidence-close').addEventListener('click',()=>$('evidence-dialog').close());
$('evidence-prev').addEventListener('click',()=>{evidenceIndex=Math.max(0,evidenceIndex-1);renderEvidence();});$('evidence-next').addEventListener('click',()=>{evidenceIndex=Math.min(evidenceItems.length-1,evidenceIndex+1);renderEvidence();});
$('evidence-image').addEventListener('error',()=>{$('evidence-image').hidden=true;$('evidence-empty').hidden=false;$('evidence-empty').textContent='Cette capture n’est pas disponible. Consulter les notes du dépôt.';});
$('notes-toggle').addEventListener('change',()=>{if(flow)renderStory();});
$('overview').prepend(iconElement('global'));$('presentation').prepend(iconElement('fullscreen'));$('close-panel').append(iconElement('close'));$('prev-step').append(iconElement('prev'));$('next-step').append(iconElement('next'));pause();
scenarios.forEach(s=>{const option=el('option',s.name);option.value=s.id;$('scenario-select').append(option);});
try{scene=createScene(model,openComponent,{onAutoQuality:syncQuality});}catch(e){scene=null;$('fallback').hidden=false;mapView(true);$('top-view').disabled=true;$('quality').disabled=true;}
$('loading').hidden=true;syncQuality();
buildWhatIf();$('whatif-close').append(iconElement('close'));
$('quality').addEventListener('click',()=>{if(!scene)return;scene.setQuality(scene.quality()==='high'?'economy':'high');syncQuality();});
$('free-camera').addEventListener('change',e=>scene?.setFollow(!e.target.checked));
$('quiz-mode').addEventListener('change',e=>{quizMode=e.target.checked;quiz.reset();clearTimeout(finaleTimer);if(flow){pause();renderStory();}});
$('open-packet').addEventListener('click',togglePacket);
$('whatif-toggle').addEventListener('click',()=>toggleWhatIf());$('whatif-close').addEventListener('click',()=>toggleWhatIf(false));
$('whatif-run').addEventListener('click',runWhatIf);$('whatif-reset').addEventListener('click',resetWhatIf);
$('overview').addEventListener('click',globalView);$('back-network').prepend(iconElement('prev'));$('back-network').addEventListener('click',globalView);$('start-walkthrough').addEventListener('click',()=>{chooseFlow('presentation');$('scenario-select').value='presentation';go(0);scene?.flyIn();});$('inspect-hop').addEventListener('click',()=>{const l=flow?.steps[step]?.link;if(l)openComponent('link:'+l);});document.querySelectorAll('[data-inspect-link]').forEach(b=>b.addEventListener('click',()=>openComponent('link:'+b.dataset.inspectLink)));$('close-panel').addEventListener('click',()=>{pause();closePanel();$('scene-hint').textContent='Cliquez sur un équipement pour l’ouvrir.';});
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>modeView(b.dataset.mode)));
$('security-allow').addEventListener('click',()=>{chooseFlow('vpnapp');$('scenario-select').value='vpnapp';modeView('security');renderStory();});$('security-deny').addEventListener('click',()=>{chooseFlow('deny');$('scenario-select').value='deny';modeView('security');renderStory();});
$('scenario-select').addEventListener('change',e=>chooseFlow(e.target.value));$('toggle-story-details').addEventListener('click',()=>{showStoryDetails=!showStoryDetails;syncStoryMode();});$('prev-step').addEventListener('click',()=>go(step-1));$('next-step').addEventListener('click',()=>go(step+1));$('play').addEventListener('click',()=>{if(!flow)return;if(selected)closePanel();if(playing){pause();return;}if(scene?.packetOpen())scene.explodePacket(false);if(step===flow.steps.length-1)step=0;playing=true;$('play').replaceChildren(iconElement('pause'),document.createTextNode('Pause'));$('play').setAttribute('aria-pressed','true');renderStory(true);});
$('top-view').addEventListener('click',()=>{pause();scene?.topView();$('options').open=false;});$('toggle-2d').addEventListener('click',()=>mapView(!mapMode));reduced.addEventListener('change',()=>{pause();scene?.setReduced(reduced.checked);if(flow)renderStory();});
$('readiness').addEventListener('click',()=>{pause();closePanel();$('options').open=false;$('component-panel').hidden=false;$('component-icon').replaceChildren(iconElement('layers'));$('node-location').textContent='Limites et portée des preuves';$('node-title').textContent='Limites documentées';$('node-purpose').textContent='Les preuves du 29 octobre établissent certains résultats et laissent ces points incomplets.';$('component-layers').replaceChildren(...model.issues.map(i=>{const row=el('div',undefined,'preparation-item');row.append(button(i.title,()=>openComponent(i.node)),el('p',i.text),el('small','Responsable : à compléter'));return row;}));$('component-details').replaceChildren();syncSide();});
$('export-svg').addEventListener('click',()=>{pause();download('laboratoire-'+(flow?.id||'global')+'.svg',makeMap(model,flow?.steps||[],step,selected||''),'image/svg+xml');$('options').open=false;});
$('presentation').addEventListener('click',async()=>{if(document.fullscreenElement){await document.exitFullscreen();return;}try{await document.documentElement.requestFullscreen();}catch{$('presentation').replaceChildren(iconElement('fullscreen'),document.createTextNode('Utiliser F11'));}});
let idleTimer=0;const wake=()=>{document.body.classList.remove('idle');clearTimeout(idleTimer);if(document.fullscreenElement)idleTimer=setTimeout(()=>document.body.classList.add('idle'),2600);};
const syncFullscreen=()=>{const on=!!document.fullscreenElement;document.body.classList.toggle('presentation-mode',on);$('exit-fullscreen').hidden=!on;$('options').open=false;$('presentation').replaceChildren(iconElement('fullscreen'),document.createTextNode(on?'Quitter le plein écran':'Plein écran'));wake();};document.addEventListener('fullscreenchange',syncFullscreen);syncFullscreen();
$('exit-fullscreen').addEventListener('click',()=>document.exitFullscreen?.());document.addEventListener('pointermove',wake,{passive:true});document.addEventListener('keydown',wake);
document.addEventListener('keydown',e=>{if($('evidence-dialog').open){if(e.key==='ArrowRight'){$('evidence-next').click();e.preventDefault();}if(e.key==='ArrowLeft'){$('evidence-prev').click();e.preventDefault();}return;}if(e.key==='Escape'){pause();if(scene?.packetOpen()){togglePacket();return;}if(!$('whatif-panel').hidden){toggleWhatIf(false);return;}if(!$('component-panel').hidden)closePanel();$('options').open=false;return;}if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
if(quiz.open()){if(/^[1-3]$/.test(e.key)){e.preventDefault();quiz.choose(+e.key-1);return;}if(e.key==='ArrowRight'||e.key==='Enter'&&e.target.tagName!=='BUTTON'){e.preventDefault();quiz.proceed();return;}if(e.key===' '){e.preventDefault();return;}}
if(e.key.toLowerCase()==='p'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&flow){e.preventDefault();togglePacket();return;}if(e.key.toLowerCase()==='f'&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();$('presentation').click();return;}if(e.target.tagName==='SUMMARY')return;if(e.key==='ArrowRight'&&flow){e.preventDefault();go(step+1);}if(e.key==='ArrowLeft'&&flow){e.preventDefault();go(step-1);}if(e.key===' '&&e.target===document.body&&flow){e.preventDefault();$('play').click();}});
document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});document.addEventListener('lab-webgl-lost',()=>{pause();$('fallback').hidden=false;mapView(true);});
chooseFlow('presentation');go(0);scene?.flyIn();
window.labDiagram={revision:model.revision,getState:()=>({selected,mode,presenting,chapter:currentChapter()?.id||null,evidenceOpen:$('evidence-dialog').open,scenario:flow?.id||null,step,playing,mapMode,quizMode,quizOpen:quiz.open(),faults:[...faults],whatif:flow?.id==='whatif'?{base:flow.base,broken:flow.broken,steps:flow.steps.length}:null,render:scene?.info()||null})};
}
start();
