export const faults=[
{id:'cable',label:'Débrancher le câble trunk',hint:'Le seul câble entre PC A et PC B'},
{id:'switch',label:'Arrêter Alpine SW-B',hint:'Plus aucun port d’accès sur PC B'},
{id:'rule',label:'Désactiver la règle CLIENTS → 8443',hint:'OPNsense applique alors le refus final'},
{id:'app',label:'Arrêter le conteneur InvoiceShelf',hint:'Nginx reste actif mais sans backend'},
{id:'flat',label:'Supprimer la séparation VLAN sur PC B',hint:'Ubuntu et TrueNAS dans le même réseau'}
];
const SIM=' Simulation : rien n’est arrêté réellement.';
const notConcerned={
cable:'ce trajet ne traverse pas le câble trunk',
switch:'ce trajet n’utilise pas SW-B',
rule:'la règle CLIENTS → 8443 ne concerne pas ce trajet',
app:'ce trajet ne dépend pas du conteneur InvoiceShelf',
flat:'ce trajet passe déjà par OPNsense : supprimer les VLAN de B ne crée pas de raccourci ici'
};

function flatten(steps){
const out=steps.findIndex(s=>s.link?.startsWith('trunk')&&s.from==='switch'),back=steps.findIndex((s,i)=>i>out&&s.link==='access30'&&s.from==='switch');
if(out<0||back<0)return null;
return [...steps.slice(0,out),
{link:'access30',from:'switch',to:'nas',tag:'Sans VLAN · même réseau L2',title:'Raccourci direct par SW-B',text:'Sans séparation VLAN, Ubuntu et TrueNAS partagent le même réseau. SW-B commute la trame directement vers le NAS, sans passer par PC A.'},
{node:'fw',decision:'Contourné · aucune règle appliquée',denied:true,broken:true,title:'Le pare-feu ne voit plus ce trafic',text:'OPNsense n’est plus sur le chemin : ni filtrage, ni journal. Seuls le compte et les ACL du NAS protègent encore les données. C’est précisément ce que la séparation VLAN empêche.'+SIM}];
}

function breakFor(step,flow,active){
const rule=step.rule||flow.rule;
if(active.has('cable')&&step.link?.startsWith('trunk'))return {...step,breakAt:.5,denied:true,broken:true,decision:'Câble débranché · trame perdue',title:'Le câble trunk est débranché',text:'VLAN20 et VLAN30 partagent ce seul câble Ethernet. Sans lui, aucune trame ne passe entre PC A et PC B : les services de B deviennent injoignables et la sauvegarde ne peut plus atteindre OPNsense.'+SIM};
if(active.has('switch')&&step.link&&(step.from==='switch'||step.to==='switch'))return step.to==='switch'
?{...step,breakAt:.92,denied:true,broken:true,decision:'SW-B arrêté · trame perdue',title:'SW-B ne répond plus',text:'La trame arrive sur PC B mais aucun commutateur ne la remet sur un port d’accès. Ubuntu et TrueNAS sont isolés, même si le câble et le pare-feu fonctionnent.'+SIM}
:{node:'switch',decision:'SW-B arrêté · aucun port actif',denied:true,broken:true,title:'SW-B ne répond plus',text:'Le commutateur est arrêté : la trame ne quitte pas l’accès de son VLAN. Aucun équipement ne remplace son rôle de couche 2 sur PC B.'+SIM};
if(active.has('rule')&&rule==='clients-app'&&(step.node==='fw'||step.from==='fw'))return {node:'fw',rule,decision:'Règle désactivée · refus par défaut',denied:true,broken:true,title:'La règle CLIENTS → 8443 est désactivée',text:'Sans autorisation explicite, OPNsense applique le refus final journalisé. Windows n’atteint plus InvoiceShelf et le refus apparaît dans les journaux du pare-feu.'+SIM};
if(active.has('app')&&flow.id!=='backup'&&(step.link==='backend'||step.node==='app'&&!step.denied))return step.link==='backend'
?{...step,breakAt:.88,denied:true,broken:true,decision:'502 · InvoiceShelf ne répond pas',title:'Le conteneur InvoiceShelf est arrêté',text:'Le réseau, le pare-feu et Nginx fonctionnent encore, mais le backend8080 ne répond plus. Le client reçoit une erreur 502 et la sonde HTTPS doit signaler l’incident.'+SIM}
:{node:'app',decision:'Conteneur arrêté · service indisponible',denied:true,broken:true,title:'Le conteneur InvoiceShelf est arrêté',text:'Le chemin réseau est autorisé jusqu’à Ubuntu, mais l’application ne répond plus. La disponibilité se surveille séparément du filtrage réseau.'+SIM};
return null;
}

export function simulate(model,flow,active){
let base=flow.steps,flatApplied=false;
if(active.has('flat')){const flat=flatten(base);if(flat){base=flat;flatApplied=true;}}
const steps=[];let broken=false;
for(const step of base){const hit=breakFor(step,flow,active);if(hit){steps.push(hit);broken=true;break;}steps.push({...step});if(step.broken){broken=true;break;}}
if(!broken){const last=flow.steps[flow.steps.length-1],reasons=[...active].filter(id=>!(id==='flat'&&flatApplied)).map(id=>notConcerned[id]);
steps.push({node:last.node||last.to,title:active.size?'Aucune coupure sur ce trajet':'Aucune panne choisie',text:active.size?'Le trajet aboutit : '+reasons.join(' ; ')+'. Choisissez un autre trajet pour voir l’effet.':'Cochez au moins une panne puis rejouez le trajet.'});}
return {...flow,id:'whatif',base:flow.id,name:'Et si… · '+flow.name,steps,broken,faults:[...active],policy:model.policy||[]};
}

export function describe(active){return faults.filter(f=>active.has(f.id)).map(f=>f.label).join(' + ')||'Aucune panne';}
