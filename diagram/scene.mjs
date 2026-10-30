import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {gsap} from 'gsap';
import {icon,iconElement} from './icons.mjs';
import {createFx} from './fx.mjs';
import {createCameraRig} from './camera.mjs';
import {createPacket,createGate,createFlowLine} from './packet.mjs';

const brand={fw:'#d5682c',windows:'#1687d5',ubuntu:'#e95420',switch:'#22628c',nas:'#2687bb',app:'#6755ad',proxy:'#25744e',data:'#786294',monitor:'#bb6c28'};
const functions={
fw:[['wan','Entrée · interface',-4,1.2,0],['fw','Route + règle',0,1.2,0],['switch','Sortie · interface',4,1.2,0]],
switch:[['switch','Trunk · tags20/30',0,2,-1],['ubuntu','Accès20 · sans tag',-3.6,1,2],['nas','Accès30 · sans tag',3.6,1,2]],
nas:[['nas','Dataset · fichiers',-3.8,1.3,0],['vpn','Compte + ACL',0,1.3,0],['layers','Snapshot · copie',3.8,1.3,0]],
windows:[['windows','Client HTTPS',-3.8,1.3,0],['fw','Defender + pare-feu',0,1.3,0],['monitor','Sysmon + audit',3.8,1.3,0]]
};
const tint={'20':0x259cff,'30':0xffb33b,client:0x47d2db,mgmt:0xb49bff,wan:0x9aafc8,vpn:0xf090bd,local:0xd7d4c9};
const gateScale={fw:1,nas:.72,switch:.8,windows:.72,ubuntu:.8,app:.55,proxy:.55,data:.5,monitor:.55,vpn:.5};
const serviceLinks=['https','backend','sqlite','prom'];

function groundTexture(){
const c=document.createElement('canvas');c.width=c.height=1024;const g=c.getContext('2d');
const r=g.createRadialGradient(512,500,30,512,512,560);r.addColorStop(0,'#21395d');r.addColorStop(.45,'#142542');r.addColorStop(1,'#080f1d');g.fillStyle=r;g.fillRect(0,0,1024,1024);
g.lineWidth=1;for(let i=0;i<=1024;i+=16){g.strokeStyle=i%128===0?'rgba(130,185,240,.12)':'rgba(120,170,220,.045)';g.beginPath();g.moveTo(i,0);g.lineTo(i,1024);g.stroke();g.beginPath();g.moveTo(0,i);g.lineTo(1024,i);g.stroke();}
const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;return t;
}

export function createScene(data,onOpen,{onAutoQuality,quality='economy'}={}){
const stage=document.getElementById('stage'),labels=document.getElementById('scene-labels');
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setClearColor(0x080f1d);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.info.autoReset=false;stage.prepend(renderer.domElement);
const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-24,24,12,-12,.1,160);
camera.position.set(15,24.7,30);
let frozen=false,frames=0,focusSet=new Set(),pathLinks=new Set(),queued=false,mode='physical',active=null,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,focusTimeline=null,packetTimeline=null,expanded=false,top=false,ambient=false,lastFrame=0,looping=false,highlighted=null,hoverId=null;
function invalidate(){if(!queued){queued=true;requestAnimationFrame(render);}}
const rig=createCameraRig(camera,renderer.domElement,invalidate,reduced);
rig.controls.setLookAt(15,24.7,30,0,2.7,0,false);
const fx=createFx(renderer,scene,camera,()=>{resize();onAutoQuality?.('economy');},quality);
scene.add(new THREE.HemisphereLight(0xdfefff,0x253650,1.55));
const key=new THREE.DirectionalLight(0xfff3e4,2.8);key.position.set(-15,25,18);key.castShadow=true;
Object.assign(key.shadow.camera,{left:-30,right:30,top:24,bottom:-24,near:1,far:90});key.shadow.mapSize.set(2048,2048);key.shadow.bias=-.0004;key.shadow.normalBias=.035;scene.add(key);
const rim=new THREE.DirectionalLight(0x8fc4ff,1.7);rim.position.set(18,12,-15);scene.add(rim);
const fill=new THREE.PointLight(0x4f8dff,40,40,1.6);fill.position.set(0,6,9);scene.add(fill);
const graphite=new THREE.MeshStandardMaterial({color:0x1c2b45,roughness:.42,metalness:.45}),edge=new THREE.MeshStandardMaterial({color:0x8c9cae,roughness:.45,metalness:.55}),screenMat=new THREE.MeshStandardMaterial({color:0x081222,roughness:.25,metalness:.2,emissive:0x0c2a4f,emissiveIntensity:.9}),white=new THREE.MeshStandardMaterial({color:0xdce8ee,roughness:.5});
const ledGeometry=new THREE.BoxGeometry(.11,.07,.04);
const nodes=new Map(),hosts=new Map(),wires=new Map(),pick=[],fixed=[],zones=[],disposables=[];
const transportGroup=new THREE.Group();scene.add(transportGroup);
const mat=c=>new THREE.MeshStandardMaterial({color:c,roughness:.48,metalness:.18});
function box(parent,w,h,d,m,x=0,y=0,z=0){const geometry=h>.25&&w>1&&d>1?new RoundedBoxGeometry(w,h,d,2,Math.min(.12,h*.18)):new THREE.BoxGeometry(w,h,d);const v=new THREE.Mesh(geometry,m);v.position.set(x,y,z);parent.add(v);return v;}
const focusBase=box(scene,11,.16,6,graphite,0,.05,0);focusBase.visible=false;
function cylinder(parent,radius,height,m,x,y,z){const v=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,32),m);v.position.set(x,y,z);parent.add(v);return v;}
const ground=new THREE.Mesh(new THREE.PlaneGeometry(160,130),new THREE.MeshBasicMaterial({map:groundTexture()}));ground.rotation.x=-Math.PI/2;ground.position.y=-.3;scene.add(ground);
const shadowCatcher=new THREE.Mesh(new THREE.PlaneGeometry(70,56),new THREE.ShadowMaterial({color:0x01050d,opacity:.55}));shadowCatcher.rotation.x=-Math.PI/2;shadowCatcher.position.y=-.29;shadowCatcher.receiveShadow=true;scene.add(shadowCatcher);
const leaders=document.createElementNS('http://www.w3.org/2000/svg','svg');leaders.classList.add('label-leaders');labels.append(leaders);
function plaque(id,parent,x,y,z,size=1.1){let svg=icon(id).replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" ').replaceAll('currentColor',brand[id]||'#eaf3f7');const texture=new THREE.TextureLoader().load('data:image/svg+xml,'+encodeURIComponent(svg),()=>invalidate());texture.colorSpace=THREE.SRGBColorSpace;disposables.push(texture);const mesh=new THREE.Mesh(new THREE.PlaneGeometry(size,size),new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}));mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
function label(id,name,position,host=false){const e=document.createElement('button');e.className=host?'host-label':'node-label';const symbol=iconElement(host?'host':id);symbol.style.color=brand[id]||(host?'#f1f8fb':'#255e61');const text=document.createElement('span');text.textContent=name;e.append(symbol,text);e.setAttribute('aria-label','Ouvrir '+name);e.addEventListener('click',()=>onOpen(id));labels.append(e);return {id,el:e,position,host};}
for(const h of data.hosts){const group=new THREE.Group();scene.add(group);group.userData.id='host:'+h.id;
box(group,14,.45,12,graphite,h.x,.02,0);box(group,13.65,.08,11.6,edge,h.x,.3,0);box(group,13,.12,8.3,mat(0x4d697a),h.x,.4,-1);
box(group,3,.04,1.2,graphite,h.x,.42,4.75);
for(let row=0;row<3;row++)box(group,10,.035,.23,graphite,h.x,.43,3+row*.48);
const lid=new THREE.Group();lid.position.set(h.x,2.9,-5.8);lid.rotation.x=-.12;group.add(lid);
box(lid,14,4.7,.3,graphite);box(lid,13.35,4.1,.04,screenMat,0,0,.18);plaque('host',lid,0,.2,.22,2.3);
const tray=box(group,13.2,.09,8.3,new THREE.MeshStandardMaterial({color:0xb7ccd6,transparent:true,opacity:.25,roughness:.8,depthWrite:false}),h.x,.78,-.3);
const outline=box(group,12.8,.045,.08,new THREE.MeshStandardMaterial({color:0x81b7aa,emissive:0x3fb3a0,emissiveIntensity:1.4}),h.x,.85,3.55);
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
if(n.id==='nas'){for(let i=0;i<3;i++){box(g,1.8,.38,.12,graphite,0,-.65+i*.52,depth/2+.02);box(g,1.45,.035,.06,edge,-.08,-.63+i*.52,depth/2+.1);cylinder(g,.055,.035,new THREE.MeshBasicMaterial({color:new THREE.Color(0x87d3bb).multiplyScalar(2.2)}),.85,-.65+i*.52,depth/2+.13).rotation.x=Math.PI/2;}}
else if(n.id==='windows'){box(g,2.05,1.45,.15,graphite,0,.9,-.25);box(g,1.83,1.2,.03,screenMat,0,.9,-.15);plaque('windows',g,0,.93,-.12,1);box(g,.22,.4,.22,edge,0,-.05,-.25);}
else if(n.id==='switch'){for(let i=0;i<3;i++){box(g,.64,.29,.08,graphite,-.9+i*.9,-.04,depth/2+.04);box(g,.46,.045,.02,new THREE.MeshBasicMaterial({color:new THREE.Color(0xdab076).multiplyScalar(1.8)}),-.9+i*.9,.07,depth/2+.09);}}
else if(!child&&!io){for(let i=0;i<3;i++)box(g,1.45,.06,.04,graphite,0,-.32+i*.24,depth/2+.03);}
if(n.id!=='windows')plaque(n.id,g,0,io?.1:child?.02:.15,depth/2+.09,io?.65:child?.65:.9);
const leds=[];if(!child&&!io)for(let i=0;i<3;i++){const led=new THREE.Mesh(ledGeometry,new THREE.MeshBasicMaterial({color:i===2?0x58b3ff:0x3ddc84}));led.position.set(width/2-.28-i*.2,height/2-.2,depth/2+.04);led.userData.phase=Math.random()*6.28;led.userData.base=new THREE.Color(i===2?0x58b3ff:0x3ddc84);g.add(led);leds.push(led);}
const inner=new THREE.Group();inner.visible=false;scene.add(inner);
const layerLabels=[];
for(const [symbol,title,x,y,z]of functions[n.id]||[]){const module=new THREE.Group();module.position.set(x,y,z);inner.add(module);
box(module,2.5,.7,1.9,mat(n.id==='nas'?0xd9bd7c:n.id==='switch'?0x90bce8:0xb8c9df));plaque(symbol,module,0,.15,1.01,1.05);
const e=document.createElement('button');e.className='function-label';e.textContent=title;e.hidden=true;e.addEventListener('click',()=>onOpen(n.id));labels.append(e);layerLabels.push({el:e,local:new THREE.Vector3(x,y+1.05,z),functional:true});
}
if(functions[n.id]){const points=n.id==='switch'?[[0,2,-1],[-3.6,1,2],[0,2,-1],[3.6,1,2]]:[[-4,1.2,0],[0,1.2,0],[4,1.2,0]];for(let i=1;i<points.length;i++){const curve=new THREE.LineCurve3(new THREE.Vector3(...points[i-1]),new THREE.Vector3(...points[i]));inner.add(new THREE.Mesh(new THREE.TubeGeometry(curve,1,.085,8,false),new THREE.MeshBasicMaterial({color:new THREE.Color(0x58b3ff).multiplyScalar(1.6)})));}}
if(n.id==='ubuntu'){
for(const [text,position]of [['VM Ubuntu · PC B',[0,7.45,0]],['Docker bridge interne',[0,1.1,0]]]){const e=document.createElement('div');e.className='function-label';e.textContent=text;e.hidden=true;labels.append(e);layerLabels.push({el:e,local:new THREE.Vector3(...position),functional:true});}
for(const [a,b,c]of [[[-3,3,.95],[0,3,.95],0x58b3ff],[[0,3,.95],[3,3,.95],0xd7d4c9]])inner.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(...a),new THREE.Vector3(...b)),1,.075,8,false),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(1.5)})));
const frame=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(11,6.8,5)),new THREE.LineBasicMaterial({color:new THREE.Color(0x58b3ff).multiplyScalar(1.8)}));frame.position.set(0,3.5,0);inner.add(frame);box(inner,11,.09,5,graphite,0,.15,0);}
g.traverse(o=>{if(o.isMesh){o.userData.id=n.id;pick.push(o);}});
const itemLabel=label(n.id,n.name,new THREE.Vector3(...n.position));itemLabel.height=height/2+.85;
nodes.set(n.id,{g,body,cap,capY:cap.position.y,inner,label:itemLabel,child,io,color,layerLabels,leds,height,home:g.position.clone()});if(child){g.visible=false;itemLabel.el.hidden=true;}
}
function anchor(id,link){const p=new THREE.Vector3(...data.nodes.find(n=>n.id===id).position);const offsets=id==='switch'?(link.startsWith('trunk')?[-1.1,0,1.15]:link==='access20'?[0,0,1.15]:[1.1,0,1.15]):id==='fw'?(link.startsWith('trunk')?[1.4,0,1.15]:link==='wan'?[-1.2,0,-1.15]:link==='mgmt'?[-1.4,0,0]:link==='vpn'?[0,0,-1.15]:[-1.2,0,1.15]):[0,0,1.15];return p.add(new THREE.Vector3(...offsets));}
function curveFor(l){const a=anchor(l.from,l.id),b=anchor(l.to,l.id);if(l.id.startsWith('trunk')){const dz=l.id==='trunk20'?-.42:.42;return new THREE.CatmullRomCurve3([a,new THREE.Vector3(-2,1.1,5.6+dz),new THREE.Vector3(0,1.1,7.3+dz),new THREE.Vector3(2,1.1,5.6+dz),b],false,'catmullrom',.2);}const middle=a.clone().lerp(b,.5);middle.y=Math.max(a.y,b.y)+.85;return new THREE.CatmullRomCurve3([a,middle,b]);}
for(const l of data.links){const curve=curveFor(l),base=new THREE.Color(tint[l.zone]||0x7892a3),material=new THREE.MeshBasicMaterial({color:base.clone(),transparent:true,opacity:.7}),mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,48,l.id.startsWith('trunk')?.16:.11,10,false),material);mesh.userData.id='link:'+l.id;scene.add(mesh);pick.push(mesh);wires.set(l.id,{mesh,material,curve,data:l,base});
}
const decision=document.createElement('div');decision.className='decision-marker';decision.hidden=true;labels.append(decision);let decisionPos=null,currentLink=null,currentNode=null;
const cable=new THREE.CatmullRomCurve3([new THREE.Vector3(-2,.45,5.6),new THREE.Vector3(0,.42,7.25),new THREE.Vector3(2,.45,5.6)]);transportGroup.add(new THREE.Mesh(new THREE.TubeGeometry(cable,32,.28,14,false),new THREE.MeshStandardMaterial({color:0xdf9440,roughness:.32,metalness:.25})));
for(const x of [-2,2]){box(transportGroup,.85,.5,1.05,edge,x,.54,5.6);box(transportGroup,.6,.28,.08,graphite,x,.55,6.15);for(let i=0;i<4;i++)box(transportGroup,.06,.18,.03,new THREE.MeshBasicMaterial({color:new THREE.Color(0xffc966).multiplyScalar(1.8)}),x-.18+i*.12,.55,6.2);}
const zoneNames={windows:'CLIENTS · non tagué',ubuntu:'SERVEURS · VLAN20',nas:'STOCKAGE · VLAN30'};
for(const id of ['windows','ubuntu','nas']){const n=data.nodes.find(n=>n.id===id),c=id==='windows'?tint.client:id==='ubuntu'?tint['20']:tint['30'];const group=new THREE.Group();group.position.set(n.position[0],.85,n.position[2]);scene.add(group);
box(group,4.8,.08,4,new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:.3,depthWrite:false}));
const frame=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(4.8,3.1,4)),new THREE.LineBasicMaterial({color:new THREE.Color(c).multiplyScalar(1.6),transparent:true,opacity:.75}));frame.position.y=1.55;group.add(frame);group.visible=false;zones.push(group);
const e=document.createElement('button');e.type='button';e.className='zone-label';e.dataset.tag=zoneNames[id];e.textContent=zoneNames[id];e.style.setProperty('--zone',new THREE.Color(c).getStyle());labels.append(e);fixed.push({el:e,position:new THREE.Vector3(n.position[0],4.5,n.position[2]),security:true});
}
const serviceBoundary=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(8,5,6.5)),new THREE.LineBasicMaterial({color:new THREE.Color(0x58b3ff).multiplyScalar(1.6),transparent:true,opacity:.7}));serviceBoundary.position.set(11,3.2,-3.5);serviceBoundary.visible=false;scene.add(serviceBoundary);
scene.traverse(o=>{if(o.isMesh&&!o.material.transparent&&o!==ground&&!o.material.isMeshBasicMaterial){o.castShadow=true;o.receiveShadow=true;}});
const packet=createPacket(scene,labels,tint,plaque,invalidate),gate=createGate(scene,invalidate),flowLine=createFlowLine(scene);pick.push(...packet.picks);
// The packet chip ('VLAN20', 'Sans tag') explains tagging on click.
const chipEl=labels.querySelector('.packet-chip');chipEl?.addEventListener('click',()=>document.dispatchEvent(new CustomEvent('lab-tag',{detail:{text:chipEl.textContent,el:chipEl}})));
let layoutFrame=0;
function layout(dt=1/60){const rect=stage.getBoundingClientRect(),items=[],moving=[];leaders.replaceChildren();leaders.setAttribute('viewBox','0 0 '+rect.width+' '+rect.height);layoutFrame++;
const project=(el,position,list=items)=>{const p=position.clone().project(camera);if(Math.abs(p.z)>1){el.hidden=true;return;}list.push({el,ax:(p.x*.5+.5)*rect.width,ay:(-.5*p.y+.5)*rect.height,w:el.offsetWidth,h:el.offsetHeight});};
for(const [id,item]of nodes){const n=data.nodes.find(n=>n.id===id),visible=item.g.visible&&(!active||active===id||active==='ubuntu'&&item.child||active==='host:'+n.host)&&(!item.io||active===id||currentNode===id||currentLink===id||id==='vpn'&&mode==='security');const shown=visible&&(active===id||focusSet.has(id)||hoverId===id||highlighted===id);item.label.el.hidden=!shown;if(!shown)continue;const pos=item.g.position.clone();pos.y+=item.label.height+(active===id?1.4:0);project(item.label.el,pos);}
for(const f of fixed){f.el.hidden=!!active||(f.security&&mode!=='security')||(f.services&&!expanded);if(!f.el.hidden)project(f.el,f.position);}
for(const [id,item]of nodes){for(const l of item.layerLabels){l.el.hidden=active!==id;if(!l.el.hidden)project(l.el,l.local);}}
const packetLabels=active?[]:packet.labels();packet.showLabels(packetLabels);for(const item of packetLabels)project(item.el,item.position,moving);
decision.hidden=!decisionPos||!!active;if(!decision.hidden)project(decision,decisionPos,moving);
items.sort((a,b)=>a.ay-b.ay);const placed=[],ease=1-Math.exp(-dt*11);let settling=false;
// Static labels are placed first so the moving packet labels never push them around.
for(const item of [...items,...moving]){
const el=item.el,minX=item.w/2+12,maxX=rect.width-item.w/2-12,minY=item.h/2+10,maxY=rect.height-item.h/2-10;
const candidates=el.classList.contains('packet-chip')?[[0,0],[0,-40]]:[[0,0],[0,-44],[0,44],[-item.w*.65-14,0],[item.w*.65+14,0],[-item.w*.65-14,-44],[item.w*.65+14,44],[0,-88],[0,88],[-item.w-20,0],[item.w+20,0]];
const options=candidates.map(([dx,dy])=>{const x=Math.max(minX,Math.min(maxX,item.ax+dx)),y=Math.max(minY,Math.min(maxY,item.ay+dy));let overlap=0;for(const p of placed){const ox=(p.w+item.w)/2+8-Math.abs(p.x-x),oy=(p.h+item.h)/2+8-Math.abs(p.y-y);if(ox>0&&oy>0)overlap+=ox*oy;}return {x,y,score:overlap*100+Math.hypot(x-item.ax,y-item.ay)};});
let slot=0;options.forEach((o,i)=>{if(o.score<options[slot].score)slot=i;});
if(options[el._slot]&&options[el._slot].score<=options[slot].score+120)slot=el._slot;
const fresh=el._frame!==layoutFrame-1,tx=options[slot].x-item.ax,ty=options[slot].y-item.ay;
if(fresh||Math.abs(tx-el._ox)<.5&&Math.abs(ty-el._oy)<.5){el._ox=tx;el._oy=ty;}else{el._ox+=(tx-el._ox)*ease;el._oy+=(ty-el._oy)*ease;settling=true;}
el._slot=slot;el._frame=layoutFrame;item.x=item.ax+el._ox;item.y=item.ay+el._oy;
el.style.left=Math.round(item.x)+'px';el.style.top=Math.round(item.y)+'px';
if(Math.hypot(el._ox,el._oy)>12){const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M'+Math.round(item.ax)+' '+Math.round(item.ay)+' L'+Math.round(item.x)+' '+Math.round(item.y));path.setAttribute('stroke','#7993a4');path.setAttribute('fill','none');leaders.append(path);}placed.push(item);
}
return settling;
}
function pulseLeds(now){const t=now/1000;for(const [id,n]of nodes){if(!n.leds.length)continue;const hot=id===highlighted;n.leds.forEach((led,i)=>{const flicker=hot?.55+.45*Math.abs(Math.sin(t*9+led.userData.phase)):.75+.25*Math.sin(t*1.3+led.userData.phase);led.material.color.copy(led.userData.base).multiplyScalar((hot?3.4:2.1)*flicker);});}}
function render(now){queued=false;frames++;const gap=now-lastFrame;lastFrame=now;const dt=gap<=0?1/60:Math.min(gap,100)/1000;
const moving=rig.update(dt);if(ambient&&!frozen)flowLine.tick(dt);pulseLeds(now);
renderer.info.reset();fx.render(dt);const settling=layout(dt);
const continuous=moving||ambient;if(continuous&&looping)fx.sample(gap);else if(continuous)fx.resetSamples();looping=continuous;if(continuous||settling)invalidate();}
let overviewBounds=null;
function resize(){const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;renderer.setSize(w,h);fx.setSize(w,h);flowLine.setResolution(w*renderer.getPixelRatio(),h*renderer.getPixelRatio());let half=Math.max(10.6,18/(w/h));if(!overviewBounds){scene.updateMatrixWorld(true);overviewBounds=new THREE.Box3();hosts.forEach(v=>overviewBounds.expandByObject(v.group));}if(!active){const view=new THREE.Matrix4().lookAt(new THREE.Vector3(15,22,30),new THREE.Vector3(),camera.up).invert();for(const x of [overviewBounds.min.x,overviewBounds.max.x])for(const y of [overviewBounds.min.y,overviewBounds.max.y])for(const z of [overviewBounds.min.z,overviewBounds.max.z]){const p=new THREE.Vector3(x,y-2.7,z).applyMatrix4(view);half=Math.max(half,Math.abs(p.y)*1.06,Math.abs(p.x)/(w/h)*1.06);}}camera.left=-half*w/h;camera.right=half*w/h;camera.top=half;camera.bottom=-half;camera.updateProjectionMatrix();rig.refit();invalidate();}
new ResizeObserver(resize).observe(stage);
const ray=new THREE.Raycaster();
function hitAt(e){const r=renderer.domElement.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);return ray.intersectObjects(pick.filter(p=>{let o=p;while(o){if(!o.visible)return false;o=o.parent;}return true;}))[0];}
let start=[0,0],hoverEvent=null,hoverQueued=false;
renderer.domElement.addEventListener('pointerdown',e=>{start=[e.clientX,e.clientY];});
renderer.domElement.addEventListener('pointerup',e=>{if(e.button!==0||Math.hypot(e.clientX-start[0],e.clientY-start[1])>6)return;const hit=hitAt(e);if(hit)onOpen(hit.object.userData.id);});
renderer.domElement.addEventListener('pointermove',e=>{if(e.buttons)return;hoverEvent=e;if(hoverQueued)return;hoverQueued=true;requestAnimationFrame(()=>{hoverQueued=false;const id=hitAt(hoverEvent)?.object.userData.id||null;renderer.domElement.style.cursor=id?'pointer':'';setHover(id&&nodes.has(id)?id:null);});});
renderer.domElement.addEventListener('pointerleave',()=>setHover(null));
function setHover(id){if(id===hoverId)return;hoverId=id;updateOutline();invalidate();}
function updateOutline(){const id=hoverId||highlighted,objects=[];if(id&&nodes.has(id)&&!active)nodes.get(id).g.traverse(o=>{if(o.isMesh&&!o.material.transparent)objects.push(o);});fx.setOutline(objects);
// Economy has no composer outline: hover tints the node body instead.
if(fx.quality()!=='high')for(const [key,n]of nodes)if(key!==highlighted){n.color.emissive.set(key===hoverId?0x1d4f7a:0);n.color.emissiveIntensity=key===hoverId?.5:0;}
invalidate();}
function setExpanded(value){expanded=value;serviceBoundary.visible=value&&!active;for(const n of data.nodes.filter(n=>n.parent)){nodes.get(n.id).g.visible=value;nodes.get(n.id).label.el.hidden=!value;}for(const l of wires.values())if(serviceLinks.includes(l.data.id))l.mesh.visible=value;fx.shadows();invalidate();}
function clearMotion(){packetTimeline?.kill();packetTimeline=null;gate.hide();packet.kill();packet.explode(false,null,true);packet.show(false);flowLine.hide();ambient=false;decisionPos=null;}
function animateView(id,opened){focusTimeline?.kill();top=false;const hostFocus=opened&&id.startsWith('host:'),nodeFocus=opened&&!hostFocus;
focusBase.visible=nodeFocus;transportGroup.visible=!opened;serviceBoundary.visible=false;
focusTimeline=gsap.timeline({onComplete:resize,defaults:{duration:reduced?0:.8,ease:'power3.out',onUpdate:()=>{fx.shadows();invalidate();}}});
for(const [key,n]of nodes){const current=opened&&key===id,childShown=id==='ubuntu'&&n.child,hostShown=hostFocus&&data.nodes.find(v=>v.id===key).host===id.slice(5);
n.g.visible=opened?(current||childShown||hostShown&&!n.child):!n.child;
n.inner.visible=current&&!!functions[id]||current&&id==='ubuntu';
const destination=n.home.clone();if(nodeFocus&&current)destination.set(0,.9,3);
if(childShown)destination.fromArray({proxy:[-3,3,0],app:[0,3,0],data:[3,3,0],monitor:[0,5.5,0]}[key]);
focusTimeline.to(n.g.position,{x:destination.x,y:destination.y,z:destination.z},0);
focusTimeline.to(n.cap.position,{y:n.capY},0);
focusTimeline.to(n.g.scale,{x:current?1.15:1,y:current?1.15:1,z:current?1.15:1},0);
n.color.emissive.set(current?0x123b70:0);n.color.emissiveIntensity=current?.25:0;n.label.el.classList.toggle('selected',current);
}
for(const [h,v]of hosts)v.group.visible=!nodeFocus&&(!hostFocus||id==='host:'+h);
zones.forEach(z=>z.visible=!opened&&mode==='security');wires.forEach(l=>l.mesh.visible=!opened&&!serviceLinks.includes(l.data.id));
let target=new THREE.Vector3(0,2.7,0),zoom=1;
if(nodeFocus){target.set(0,id==='ubuntu'?3.2:2,0);zoom=id==='ubuntu'?1.65:functions[id]?1.8:2.3;}
if(hostFocus){target.set(id==='host:a'?-8:8,2,0);zoom=1.15;}
rig.look(target,zoom,true);updateOutline();
}
function open(id){clearMotion();active=id;animateView(id,true);invalidate();}
function reset(){clearMotion();focusLabels([]);active=null;expanded=false;currentLink=null;currentNode=null;animateView('',false);setMode(mode);}
function highlight(id,denied=false){highlighted=id||null;for(const [key,n]of nodes){n.label.el.classList.toggle('selected',key===id);n.color.emissive.set(key===id?(denied?0x8f2f21:0x1d5a4f):0);n.color.emissiveIntensity=key===id?.45:0;}updateOutline();}
function setMode(value){mode=value;zones.forEach(z=>z.visible=value==='security'&&!active);wires.forEach(l=>{l.material.opacity=value==='physical'?(l.data.id.startsWith('trunk')?1:.5):.95;l.material.color.copy(l.base);});invalidate();}
function topView(){focusTimeline?.progress(1);focusTimeline?.kill();top=!top;rig.topView(top);}
const tagOf=s=>s?.link&&s.link.startsWith('trunk')?wires.get(s.link)?.data.zone||null:null;
function frameFor(step,flow){const f={...(flow?.frame||{}),...(step.frame||{})};if(step.reply)[f.src,f.dst]=[f.dst,f.src];return f;}
function shoot(current){
if(current.shot==='overview'){rig.overview();return;}
const b=new THREE.Box3();
if(current.link){const l=wires.get(current.link);for(let i=0;i<=24;i++)b.expandByPoint(l.curve.getPoint(i/24));for(const id of [l.data.from,l.data.to]){const n=nodes.get(id);if(n.g.visible)b.expandByObject(n.g);}rig.shot(b,{pad:1.45,max:1.7});return;}
const n=nodes.get(current.node);if(!n)return;b.expandByObject(n.g);
if(current.decision){const c=b.getCenter(new THREE.Vector3()),r=2.6*(gateScale[current.node]??.7);b.expandByPoint(c.clone().add(new THREE.Vector3(r,3.4,r)));b.expandByPoint(c.clone().add(new THREE.Vector3(-r,-.5,-r)));}
else b.expandByScalar(1.2);
rig.shot(b,{pad:1.4,max:n.child?2:1.75});
}
function approachDir(current,prev,center){
if(prev?.link){const l=wires.get(prev.link);if(l){const rev=l.data.from!==prev.from,d=l.curve.getPoint(rev?0:1).sub(l.curve.getPoint(rev?.2:.8));d.y=0;if(d.lengthSq()>1e-4)return d.normalize();}}
if(prev?.node&&nodes.has(prev.node)&&prev.node!==current.node){const d=center.clone().sub(nodes.get(prev.node).g.position);d.y=0;if(d.lengthSq()>1e-4)return d.normalize();}
return new THREE.Vector3(1,0,0);
}
function simulateBreak(position,tl,at){
const fire=()=>{packet.setDenied(true);gate.play({position:position.clone().setY(position.y-.55),scale:.32,denied:true,ringOnly:true,reduced});decisionPos=position.clone().add(new THREE.Vector3(0,1.9,0));invalidate();};
if(tl)tl.add(fire,at);else fire();
}
function travel(current,prev,animate,done){
const l=wires.get(current.link),reverse=l.data.from!==current.from,end=current.breakAt??1,target=reverse?1-end:end;
const prevTag=tagOf(prev),nextTag=tagOf(current),tagger=current.from==='fw'?'OPNsense':'SW-B',local=l.data.kind==='storage';
packet.setFrame(packet.frame,{vlan:prevTag,local,tagger});packet.show(true);flowLine.show(l.curve,tint[l.data.zone]||0xdba851,reverse);
const state={t:reverse?1:0};packet.place(l.curve,state.t,reverse);
if(!animate||reduced){if(prevTag!==nextTag)packet.setFrame(packet.frame,{vlan:nextTag,local,tagger});packet.place(l.curve,target,reverse);ambient=!reduced;if(current.breakAt!=null)simulateBreak(packet.root.position.clone());return;}
ambient=true;
const tl=gsap.timeline({onUpdate:invalidate,onComplete:done});let at=0;
if(prevTag!==nextTag){tl.add(packet.tagTween(nextTag,tagger),0);at=.62;}
tl.to(state,{t:target,duration:1.65*Math.max(end,.35),ease:current.breakAt!=null?'power1.in':'power1.inOut',onUpdate:()=>packet.place(l.curve,state.t,reverse)},at);
if(current.breakAt!=null){simulateBreak(l.curve.getPoint(target).add(new THREE.Vector3(0,.55,0)),tl,'>');tl.to({},{duration:1});}
packetTimeline=tl;
}
function gateMoment(current,prev,animate,done){
const n=nodes.get(current.node),center=n.g.position.clone(),s=gateScale[current.node]??.7,R=2.4*s,dir=approachDir(current,prev,center),y=center.y+.35*s;
const point=k=>center.clone().addScaledVector(dir,k*R).setY(y);
const from=point(-1.75),contact=point(-1.02),recoil=point(-1.4),exit=point(1.65),base=center.clone().setY(center.y-n.height/2-.12);
packet.setFrame(packet.frame,{vlan:null});packet.orient(dir);packet.at(from);packet.show(true);flowLine.hide();ambient=false;
if(!animate||reduced){packet.at(current.denied?contact:center.clone().setY(y));packet.setDenied(!!current.denied);gate.play({position:base,scale:s,denied:!!current.denied,reduced:true});return;}
const p=from.clone(),tl=gsap.timeline({onUpdate:invalidate,onComplete:done}),move=(to,d,ease,pos)=>tl.to(p,{x:to.x,y:to.y,z:to.z,duration:d,ease,onUpdate:()=>packet.at(p)},pos);
if(current.denied){move(contact,.8,'power2.in',0);tl.add(gate.play({position:base,scale:s,denied:true,at:.8}),0);tl.add(()=>{packet.setDenied(true);},.8);move(recoil,.32,'power2.out',.8);tl.add(packet.dissolve(),1.3);tl.to({},{duration:.5});}
else{move(exit,1.55,'power1.inOut',0);tl.add(gate.play({position:base,scale:s,denied:false,at:.42}),0);tl.add(packet.dissolve(),1.55);}
packetTimeline=tl;
}
function showStep(steps,index,animate,done,flow,options={}){
clearMotion();const current=steps[index],prev=steps[index-1];currentNode=current.node||current.to||null;
if(current.inspect){currentLink=null;decisionPos=null;decision.textContent='';decision.classList.remove('denied','broken');wires.forEach(l=>{l.material.opacity=.45;l.material.color.copy(l.base);});focusLabels([current.inspect,current.node]);packet.show(false);if(active!==current.inspect){active=current.inspect;animateView(current.inspect,true);}if(!animate||reduced)finishView();highlight(current.node);invalidate();return;}
if(active){active=null;animateView('',false);finishView();}
setExpanded(!!nodes.get(current.node)?.child||serviceLinks.includes(current.link));
currentLink=current.link||null;
decisionPos=current.decision&&current.node&&!current.link?nodes.get(current.node).g.position.clone().add(new THREE.Vector3(0,3.4,0)):null;
decision.textContent=(current.denied&&current.node==='fw'&&!current.broken?'REFUS · ':'')+(current.decision||'');decision.classList.toggle('denied',!!current.denied);decision.classList.toggle('broken',!!current.broken);
wires.forEach(l=>{const on=l.data.id===currentLink;l.material.opacity=on?1:pathLinks.has(l.data.id)?.8:current.shot==='overview'?.45:.15;l.material.color.copy(l.base).multiplyScalar(on?(current.broken?1:2.3):1);if(on&&current.broken)l.material.color.set(0xff5544);});
highlight(current.node||current.to,current.denied);focusLabels([current.node,current.from,current.to]);focusSet=new Set([...focusSet,current.node,current.from,current.to].filter(Boolean));
rig.nextStep();shoot(current);
packet.frame=frameFor(current,flow);packet.setChipHidden(false);
if(options.hold){packet.show(false);invalidate();return;}
if(current.link)travel(current,prev,animate,done);
else if(current.node&&current.decision&&nodes.has(current.node))gateMoment(current,prev,animate,done);
invalidate();
}
function pause(){packetTimeline?.pause();ambient=false;}
function stop(){clearMotion();currentLink=null;currentNode=null;focusLabels([]);invalidate();}
function focusLabels(ids){const keep=new Set(ids.filter(Boolean));for(const [key,n]of nodes)n.label.el.classList.toggle('muted',keep.size>0&&!keep.has(key));}
function inspectLink(id){stop();const l=wires.get(id);if(!l)return;setExpanded(l.data.kind!=='network');currentLink=id;wires.forEach(w=>{w.material.opacity=w===l?1:.15;w.material.color.copy(w.base).multiplyScalar(w===l?2.3:1);});const b=new THREE.Box3();for(let i=0;i<=24;i++)b.expandByPoint(l.curve.getPoint(i/24));rig.shot(b,{pad:1.6,max:1.8,force:true});invalidate();}
function finishView(){focusTimeline?.progress(1);}
function frame(ids){const b=new THREE.Box3();for(const id of ids){const n=nodes.get(id);if(n){if(!n.g.visible&&n.child)setExpanded(true);b.expandByObject(n.g);}else if(id.startsWith('host:')&&hosts.has(id.slice(5)))b.expandByObject(hosts.get(id.slice(5)).group);}if(b.isEmpty()){rig.overview();return;}b.expandByScalar(1.2);rig.shot(b,{pad:1.35,max:ids.length>1?1.6:1.9,force:true});invalidate();}
function setFocus(ids){focusSet=new Set(ids||[]);focusLabels(ids||[]);invalidate();}
function resetAll(){clearMotion();focusTimeline?.kill();focusTimeline=null;pathLinks=new Set();focusSet=new Set();hoverId=null;active=null;expanded=false;currentLink=null;currentNode=null;decision.textContent='';decision.classList.remove('denied','broken');animateView('',false);focusTimeline?.progress(1);setExpanded(false);highlight(null);focusLabels([]);setMode('physical');rig.overview(false);invalidate();}
// Shows one step at rest (Retour / step-wise Suivant), no tweens left running.
function showAt(steps,i,flow){clearMotion();pathLinks=new Set(steps.map(s=>s.link).filter(Boolean));showStep(steps,i,false,null,flow);ambient=false;flowLine.hide();invalidate();}
// Plays steps once, in order; isLive() lets the caller drop callbacks from an older scene.
function playPath(steps,{flow,animate=true,isLive=()=>true,onStep,onDone}={}){
pathLinks=new Set(steps.map(s=>s.link).filter(Boolean));
if(!animate||reduced){const i=steps.length-1;showStep(steps,i,false,null,flow);onStep?.(i);ambient=false;invalidate();onDone?.();return;}
const run=i=>{if(!isLive())return;if(i>=steps.length){ambient=false;flowLine.hide();invalidate();onDone?.();return;}onStep?.(i);showStep(steps,i,true,()=>{if(isLive())gsap.delayedCall(.35,()=>run(i+1));},flow);if(!steps[i].link&&!(steps[i].node&&steps[i].decision))gsap.delayedCall(1.2,()=>run(i+1));};
run(0);
}
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();pause();document.dispatchEvent(new CustomEvent('lab-webgl-lost'));});
setExpanded(false);resize();
return {open,reset,resetAll,playPath,showAt,frame,setFocus,inspectLink,finishView,highlight,setExpanded,setMode,showStep,pause,stop,topView,simulateBreak,
overview:()=>rig.overview(),
setFrozen:v=>{frozen=!!v;invalidate();},
setFollow:value=>rig.setFollow(value),
onUserCamera:f=>rig.onUser(f),
setQuality:value=>{fx.setQuality(value);resize();updateOutline();},
quality:()=>fx.quality(),
setReduced:value=>{reduced=value;rig.setReduced(value);focusTimeline?.progress(1);packetTimeline?.progress(1);invalidate();},
setVisible:value=>{renderer.domElement.hidden=!value;labels.hidden=!value;if(value)resize();},
info:()=>({drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,pixelRatio:renderer.getPixelRatio(),quality:fx.quality(),frameMs:fx.frameMs(),frames,shadows:renderer.shadowMap.enabled,composer:fx.quality()==='high'})};
}
