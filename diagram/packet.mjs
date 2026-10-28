import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {Line2} from 'three/addons/lines/Line2.js';
import {LineGeometry} from 'three/addons/lines/LineGeometry.js';
import {LineMaterial} from 'three/addons/lines/LineMaterial.js';
import {gsap} from 'gsap';

const LAYERS=[
{id:'eth',len:.55,color:0xe0a35a},
{id:'tag',len:.34,color:0x259cff},
{id:'ip',len:.5,color:0x47d2db},
{id:'tcp',len:.42,color:0xb49bff},
{id:'data',len:.66,color:0xeaf3f7}
];
const RED=0xff4a3a,LIFT=.55;
const css=hex=>'#'+new THREE.Color(hex).getHexString();
const div=(cls,parent)=>{const e=document.createElement('div');e.className=cls;e.hidden=true;parent.append(e);return e;};

export function createPacket(scene,labelsRoot,tint,makePlaque,invalidate){
const root=new THREE.Group(),body=new THREE.Group();root.visible=false;root.scale.setScalar(.85);root.add(body);scene.add(root);
const blocks={},picks=[];
for(const L of LAYERS){const mat=new THREE.MeshStandardMaterial({color:L.color,emissive:L.color,emissiveIntensity:2.6,roughness:.3,metalness:.1,transparent:true});const mesh=new THREE.Mesh(new RoundedBoxGeometry(L.len,.44,.52,2,.07),mat);mesh.userData.id='packet';body.add(mesh);picks.push(mesh);blocks[L.id]={mesh,mat,len:L.len,base:L.color};}
const lock=makePlaque('vpn',blocks.data.mesh,0,0,.27,.34);lock.material.opacity=.95;
const trailMat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.5,depthWrite:false});
const trail=new THREE.InstancedMesh(new THREE.SphereGeometry(.11,10,8),trailMat,18);trail.frustumCulled=false;trail.visible=false;scene.add(trail);
const chip=div('packet-chip',labelsRoot),chipTitle=document.createElement('strong');chip.append(chipTitle);
const layerEls=LAYERS.map(L=>{const e=div('packet-layer',labelsRoot);e.style.setProperty('--layer',css(L.color));e.append(document.createElement('strong'),document.createElement('small'));return e;});
const state={tag:0,vlan:null,explode:0,local:false,denied:false,frame:{},tagger:'',chipHidden:false};
let explodeTween=null;
const mtx=new THREE.Matrix4(),quat=new THREE.Quaternion(),scl=new THREE.Vector3(),pt=new THREE.Vector3(),tangent=new THREE.Vector3();
function paint(){
const tagColor=state.vlan?tint[state.vlan]:LAYERS[1].color;
for(const L of LAYERS){const b=blocks[L.id],ghost=L.id==='tag'&&!state.vlan&&state.explode>0;const c=state.denied?RED:L.id==='tag'?tagColor:b.base;b.mat.color.set(c);b.mat.emissive.set(c);b.mat.emissiveIntensity=ghost?.15:state.denied?3.2:2.6;b.mat.opacity=ghost?.22:1;b.mat.wireframe=ghost;}
trailMat.color.set(state.denied?RED:state.vlan?tagColor:0x9ad6ff).multiplyScalar(2.2);
const f=state.frame;chip.style.setProperty('--chip',css(state.denied?RED:state.vlan?tagColor:0x9ad6ff));
chipTitle.textContent=state.denied?'Refusé':state.local?'Écriture locale':state.vlan?'VLAN'+state.vlan:'Sans tag';
const info={
eth:['Ethernet','Adresses MAC du saut courant'],
tag:state.vlan?['802.1Q · VLAN'+state.vlan,(state.tagger||'Le trunk')+' ajoute ce tag sur le câble']:['Aucun tag 802.1Q','Lien d’accès ou réseau non tagué'],
ip:['IPv4 · '+(f.src||'source')+' → '+(f.dst||'destination'),'OPNsense route entre les zones'],
tcp:[(f.proto||'TCP')+' · port '+(f.port||'—'),'La règle du pare-feu porte sur ce port'],
data:[f.app||'Données',/TLS|HTTPS/.test(f.app||'')?'Contenu chiffré jusqu’au proxy':'Contenu applicatif']};
LAYERS.forEach((L,i)=>{const [t,s]=info[L.id];layerEls[i].children[0].textContent=t;layerEls[i].children[1].textContent=s;});
}
function arrange(){
const e=state.explode,gap=.05+e*.62,lens=LAYERS.map(L=>state.local&&L.id!=='data'?0:L.id==='tag'?L.len*Math.max(state.tag,state.vlan?0:e):L.len);
const shown=lens.filter(l=>l>.001).length,total=lens.reduce((a,b)=>a+b,0)+gap*Math.max(0,shown-1);let x=-total/2;
LAYERS.forEach((L,i)=>{const b=blocks[L.id],len=lens[i];b.mesh.visible=len>.001;b.mesh.scale.x=Math.max(len/L.len,.001);b.mesh.position.set(x+len/2,e*(i%2?.25:.7),0);if(len>.001)x+=len+gap;});
}
function orient(dir){root.rotation.set(0,Math.atan2(-dir.z,dir.x),0);}
function place(curve,t,reverse){curve.getPoint(t,pt);root.position.copy(pt);root.position.y+=LIFT;curve.getTangent(t,tangent);if(reverse)tangent.negate();tangent.y=0;if(tangent.lengthSq()>1e-5)orient(tangent.normalize());
const d=reverse?1:-1;for(let k=0;k<18;k++){const tt=Math.min(1,Math.max(0,t+d*(k+1)*.016));curve.getPoint(tt,pt);pt.y+=LIFT;const s=(1-k/18)*.95;scl.set(s,s,s);mtx.compose(pt,quat,scl);trail.setMatrixAt(k,mtx);}trail.instanceMatrix.needsUpdate=true;trail.visible=root.visible&&state.explode===0;}
function at(p){root.position.set(p.x,p.y,p.z);trail.visible=false;}
function setFrame(frame,{vlan=null,local=false,tagger=''}={}){state.frame=frame||{};state.local=local;state.tagger=tagger;state.vlan=vlan;state.tag=vlan?1:0;state.denied=false;state.explode=0;for(const b of Object.values(blocks)){b.mat.opacity=1;}root.scale.setScalar(.85);paint();arrange();}
function tagTween(vlan,tagger){
const tl=gsap.timeline();
if(state.vlan&&vlan&&state.vlan!==vlan){tl.to(state,{tag:0,duration:.25,ease:'power2.in',onUpdate:arrange});tl.add(()=>{state.vlan=vlan;state.tagger=tagger;paint();});tl.to(state,{tag:1,duration:.3,ease:'back.out(2.2)',onUpdate:arrange});}
else if(vlan){state.vlan=vlan;state.tagger=tagger;state.tag=0;paint();arrange();tl.to(state,{tag:1,duration:.5,ease:'back.out(2.2)',onUpdate:arrange});tl.fromTo(root.scale,{x:.85,y:.85,z:.85},{x:1.05,y:1.05,z:1.05,duration:.18,yoyo:true,repeat:1},0);}
else{tl.to(state,{tag:0,duration:.4,ease:'power2.in',onUpdate:arrange});tl.add(()=>{state.vlan=null;paint();});}
return tl;
}
function setDenied(v){state.denied=v;paint();}
function show(v){root.visible=v;if(!v)trail.visible=false;}
function dissolve(){const mats=Object.values(blocks).map(b=>b.mat);const tl=gsap.timeline();tl.to(mats,{opacity:0,duration:.45,ease:'power1.in'},0);tl.to(root.scale,{x:.2,y:.2,z:.2,duration:.45,ease:'power2.in'},0);tl.add(()=>{show(false);},'>');return tl;}
function explode(on,camera,instant=false){
explodeTween?.kill();
if(on&&camera){camera.updateMatrixWorld();const e=camera.matrixWorld.elements;orient(new THREE.Vector3(e[0],0,e[2]).normalize());trail.visible=false;}
paint();
if(instant){state.explode=on?1:0;root.scale.setScalar(on?1.25:.85);arrange();paint();return null;}
explodeTween=gsap.timeline({onUpdate:()=>{arrange();paint();invalidate();}});
explodeTween.to(state,{explode:on?1:0,duration:.7,ease:'power3.inOut'},0).to(root.scale,{x:on?1.25:.85,y:on?1.25:.85,z:on?1.25:.85,duration:.7,ease:'power3.inOut'},0);
return explodeTween;
}
function box(){root.updateMatrixWorld(true);return new THREE.Box3().setFromObject(body);}
const wp=new THREE.Vector3();
function labels(){
const items=[];if(!root.visible)return items;
if(state.explode>.6){LAYERS.forEach((L,i)=>{const b=blocks[L.id];if(!b.mesh.visible)return;b.mesh.getWorldPosition(wp);items.push({el:layerEls[i],position:wp.clone().add(new THREE.Vector3(0,i%2?-1.05:1.1,0))});});}
else if(!state.chipHidden&&state.explode===0){items.push({el:chip,position:root.position.clone().add(new THREE.Vector3(0,.6,0))});}
return items;
}
function showLabels(items){const shown=new Set(items.map(i=>i.el));for(const e of [chip,...layerEls])e.hidden=!shown.has(e);}
return {root,picks,place,at,orient,setFrame,tagTween,setDenied,show,dissolve,explode,box,labels,showLabels,
visible:()=>root.visible,exploded:()=>state.explode>0,setChipHidden:v=>{state.chipHidden=v;},
kill:()=>{explodeTween?.kill();}};
}

function fadeTexture(){const c=document.createElement('canvas');c.width=4;c.height=128;const g=c.getContext('2d'),grad=g.createLinearGradient(0,0,0,128);grad.addColorStop(0,'#000');grad.addColorStop(.55,'#555');grad.addColorStop(1,'#fff');g.fillStyle=grad;g.fillRect(0,0,4,128);const t=new THREE.CanvasTexture(c);return t;}

export function createGate(scene,invalidate){
const group=new THREE.Group();group.visible=false;scene.add(group);
const shellMat=new THREE.MeshBasicMaterial({color:0x3ddc84,transparent:true,opacity:0,alphaMap:fadeTexture(),side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending});
const shell=new THREE.Mesh(new THREE.CylinderGeometry(2.4,2.4,2.9,72,1,true),shellMat);shell.position.y=1.45;
const ringMat=new THREE.MeshBasicMaterial({color:0x3ddc84,transparent:true,opacity:.95});
const ring=new THREE.Mesh(new THREE.TorusGeometry(2.4,.055,10,144),ringMat);ring.rotation.x=Math.PI/2;
const crown=new THREE.Mesh(new THREE.TorusGeometry(2.4,.03,8,144),ringMat);crown.rotation.x=Math.PI/2;crown.position.y=2.9;
const rippleMat=new THREE.MeshBasicMaterial({color:0x3ddc84,transparent:true,opacity:0,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending});
const ripple=new THREE.Mesh(new THREE.RingGeometry(2.25,2.55,120),rippleMat);ripple.rotation.x=-Math.PI/2;ripple.position.y=.02;
group.add(shell,ring,crown,ripple);
let tl=null;
function play({position,scale=1,denied=false,at=0,reduced=false,ringOnly=false}){
tl?.kill();const c=new THREE.Color(denied?0xff4433:0x3ddc84);
shellMat.color.copy(c).multiplyScalar(1.6);ringMat.color.copy(c).multiplyScalar(3.2);rippleMat.color.copy(c).multiplyScalar(2.6);
group.position.copy(position);group.scale.setScalar(scale);group.visible=true;shell.visible=crown.visible=!ringOnly;ripple.scale.setScalar(1);
if(reduced){shellMat.opacity=denied?.4:.22;rippleMat.opacity=0;return null;}
tl=gsap.timeline({onUpdate:invalidate});
tl.fromTo(shellMat,{opacity:0},{opacity:.16,duration:.4,ease:'power1.out'},0);
tl.fromTo(ring.scale,{x:.6,y:.6,z:.6},{x:1,y:1,z:1,duration:.45,ease:'back.out(1.8)'},0);
tl.to(shellMat,{opacity:denied?.75:.5,duration:.1},at).to(shellMat,{opacity:denied?.38:.1,duration:.7,ease:'power2.out'},at+.1);
tl.fromTo(ripple.scale,{x:1,y:1,z:1},{x:denied?1.9:1.6,y:denied?1.9:1.6,z:1,duration:.9,ease:'power2.out'},at);
tl.fromTo(rippleMat,{opacity:.95},{opacity:0,duration:.9,ease:'power1.out'},at);
tl.to(ring.scale,{x:1.1,y:1.1,z:1.1,duration:.12,yoyo:true,repeat:denied?3:1},at);
return tl;
}
function hide(){tl?.kill();tl=null;group.visible=false;}
return {play,hide,group};
}

export function createFlowLine(scene){
const material=new LineMaterial({color:0xffffff,linewidth:3.2,dashed:true,dashSize:.5,gapSize:.42,transparent:true,opacity:.95,worldUnits:false,depthWrite:false});
let line=null,direction=1;
function show(curve,color,reverse){hide();const pts=[];for(let i=0;i<=72;i++){const p=curve.getPoint(i/72);pts.push(p.x,p.y+.26,p.z);}const geometry=new LineGeometry();geometry.setPositions(pts);line=new Line2(geometry,material);line.computeLineDistances();material.color.set(color).multiplyScalar(2.4);direction=reverse?1:-1;scene.add(line);}
function hide(){if(line){scene.remove(line);line.geometry.dispose();line=null;}}
function tick(dt){if(line)material.dashOffset+=direction*dt*1.7;}
function setResolution(w,h){material.resolution.set(w,h);}
return {show,hide,tick,setResolution,active:()=>!!line};
}
