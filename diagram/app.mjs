import {createScene} from './scene.mjs';
import {scenarios} from './scenarios.mjs';
import {makeMap} from './map.mjs';
import {iconElement} from './icons.mjs';
const $=id=>document.getElementById(id);
let model,scene=null,selected=null,mode='physical',flow=null,step=0,playing=false,timer=null,mapMode=false;
let showStoryDetails=false;
const reduced=$('reduce-motion');reduced.checked=matchMedia('(prefers-reduced-motion: reduce)').matches;
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;};
const button=(text,fn,kind)=>{const n=el('button',text,kind);n.type='button';n.addEventListener('click',fn);return n;};
function pause(){playing=false;clearTimeout(timer);timer=null;scene?.pause();$('play').replaceChildren(iconElement('play'),document.createTextNode('Lire le parcours'));$('play').setAttribute('aria-pressed','false');}
function syncStoryMode(){const active=flow?.id==='presentation',toggle=$('toggle-story-details');document.body.classList.toggle('guided-mode',active);if(!active){showStoryDetails=false;document.body.classList.remove('guided-details-open');}document.body.classList.toggle('guided-details-open',active&&showStoryDetails);toggle.hidden=!active;toggle.setAttribute('aria-expanded',String(active&&showStoryDetails));toggle.textContent=showStoryDetails?'Masquer les détails techniques':'Afficher les détails techniques';}
function syncSide(){const security=mode==='security'&&$('component-panel').hidden;$('security-panel').hidden=!security;document.querySelector('.lab-view').classList.toggle('has-side-panel',security||!$('component-panel').hidden);$('transport-strip').hidden=!!selected&&!selected.startsWith('link:');$('back-network').hidden=!selected;}
function modeView(value){pause();scene?.stop();if(!$('component-panel').hidden)closePanel();mode=value;scene?.setMode(value);document.querySelectorAll('[data-mode]').forEach(n=>n.setAttribute('aria-pressed',String(n.dataset.mode===value)));$('scene-hint').textContent=value==='physical'?'Cliquez sur un équipement pour l’ouvrir.':value==='logical'?'Suivez les connexions, sans changer la place des machines.':'Zones séparées, accès filtrés : choisissez un exemple à droite.';syncSide();if(flow)renderStory();else renderMap();}
function list(title,values){const section=el('section'),ul=el('ul');section.append(el('h3',title));values.forEach(t=>ul.append(el('li',t)));section.append(ul);return section;}
const layerSets={
fw:[['wan','Interfaces','WAN, MGMT, CLIENTS et trunk20/30'],['switch','Routage','Une passerelle pour chaque zone'],['fw','Filtrage','Règles entrantes, états et journaux']],
windows:[['windows','Poste client','Ouvre InvoiceShelf et le partage autorisé'],['fw','Protection','Defender et pare-feu local'],['monitor','Audit','Sysmon et événements Security']],
switch:[['switch','Port trunk','VLAN20 et VLAN30 tagués'],['ubuntu','Accès20','Ubuntu reçoit des trames non taguées'],['nas','Accès30','TrueNAS reçoit des trames non taguées']],
ubuntu:[['ubuntu','Système invité','SSH, iptables, audit et journaux'],['proxy','Docker & HTTPS','Nginx8443 → InvoiceShelf8080 interne'],['data','Données & supervision','SQLite local, sauvegarde NAS, Prometheus']],
nas:[['nas','Partage SMB','Lecture, écriture ou refus selon le compte'],['vpn','Données protégées','Dataset chiffré et clés privées'],['layers','Restauration','Snapshots et récupération de fichier']],
app:[['app','Facturation','Clients fictifs, factures, dépenses et PDF'],['fw','Rôles','Comptable ou consultation, à vérifier'],['data','Persistance','SQLite et fichiers dans Ubuntu']],
proxy:[['vpn','HTTPS8443','Chiffrement jusqu’au proxy'],['app','Backend8080','Sur le bridge Docker interne']],
data:[['data','Volume local','Base active et fichiers dans Ubuntu'],['nas','Archive NAS','Application arrêtée avant sauvegarde']],
monitor:[['monitor','Prometheus','Collecte les cibles et la disponibilité'],['windows','Windows exporter','Métriques TCP9182'],['monitor','Grafana','Affiche les séries collectées']],
vpn:[['vpn','Tunnel','OpenVPN sur le WAN simulé'],['app','Droit limité','Application autorisée ; NAS/admin refusés']],
wan:[['wan','NAT VMware','VMnet8 sur l’hôte A'],['fw','Passerelle','WAN de la VM OPNsense']],
mgmt:[['mgmt','Gestion','Hôte A sur10.77.99.254'],['fw','Accès séparé','MGMT non tagué ; retirer ce chemin pour le test VPN']]
};
function fillPanel(id){
const hostId=id.startsWith('host:')?id.slice(5):null,n=model.nodes.find(n=>n.id===id),h=model.hosts.find(h=>h.id===hostId);
$('component-panel').hidden=false;$('component-icon').replaceChildren(iconElement(h?'host':id));$('node-location').textContent=h?'Hôte physique · '+h.owner:n.kind+' · PC '+n.host.toUpperCase();
$('node-title').textContent=h?h.name:n.name;$('node-purpose').textContent=h?(h.id==='a'?'Héberge la passerelle et le poste client. Les accès de gestion et le client VPN sont des applications/interfaces de cet hôte.':'Héberge la commutation VLAN, les services Ubuntu et le stockage NAS. Leur communication passe par le pare-feu sur A.'):n.purpose;
const layers=$('component-layers');layers.replaceChildren();
if(h){model.nodes.filter(n=>n.host===h.id&&!n.parent).forEach(n=>{const b=button('',()=>openComponent(n.id));b.append(iconElement(n.id),el('span',n.name));layers.append(b);});}
else{for(const [symbol,title,copy] of layerSets[id]||[]){const item=el('div',undefined,'layer');item.append(iconElement(symbol));const text=el('div');text.append(el('strong',title),el('p',copy));item.append(text);layers.append(item);}}
const out=$('component-details');out.replaceChildren();
if(h){out.append(list('Ressources relevées',[h.cpu,h.ram,h.free,h.disk]),el('p',h.planned,'state-note'));return;}
if(id==='ubuntu'){out.append(el('h3','Services dans cette VM'));for(const child of model.nodes.filter(n=>n.parent==='ubuntu'))out.append(button(child.name,()=>openComponent(child.id),'service-action'));}
const tech=el('details');tech.append(el('summary','Configuration et état réel'));const body=el('div',undefined,'technical-body');body.append(el('p',n.status,'state-note'),el('p',n.resources));
const table=el('table');for(const row of n.interfaces){const tr=el('tr');row.forEach(v=>tr.append(el('td',v)));table.append(tr);}body.append(table,list('Protections à vérifier',n.controls),el('h3','Prochaine action'),el('p',n.next),el('h3','Preuve disponible'),el('p',n.evidence),el('p','Source : '+n.source,'source-note'));tech.append(body);out.append(tech);
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
function openComponent(id){const isLink=id.startsWith('link:');if(isLink?!model.links.some(l=>'link:'+l.id===id):id.startsWith('host:')?!model.hosts.some(h=>'host:'+h.id===id):!model.nodes.some(n=>n.id===id))return;pause();scene?.stop();selected=id;if(isLink){fillLink(id.slice(5));scene?.reset();scene?.finishView();scene?.inspectLink(id.slice(5));}else{fillPanel(id);scene?.open(id);}renderOwnership(id);syncSide();$('scene-hint').textContent='Vue fonctionnelle · le parcours est conservé pendant l’inspection.';renderMap();}
function closePanel(resetScene=true){$('component-panel').hidden=true;selected=null;if(resetScene){scene?.reset();scene?.finishView();if(flow)scene?.showStep(flow.steps,step,false,()=>{});}syncSide();renderMap();}
function globalView(){pause();closePanel();scene?.stop();scene?.setMode(mode);$('scene-hint').textContent='Cliquez sur un équipement ou suivez un parcours.';renderStory();}
function renderMap(){if(!model)return;$('map2d').innerHTML=makeMap(model,flow?.steps||[],step,selected||'');$('map2d').querySelectorAll('[data-id]').forEach(g=>{g.addEventListener('click',()=>openComponent(g.dataset.id));g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openComponent(g.dataset.id);}});});}
function mapView(value){mapMode=value;$('map2d').hidden=!value;scene?.setVisible(!value);$('toggle-2d').textContent=value?'Revenir à la maquette3D':'Afficher le plan2D';pause();renderMap();$('options').open=false;}
function schedule(ms){clearTimeout(timer);if(playing)timer=setTimeout(()=>{if(step===flow.steps.length-1){pause();return;}step++;renderStory(true);},ms);}
function updateJourney(current){
const l=model.links.find(l=>l.id===current?.link),from=l?current.from:current?.node,to=l?current.to:null;
const name=id=>model.nodes.find(n=>n.id===id)?.name||'';
const pc=id=>model.nodes.find(n=>n.id===id)?.host?.toUpperCase()||'';
$('hop-from').textContent=from?name(from)+' · PC '+pc(from):'PC A · OPNsense';
$('hop-to').textContent=to?name(to)+' · PC '+pc(to):current?.decision?'Décision au point de contrôle':'PC B · Alpine SW-B';
$('hop-ingress').textContent=l?(l.from===from?l.fromPort:l.toPort):'VMnet12 → Ethernet A';
$('hop-egress').textContent=l?(l.to===to?l.toPort:l.fromPort):'Ethernet B → VMnet12';
if(current&&!l){const ingress=current.chapter==='VPN'||['deny','vpnapp'].includes(flow?.id)?'Entrée : interface VPN':current.chapter==='Sauvegarde'||flow?.id==='backup'?'Entrée : VLAN20':'Entrée : CLIENTS';$('hop-ingress').textContent=current.node==='fw'?ingress:'Dans '+name(current.node);
$('hop-egress').textContent=current.denied&&current.node==='fw'?'Aucune sortie · paquet arrêté':current.node==='fw'?(current.chapter==='Sauvegarde'||flow?.id==='backup'?'Sortie : VLAN30':'Sortie : VLAN20'):current.node==='nas'?'Compte et ACL du dataset':current.node==='app'?'Ubuntu · données locales':'Contrôle du service';}
$('hop-direction').textContent=l?(l.id.startsWith('trunk')?'PC '+pc(from)+' → PC '+pc(to)+' · VLAN'+l.zone:current.tag||l.label):(current?.denied&&current.node==='fw'?'REFUS · ':'')+(current?.decision||'Un câble Ethernet · deux VLANs tagués');
if(flow?.id==='presentation'&&!l){if(current.chapter==='Architecture'){$('hop-from').textContent='PC A · OPNsense + Windows';$('hop-to').textContent='PC B · SW-B + Ubuntu + TrueNAS';$('hop-ingress').textContent='Deux hôtes physiques';$('hop-egress').textContent='Trois VM sur PC B';$('hop-direction').textContent='Cinq VM · les conteneurs vivent dans Ubuntu';}else if(current.node){$('hop-from').textContent=name(current.node)+' · PC '+pc(current.node);$('hop-to').textContent=current.decision?'Point de contrôle':'Rôle du composant';$('hop-ingress').textContent='Élément mis en évidence';$('hop-egress').textContent=current.denied&&current.chapter==='VPN'?'Trafic arrêté au pare-feu':current.denied?'Sonde en alerte':current.decision?'Contrôle attendu':'Voir son rôle dans le récit';$('hop-direction').textContent=current.denied&&current.chapter==='VPN'?'REFUS simulé':current.denied?'Indisponibilité simulée':current.decision||'Composant mis en évidence';}}
$('inspect-hop').hidden=!l;$('inspect-hop').textContent=l?'Inspecter cette connexion':'';
$('transport-strip').dataset.active=current?.link||'';
const outcome=(current?.denied&&current.node==='fw'?'REFUS · ':'')+(current?.decision||'Choisissez un trajet autorisé ou refusé.');$('rule-outcome').textContent=outcome;$('rule-outcome').classList.toggle('denied',!!current?.denied);
$('rule-match').textContent=flow?flow.source+' → '+flow.destination+' · '+flow.protocol:'Le VPN donne accès à HTTPS8443 ; pas au NAS445.';
$('rule-control').textContent=current?.node==='app'?(current.denied?'Disponibilité : la sonde HTTPS détecte la panne applicative.':'Contrôle indépendant : session et rôle InvoiceShelf.'):current?.node==='nas'?'Contrôle indépendant : compte et ACL du dataset.':current?.node==='fw'?'Point de contrôle : interface entrante OPNsense.':'Le marqueur dans la scène situe le contrôle courant.';
}
function renderStory(animate=false){
if(!flow){syncStoryMode();updateJourney();$('step-title').classList.remove('denied');$('step-position').textContent='Vue d’ensemble · 0 / '+scenarios.find(s=>s.id==='presentation').steps.length;$('step-title').textContent='Commence par les deux PC.';$('step-copy').textContent='Un parcours guidé raconte l’usage, les contrôles, la sauvegarde, le VPN et la reprise.';$('speaker-cue').hidden=true;$('speaker-cue').textContent='';$('packet-meta').replaceChildren();$('step-track').replaceChildren();$('play').disabled=true;$('prev-step').disabled=true;$('next-step').disabled=true;return;}
syncStoryMode();
const current=flow.steps[step];updateJourney(current);$('step-position').textContent=(current.chapter||'Parcours')+' · '+(step+1)+' / '+flow.steps.length+' · simulation explicative';$('step-title').textContent=current.title;$('step-copy').textContent=current.text;$('speaker-cue').hidden=!current.cue;$('speaker-cue').textContent=current.cue?'À dire : '+current.cue:'';$('step-title').classList.toggle('denied',!!current.denied);$('packet-meta').replaceChildren(...[flow.source+' → '+flow.destination,flow.protocol,current.tag||current.decision||''].filter(Boolean).map(t=>el('span',t)));
$('play').disabled=false;$('prev-step').disabled=step===0;$('next-step').disabled=step===flow.steps.length-1;
$('step-track').replaceChildren(...flow.steps.map((s,i)=>{const b=button('',()=>go(i));b.setAttribute('aria-label','Étape '+(i+1)+' : '+s.title);b.setAttribute('aria-current',step===i?'step':'false');if(i<step)b.classList.add('done');return b;}));
scene?.showStep(flow.steps,step,animate&&!mapMode,()=>schedule(1100));renderMap();
if(animate&&(!current.link||reduced.checked||mapMode||!scene))schedule(3200);
}
function go(index){if(!flow)return;if(selected)closePanel();pause();scene?.stop();step=Math.max(0,Math.min(flow.steps.length-1,index));renderStory(true);}
function chooseFlow(id){pause();flow=scenarios.find(s=>s.id===id)||null;step=0;modeView('logical');closePanel();scene?.stop();renderStory();}
function download(name,text,type){const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
async function start(){
try{const r=await fetch('network-assets/topology.json');if(!r.ok)throw Error('HTTP '+r.status);model=await r.json();const ids=new Set(model.nodes.map(n=>n.id));if(ids.size!==model.nodes.length||model.links.some(l=>!ids.has(l.from)||!ids.has(l.to)))throw Error('Liaisons incohérentes');}
catch(e){$('loading').textContent='Impossible de charger le modèle. Utiliser le lanceur local. '+e.message;return;}
$('overview').prepend(iconElement('global'));$('presentation').prepend(iconElement('fullscreen'));$('close-panel').append(iconElement('close'));$('prev-step').append(iconElement('prev'));$('next-step').append(iconElement('next'));pause();
scenarios.forEach(s=>{const option=el('option',s.name);option.value=s.id;$('scenario-select').append(option);});
try{scene=createScene(model,openComponent);}catch(e){$('fallback').hidden=false;mapView(true);$('top-view').disabled=true;}
$('loading').hidden=true;
$('overview').addEventListener('click',globalView);$('back-network').prepend(iconElement('prev'));$('back-network').addEventListener('click',globalView);$('start-walkthrough').addEventListener('click',()=>{chooseFlow('presentation');$('scenario-select').value='presentation';go(0);});$('inspect-hop').addEventListener('click',()=>{const l=flow?.steps[step]?.link;if(l)openComponent('link:'+l);});document.querySelectorAll('[data-inspect-link]').forEach(b=>b.addEventListener('click',()=>openComponent('link:'+b.dataset.inspectLink)));$('close-panel').addEventListener('click',()=>{pause();closePanel();$('scene-hint').textContent='Cliquez sur un équipement pour l’ouvrir.';});
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>modeView(b.dataset.mode)));
$('security-allow').addEventListener('click',()=>{chooseFlow('vpnapp');$('scenario-select').value='vpnapp';modeView('security');renderStory();});$('security-deny').addEventListener('click',()=>{chooseFlow('deny');$('scenario-select').value='deny';modeView('security');renderStory();});
$('scenario-select').addEventListener('change',e=>chooseFlow(e.target.value));$('toggle-story-details').addEventListener('click',()=>{showStoryDetails=!showStoryDetails;syncStoryMode();});$('prev-step').addEventListener('click',()=>go(step-1));$('next-step').addEventListener('click',()=>go(step+1));$('play').addEventListener('click',()=>{if(!flow)return;if(selected)closePanel();if(playing){pause();return;}if(step===flow.steps.length-1)step=0;playing=true;$('play').replaceChildren(iconElement('pause'),document.createTextNode('Pause'));$('play').setAttribute('aria-pressed','true');renderStory(true);});
$('top-view').addEventListener('click',()=>{pause();scene?.topView();$('options').open=false;});$('toggle-2d').addEventListener('click',()=>mapView(!mapMode));reduced.addEventListener('change',()=>{pause();scene?.setReduced(reduced.checked);if(flow)renderStory();});
$('readiness').addEventListener('click',()=>{pause();closePanel();$('options').open=false;$('component-panel').hidden=false;$('component-icon').replaceChildren(iconElement('layers'));$('node-location').textContent='Préparation du laboratoire';$('node-title').textContent='Les points ouverts';$('node-purpose').textContent='Ces points proviennent du plan et de l’état déclaré par B. Ils restent visibles sans prétendre que les tests ont réussi.';$('component-layers').replaceChildren(...model.issues.map(i=>{const row=el('div',undefined,'preparation-item');row.append(button(i.title,()=>openComponent(i.node)),el('p',i.text),el('small','Responsable : '+i.owner));return row;}));$('component-details').replaceChildren();syncSide();});
$('export-svg').addEventListener('click',()=>{pause();download('laboratoire-'+(flow?.id||'global')+'.svg',makeMap(model,flow?.steps||[],step,selected||''),'image/svg+xml');$('options').open=false;});
$('presentation').addEventListener('click',async()=>{if(document.fullscreenElement){await document.exitFullscreen();return;}try{await document.documentElement.requestFullscreen();}catch{$('presentation').replaceChildren(iconElement('fullscreen'),document.createTextNode('Utiliser F11'));}});
const syncFullscreen=()=>{document.body.classList.toggle('presentation-mode',!!document.fullscreenElement);$('presentation').replaceChildren(iconElement('fullscreen'),document.createTextNode(document.fullscreenElement?'Quitter le plein écran':'Plein écran'));};document.addEventListener('fullscreenchange',syncFullscreen);syncFullscreen();
document.addEventListener('keydown',e=>{if(e.key==='Escape'){pause();if(!$('component-panel').hidden)closePanel();$('options').open=false;return;}if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key.toLowerCase()==='f'&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();$('presentation').click();return;}if(e.target.tagName==='SUMMARY')return;if(e.key==='ArrowRight'&&flow){e.preventDefault();go(step+1);}if(e.key==='ArrowLeft'&&flow){e.preventDefault();go(step-1);}if(e.key===' '&&e.target===document.body&&flow){e.preventDefault();$('play').click();}});
document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});document.addEventListener('lab-webgl-lost',()=>{pause();$('fallback').hidden=false;mapView(true);});
modeView('physical');renderStory();
window.labDiagram={revision:model.revision,getState:()=>({selected,mode,scenario:flow?.id||null,step,playing,mapMode,render:scene?.info()||null})};
}
start();
