import * as THREE from 'three';
import CameraControls from 'camera-controls';
CameraControls.install({THREE});

const ISO=new THREE.Vector3(15,22,30).normalize(),TOP=new THREE.Vector3(0,1,.0012).normalize(),DIST=41.5,OVERVIEW=new THREE.Vector3(0,2.7,0);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

// camera-controls' fitToBox snaps the view to the nearest axis; this framing keeps the isometric angle.
export function createCameraRig(camera,dom,invalidate,reducedAtStart){
const c=new CameraControls(camera,dom),A=CameraControls.ACTION;
c.mouseButtons.left=A.ROTATE;c.mouseButtons.right=A.TRUCK;c.mouseButtons.middle=A.TRUCK;c.mouseButtons.wheel=A.ZOOM;
c.touches.one=A.TOUCH_ROTATE;c.touches.two=A.TOUCH_ZOOM_TRUCK;c.touches.three=A.NONE;
Object.assign(c,{minZoom:.75,maxZoom:3,minPolarAngle:0,maxPolarAngle:1.2,minAzimuthAngle:-.35,maxAzimuthAngle:1.25,azimuthRotateSpeed:.55,polarRotateSpeed:.45,truckSpeed:1.4,dollySpeed:.6,dollyToCursor:true,draggingSmoothTime:.16,restThreshold:.003,boundaryFriction:.25});
c.setBoundary(new THREE.Box3(new THREE.Vector3(-17,-.5,-11),new THREE.Vector3(17,7,11)));
dom.addEventListener('contextmenu',e=>e.preventDefault());
let reduced=reducedAtStart,follow=true,hold=false,last=null;
// Presenter mode: the story drives the camera; user input is disabled.
c.enabled=false;
const baseSmooth=.45;c.smoothTime=reduced?0:baseSmooth;
const listeners=new Set();
c.addEventListener('controlstart',()=>{hold=true;listeners.forEach(f=>f());});
c.addEventListener('update',invalidate);c.addEventListener('wake',invalidate);
const m=new THREE.Matrix4(),q=new THREE.Quaternion(),v=new THREE.Vector3(),center=new THREE.Vector3(),position=new THREE.Vector3();
function zoomFor(box,dir,pad){
box.getCenter(center);position.copy(center).addScaledVector(dir,DIST);m.lookAt(position,center,camera.up);q.setFromRotationMatrix(m).invert();
let x0=Infinity,x1=-Infinity,y0=Infinity,y1=-Infinity;
for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){v.set(x,y,z).sub(center).applyQuaternion(q);x0=Math.min(x0,v.x);x1=Math.max(x1,v.x);y0=Math.min(y0,v.y);y1=Math.max(y1,v.y);}
return Math.min((camera.right-camera.left)/((x1-x0)*pad||1),(camera.top-camera.bottom)/((y1-y0)*pad||1));
}
function apply(s,animate){
const smooth=animate&&!reduced;
if(s.box){const z=clamp(zoomFor(s.box,s.dir,s.pad),s.min,s.max);s.box.getCenter(center);position.copy(center).addScaledVector(s.dir,DIST);c.setLookAt(position.x,position.y,position.z,center.x,center.y,center.z,smooth);c.zoomTo(z,smooth);}
else{position.copy(s.target).addScaledVector(s.dir,DIST);c.setLookAt(position.x,position.y,position.z,s.target.x,s.target.y,s.target.z,smooth);c.zoomTo(s.zoom,smooth);}
invalidate();
}
const current=new THREE.Vector3();
function settled(s){const z=clamp(zoomFor(s.box,s.dir,s.pad),s.min,s.max);s.box.getCenter(center);c.getTarget(current,true);const half=(camera.top-camera.bottom)/2/camera.zoom;return !c.active&&current.distanceTo(center)<half*.16&&Math.abs(z/camera.zoom-1)<.16&&c.getPosition(position,true).sub(current).normalize().dot(s.dir)>.995;}
function shot(box,{pad=1.3,min=.85,max=2.1,dir=ISO,force=false,animate=true}={}){last={box:box.clone(),pad,min,max,dir};if(force||follow&&!hold){if(!force&&animate&&settled(last))return;apply(last,animate);}}
function look(target,zoom,animate=true,dir=ISO){last={target:target.clone(),zoom,dir};apply(last,animate);}
function overview(animate=true){last={target:OVERVIEW.clone(),zoom:1,dir:ISO};if(follow&&!hold)apply(last,animate);}
function refit(){if(last&&(follow&&!hold||last.target))apply(last,false);}
function topView(on){const target=c.getTarget(new THREE.Vector3(),true);look(target,camera.zoom,true,on?TOP:ISO);}
function update(dt){return c.update(dt);}
return {
controls:c,update,shot,look,overview,refit,topView,
nextStep:()=>{hold=false;},
setFollow:value=>{follow=value;if(value){hold=false;if(last)apply(last,true);}},
following:()=>follow&&!hold,
setReduced:value=>{reduced=value;c.smoothTime=value?0:baseSmooth;},
onUser:f=>listeners.add(f),
setEnabled:value=>{c.enabled=value;}
};
}
