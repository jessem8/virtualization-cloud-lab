import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {gsap} from 'gsap';
import {icon,iconElement} from './icons.mjs';

const brand={fw:'#d5682c',windows:'#1687d5',ubuntu:'#e95420',switch:'#22628c',nas:'#2687bb',app:'#6755ad',proxy:'#25744e',data:'#786294',monitor:'#bb6c28'};
const functions={
fw:[['wan','Entrée · interface',-4,1.2,0],['fw','Route + règle',0,1.2,0],['switch','Sortie · interface',4,1.2,0]],
switch:[['switch','Trunk · tags20/30',0,2,-1],['ubuntu','Accès20 · sans tag',-3.6,1,2],['nas','Accès30 · sans tag',3.6,1,2]],
nas:[['nas','Dataset · fichiers',-3.8,1.3,0],['vpn','Compte + ACL',0,1.3,0],['layers','Snapshot · copie',3.8,1.3,0]],
windows:[['windows','Client HTTPS',-3.8,1.3,0],['fw','Defender + pare-feu',0,1.3,0],['monitor','Sysmon + audit',3.8,1.3,0]]
};
const tint={'20':0x259cff,'30':0xffb33b,client:0x47d2db,mgmt:0xb49bff,wan:0x9aafc8,vpn:0xf090bd,local:0xd7d4c9};
export function createScene(data,onOpen){
const stage=document.getElementById('stage'),labels=document.getElementById('scene-labels');
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x111c30);
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;stage.prepend(renderer.domElement);
const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-24,24,12,-12,.1,160);
camera.position.set(15,24.7,30);
const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,2.7,0);controls.enablePan=false;controls.minZoom=.75;controls.maxZoom=2.8;controls.minPolarAngle=.25;controls.maxPolarAngle=1.3;controls.minAzimuthAngle=-.3;controls.maxAzimuthAngle=1.3;
scene.add(new THREE.HemisphereLight(0xffffff,0x607a89,3));
const key=new THREE.DirectionalLight(0xffffff,3.5);key.position.set(-15,25,18);scene.add(key);
const rim=new THREE.DirectionalLight(0xb8d6e5,2);rim.position.set(18,12,-15);scene.add(rim);
const graphite=new THREE.MeshStandardMaterial({color:0x1c2b45,roughness:.55,metalness:.25}),edge=new THREE.MeshStandardMaterial({color:0x8c9cae,roughness:.65,metalness:.35}),screenMat=new THREE.MeshStandardMaterial({color:0x081222,roughness:.9}),white=new THREE.MeshStandardMaterial({color:0xdce8ee,roughness:.7});
const nodes=new Map(),hosts=new Map(),wires=new Map(),pick=[],fixed=[],zones=[],disposables=[],hopLabels=[],portMeshes=[];
const transportGroup=new THREE.Group();scene.add(transportGroup);
const focusBase=box(scene,11,.16,6,graphite,0,.05,0);focusBase.visible=false;
let queued=false,mode='physical',active=null,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,focusTimeline=null,packetTween=null,expanded=false,top=false;
const mat=c=>new THREE.MeshStandardMaterial({color:c,roughness:.55,metalness:.15});
function box(parent,w,h,d,m,x=0,y=0,z=0){const geometry=h>.25&&w>1&&d>1?new RoundedBoxGeometry(w,h,d,2,Math.min(.12,h*.18)):new THREE.BoxGeometry(w,h,d);const v=new THREE.Mesh(geometry,m);v.position.set(x,y,z);parent.add(v);return v;}
function cylinder(parent,radius,height,m,x,y,z){const v=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,32),m);v.position.set(x,y,z);parent.add(v);return v;}
const plane=new THREE.Mesh(new THREE.PlaneGeometry(160,130),mat(0x111c30));plane.rotation.x=-Math.PI/2;plane.position.y=-.3;scene.add(plane);
const leaders=document.createElementNS('http://www.w3.org/2000/svg','svg');leaders.classList.add('label-leaders');labels.append(leaders);
function plaque(id,parent,x,y,z,size=1.1){let svg=icon(id).replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ').replaceAll('currentColor',brand[id]||'#eaf3f7');const texture=new THREE.TextureLoader().load('data:image/svg+xml,'+encodeURIComponent(svg),()=>invalidate());texture.colorSpace=THREE.SRGBColorSpace;disposables.push(texture);const mesh=new THREE.Mesh(new THREE.PlaneGeometry(size,size),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}));mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
function label(id,name,position,host=false){const e=document.createElement('button');e.className=host?'host-label':'node-label';const symbol=iconElement(host?'host':id);symbol.style.color=brand[id]||(host?'#f1f8fb':'#255e61');e.append(symbol,document.createTextNode(name));e.setAttribute('aria-label',host?'Ouvrir '+name:'Ouvrir '+name);e.addEventListener('click',()=>onOpen(id));labels.append(e);return {id,el:e,position,host};}
for(const h of data.hosts){const group=new THREE.Group();scene.add(group);group.userData.id='host:'+h.id;
box(group,14,.45,12,graphite,h.x,.02,0);box(group,13.65,.08,11.6,edge,h.x,.3,0);box(group,13,.12,8.3,mat(0x4d697a),h.x,.4,-1);
box(group,3,.04,1.2,graphite,h.x,.42,4.75);
for(let row=0;row<3;row++)box(group,10,.035,.23,graphite,h.x,.43,3+row*.48);
const lid=new THREE.Group();lid.position.set(h.x,2.9,-5.8);lid.rotation.x=-.12;group.add(lid);
box(lid,14,4.7,.3,graphite);box(lid,13.35,4.1,.04,screenMat,0,0,.18);plaque('host',lid,0,.2,.22,2.3);
const tray=box(group,13.2,.09,8.3,new THREE.MeshStandardMaterial({color:0xb7ccd6,transparent:true,opacity:.25,roughness:.8,depthWrite:false}),h.x,.78,-.3);
const outline=box(group,12.8,.045,.08,mat(0x81b7aa),h.x,.85,3.55);
hosts.set(h.id,{group,tray,outline});group.traverse(o=>{if(o.isMesh){o.userData.id='host:'+h.id;pick.push(o);}});
fixed.push(label('host:'+h.id,'PC '+h.id.toUpperCase()+' · VMware',new THREE.Vector3(h.x,5.7,-5.6),true));
}
for(const n of data.nodes){const g=new THREE.Group();g.position.fromArray(n.position);g.userData.id=n.id;scene.add(g);
const child=!!n.parent,io=['mgmt','wan','vpn'].includes(n.id),color=mat(new THREE.Color(n.color)),width=child?2:io?1.8:n.id==='switch'?3.6:3.1,height=child?.45:io?.3:n.id==='nas'?2.2:n.id==='switch'?.8:1.45,depth=child?1.45:io?1.3:2.2;
box(g,width+.24,.12,depth+.24,edge,0,-height/2-.13,0);
if(!child&&!io)color.color.set(n.id==='windows'?0x9ebbc5:n.id==='nas'?0x90a3b2:n.id==='switch'?0xabb6bb:0x738d9b);
const body=n.id==='data'?cylinder(g,.88,.65,color,0,0,0):box(g,width,height,depth,color);
if(n.id==='data')for(const y of [-.27,0,.27])cylinder(g,.9,.04,white,0,y,0);
if(!io)box(g,width*.92,.07,depth+.025,mat(new THREE.Color(n.color)),0,-height/2+.1,0);
const cap=box(g,width*.94,.1,depth*.94,graphite,0,height/2+.07,0);
if(n.id==='nas'){for(let i=0;i<3;i++){box(g,1.8,.38,.12,graphite,0,-.65+i*.52,depth/2+.02);box(g,1.45,.035,.06,edge,-.08,-.63+i*.52,depth/2+.1);cylinder(g,.055,.035,mat(0x87d3bb),.85,-.65+i*.52,depth/2+.13).rotation.x=Math.PI/2;}}
else if(n.id==='windows'){const monitor=box(g,2.05,1.45,.15,graphite,0,.9,-.25);box(g,1.83,1.2,.03,screenMat,0,.9,-.15);plaque('windows',g,0,.93,-.12,1);box(g,.22,.4,.22,edge,0,-.05,-.25);}
else if(n.id==='switch'){for(let i=0;i<3;i++){box(g,.64,.29,.08,graphite,-.9+i*.9,-.04,depth/2+.04);box(g,.46,.045,.02,mat(0xdab076),-.9+i*.9,.07,depth/2+.09);}}
else if(!child&&!io){for(let i=0;i<3;i++)box(g,1.45,.06,.04,graphite,0,-.32+i*.24,depth/2+.03);}
if(n.id!=='windows')plaque(n.id,g,0,io?.1:child?.02:.15,depth/2+.09,io?.65:child?.65:.9);
const inner=new THREE.Group();inner.visible=false;scene.add(inner);
const layerLabels=[];
for(const [symbol,title,x,y,z]of functions[n.id]||[]){const module=new THREE.Group();module.position.set(x,y,z);inner.add(module);
box(module,2.5,.7,1.9,mat(n.id==='nas'?0xd9bd7c:n.id==='switch'?0x90bce8:0xb8c9df));plaque(symbol,module,0,.15,1.01,1.05);
const e=document.createElement('button');e.className='function-label';e.textContent=title;e.hidden=true;e.addEventListener('click',()=>onOpen(n.id));labels.append(e);layerLabels.push({el:e,local:new THREE.Vector3(x,y+1.05,z),functional:true});
}
if(functions[n.id]){const points=n.id==='switch'?[[0,2,-1],[-3.6,1,2],[0,2,-1],[3.6,1,2]]:[[-4,1.2,0],[0,1.2,0],[4,1.2,0]];for(let i=1;i<points.length;i++){const curve=new THREE.LineCurve3(new THREE.Vector3(...points[i-1]),new THREE.Vector3(...points[i]));inner.add(new THREE.Mesh(new THREE.TubeGeometry(curve,1,.085,8,false),new THREE.MeshBasicMaterial({color:0x58b3ff})));}}
if(n.id==='ubuntu'){
for(const [text,position]of [['VM Ubuntu · PC B',[0,7.45,0]],['Docker bridge interne',[0,1.1,0]]]){const e=document.createElement('div');e.className='function-label';e.textContent=text;e.hidden=true;labels.append(e);layerLabels.push({el:e,local:new THREE.Vector3(...position),functional:true});}
for(const [a,b,c]of [[[-3,3,.95],[0,3,.95],0x58b3ff],[[0,3,.95],[3,3,.95],0xd7d4c9]])inner.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(...a),new THREE.Vector3(...b)),1,.075,8,false),new THREE.MeshBasicMaterial({color:c})));
const frame=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(11,6.8,5)),new THREE.LineBasicMaterial({color:0x58b3ff}));frame.position.set(0,3.5,0);inner.add(frame);box(inner,11,.09,5,graphite,0,.15,0);}
g.traverse(o=>{if(o.isMesh){o.userData.id=n.id;pick.push(o);}});
const itemLabel=label(n.id,n.name,new THREE.Vector3(...n.position));itemLabel.height=height/2+.85;
nodes.set(n.id,{g,body,cap,capY:cap.position.y,inner,label:itemLabel,child,io,color,layerLabels,home:g.position.clone()});if(child){g.visible=false;itemLabel.el.hidden=true;}
}
function anchor(id,link){const p=new THREE.Vector3(...data.nodes.find(n=>n.id===id).position);const offsets=id==='switch'?(link.startsWith('trunk')?[-1.1,0,1.15]:link==='access20'?[0,0,1.15]:[1.1,0,1.15]):id==='fw'?(link.startsWith('trunk')?[1.4,0,1.15]:link==='wan'?[-1.2,0,-1.15]:link==='mgmt'?[-1.4,0,0]:link==='vpn'?[0,0,-1.15]:[-1.2,0,1.15]):[0,0,1.15];return p.add(new THREE.Vector3(...offsets));}
function curveFor(l){const a=anchor(l.from,l.id),b=anchor(l.to,l.id);if(l.id.startsWith('trunk')){const dz=l.id==='trunk20'?-.42:.42;return new THREE.CatmullRomCurve3([a,new THREE.Vector3(-2,1.1,5.6+dz),new THREE.Vector3(0,1.1,7.3+dz),new THREE.Vector3(2,1.1,5.6+dz),b],false,'catmullrom',.2);}const middle=a.clone().lerp(b,.5);middle.y=Math.max(a.y,b.y)+.85;return new THREE.CatmullRomCurve3([a,middle,b]);}
for(const l of data.links){const curve=curveFor(l),material=new THREE.MeshBasicMaterial({color:tint[l.zone]||0x7892a3,transparent:true,opacity:.7}),mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,48,l.id.startsWith('trunk')?.16:.11,8,false),material);mesh.userData.id='link:'+l.id;scene.add(mesh);pick.push(mesh);wires.set(l.id,{mesh,material,curve,data:l});
if(l.kind==='network')for(const [id,port]of [[l.from,l.fromPort],[l.to,l.toPort]]){const p=anchor(id,l.id);const socket=box(scene,.36,.25,.26,graphite,p.x,p.y,p.z);socket.userData.id='link:'+l.id;pick.push(socket);portMeshes.push(socket);
const e=document.createElement('button');e.className='port-label';e.textContent=port;e.hidden=true;e.addEventListener('click',()=>onOpen('link:'+l.id));labels.append(e);hopLabels.push({el:e,position:p.clone().add(new THREE.Vector3(0,.7,.1)),link:l.id});}}
const decision=document.createElement('div');decision.className='decision-marker';decision.hidden=true;labels.append(decision);let decisionAt=null,currentLink=null,currentNode=null;
const cable=new THREE.CatmullRomCurve3([new THREE.Vector3(-2,.45,5.6),new THREE.Vector3(0,.42,7.25),new THREE.Vector3(2,.45,5.6)]);transportGroup.add(new THREE.Mesh(new THREE.TubeGeometry(cable,32,.28,12,false),mat(0xdf9440)));
for(const x of [-2,2]){box(transportGroup,.85,.5,1.05,edge,x,.54,5.6);box(transportGroup,.6,.28,.08,graphite,x,.55,6.15);for(let i=0;i<4;i++)box(transportGroup,.06,.18,.03,mat(0xffc966),x-.18+i*.12,.55,6.2);}
const zoneNames={windows:'CLIENTS · non tagué',ubuntu:'SERVEURS · VLAN20',nas:'STOCKAGE · VLAN30'};
for(const id of ['windows','ubuntu','nas']){const n=data.nodes.find(n=>n.id===id),c=id==='windows'?tint.client:id==='ubuntu'?tint['20']:tint['30'];const group=new THREE.Group();group.position.set(n.position[0],.85,n.position[2]);scene.add(group);
box(group,4.8,.08,4,new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:.3,depthWrite:false}));
const frame=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(4.8,3.1,4)),new THREE.LineBasicMaterial({color:c,transparent:true,opacity:.65}));frame.position.y=1.55;group.add(frame);group.visible=false;zones.push(group);
const e=document.createElement('div');e.className='zone-label';e.textContent=zoneNames[id];e.style.setProperty('--zone',new THREE.Color(c).getStyle());labels.append(e);fixed.push({el:e,position:new THREE.Vector3(n.position[0],4.5,n.position[2]),security:true});
}
const serviceBoundary=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(8,5,6.5)),new THREE.LineBasicMaterial({color:0x58b3ff,transparent:true,opacity:.6}));serviceBoundary.position.set(11,3.2,-3.5);serviceBoundary.visible=false;scene.add(serviceBoundary);
const ownershipLabel=document.createElement('div');ownershipLabel.className='zone-label';ownershipLabel.textContent='Services dans la VM Ubuntu · PC B';labels.append(ownershipLabel);fixed.push({el:ownershipLabel,position:new THREE.Vector3(11,6,-3.5),services:true});
const pulse=new THREE.Mesh(new THREE.ConeGeometry(.3,.8,8),new THREE.MeshBasicMaterial({color:0xdba851}));scene.add(pulse);pulse.visible=false;
function layout(){const rect=stage.getBoundingClientRect(),items=[];leaders.replaceChildren();leaders.setAttribute('viewBox','0 0 '+rect.width+' '+rect.height);
for(const [id,item]of nodes){const n=data.nodes.find(n=>n.id===id),visible=item.g.visible&&(!active||active===id||active==='ubuntu'&&item.child||active==='host:'+n.host)&&(!item.io||active===id||currentNode===id||currentLink===id||id==='vpn'&&mode==='security');item.label.el.hidden=!visible;if(!visible)continue;const pos=item.g.position.clone();pos.y+=item.label.height+(active===id?1.4:0);pos.project(camera);if(Math.abs(pos.z)>1){item.label.el.hidden=true;continue;}items.push({el:item.label.el,ax:(pos.x*.5+.5)*rect.width,ay:(-.5*pos.y+.5)*rect.height,w:item.label.el.offsetWidth,h:item.label.el.offsetHeight});}
for(const f of fixed){f.el.hidden=!!active||(f.security&&mode!=='security')||(f.services&&!expanded);if(f.el.hidden)continue;const p=f.position.clone().project(camera);items.push({el:f.el,ax:(p.x*.5+.5)*rect.width,ay:(-.5*p.y+.5)*rect.height,w:f.el.offsetWidth,h:f.el.offsetHeight});}
for(const [id,item]of nodes){for(const l of item.layerLabels){l.el.hidden=active!==id;if(l.el.hidden)continue;const p=l.local.clone().project(camera);items.push({el:l.el,ax:(p.x*.5+.5)*rect.width,ay:(-.5*p.y+.5)*rect.height,w:l.el.offsetWidth,h:l.el.offsetHeight});}}
for(const l of hopLabels){l.el.hidden=!!active||l.link!==currentLink;if(l.el.hidden)continue;const p=l.position.clone().project(camera);items.push({el:l.el,ax:(p.x*.5+.5)*rect.width,ay:(-.5*p.y+.5)*rect.height,w:l.el.offsetWidth,h:l.el.offsetHeight});}
decision.hidden=!decisionAt||!!active;if(!decision.hidden){const p=nodes.get(decisionAt).home.clone().add(new THREE.Vector3(0,3.2,0)).project(camera);items.unshift({el:decision,ax:(p.x*.5+.5)*rect.width,ay:(-.5*p.y+.5)*rect.height,w:decision.offsetWidth,h:decision.offsetHeight});}
items.sort((a,b)=>a.ay-b.ay);const placed=[];
for(const item of items){
const minX=item.w/2+12,maxX=rect.width-item.w/2-12,minY=item.h/2+10,maxY=rect.height-item.h/2-10;
const candidates=[[0,0],[0,-44],[0,44],[-item.w*.65-14,0],[item.w*.65+14,0],[-item.w*.65-14,-44],[item.w*.65+14,44],[0,-88],[0,88],[-item.w-20,0],[item.w+20,0]];
let best=null,bestScore=Infinity;
for(const [dx,dy]of candidates){const x=Math.max(minX,Math.min(maxX,item.ax+dx)),y=Math.max(minY,Math.min(maxY,item.ay+dy));let overlap=0;for(const p of placed){const ox=(p.w+item.w)/2+8-Math.abs(p.x-x),oy=(p.h+item.h)/2+8-Math.abs(p.y-y);if(ox>0&&oy>0)overlap+=ox*oy;}const score=overlap*100+Math.hypot(x-item.ax,y-item.ay);if(score<bestScore){bestScore=score;best={x,y};}}
item.x=best.x;item.y=best.y;item.el.style.left=item.x+'px';item.el.style.top=item.y+'px';
if(Math.hypot(item.ax-item.x,item.ay-item.y)>12){const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M'+item.ax+' '+item.ay+' L'+item.x+' '+item.y);path.setAttribute('stroke','#7993a4');path.setAttribute('fill','none');leaders.append(path);}placed.push(item);
}
}
function render(){queued=false;renderer.render(scene,camera);layout();}
function invalidate(){if(!queued){queued=true;requestAnimationFrame(render);}}
controls.addEventListener('change',invalidate);controls.addEventListener('start',()=>{focusTimeline?.progress(1);focusTimeline?.kill();focusTimeline=null;});
let overviewBounds=null;
function resize(){const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;renderer.setSize(w,h);let half=Math.max(10.6,18/(w/h));if(!overviewBounds){scene.updateMatrixWorld(true);overviewBounds=new THREE.Box3();hosts.forEach(v=>overviewBounds.expandByObject(v.group));}if(!active){camera.updateMatrixWorld(true);for(const x of [overviewBounds.min.x,overviewBounds.max.x])for(const y of [overviewBounds.min.y,overviewBounds.max.y])for(const z of [overviewBounds.min.z,overviewBounds.max.z]){const p=new THREE.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse);half=Math.max(half,Math.abs(p.y)*1.06,Math.abs(p.x)/(w/h)*1.06);}}camera.left=-half*w/h;camera.right=half*w/h;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();invalidate();}
new ResizeObserver(resize).observe(stage);
let start=[0,0];renderer.domElement.addEventListener('pointerdown',e=>{start=[e.clientX,e.clientY];});renderer.domElement.addEventListener('pointerup',e=>{if(Math.hypot(e.clientX-start[0],e.clientY-start[1])>6)return;const r=renderer.domElement.getBoundingClientRect(),ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);const hit=ray.intersectObjects(pick.filter(p=>{let o=p;while(o){if(!o.visible)return false;o=o.parent;}return true;}))[0];if(hit)onOpen(hit.object.userData.id);});renderer.domElement.addEventListener('dblclick',e=>{if(e.target===renderer.domElement)document.getElementById('overview').click();});
function setExpanded(value){expanded=value;serviceBoundary.visible=value&&!active;for(const n of data.nodes.filter(n=>n.parent)){nodes.get(n.id).g.visible=value;nodes.get(n.id).label.el.hidden=!value;}for(const l of wires.values())if(['https','backend','sqlite','prom'].includes(l.data.id))l.mesh.visible=value;invalidate();}
function animateView(id,opened){focusTimeline?.kill();top=false;const hostFocus=opened&&id.startsWith('host:'),nodeFocus=opened&&!hostFocus;
focusBase.visible=nodeFocus;transportGroup.visible=!opened;serviceBoundary.visible=false;
focusTimeline=gsap.timeline({onComplete:resize,defaults:{duration:reduced?0:.8,ease:'power3.out',onUpdate:invalidate}});
for(const [key,n]of nodes){const current=opened&&key===id,childShown=id==='ubuntu'&&n.child,hostShown=hostFocus&&data.nodes.find(v=>v.id===key).host===id.slice(5);
n.g.visible=opened?(current||childShown||hostShown&&!n.child):!n.child;
n.inner.visible=current&&!!functions[id]||current&&id==='ubuntu';
const destination=n.home.clone();if(nodeFocus&&current)destination.set(0,.9,3);
if(childShown){const i=['proxy','app','data','monitor'].indexOf(key);destination.fromArray({proxy:[-3,3,0],app:[0,3,0],data:[3,3,0],monitor:[0,5.5,0]}[key]);}
focusTimeline.to(n.g.position,{x:destination.x,y:destination.y,z:destination.z},0);
focusTimeline.to(n.cap.position,{y:n.capY},0);
focusTimeline.to(n.g.scale,{x:current?1.15:1,y:current?1.15:1,z:current?1.15:1},0);
n.color.emissive.set(current?0x123b70:0);n.color.emissiveIntensity=current?.25:0;n.label.el.classList.toggle('selected',current);
}
for(const [h,v]of hosts)v.group.visible=!nodeFocus&&(!hostFocus||id==='host:'+h);
portMeshes.forEach(p=>p.visible=!opened);zones.forEach(z=>z.visible=!opened&&mode==='security');wires.forEach(l=>l.mesh.visible=!opened&&!['https','backend','sqlite','prom'].includes(l.data.id));
let target=new THREE.Vector3(0,2.7,0),zoom=1;
if(nodeFocus){target.set(0,id==='ubuntu'?3.2:2,0);zoom=id==='ubuntu'?1.65:functions[id]?1.8:2.3;}
if(hostFocus){target.set(id==='host:a'?-8:8,2,0);zoom=1.15;}
const cameraState={x:camera.position.x,y:camera.position.y,z:camera.position.z,tx:controls.target.x,ty:controls.target.y,tz:controls.target.z,zoom:camera.zoom},p=target.clone().add(new THREE.Vector3(15,22,30));
focusTimeline.to(cameraState,{x:p.x,y:p.y,z:p.z,tx:target.x,ty:target.y,tz:target.z,zoom,onUpdate:()=>{camera.position.set(cameraState.x,cameraState.y,cameraState.z);controls.target.set(cameraState.tx,cameraState.ty,cameraState.tz);camera.zoom=cameraState.zoom;camera.updateProjectionMatrix();controls.update();invalidate();}},0);
}
function open(id){active=id;animateView(id,true);invalidate();}
function reset(){active=null;expanded=false;currentLink=null;currentNode=null;decisionAt=null;animateView('',false);setMode(mode);}
function highlight(id,denied=false){for(const [key,n]of nodes){n.label.el.classList.toggle('selected',key===id);n.color.emissive.set(key===id?(denied?0x8f2f21:0x1d5a4f):0);n.color.emissiveIntensity=key===id?.4:0;}invalidate();}
function setMode(value){mode=value;zones.forEach(z=>z.visible=value==='security'&&!active);wires.forEach(l=>l.material.opacity=value==='physical'?(l.data.id.startsWith('trunk')?1:.5):.95);invalidate();}
function topView(){focusTimeline?.progress(1);focusTimeline?.kill();top=!top;camera.position.copy(controls.target).add(new THREE.Vector3(...(top?[0,42,.05]:[20,26,32])));controls.update();invalidate();}
function showStep(steps,index,animate,done){packetTween?.kill();pulse.visible=false;const current=steps[index];currentNode=current.node||current.to||null;setExpanded(!!nodes.get(current.node)?.child||['https','backend','sqlite','prom'].includes(current.link));
currentLink=current.link||null;decisionAt=current.decision?(current.node||null):null;decision.textContent=(current.denied&&current.node==='fw'?'REFUS · ':'')+(current.decision||'');decision.classList.toggle('denied',!!current.denied);
wires.forEach(l=>{l.material.opacity=l.data.id===currentLink?1:.15;});
highlight(current.node||current.to,current.denied);document.getElementById('transport-strip').dataset.active=current.link||'';if(current.link){const l=wires.get(current.link);const reverse=l.data.from!==current.from,state={t:reverse?1:0};pulse.material.color.set(tint[l.data.zone]||0xdba851);pulse.position.copy(l.curve.getPoint(state.t));pulse.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),l.curve.getTangent(state.t).multiplyScalar(reverse?-1:1));pulse.visible=true;if(animate&&!reduced){packetTween=gsap.to(state,{t:reverse?0:1,duration:1.65,ease:'none',onUpdate:()=>{pulse.position.copy(l.curve.getPoint(state.t));pulse.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),l.curve.getTangent(state.t).multiplyScalar(reverse?-1:1));invalidate();},onComplete:done});}else{pulse.position.copy(l.curve.getPoint(reverse?0:1));pulse.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),l.curve.getTangent(reverse?0:1).multiplyScalar(reverse?-1:1));}}invalidate();}
function pause(){packetTween?.pause();}
function stop(){packetTween?.kill();packetTween=null;pulse.visible=false;currentLink=null;currentNode=null;decisionAt=null;invalidate();}
function inspectLink(id){stop();const l=wires.get(id);if(!l)return;setExpanded(l.data.kind!=='network');currentLink=id;wires.forEach(w=>w.material.opacity=w===l?1:.15);invalidate();}
function finishView(){focusTimeline?.progress(1);}
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();pause();document.dispatchEvent(new CustomEvent('lab-webgl-lost'));});
setExpanded(false);controls.update();resize();
return {open,reset,inspectLink,finishView,highlight,setExpanded,setMode,showStep,pause,stop,topView,setReduced:value=>{reduced=value;focusTimeline?.progress(1);packetTween?.progress(1);invalidate();},setVisible:value=>{renderer.domElement.hidden=!value;labels.hidden=!value;if(value)resize();},info:()=>({drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,pixelRatio:renderer.getPixelRatio()})};
}
