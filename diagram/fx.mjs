import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {EffectComposer,RenderPass,EffectPass,BloomEffect,OutlineEffect,SMAAEffect,SMAAPreset,VignetteEffect,ToneMappingEffect,ToneMappingMode,KernelSize} from 'postprocessing';

// Economy is the default: no composer, no shadow map, pixel ratio 1. High quality is opt-in (?quality=high).
export function createFx(renderer,scene,camera,onAutoEconomy,initial='economy'){
renderer.shadowMap.enabled=initial==='high';renderer.shadowMap.type=THREE.PCFShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();
scene.environment=pmrem.fromScene(room,.04).texture;scene.environmentIntensity=.55;room.dispose?.();pmrem.dispose();
let composer=null,outline=null,quality=initial,selection=[];
const samples=[];let warmup=40;
function build(){
composer=new EffectComposer(renderer,{frameBufferType:THREE.HalfFloatType});
composer.addPass(new RenderPass(scene,camera));
const bloom=new BloomEffect({mipmapBlur:true,luminanceThreshold:1.08,luminanceSmoothing:.3,intensity:1.35,radius:.72});
outline=new OutlineEffect(scene,camera,{edgeStrength:4.5,visibleEdgeColor:0x9ad6ff,hiddenEdgeColor:0x1d3a5c,blur:true,kernelSize:KernelSize.VERY_SMALL,xRay:false});
outline.selection.set(selection);
composer.addPass(new EffectPass(camera,bloom,new ToneMappingEffect({mode:ToneMappingMode.ACES_FILMIC}),outline,new VignetteEffect({offset:.28,darkness:.62})));
composer.addPass(new EffectPass(camera,new SMAAEffect({preset:SMAAPreset.HIGH})));
}
function setQuality(value){quality=value;samples.length=0;warmup=40;renderer.setPixelRatio(value==='high'?Math.min(devicePixelRatio,1.25):1);if(value==='high'&&!composer)build();}
function render(dt){if(quality==='high')composer.render(dt);else renderer.render(scene,camera);}
function setSize(w,h){composer?.setSize(w,h);}
function setOutline(objects){selection=objects;outline?.selection.set(objects);}
function sample(ms){if(quality!=='high')return;if(warmup>0){warmup--;return;}samples.push(ms);if(samples.length>90)samples.shift();if(samples.length===90&&median()>28){setQuality('economy');onAutoEconomy?.();}}
function median(){if(!samples.length)return null;const s=[...samples].sort((a,b)=>a-b);return Math.round(s[s.length>>1]*10)/10;}
function resetSamples(){samples.length=0;warmup=20;}
function shadows(){if(renderer.shadowMap.enabled)renderer.shadowMap.needsUpdate=true;}
setQuality(initial==='high'?'high':'economy');
return {render,setSize,setQuality,setOutline,sample,resetSamples,shadows,quality:()=>quality,frameMs:median};
}
