var Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zd=0,lh=1,Vd=2;var oa=1,Hd=2,pr=3,$i=0,ln=1,ri=2,ai=0,mr=1,ch=2,hh=3,uh=4,Gd=5;var Ms=100,Wd=101,Xd=102,qd=103,Yd=104,Zd=200,Jd=201,$d=202,Kd=203,dh=204,fh=205,jd=206,Qd=207,tf=208,ef=209,nf=210,sf=211,rf=212,af=213,of=214,go=0,_o=1,xo=2,er=3,vo=4,yo=5,So=6,Mo=7,ph=0,lf=1,cf=2,Yn=0,mh=1,gh=2,_h=3,la=4,xh=5,vh=6,yh=7;var Sh=300,Ki=301,bs=302,nl=303,il=304,ca=306,bo=1e3,ei=1001,To=1002,Ge=1003,hf=1004;var ha=1005;var We=1006,sl=1007;var ji=1008;var pn=1009,Mh=1010,bh=1011,gr=1012,rl=1013,Zn=1014,Jn=1015,$n=1016,al=1017,ol=1018,_r=1020,Th=35902,wh=35899,Eh=1021,Ah=1022,Fn=1023,ni=1026,Qi=1027,Ch=1028,ll=1029,ts=1030,cl=1031;var hl=1033,ua=33776,da=33777,fa=33778,pa=33779,ul=35840,dl=35841,fl=35842,pl=35843,ml=36196,gl=37492,_l=37496,xl=37488,vl=37489,ma=37490,yl=37491,Sl=37808,Ml=37809,bl=37810,Tl=37811,wl=37812,El=37813,Al=37814,Cl=37815,Rl=37816,Pl=37817,Il=37818,Ll=37819,Dl=37820,Nl=37821,Ul=36492,Ol=36494,Fl=36495,Bl=36283,kl=36284,ga=36285,zl=36286;var Hr=2300,wo=2301,fo=2302,th=2303,eh=2400,nh=2401,ih=2402;var uf=3200;var Vl=0,df=1,Ti="",je="srgb",Gr="srgb-linear",Wr="linear",ie="srgb";var po=7680;var ff=519,pf=512,mf=513,gf=514,Hl=515,_f=516,xf=517,Gl=518,vf=519,yf=35044;var Rh="300 es",Xn=2e3,nr=2001;function Tm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sf(){let s=ir("canvas");return s.style.display="block",s}var ld={},sr=null;function Ph(...s){let t="THREE."+s.shift();sr?sr("log",t,...s):console.log(t,...s)}function Mf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function It(...s){s=Mf(s);let t="THREE."+s.shift();if(sr)sr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Nt(...s){s=Mf(s);let t="THREE."+s.shift();if(sr)sr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function _s(...s){let t=s.join(" ");t in ld||(ld[t]=!0,It(...s))}function bf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Tf={[go]:_o,[xo]:So,[vo]:Mo,[er]:yo,[_o]:go,[So]:xo,[Mo]:vo,[yo]:er},qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,Qs=Math.PI/180,rr=180/Math.PI;function xr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function Ih(s,t){return(s%t+t)%t}function Em(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Am(s,t,e){return s!==t?(e-s)/(t-s):0}function kr(s,t,e){return(1-e)*s+e*t}function Cm(s,t,e,n){return kr(s,t,1-Math.exp(-e*n))}function Rm(s,t=1){return t-Math.abs(Ih(s,t*2)-t)}function Pm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Im(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Lm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Dm(s,t){return s+Math.random()*(t-s)}function Nm(s){return s*(.5-Math.random())}function Um(s){s!==void 0&&(cd=s);let t=cd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Om(s){return s*Qs}function Fm(s){return s*rr}function Bm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function km(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vm(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function js(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Lh={DEG2RAD:Qs,RAD2DEG:rr,generateUUID:xr,clamp:Gt,euclideanModulo:Ih,mapLinear:Em,inverseLerp:Am,lerp:kr,damp:Cm,pingpong:Rm,smoothstep:Pm,smootherstep:Im,randInt:Lm,randFloat:Dm,randFloatSpread:Nm,seededRandom:Um,degToRad:Om,radToDeg:Fm,isPowerOfTwo:Bm,ceilPowerOfTwo:km,floorPowerOfTwo:zm,setQuaternionFromProperEuler:Vm,normalize:rn,denormalize:js},bt=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);p=Math.sin(p*b)/E,o=Math.sin(o*b)/E,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+_*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+_*o;let b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cc.copy(this).projectOnVector(t),this.sub(Cc)}reflect(t){return this.sub(Cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cc=new L,hd=new Tn,Ot=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],E=i[4],y=i[7],S=i[2],w=i[5],A=i[8];return r[0]=a*_+o*b+c*S,r[3]=a*m+o*E+c*w,r[6]=a*p+o*y+c*A,r[1]=l*_+h*b+d*S,r[4]=l*m+h*E+d*w,r[7]=l*p+h*y+d*A,r[2]=u*_+f*b+g*S,r[5]=u*m+f*E+g*w,r[8]=u*p+f*y+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rc.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rc.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new Ot,ud=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dd=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hm(){let s={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Wr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Gr]:{primaries:t,whitePoint:n,transfer:Wr,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),s}var Yt=Hm();function Si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Bs,Eo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bs===void 0&&(Bs=ir("canvas")),Bs.width=t.width,Bs.height=t.height;let i=Bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gm=0,ar=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Pc(i[a].image)):r.push(Pc(i[a]))}else r=Pc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var Wm=0,Ic=new L,on=class s extends qn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ei,i=ei,r=We,a=ji,o=Fn,c=pn,l=s.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=xr(),this.name="",this.source=new ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Sh;on.DEFAULT_ANISOTROPY=1;var ge=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,y=(f+1)/2,S=(p+1)/2,w=(h+u)/4,A=(d+_)/4,x=(g+m)/4;return E>y&&E>S?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=w/n,r=A/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=w/i,r=x/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=x/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new on(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ar(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends Ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var de=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),a=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xm,t,qm)}lookAt(t,e,n){let i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Di.crossVectors(n,Sn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Di.crossVectors(n,Sn)),Di.normalize(),Ha.crossVectors(Sn,Di),i[0]=Di.x,i[4]=Ha.x,i[8]=Sn.x,i[1]=Di.y,i[5]=Ha.y,i[9]=Sn.y,i[2]=Di.z,i[6]=Ha.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],E=n[7],y=n[11],S=n[15],w=i[0],A=i[4],x=i[8],T=i[12],P=i[1],U=i[5],F=i[9],k=i[13],D=i[2],V=i[6],Z=i[10],X=i[14],K=i[3],Q=i[7],st=i[11],at=i[15];return r[0]=a*w+o*P+c*D+l*K,r[4]=a*A+o*U+c*V+l*Q,r[8]=a*x+o*F+c*Z+l*st,r[12]=a*T+o*k+c*X+l*at,r[1]=h*w+d*P+u*D+f*K,r[5]=h*A+d*U+u*V+f*Q,r[9]=h*x+d*F+u*Z+f*st,r[13]=h*T+d*k+u*X+f*at,r[2]=g*w+_*P+m*D+p*K,r[6]=g*A+_*U+m*V+p*Q,r[10]=g*x+_*F+m*Z+p*st,r[14]=g*T+_*k+m*X+p*at,r[3]=b*w+E*P+y*D+S*K,r[7]=b*A+E*U+y*V+S*Q,r[11]=b*x+E*F+y*Z+S*st,r[15]=b*T+E*k+y*X+S*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],b=c*f-l*u,E=o*f-l*d,y=o*u-c*d,S=a*f-l*h,w=a*u-c*h,A=a*d-o*h;return e*(_*b-m*E+p*y)-n*(g*b-m*S+p*w)+i*(g*E-_*S+p*A)-r*(g*y-_*w+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=e*o-n*a,E=e*c-i*a,y=e*l-r*a,S=n*c-i*o,w=n*l-r*o,A=i*l-r*c,x=h*_-d*g,T=h*m-u*g,P=h*p-f*g,U=d*m-u*_,F=d*p-f*_,k=u*p-f*m,D=b*k-E*F+y*U+S*P-w*T+A*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return t[0]=(o*k-c*F+l*U)*V,t[1]=(i*F-n*k-r*U)*V,t[2]=(_*A-m*w+p*S)*V,t[3]=(u*w-d*A-f*S)*V,t[4]=(c*P-a*k-l*T)*V,t[5]=(e*k-i*P+r*T)*V,t[6]=(m*y-g*A-p*E)*V,t[7]=(h*A-u*y+f*E)*V,t[8]=(a*F-o*P+l*x)*V,t[9]=(n*P-e*F-r*x)*V,t[10]=(g*w-_*y+p*b)*V,t[11]=(d*y-h*w-f*b)*V,t[12]=(o*T-a*U-c*x)*V,t[13]=(e*U-n*T+i*x)*V,t[14]=(_*E-g*S-m*b)*V,t[15]=(h*S-d*E+u*b)*V,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,b=c*l,E=c*h,y=c*d,S=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*S,i[1]=(f+y)*S,i[2]=(g-E)*S,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(u+p))*w,i[6]=(m+b)*w,i[7]=0,i[8]=(g+E)*A,i[9]=(m-b)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ks.set(i[0],i[1],i[2]).length(),o=ks.set(i[4],i[5],i[6]).length(),c=ks.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Hn.copy(this);let l=1/a,h=1/o,d=1/c;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,e.setFromRotationMatrix(Hn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=Xn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Xn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===nr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Xn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Xn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===nr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ks=new L,Hn=new de,Xm=new L(0,0,0),qm=new L(1,1,1),Di=new L,Ha=new L,Sn=new L,fd=new de,pd=new Tn,Mi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pd.setFromEuler(this),this.setFromQuaternion(pd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ym=0,md=new L,zs=new Tn,mi=new de,Ga=new L,Nr=new L,Zm=new L,Jm=new Tn,gd=new L(1,0,0),_d=new L(0,1,0),xd=new L(0,0,1),vd={type:"added"},$m={type:"removed"},Vs={type:"childadded",child:null},Lc={type:"childremoved",child:null},Xe=class s extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Mi,n=new Tn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Ot}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(gd,t)}rotateY(t){return this.rotateOnAxis(_d,t)}rotateZ(t){return this.rotateOnAxis(xd,t)}translateOnAxis(t,e){return md.copy(t).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gd,t)}translateY(t){return this.translateOnAxis(_d,t)}translateZ(t){return this.translateOnAxis(xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ga.copy(t):Ga.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Nr,Ga,this.up):mi.lookAt(Ga,Nr,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(mi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vd),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($m),Lc.child=t,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vd),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,Zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xe.DEFAULT_UP=new L(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Dc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Ih(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dc(a,r,t+1/3),this.g=Dc(a,r,t),this.b=Dc(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,i),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=wf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Yt.workingToColorSpace(Ke.copy(this),t),Math.round(Gt(Ke.r*255,0,255))*65536+Math.round(Gt(Ke.g*255,0,255))*256+Math.round(Gt(Ke.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,i=Ke.g,r=Ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=je){Yt.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,i=Ke.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Wa);let n=kr(Ni.h,Wa.h,e),i=kr(Ni.s,Wa.s,e),r=kr(Ni.l,Wa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new zt;zt.NAMES=wf;var qr=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gn=new L,gi=new L,Nc=new L,_i=new L,Hs=new L,Gs=new L,yd=new L,Uc=new L,Oc=new L,Fc=new L,Bc=new ge,kc=new ge,zc=new ge,yi=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Gn.subVectors(i,e),gi.subVectors(n,e),Nc.subVectors(t,e);let a=Gn.dot(Gn),o=Gn.dot(gi),c=Gn.dot(Nc),l=gi.dot(gi),h=gi.dot(Nc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(a,_i.y),c.addScaledVector(o,_i.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Bc.setScalar(0),kc.setScalar(0),zc.setScalar(0),Bc.fromBufferAttribute(t,e),kc.fromBufferAttribute(t,n),zc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Bc,r.x),a.addScaledVector(kc,r.y),a.addScaledVector(zc,r.z),a}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),gi.subVectors(t,e),Gn.cross(gi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Gn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Hs.subVectors(i,n),Gs.subVectors(r,n),Uc.subVectors(t,n);let c=Hs.dot(Uc),l=Gs.dot(Uc);if(c<=0&&l<=0)return e.copy(n);Oc.subVectors(t,i);let h=Hs.dot(Oc),d=Gs.dot(Oc);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Hs,a);Fc.subVectors(t,r);let f=Hs.dot(Fc),g=Gs.dot(Fc);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Gs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return yd.subVectors(r,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(yd,o);let p=1/(m+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(Hs,a).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(t.matrixWorld),this.union(Xa)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),qa.subVectors(this.max,Ur),Ws.subVectors(t.a,Ur),Xs.subVectors(t.b,Ur),qs.subVectors(t.c,Ur),Ui.subVectors(Xs,Ws),Oi.subVectors(qs,Xs),fs.subVectors(Ws,qs);let e=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-fs.z,fs.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,fs.z,0,-fs.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-fs.y,fs.x,0];return!Vc(e,Ws,Xs,qs,qa)||(e=[1,0,0,0,1,0,0,0,1],!Vc(e,Ws,Xs,qs,qa))?!1:(Ya.crossVectors(Ui,Oi),e=[Ya.x,Ya.y,Ya.z],Vc(e,Ws,Xs,qs,qa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},xi=[new L,new L,new L,new L,new L,new L,new L,new L],Wn=new L,Xa=new ii,Ws=new L,Xs=new L,qs=new L,Ui=new L,Oi=new L,fs=new L,Ur=new L,qa=new L,Ya=new L,ps=new L;function Vc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ps.fromArray(s,r);let o=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),c=t.dot(ps),l=e.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ne=new L,Za=new bt,jm=0,Nn=class extends qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yf,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Za.fromBufferAttribute(this,e),Za.applyMatrix3(t),this.setXY(e,Za.x,Za.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=js(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=js(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=js(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Yr=class extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zr=class extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ie=class extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qm=new ii,Or=new L,Hc=new L,xs=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);let e=Or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(Hc)),this.expandByPoint(Or.copy(t.center).sub(Hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tg=0,Dn=new de,Gc=new Xe,Ys=new L,Mn=new ii,Fr=new ii,He=new L,fn=class s extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?Zr:Yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Gc.lookAt(t),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(Mn.min,Fr.min),Mn.expandByPoint(He),He.addVectors(Mn.max,Fr.max),Mn.expandByPoint(He)):(Mn.expandByPoint(Fr.min),Mn.expandByPoint(Fr.max))}Mn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)He.fromBufferAttribute(o,l),c&&(Ys.fromBufferAttribute(t,l),He.add(Ys)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new L,c[x]=new L;let l=new L,h=new L,d=new L,u=new bt,f=new bt,g=new bt,_=new L,m=new L;function p(x,T,P){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[x].add(_),o[T].add(_),o[P].add(_),c[x].add(m),c[T].add(m),c[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,T=b.length;x<T;++x){let P=b[x],U=P.start,F=P.count;for(let k=U,D=U+F;k<D;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let E=new L,y=new L,S=new L,w=new L;function A(x){S.fromBufferAttribute(i,x),w.copy(S);let T=o[x];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(w,T);let U=y.dot(c[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,U)}for(let x=0,T=b.length;x<T;++x){let P=b[x],U=P.start,F=P.count;for(let k=U,D=U+F;k<D;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Nn(u,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wc=new L,eg=new L,ng=new Ot,bn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wc.subVectors(n,e).cross(eg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Wc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ng.getNormalMatrix(t),i=this.coplanarPoint(Wc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ig=0,bi=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=mr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vi=new L,Xc=new L,Ja=new L,$a=new L,Bi=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xc.copy(t).add(e).multiplyScalar(.5),Ja.copy(e).sub(t).normalize(),$a.copy(this.origin).sub(Xc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ja),o=$a.dot(this.direction),c=-$a.dot(Ja),l=$a.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Xc).addScaledVector(Ja,u),f}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),i=vi.dot(vi)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,p=n.x-a.x,b=n.y-a.y,E=n.z-a.z,y=Math.abs(c),S=Math.abs(l),w=Math.abs(h),A,x,T,P,U,F,k,D,V,Z,X,K;if(y>=S&&y>=w?(T=c,F=d,V=g,K=p,c>=0?(A=l,x=h,P=u,U=f,k=_,D=m,Z=b,X=E):(A=h,x=l,P=f,U=u,k=m,D=_,Z=E,X=b)):S>=w?(T=l,F=u,V=_,K=b,l>=0?(A=h,x=c,P=f,U=d,k=m,D=g,Z=E,X=p):(A=c,x=h,P=d,U=f,k=g,D=m,Z=p,X=E)):(T=h,F=f,V=m,K=E,h>=0?(A=c,x=l,P=d,U=u,k=g,D=_,Z=p,X=b):(A=l,x=c,P=u,U=d,k=_,D=g,Z=b,X=p)),T===0)return null;let Q=A/T,st=x/T,at=1/T,wt=P-Q*F,At=U-st*F,Vt=k-Q*V,Ft=D-st*V,kt=Z-Q*K,et=X-st*K,rt=kt*Ft-et*Vt,yt=wt*et-At*kt,Ut=Vt*At-Ft*wt;if(i){if(rt<0||yt<0||Ut<0)return null}else if((rt<0||yt<0||Ut<0)&&(rt>0||yt>0||Ut>0))return null;let St=rt+yt+Ut;if(St===0)return null;let Bt=at*(rt*F+yt*V+Ut*K);return(St>0?Bt<0:Bt>0)?null:this.at(Bt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Sd=new de,ms=new Bi,Ka=new xs,Md=new L,ja=new L,Qa=new L,to=new L,qc=new L,eo=new L,bd=new L,no=new L,Te=class extends Xe{constructor(t=new fn,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(qc.fromBufferAttribute(d,t),a?eo.addScaledVector(qc,h):eo.addScaledVector(qc.sub(e),h))}e.add(eo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(Ka.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Ka,Md)===null||ms.origin.distanceToSquared(Md)>(t.far-t.near)**2))&&(Sd.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Sd),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,S=E;y<S;y+=3){let w=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);i=io(this,p,t,n,l,h,d,w,A,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);i=io(this,a,t,n,l,h,d,b,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,S=E;y<S;y+=3){let w=y,A=y+1,x=y+2;i=io(this,p,t,n,l,h,d,w,A,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=m,E=m+1,y=m+2;i=io(this,a,t,n,l,h,d,b,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function sg(s,t,e,n,i,r,a,o){let c;if(t.side===ln?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===$i,o),c===null)return null;no.copy(o),no.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(no);return l<e.near||l>e.far?null:{distance:l,point:no.clone(),object:s}}function io(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,ja),s.getVertexPosition(c,Qa),s.getVertexPosition(l,to);let h=sg(s,t,e,n,ja,Qa,to,bd);if(h){let d=new L;yi.getBarycoord(bd,ja,Qa,to,d),i&&(h.uv=yi.getInterpolatedAttribute(i,o,c,l,d,new bt)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,c,l,d,new bt)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new L,materialIndex:0};yi.getNormal(ja,Qa,to,u.normal),h.face=u,h.barycoord=d}return h}var Ro=class extends on{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Ge,h=Ge,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=new xs,rg=new bt(.5,.5),so=new L,cr=class{constructor(t=new bn,e=new bn,n=new bn,i=new bn,r=new bn,a=new bn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],E=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-a,f-h,p-g,S-b).normalize(),i[1].setComponents(l+a,f+h,p+g,S+b).normalize(),i[2].setComponents(l+o,f+d,p+_,S+E).normalize(),i[3].setComponents(l-o,f-d,p-_,S-E).normalize(),n)i[4].setComponents(c,u,m,y).normalize(),i[5].setComponents(l-c,f-u,p-m,S-y).normalize();else if(i[4].setComponents(l-c,f-u,p-m,S-y).normalize(),e===Xn)i[5].setComponents(l+c,f+u,p+m,S+y).normalize();else if(e===nr)i[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);let e=rg.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(so.x=i.normal.x>0?t.max.x:t.min.x,so.y=i.normal.y>0?t.max.y:t.min.y,so.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ki=class extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Po=new L,Io=new L,Td=new de,Br=new Bi,ro=new xs,Yc=new L,wd=new L,Lo=class extends Xe{constructor(t=new fn,e=new ki){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Po.fromBufferAttribute(e,i-1),Io.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Po.distanceTo(Io);t.setAttribute("lineDistance",new Ie(n,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(i),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;Td.copy(i).invert(),Br.copy(t.ray).applyMatrix4(Td);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){let p=h.getX(_),b=h.getX(_+1),E=ao(this,t,Br,c,p,b,_);E&&e.push(E)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=ao(this,t,Br,c,_,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){let p=ao(this,t,Br,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=ao(this,t,Br,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ao(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(Po.fromBufferAttribute(o,i),Io.fromBufferAttribute(o,r),e.distanceSqToSegment(Po,Io,Yc,wd)>n)return;Yc.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Yc);if(!(l<t.near||l>t.far))return{distance:l,point:wd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Ed=new L,Ad=new L,vs=class extends Lo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ed.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ed.distanceTo(Ad);t.setAttribute("lineDistance",new Ie(n,1))}else It("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Jr=class extends on{constructor(t=[],e=Ki,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var zi=class extends on{constructor(t,e,n=Zn,i,r,a,o=Ge,c=Ge,l,h=ni,d=1){if(h!==ni&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ar(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Do=class extends zi{constructor(t,e=Zn,n=Ki,i,r,a=Ge,o=Ge,c,l=ni){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$r=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wn=class s extends fn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function g(_,m,p,b,E,y,S,w,A,x,T){let P=y/A,U=S/x,F=y/2,k=S/2,D=w/2,V=A+1,Z=x+1,X=0,K=0,Q=new L;for(let st=0;st<Z;st++){let at=st*U-k;for(let wt=0;wt<V;wt++){let At=wt*P-F;Q[_]=At*b,Q[m]=at*E,Q[p]=D,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(wt/A),d.push(1-st/x),X+=1}}for(let st=0;st<x;st++)for(let at=0;at<A;at++){let wt=u+at+V*st,At=u+at+V*(st+1),Vt=u+(at+1)+V*(st+1),Ft=u+(at+1)+V*st;c.push(wt,At,Ft),c.push(At,Vt,Ft),K+=6}o.addGroup(f,K,T),f+=K,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hr=class s extends fn{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],m=n/2,p=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function b(){let y=new L,S=new L,w=0,A=(e-t)/n;for(let x=0;x<=r;x++){let T=[],P=x/r,U=P*(e-t)+t;for(let F=0;F<=i;F++){let k=F/i,D=k*c+o,V=Math.sin(D),Z=Math.cos(D);S.x=U*V,S.y=-P*n+m,S.z=U*Z,d.push(S.x,S.y,S.z),y.set(V,A,Z).normalize(),u.push(y.x,y.y,y.z),f.push(k,1-P),T.push(g++)}_.push(T)}for(let x=0;x<i;x++)for(let T=0;T<r;T++){let P=_[T][x],U=_[T+1][x],F=_[T+1][x+1],k=_[T][x+1];(t>0||T!==0)&&(h.push(P,U,k),w+=3),(e>0||T!==r-1)&&(h.push(U,F,k),w+=3)}l.addGroup(p,w,0),p+=w}function E(y){let S=g,w=new bt,A=new L,x=0,T=y===!0?t:e,P=y===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let U=g;for(let F=0;F<=i;F++){let D=F/i*c+o,V=Math.cos(D),Z=Math.sin(D);A.x=T*Z,A.y=m*P,A.z=T*V,d.push(A.x,A.y,A.z),u.push(0,P,0),w.x=V*.5+.5,w.y=Z*.5*P+.5,f.push(w.x,w.y),g++}for(let F=0;F<i;F++){let k=S+F,D=U+F;y===!0?h.push(D,D+1,k):h.push(D+1,D,k),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Kr=class s extends hr{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var oo=new L,lo=new L,Zc=new L,co=new yi,ys=class extends fn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Qs*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:_,b:m,c:p}=co;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),co.getNormal(Zc),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let E=(b+1)%3,y=d[b],S=d[E],w=co[h[b]],A=co[h[E]],x=`${y}_${S}`,T=`${S}_${y}`;T in u&&u[T]?(Zc.dot(u[T].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),u[T]=null):x in u||(u[x]={index0:l[b],index1:l[E],normal:Zc.clone()})}}for(let g in u)if(u[g]){let{index0:_,index1:m}=u[g];oo.fromBufferAttribute(o,_),lo.fromBufferAttribute(o,m),f.push(oo.x,oo.y,oo.z),f.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new Ie(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new bt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],a=[],o=new L,c=new de;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Gt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Gt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},jr=class extends On{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new bt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},No=class extends jr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dh(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Cd=new L,Rd=new L,Jc=new Dh,$c=new Dh,Kc=new Dh,Vi=class extends On{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Rd.subVectors(i[0],i[1]).add(i[0]),l=Rd);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Cd.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Cd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Jc.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),$c.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),Kc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),$c.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Kc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Jc.calc(c),$c.calc(c),Kc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pd(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function ag(s,t){let e=1-s;return e*e*t}function og(s,t){return 2*(1-s)*s*t}function lg(s,t){return s*s*t}function zr(s,t,e,n){return ag(s,t)+og(s,e)+lg(s,n)}function cg(s,t){let e=1-s;return e*e*e*t}function hg(s,t){let e=1-s;return 3*e*e*s*t}function ug(s,t){return 3*(1-s)*s*s*t}function dg(s,t){return s*s*s*t}function Vr(s,t,e,n,i){return cg(s,t)+hg(s,e)+ug(s,n)+dg(s,i)}var Uo=class extends On{constructor(t=new bt,e=new bt,n=new bt,i=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new bt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(t,i.x,r.x,a.x,o.x),Vr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends On{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(t,i.x,r.x,a.x,o.x),Vr(t,i.y,r.y,a.y,o.y),Vr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fo=class extends On{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ss=class extends On{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends On{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(zr(t,i.x,r.x,a.x),zr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends On{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(zr(t,i.x,r.x,a.x),zr(t,i.y,r.y,a.y),zr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ko=class extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Pd(o,c.x,l.x,h.x,d.x),Pd(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new bt().fromArray(i))}return this}},fg=Object.freeze({__proto__:null,ArcCurve:No,CatmullRomCurve3:Vi,CubicBezierCurve:Uo,CubicBezierCurve3:Oo,EllipseCurve:jr,LineCurve:Fo,LineCurve3:Ss,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:Qr,SplineCurve:ko});var Hi=class s extends fn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let E=0;E<l;E++){let y=E*d-r;g.push(y,-b,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let E=b+l*p,y=b+l*(p+1),S=b+1+l*(p+1),w=b+1+l*p;f.push(E,y,w),f.push(y,S,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Gi=class s extends fn{constructor(t=new Qr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,c=new L,l=new bt,h=new L,d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function _(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),b(),p()}function m(E){h=t.getPointAt(E/e,h);let y=a.normals[E],S=a.binormals[E];for(let w=0;w<=i;w++){let A=w/i*Math.PI*2,x=Math.sin(A),T=-Math.cos(A);c.x=T*y.x+x*S.x,c.y=T*y.y+x*S.y,c.z=T*y.z+x*S.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let y=1;y<=i;y++){let S=(i+1)*(E-1)+(y-1),w=(i+1)*E+(y-1),A=(i+1)*E+y,x=(i+1)*(E-1)+y;g.push(S,w,x),g.push(w,A,x)}}function b(){for(let E=0;E<=e;E++)for(let y=0;y<=i;y++)l.x=E/e,l.y=y/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new fg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Id(i))i.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Id(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Qe(s){let t={};for(let e=0;e<s.length;e++){let n=Ts(s[e]);for(let i in n)t[i]=n[i]}return t}function Id(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function pg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Ef={clone:Ts,merge:Qe},mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new bt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new de().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},zo=class extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},si=class extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Vo=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ho=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function jc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Wi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Go=class extends Wi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eh,endingEnd:eh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case nh:r=t,o=2*e-n;break;case ih:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nh:a=t,c=2*n-e;break;case ih:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+b*a[l+S]+E*a[c+S]+y*a[d+S];return r}},Wo=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Xo=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},qo=class extends Wi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(i-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*_+a[c+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[l+g],m=a[c+g],p=f*u+g*2,b=d[p],E=d[p+1],y=t*u+g*2,S=h[y],w=h[y+1],A=xg(n,e,b,S,i);r[g]=Af(A,_,E,w,m)}return r}};function Af(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function _g(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function xg(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Af(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let c=_g(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var An=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zs(e,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zs(t.times,Array),values:Zs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),jc(t.settings)&&(n.settings={inTangents:Zs(t.settings.inTangents,Array),outTangents:Zs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Hr:e=this.InterpolantFactoryMethodDiscrete;break;case wo:e=this.InterpolantFactoryMethodLinear;break;case fo:e=this.InterpolantFactoryMethodSmooth;break;case th:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return fo;case this.InterpolantFactoryMethodBezier:return th}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;jc(this.settings)&&(Ld(this.settings.inTangents,t),Ld(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Nt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Nt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&wm(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Nt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fo,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,jc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ld(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=wo;var Xi=class extends An{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Hr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends An{constructor(t,e,n,i){super(t,e,n,i)}};Yo.prototype.ValueTypeName="color";var Zo=class extends An{constructor(t,e,n,i){super(t,e,n,i)}};Zo.prototype.ValueTypeName="number";var Jo=class extends Wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)Tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ta=class extends An{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Jo(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends An{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Hr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends An{constructor(t,e,n,i){super(t,e,n,i)}};$o.prototype.ValueTypeName="vector";var mo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Dd(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Dd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Dd(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ko=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cf=new Ko,ur=class{constructor(t){this.manager=t!==void 0?t:Cf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ur.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=new WeakMap,jo=class extends ur{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=mo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Js.get(a);d===void 0&&(d=[],Js.set(a,d)),d.push({onLoad:e,onError:i})}return a}let o=ir("img");function c(){h(),e&&e(this);let d=Js.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Js.delete(this),r.manager.itemEnd(t)}function l(d){h(),i&&i(d),mo.remove(`image:${t}`);let u=Js.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Js.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),mo.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var ea=class extends ur{constructor(t){super(t)}load(t,e,n,i){let r=new on,a=new jo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},na=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ia=class extends na{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Qc=new de,Nd=new L,Ud=new L,Qo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Nd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nd),Ud.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ud),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ho=new L,uo=new Tn,ti=new L,sa=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ho,uo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ho,uo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new L,Od=new bt,Fd=new bt,un=class extends sa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Od,Fd),e.subVectors(Fd,Od)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Yi=class extends sa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sh=class extends Qo{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dr=class extends na{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new sh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var $s=-90,Ks=1,tl=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new un($s,Ks,t,e);i.layers=this.layers,this.add(i);let r=new un($s,Ks,t,e);r.layers=this.layers,this.add(r);let a=new un($s,Ks,t,e);a.layers=this.layers,this.add(a);let o=new un($s,Ks,t,e);o.layers=this.layers,this.add(o);let c=new un($s,Ks,t,e);c.layers=this.layers,this.add(c);let l=new un($s,Ks,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},el=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Uh="\\[\\]\\.:\\/",vg=new RegExp("["+Uh+"]","g"),Oh="[^"+Uh+"]",yg="[^"+Uh.replace("\\.","")+"]",Sg=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Mg=/(WCOD+)?/.source.replace("WCOD",yg),bg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),Tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),wg=new RegExp("^"+Sg+Mg+bg+Tg+"$"),Eg=["material","materials","bones","map"],rh=class{constructor(t,e,n){let i=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vg,"")}static parseTrackName(t){let e=wg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Eg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=rh;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MM=new Float32Array(1);var Bd=new de,ra=class{constructor(t,e,n=0,i=1/0){this.ray=new Bi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bd),this}intersectObject(t,e=!0,n=[]){return ah(t,this,n,e),n.sort(kd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ah(t[i],this,n,e);return n.sort(kd),n}};function kd(s,t){return s.distance-t.distance}function ah(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)ah(r[a],t,e,!0)}}var fr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var oh=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};var aa=class extends qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Fh(s,t,e,n){let i=Ag(n);switch(e){case Eh:return s*t;case Ch:return s*t/i.components*i.byteLength;case ll:return s*t/i.components*i.byteLength;case ts:return s*t*2/i.components*i.byteLength;case cl:return s*t*2/i.components*i.byteLength;case Ah:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case hl:return s*t*4/i.components*i.byteLength;case ua:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fa:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dl:case pl:return Math.max(s,16)*Math.max(t,8)/4;case ul:case fl:return Math.max(s,8)*Math.max(t,8)/2;case ml:case gl:case xl:case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _l:case ma:case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ul:case Ol:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Bl:case kl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ga:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(s){switch(s){case pn:case Mh:return{byteLength:1,components:1};case gr:case bh:case $n:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case Zn:case rl:case Jn:return{byteLength:4,components:1};case Th:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $f(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rg(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,__=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,M_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,D_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Pg,alphahash_pars_fragment:Ig,alphamap_fragment:Lg,alphamap_pars_fragment:Dg,alphatest_fragment:Ng,alphatest_pars_fragment:Ug,aomap_fragment:Og,aomap_pars_fragment:Fg,batching_pars_vertex:Bg,batching_vertex:kg,begin_vertex:zg,beginnormal_vertex:Vg,bsdfs:Hg,iridescence_fragment:Gg,bumpmap_pars_fragment:Wg,clipping_planes_fragment:Xg,clipping_planes_pars_fragment:qg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:Zg,color_fragment:Jg,color_pars_fragment:$g,color_pars_vertex:Kg,color_vertex:jg,common:Qg,cube_uv_reflection_fragment:t_,defaultnormal_vertex:e_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:s_,emissivemap_pars_fragment:r_,colorspace_fragment:a_,colorspace_pars_fragment:o_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:h_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:M_,envmap_vertex:d_,fog_vertex:f_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:__,lightmap_pars_fragment:x_,lights_lambert_fragment:v_,lights_lambert_pars_fragment:y_,lights_pars_begin:S_,lights_toon_fragment:b_,lights_toon_pars_fragment:T_,lights_phong_fragment:w_,lights_phong_pars_fragment:E_,lights_physical_fragment:A_,lights_physical_pars_fragment:C_,lights_fragment_begin:R_,lights_fragment_maps:P_,lights_fragment_end:I_,lightprobes_pars_fragment:L_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:O_,map_fragment:F_,map_pars_fragment:B_,map_particle_fragment:k_,map_particle_pars_fragment:z_,metalnessmap_fragment:V_,metalnessmap_pars_fragment:H_,morphinstance_vertex:G_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:q_,morphtarget_vertex:Y_,normal_fragment_begin:Z_,normal_fragment_maps:J_,normal_pars_fragment:$_,normal_pars_vertex:K_,normal_vertex:j_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:s0,packing:r0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:d0,shadowmap_pars_vertex:f0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:_0,skinning_vertex:x0,skinnormal_vertex:v0,specularmap_fragment:y0,specularmap_pars_fragment:S0,tonemapping_fragment:M0,tonemapping_pars_fragment:b0,transmission_fragment:T0,transmission_pars_fragment:w0,uv_pars_fragment:E0,uv_pars_vertex:A0,uv_vertex:C0,worldpos_vertex:R0,background_vert:P0,background_frag:I0,backgroundCube_vert:L0,backgroundCube_frag:D0,cube_vert:N0,cube_frag:U0,depth_vert:O0,depth_frag:F0,distance_vert:B0,distance_frag:k0,equirect_vert:z0,equirect_frag:V0,linedashed_vert:H0,linedashed_frag:G0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:q0,meshlambert_frag:Y0,meshmatcap_vert:Z0,meshmatcap_frag:J0,meshnormal_vert:$0,meshnormal_frag:K0,meshphong_vert:j0,meshphong_frag:Q0,meshphysical_vert:tx,meshphysical_frag:ex,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:sx,points_frag:rx,shadow_vert:ax,shadow_frag:ox,sprite_vert:lx,sprite_frag:cx},gt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},li={basic:{uniforms:Qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Qe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Qe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Qe([gt.points,gt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Qe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Qe([gt.common,gt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Qe([gt.sprite,gt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Qe([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Qe([gt.lights,gt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};li.physical={uniforms:Qe([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Wl={r:0,b:0,g:0},hx=new de,Kf=new Ot;Kf.set(-1,0,0,0,1,0,0,0,1);function ux(s,t,e,n,i,r){let a=new zt(0),o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let y=b.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(b){let E=!1,y=f(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(b,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===ca)?(l===void 0&&(l=new Te(new wn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ts(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kf),l.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ie,(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Te(new Hi(2,2),new En({name:"BackgroundMaterial",uniforms:Ts(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,E){b.getRGB(Wl,Nh(s)),e.buffers.color.setClear(Wl.r,Wl.g,Wl.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:_,dispose:p}}function dx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(U,F,k,D,V){let Z=!1,X=d(U,D,k,F);r!==X&&(r=X,l(r.object)),Z=f(U,D,k,V),Z&&g(U,D,k,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(U,F,k,D),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(U){return s.bindVertexArray(U)}function h(U){return s.deleteVertexArray(U)}function d(U,F,k,D){let V=D.wireframe===!0,Z=n[F.id];Z===void 0&&(Z={},n[F.id]=Z);let X=U.isInstancedMesh===!0?U.id:0,K=Z[X];K===void 0&&(K={},Z[X]=K);let Q=K[k.id];Q===void 0&&(Q={},K[k.id]=Q);let st=Q[V];return st===void 0&&(st=u(c()),Q[V]=st),st}function u(U){let F=[],k=[],D=[];for(let V=0;V<e;V++)F[V]=0,k[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,F,k,D){let V=r.attributes,Z=F.attributes,X=0,K=k.getAttributes();for(let Q in K)if(K[Q].location>=0){let at=V[Q],wt=Z[Q];if(wt===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(wt=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(wt=U.instanceColor)),at===void 0||at.attribute!==wt||wt&&at.data!==wt.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(U,F,k,D){let V={},Z=F.attributes,X=0,K=k.getAttributes();for(let Q in K)if(K[Q].location>=0){let at=Z[Q];at===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(at=U.instanceColor));let wt={};wt.attribute=at,at&&at.data&&(wt.data=at.data),V[Q]=wt,X++}r.attributes=V,r.attributesNum=X,r.index=D}function _(){let U=r.newAttributes;for(let F=0,k=U.length;F<k;F++)U[F]=0}function m(U){p(U,0)}function p(U,F){let k=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;k[U]=1,D[U]===0&&(s.enableVertexAttribArray(U),D[U]=1),V[U]!==F&&(s.vertexAttribDivisor(U,F),V[U]=F)}function b(){let U=r.newAttributes,F=r.enabledAttributes;for(let k=0,D=F.length;k<D;k++)F[k]!==U[k]&&(s.disableVertexAttribArray(k),F[k]=0)}function E(U,F,k,D,V,Z,X){X===!0?s.vertexAttribIPointer(U,F,k,V,Z):s.vertexAttribPointer(U,F,k,D,V,Z)}function y(U,F,k,D){_();let V=D.attributes,Z=k.getAttributes(),X=F.defaultAttributeValues;for(let K in Z){let Q=Z[K];if(Q.location>=0){let st=V[K];if(st===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(st=U.instanceColor)),st!==void 0){let at=st.normalized,wt=st.itemSize,At=t.get(st);if(At===void 0)continue;let Vt=At.buffer,Ft=At.type,kt=At.bytesPerElement,et=Ft===s.INT||Ft===s.UNSIGNED_INT||st.gpuType===rl;if(st.isInterleavedBufferAttribute){let rt=st.data,yt=rt.stride,Ut=st.offset;if(rt.isInstancedInterleavedBuffer){for(let St=0;St<Q.locationSize;St++)p(Q.location+St,rt.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let St=0;St<Q.locationSize;St++)m(Q.location+St);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let St=0;St<Q.locationSize;St++)E(Q.location+St,wt/Q.locationSize,Ft,at,yt*kt,(Ut+wt/Q.locationSize*St)*kt,et)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<Q.locationSize;rt++)p(Q.location+rt,st.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<Q.locationSize;rt++)m(Q.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let rt=0;rt<Q.locationSize;rt++)E(Q.location+rt,wt/Q.locationSize,Ft,at,wt*kt,wt/Q.locationSize*rt*kt,et)}}else if(X!==void 0){let at=X[K];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(Q.location,at);break;case 3:s.vertexAttrib3fv(Q.location,at);break;case 4:s.vertexAttrib4fv(Q.location,at);break;default:s.vertexAttrib1fv(Q.location,at)}}}}b()}function S(){T();for(let U in n){let F=n[U];for(let k in F){let D=F[k];for(let V in D){let Z=D[V];for(let X in Z)h(Z[X].object),delete Z[X];delete D[V]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let k in F){let D=F[k];for(let V in D){let Z=D[V];for(let X in Z)h(Z[X].object),delete Z[X];delete D[V]}}delete n[U.id]}function A(U){for(let F in n){let k=n[F];for(let D in k){let V=k[D];if(V[U.id]===void 0)continue;let Z=V[U.id];for(let X in Z)h(Z[X].object),delete Z[X];delete V[U.id]}}}function x(U){for(let F in n){let k=n[F],D=U.isInstancedMesh===!0?U.id:0,V=k[D];if(V!==void 0){for(let Z in V){let X=V[Z];for(let K in X)h(X[K].object),delete X[K];delete V[Z]}delete k[D],Object.keys(k).length===0&&delete n[F]}}}function T(){P(),a=!0,r!==i&&(r=i,l(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function fx(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function px(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Fn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pn&&A!==Jn&&!x&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(It("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:w}}function mx(s){let t=this,e=null,n=0,i=!1,r=!1,a=new bn,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,E=b*4,y=p.clippingState||null;c.value=y,y=h(g,u,E,f);for(let S=0;S!==E;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var yr=4,gx=6,_x=20,xx=256,_a=new Yi,Rf=new zt,Bh=null,kh=0,zh=0,Vh=!1,vx=new L,ws=new L,ql=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=vx}=r;Bh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,kh,zh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:$n,format:Fn,colorSpace:Gr,depthBuffer:!1},i=Pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yx(r)),this._blurMaterial=Mx(r,t,e),this._ggxMaterial=Sx(r,t,e)}return i}_compileMaterial(t){let e=new Te(new fn,t);this._renderer.compile(e,_a)}_sceneToCubeUV(t,e,n,i,r){let c=new un(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Rf),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new wn,new Un({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(Rf),p=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;vr(i,y*S,E>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ki||t.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,_a)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-yr?n-g+yr:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,vr(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(o,_a),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,vr(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(o,_a)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-yr?i-this._lodMax+yr:0),u=4*(this._cubeSize-h);vr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,_a)}};function yx(s){let t=[],e=[],n=s,i=s-yr+1+gx;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,E=p>2?0:-1,y=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];g.set(y,f*u*p);for(let S=0;S<u;S++){let w=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?ws.set(1,A,w):p===1?ws.set(-w,1,-A):p===2?ws.set(-w,A,1):p===3?ws.set(-1,A,-w):p===4?ws.set(-w,-1,A):ws.set(w,A,-1),ws.toArray(_,(p*u+S)*f)}}let m=new fn;m.setAttribute("position",new Nn(g,f)),m.setAttribute("outputDirection",new Nn(_,f)),e.push(new Te(m,null)),n>yr&&n--}return{lodMeshes:e,sizeLods:t}}function Pf(s,t,e){let n=new dn(s,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Sx(s,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Mx(s,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function If(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Lf(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yl=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wn(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:ai});r.uniforms.tEquirect.value=e;let a=new Te(i,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=We),new tl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function bx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===nl||f===il)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new Yl(g.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===nl||f===il,_=f===Ki||f===bs;if(g||_){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ql(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new ql(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===nl?u.mapping=Ki:f===il&&(u.mapping=bs),u}function c(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Tx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&_s("WebGLRenderer: "+n+" extension not supported."),i}}}function wx(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let E=0,y=b.length;E<y;E+=3){let S=b[E+0],w=b[E+1],A=b[E+2];u.push(S,w,w,A,A,S)}}else{let b=g.array;_=g.version;for(let E=0,y=b.length/3-1;E<y;E+=3){let S=E+0,w=E+1,A=E+2;u.push(S,w,w,A,A,S)}}let m=new(g.count>=65535?Zr:Yr)(u,1);m.version=_;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Ex(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ax(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cx(s,t,e){let n=new WeakMap,i=new ge;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*S*4*d),A=new Xr(w,y,S,d);A.type=Jn,A.needsUpdate=!0;let x=E*4;for(let P=0;P<d;P++){let U=m[P],F=p[P],k=b[P],D=y*S*4*P;for(let V=0;V<U.count;V++){let Z=V*x;f===!0&&(i.fromBufferAttribute(U,V),w[D+Z+0]=i.x,w[D+Z+1]=i.y,w[D+Z+2]=i.z,w[D+Z+3]=0),g===!0&&(i.fromBufferAttribute(F,V),w[D+Z+4]=i.x,w[D+Z+5]=i.y,w[D+Z+6]=i.z,w[D+Z+7]=0),_===!0&&(i.fromBufferAttribute(k,V),w[D+Z+8]=i.x,w[D+Z+9]=i.y,w[D+Z+10]=i.z,w[D+Z+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new bt(y,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Rx(s,t,e,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Px={[mh]:"LINEAR_TONE_MAPPING",[gh]:"REINHARD_TONE_MAPPING",[_h]:"CINEON_TONE_MAPPING",[la]:"ACES_FILMIC_TONE_MAPPING",[vh]:"AGX_TONE_MAPPING",[yh]:"NEUTRAL_TONE_MAPPING",[xh]:"CUSTOM_TONE_MAPPING"};function Ix(s,t,e,n,i,r){let a=new dn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new fn;l.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let h=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Te(l,h),u=new Yi(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,b=[],E=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let w=0;w<b.length;w++){let A=b[w];A.setSize&&A.setSize(y,S)}},this.setEffects=function(y){b=y,E=b.length>0&&b[0].isRenderPass===!0;let S=a.width,w=a.height;b.length>0&&o===null&&(o=new dn(S,w,{type:$n,depthBuffer:!1,stencilBuffer:!1}),c=new dn(S,w,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let x=b[A];x.setSize&&x.setSize(S,w)}},this.begin=function(y,S){if(_||y.toneMapping===Yn&&b.length===0)return!1;if(p=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Yn,!0},this.hasRenderPass=function(){return E},this.end=function(y,S){y.toneMapping=m,_=!0;let w=a,A=o;for(let x=0;x<b.length;x++){let T=b[x];T.enabled!==!1&&(T.render(y,A,w,S),T.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},Yt.getTransfer(f)===ie&&(h.defines.SRGB_TRANSFER="");let x=Px[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var jf=new on,Wh=new zi(1,1),Qf=new Xr,tp=new Co,ep=new Jr,Df=[],Nf=[],Uf=new Float32Array(16),Of=new Float32Array(9),Ff=new Float32Array(4);function Mr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Df[i];if(r===void 0&&(r=new Float32Array(i),Df[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $l(s,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Lx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Dx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function Nx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function Ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function Ox(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;Ff.set(n),s.uniformMatrix2fv(this.addr,!1,Ff),Oe(e,n)}}function Fx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;Of.set(n),s.uniformMatrix3fv(this.addr,!1,Of),Oe(e,n)}}function Bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;Uf.set(n),s.uniformMatrix4fv(this.addr,!1,Uf),Oe(e,n)}}function kx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function Vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function Hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function Gx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function Xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function Yx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wh.compareFunction=e.isReversedDepthBuffer()?Gl:Hl,r=Wh):r=jf,e.setTexture2D(t||r,i)}function Zx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||tp,i)}function Jx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ep,i)}function $x(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Qf,i)}function Kx(s){switch(s){case 5126:return Lx;case 35664:return Dx;case 35665:return Nx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return Bx;case 5124:case 35670:return kx;case 35667:case 35671:return zx;case 35668:case 35672:return Vx;case 35669:case 35673:return Hx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return $x}}function jx(s,t){s.uniform1fv(this.addr,t)}function Qx(s,t){let e=Mr(t,this.size,2);s.uniform2fv(this.addr,e)}function tv(s,t){let e=Mr(t,this.size,3);s.uniform3fv(this.addr,e)}function ev(s,t){let e=Mr(t,this.size,4);s.uniform4fv(this.addr,e)}function nv(s,t){let e=Mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function iv(s,t){let e=Mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sv(s,t){let e=Mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rv(s,t){s.uniform1iv(this.addr,t)}function av(s,t){s.uniform2iv(this.addr,t)}function ov(s,t){s.uniform3iv(this.addr,t)}function lv(s,t){s.uniform4iv(this.addr,t)}function cv(s,t){s.uniform1uiv(this.addr,t)}function hv(s,t){s.uniform2uiv(this.addr,t)}function uv(s,t){s.uniform3uiv(this.addr,t)}function dv(s,t){s.uniform4uiv(this.addr,t)}function fv(s,t,e){let n=this.cache,i=t.length,r=$l(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Wh:a=jf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function pv(s,t,e){let n=this.cache,i=t.length,r=$l(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||tp,r[a])}function mv(s,t,e){let n=this.cache,i=t.length,r=$l(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ep,r[a])}function gv(s,t,e){let n=this.cache,i=t.length,r=$l(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Qf,r[a])}function _v(s){switch(s){case 5126:return jx;case 35664:return Qx;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var Xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kx(e.type)}},qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_v(e.type)}},Yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function Bf(s,t){s.seq.push(t),s.map[t.id]=t}function xv(s,t,e){let n=s.name,i=n.length;for(Hh.lastIndex=0;;){let r=Hh.exec(n),a=Hh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Bf(e,l===void 0?new Xh(o,s,t):new qh(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Yh(o),Bf(e,d)),e=d}}}var Sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);xv(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function kf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var vv=37297,yv=0;function Sv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zf=new Ot;function Mv(s){Yt._getMatrix(zf,Yt.workingColorSpace,s);let t=`mat3( ${zf.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Wr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Vf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Sv(s.getShaderSource(t),o)}else return r}function bv(s,t){let e=Mv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Tv={[mh]:"Linear",[gh]:"Reinhard",[_h]:"Cineon",[la]:"ACESFilmic",[vh]:"AgX",[yh]:"Neutral",[xh]:"Custom"};function wv(s,t){let e=Tv[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xl=new L;function Ev(){Yt.getLuminanceCoefficients(Xl);let s=Xl.x.toFixed(4),t=Xl.y.toFixed(4),e=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function Cv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function va(s){return s!==""}function Hf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(s){return s.replace(Pv,Lv)}var Iv=new Map;function Lv(s,t){let e=Wt[t];if(e===void 0){let n=Iv.get(t);if(n!==void 0)e=Wt[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zh(e)}var Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(s){return s.replace(Dv,Nv)}function Nv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Uv={[oa]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function Ov(s){return Uv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fv={[Ki]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function Bv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Fv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var kv={[bs]:"ENVMAP_MODE_REFRACTION"};function zv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":kv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vv={[ph]:"ENVMAP_BLENDING_MULTIPLY",[lf]:"ENVMAP_BLENDING_MIX",[cf]:"ENVMAP_BLENDING_ADD"};function Hv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Vv[s.combine]||"ENVMAP_BLENDING_NONE"}function Gv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Ov(e),l=Bv(e),h=zv(e),d=Hv(e),u=Gv(e),f=Av(e),g=Cv(r),_=i.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(va).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(va).join(`
`),p.length>0&&(p+=`
`)):(m=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),p=[Xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,bv("linearToOutputTexel",e.outputColorSpace),Ev(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(va).join(`
`)),a=Zh(a),a=Hf(a,e),a=Gf(a,e),o=Zh(o),o=Hf(o,e),o=Gf(o,e),a=Wf(a),o=Wf(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=b+m+a,y=b+p+o,S=kf(i,i.VERTEX_SHADER,E),w=kf(i,i.FRAGMENT_SHADER,y);i.attachShader(_,S),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(U){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(S)||"",D=i.getShaderInfoLog(w)||"",V=F.trim(),Z=k.trim(),X=D.trim(),K=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,w);else{let st=Vf(i,S,"vertex"),at=Vf(i,w,"fragment");Nt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+st+`
`+at)}else V!==""?It("WebGLProgram: Program Info Log:",V):(Z===""||X==="")&&(Q=!1);Q&&(U.diagnostics={runnable:K,programLog:V,vertexShader:{log:Z,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(S),i.deleteShader(w),x=new Sr(i,_),T=Rv(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,vv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}var Xv=0,Jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $h(t),e.set(t,n)),n}},$h=class{constructor(t){this.id=Xv++,this.code=t,this.usedTimes=0}};function qv(s){return s===ts||s===ma||s===ga}function Yv(s,t,e,n,i,r){let a=new or,o=new Jh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,T,P,U,F,k){let D=U.fog,V=F.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||Z,X),Q=K&&K.mapping===ca?K.image.height:null,st=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=at!==void 0?at.length:0,At=0;V.morphAttributes.position!==void 0&&(At=1),V.morphAttributes.normal!==void 0&&(At=2),V.morphAttributes.color!==void 0&&(At=3);let Vt,Ft,kt,et;if(st){let jt=li[st];Vt=jt.vertexShader,Ft=jt.fragmentShader}else{Vt=x.vertexShader,Ft=x.fragmentShader;let jt=o.getVertexShaderStage(x),Xt=o.getFragmentShaderStage(x);o.update(x,jt,Xt),kt=jt.id,et=Xt.id}let rt=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,Bt=!!x.map,me=!!x.matcap,Dt=!!K,$t=!!x.aoMap,re=!!x.lightMap,Lt=!!x.bumpMap&&x.wireframe===!1,Kt=!!x.normalMap,xe=!!x.displacementMap,ze=!!x.emissiveMap,ae=!!x.metalnessMap,ve=!!x.roughnessMap,B=x.anisotropy>0,Ve=x.clearcoat>0,ee=x.dispersion>0,R=x.retroreflectivity>0,v=x.iridescence>0,H=x.sheen>0,Y=x.transmission>0,nt=B&&!!x.anisotropyMap,dt=Ve&&!!x.clearcoatMap,pt=Ve&&!!x.clearcoatNormalMap,C=Ve&&!!x.clearcoatRoughnessMap,I=v&&!!x.iridescenceMap,J=v&&!!x.iridescenceThicknessMap,z=H&&!!x.sheenColorMap,q=H&&!!x.sheenRoughnessMap,j=!!x.specularMap,ct=!!x.specularColorMap,ut=!!x.specularIntensityMap,mt=Y&&!!x.transmissionMap,N=Y&&!!x.thicknessMap,ht=!!x.gradientMap,tt=!!x.alphaMap,ft=x.alphaTest>0,lt=!!x.alphaHash,it=!!x.extensions,Mt=Yn;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Mt=s.toneMapping);let _t={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:Vt,fragmentShader:Ft,defines:x.defines,customVertexShaderID:kt,customFragmentShaderID:et,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:me,envMap:Dt,envMapMode:Dt&&K.mapping,envMapCubeUVHeight:Q,aoMap:$t,lightMap:re,bumpMap:Lt,normalMap:Kt,displacementMap:xe,emissiveMap:ze,normalMapObjectSpace:Kt&&x.normalMapType===df,normalMapTangentSpace:Kt&&x.normalMapType===Vl,packedNormalMap:Kt&&x.normalMapType===Vl&&qv(x.normalMap.format),metalnessMap:ae,roughnessMap:ve,anisotropy:B,anisotropyMap:nt,clearcoat:Ve,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:C,dispersion:ee,retroreflection:R,iridescence:v,iridescenceMap:I,iridescenceThicknessMap:J,sheen:H,sheenColorMap:z,sheenRoughnessMap:q,specularMap:j,specularColorMap:ct,specularIntensityMap:ut,transmission:Y,transmissionMap:mt,thicknessMap:N,gradientMap:ht,opaque:x.transparent===!1&&x.blending===mr&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:lt,combine:x.combine,mapUv:Bt&&g(x.map.channel),aoMapUv:$t&&g(x.aoMap.channel),lightMapUv:re&&g(x.lightMap.channel),bumpMapUv:Lt&&g(x.bumpMap.channel),normalMapUv:Kt&&g(x.normalMap.channel),displacementMapUv:xe&&g(x.displacementMap.channel),emissiveMapUv:ze&&g(x.emissiveMap.channel),metalnessMapUv:ae&&g(x.metalnessMap.channel),roughnessMapUv:ve&&g(x.roughnessMap.channel),anisotropyMapUv:nt&&g(x.anisotropyMap.channel),clearcoatMapUv:dt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:I&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:z&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&g(x.sheenRoughnessMap.channel),specularMapUv:j&&g(x.specularMap.channel),specularColorMapUv:ct&&g(x.specularColorMap.channel),specularIntensityMapUv:ut&&g(x.specularIntensityMap.channel),transmissionMapUv:mt&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:tt&&g(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Kt||B),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Bt||tt),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&Kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===ie,decodeVideoTextureEmissive:ze&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),b(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let T=f[x.type],P;if(T){let U=li[T];P=Ef.clone(U.uniforms)}else P=x.uniforms;return P}function y(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Wv(s,T,x,i),l.push(P),h.set(T,P)),P}function S(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:A}}function Zv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Jv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Yf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let b=s[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},s[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function c(u,f,g,_,m,p,b){b.reversedDepth===!0&&(m=-m);let E=o(u,f,g,_,m,p);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):e.push(E)}function l(u,f,g,_,m,p){let b=o(u,f,g,_,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||Jv),n.length>1&&n.sort(f||qf),i.length>1&&i.sort(f||qf)}function d(){for(let u=t,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function $v(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Yf,s.set(n,[a])):i>=r.length?(a=new Yf,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new zt};break;case"SpotLight":e={position:new L,direction:new L,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function jv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Qv=0;function ty(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ey(s){let t=new Kv,e=jv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new de,a=new de;function o(l){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,E=0,y=0,S=0,w=0,A=0,x=0,T=0,P=0;l.sort(ty);for(let F=0,k=l.length;F<k;F++){let D=l[F],V=D.color,Z=D.intensity,X=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ts?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=V.r*Z,d+=V.g*Z,u+=V.b*Z;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],Z);P++}else if(D.isSunLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let st=D.shadow,at=e.get(D);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=at,n.sunShadowMap[g]=K;let wt=st.getViewportCount();for(let At=0;At<wt;At++)n.sunShadowMatrix[_+At]=st.getMatrix(At),n.sunShadowCascade[_+At]=st._cascadeData[At];_+=wt,g++}n.sun[f]=Q,f++}else if(D.isDirectionalLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let st=D.shadow,at=e.get(D);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=Q,m++}else if(D.isSpotLight){let Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(V).multiplyScalar(Z),Q.distance=X,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[b]=Q;let st=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,st.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[b]=st.matrix,D.castShadow){let at=e.get(D);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.spotShadow[b]=at,n.spotShadowMap[b]=K,A++}b++}else if(D.isRectAreaLight){let Q=t.get(D);Q.color.copy(V).multiplyScalar(Z),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=Q,E++}else if(D.isPointLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){let st=D.shadow,at=e.get(D);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,at.shadowCameraNear=st.camera.near,at.shadowCameraFar=st.camera.far,n.pointShadow[p]=at,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=D.shadow.matrix,w++}n.point[p]=Q,p++}else if(D.isHemisphereLight){let Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(Z),Q.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[y]=Q,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==b||U.rectAreaLength!==E||U.hemiLength!==y||U.numSunShadows!==g||U.numDirectionalShadows!==S||U.numPointShadows!==w||U.numSpotShadows!==A||U.numSpotMaps!==x||U.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=E,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=b,U.rectAreaLength=E,U.hemiLength=y,U.numSunShadows=g,U.numDirectionalShadows=S,U.numPointShadows=w,U.numSpotShadows=A,U.numSpotMaps=x,U.numLightProbes=P,n.version=Qv++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let b=0,E=l.length;b<E;b++){let y=l[b];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Zf(s){let t=new ey(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ny(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Zf(s),t.set(i,[o])):r>=a.length?(o=new Zf(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ry=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ay=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Jf=new de,xa=new L,Gh=new L;function oy(s,t,e){let n=new cr,i=new bt,r=new bt,a=new ge,o=new Vo,c=new Ho,l={},h=e.maxTextureSize,d={[$i]:ln,[ln]:$i,[ri]:ri},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new fn;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Te(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let p=this.type;this.render=function(w,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Hd&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);let T=s.getRenderTarget(),P=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=w.length;D<V;D++){let Z=w[D],X=Z.shadow;if(X===void 0){It("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let K=X.getFrameExtents();i.multiply(K),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,X.mapSize.y=r.y));let Q=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Q,X.map===null||k===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===pr){if(Z.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new dn(i.x,i.y,{format:ts,type:$n,minFilter:We,magFilter:We,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new zi(i.x,i.y,Jn),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=ni,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ge,X.map.depthTexture.magFilter=Ge}else Z.isPointLight?(X.map=new Yl(i.x),X.map.depthTexture=new Do(i.x,Zn)):(X.map=new dn(i.x,i.y),X.map.depthTexture=new zi(i.x,i.y,Zn)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=ni,this.type===oa?(X.map.depthTexture.compareFunction=Q?Gl:Hl,X.map.depthTexture.minFilter=We,X.map.depthTexture.magFilter=We):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ge,X.map.depthTexture.magFilter=Ge);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let st=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,x);for(let at=0;at<st;at++){let wt=X.getCamera(at);if(Z.isPointLight){let At=X.camera,Vt=X.matrix,Ft=Z.distance||At.far;Ft!==At.far&&(At.far=Ft,At.updateProjectionMatrix()),xa.setFromMatrixPosition(Z.matrixWorld),At.position.copy(xa),Gh.copy(At.position),Gh.add(ry[at]),At.up.copy(ay[at]),At.lookAt(Gh),At.updateMatrixWorld(),Vt.makeTranslation(-xa.x,-xa.y,-xa.z),Jf.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Jf,At.coordinateSystem,At.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,at),s.clear();else{at===0&&(s.setRenderTarget(X.map),s.clear());let At=X.getViewport(at);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(a)}n=X.getFrustum(at),y(A,x,wt,Z,this.type)}X.isPointLightShadow!==!0&&this.type===pr&&b(X,x),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,P,U)};function b(w,A){let x=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new dn(i.x,i.y,{format:ts,type:$n}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,x,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,x,f,_,null)}function E(w,A,x,T){let P=null,U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)P=U;else if(P=x.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=P.uuid,k=A.uuid,D=l[F];D===void 0&&(D={},l[F]=D);let V=D[k];V===void 0&&(V=P.clone(),D[k]=V,A.addEventListener("dispose",S)),P=V}if(P.visible=A.visible,P.wireframe=A.wireframe,T===pr?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:d[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=s.properties.get(P);F.light=x}return P}function y(w,A,x,T,P){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===pr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let k=t.update(w),D=w.material;if(Array.isArray(D)){let V=k.groups;for(let Z=0,X=V.length;Z<X;Z++){let K=V[Z],Q=D[K.materialIndex];if(Q&&Q.visible){let st=E(w,Q,T,P);w.onBeforeShadow(s,w,A,x,k,st,K),s.renderBufferDirect(x,null,k,st,w,K),w.onAfterShadow(s,w,A,x,k,st,K)}}}else if(D.visible){let V=E(w,D,T,P);w.onBeforeShadow(s,w,A,x,k,V,null),s.renderBufferDirect(x,null,k,V,w,null),w.onAfterShadow(s,w,A,x,k,V,null)}}let F=w.children;for(let k=0,D=F.length;k<D;k++)y(F[k],A,x,T,P)}function S(w){w.target.removeEventListener("dispose",S);for(let x in l){let T=l[x],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function ly(s,t){function e(){let N=!1,ht=new ge,tt=null,ft=new ge(0,0,0,0);return{setMask:function(lt){tt!==lt&&!N&&(s.colorMask(lt,lt,lt,lt),tt=lt)},setLocked:function(lt){N=lt},setClear:function(lt,it,Mt,_t,jt){jt===!0&&(lt*=_t,it*=_t,Mt*=_t),ht.set(lt,it,Mt,_t),ft.equals(ht)===!1&&(s.clearColor(lt,it,Mt,_t),ft.copy(ht))},reset:function(){N=!1,tt=null,ft.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,tt=null,ft=null,lt=null;return{setReversed:function(it){if(ht!==it){let Mt=t.get("EXT_clip_control");it?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let _t=lt;lt=null,this.setClear(_t)}},getReversed:function(){return ht},setTest:function(it){it?rt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(it){tt!==it&&!N&&(s.depthMask(it),tt=it)},setFunc:function(it){if(ht&&(it=Tf[it]),ft!==it){switch(it){case go:s.depthFunc(s.NEVER);break;case _o:s.depthFunc(s.ALWAYS);break;case xo:s.depthFunc(s.LESS);break;case er:s.depthFunc(s.LEQUAL);break;case vo:s.depthFunc(s.EQUAL);break;case yo:s.depthFunc(s.GEQUAL);break;case So:s.depthFunc(s.GREATER);break;case Mo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=it}},setLocked:function(it){N=it},setClear:function(it){lt!==it&&(lt=it,ht&&(it=1-it),s.clearDepth(it))},reset:function(){N=!1,tt=null,ft=null,lt=null,ht=!1}}}function i(){let N=!1,ht=null,tt=null,ft=null,lt=null,it=null,Mt=null,_t=null,jt=null;return{setTest:function(Xt){N||(Xt?rt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(Xt){ht!==Xt&&!N&&(s.stencilMask(Xt),ht=Xt)},setFunc:function(Xt,Re,jn){(tt!==Xt||ft!==Re||lt!==jn)&&(s.stencilFunc(Xt,Re,jn),tt=Xt,ft=Re,lt=jn)},setOp:function(Xt,Re,jn){(it!==Xt||Mt!==Re||_t!==jn)&&(s.stencilOp(Xt,Re,jn),it=Xt,Mt=Re,_t=jn)},setLocked:function(Xt){N=Xt},setClear:function(Xt){jt!==Xt&&(s.clearStencil(Xt),jt=Xt)},reset:function(){N=!1,ht=null,tt=null,ft=null,lt=null,it=null,Mt=null,_t=null,jt=null}}}let r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,b=null,E=null,y=null,S=null,w=null,A=null,x=new zt(0,0,0),T=0,P=!1,U=null,F=null,k=null,D=null,V=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=K>=2);let st=null,at={},wt=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),Vt=new ge().fromArray(wt),Ft=new ge().fromArray(At);function kt(N,ht,tt,ft){let lt=new Uint8Array(4),it=s.createTexture();s.bindTexture(N,it),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Mt=0;Mt<tt;Mt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(ht+Mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return it}let et={};et[s.TEXTURE_2D]=kt(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[s.TEXTURE_2D_ARRAY]=kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(er),Lt(!1),Kt(lh),rt(s.CULL_FACE),$t(ai);function rt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function yt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ut(N,ht){return u[N]!==ht?(s.bindFramebuffer(N,ht),u[N]=ht,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function St(N,ht){let tt=g,ft=!1;if(N){tt=f.get(ht),tt===void 0&&(tt=[],f.set(ht,tt));let lt=N.textures;if(tt.length!==lt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Mt=lt.length;it<Mt;it++)tt[it]=s.COLOR_ATTACHMENT0+it;tt.length=lt.length,ft=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,ft=!0);ft&&s.drawBuffers(tt)}function Bt(N){return _!==N?(s.useProgram(N),_=N,!0):!1}let me={[Ms]:s.FUNC_ADD,[Wd]:s.FUNC_SUBTRACT,[Xd]:s.FUNC_REVERSE_SUBTRACT};me[qd]=s.MIN,me[Yd]=s.MAX;let Dt={[Zd]:s.ZERO,[Jd]:s.ONE,[$d]:s.SRC_COLOR,[dh]:s.SRC_ALPHA,[nf]:s.SRC_ALPHA_SATURATE,[tf]:s.DST_COLOR,[jd]:s.DST_ALPHA,[Kd]:s.ONE_MINUS_SRC_COLOR,[fh]:s.ONE_MINUS_SRC_ALPHA,[ef]:s.ONE_MINUS_DST_COLOR,[Qd]:s.ONE_MINUS_DST_ALPHA,[sf]:s.CONSTANT_COLOR,[rf]:s.ONE_MINUS_CONSTANT_COLOR,[af]:s.CONSTANT_ALPHA,[of]:s.ONE_MINUS_CONSTANT_ALPHA};function $t(N,ht,tt,ft,lt,it,Mt,_t,jt,Xt){if(N===ai){m===!0&&(yt(s.BLEND),m=!1);return}if(m===!1&&(rt(s.BLEND),m=!0),N!==Gd){if(N!==p||Xt!==P){if((b!==Ms||S!==Ms)&&(s.blendEquation(s.FUNC_ADD),b=Ms,S=Ms),Xt)switch(N){case mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ch:s.blendFunc(s.ONE,s.ONE);break;case hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Nt("WebGLState: Invalid blending: ",N);break}else switch(N){case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ch:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hh:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",N);break}E=null,y=null,w=null,A=null,x.set(0,0,0),T=0,p=N,P=Xt}return}lt=lt||ht,it=it||tt,Mt=Mt||ft,(ht!==b||lt!==S)&&(s.blendEquationSeparate(me[ht],me[lt]),b=ht,S=lt),(tt!==E||ft!==y||it!==w||Mt!==A)&&(s.blendFuncSeparate(Dt[tt],Dt[ft],Dt[it],Dt[Mt]),E=tt,y=ft,w=it,A=Mt),(_t.equals(x)===!1||jt!==T)&&(s.blendColor(_t.r,_t.g,_t.b,jt),x.copy(_t),T=jt),p=N,P=!1}function re(N,ht){N.side===ri?yt(s.CULL_FACE):rt(s.CULL_FACE);let tt=N.side===ln;ht&&(tt=!tt),Lt(tt),N.blending===mr&&N.transparent===!1?$t(ai):$t(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ft=N.stencilWrite;o.setTest(ft),ft&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(N){U!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),U=N)}function Kt(N){N!==zd?(rt(s.CULL_FACE),N!==F&&(N===lh?s.cullFace(s.BACK):N===Vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),F=N}function xe(N){N!==k&&(X&&s.lineWidth(N),k=N)}function ze(N,ht,tt){N?(rt(s.POLYGON_OFFSET_FILL),(D!==ht||V!==tt)&&(D=ht,V=tt,a.getReversed()&&(ht=-ht),s.polygonOffset(ht,tt))):yt(s.POLYGON_OFFSET_FILL)}function ae(N){N?rt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function ve(N){N===void 0&&(N=s.TEXTURE0+Z-1),st!==N&&(s.activeTexture(N),st=N)}function B(N,ht,tt){tt===void 0&&(st===null?tt=s.TEXTURE0+Z-1:tt=st);let ft=at[tt];ft===void 0&&(ft={type:void 0,texture:void 0},at[tt]=ft),(ft.type!==N||ft.texture!==ht)&&(st!==tt&&(s.activeTexture(tt),st=tt),s.bindTexture(N,ht||et[N]),ft.type=N,ft.texture=ht)}function Ve(){let N=at[st];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function v(){try{s.texSubImage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function H(){try{s.texSubImage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function nt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function dt(){try{s.texStorage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function pt(){try{s.texStorage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function C(){try{s.texImage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function I(){try{s.texImage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function J(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function z(N,ht){d[N]!==ht&&(s.pixelStorei(N,ht),d[N]=ht)}function q(N){Vt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Vt.copy(N))}function j(N){Ft.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ft.copy(N))}function ct(N,ht){let tt=l.get(ht);tt===void 0&&(tt=new WeakMap,l.set(ht,tt));let ft=tt.get(N);ft===void 0&&(ft=s.getUniformBlockIndex(ht,N.name),tt.set(N,ft))}function ut(N,ht){let ft=l.get(ht).get(N);c.get(ht)!==ft&&(s.uniformBlockBinding(ht,ft,N.__bindingPointIndex),c.set(ht,ft))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},st=null,at={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,b=null,E=null,y=null,S=null,w=null,A=null,x=new zt(0,0,0),T=0,P=!1,U=null,F=null,k=null,D=null,V=null,Vt.set(0,0,s.canvas.width,s.canvas.height),Ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:yt,bindFramebuffer:Ut,drawBuffers:St,useProgram:Bt,setBlending:$t,setMaterial:re,setFlipSided:Lt,setCullFace:Kt,setLineWidth:xe,setPolygonOffset:ze,setScissorTest:ae,activeTexture:ve,bindTexture:B,unbindTexture:Ve,compressedTexImage2D:ee,compressedTexImage3D:R,texImage2D:C,texImage3D:I,pixelStorei:z,getParameter:J,updateUBOMapping:ct,uniformBlockBinding:ut,texStorage2D:dt,texStorage3D:pt,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:Y,compressedTexSubImage3D:nt,scissor:q,viewport:j,reset:mt}}function cy(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):ir("canvas")}function m(R,v,H){let Y=1,nt=ee(R);if((nt.width>H||nt.height>H)&&(Y=H/Math.max(nt.width,nt.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let dt=Math.floor(Y*nt.width),pt=Math.floor(Y*nt.height);u===void 0&&(u=_(dt,pt));let C=v?_(dt,pt):u;return C.width=dt,C.height=pt,C.getContext("2d").drawImage(R,0,0,dt,pt),It("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+dt+"x"+pt+")."),C}else return"data"in R&&It("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){s.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,v,H,Y,nt,dt=!1){if(R!==null){if(s[R]!==void 0)return s[R];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pt;Y&&(pt=t.get("EXT_texture_norm16"),pt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=v;if(v===s.RED&&(H===s.FLOAT&&(C=s.R32F),H===s.HALF_FLOAT&&(C=s.R16F),H===s.UNSIGNED_BYTE&&(C=s.R8),H===s.UNSIGNED_SHORT&&pt&&(C=pt.R16_EXT),H===s.SHORT&&pt&&(C=pt.R16_SNORM_EXT)),v===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(C=s.R8UI),H===s.UNSIGNED_SHORT&&(C=s.R16UI),H===s.UNSIGNED_INT&&(C=s.R32UI),H===s.BYTE&&(C=s.R8I),H===s.SHORT&&(C=s.R16I),H===s.INT&&(C=s.R32I)),v===s.RG&&(H===s.FLOAT&&(C=s.RG32F),H===s.HALF_FLOAT&&(C=s.RG16F),H===s.UNSIGNED_BYTE&&(C=s.RG8),H===s.UNSIGNED_SHORT&&pt&&(C=pt.RG16_EXT),H===s.SHORT&&pt&&(C=pt.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(C=s.RG8UI),H===s.UNSIGNED_SHORT&&(C=s.RG16UI),H===s.UNSIGNED_INT&&(C=s.RG32UI),H===s.BYTE&&(C=s.RG8I),H===s.SHORT&&(C=s.RG16I),H===s.INT&&(C=s.RG32I)),v===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(C=s.RGB8UI),H===s.UNSIGNED_SHORT&&(C=s.RGB16UI),H===s.UNSIGNED_INT&&(C=s.RGB32UI),H===s.BYTE&&(C=s.RGB8I),H===s.SHORT&&(C=s.RGB16I),H===s.INT&&(C=s.RGB32I)),v===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(C=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(C=s.RGBA16UI),H===s.UNSIGNED_INT&&(C=s.RGBA32UI),H===s.BYTE&&(C=s.RGBA8I),H===s.SHORT&&(C=s.RGBA16I),H===s.INT&&(C=s.RGBA32I)),v===s.RGB&&(H===s.UNSIGNED_SHORT&&pt&&(C=pt.RGB16_EXT),H===s.SHORT&&pt&&(C=pt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(C=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(C=s.R11F_G11F_B10F)),v===s.RGBA){let I=dt?Wr:Yt.getTransfer(nt);H===s.FLOAT&&(C=s.RGBA32F),H===s.HALF_FLOAT&&(C=s.RGBA16F),H===s.UNSIGNED_BYTE&&(C=I===ie?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&pt&&(C=pt.RGBA16_EXT),H===s.SHORT&&pt&&(C=pt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(C=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(C=s.RGB5_A1)}return(C===s.R16F||C===s.R32F||C===s.RG16F||C===s.RG32F||C===s.RGBA16F||C===s.RGBA32F)&&t.get("EXT_color_buffer_float"),C}function S(R,v){let H;return R?v===null||v===Zn||v===_r?H=s.DEPTH24_STENCIL8:v===Jn?H=s.DEPTH32F_STENCIL8:v===gr&&(H=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===_r?H=s.DEPTH_COMPONENT24:v===Jn?H=s.DEPTH_COMPONENT32F:v===gr&&(H=s.DEPTH_COMPONENT16),H}function w(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ge&&R.minFilter!==We?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){let v=R.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){let v=R.target;v.removeEventListener("dispose",x),U(v)}function T(R){let v=n.get(R);if(v.__webglInit===void 0)return;let H=R.source,Y=f.get(H);if(Y){let nt=Y[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(R),Object.keys(Y).length===0&&f.delete(H)}n.remove(R)}function P(R){let v=n.get(R);s.deleteTexture(v.__webglTexture);let H=R.source,Y=f.get(H);delete Y[v.__cacheKey],a.memory.textures--}function U(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let nt=0;nt<v.__webglFramebuffer[Y].length;nt++)s.deleteFramebuffer(v.__webglFramebuffer[Y][nt]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=R.textures;for(let Y=0,nt=H.length;Y<nt;Y++){let dt=n.get(H[Y]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(H[Y])}n.remove(R)}let F=0;function k(){F=0}function D(){return F}function V(R){F=R}function Z(){let R=F;return R>=i.maxTextures&&It("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function X(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function K(R,v){let H=n.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let Y=R.image;if(Y===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(H,R,v);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+v)}function Q(R,v){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){yt(H,R,v);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+v)}function st(R,v){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){yt(H,R,v);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+v)}function at(R,v){let H=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Ut(H,R,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+v)}let wt={[bo]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[To]:s.MIRRORED_REPEAT},At={[Ge]:s.NEAREST,[hf]:s.NEAREST_MIPMAP_NEAREST,[ha]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[sl]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},Vt={[pf]:s.NEVER,[vf]:s.ALWAYS,[mf]:s.LESS,[Hl]:s.LEQUAL,[gf]:s.EQUAL,[Gl]:s.GEQUAL,[_f]:s.GREATER,[xf]:s.NOTEQUAL};function Ft(R,v){if(v.type===Jn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===We||v.magFilter===sl||v.magFilter===ha||v.magFilter===ji||v.minFilter===We||v.minFilter===sl||v.minFilter===ha||v.minFilter===ji)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,wt[v.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,wt[v.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,wt[v.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,At[v.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Vt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ge||v.minFilter!==ha&&v.minFilter!==ji||v.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function kt(R,v){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));let Y=v.source,nt=f.get(Y);nt===void 0&&(nt={},f.set(Y,nt));let dt=X(v);if(dt!==R.__cacheKey){nt[dt]===void 0&&(nt[dt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[dt].usedTimes++;let pt=nt[R.__cacheKey];pt!==void 0&&(nt[R.__cacheKey].usedTimes--,pt.usedTimes===0&&P(v)),R.__cacheKey=dt,R.__webglTexture=nt[dt].texture}return H}function et(R,v,H){return Math.floor(Math.floor(R/H)/v)}function rt(R,v,H,Y){let dt=R.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,H,Y,v.data);else{dt.sort((z,q)=>z.start-q.start);let pt=0;for(let z=1;z<dt.length;z++){let q=dt[pt],j=dt[z],ct=q.start+q.count,ut=et(j.start,v.width,4),mt=et(q.start,v.width,4);j.start<=ct+1&&ut===mt&&et(j.start+j.count-1,v.width,4)===ut?q.count=Math.max(q.count,j.start+j.count-q.start):(++pt,dt[pt]=j)}dt.length=pt+1;let C=e.getParameter(s.UNPACK_ROW_LENGTH),I=e.getParameter(s.UNPACK_SKIP_PIXELS),J=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let z=0,q=dt.length;z<q;z++){let j=dt[z],ct=Math.floor(j.start/4),ut=Math.ceil(j.count/4),mt=ct%v.width,N=Math.floor(ct/v.width),ht=ut,tt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,mt,N,ht,tt,H,Y,v.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,C),e.pixelStorei(s.UNPACK_SKIP_PIXELS,I),e.pixelStorei(s.UNPACK_SKIP_ROWS,J)}}function yt(R,v,H){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);let nt=kt(R,v),dt=v.source;e.bindTexture(Y,R.__webglTexture,s.TEXTURE0+H);let pt=n.get(dt);if(dt.version!==pt.__version||nt===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let tt=Yt.getPrimaries(Yt.workingColorSpace),ft=v.colorSpace===Ti?null:Yt.getPrimaries(v.colorSpace),lt=v.colorSpace===Ti||tt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let I=m(v.image,!1,i.maxTextureSize);I=Ve(v,I);let J=r.convert(v.format,v.colorSpace),z=r.convert(v.type),q=y(v.internalFormat,J,z,v.normalized,v.colorSpace,v.isVideoTexture);Ft(Y,v);let j,ct=v.mipmaps,ut=v.isVideoTexture!==!0,mt=pt.__version===void 0||nt===!0,N=dt.dataReady,ht=w(v,I);if(v.isDepthTexture)q=S(v.format===Qi,v.type),mt&&(ut?e.texStorage2D(s.TEXTURE_2D,1,q,I.width,I.height):e.texImage2D(s.TEXTURE_2D,0,q,I.width,I.height,0,J,z,null));else if(v.isDataTexture)if(ct.length>0){ut&&mt&&e.texStorage2D(s.TEXTURE_2D,ht,q,ct[0].width,ct[0].height);for(let tt=0,ft=ct.length;tt<ft;tt++)j=ct[tt],ut?N&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,j.width,j.height,J,z,j.data):e.texImage2D(s.TEXTURE_2D,tt,q,j.width,j.height,0,J,z,j.data);v.generateMipmaps=!1}else ut?(mt&&e.texStorage2D(s.TEXTURE_2D,ht,q,I.width,I.height),N&&rt(v,I,J,z)):e.texImage2D(s.TEXTURE_2D,0,q,I.width,I.height,0,J,z,I.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ut&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,q,ct[0].width,ct[0].height,I.depth);for(let tt=0,ft=ct.length;tt<ft;tt++)if(j=ct[tt],v.format!==Fn)if(J!==null)if(ut){if(N)if(v.layerUpdates.size>0){let lt=Fh(j.width,j.height,v.format,v.type);for(let it of v.layerUpdates){let Mt=j.data.subarray(it*lt/j.data.BYTES_PER_ELEMENT,(it+1)*lt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,it,j.width,j.height,1,J,Mt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,j.width,j.height,I.depth,J,j.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,q,j.width,j.height,I.depth,0,j.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,j.width,j.height,I.depth,J,z,j.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,q,j.width,j.height,I.depth,0,J,z,j.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ut&&mt&&e.texStorage2D(s.TEXTURE_2D,ht,q,ct[0].width,ct[0].height);for(let tt=0,ft=ct.length;tt<ft;tt++)j=ct[tt],v.format!==Fn?J!==null?ut?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,j.width,j.height,J,j.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,q,j.width,j.height,0,j.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?N&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,j.width,j.height,J,z,j.data):e.texImage2D(s.TEXTURE_2D,tt,q,j.width,j.height,0,J,z,j.data)}else if(v.isDataArrayTexture)if(ut){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,q,I.width,I.height,I.depth),N)if(v.layerUpdates.size>0){let tt=Fh(I.width,I.height,v.format,v.type);for(let ft of v.layerUpdates){let lt=I.data.subarray(ft*tt/I.data.BYTES_PER_ELEMENT,(ft+1)*tt/I.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ft,I.width,I.height,1,J,z,lt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,J,z,I.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,q,I.width,I.height,I.depth,0,J,z,I.data);else if(v.isData3DTexture)ut?(mt&&e.texStorage3D(s.TEXTURE_3D,ht,q,I.width,I.height,I.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,J,z,I.data)):e.texImage3D(s.TEXTURE_3D,0,q,I.width,I.height,I.depth,0,J,z,I.data);else if(v.isFramebufferTexture){if(mt)if(ut)e.texStorage2D(s.TEXTURE_2D,ht,q,I.width,I.height);else{let tt=I.width,ft=I.height;for(let lt=0;lt<ht;lt++)e.texImage2D(s.TEXTURE_2D,lt,q,tt,ft,0,J,z,null),tt>>=1,ft>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let tt=s.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),I.parentNode!==tt){tt.appendChild(I),d.add(v),tt.onpaint=ft=>{let lt=ft.changedElements;for(let it of d)lt.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,I);else{let lt=s.RGBA,it=s.RGBA,Mt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,lt,it,Mt,I)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ct.length>0){if(ut&&mt){let tt=ee(ct[0]);e.texStorage2D(s.TEXTURE_2D,ht,q,tt.width,tt.height)}for(let tt=0,ft=ct.length;tt<ft;tt++)j=ct[tt],ut?N&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,J,z,j):e.texImage2D(s.TEXTURE_2D,tt,q,J,z,j);v.generateMipmaps=!1}else if(ut){if(mt){let tt=ee(I);e.texStorage2D(s.TEXTURE_2D,ht,q,tt.width,tt.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,J,z,I)}else e.texImage2D(s.TEXTURE_2D,0,q,J,z,I);p(v)&&b(Y),pt.__version=dt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ut(R,v,H){if(v.image.length!==6)return;let Y=kt(R,v),nt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let dt=n.get(nt);if(nt.version!==dt.__version||Y===!0){e.activeTexture(s.TEXTURE0+H);let pt=Yt.getPrimaries(Yt.workingColorSpace),C=v.colorSpace===Ti?null:Yt.getPrimaries(v.colorSpace),I=v.colorSpace===Ti||pt===C?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);let J=v.isCompressedTexture||v.image[0].isCompressedTexture,z=v.image[0]&&v.image[0].isDataTexture,q=[];for(let it=0;it<6;it++)!J&&!z?q[it]=m(v.image[it],!0,i.maxCubemapSize):q[it]=z?v.image[it].image:v.image[it],q[it]=Ve(v,q[it]);let j=q[0],ct=r.convert(v.format,v.colorSpace),ut=r.convert(v.type),mt=y(v.internalFormat,ct,ut,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,ht=dt.__version===void 0||Y===!0,tt=nt.dataReady,ft=w(v,j);Ft(s.TEXTURE_CUBE_MAP,v);let lt;if(J){N&&ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,mt,j.width,j.height);for(let it=0;it<6;it++){lt=q[it].mipmaps;for(let Mt=0;Mt<lt.length;Mt++){let _t=lt[Mt];v.format!==Fn?ct!==null?N?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,_t.width,_t.height,ct,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,mt,_t.width,_t.height,0,_t.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,_t.width,_t.height,ct,ut,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,mt,_t.width,_t.height,0,ct,ut,_t.data)}}}else{if(lt=v.mipmaps,N&&ht){lt.length>0&&ft++;let it=ee(q[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,mt,it.width,it.height)}for(let it=0;it<6;it++)if(z){N?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,q[it].width,q[it].height,ct,ut,q[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,mt,q[it].width,q[it].height,0,ct,ut,q[it].data);for(let Mt=0;Mt<lt.length;Mt++){let jt=lt[Mt].image[it].image;N?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,jt.width,jt.height,ct,ut,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,mt,jt.width,jt.height,0,ct,ut,jt.data)}}else{N?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ct,ut,q[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,mt,ct,ut,q[it]);for(let Mt=0;Mt<lt.length;Mt++){let _t=lt[Mt];N?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,ct,ut,_t.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,mt,ct,ut,_t.image[it])}}}p(v)&&b(s.TEXTURE_CUBE_MAP),dt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function St(R,v,H,Y,nt,dt){let pt=r.convert(H.format,H.colorSpace),C=r.convert(H.type),I=y(H.internalFormat,pt,C,H.normalized,H.colorSpace),J=n.get(v),z=n.get(H);if(z.__renderTarget=v,!J.__hasExternalTextures){let q=Math.max(1,v.width>>dt),j=Math.max(1,v.height>>dt);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,dt,I,q,j,v.depth,0,pt,C,null):e.texImage2D(nt,dt,I,q,j,0,pt,C,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ve(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,nt,z.__webglTexture,0,ae(v)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,nt,z.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(R,v,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),v.depthBuffer){let Y=v.depthTexture,nt=Y&&Y.isDepthTexture?Y.type:null,dt=S(v.stencilBuffer,nt),pt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ve(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae(v),dt,v.width,v.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae(v),dt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,dt,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,R)}else{let Y=v.textures;for(let nt=0;nt<Y.length;nt++){let dt=Y[nt],pt=r.convert(dt.format,dt.colorSpace),C=r.convert(dt.type),I=y(dt.internalFormat,pt,C,dt.normalized,dt.colorSpace);ve(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae(v),I,v.width,v.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae(v),I,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,I,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(R,v,H){let Y=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(v.depthTexture);if(nt.__renderTarget=v,(!nt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),nt.__webglTexture===void 0){nt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,v.depthTexture);let J=r.convert(v.depthTexture.format),z=r.convert(v.depthTexture.type),q;v.depthTexture.format===ni?q=s.DEPTH_COMPONENT24:v.depthTexture.format===Qi&&(q=s.DEPTH24_STENCIL8);for(let j=0;j<6;j++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,q,v.width,v.height,0,J,z,null)}}else K(v.depthTexture,0);let dt=nt.__webglTexture,pt=ae(v),C=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,I=v.depthTexture.format===Qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===ni)ve(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,I,C,dt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,I,C,dt,0);else if(v.depthTexture.format===Qi)ve(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,I,C,dt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,I,C,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(R){let v=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",nt)};Y.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=Y}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let Y=0;Y<6;Y++)me(v.__webglFramebuffer[Y],R,Y);else{let Y=R.texture.mipmaps;Y&&Y.length>0?me(v.__webglFramebuffer[0],R,0):me(v.__webglFramebuffer,R,0)}else if(H){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),Bt(v.__webglDepthbuffer[Y],R,!1);else{let nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,dt)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Bt(v.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,dt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(R,v,H){let Y=n.get(R);v!==void 0&&St(Y.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Dt(R)}function re(R){let v=R.texture,H=n.get(R),Y=n.get(v);R.addEventListener("dispose",x);let nt=R.textures,dt=R.isWebGLCubeRenderTarget===!0,pt=nt.length>1;if(pt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,a.memory.textures++),dt){H.__webglFramebuffer=[];for(let C=0;C<6;C++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[C]=[];for(let I=0;I<v.mipmaps.length;I++)H.__webglFramebuffer[C][I]=s.createFramebuffer()}else H.__webglFramebuffer[C]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let C=0;C<v.mipmaps.length;C++)H.__webglFramebuffer[C]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(pt)for(let C=0,I=nt.length;C<I;C++){let J=n.get(nt[C]);J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&ve(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let C=0;C<nt.length;C++){let I=nt[C];H.__webglColorRenderbuffer[C]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[C]);let J=r.convert(I.format,I.colorSpace),z=r.convert(I.type),q=y(I.internalFormat,J,z,I.normalized,I.colorSpace,R.isXRRenderTarget===!0),j=ae(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,j,q,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+C,s.RENDERBUFFER,H.__webglColorRenderbuffer[C])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,v);for(let C=0;C<6;C++)if(v.mipmaps&&v.mipmaps.length>0)for(let I=0;I<v.mipmaps.length;I++)St(H.__webglFramebuffer[C][I],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+C,I);else St(H.__webglFramebuffer[C],R,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);p(v)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let C=0,I=nt.length;C<I;C++){let J=nt[C],z=n.get(J),q=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,z.__webglTexture),Ft(q,J),St(H.__webglFramebuffer,R,J,s.COLOR_ATTACHMENT0+C,q,0),p(J)&&b(q)}e.unbindTexture()}else{let C=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(C=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(C,Y.__webglTexture),Ft(C,v),v.mipmaps&&v.mipmaps.length>0)for(let I=0;I<v.mipmaps.length;I++)St(H.__webglFramebuffer[I],R,v,s.COLOR_ATTACHMENT0,C,I);else St(H.__webglFramebuffer,R,v,s.COLOR_ATTACHMENT0,C,0);p(v)&&b(C),e.unbindTexture()}R.depthBuffer&&Dt(R)}function Lt(R){let v=R.textures;for(let H=0,Y=v.length;H<Y;H++){let nt=v[H];if(p(nt)){let dt=E(R),pt=n.get(nt).__webglTexture;e.bindTexture(dt,pt),b(dt),e.unbindTexture()}}}let Kt=[],xe=[];function ze(R){if(R.samples>0){if(ve(R)===!1){let v=R.textures,H=R.width,Y=R.height,nt=s.COLOR_BUFFER_BIT,dt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(R),C=v.length>1;if(C)for(let J=0;J<v.length;J++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let I=R.texture.mipmaps;I&&I.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let J=0;J<v.length;J++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),C){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[J]);let z=n.get(v[J]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,H,Y,0,0,H,Y,nt,s.NEAREST),c===!0&&(Kt.length=0,xe.length=0,Kt.push(s.COLOR_ATTACHMENT0+J),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Kt.push(dt),xe.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),C)for(let J=0;J<v.length;J++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,pt.__webglColorRenderbuffer[J]);let z=n.get(v[J]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D,z,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let v=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ae(R){return Math.min(i.maxSamples,R.samples)}function ve(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function B(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Ve(R,v){let H=R.colorSpace,Y=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Gr&&H!==Ti&&(Yt.getTransfer(H)===ie?(Y!==Fn||nt!==pn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",H)),v}function ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=st,this.setTextureCube=at,this.rebindTextures=$t,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function hy(s,t){function e(n,i=Ti){let r,a=Yt.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mh)return s.BYTE;if(n===bh)return s.SHORT;if(n===gr)return s.UNSIGNED_SHORT;if(n===rl)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===Jn)return s.FLOAT;if(n===$n)return s.HALF_FLOAT;if(n===Eh)return s.ALPHA;if(n===Ah)return s.RGB;if(n===Fn)return s.RGBA;if(n===ni)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===Ch)return s.RED;if(n===ll)return s.RED_INTEGER;if(n===ts)return s.RG;if(n===cl)return s.RG_INTEGER;if(n===hl)return s.RGBA_INTEGER;if(n===ua||n===da||n===fa||n===pa)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===gl||n===_l||n===xl||n===vl||n===ma||n===yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ml||n===gl)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_l)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xl)return r.COMPRESSED_R11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ma)return r.COMPRESSED_RG11_EAC;if(n===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sl||n===Ml||n===bl||n===Tl||n===wl||n===El||n===Al||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ul||n===Ol||n===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ul)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===kl||n===ga||n===zl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:uy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jh=class extends qn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Kh,p={},b=e.getContextAttributes(),E=null,y=null,S=[],w=[],A=new bt,x=null,T=null,P=new un;P.viewport=new ge;let U=new un;U.viewport=new ge;let F=[P,U],k=new el,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let rt=S[et];return rt===void 0&&(rt=new lr,S[et]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(et){let rt=S[et];return rt===void 0&&(rt=new lr,S[et]=rt),rt.getGripSpace()},this.getHand=function(et){let rt=S[et];return rt===void 0&&(rt=new lr,S[et]=rt),rt.getHandSpace()};function Z(et){let rt=w.indexOf(et.inputSource);if(rt===-1)return;let yt=S[rt];yt!==void 0&&(yt.update(et.inputSource,et.frame,l||a),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function X(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let et=0;et<S.length;et++){let rt=w[et];rt!==null&&(w[et]=null,S[et].disconnect(rt))}D=null,V=null,m.reset();for(let et in p)delete p[et];if(t.setRenderTarget(E),f=null,u=null,d=null,i=null,y=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),T!==null){let et=T.camera;et.fov=T.fov,et.zoom=T.zoom,et.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ut=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=b.stencil?Qi:ni,Ut=b.stencil?_r:Zn);let Bt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new dn(u.textureWidth,u.textureHeight,{format:Fn,type:pn,depthTexture:new zi(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new dn(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),kt.setContext(i),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(et){for(let rt=0;rt<et.removed.length;rt++){let yt=et.removed[rt],Ut=w.indexOf(yt);Ut>=0&&(w[Ut]=null,S[Ut].disconnect(yt))}for(let rt=0;rt<et.added.length;rt++){let yt=et.added[rt],Ut=w.indexOf(yt);if(Ut===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=w.length){w.push(yt),Ut=Bt;break}else if(w[Bt]===null){w[Bt]=yt,Ut=Bt;break}if(Ut===-1)break}let St=S[Ut];St&&St.connect(yt)}}let Q=new L,st=new L;function at(et,rt,yt){Q.setFromMatrixPosition(rt.matrixWorld),st.setFromMatrixPosition(yt.matrixWorld);let Ut=Q.distanceTo(st),St=rt.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,me=St[14]/(St[10]-1),Dt=St[14]/(St[10]+1),$t=(St[9]+1)/St[5],re=(St[9]-1)/St[5],Lt=(St[8]-1)/St[0],Kt=(Bt[8]+1)/Bt[0],xe=me*Lt,ze=me*Kt,ae=Ut/(-Lt+Kt),ve=ae*-Lt;if(rt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ve),et.translateZ(ae),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),St[10]===-1)et.projectionMatrix.copy(rt.projectionMatrix),et.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let B=me+ae,Ve=Dt+ae,ee=xe-ve,R=ze+(Ut-ve),v=$t*Dt/Ve*B,H=re*Dt/Ve*B;et.projectionMatrix.makePerspective(ee,R,v,H,B,Ve),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function wt(et,rt){rt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(rt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let rt=et.near,yt=et.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),k.near=U.near=P.near=rt,k.far=U.far=P.far=yt,(D!==k.near||V!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,V=k.far),k.layers.mask=et.layers.mask|6,P.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;let Ut=et.parent,St=k.cameras;wt(k,Ut);for(let Bt=0;Bt<St.length;Bt++)wt(St[Bt],Ut);St.length===2?at(k,P,U):k.projectionMatrix.copy(P.projectionMatrix),T===null&&et.isPerspectiveCamera&&(T={camera:et,fov:et.fov,zoom:et.zoom}),At(et,k,Ut)};function At(et,rt,yt){yt===null?et.matrix.copy(rt.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(rt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(rt.projectionMatrix),et.projectionMatrixInverse.copy(rt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=rr*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(et){c=et,u!==null&&(u.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(et){return p[et]};let Vt=null;function Ft(et,rt){if(h=rt.getViewerPose(l||a),g=rt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ut=!1;yt.length!==k.cameras.length&&(k.cameras.length=0,Ut=!0);for(let Dt=0;Dt<yt.length;Dt++){let $t=yt[Dt],re=null;if(f!==null)re=f.getViewport($t);else{let Kt=d.getViewSubImage(u,$t);re=Kt.viewport,Dt===0&&(t.setRenderTargetTextures(y,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(y))}let Lt=F[Dt];Lt===void 0&&(Lt=new un,Lt.layers.enable(Dt),Lt.viewport=new ge,F[Dt]=Lt),Lt.matrix.fromArray($t.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray($t.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(re.x,re.y,re.width,re.height),Dt===0&&(k.matrix.copy(Lt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ut===!0&&k.cameras.push(Lt)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Dt=d.getDepthInformation(yt[0]);Dt&&Dt.isValid&&Dt.texture&&m.init(Dt,i.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Dt=0;Dt<yt.length;Dt++){let $t=yt[Dt].camera;if($t){let re=p[$t];re||(re=new $r,p[$t]=re);let Lt=d.getCameraImage($t);re.sourceTexture=Lt}}}}for(let yt=0;yt<S.length;yt++){let Ut=w[yt],St=S[yt];Ut!==null&&St!==void 0&&St.update(Ut,rt,l||a)}Vt&&Vt(et,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}let kt=new $f;kt.setAnimationLoop(Ft),this.setAnimationLoop=function(et){Vt=et},this.dispose=function(){}}},fy=new de,np=new Ot;np.set(-1,0,0,0,1,0,0,0,1);function py(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),E=b.envMap,y=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(fy.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(np),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function my(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let w=S.program;n.uniformBlockBinding(y,w)}function l(y,S){let w=i[y.id];w===void 0&&(m(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",b));let A=S.program;n.updateUBOMapping(y,A);let x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let S=d();y.__bindingPointIndex=S;let w=s.createBuffer(),A=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,A,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],w=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let x=0,T=w.length;x<T;x++){let P=w[x];if(Array.isArray(P))for(let U=0,F=P.length;U<F;U++)f(P[U],x,U,A);else f(P,x,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,w,A){if(_(y,S,w,A)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let P=0;for(let U=0;U<T.length;U++){let F=T[U],k=p(F);g(F,y.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,w){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,w)}function _(y,S,w,A){let x=y.value,T=S+"_"+w;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let P=A[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(y){let S=y.uniforms,w=0,A=16;for(let T=0,P=S.length;T<P;T++){let U=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,k=U.length;F<k;F++){let D=U[F],V=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,X=V.length;Z<X;Z++){let K=V[Z],Q=p(K),st=w%A,at=st%Q.boundary,wt=st+at;w+=at,wt!==0&&A-wt<Q.storage&&(w+=A-wt),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=Q.storage}}}let x=w%A;return x>0&&(w+=A-x),y.__size=w,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):It("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){let S=y.target;S.removeEventListener("dispose",b);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function E(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:E}}var gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function _y(){return oi===null&&(oi=new Ro(gy,16,16,ts,$n),oi.name="DFG_LUT",oi.minFilter=We,oi.magFilter=We,oi.wrapS=ei,oi.wrapT=ei,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Zl=class{constructor(t={}){let{canvas:e=Sf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([hl,cl,ll]),p=new Set([pn,Zn,gr,_r,al,ol]),b=new Uint32Array(4),E=new Int32Array(4),y=new L,S=null,w=null,A=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,F=null,k=null,D=null,V=null;this._outputColorSpace=je;let Z=0,X=0,K=null,Q=-1,st=null,at=new ge,wt=new ge,At=null,Vt=new zt(0),Ft=0,kt=e.width,et=e.height,rt=1,yt=null,Ut=null,St=new ge(0,0,kt,et),Bt=new ge(0,0,kt,et),me=!1,Dt=new cr,$t=!1,re=!1,Lt=new de,Kt=new L,xe=new ge,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function ve(){return K===null?rt:1}let B=n;function Ve(M,O){return e.getContext(M,O)}let ee,R,v,H,Y,nt,dt,pt,C,I,J,z,q,j,ct,ut,mt,N,ht,tt,ft,lt,it;try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",jt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Re,!1),B===null){let O="webgl2";if(B=Ve(O,M),B===null)throw Ve(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Mt()}catch(M){throw e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),Nt("WebGLRenderer: "+M.message),M}function Mt(){ee=new Tx(B),ee.init(),ft=new hy(B,ee),R=new px(B,ee,t,ft),v=new ly(B,ee),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),k=B.createFramebuffer(),D=B.createFramebuffer(),V=B.createFramebuffer(),H=new Ax(B),Y=new Zv,nt=new cy(B,ee,v,Y,R,ft,H),dt=new bx(P),pt=new Rg(B),lt=new dx(B,pt),C=new wx(B,pt,H,lt),I=new Rx(B,C,pt,lt,H),N=new Cx(B,R,nt),ct=new mx(Y),J=new Yv(P,dt,ee,R,lt,ct),z=new py(P,Y),q=new $v,j=new ny(ee),mt=new ux(P,dt,v,I,g,c),ut=new oy(P,I,R),it=new my(B,H,R,v),ht=new fx(B,ee,H),tt=new Ex(B,ee,H),H.programs=J.programs,P.capabilities=R,P.extensions=ee,P.properties=Y,P.renderLists=q,P.shadowMap=ut,P.state=v,P.info=H}_!==pn&&(T=new Ix(_,e.width,e.height,o,i,r));let _t=new jh(P,B);this.xr=_t,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(M){M!==void 0&&(rt=M,this.setSize(kt,et,!1))},this.getSize=function(M){return M.set(kt,et)},this.setSize=function(M,O,$=!0){if(_t.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=M,et=O,e.width=Math.floor(M*rt),e.height=Math.floor(O*rt),$===!0&&(e.style.width=M+"px",e.style.height=O+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(kt*rt,et*rt).floor()},this.setDrawingBufferSize=function(M,O,$){kt=M,et=O,rt=$,e.width=Math.floor(M*$),e.height=Math.floor(O*$),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(_===pn){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(at)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,O,$,G){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,O,$,G),v.viewport(at.copy(St).multiplyScalar(rt).round())},this.getScissor=function(M){return M.copy(Bt)},this.setScissor=function(M,O,$,G){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,O,$,G),v.scissor(wt.copy(Bt).multiplyScalar(rt).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(M){v.setScissorTest(me=M)},this.setOpaqueSort=function(M){yt=M},this.setTransparentSort=function(M){Ut=M},this.getClearColor=function(M){return M.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,$=!0){let G=0;if(M){let W=!1;if(K!==null){let vt=K.texture.format;W=m.has(vt)}if(W){let vt=K.texture.type,Et=p.has(vt),xt=mt.getClearColor(),Ct=mt.getClearAlpha(),Pt=xt.r,Ht=xt.g,qt=xt.b;Et?(b[0]=Pt,b[1]=Ht,b[2]=qt,b[3]=Ct,B.clearBufferuiv(B.COLOR,0,b)):(E[0]=Pt,E[1]=Ht,E[2]=qt,E[3]=Ct,B.clearBufferiv(B.COLOR,0,E))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",jt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),mt.dispose(),q.dispose(),j.dispose(),Y.dispose(),dt.dispose(),I.dispose(),lt.dispose(),it.dispose(),J.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Qu),_t.removeEventListener("sessionend",td),ds.stop()};function jt(M){M.preventDefault(),Ph("WebGLRenderer: Context Lost."),U=!0}function Xt(){Ph("WebGLRenderer: Context Restored."),U=!1;let M=H.autoReset,O=ut.enabled,$=ut.autoUpdate,G=ut.needsUpdate,W=ut.type;Mt(),H.autoReset=M,ut.enabled=O,ut.autoUpdate=$,ut.needsUpdate=G,ut.type=W}function Re(M){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function jn(M){let O=M.target;O.removeEventListener("dispose",jn),_m(O)}function _m(M){xm(M),Y.remove(M)}function xm(M){let O=Y.get(M).programs;O!==void 0&&(O.forEach(function($){J.releaseProgram($)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,$,G,W,vt){O===null&&(O=ze);let Et=W.isMesh&&W.matrixWorld.determinantAffine()<0,xt=Sm(M,O,$,G,W);v.setMaterial(G,Et);let Ct=$.index,Pt=1;if(G.wireframe===!0){if(Ct=C.getWireframeAttribute($),Ct===void 0)return;Pt=2}let Ht=$.drawRange,qt=$.attributes.position,Rt=Ht.start*Pt,ne=(Ht.start+Ht.count)*Pt;vt!==null&&(Rt=Math.max(Rt,vt.start*Pt),ne=Math.min(ne,(vt.start+vt.count)*Pt)),Ct!==null?(Rt=Math.max(Rt,0),ne=Math.min(ne,Ct.count)):qt!=null&&(Rt=Math.max(Rt,0),ne=Math.min(ne,qt.count));let De=ne-Rt;if(De<0||De===1/0)return;lt.setup(W,G,xt,$,Ct);let fe,le=ht;if(Ct!==null&&(fe=pt.get(Ct),le=tt,le.setIndex(fe)),W.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*ve()),le.setMode(B.LINES)):le.setMode(B.TRIANGLES);else if(W.isLine){let Je=G.linewidth;Je===void 0&&(Je=1),v.setLineWidth(Je*ve()),W.isLineSegments?le.setMode(B.LINES):W.isLineLoop?le.setMode(B.LINE_LOOP):le.setMode(B.LINE_STRIP)}else W.isPoints?le.setMode(B.POINTS):W.isSprite&&le.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Je=W._multiDrawStarts,Tt=W._multiDrawCounts,sn=W._multiDrawCount,te=Ct?pt.get(Ct).bytesPerElement:1,Ln=Y.get(G).currentProgram.getUniforms();for(let Qn=0;Qn<sn;Qn++)Ln.setValue(B,"_gl_DrawID",Qn),le.render(Je[Qn]/te,Tt[Qn])}else if(W.isInstancedMesh)le.renderInstances(Rt,De,W.count);else if($.isInstancedBufferGeometry){let Je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Tt=Math.min($.instanceCount,Je);le.renderInstances(Rt,De,Tt)}else le.render(Rt,De)};function ju(M,O,$,G){F!==null&&M.isNodeMaterial&&F.setObject(G,M),$t===!0&&ct.setState(M,$,!1),M.transparent===!0&&M.side===ri&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,Va(M,O,G),M.side=$i,M.needsUpdate=!0,Va(M,O,G),M.side=ri):Va(M,O,G)}this.compile=function(M,O,$=null){$===null&&($=M),F!==null&&F.renderStart(M,O,$),w=j.get($),w.init(O),x.push(w),$.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),M!==$&&M.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),re=this.localClippingEnabled,$t=ct.init(this.clippingPlanes,re),$t===!0&&ct.setGlobalState(this.clippingPlanes,O),F!==null&&ut.render(w.state.shadowsArray,$,O);let G=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let vt=W.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){let xt=vt[Et];ju(xt,$,O,W),G.add(xt)}else ju(vt,$,O,W),G.add(vt)}),w=x.pop(),F!==null&&F.renderEnd(),G},this.compileAsync=function(M,O,$=null){let G=this.compile(M,O,$);return new Promise(W=>{function vt(){if(G.forEach(function(Et){let Ct=Y.get(Et).currentProgram;(Ct===void 0||Ct.isReady())&&G.delete(Et)}),G.size===0){W(M);return}setTimeout(vt,10)}ee.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ec=null;function vm(M){Ec&&Ec(M)}function Qu(){ds.stop()}function td(){ds.start()}let ds=new $f;ds.setAnimationLoop(vm),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(M){Ec=M,_t.setAnimationLoop(M),M===null?ds.stop():ds.start()},_t.addEventListener("sessionstart",Qu),_t.addEventListener("sessionend",td),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(M,O);let $=_t.enabled===!0&&_t.isPresenting===!0,G=T!==null&&(K===null||$)&&T.begin(P,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(O),O=_t.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,O,K),w=j.get(M,x.length),w.init(O),w.state.textureUnits=nt.getTextureUnits(),x.push(w),Lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Dt.setFromProjectionMatrix(Lt,Xn,O.reversedDepth),re=this.localClippingEnabled,$t=ct.init(this.clippingPlanes,re),S=q.get(M,A.length),S.init(),A.push(S),_t.enabled===!0&&_t.isPresenting===!0){let Et=P.xr.getDepthSensingMesh();Et!==null&&Ac(Et,O,-1/0,P.sortObjects)}Ac(M,O,0,P.sortObjects),S.finish(),F!==null&&F.updateLights(w.state.lightsArray),P.sortObjects===!0&&S.sort(yt,Ut),ae=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,ae&&mt.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&ct.beginShadows();let W=w.state.shadowsArray;if(ut.render(W,M,O),$t===!0&&ct.endShadows(),(G&&T.hasRenderPass())===!1){let Et=S.opaque,xt=S.transmissive;if(w.setupLights(),O.isArrayCamera){let Ct=O.cameras;if(xt.length>0)for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let qt=Ct[Pt];nd(Et,xt,M,qt)}ae&&mt.render(M);for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let qt=Ct[Pt];ed(S,M,qt,qt.viewport)}}else xt.length>0&&nd(Et,xt,M,O),ae&&mt.render(M),ed(S,M,O)}K!==null&&X===0&&(nt.updateMultisampleRenderTarget(K),nt.updateRenderTargetMipmap(K)),G&&T.end(P),M.isScene===!0&&M.onAfterRender(P,M,O),lt.resetDefaultState(),Q=-1,st=null,x.pop(),x.length>0?(w=x[x.length-1],nt.setTextureUnits(w.state.textureUnits),$t===!0&&ct.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,F!==null&&F.renderEnd()};function Ac(M,O,$,G){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Dt)){G&&xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Lt);let Et=I.update(M),xt=M.material;xt.visible&&S.push(M,Et,xt,$,xe.z,null,O)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Dt))){let Et=I.update(M),xt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),xe.copy(M.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),xe.copy(Et.boundingSphere.center)),xe.applyMatrix4(M.matrixWorld).applyMatrix4(Lt)),Array.isArray(xt)){let Ct=Et.groups;for(let Pt=0,Ht=Ct.length;Pt<Ht;Pt++){let qt=Ct[Pt],Rt=xt[qt.materialIndex];Rt&&Rt.visible&&S.push(M,Et,Rt,$,xe.z,qt,O)}}else xt.visible&&S.push(M,Et,xt,$,xe.z,null,O)}}let vt=M.children;for(let Et=0,xt=vt.length;Et<xt;Et++)Ac(vt[Et],O,$,G)}function ed(M,O,$,G){let{opaque:W,transmissive:vt,transparent:Et}=M;w.setupLightsView($),$t===!0&&ct.setGlobalState(P.clippingPlanes,$),G&&v.viewport(at.copy(G)),W.length>0&&za(W,O,$),vt.length>0&&za(vt,O,$),Et.length>0&&za(Et,O,$),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function nd(M,O,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Rt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new dn(1,1,{generateMipmaps:!0,type:Rt?$n:pn,minFilter:ji,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let vt=w.state.transmissionRenderTarget[G.id],Et=G.viewport||at;vt.setSize(Et.z*P.transmissionResolutionScale,Et.w*P.transmissionResolutionScale);let xt=P.getRenderTarget(),Ct=P.getActiveCubeFace(),Pt=P.getActiveMipmapLevel();P.setRenderTarget(vt),P.getClearColor(Vt),Ft=P.getClearAlpha(),Ft<1&&P.setClearColor(16777215,.5),P.clear(),ae&&mt.render($);let Ht=P.toneMapping;P.toneMapping=Yn;let qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),$t===!0&&ct.setGlobalState(P.clippingPlanes,G),za(M,$,G),nt.updateMultisampleRenderTarget(vt),nt.updateRenderTargetMipmap(vt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ne=0,De=O.length;ne<De;ne++){let fe=O[ne],{object:le,geometry:Je,material:Tt,group:sn}=fe;if(Tt.side===ri&&le.layers.test(G.layers)){let te=Tt.side;Tt.side=ln,Tt.needsUpdate=!0,id(le,$,G,Je,Tt,sn),Tt.side=te,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(nt.updateMultisampleRenderTarget(vt),nt.updateRenderTargetMipmap(vt))}P.setRenderTarget(xt,Ct,Pt),P.setClearColor(Vt,Ft),qt!==void 0&&(G.viewport=qt),P.toneMapping=Ht}function za(M,O,$){let G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,vt=M.length;W<vt;W++){let Et=M[W],{object:xt,geometry:Ct,group:Pt}=Et,Ht=Et.material;Ht.allowOverride===!0&&G!==null&&(Ht=G),xt.layers.test($.layers)&&id(xt,O,$,Ct,Ht,Pt)}}function id(M,O,$,G,W,vt){F!==null&&W.isNodeMaterial&&F.setObject(M,W),M.onBeforeRender(P,O,$,G,W,vt),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(P,O,$,G,M,vt),W.transparent===!0&&W.side===ri&&W.forceSinglePass===!1?(W.side=ln,W.needsUpdate=!0,P.renderBufferDirect($,O,G,W,M,vt),W.side=$i,W.needsUpdate=!0,P.renderBufferDirect($,O,G,W,M,vt),W.side=ri):P.renderBufferDirect($,O,G,W,M,vt),M.onAfterRender(P,O,$,G,W,vt)}function Va(M,O,$){O.isScene!==!0&&(O=ze);let G=Y.get(M),W=w.state.lights,vt=w.state.shadowsArray,Et=W.state.version,xt=J.getParameters(M,W.state,vt,O,$,w.state.lightProbeGridArray),Ct=J.getProgramCacheKey(xt),Pt=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;let Ht=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=dt.get(M.envMap||G.environment,Ht),G.envMapRotation=G.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",jn),Pt=new Map,G.programs=Pt);let qt=Pt.get(Ct);if(qt!==void 0){if(G.currentProgram===qt&&G.lightsStateVersion===Et)return rd(M,xt),qt}else xt.uniforms=J.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,$,xt),M.onBeforeCompile(xt,P),qt=J.acquireProgram(xt,Ct),Pt.set(Ct,qt),G.uniforms=xt.uniforms;let Rt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Rt.clippingPlanes=ct.uniform),rd(M,xt),G.needsLights=bm(M),G.lightsStateVersion=Et,G.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.sunLights.value=W.state.sun,Rt.sunLightShadows.value=W.state.sunShadow,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.sunShadowMatrix.value=W.state.sunShadowMatrix,Rt.sunShadowCascade.value=W.state.sunShadowCascade,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=qt,G.uniformsList=null,qt}function sd(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Sr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function rd(M,O){let $=Y.get(M);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function ym(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let $=0,G=M.length;$<G;$++){let W=M[$];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Sm(M,O,$,G,W){O.isScene!==!0&&(O=ze),nt.resetTextureUnits();let vt=O.fog,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,xt=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Yt.workingColorSpace,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Pt=dt.get(G.envMap||Et,Ct),Ht=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qt=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!$.morphAttributes.position,ne=!!$.morphAttributes.normal,De=!!$.morphAttributes.color,fe=Yn;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(fe=P.toneMapping);let le=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Je=le!==void 0?le.length:0,Tt=Y.get(G),sn=w.state.lights;if($t===!0&&(re===!0||M!==st)){let ue=M===st&&G.id===Q;ct.setState(G,M,ue)}let te=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==sn.state.version||Tt.outputColorSpace!==xt||W.isBatchedMesh&&Tt.batching===!1||!W.isBatchedMesh&&Tt.batching===!0||W.isBatchedMesh&&Tt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Tt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Tt.instancing===!1||!W.isInstancedMesh&&Tt.instancing===!0||W.isSkinnedMesh&&Tt.skinning===!1||!W.isSkinnedMesh&&Tt.skinning===!0||W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null||Tt.envMap!==Pt||G.fog===!0&&Tt.fog!==vt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ct.numPlanes||Tt.numIntersection!==ct.numIntersection)||Tt.vertexAlphas!==Ht||Tt.vertexTangents!==qt||Tt.morphTargets!==Rt||Tt.morphNormals!==ne||Tt.morphColors!==De||Tt.toneMapping!==fe||Tt.morphTargetsCount!==Je||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,Tt.__version=G.version);let Ln=Tt.currentProgram;te===!0&&(Ln=Va(G,O,W),F&&G.isNodeMaterial&&F.onUpdateProgram(G,Ln,Tt));let Qn=!1,Pi=!1,Os=!1,oe=Ln.getUniforms(),Pe=Tt.uniforms;if(v.useProgram(Ln.program)&&(Qn=!0,Pi=!0,Os=!0),G.id!==Q&&(Q=G.id,Pi=!0),Tt.needsLights){let ue=ym(w.state.lightProbeGridArray,W);Tt.lightProbeGrid!==ue&&(Tt.lightProbeGrid=ue,Pi=!0)}if(Qn||st!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),oe.setValue(B,"projectionMatrix",M.projectionMatrix),oe.setValue(B,"viewMatrix",M.matrixWorldInverse);let Li=oe.map.cameraPosition;Li!==void 0&&Li.setValue(B,Kt.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&oe.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&oe.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),st!==M&&(st=M,Pi=!0,Os=!0)}if(Tt.needsLights&&(sn.state.sunShadowMap.length>0&&oe.setValue(B,"sunShadowMap",sn.state.sunShadowMap,nt),sn.state.directionalShadowMap.length>0&&oe.setValue(B,"directionalShadowMap",sn.state.directionalShadowMap,nt),sn.state.spotShadowMap.length>0&&oe.setValue(B,"spotShadowMap",sn.state.spotShadowMap,nt),sn.state.pointShadowMap.length>0&&oe.setValue(B,"pointShadowMap",sn.state.pointShadowMap,nt)),W.isSkinnedMesh){oe.setOptional(B,W,"bindMatrix"),oe.setOptional(B,W,"bindMatrixInverse");let ue=W.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),oe.setValue(B,"boneTexture",ue.boneTexture,nt))}W.isBatchedMesh&&(oe.setOptional(B,W,"batchingTexture"),oe.setValue(B,"batchingTexture",W._matricesTexture,nt),oe.setOptional(B,W,"batchingIdTexture"),oe.setValue(B,"batchingIdTexture",W._indirectTexture,nt),oe.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&oe.setValue(B,"batchingColorTexture",W._colorsTexture,nt));let Ii=$.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&N.update(W,$,Ln),(Pi||Tt.receiveShadow!==W.receiveShadow)&&(Tt.receiveShadow=W.receiveShadow,oe.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Pe.envMapIntensity.value=O.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=_y()),Pi){if(oe.setValue(B,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&Mm(Pe,Os),vt&&G.fog===!0&&z.refreshFogUniforms(Pe,vt),z.refreshMaterialUniforms(Pe,G,rt,et,w.state.transmissionRenderTarget[M.id]),Tt.needsLights&&Tt.lightProbeGrid){let ue=Tt.lightProbeGrid;Pe.probesSH.value=ue.texture,Pe.probesMin.value.copy(ue.boundingBox.min),Pe.probesMax.value.copy(ue.boundingBox.max),Pe.probesResolution.value.copy(ue.resolution)}Sr.upload(B,sd(Tt),Pe,nt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Sr.upload(B,sd(Tt),Pe,nt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&oe.setValue(B,"center",W.center),oe.setValue(B,"modelViewMatrix",W.modelViewMatrix),oe.setValue(B,"normalMatrix",W.normalMatrix),oe.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let ue=G.uniformsGroups;for(let Li=0,Fs=ue.length;Li<Fs;Li++){let od=ue[Li];it.update(od,Ln),it.bind(od,Ln)}}return Ln}function Mm(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function bm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,O,$){let G=Y.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=O,Y.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let $=Y.get(M);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,$=0){K=M,Z=O,X=$;let G=null,W=!1,vt=!1;if(M){let xt=Y.get(M);if(xt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(B.FRAMEBUFFER,xt.__webglFramebuffer),at.copy(M.viewport),wt.copy(M.scissor),At=M.scissorTest,v.viewport(at),v.scissor(wt),v.setScissorTest(At),Q=-1;return}else if(xt.__webglFramebuffer===void 0)nt.setupRenderTarget(M);else if(xt.__hasExternalTextures)nt.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ht=M.depthTexture;if(xt.__boundDepthTexture!==Ht){if(Ht!==null&&Y.has(Ht)&&(M.width!==Ht.image.width||M.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(M)}}let Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(vt=!0);let Pt=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pt[O])?G=Pt[O][$]:G=Pt[O],W=!0):M.samples>0&&nt.useMultisampledRTT(M)===!1?G=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(Pt)?G=Pt[$]:G=Pt,at.copy(M.viewport),wt.copy(M.scissor),At=M.scissorTest}else at.copy(St).multiplyScalar(rt).floor(),wt.copy(Bt).multiplyScalar(rt).floor(),At=me;if($!==0&&(G=k),v.bindFramebuffer(B.FRAMEBUFFER,G)&&v.drawBuffers(M,G),v.viewport(at),v.scissor(wt),v.setScissorTest(At),W){let xt=Y.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,xt.__webglTexture,$)}else if(vt){let xt=O;for(let Ct=0;Ct<M.textures.length;Ct++){let Pt=Y.get(M.textures[Ct]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ct,Pt.__webglTexture,$,xt)}}else if(M!==null&&$!==0){let xt=Y.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xt.__webglTexture,$)}Q=-1};function ad(M){let O=Y.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=R.textureFormatReadable(M.format),O.__typeReadable=R.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,$,G,W,vt,Et,xt=0){if(!(M&&M.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){v.bindFramebuffer(B.FRAMEBUFFER,Ct);try{let Pt=M.textures[xt],Ht=Pt.format,qt=Pt.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+xt);let Rt=ad(Pt);if(Rt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-G&&$>=0&&$<=M.height-W&&B.readPixels(O,$,G,W,ft.convert(Ht),ft.convert(qt),vt)}finally{let Pt=K!==null?Y.get(K).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(M,O,$,G,W,vt,Et,xt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(O>=0&&O<=M.width-G&&$>=0&&$<=M.height-W){v.bindFramebuffer(B.FRAMEBUFFER,Ct);let Pt=M.textures[xt],Ht=Pt.format,qt=Pt.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+xt);let Rt=ad(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ne),B.bufferData(B.PIXEL_PACK_BUFFER,vt.byteLength,B.STREAM_READ),B.readPixels(O,$,G,W,ft.convert(Ht),ft.convert(qt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let De=K!==null?Y.get(K).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,De);let fe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await bf(B,fe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,vt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ne),B.deleteSync(fe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,$=0){let G=Math.pow(2,-$),W=Math.floor(M.image.width*G),vt=Math.floor(M.image.height*G),Et=O!==null?O.x:0,xt=O!==null?O.y:0;nt.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Et,xt,W,vt),v.unbindTexture()},this.copyTextureToTexture=function(M,O,$=null,G=null,W=0,vt=0){let Et,xt,Ct,Pt,Ht,qt,Rt,ne,De,fe=M.isCompressedTexture?M.mipmaps[vt]:M.image;if($!==null)Et=$.max.x-$.min.x,xt=$.max.y-$.min.y,Ct=$.isBox3?$.max.z-$.min.z:1,Pt=$.min.x,Ht=$.min.y,qt=$.isBox3?$.min.z:0;else{let Pe=Math.pow(2,-W);Et=Math.floor(fe.width*Pe),xt=Math.floor(fe.height*Pe),M.isDataArrayTexture?Ct=fe.depth:M.isData3DTexture?Ct=Math.floor(fe.depth*Pe):Ct=1,Pt=0,Ht=0,qt=0}G!==null?(Rt=G.x,ne=G.y,De=G.z):(Rt=0,ne=0,De=0);let le=ft.convert(O.format),Je=ft.convert(O.type),Tt;O.isData3DTexture?(nt.setTexture3D(O,0),Tt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(nt.setTexture2DArray(O,0),Tt=B.TEXTURE_2D_ARRAY):(nt.setTexture2D(O,0),Tt=B.TEXTURE_2D),v.activeTexture(B.TEXTURE0),v.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let sn=v.getParameter(B.UNPACK_ROW_LENGTH),te=v.getParameter(B.UNPACK_IMAGE_HEIGHT),Ln=v.getParameter(B.UNPACK_SKIP_PIXELS),Qn=v.getParameter(B.UNPACK_SKIP_ROWS),Pi=v.getParameter(B.UNPACK_SKIP_IMAGES);v.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),v.pixelStorei(B.UNPACK_SKIP_PIXELS,Pt),v.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),v.pixelStorei(B.UNPACK_SKIP_IMAGES,qt);let Os=M.isDataArrayTexture||M.isData3DTexture,oe=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let Pe=Y.get(M),Ii=Y.get(O),ue=Y.get(Pe.__renderTarget),Li=Y.get(Ii.__renderTarget);v.bindFramebuffer(B.READ_FRAMEBUFFER,ue.__webglFramebuffer),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Fs=0;Fs<Ct;Fs++)Os&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,W,qt+Fs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Y.get(O).__webglTexture,vt,De+Fs)),B.blitFramebuffer(Pt,Ht,Et,xt,Rt,ne,Et,xt,B.DEPTH_BUFFER_BIT,B.NEAREST);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||Y.has(M)){let Pe=Y.get(M),Ii=Y.get(O);v.bindFramebuffer(B.READ_FRAMEBUFFER,D),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let ue=0;ue<Ct;ue++)Os?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.__webglTexture,W,qt+ue):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,W),oe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ii.__webglTexture,vt,De+ue):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ii.__webglTexture,vt),W!==0?B.blitFramebuffer(Pt,Ht,Et,xt,Rt,ne,Et,xt,B.COLOR_BUFFER_BIT,B.NEAREST):oe?B.copyTexSubImage3D(Tt,vt,Rt,ne,De+ue,Pt,Ht,Et,xt):B.copyTexSubImage2D(Tt,vt,Rt,ne,Pt,Ht,Et,xt);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else oe?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(Tt,vt,Rt,ne,De,Et,xt,Ct,le,Je,fe.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Tt,vt,Rt,ne,De,Et,xt,Ct,le,fe.data):B.texSubImage3D(Tt,vt,Rt,ne,De,Et,xt,Ct,le,Je,fe):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,vt,Rt,ne,Et,xt,le,Je,fe.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,vt,Rt,ne,fe.width,fe.height,le,fe.data):B.texSubImage2D(B.TEXTURE_2D,vt,Rt,ne,Et,xt,le,Je,fe);v.pixelStorei(B.UNPACK_ROW_LENGTH,sn),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,te),v.pixelStorei(B.UNPACK_SKIP_PIXELS,Ln),v.pixelStorei(B.UNPACK_SKIP_ROWS,Qn),v.pixelStorei(B.UNPACK_SKIP_IMAGES,Pi),vt===0&&O.generateMipmaps&&B.generateMipmap(Tt),v.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&nt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?nt.setTextureCube(M,0):M.isData3DTexture?nt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?nt.setTexture2DArray(M,0):nt.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){Z=0,X=0,K=null,v.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var ip={type:"change"},tu={type:"start"},rp={type:"end"},Kl=new Bi,sp=new bn,vy=Math.cos(70*Lh.DEG2RAD),Fe=new L,mn=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qh=1e-6,jl=class extends aa{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Tn,this._lastTargetPosition=new L,this._quat=new Tn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fr,this._sphericalDelta=new fr,this._scale=1,this._panOffset=new L,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new L,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sy.bind(this),this._onPointerDown=yy.bind(this),this._onPointerUp=My.bind(this),this._onContextMenu=Ry.bind(this),this._onMouseWheel=wy.bind(this),this._onKeyDown=Ey.bind(this),this._onTouchStart=Ay.bind(this),this._onTouchMove=Cy.bind(this),this._onMouseDown=by.bind(this),this._onMouseMove=Ty.bind(this),this._interceptControlDown=Py.bind(this),this._interceptControlUp=Iy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=se.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ip),this.update(),this.state=se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Fe.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Kl.origin.copy(this.object.position),Kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kl.direction))<vy?this.object.lookAt(this.target):(sp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kl.intersectPlane(sp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qh||this._lastTargetPosition.distanceToSquared(this.target)>Qh?(this.dispatchEvent(ip),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Fe.copy(i).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function yy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Sy(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function My(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rp),this.state=se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function by(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=se.DOLLY;break;case Zi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=se.ROTATE}break;case Zi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(tu)}function Ty(s){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function wy(s){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(s.preventDefault(),this.dispatchEvent(tu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(rp))}function Ey(s){this.enabled!==!1&&this._handleKeyDown(s)}function Ay(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=se.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=se.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(tu)}function Cy(s){switch(this._trackPointer(s),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=se.NONE}}function Ry(s){this.enabled!==!1&&s.preventDefault()}function Py(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Iy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ya=new L;function Bn(s,t,e,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;ya.copy(t),ya[n]=0,ya.normalize();let l=.5*a/(a+o),h=1-ya.angleTo(s)/c;return Math.sign(ya[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Ql=class s extends wn{constructor(t=1,e=1,n=1,i=2,r=.1){let a=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new L,l=new L,h=new L(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new L,m=.5/a;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[b+0]=Bn(_,l,"z","y",r,n),f[b+1]=1-Bn(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),f[b+0]=1-Bn(_,l,"z","y",r,n),f[b+1]=1-Bn(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),f[b+0]=1-Bn(_,l,"x","z",r,t),f[b+1]=Bn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[b+0]=1-Bn(_,l,"x","z",r,t),f[b+1]=1-Bn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[b+0]=1-Bn(_,l,"x","y",r,t),f[b+1]=1-Bn(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),f[b+0]=Bn(_,l,"x","y",r,t),f[b+1]=1-Bn(_,l,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function wi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function pp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ea={duration:.5,overwrite:!1,delay:0},xu,qe,_e,zn=1e8,he=1/zn,lu=Math.PI*2,Ly=lu/4,Dy=0,mp=Math.sqrt,Ny=Math.cos,Uy=Math.sin,Be=function(t){return typeof t=="string"},we=function(t){return typeof t=="function"},Ai=function(t){return typeof t=="number"},cc=function(t){return typeof t>"u"},ui=function(t){return typeof t=="object"},xn=function(t){return t!==!1},vu=function(){return typeof window<"u"},tc=function(t){return we(t)||Be(t)},gp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,Oy=/random\([^)]+\)/g,Fy=/,\s*/g,ap=/(?:-?\.?\d|\.)+/gi,yu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Su=/[+-]=-?[.\d]+/,By=/[^,'"\[\]\s]+/gi,ky=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Se,ci,cu,Mu,Rn={},sc={},_p,xp=function(t){return(sc=Tr(t,Rn))&&nn},hc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Aa=function(t,e){return!e&&console.warn(t)},vp=function(t,e){return t&&(Rn[t]=e)&&sc&&(sc[t]=e)||Rn},Ca=function(){return 0},zy={suppressEvents:!0,isStart:!0,kill:!1},ec={suppressEvents:!0,kill:!1},Vy={suppressEvents:!0},bu={},ns=[],hu={},yp,gn={},nu={},op=30,nc=[],Tu="",wu=function(t){var e=t[0],n,i;if(ui(e)||we(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=nc.length;i--&&!nc[i].targetTest(e););n=nc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ru(t[i],n)))||t.splice(i,1);return t},is=function(t){return t._gsap||wu(Vn(t))[0]._gsap},Eu=function(t,e,n){return(n=t[e])&&we(n)?t[e]():cc(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ee=function(t){return Math.round(t*1e5)/1e5||0},ye=function(t){return Math.round(t*1e7)/1e7||0},Ps=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Hy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},rc=function(){var t=ns.length,e=ns.slice(0),n,i;for(hu={},ns.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Au=function(t){return!!(t._initted||t._startAt||t.add)},Sp=function(t,e,n,i){ns.length&&!qe&&rc(),t.render(e,n,i||!!(qe&&e<0&&Au(t))),ns.length&&!qe&&rc()},Mp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(By).length<2?e:Be(t)?t.trim():t},bp=function(t){return t},Pn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Gy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Tr=function(t,e){for(var n in e)t[n]=e[n];return t},lp=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ui(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ac=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ba=function(t){var e=t.parent||Se,n=t.keyframes?Gy(en(t.keyframes)):Pn;if(xn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Wy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Tp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},uc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},ss=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Es=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Xy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},uu=function(t,e,n,i){return t._startAt&&(qe?t._startAt.revert(ec):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},qy=function s(t){return!t||t._ts&&s(t.parent)},cp=function(t){return t._repeat?wr(t._tTime,t=t.duration()+t._rDelay)*t:0},wr=function(t,e){var n=Math.floor(t=ye(t/e));return t&&n===t?n-1:n},oc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},dc=function(t){return t._end=ye(t._start+(t._tDur/Math.abs(t._ts||t._rts||he)||0))},fc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ye(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),dc(t),n._dirty||Es(n,t)),t},wp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=oc(t.rawTime(),e),(!e._dur||Ia(0,e.totalDuration(),n)-e._tTime>he)&&e.render(n,!0)),Es(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-he}},hi=function(t,e,n,i){return e.parent&&ss(e),e._start=ye((Ai(n)?n:n||t!==Se?kn(t,n,e):t._time)+e._delay),e._end=ye(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Tp(t,e,"_first","_last",t._sort?"_start":0),du(e)||(t._recent=e),i||wp(t,e),t._ts<0&&fc(t,t._tTime),t},Ep=function(t,e){return(Rn.ScrollTrigger||hc("scrollTrigger",e))&&Rn.ScrollTrigger.create(e,t)},Ap=function(t,e,n,i,r){if(Lu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&yp!==_n.frame)return ns.push(t),t._lazy=[r,i],1},Yy=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},du=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Zy=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Yy(t)&&!(!t._initted&&du(t))||(t._ts<0||t._dp._ts<0)&&!du(t))?0:1,o=t._rDelay,c=0,l,h,d;if(o&&t._repeat&&(c=Ia(0,t._tDur,e),h=wr(c,o),t._yoyo&&h&1&&(a=1-a),h!==wr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||qe||i||t._zTime===he||!e&&t._zTime){if(!t._initted&&Ap(t,e,i,n,c))return;for(d=t._zTime,t._zTime=e||(n?he:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&uu(t,e,n,!0),t._onUpdate&&!n&&Cn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Cn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ss(t,1),!n&&!qe&&(Cn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Jy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Er=function(t,e,n,i){var r=t._repeat,a=ye(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ye(a*(r+1)+t._rDelay*r):a,o>0&&!i&&fc(t,t._tTime=t._tDur*o),t.parent&&dc(t),n||Es(t.parent,t),t},hp=function(t){return t instanceof tn?Es(t):Er(t,t._dur)},$y={_start:0,endTime:Ca,totalDuration:Ca},kn=function s(t,e,n){var i=t.labels,r=t._recent||$y,a=t.duration()>=zn?r.endTime(!1):t._dur,o,c,l;return Be(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(en(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},Ta=function(t,e,n){var i=Ai(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=xn(c.vars.inherit)&&c.parent;a.immediateRender=xn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Le(e[0],a,e[r+1])},rs=function(t,e){return t||t===0?e(t):e},Ia=function(t,e,n){return n<t?t:n>e?e:n},Ye=function(t,e){return!Be(t)||!(e=ky.exec(t))?"":e[1]},Ky=function(t,e,n){return rs(n,function(i){return Ia(t,e,i)})},fu=[].slice,Cp=function(t,e){return t&&ui(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ui(t[0]))&&!t.nodeType&&t!==ci},jy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Be(i)&&!e||Cp(i,1)?(r=n).push.apply(r,Vn(i)):n.push(i)})||n},Vn=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):Be(t)&&!n&&(cu||!Ar())?fu.call((e||Mu).querySelectorAll(t),0):en(t)?jy(t,n):Cp(t)?fu.call(t,0):t?[t]:[]},pu=function(t){return t=Vn(t)[0]||Aa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Vn(e,n.querySelectorAll?n:n===t?Aa("Invalid scope")||Mu.createElement("div"):t)}},Rp=function(t){return t.sort(function(){return .5-Math.random()})},Pp=function(t){if(we(t))return t;var e=ui(t)?t:{each:t},n=As(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,d=i;return Be(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,m=a[_],p,b,E,y,S,w,A,x,T;if(!m){if(T=e.grid==="auto"?0:(e.grid||[1,zn])[1],!T){for(A=-zn;A<(A=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=a[_]=[],p=c?Math.min(T,_)*h-.5:i%T,b=T===zn?0:c?_*d/T-.5:i/T|0,A=0,x=zn,w=0;w<_;w++)E=w%T-p,y=b-(w/T|0),m[w]=S=l?Math.abs(l==="y"?y:E):mp(E*E+y*y),S>A&&(A=S),S<x&&(x=S);i==="random"&&Rp(m),m.max=A-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:l?l==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Ye(e.amount||e.each)||0,n=n&&_<0?uS(n):n}return _=(m[u]-m.min)/m.max||0,ye(m.b+(n?n(_):_)*m.v)+m.u}},mu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ye(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ai(n)?0:Ye(n))}},Ip=function(t,e){var n=en(t),i,r;return!n&&ui(t)&&(i=n=t.radius||zn,t.values?(t=Vn(t.values),(r=!Ai(t[0]))&&(i*=i)):t=mu(t.increment)),rs(e,n?we(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=zn,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-o,f=t[d].y-c,u=u*u+f*f):u=Math.abs(t[d]-o),u<l&&(l=u,h=d);return h=!i||l<=i?t[h]:a,r||h===a||Ai(a)?h:h+Ye(a)}:mu(t))},Lp=function(t,e,n,i){return rs(en(t)?!e:n===!0?!!(n=0):!i,function(){return en(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Qy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},tS=function(t,e){return function(n){return t(parseFloat(n))+(e||Ye(n))}},eS=function(t,e,n){return Np(t,e,0,1,n)},Dp=function(t,e,n){return rs(n,function(i){return t[~~e(i)]})},nS=function s(t,e,n){var i=e-t;return en(t)?Dp(t,s(0,t.length),e):rs(n,function(r){return(i+(r-t)%i)%i+t})},iS=function s(t,e,n){var i=e-t,r=i*2;return en(t)?Dp(t,s(0,t.length-1),e):rs(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Cr=function(t){return t.replace(Oy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Fy);return Lp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Np=function(t,e,n,i,r){var a=e-t,o=i-n;return rs(r,function(c){return n+((c-t)/a*o||0)})},sS=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=Be(t),o={},c,l,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(en(t)&&!en(e)){for(h=[],d=t.length,u=d-2,l=1;l<d;l++)h.push(s(t[l-1],t[l]));d--,r=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Tr(en(t)?[]:{},t));if(!h){for(c in e)Pu.call(o,t,c,"get",e[c]);r=function(g){return Uu(g,o)||(a?t.p:t)}}}return rs(n,r)},up=function(t,e,n){var i=t.labels,r=zn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},Cn=function(t,e,n){var i=t.vars,r=i[e],a=_e,o=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&ns.length&&rc(),o&&(_e=o),h=c?r.apply(l,c):r.call(l),_e=a,h},Sa=function(t){return ss(t),t.scrollTrigger&&t.scrollTrigger.kill(!!qe),t.progress()<1&&Cn(t,"onInterrupt"),t},br,Up=[],Op=function(t){if(t)if(t=!t.name&&t.default||t,vu()||t.headless){var e=t.name,n=we(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ca,render:Uu,add:Pu,kill:SS,modifier:yS,rawVars:0},a={targetTest:0,get:0,getSetter:pc,aliases:{},register:0};if(Ar(),t!==i){if(gn[e])return;Pn(i,Pn(ac(t,r),a)),Tr(i.prototype,Tr(r,ac(t,a))),gn[i.prop=e]=i,t.targetTest&&(nc.push(i),bu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}vp(e,i),t.register&&t.register(nn,i,hn)}else Up.push(t)},ce=255,Ma={aqua:[0,ce,ce],lime:[0,ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ce],navy:[0,0,128],white:[ce,ce,ce],olive:[128,128,0],yellow:[ce,ce,0],orange:[ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ce,0,0],pink:[ce,192,203],cyan:[0,ce,ce],transparent:[ce,ce,ce,0]},iu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ce+.5|0},Fp=function(t,e,n){var i=t?Ai(t)?[t>>16,t>>8&ce,t&ce]:0:Ma.black,r,a,o,c,l,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ma[t])i=Ma[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ce,i&ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ce,t&ce]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(ap),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=iu(c+1/3,r,a),i[1]=iu(c,r,a),i[2]=iu(c-1/3,r,a);else if(~t.indexOf("="))return i=t.match(yu),n&&i.length<4&&(i[3]=1),i}else i=t.match(ap)||Ma.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/ce,a=i[1]/ce,o=i[2]/ce,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?c=l=0:(f=d-u,l=h>.5?f/(2-d-u):f/(d+u),c=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Bp=function(t){var e=[],n=[],i=-1;return t.split(Ei).forEach(function(r){var a=r.match(Rs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},dp=function(t,e,n){var i="",r=(t+i).match(Ei),a=e?"hsla(":"rgba(",o=0,c,l,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Fp(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Bp(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Ei,"1").split(Rs),d=l.length-1;o<d;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(Ei),d=l.length-1;o<d;o++)i+=l[o]+r[o];return i+l[d]},Ei=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ma)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),rS=/hsl[a]?\(/,Cu=function(t){var e=t.join(" "),n;if(Ei.lastIndex=0,Ei.test(e))return n=rS.test(e),t[1]=dp(t[1],n),t[0]=dp(t[0],n,Bp(t[1])),!0},Ra,_n=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,h,d,u,f,g=function _(m){var p=s()-i,b=m===!0,E,y,S,w;if((p>t||p<0)&&(n+=p-e),i+=p,S=i-n,E=S-a,(E>0||b)&&(w=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=E+(E>=r?4:r-E),y=1),b||(c=l(_)),y)for(f=0;f<o.length;f++)o[f](S,u,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){_p&&(!cu&&vu()&&(ci=cu=window,Mu=ci.document||{},Rn.gsap=nn,(ci.gsapVersions||(ci.gsapVersions=[])).push(nn.version),xp(sc||ci.GreenSockGlobals||!ci.gsap&&ci||{}),Up.forEach(Op)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Ra=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Ra=0,l=Ca},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,p,b){var E=p?function(y,S,w,A){m(y,S,w,A),d.remove(E)}:m;return d.remove(m),o[b?"unshift":"push"](E),Ar(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),Ar=function(){return!Ra&&_n.wake()},Jt={},aS=/^[\d.\-M][\d.\-,\s]/,oS=/["']/g,lS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(oS,"").trim():+l,i=c.substr(o+1).trim();return e},cS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},hS=function(t){var e=(t+"").split("("),n=Jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[lS(e[1])]:cS(t).split(",").map(Mp)):Jt._CE&&aS.test(t)?Jt._CE("",t):n},uS=function(t){return function(e){return 1-t(1-e)}},As=function(t,e){return t&&(we(t)?t:Jt[t]||hS(t))||e},Is=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return cn(t,function(o){Jt[o]=Rn[o]=r,Jt[a=o.toLowerCase()]=n;for(var c in r)Jt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Jt[o+"."+c]=r[c]}),r},kp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},su=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/lu*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Uy((h-a)*r)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:kp(o);return r=lu/r,c.config=function(l,h){return s(t,l,h)},c},ru=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:kp(n);return i.config=function(r){return s(t,r)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Is(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;Is("Elastic",su("in"),su("out"),su());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};Is("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Is("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Is("Circ",function(s){return-(mp(1-s*s)-1)});Is("Sine",function(s){return s===1?1:-Ny(s*Ly)+1});Is("Back",ru("in"),ru("out"),ru());Jt.SteppedEase=Jt.steps=Rn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-he;return function(o){return((i*Ia(0,a,o)|0)+r)*n}}};Ea.ease=Jt["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Tu+=s+","+s+"Params,"});var Ru=function(t,e){this.id=Dy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Eu,this.set=e?e.getSetter:pc},Pa=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Er(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),Ra||_n.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ar(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(fc(this,n),!r._dp||r.parent||wp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===he||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?wr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-he?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?oc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-he?0:this._rts,this.totalTime(Ia(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),dc(this),Xy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==he&&(this._tTime-=he)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ye(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Vy);var i=qe;return qe=n,Au(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(kn(this,n),xn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i)),this._dur||(this._zTime=-he),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-he:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-he,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-he)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=we(n)?n:bp,c=function(){var h=i.then;i.then=null,r&&r(),we(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){Sa(this)},s})();Pn(Pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-he,_prom:0,_ps:!1,_rts:1});var tn=(function(s){pp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=xn(n.sortChildren),Se&&hi(n.parent||Se,wi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ep(wi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Ta(0,arguments,this),this},e.from=function(i,r,a){return Ta(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Ta(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,ba(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Le(i,r,kn(this,a),1),this},e.call=function(i,r,a){return hi(this,Le.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,c,l,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Le(i,a,kn(this,c)),this},e.staggerFrom=function(i,r,a,o,c,l,h){return a.runBackwards=1,ba(a).immediateRender=xn(a.immediateRender),this.staggerTo(i,r,a,o,c,l,h)},e.staggerFromTo=function(i,r,a,o,c,l,h,d){return o.startAt=a,ba(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,r,o,c,l,h,d)},e.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:ye(i),d=this._zTime<0!=i<0&&(this._initted||!l),u,f,g,_,m,p,b,E,y,S,w,A;if(this!==Se&&h>c&&i>=0&&(h=c),h!==this._tTime||a||d){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,E=this._ts,p=!E,d&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(u=ye(h%m),h===c?(_=this._repeat,u=l):(S=ye(h/m),_=~~S,_&&_===S&&(u=l,_--),u>l&&(u=l)),S=wr(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),w&&_&1&&(u=l-u,A=1),_!==S&&!this._lock){var x=w&&S&1,T=x===(w&&_&1);if(_<S&&(x=!x),o=x?0:h%l?l:h,this._lock=1,this.render(o||(A?0:ye(_*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&Cn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,T&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Jy(this,ye(o),ye(u)),b&&(h-=u-(u=b._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&l&&!r&&!S&&(Cn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!p){b=0,g&&(h+=this._zTime=-he);break}}f=g}else{f=this._last;for(var P=i<0?i:u;f;){if(g=f._prev,(f._act||P<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(P-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(P-f._start)*f._ts,r,a||qe&&Au(f)),u!==this._time||!this._ts&&!p){b=0,g&&(h+=this._zTime=P?-he:he);break}}f=g}}if(b&&!r&&(this.pause(),b.render(u>=o?0:-he)._zTime=u>=o?1:-1,this._ts))return this._start=y,dc(this),this.render(i,r,a);this._onUpdate&&!r&&Cn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&ss(this,1),!r&&!(i<0&&!o)&&(h||o||!c)&&(Cn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Ai(r)||(r=kn(this,r,i)),!(i instanceof Pa)){if(en(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Be(i))return this.addLabel(i,r);if(we(i))i=Le.delayedCall(0,i);else return this}return this!==i?hi(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-zn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Le?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Be(i)?this.removeLabel(i):we(i)?this.killTweensOf(i):(i.parent===this&&uc(this,i),i===this._recent&&(this._recent=this._last),Es(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(_n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=kn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Le.delayedCall(0,r||Ca,a);return o.data="isPause",this._hasPause=1,hi(this,o,kn(this,i))},e.removePause=function(i){var r=this._first;for(i=kn(this,i);r;)r._start===i&&r.data==="isPause"&&ss(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)es!==o[c]&&o[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Vn(i),c=this._first,l=Ai(r),h;c;)c instanceof Le?Hy(c._targets,o)&&(l?(!es||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(h=c.getTweensOf(o,r)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=kn(a,i),c=r,l=c.startAt,h=c.onStart,d=c.onStartParams,u=c.immediateRender,f,g=Le.to(a,Pn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||he,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&Er(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},r));return u?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Pn({startAt:{time:kn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),up(this,kn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),up(this,kn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+he)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=ye(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return Es(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Es(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,c=zn,l,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,hi(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ye(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Er(a,a===Se&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Se._ts&&(Sp(Se,oc(i,Se)),yp=_n.frame),_n.frame>=op){op+=vn.autoSleep||120;var r=Se._first;if((!r||!r._ts)&&vn.autoSleep&&_n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||_n.sleep()}}},t})(Pa);Pn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var dS=function(t,e,n,i,r,a,o){var c=new hn(this._pt,t,e,0,1,Nu,null,r),l=0,h=0,d,u,f,g,_,m,p,b;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Cr(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),u=n.match(eu)||[];d=eu.exec(i);)g=d[0],_=i.substring(l,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Ps(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=eu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Su.test(i)||p)&&(c.e=0),this._pt=c,c},Pu=function(t,e,n,i,r,a,o,c,l,h){we(i)&&(i=i(r||0,t,a));var d=t[e],u=n!=="get"?n:we(d)?l?t[e.indexOf("set")||!we(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,f=we(d)?l?_S:Hp:Du,g;if(Be(i)&&(~i.indexOf("random(")&&(i=Cr(i)),i.charAt(1)==="="&&(g=Ps(u,i)+(Ye(u)||0),(g||g===0)&&(i=g))),!h||u!==i||gu)return!isNaN(u*i)&&i!==""?(g=new hn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?vS:Gp,0,f),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&hc(e,i),dS.call(this,t,e,u,i,f,c||vn.stringFilter,l))},fS=function(t,e,n,i,r){if(we(t)&&(t=wa(t,r,e,n,i)),!ui(t)||t.style&&t.nodeType||en(t)||gp(t))return Be(t)?wa(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=wa(t[o],r,e,n,i);return a},Iu=function(t,e,n,i,r,a){var o,c,l,h;if(gn[t]&&(o=new gn[t]).init(r,o.rawVars?e[t]:fS(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new hn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==br))for(l=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)l[o._props[h]]=c;return o},es,gu,Lu=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,b=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!xu,y=t.timeline,S=i.easeReverse||d,w,A,x,T,P,U,F,k,D,V,Z,X,K;if(y&&(!u||!r)&&(r="none"),t._ease=As(r,Ea.ease),t._rEase=S&&(As(S)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(k=m[0]?is(m[0]).harness:0,X=k&&i[k.prop],w=ac(i,bu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?ec:zy),_._lazy=0),a){if(ss(t._startAt=Le.set(m,Pn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&xn(c),startAt:null,delay:0,onUpdate:l&&function(){return Cn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(qe||!o&&!f)&&t._startAt.revert(ec),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),x=Pn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&xn(c),immediateRender:o,stagger:0,parent:p},w),X&&(x[k.prop]=X),ss(t._startAt=Le.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(qe?t._startAt.revert(ec):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,he,he);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&xn(c)||c&&!g,A=0;A<m.length;A++){if(P=m[A],F=P._gsap||wu(m)[A]._gsap,t._ptLookup[A]=V={},hu[F.id]&&ns.length&&rc(),Z=b===m?A:b.indexOf(P),k&&(D=new k).init(P,X||w,t,Z,b)!==!1&&(t._pt=T=new hn(t._pt,P,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(Q){V[Q]=T}),D.priority&&(U=1)),!k||X)for(x in w)gn[x]&&(D=Iu(x,w,t,Z,P,b))?D.priority&&(U=1):V[x]=T=Pu.call(t,P,x,"get",w[x],Z,b,0,i.stringFilter);t._op&&t._op[A]&&t.kill(P,t._op[A]),E&&t._pt&&(es=t,Se.killTweensOf(P,V,t.globalTime(e)),K=!t.parent,es=0),t._pt&&c&&(hu[F.id]=1)}U&&Ou(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&y.render(zn,!0,!0)},pS=function(t,e,n,i,r,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return gu=1,t.vars[e]="+=0",Lu(t,o),gu=0,c?Aa(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(f=l.length;f--;)d=l[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Ee(n)+Ye(d.e)),d.b&&(d.b=h.s+Ye(d.b))},mS=function(t,e){var n=t[0]?is(t[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return e;r=Tr({},e);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},gS=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(en(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},wa=function(t,e,n,i,r){return we(t)?t.call(e,n,i,r):Be(t)&&~t.indexOf("random(")?Cr(t):t},zp=Tu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vp={};cn(zp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Vp[s]=1});var Le=(function(s){pp(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ba(i))||this;var c=o.vars,l=c.duration,h=c.delay,d=c.immediateRender,u=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=i.parent||Se,b=(en(n)||gp(n)?Ai(n[0]):"length"in i)?[n]:Vn(n),E,y,S,w,A,x,T,P;if(o._targets=b.length?wu(b):Aa("GSAP target "+n+" not found. https://gsap.com",!vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||tc(l)||tc(h)){i=o.vars;var U=i.easeReverse||i.yoyoEase;if(E=o.timeline=new tn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:b}),E.kill(),E.parent=E._dp=wi(o),E._start=0,u||tc(l)||tc(h)){if(w=b.length,T=u&&Pp(u),ui(u))for(A in u)~zp.indexOf(A)&&(P||(P={}),P[A]=u[A]);for(y=0;y<w;y++)S=ac(i,Vp),S.stagger=0,U&&(S.easeReverse=U),P&&Tr(S,P),x=b[y],S.duration=+wa(l,wi(o),y,x,b),S.delay=(+wa(h,wi(o),y,x,b)||0)-o._delay,!u&&w===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),E.to(x,S,T?T(y,x,b):0),E._ease=Jt.none;E.duration()?l=h=0:o.timeline=0}else if(g){ba(Pn(E.vars.defaults,{ease:"none"})),E._ease=As(g.ease||i.ease||"none");var F=0,k,D,V;if(en(g))g.forEach(function(Z){return E.to(b,Z,">")}),E.duration();else{S={};for(A in g)A==="ease"||A==="easeEach"||gS(A,g[A],S,g.easeEach);for(A in S)for(k=S[A].sort(function(Z,X){return Z.t-X.t}),F=0,y=0;y<k.length;y++)D=k[y],V={ease:D.e,duration:(D.t-(y?k[y-1].t:0))/100*l},V[A]=D.v,E.to(b,V,F),F+=V.duration;E.duration()<l&&E.to({},{duration:l-E.duration()})}}l||o.duration(l=E.duration())}else o.timeline=0;return f===!0&&!xu&&(es=wi(o),Se.killTweensOf(b),es=0),hi(p,wi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!l&&!g&&o._start===ye(p._time)&&xn(d)&&qy(wi(o))&&p.data!=="nested")&&(o._tTime=-he,o.render(Math.max(0,-h)||0)),m&&Ep(wi(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,d=i>c-he&&!h?c:i<he?0:i,u,f,g,_,m,p,b,E;if(!l)Zy(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(u=ye(d%_),d===c?(g=this._repeat,u=l):(m=ye(d/_),g=~~m,g&&g===m?(u=l,g--):u>l&&(u=l)),p=this._yoyo&&g&1,p&&(u=l-u),m=wr(this._tTime,_),u===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(ye(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ap(this,h?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var S=y?o:l-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(u/l);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(Cn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&uu(this,i,r,a),Cn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Cn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&uu(this,i,!0,!0),(i||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ss(this,1),!r&&!(h&&!o)&&(d||o||p)&&(Cn(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,c){Ra||_n.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Lu(this,l),h=this._ease(l/this._dur),pS(this,i,r,a,o,h,l,c)?this.resetTo(i,r,a,o,1):(fc(this,0),this.parent||Tp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!qe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,es&&es.vars.overwrite!==!0)._first||Sa(this),this.parent&&a!==this.timeline.totalDuration()&&Er(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Vn(i):o,l=this._ptLookup,h=this._pt,d,u,f,g,_,m,p;if((!r||r==="all")&&Wy(o,c))return r==="all"&&(this._pt=0),Sa(this);for(d=this._op=this._op||[],r!=="all"&&(Be(r)&&(_={},cn(r,function(b){return _[b]=1}),r=_),r=mS(o,r)),p=o.length;p--;)if(~c.indexOf(o[p])){u=l[p],r==="all"?(d[p]=r,g=u,f={}):(f=d[p]=d[p]||{},g=r);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&uc(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Sa(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ta(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Ta(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Se.killTweensOf(i,r,a)},t})(Pa);Pn(Le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(s){Le[s]=function(){var t=new tn,e=fu.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Du=function(t,e,n){return t[e]=n},Hp=function(t,e,n){return t[e](n)},_S=function(t,e,n,i){return t[e](i.fp,n)},xS=function(t,e,n){return t.setAttribute(e,n)},pc=function(t,e){return we(t[e])?Hp:cc(t[e])&&t.setAttribute?xS:Du},Gp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},vS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Nu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Uu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},yS=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},SS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?uc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},MS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ou=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},hn=(function(){function s(e,n,i,r,a,o,c,l,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Gp,this.d=c||this,this.set=l||Du,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=MS,this.m=n,this.mt=r,this.tween=i},s})();cn(Tu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return bu[s]=1});Rn.TweenMax=Rn.TweenLite=Le;Rn.TimelineLite=Rn.TimelineMax=tn;Se=new tn({sortChildren:!1,defaults:Ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=Cu;var Cs=[],ic={},bS=[],fp=0,TS=0,au=function(t){return(ic[t]||bS).map(function(e){return e()})},_u=function(){var t=Date.now(),e=[];t-fp>2&&(au("matchMediaInit"),Cs.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=ci.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),au("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fp=t,au("matchMedia"))},Wp=(function(){function s(e,n){this.selector=n&&pu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=TS++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){we(n)&&(r=i,i=n,n=we);var a=this,o=function(){var l=_e,h=a.selector,d;return l&&l!==a&&l.data.push(a),r&&(a.selector=pu(r)),_e=a,d=i.apply(a,arguments),we(d)&&a._r.push(d),_e=l,a.selector=h,a.isReverted=!1,d};return a.last=o,n===we?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=_e;_e=null,n(this),_e=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Le&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof tn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Le)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Cs.length;a--;)Cs[a].id===this.id&&Cs.splice(a,1)},t.revert=function(n){this.kill(n||{})},s})(),wS=(function(){function s(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ui(n)||(n={matches:n});var a=new Wp(0,r||this.scope),o=a.conditions={},c,l,h;_e&&!a.selector&&(a.selector=_e.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=ci.matchMedia(n[l]),c&&(Cs.indexOf(a)<0&&Cs.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(_u):c.addEventListener("change",_u)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),lc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Op(i)})},timeline:function(t){return new tn(t)},getTweensOf:function(t,e){return Se.getTweensOf(t,e)},getProperty:function(t,e,n,i){Be(t)&&(t=Vn(t)[0]);var r=is(t||{}).get,a=n?bp:Mp;return n==="native"&&(n=""),t&&(e?a((gn[e]&&gn[e].get||r)(t,e,n,i)):function(o,c,l){return a((gn[o]&&gn[o].get||r)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=Vn(t),t.length>1){var i=t.map(function(h){return nn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var a=gn[e],o=is(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(h){var d=new a;br._pt=0,d.init(t,n?h+n:h,br,0,[t]),d.render(1,d),br._pt&&Uu(1,br)}:o.set(t,c);return a?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=nn.to(t,Pn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,h){return r.resetTo(e,c,l,h)};return a.tween=r,a},isTweening:function(t){return Se.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=As(t.ease,Ea.ease)),lp(Ea,t||{})},config:function(t){return lp(vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!gn[o]&&!Rn[o]&&Aa(e+" effect requires "+o+" plugin.")}),nu[e]=function(o,c,l){return n(Vn(o),Pn(c||{},r),l)},a&&(tn.prototype[e]=function(o,c,l){return this.add(nu[e](o,ui(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Jt[t]=As(e)},parseEase:function(t,e){return arguments.length?As(t,e):Jt},getById:function(t){return Se.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new tn(t),i,r;for(n.smoothChildTiming=xn(t.smoothChildTiming),Se.remove(n),n._dp=0,n._time=n._tTime=Se._time,i=Se._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Le&&i.vars.onComplete===i._targets[0]))&&hi(n,i,i._start-i._delay),i=r;return hi(Se,n,0),n},context:function(t,e){return t?new Wp(t,e):_e},matchMedia:function(t){return new wS(t)},matchMediaRefresh:function(){return Cs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||_u()},addEventListener:function(t,e){var n=ic[t]||(ic[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ic[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:nS,wrapYoyo:iS,distribute:Pp,random:Lp,snap:Ip,normalize:eS,getUnit:Ye,clamp:Ky,splitColor:Fp,toArray:Vn,selector:pu,mapRange:Np,pipe:Qy,unitize:tS,interpolate:sS,shuffle:Rp},install:xp,effects:nu,ticker:_n,updateRoot:tn.updateRoot,plugins:gn,globalTimeline:Se,core:{PropTween:hn,globals:vp,Tween:Le,Timeline:tn,Animation:Pa,getCache:is,_removeLinkedListItem:uc,reverting:function(){return qe},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return xu=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return lc[s]=Le[s]});_n.add(tn.updateRoot);br=lc.to({},{duration:0});var ES=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},AS=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=ES(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},ou=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(Be(r)&&(c={},cn(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}AS(o,r)}}}},nn=lc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ou("roundProps",mu),ou("modifiers"),ou("snap",Ip))||lc;Le.version=tn.version=nn.version="3.15.0";_p=1;vu()&&Ar();var CS=Jt.Power0,RS=Jt.Power1,PS=Jt.Power2,IS=Jt.Power3,LS=Jt.Power4,DS=Jt.Linear,NS=Jt.Quad,US=Jt.Cubic,OS=Jt.Quart,FS=Jt.Quint,BS=Jt.Strong,kS=Jt.Elastic,zS=Jt.Back,VS=Jt.SteppedEase,HS=Jt.Bounce,GS=Jt.Sine,WS=Jt.Expo,XS=Jt.Circ;var Xp,as,Pr,Hu,Us,qS,qp,Gu,YS=function(){return typeof window<"u"},Ri={},Ns=180/Math.PI,Ir=Math.PI/180,Rr=Math.atan2,Yp=1e8,Wu=/([A-Z])/g,ZS=/(left|right|width|margin|padding|x)/i,JS=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$S=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},KS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},jS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},QS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},em=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},nm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},tM=function(t,e,n){return t.style[e]=n},eM=function(t,e,n){return t.style.setProperty(e,n)},nM=function(t,e,n){return t._gsap[e]=n},iM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},sM=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},rM=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Me="transform",yn=Me+"Origin",aM=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Ri&&r){if(this.tfm=this.tfm||{},t!=="transform")t=di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ci(i,o)}):this.tfm[t]=a.x?a[t]:Ci(i,t),t===yn&&(this.tfm.zOrigin=a.zOrigin);else return di.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Me)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yn,e,"")),t=Me}(r||e)&&this.props.push(t,e,r[t])},im=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},oM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Wu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Gu(),(!r||!r.isStart)&&!n[Me]&&(im(n),i.zOrigin&&n[yn]&&(n[yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sm=function(t,e){var n={target:t,props:[],revert:oM,save:aM};return t._gsap||nn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},rm,ku=function(t,e){var n=as.createElementNS?as.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):as.createElement(t);return n&&n.style?n:as.createElement(t)},In=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Wu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Lr(e)||e,1)||""},Zp="O,Moz,ms,Ms,Webkit".split(","),Lr=function(t,e,n){var i=e||Us,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Zp[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Zp[a]:"")+t},zu=function(){YS()&&window.document&&(Xp=window,as=Xp.document,Pr=as.documentElement,Us=ku("div")||{style:{}},qS=ku("div"),Me=Lr(Me),yn=Me+"Origin",Us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rm=!!Lr("perspective"),Gu=nn.core.reverting,Hu=1)},Jp=function(t){var e=t.ownerSVGElement,n=ku("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Pr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Pr.removeChild(n),r},$p=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},am=function(t){var e,n;try{e=t.getBBox()}catch{e=Jp(t),n=1}return e&&(e.width||e.height)||n||(e=Jp(t)),e&&!e.width&&!e.x&&!e.y?{x:+$p(t,["x","cx","x1"])||0,y:+$p(t,["y","cy","y1"])||0,width:0,height:0}:e},om=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&am(t))},ls=function(t,e){if(e){var n=t.style,i;e in Ri&&e!==yn&&(e=Me),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Wu,"-$1").toLowerCase())):n.removeAttribute(e)}},os=function(t,e,n,i,r,a){var o=new hn(t._pt,e,n,0,1,a?nm:em);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Kp={deg:1,rad:1,turn:1},lM={grid:1,flex:1},cs=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Us.style,c=ZS.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,m,p;if(i===a||!r||Kp[i]||Kp[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),p=t.getCTM&&om(t),(f||a==="%")&&(Ri[e]||~e.indexOf("adius")))return g=p?t.getBBox()[c?"width":"height"]:t[h],Ee(f?r/g*d:r/100*g);if(o[c?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===as||!_.appendChild)&&(_=as.body),m=_._gsap,m&&f&&m.width&&c&&m.time===_n.time&&!m.uncache)return Ee(r/m.width*d);if(f&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=d+i,g=t[h],b?t.style[e]=b:ls(t,e)}else(f||a==="%")&&!lM[In(_,"display")]&&(o.position=In(t,"position")),_===t&&(o.position="static"),_.appendChild(Us),g=Us[h],_.removeChild(Us),o.position="absolute";return c&&f&&(m=is(_),m.time=_n.time,m.width=_[h]),Ee(u?g*r/d:g&&r?d/g*r:0)},Ci=function(t,e,n,i){var r;return Hu||zu(),e in di&&e!=="transform"&&(e=di[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ri[e]&&e!=="transform"?(r=Na(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:gc(In(t,yn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=mc[e]&&mc[e](t,e,n)||In(t,e)||Eu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?cs(t,e,r,n)+n:r},cM=function(t,e,n,i){if(!n||n==="none"){var r=Lr(e,t,1),a=r&&In(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=In(t,"borderTopColor"))}var o=new hn(this._pt,t.style,e,0,1,Nu),c=0,l=0,h,d,u,f,g,_,m,p,b,E,y,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=In(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=In(t,e)||i,_?t.style[e]=_:ls(t,e)),h=[n,i],Cu(h),n=h[0],i=h[1],u=n.match(Rs)||[],S=i.match(Rs)||[],S.length){for(;d=Rs.exec(i);)m=d[0],b=i.substring(c,d.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(_=u[l++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ps(f,m)+y),p=parseFloat(m),E=m.substr((p+"").length),c=Rs.lastIndex-E.length,E||(E=E||vn.units[e]||y,c===i.length&&(i+=E,o.e+=E)),y!==E&&(f=cs(t,e,_,E)||0),o._pt={_next:o._pt,p:b||l===1?b:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?nm:em;return Su.test(i)&&(o.e=0),this._pt=o,o},jp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=jp[n]||n,e[1]=jp[i]||i,e.join(" ")},uM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Ri[o]&&(c=1,o=o==="transformOrigin"?yn:Me),ls(n,o);c&&(ls(n,Me),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Na(n,1),a.uncache=1,im(i)))}},mc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new hn(t._pt,e,n,0,0,uM);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Da=[1,0,0,1,0,0],lm={},cm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Qp=function(t){var e=In(t,Me);return cm(e)?Da:e.substr(7).match(yu).map(Ee)},Xu=function(t,e){var n=t._gsap||is(t),i=t.style,r=Qp(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Da:r):(r===Da&&!t.offsetParent&&t!==Pr&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,Pr.appendChild(t)),r=Qp(t),c?i.display=c:ls(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):Pr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Vu=function(t,e,n,i,r,a){var o=t._gsap,c=r||Xu(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],b=c[5],E=e.split(" "),y=parseFloat(E[0])||0,S=parseFloat(E[1])||0,w,A,x,T;n?c!==Da&&(A=f*m-g*_)&&(x=y*(m/A)+S*(-_/A)+(_*b-m*p)/A,T=y*(-g/A)+S*(f/A)-(f*b-g*p)/A,y=x,S=T):(w=am(t),y=w.x+(~E[0].indexOf("%")?y/100*w.width:y),S=w.y+(~(E[1]||E[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&o.smooth?(p=y-l,b=S-h,o.xOffset=d+(p*f+b*_)-p,o.yOffset=u+(p*g+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[yn]="0px 0px",a&&(os(a,o,"xOrigin",l,y),os(a,o,"yOrigin",h,S),os(a,o,"xOffset",d,o.xOffset),os(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},Na=function(t,e){var n=t._gsap||new Ru(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=In(t,yn)||"0",h,d,u,f,g,_,m,p,b,E,y,S,w,A,x,T,P,U,F,k,D,V,Z,X,K,Q,st,at,wt,At,Vt,Ft;return h=d=u=_=m=p=b=E=y=0,f=g=1,n.svg=!!(t.getCTM&&om(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Me]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Me]!=="none"?c[Me]:"")),i.scale=i.rotate=i.translate="none"),A=Xu(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),l=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Vu(t,X||l,!!X||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,w=n.yOrigin||0,A!==Da&&(U=A[0],F=A[1],k=A[2],D=A[3],h=V=A[4],d=Z=A[5],A.length===6?(f=Math.sqrt(U*U+F*F),g=Math.sqrt(D*D+k*k),_=U||F?Rr(F,U)*Ns:0,b=k||D?Rr(k,D)*Ns+_:0,b&&(g*=Math.abs(Math.cos(b*Ir))),n.svg&&(h-=S-(S*U+w*k),d-=w-(S*F+w*D))):(Ft=A[6],At=A[7],st=A[8],at=A[9],wt=A[10],Vt=A[11],h=A[12],d=A[13],u=A[14],x=Rr(Ft,wt),m=x*Ns,x&&(T=Math.cos(-x),P=Math.sin(-x),X=V*T+st*P,K=Z*T+at*P,Q=Ft*T+wt*P,st=V*-P+st*T,at=Z*-P+at*T,wt=Ft*-P+wt*T,Vt=At*-P+Vt*T,V=X,Z=K,Ft=Q),x=Rr(-k,wt),p=x*Ns,x&&(T=Math.cos(-x),P=Math.sin(-x),X=U*T-st*P,K=F*T-at*P,Q=k*T-wt*P,Vt=D*P+Vt*T,U=X,F=K,k=Q),x=Rr(F,U),_=x*Ns,x&&(T=Math.cos(x),P=Math.sin(x),X=U*T+F*P,K=V*T+Z*P,F=F*T-U*P,Z=Z*T-V*P,U=X,V=K),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Ee(Math.sqrt(U*U+F*F+k*k)),g=Ee(Math.sqrt(Z*Z+Ft*Ft)),x=Rr(V,Z),b=Math.abs(x)>2e-4?x*Ns:0,y=Vt?1/(Vt<0?-Vt:Vt):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!cm(In(t,Me)),X&&t.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Ee(f),n.scaleY=Ee(g),n.rotation=Ee(_)+o,n.rotationX=Ee(m)+o,n.rotationY=Ee(p)+o,n.skewX=b+o,n.skewY=E+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[yn]=gc(l)),n.xOffset=n.yOffset=0,n.force3D=vn.force3D,n.renderTransform=n.svg?fM:rm?hm:dM,n.uncache=0,n},gc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fu=function(t,e,n){var i=Ye(e);return Ee(parseFloat(e)+parseFloat(cs(t,"x",n+"px",i)))+i},dM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,hm(t,e)},Ls="0deg",La="0px",Ds=") ",hm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,E=n.zOrigin,y="",S=p==="auto"&&t&&t!==1||p===!0;if(E&&(d!==Ls||h!==Ls)){var w=parseFloat(h)*Ir,A=Math.sin(w),x=Math.cos(w),T;w=parseFloat(d)*Ir,T=Math.cos(w),a=Fu(b,a,A*T*-E),o=Fu(b,o,-Math.sin(w)*-E),c=Fu(b,c,x*T*-E+E)}m!==La&&(y+="perspective("+m+Ds),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(S||a!==La||o!==La||c!==La)&&(y+=c!==La||S?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Ds),l!==Ls&&(y+="rotate("+l+Ds),h!==Ls&&(y+="rotateY("+h+Ds),d!==Ls&&(y+="rotateX("+d+Ds),(u!==Ls||f!==Ls)&&(y+="skew("+u+", "+f+Ds),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ds),b.style[Me]=y||"translate(0, 0)"},fM=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,E=parseFloat(a),y=parseFloat(o),S,w,A,x,T;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Ir,l*=Ir,S=Math.cos(c)*d,w=Math.sin(c)*d,A=Math.sin(c-l)*-u,x=Math.cos(c-l)*u,l&&(h*=Ir,T=Math.tan(l-h),T=Math.sqrt(1+T*T),A*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),S*=T,w*=T)),S=Ee(S),w=Ee(w),A=Ee(A),x=Ee(x)):(S=d,x=u,w=A=0),(E&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(E=cs(f,"x",a,"px"),y=cs(f,"y",o,"px")),(g||_||m||p)&&(E=Ee(E+g-(g*S+_*A)+m),y=Ee(y+_-(g*w+_*x)+p)),(i||r)&&(T=f.getBBox(),E=Ee(E+i/100*T.width),y=Ee(y+r/100*T.height)),T="matrix("+S+","+w+","+A+","+x+","+E+","+y+")",f.setAttribute("transform",T),b&&(f.style[Me]=T)},pM=function(t,e,n,i,r){var a=360,o=Be(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?Ns:1),l=c-i,h=i+l+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*Yp)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*Yp)%a-~~(l/a)*a)),t._pt=u=new hn(t._pt,e,n,i,l,$S),u.e=h,u.u="deg",t._props.push(n),u},tm=function(t,e){for(var n in e)t[n]=e[n];return t},mM=function(t,e,n){var i=tm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,d,u,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Me]=e,o=Na(n,1),ls(n,Me),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Me],a[Me]=e,o=Na(n,1),a[Me]=l);for(c in Ri)l=i[c],h=o[c],l!==h&&r.indexOf(c)<0&&(f=Ye(l),g=Ye(h),d=f!==g?cs(n,c,l,g):parseFloat(l),u=parseFloat(h),t._pt=new hn(t._pt,o,c,d,u-d,Bu),t._pt.u=g||0,t._props.push(c));tm(o,i)};cn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});mc[t>1?"border"+s:s]=function(o,c,l,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return Ci(o,g,l)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(c,f,d)}});var qu={name:"css",register:zu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,c=n.vars.startAt,l,h,d,u,f,g,_,m,p,b,E,y,S,w,A,x,T;Hu||zu(),this.styles=this.styles||sm(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(gn[_]&&Iu(_,e,n,i,t,r)))){if(f=typeof h,g=mc[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Cr(h)),g)g(this,t,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Ei.lastIndex=0,Ei.test(l)||(m=Ye(l),p=Ye(h),p?m!==p&&(l=cs(t,_,l,p)+p):m&&(h+=m)),this.add(o,"setProperty",l,h,i,r,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,r):c[_],Be(l)&&~l.indexOf("random(")&&(l=Cr(l)),Ye(l+"")||l==="auto"||(l+=vn.units[_]||Ye(Ci(t,_))||""),(l+"").charAt(1)==="="&&(l=Ci(t,_))):l=Ci(t,_),u=parseFloat(l),b=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),d=parseFloat(h),_ in di&&(_==="autoAlpha"&&(u===1&&Ci(t,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,o.visibility),os(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Ri,E){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=In(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var P=t.style.perspective;t.style.perspective=h,h=In(t,"perspective"),P?t.style.perspective=P:ls(t,"perspective")}d=parseFloat(h)}if(y||(S=t._gsap,S.renderTransform&&!e.parseTransform||Na(t,e.parseTransform),w=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new hn(this._pt,o,Me,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new hn(this._pt,S,"scaleY",S.scaleY,(b?Ps(S.scaleY,b+d):d)-S.scaleY||0,Bu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(yn,0,o[yn]),h=hM(h),S.svg?Vu(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&os(this,S,"zOrigin",S.zOrigin,p),os(this,o,_,gc(l),gc(h)));continue}else if(_==="svgOrigin"){Vu(t,h,1,w,0,this);continue}else if(_ in lm){pM(this,S,_,u,b?Ps(u,b+h):h);continue}else if(_==="smoothOrigin"){os(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){mM(this,h,t);continue}}else _ in o||(_=Lr(_)||_);if(E||(d||d===0)&&(u||u===0)&&!JS.test(h)&&_ in o)m=(l+"").substr((u+"").length),d||(d=0),p=Ye(h)||(_ in vn.units?vn.units[_]:m),m!==p&&(u=cs(t,_,l,p)),this._pt=new hn(this._pt,E?S:o,_,u,(b?Ps(u,b+d):d)-u,!E&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?QS:Bu),this._pt.u=p||0,E&&T!==h?(this._pt.b=l,this._pt.e=T,this._pt.r=jS):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=KS);else if(_ in o)cM.call(this,t,_,l,b?b+h:h);else if(_ in t)this.add(t,_,l||t[_],b?b+h:h,i,r);else if(_!=="parseTransform"){hc(_,h);continue}E||(_ in o?x.push(_,0,o[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,l||t[_])),a.push(_)}}A&&Ou(this)},render:function(t,e){if(e.tween._time||!Gu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ci,aliases:di,getSetter:function(t,e,n){var i=di[e];return i&&i.indexOf(",")<0&&(e=i),e in Ri&&e!==yn&&(t._gsap.x||Ci(t,"x"))?n&&qp===n?e==="scale"?iM:nM:(qp=n||{})&&(e==="scale"?sM:rM):t.style&&!cc(t.style[e])?tM:~e.indexOf("-")?eM:pc(t,e)},core:{_removeProperty:ls,_getMatrix:Xu}};nn.utils.checkPrefix=Lr;nn.core.getStyleSaver=sm;(function(s,t,e,n){var i=cn(s+","+t+","+e,function(r){Ri[r]=1});cn(t,function(r){vn.units[r]="deg",lm[r]=1}),di[i[13]]=s+","+t,cn(n,function(r){var a=r.split(":");di[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){vn.units[s]="px"});nn.registerPlugin(qu);var _c=nn.registerPlugin(qu)||nn,qT=_c.core.Tween;var um={fw:'<path d="M12 2 21 6v6c0 5-4 8-9 11C7 20 3 17 3 12V6Z"/><path d="M5 9h14M4 14h15M8 9v5m8-5v5m-4 0v5"/>',windows:'<path d="M2 4 11 3v8H2Zm11-1 9-1v9h-9ZM2 13h9v8l-9-1Zm11 0h9v9l-9-1Z" fill="currentColor" stroke="none"/>',switch:'<rect x="2" y="7" width="20" height="11" rx="2"/><path d="M5 13h2v3H5Zm5 0h2v3h-2Zm5 0h2v3h-2Zm5-3h.01M7 4h10m-2-2 2 2-2 2M9 20H5m2-2-2 2 2 2"/>',ubuntu:'<circle cx="12" cy="12" r="6"/><circle cx="12" cy="3" r="2.2" fill="currentColor"/><circle cx="4.2" cy="16.5" r="2.2" fill="currentColor"/><circle cx="19.8" cy="16.5" r="2.2" fill="currentColor"/><path d="m12 6 0 3m-5 6 3-1.7m4 0 3 1.7"/>',nas:'<rect x="4" y="2" width="16" height="20" rx="2"/><rect x="7" y="5" width="10" height="4" rx="1"/><rect x="7" y="11" width="10" height="4" rx="1"/><path d="M7 19h5m4 0h1"/>',mgmt:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 22h8m-4-5v5m-6-11 3-3m0 6-3-3m6 3h5"/>',wan:'<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0"/><circle cx="12" cy="20" r="1.3" fill="currentColor"/>',vpn:'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v3"/><path d="m2 5 2-2m16 0 2 2"/>',proxy:'<path d="M3 5h18v14H3Z"/><path d="m7 9 3 3-3 3m6-3h5"/>',app:'<path d="M6 2h10l4 4v16H4V2Zm10 0v5h4M8 11h8m-8 4h5m-5 4h3"/><path d="m15 17 2 2 4-5"/>',data:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0"/>',monitor:'<rect x="2" y="3" width="20" height="15" rx="2"/><path d="M7 22h10m-5-4v4M5 13h3l2-5 4 7 2-4h3"/>',host:'<rect x="4" y="2" width="16" height="14" rx="1"/><path d="M4 16 1 22h22l-3-6M7 19h10"/>',global:'<path d="M3 7 12 2l9 5v10l-9 5-9-5Zm0 0 9 5 9-5M12 12v10"/>',play:'<path d="m8 4 12 8-12 8Z" fill="currentColor" stroke="none"/>',pause:'<path d="M7 4h3v16H7Zm7 0h3v16h-3Z" fill="currentColor" stroke="none"/>',next:'<path d="m9 5 7 7-7 7"/>',prev:'<path d="m15 5-7 7 7 7"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',fullscreen:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',chevron:'<path d="m7 10 5 5 5-5"/>',layers:'<path d="m2 7 10-5 10 5-10 5Zm0 5 10 5 10-5M2 17l10 5 10-5"/>'};function Yu(s,t=""){return'<svg class="icon '+t+'" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(um[s]||um.host)+"</svg>"}function ke(s,t=""){let e=document.createElement("template");return e.innerHTML=Yu(s,t),e.content.firstElementChild}var dm={fw:"#d5682c",windows:"#1687d5",ubuntu:"#e95420",switch:"#22628c",nas:"#2687bb",app:"#6755ad",proxy:"#25744e",data:"#786294",monitor:"#bb6c28"},xc={fw:[["wan","Entr\xE9e \xB7 interface",-4,1.2,0],["fw","Route + r\xE8gle",0,1.2,0],["switch","Sortie \xB7 interface",4,1.2,0]],switch:[["switch","Trunk \xB7 tags20/30",0,2,-1],["ubuntu","Acc\xE8s20 \xB7 sans tag",-3.6,1,2],["nas","Acc\xE8s30 \xB7 sans tag",3.6,1,2]],nas:[["nas","Dataset \xB7 fichiers",-3.8,1.3,0],["vpn","Compte + ACL",0,1.3,0],["layers","Snapshot \xB7 copie",3.8,1.3,0]],windows:[["windows","Client HTTPS",-3.8,1.3,0],["fw","Defender + pare-feu",0,1.3,0],["monitor","Sysmon + audit",3.8,1.3,0]]},Ua={20:2465023,30:16757563,client:4707035,mgmt:11836415,wan:10137544,vpn:15765693,local:14144713};function fm(s,t){let e=document.getElementById("stage"),n=document.getElementById("scene-labels"),i=new Zl({antialias:!0,powerPreference:"low-power"});i.setPixelRatio(Math.min(devicePixelRatio,1.5)),i.setClearColor(1121328),i.outputColorSpace=je,i.toneMapping=la,i.toneMappingExposure=1.05,e.prepend(i.domElement);let r=new qr,a=new Yi(-24,24,12,-12,.1,160);a.position.set(15,24.7,30);let o=new jl(a,i.domElement);o.target.set(0,2.7,0),o.enablePan=!1,o.minZoom=.75,o.maxZoom=2.8,o.minPolarAngle=.25,o.maxPolarAngle=1.3,o.minAzimuthAngle=-.3,o.maxAzimuthAngle=1.3,r.add(new ia(16777215,6322825,3));let c=new dr(16777215,3.5);c.position.set(-15,25,18),r.add(c);let l=new dr(12113637,2);l.position.set(18,12,-15),r.add(l);let h=new si({color:1846085,roughness:.55,metalness:.25}),d=new si({color:9215150,roughness:.65,metalness:.35}),u=new si({color:528930,roughness:.9}),f=new si({color:14477550,roughness:.7}),g=new Map,_=new Map,m=new Map,p=[],b=[],E=[],y=[],S=[],w=[],A=new an;r.add(A);let x=K(r,11,.16,6,h,0,.05,0);x.visible=!1;let T=!1,P="physical",U=null,F=matchMedia("(prefers-reduced-motion: reduce)").matches,k=null,D=null,V=!1,Z=!1,X=C=>new si({color:C,roughness:.55,metalness:.15});function K(C,I,J,z,q,j=0,ct=0,ut=0){let mt=J>.25&&I>1&&z>1?new Ql(I,J,z,2,Math.min(.12,J*.18)):new wn(I,J,z),N=new Te(mt,q);return N.position.set(j,ct,ut),C.add(N),N}function Q(C,I,J,z,q,j,ct){let ut=new Te(new hr(I,I,J,32),z);return ut.position.set(q,j,ct),C.add(ut),ut}let st=new Te(new Hi(160,130),X(1121328));st.rotation.x=-Math.PI/2,st.position.y=-.3,r.add(st);let at=document.createElementNS("http://www.w3.org/2000/svg","svg");at.classList.add("label-leaders"),n.append(at);function wt(C,I,J,z,q,j=1.1){let ct=Yu(C).replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" ').replaceAll("currentColor",dm[C]||"#eaf3f7"),ut=new ea().load("data:image/svg+xml,"+encodeURIComponent(ct),()=>Lt());ut.colorSpace=je,y.push(ut);let mt=new Te(new Hi(j,j),new Un({map:ut,transparent:!0,depthWrite:!1}));return mt.position.set(J,z,q),I.add(mt),mt}function At(C,I,J,z=!1){let q=document.createElement("button");q.className=z?"host-label":"node-label";let j=ke(z?"host":C);return j.style.color=dm[C]||(z?"#f1f8fb":"#255e61"),q.append(j,document.createTextNode(I)),q.setAttribute("aria-label","Ouvrir "+I),q.addEventListener("click",()=>t(C)),n.append(q),{id:C,el:q,position:J,host:z}}for(let C of s.hosts){let I=new an;r.add(I),I.userData.id="host:"+C.id,K(I,14,.45,12,h,C.x,.02,0),K(I,13.65,.08,11.6,d,C.x,.3,0),K(I,13,.12,8.3,X(5073274),C.x,.4,-1),K(I,3,.04,1.2,h,C.x,.42,4.75);for(let j=0;j<3;j++)K(I,10,.035,.23,h,C.x,.43,3+j*.48);let J=new an;J.position.set(C.x,2.9,-5.8),J.rotation.x=-.12,I.add(J),K(J,14,4.7,.3,h),K(J,13.35,4.1,.04,u,0,0,.18),wt("host",J,0,.2,.22,2.3);let z=K(I,13.2,.09,8.3,new si({color:12045526,transparent:!0,opacity:.25,roughness:.8,depthWrite:!1}),C.x,.78,-.3),q=K(I,12.8,.045,.08,X(8501162),C.x,.85,3.55);_.set(C.id,{group:I,tray:z,outline:q}),I.traverse(j=>{j.isMesh&&(j.userData.id="host:"+C.id,p.push(j))}),b.push(At("host:"+C.id,"PC "+C.id.toUpperCase()+" \xB7 VMware",new L(C.x,5.7,-5.6),!0))}for(let C of s.nodes){let I=new an;I.position.fromArray(C.position),I.userData.id=C.id,r.add(I);let J=!!C.parent,z=["mgmt","wan","vpn"].includes(C.id),q=X(new zt(C.color)),j=J?2:z?1.8:C.id==="switch"?3.6:3.1,ct=J?.45:z?.3:C.id==="nas"?2.2:C.id==="switch"?.8:1.45,ut=J?1.45:z?1.3:2.2;K(I,j+.24,.12,ut+.24,d,0,-ct/2-.13,0),!J&&!z&&q.color.set(C.id==="windows"?10402757:C.id==="nas"?9479090:C.id==="switch"?11253435:7572891);let mt=C.id==="data"?Q(I,.88,.65,q,0,0,0):K(I,j,ct,ut,q);if(C.id==="data")for(let lt of[-.27,0,.27])Q(I,.9,.04,f,0,lt,0);z||K(I,j*.92,.07,ut+.025,X(new zt(C.color)),0,-ct/2+.1,0);let N=K(I,j*.94,.1,ut*.94,h,0,ct/2+.07,0);if(C.id==="nas")for(let lt=0;lt<3;lt++)K(I,1.8,.38,.12,h,0,-.65+lt*.52,ut/2+.02),K(I,1.45,.035,.06,d,-.08,-.63+lt*.52,ut/2+.1),Q(I,.055,.035,X(8901563),.85,-.65+lt*.52,ut/2+.13).rotation.x=Math.PI/2;else if(C.id==="windows"){let lt=K(I,2.05,1.45,.15,h,0,.9,-.25);K(I,1.83,1.2,.03,u,0,.9,-.15),wt("windows",I,0,.93,-.12,1),K(I,.22,.4,.22,d,0,-.05,-.25)}else if(C.id==="switch")for(let lt=0;lt<3;lt++)K(I,.64,.29,.08,h,-.9+lt*.9,-.04,ut/2+.04),K(I,.46,.045,.02,X(14332022),-.9+lt*.9,.07,ut/2+.09);else if(!J&&!z)for(let lt=0;lt<3;lt++)K(I,1.45,.06,.04,h,0,-.32+lt*.24,ut/2+.03);C.id!=="windows"&&wt(C.id,I,0,z?.1:J?.02:.15,ut/2+.09,z||J?.65:.9);let ht=new an;ht.visible=!1,r.add(ht);let tt=[];for(let[lt,it,Mt,_t,jt]of xc[C.id]||[]){let Xt=new an;Xt.position.set(Mt,_t,jt),ht.add(Xt),K(Xt,2.5,.7,1.9,X(C.id==="nas"?14269820:C.id==="switch"?9485544:12110303)),wt(lt,Xt,0,.15,1.01,1.05);let Re=document.createElement("button");Re.className="function-label",Re.textContent=it,Re.hidden=!0,Re.addEventListener("click",()=>t(C.id)),n.append(Re),tt.push({el:Re,local:new L(Mt,_t+1.05,jt),functional:!0})}if(xc[C.id]){let lt=C.id==="switch"?[[0,2,-1],[-3.6,1,2],[0,2,-1],[3.6,1,2]]:[[-4,1.2,0],[0,1.2,0],[4,1.2,0]];for(let it=1;it<lt.length;it++){let Mt=new Ss(new L(...lt[it-1]),new L(...lt[it]));ht.add(new Te(new Gi(Mt,1,.085,8,!1),new Un({color:5813247})))}}if(C.id==="ubuntu"){for(let[it,Mt]of[["VM Ubuntu \xB7 PC B",[0,7.45,0]],["Docker bridge interne",[0,1.1,0]]]){let _t=document.createElement("div");_t.className="function-label",_t.textContent=it,_t.hidden=!0,n.append(_t),tt.push({el:_t,local:new L(...Mt),functional:!0})}for(let[it,Mt,_t]of[[[-3,3,.95],[0,3,.95],5813247],[[0,3,.95],[3,3,.95],14144713]])ht.add(new Te(new Gi(new Ss(new L(...it),new L(...Mt)),1,.075,8,!1),new Un({color:_t})));let lt=new vs(new ys(new wn(11,6.8,5)),new ki({color:5813247}));lt.position.set(0,3.5,0),ht.add(lt),K(ht,11,.09,5,h,0,.15,0)}I.traverse(lt=>{lt.isMesh&&(lt.userData.id=C.id,p.push(lt))});let ft=At(C.id,C.name,new L(...C.position));ft.height=ct/2+.85,g.set(C.id,{g:I,body:mt,cap:N,capY:N.position.y,inner:ht,label:ft,child:J,io:z,color:q,layerLabels:tt,home:I.position.clone()}),J&&(I.visible=!1,ft.el.hidden=!0)}function Vt(C,I){let J=new L(...s.nodes.find(q=>q.id===C).position),z=C==="switch"?I.startsWith("trunk")?[-1.1,0,1.15]:I==="access20"?[0,0,1.15]:[1.1,0,1.15]:C==="fw"?I.startsWith("trunk")?[1.4,0,1.15]:I==="wan"?[-1.2,0,-1.15]:I==="mgmt"?[-1.4,0,0]:I==="vpn"?[0,0,-1.15]:[-1.2,0,1.15]:[0,0,1.15];return J.add(new L(...z))}function Ft(C){let I=Vt(C.from,C.id),J=Vt(C.to,C.id);if(C.id.startsWith("trunk")){let q=C.id==="trunk20"?-.42:.42;return new Vi([I,new L(-2,1.1,5.6+q),new L(0,1.1,7.3+q),new L(2,1.1,5.6+q),J],!1,"catmullrom",.2)}let z=I.clone().lerp(J,.5);return z.y=Math.max(I.y,J.y)+.85,new Vi([I,z,J])}for(let C of s.links){let I=Ft(C),J=new Un({color:Ua[C.zone]||7901859,transparent:!0,opacity:.7}),z=new Te(new Gi(I,48,C.id.startsWith("trunk")?.16:.11,8,!1),J);if(z.userData.id="link:"+C.id,r.add(z),p.push(z),m.set(C.id,{mesh:z,material:J,curve:I,data:C}),C.kind==="network")for(let[q,j]of[[C.from,C.fromPort],[C.to,C.toPort]]){let ct=Vt(q,C.id),ut=K(r,.36,.25,.26,h,ct.x,ct.y,ct.z);ut.userData.id="link:"+C.id,p.push(ut),w.push(ut);let mt=document.createElement("button");mt.className="port-label",mt.textContent=j,mt.hidden=!0,mt.addEventListener("click",()=>t("link:"+C.id)),n.append(mt),S.push({el:mt,position:ct.clone().add(new L(0,.7,.1)),link:C.id})}}let kt=document.createElement("div");kt.className="decision-marker",kt.hidden=!0,n.append(kt);let et=null,rt=null,yt=null,Ut=new Vi([new L(-2,.45,5.6),new L(0,.42,7.25),new L(2,.45,5.6)]);A.add(new Te(new Gi(Ut,32,.28,12,!1),X(14652480)));for(let C of[-2,2]){K(A,.85,.5,1.05,d,C,.54,5.6),K(A,.6,.28,.08,h,C,.55,6.15);for(let I=0;I<4;I++)K(A,.06,.18,.03,X(16763238),C-.18+I*.12,.55,6.2)}let St={windows:"CLIENTS \xB7 non tagu\xE9",ubuntu:"SERVEURS \xB7 VLAN20",nas:"STOCKAGE \xB7 VLAN30"};for(let C of["windows","ubuntu","nas"]){let I=s.nodes.find(ct=>ct.id===C),J=C==="windows"?Ua.client:C==="ubuntu"?Ua[20]:Ua[30],z=new an;z.position.set(I.position[0],.85,I.position[2]),r.add(z),K(z,4.8,.08,4,new Un({color:J,transparent:!0,opacity:.3,depthWrite:!1}));let q=new vs(new ys(new wn(4.8,3.1,4)),new ki({color:J,transparent:!0,opacity:.65}));q.position.y=1.55,z.add(q),z.visible=!1,E.push(z);let j=document.createElement("div");j.className="zone-label",j.textContent=St[C],j.style.setProperty("--zone",new zt(J).getStyle()),n.append(j),b.push({el:j,position:new L(I.position[0],4.5,I.position[2]),security:!0})}let Bt=new vs(new ys(new wn(8,5,6.5)),new ki({color:5813247,transparent:!0,opacity:.6}));Bt.position.set(11,3.2,-3.5),Bt.visible=!1,r.add(Bt);let me=document.createElement("div");me.className="zone-label",me.textContent="Services dans la VM Ubuntu \xB7 PC B",n.append(me),b.push({el:me,position:new L(11,6,-3.5),services:!0});let Dt=new Te(new Kr(.3,.8,8),new Un({color:14395473}));r.add(Dt),Dt.visible=!1;function $t(){let C=e.getBoundingClientRect(),I=[];at.replaceChildren(),at.setAttribute("viewBox","0 0 "+C.width+" "+C.height);for(let[z,q]of g){let j=s.nodes.find(mt=>mt.id===z),ct=q.g.visible&&(!U||U===z||U==="ubuntu"&&q.child||U==="host:"+j.host)&&(!q.io||U===z||yt===z||rt===z||z==="vpn"&&P==="security");if(q.label.el.hidden=!ct,!ct)continue;let ut=q.g.position.clone();if(ut.y+=q.label.height+(U===z?1.4:0),ut.project(a),Math.abs(ut.z)>1){q.label.el.hidden=!0;continue}I.push({el:q.label.el,ax:(ut.x*.5+.5)*C.width,ay:(-.5*ut.y+.5)*C.height,w:q.label.el.offsetWidth,h:q.label.el.offsetHeight})}for(let z of b){if(z.el.hidden=!!U||z.security&&P!=="security"||z.services&&!V,z.el.hidden)continue;let q=z.position.clone().project(a);I.push({el:z.el,ax:(q.x*.5+.5)*C.width,ay:(-.5*q.y+.5)*C.height,w:z.el.offsetWidth,h:z.el.offsetHeight})}for(let[z,q]of g)for(let j of q.layerLabels){if(j.el.hidden=U!==z,j.el.hidden)continue;let ct=j.local.clone().project(a);I.push({el:j.el,ax:(ct.x*.5+.5)*C.width,ay:(-.5*ct.y+.5)*C.height,w:j.el.offsetWidth,h:j.el.offsetHeight})}for(let z of S){if(z.el.hidden=!!U||z.link!==rt,z.el.hidden)continue;let q=z.position.clone().project(a);I.push({el:z.el,ax:(q.x*.5+.5)*C.width,ay:(-.5*q.y+.5)*C.height,w:z.el.offsetWidth,h:z.el.offsetHeight})}if(kt.hidden=!et||!!U,!kt.hidden){let z=g.get(et).home.clone().add(new L(0,3.2,0)).project(a);I.unshift({el:kt,ax:(z.x*.5+.5)*C.width,ay:(-.5*z.y+.5)*C.height,w:kt.offsetWidth,h:kt.offsetHeight})}I.sort((z,q)=>z.ay-q.ay);let J=[];for(let z of I){let q=z.w/2+12,j=C.width-z.w/2-12,ct=z.h/2+10,ut=C.height-z.h/2-10,mt=[[0,0],[0,-44],[0,44],[-z.w*.65-14,0],[z.w*.65+14,0],[-z.w*.65-14,-44],[z.w*.65+14,44],[0,-88],[0,88],[-z.w-20,0],[z.w+20,0]],N=null,ht=1/0;for(let[tt,ft]of mt){let lt=Math.max(q,Math.min(j,z.ax+tt)),it=Math.max(ct,Math.min(ut,z.ay+ft)),Mt=0;for(let jt of J){let Xt=(jt.w+z.w)/2+8-Math.abs(jt.x-lt),Re=(jt.h+z.h)/2+8-Math.abs(jt.y-it);Xt>0&&Re>0&&(Mt+=Xt*Re)}let _t=Mt*100+Math.hypot(lt-z.ax,it-z.ay);_t<ht&&(ht=_t,N={x:lt,y:it})}if(z.x=N.x,z.y=N.y,z.el.style.left=z.x+"px",z.el.style.top=z.y+"px",Math.hypot(z.ax-z.x,z.ay-z.y)>12){let tt=document.createElementNS("http://www.w3.org/2000/svg","path");tt.setAttribute("d","M"+z.ax+" "+z.ay+" L"+z.x+" "+z.y),tt.setAttribute("stroke","#7993a4"),tt.setAttribute("fill","none"),at.append(tt)}J.push(z)}}function re(){T=!1,i.render(r,a),$t()}function Lt(){T||(T=!0,requestAnimationFrame(re))}o.addEventListener("change",Lt),o.addEventListener("start",()=>{k?.progress(1),k?.kill(),k=null});let Kt=null;function xe(){let C=e.clientWidth,I=e.clientHeight;if(!C||!I)return;i.setSize(C,I);let J=Math.max(10.6,18/(C/I));if(Kt||(r.updateMatrixWorld(!0),Kt=new ii,_.forEach(z=>Kt.expandByObject(z.group))),!U){a.updateMatrixWorld(!0);for(let z of[Kt.min.x,Kt.max.x])for(let q of[Kt.min.y,Kt.max.y])for(let j of[Kt.min.z,Kt.max.z]){let ct=new L(z,q,j).applyMatrix4(a.matrixWorldInverse);J=Math.max(J,Math.abs(ct.y)*1.06,Math.abs(ct.x)/(C/I)*1.06)}}a.left=-J*C/I,a.right=J*C/I,a.top=J,a.bottom=-J,a.updateProjectionMatrix(),Lt()}new ResizeObserver(xe).observe(e);let ze=[0,0];i.domElement.addEventListener("pointerdown",C=>{ze=[C.clientX,C.clientY]}),i.domElement.addEventListener("pointerup",C=>{if(Math.hypot(C.clientX-ze[0],C.clientY-ze[1])>6)return;let I=i.domElement.getBoundingClientRect(),J=new ra;J.setFromCamera(new bt((C.clientX-I.left)/I.width*2-1,-(C.clientY-I.top)/I.height*2+1),a);let z=J.intersectObjects(p.filter(q=>{let j=q;for(;j;){if(!j.visible)return!1;j=j.parent}return!0}))[0];z&&t(z.object.userData.id)}),i.domElement.addEventListener("dblclick",C=>{C.target===i.domElement&&document.getElementById("overview").click()});function ae(C){V=C,Bt.visible=C&&!U;for(let I of s.nodes.filter(J=>J.parent))g.get(I.id).g.visible=C,g.get(I.id).label.el.hidden=!C;for(let I of m.values())["https","backend","sqlite","prom"].includes(I.data.id)&&(I.mesh.visible=C);Lt()}function ve(C,I){k?.kill(),Z=!1;let J=I&&C.startsWith("host:"),z=I&&!J;x.visible=z,A.visible=!I,Bt.visible=!1,k=_c.timeline({onComplete:xe,defaults:{duration:F?0:.8,ease:"power3.out",onUpdate:Lt}});for(let[mt,N]of g){let ht=I&&mt===C,tt=C==="ubuntu"&&N.child,ft=J&&s.nodes.find(it=>it.id===mt).host===C.slice(5);N.g.visible=I?ht||tt||ft&&!N.child:!N.child,N.inner.visible=ht&&!!xc[C]||ht&&C==="ubuntu";let lt=N.home.clone();if(z&&ht&&lt.set(0,.9,3),tt){let it=["proxy","app","data","monitor"].indexOf(mt);lt.fromArray({proxy:[-3,3,0],app:[0,3,0],data:[3,3,0],monitor:[0,5.5,0]}[mt])}k.to(N.g.position,{x:lt.x,y:lt.y,z:lt.z},0),k.to(N.cap.position,{y:N.capY},0),k.to(N.g.scale,{x:ht?1.15:1,y:ht?1.15:1,z:ht?1.15:1},0),N.color.emissive.set(ht?1194864:0),N.color.emissiveIntensity=ht?.25:0,N.label.el.classList.toggle("selected",ht)}for(let[mt,N]of _)N.group.visible=!z&&(!J||C==="host:"+mt);w.forEach(mt=>mt.visible=!I),E.forEach(mt=>mt.visible=!I&&P==="security"),m.forEach(mt=>mt.mesh.visible=!I&&!["https","backend","sqlite","prom"].includes(mt.data.id));let q=new L(0,2.7,0),j=1;z&&(q.set(0,C==="ubuntu"?3.2:2,0),j=C==="ubuntu"?1.65:xc[C]?1.8:2.3),J&&(q.set(C==="host:a"?-8:8,2,0),j=1.15);let ct={x:a.position.x,y:a.position.y,z:a.position.z,tx:o.target.x,ty:o.target.y,tz:o.target.z,zoom:a.zoom},ut=q.clone().add(new L(15,22,30));k.to(ct,{x:ut.x,y:ut.y,z:ut.z,tx:q.x,ty:q.y,tz:q.z,zoom:j,onUpdate:()=>{a.position.set(ct.x,ct.y,ct.z),o.target.set(ct.tx,ct.ty,ct.tz),a.zoom=ct.zoom,a.updateProjectionMatrix(),o.update(),Lt()}},0)}function B(C){U=C,ve(C,!0),Lt()}function Ve(){U=null,V=!1,rt=null,yt=null,et=null,ve("",!1),R(P)}function ee(C,I=!1){for(let[J,z]of g)z.label.el.classList.toggle("selected",J===C),z.color.emissive.set(J===C?I?9383713:1923663:0),z.color.emissiveIntensity=J===C?.4:0;Lt()}function R(C){P=C,E.forEach(I=>I.visible=C==="security"&&!U),m.forEach(I=>I.material.opacity=C==="physical"?I.data.id.startsWith("trunk")?1:.5:.95),Lt()}function v(){k?.progress(1),k?.kill(),Z=!Z,a.position.copy(o.target).add(new L(...Z?[0,42,.05]:[20,26,32])),o.update(),Lt()}function H(C,I,J,z){D?.kill(),Dt.visible=!1;let q=C[I];if(yt=q.node||q.to||null,ae(!!g.get(q.node)?.child||["https","backend","sqlite","prom"].includes(q.link)),rt=q.link||null,et=q.decision&&q.node||null,kt.textContent=(q.denied&&q.node==="fw"?"REFUS \xB7 ":"")+(q.decision||""),kt.classList.toggle("denied",!!q.denied),m.forEach(j=>{j.material.opacity=j.data.id===rt?1:.15}),ee(q.node||q.to,q.denied),document.getElementById("transport-strip").dataset.active=q.link||"",q.link){let j=m.get(q.link),ct=j.data.from!==q.from,ut={t:ct?1:0};Dt.material.color.set(Ua[j.data.zone]||14395473),Dt.position.copy(j.curve.getPoint(ut.t)),Dt.quaternion.setFromUnitVectors(new L(0,1,0),j.curve.getTangent(ut.t).multiplyScalar(ct?-1:1)),Dt.visible=!0,J&&!F?D=_c.to(ut,{t:ct?0:1,duration:1.65,ease:"none",onUpdate:()=>{Dt.position.copy(j.curve.getPoint(ut.t)),Dt.quaternion.setFromUnitVectors(new L(0,1,0),j.curve.getTangent(ut.t).multiplyScalar(ct?-1:1)),Lt()},onComplete:z}):(Dt.position.copy(j.curve.getPoint(ct?0:1)),Dt.quaternion.setFromUnitVectors(new L(0,1,0),j.curve.getTangent(ct?0:1).multiplyScalar(ct?-1:1)))}Lt()}function Y(){D?.pause()}function nt(){D?.kill(),D=null,Dt.visible=!1,rt=null,yt=null,et=null,Lt()}function dt(C){nt();let I=m.get(C);I&&(ae(I.data.kind!=="network"),rt=C,m.forEach(J=>J.material.opacity=J===I?1:.15),Lt())}function pt(){k?.progress(1)}return i.domElement.addEventListener("webglcontextlost",C=>{C.preventDefault(),Y(),document.dispatchEvent(new CustomEvent("lab-webgl-lost"))}),ae(!1),o.update(),xe(),{open:B,reset:Ve,inspectLink:dt,finishView:pt,highlight:ee,setExpanded:ae,setMode:R,showStep:H,pause:Y,stop:nt,topView:v,setReduced:C=>{F=C,k?.progress(1),D?.progress(1),Lt()},setVisible:C=>{i.domElement.hidden=!C,n.hidden=!C,C&&xe()},info:()=>({drawCalls:i.info.render.calls,triangles:i.info.render.triangles,pixelRatio:i.getPixelRatio()})}}var Zu=[{id:"app",name:"Windows vers InvoiceShelf",protocol:"HTTPS \xB7 TCP8443",source:"10.77.10.10",destination:"10.77.20.10:8443",steps:[{title:"Une facture \xE0 consulter",node:"windows",text:"Le poste Windows ouvre une ressource priv\xE9e de facturation. La requ\xEAte exige le serveur et une authentification applicative."},{title:"Le client rejoint sa passerelle",link:"clients",from:"windows",to:"fw",tag:"Non tagu\xE9 \xB7 CLIENTS",text:"Sur VMnet10, Windows remet le paquet \xE0 OPNsense10.77.10.1. CLIENTS est un r\xE9seau s\xE9par\xE9 non tagu\xE9."},{title:"La r\xE8gle autorise HTTPS8443",node:"fw",decision:"AUTORIS\xC9 \xB7 CLIENTS \u2192 HTTPS8443",text:"OPNsense route vers10.77.20.0/24 et autorise TCP8443. Il conserve l\u2019adresse source ; aucun NAT entre ces zones."},{title:"VLAN20 sur le c\xE2ble physique",link:"trunk20",from:"fw",to:"switch",tag:"802.1Q \xB7 VLAN20",text:"La trame tagu\xE9e traverse les deux ponts VMware, les cartes Ethernet et le c\xE2ble. Ce transport r\xE9el reste \xE0 v\xE9rifier."},{title:"SW-B retire le tag20",link:"access20",from:"switch",to:"ubuntu",tag:"Acc\xE8s VLAN20 \xB7 non tagu\xE9",text:"Le port d\u2019acc\xE8s VMnet14 remet une trame non tagu\xE9e \xE0 Ubuntu. TrueNAS, sur l\u2019autre port, ne re\xE7oit pas ce trafic."},{title:"HTTPS rejoint le proxy",link:"https",from:"ubuntu",to:"proxy",text:"Nginx re\xE7oit HTTPS8443. Le certificat du laboratoire doit \xEAtre approuv\xE9 par le client."},{title:"Un service dans Ubuntu",link:"backend",from:"proxy",to:"app",text:"Le proxy transmet \xE0 InvoiceShelf8080 sur le bridge Docker interne. Ce conteneur n\u2019est pas une VM."},{title:"Le r\xF4le prot\xE8ge la facture",node:"app",decision:"Permission applicative \xE0 v\xE9rifier",text:"InvoiceShelf v\xE9rifie la session et le r\xF4le. Un lecteur peut consulter mais sa modification doit \xEAtre refus\xE9e. La r\xE9ponse r\xE9seau suit les \xE9tats existants en sens inverse."}]},{id:"deny",name:"VPN vers NAS : refus",protocol:"SMB \xB7 TCP445",source:"10.78.0.x",destination:"10.77.30.10:445",steps:[{title:"Un tunnel ne donne pas tous les droits",node:"vpn",text:"Le client de test sur l\u2019h\xF4te A est connect\xE9 \xE0 OpenVPN via VMnet8. Le tunnel est chiffr\xE9 mais son p\xE9rim\xE8tre reste restreint."},{title:"La tentative arrive au pare-feu",link:"vpn",from:"vpn",to:"fw",tag:"Dans le tunnel OpenVPN",text:"La route vers le NAS est pr\xE9sente pour que le refus soit r\xE9ellement \xE9valu\xE9 par OPNsense, sans contournement MGMT."},{title:"Refus sur l\u2019interface VPN",node:"fw",decision:"VPN \u2192 NAS \xB7 TCP445",denied:!0,text:"Le VPN n\u2019est autoris\xE9 que vers InvoiceShelf8443. Le pare-feu refuse SMB445. Le paquet s\u2019arr\xEAte ici : aucun trafic autoris\xE9 ne part sur le trunk30."},{title:"Retrouver la preuve",node:"fw",decision:"Test r\xE9el non ex\xE9cut\xE9",denied:!0,text:"La d\xE9monstration r\xE9elle doit montrer le refus horodat\xE9 avec la source VPN, la destination NAS et le port445. Un port ferm\xE9 ou une animation ne suffit pas."}]},{id:"backup",name:"Sauvegarde Ubuntu vers TrueNAS",protocol:"Archive coh\xE9rente \xB7 SMB TCP445",source:"10.77.20.10",destination:"10.77.30.10",steps:[{title:"Pr\xE9parer une copie coh\xE9rente",node:"app",text:"Arr\xEAter InvoiceShelf proprement et archiver donn\xE9es persistantes et configuration priv\xE9e. La base SQLite active ne doit pas \xEAtre plac\xE9e sur SMB."},{title:"Ubuntu rejoint sa passerelle",link:"access20",from:"ubuntu",to:"switch",tag:"Acc\xE8s20 \xB7 ajout du tag20 au trunk",text:"Bien qu\u2019Ubuntu et le NAS soient sur B, ils appartiennent \xE0 deux VLANs. Aucun raccourci entre eux n\u2019est autoris\xE9."},{title:"Le paquet quitte B sur VLAN20",link:"trunk20",from:"switch",to:"fw",tag:"802.1Q \xB7 VLAN20",text:"La trame emprunte le c\xE2ble vers OPNsense sur A. SW-B commute ; il ne route pas."},{title:"Routage20 vers30 sur A",node:"fw",decision:"AUTORIS\xC9 \xB7 Ubuntu \u2192 NAS TCP445",text:"OPNsense autorise Ubuntu vers le NAS sur TCP445 et route vers VLAN30. Le compte de sauvegarde reste contr\xF4l\xE9 s\xE9par\xE9ment par les ACL NAS."},{title:"Retour sur le m\xEAme c\xE2ble, VLAN30",link:"trunk30",from:"fw",to:"switch",tag:"802.1Q \xB7 VLAN30",text:"Le paquet revient sur B avec un tag30. Une seule liaison physique transporte ici deux canaux logiques distincts."},{title:"SW-B remet une trame non tagu\xE9e",link:"access30",from:"switch",to:"nas",tag:"Acc\xE8s30 \xB7 retrait du tag30",text:"Le port VMnet11 livre la trame \xE0 TrueNAS. Le port Ubuntu reste s\xE9par\xE9."},{title:"Le NAS v\xE9rifie le compte",node:"nas",decision:"ACL du dataset app-backups",text:"Le compte app-backup \xE9crit seulement dans son dataset d\xE9di\xE9. Une r\xE8gle r\xE9seau autoris\xE9e ne remplace pas les permissions du stockage."},{title:"Reprise et restauration d\u2019une copie",node:"app",text:"Relancer l\u2019application active puis restaurer l\u2019archive dans un emplacement isol\xE9. V\xE9rifier la facture/PDF sans \xE9craser les donn\xE9es actives. Tous ces contr\xF4les restent \xE0 ex\xE9cuter."}]},{id:"monitor",name:"M\xE9triques Windows et panne applicative",protocol:"Exporter TCP9182 \xB7 sonde HTTPS",source:"Prometheus sur Ubuntu",destination:"Windows / InvoiceShelf",steps:[{title:"Prometheus lance la collecte",node:"monitor",text:"Prometheus collecte les cibles ; Grafana affiche les s\xE9ries collect\xE9es. Grafana ne sonde pas directement les exporters."},{title:"Ubuntu vers le switch",link:"access20",from:"ubuntu",to:"switch",tag:"Acc\xE8s20 non tagu\xE9 \u2192 trunk tagu\xE920",text:"Ubuntu envoie une trame non tagu\xE9e sur VMnet14 ; SW-B ajoute le tag20 sur son trunk."},{title:"Collecte vers OPNsense",link:"trunk20",from:"switch",to:"fw",tag:"802.1Q \xB7 VLAN20",text:"Le pare-feu doit autoriser Ubuntu10.77.20.10 vers Windows TCP9182 seulement."},{title:"La requ\xEAte atteint Windows exporter",link:"clients",from:"fw",to:"windows",tag:"CLIENTS \xB7 non tagu\xE9",text:"Le pare-feu Windows autorise aussi cette source. Une cible install\xE9e sans m\xE9triques re\xE7ues ne constitue pas une collecte r\xE9ussie."},{title:"Windows renvoie les m\xE9triques",link:"clients",from:"windows",to:"fw",tag:"R\xE9ponse \xB7 CLIENTS non tagu\xE9",text:"Windows exporter r\xE9pond \xE0 la requ\xEAte. Le pare-feu laisse revenir la r\xE9ponse gr\xE2ce \xE0 l\u2019\xE9tat de la connexion."},{title:"La r\xE9ponse traverse le trunk20",link:"trunk20",from:"fw",to:"switch",tag:"R\xE9ponse \xB7 802.1Q VLAN20",text:"Les m\xE9triques repartent de A vers B dans le VLAN20."},{title:"Prometheus re\xE7oit les m\xE9triques",link:"access20",from:"switch",to:"ubuntu",tag:"R\xE9ponse \xB7 acc\xE8s20 non tagu\xE9",text:"SW-B retire le tag20 et remet la r\xE9ponse \xE0 Ubuntu ; Prometheus conserve les m\xE9triques et Grafana les affiche."},{title:"Simuler l\u2019arr\xEAt applicatif",node:"app",decision:"Simulation : cible HTTPS indisponible",denied:!0,text:"Ce sc\xE9nario repr\xE9sente InvoiceShelf arr\xEAt\xE9, pas un exporter arr\xEAt\xE9. La sonde applicative doit d\xE9tecter un \xE9chec apr\xE8s son intervalle configur\xE9."},{title:"Observer la reprise",node:"monitor",decision:"Mesure r\xE9elle \xE0 effectuer",text:"Apr\xE8s relance, la sonde redevient saine. Mesurer panne et reprise avec les vrais collecteurs ; le d\xE9lai illustr\xE9 ici n\u2019est pas une mesure."}]},{id:"vpnapp",name:"VPN vers InvoiceShelf : autoris\xE9",protocol:"OpenVPN UDP1194 puis HTTPS8443",source:"10.78.0.x",destination:"10.77.20.10:8443",steps:[{title:"Le client est sur A, c\xF4t\xE9 WAN simul\xE9",node:"vpn",text:"Le test utilise VMnet8 sur l\u2019h\xF4te A, sans troisi\xE8me PC. Il ne prouve pas une connexion depuis Internet public."},{title:"Le tunnel arrive \xE0 OPNsense",link:"vpn",from:"vpn",to:"fw",text:"OpenVPN \xE9tablit un tunnel chiffr\xE9. La route de l\u2019application passe par ce tunnel, sans route de gestion concurrente."},{title:"Seule l\u2019application est autoris\xE9e",node:"fw",decision:"AUTORIS\xC9 \xB7 VPN \u2192 HTTPS8443",text:"La r\xE8gle VPN autorise InvoiceShelf ; SSH, Grafana et SMB restent refus\xE9s."},{title:"Travers\xE9e tagu\xE9e VLAN20",link:"trunk20",from:"fw",to:"switch",tag:"802.1Q \xB7 VLAN20",text:"Le tunnel se termine sur OPNsense. Le trafic rout\xE9 continue sur VLAN20 ; HTTPS prot\xE8ge encore le contenu applicatif."},{title:"Port d\u2019acc\xE8s Ubuntu",link:"access20",from:"switch",to:"ubuntu",tag:"Non tagu\xE9 \xE0 Ubuntu",text:"SW-B retire le tag sur son port d\u2019acc\xE8s20."},{title:"Authentification encore n\xE9cessaire",node:"app",decision:"R\xF4le applicatif ind\xE9pendant",text:"Le VPN donne un chemin r\xE9seau autoris\xE9, pas une session InvoiceShelf. Login et permissions restent n\xE9cessaires ; la r\xE9ponse emprunte le chemin stateful inverse."}]}];var vc=s=>String(s).replace(/[<>&"']/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[t]),yc={wan:[100,130],vpn:[360,130],windows:[130,420],mgmt:[360,420],fw:[350,260],switch:[680,260],ubuntu:[925,130],nas:[925,420],proxy:[840,225],app:[960,225],data:[1080,225],monitor:[925,320]};function Ju(s,t=[],e=0,n="fw"){let i=t[e],r=i?.link,a=i?.node||i?.to,o=d=>({20:"#1867bc",30:"#b87512",client:"#697f90",mgmt:"#697f90",vpn:"#856f9d",wan:"#697f90",local:"#697579"})[d]||"#697f90",c=d=>s.nodes.find(u=>u.id===d)?.parent?[90,46]:[160,72];function l(d,u){let f=yc[d],[g,_]=c(d),m=u[0]-f[0],p=u[1]-f[1],b=Math.min(m?g/2/Math.abs(m):1/0,p?_/2/Math.abs(p):1/0);return[f[0]+m*b,f[1]+p*b]}let h='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 650" role="img" aria-label="Topologie du laboratoire \xE0 deux PC"><defs><marker id="packet-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="context-stroke"/></marker></defs><style>text{font-family:Segoe UI,Arial,sans-serif}.small{font-size:12px;fill:#4c6273}.title{font-size:18px;font-weight:600;fill:#183247}.n{fill:#fff;stroke:#a9beca;stroke-width:1.5}.selected{stroke:#1867bc;stroke-width:3}.current{fill:#e6f1fc;stroke:#1867bc;stroke-width:3}.denied{fill:#fbeae4;stroke:#922d24;stroke-width:3}</style><rect width="1200" height="650" fill="#edf2f4"/><text x="38" y="35" class="title">Laboratoire priv\xE9 \xB7 topologie propos\xE9e</text><text x="38" y="58" class="small">Simulation explicative \xB7 deux PC \xB7 cinq VM</text><rect x="35" y="80" width="490" height="460" rx="14" fill="#e0e9ee"/><rect x="600" y="80" width="565" height="460" rx="14" fill="#e3eee9"/><text x="55" y="107" class="title">PC A \xB7 jessem8</text><text x="620" y="107" class="title">PC B \xB7 sanadzhioua</text>';for(let d of s.links){let u=yc[d.from],f=yc[d.to];if(!u||!f)continue;let g=d.id===r,_;if(d.id.startsWith("trunk")){let p=d.id==="trunk20"?245:275;_=[[u[0]+80,u[1]],[u[0]+100,p],[f[0]-100,p],[f[0]-80,f[1]]]}else _=[l(d.from,f),l(d.to,u)];g&&i.from===d.to&&_.reverse();let m=_.map((p,b)=>(b?"L":"M")+p.join(" ")).join(" ");h+=`<path data-link="${d.id}" d="${m}" fill="none" stroke="${o(d.zone)}" stroke-width="${g?5:2}" opacity="${i&&!g?.25:1}" ${g?'marker-end="url(#packet-arrow)"':""} ${d.id.startsWith("trunk")?'stroke-dasharray="8 5"':""}/>`}h+='<text x="480" y="226" class="small">Ethernet : tags20/30</text><text x="650" y="370" class="small">Deux acc\xE8s s\xE9par\xE9s \xB7 SW-B ne route pas</text>';for(let d of s.nodes){let u=yc[d.id];if(!u)continue;let f=!!d.parent,[g,_]=c(d.id),m=d.id===a?i.denied?"denied":"current":d.id===n?"selected":"";h+=`<g data-id="${d.id}" tabindex="0" role="button" aria-label="${vc(d.name)}"><rect x="${u[0]-g/2}" y="${u[1]-_/2}" width="${g}" height="${_}" rx="7" class="n ${m}"/><text x="${u[0]}" y="${u[1]-6}" text-anchor="middle" font-size="${f?10:14}" font-weight="600" fill="#193749">${vc(d.name)}</text><text x="${u[0]}" y="${u[1]+14}" text-anchor="middle" font-size="${f?9:10}" fill="#4d6677">${vc(f?"Dans Ubuntu":d.id==="fw"?"Route & filtre":d.id==="switch"?"L2 \xB7 sans IP":d.id==="wan"?"NAT VMware \xB7 Wi-Fi":d.id==="vpn"?"Client sur A \xB710.78.0.x":d.id==="mgmt"?"10.77.99.254 \xB7 non tagu\xE9":d.id==="windows"?"10.77.10.10 \xB7 non tagu\xE9":d.ip)}</text></g>`}if(h+='<text x="40" y="570" class="small">VLAN20 : bleu \xB7 VLAN30 : ambre \xB7 CLIENTS et MGMT non tagu\xE9s</text><text x="40" y="593" class="small">Ubuntu \u2192 NAS : B / tag20 \u2192 OPNsense sur A \u2192 tag30 / B \u2192 ACL TrueNAS.</text>',i){let d=s.nodes.find(f=>f.id===i.from)?.name,u=s.nodes.find(f=>f.id===i.to)?.name;h+=`<text x="40" y="623" font-size="13" fill="${i.denied?"#922d24":"#183247"}">${vc(e+1+"/"+t.length+" \xB7 "+(d?d+" \u2192 "+u+" \xB7 ":"")+i.title+" \xB7 "+(i.tag||i.decision||""))}</text>`}return h+"</svg>"}var ot=s=>document.getElementById(s),be,Ce=null,pi=null,Tc="physical",Qt=null,Ae=0,Fa=!1,Mc=null,Ba=!1,bc=ot("reduce-motion");bc.checked=matchMedia("(prefers-reduced-motion: reduce)").matches;var Zt=(s,t,e)=>{let n=document.createElement(s);return t!==void 0&&(n.textContent=t),e&&(n.className=e),n},us=(s,t,e)=>{let n=Zt("button",s,e);return n.type="button",n.addEventListener("click",t),n};function Ze(){Fa=!1,clearTimeout(Mc),Mc=null,Ce?.pause(),ot("play").replaceChildren(ke("play"),document.createTextNode("Lire le parcours")),ot("play").setAttribute("aria-pressed","false")}function wc(){let s=Tc==="security"&&ot("component-panel").hidden;ot("security-panel").hidden=!s,document.querySelector(".lab-view").classList.toggle("has-side-panel",s||!ot("component-panel").hidden),ot("transport-strip").hidden=!!pi&&!pi.startsWith("link:"),ot("back-network").hidden=!pi}function Oa(s){Ze(),Ce?.stop(),ot("component-panel").hidden||hs(),Tc=s,Ce?.setMode(s),document.querySelectorAll("[data-mode]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.mode===s))),ot("scene-hint").textContent=s==="physical"?"Cliquez sur un \xE9quipement pour l\u2019ouvrir.":s==="logical"?"Suivez les connexions, sans changer la place des machines.":"Zones s\xE9par\xE9es, acc\xE8s filtr\xE9s : choisissez un exemple \xE0 droite.",wc(),Qt?fi():ka()}function pm(s,t){let e=Zt("section"),n=Zt("ul");return e.append(Zt("h3",s)),t.forEach(i=>n.append(Zt("li",i))),e.append(n),e}var gM={fw:[["wan","Interfaces","WAN, MGMT, CLIENTS et trunk20/30"],["switch","Routage","Une passerelle pour chaque zone"],["fw","Filtrage","R\xE8gles entrantes, \xE9tats et journaux"]],windows:[["windows","Poste client","Ouvre InvoiceShelf et le partage autoris\xE9"],["fw","Protection","Defender et pare-feu local"],["monitor","Audit","Sysmon et \xE9v\xE9nements Security"]],switch:[["switch","Port trunk","VLAN20 et VLAN30 tagu\xE9s"],["ubuntu","Acc\xE8s20","Ubuntu re\xE7oit des trames non tagu\xE9es"],["nas","Acc\xE8s30","TrueNAS re\xE7oit des trames non tagu\xE9es"]],ubuntu:[["ubuntu","Syst\xE8me invit\xE9","SSH, iptables, audit et journaux"],["proxy","Docker & HTTPS","Nginx8443 \u2192 InvoiceShelf8080 interne"],["data","Donn\xE9es & supervision","SQLite local, sauvegarde NAS, Prometheus"]],nas:[["nas","Partage SMB","Lecture, \xE9criture ou refus selon le compte"],["vpn","Donn\xE9es prot\xE9g\xE9es","Dataset chiffr\xE9 et cl\xE9s priv\xE9es"],["layers","Restauration","Snapshots et r\xE9cup\xE9ration de fichier"]],app:[["app","Facturation","Clients fictifs, factures, d\xE9penses et PDF"],["fw","R\xF4les","Comptable ou consultation, \xE0 v\xE9rifier"],["data","Persistance","SQLite et fichiers dans Ubuntu"]],proxy:[["vpn","HTTPS8443","Chiffrement jusqu\u2019au proxy"],["app","Backend8080","Sur le bridge Docker interne"]],data:[["data","Volume local","Base active et fichiers dans Ubuntu"],["nas","Archive NAS","Application arr\xEAt\xE9e avant sauvegarde"]],monitor:[["monitor","Prometheus","Collecte les cibles et la disponibilit\xE9"],["windows","Windows exporter","M\xE9triques TCP9182"],["monitor","Grafana","Affiche les s\xE9ries collect\xE9es"]],vpn:[["vpn","Tunnel","OpenVPN sur le WAN simul\xE9"],["app","Droit limit\xE9","Application autoris\xE9e ; NAS/admin refus\xE9s"]],wan:[["wan","NAT VMware","VMnet8 sur l\u2019h\xF4te A"],["fw","Passerelle","WAN de la VM OPNsense"]],mgmt:[["mgmt","Gestion","H\xF4te A sur10.77.99.254"],["fw","Acc\xE8s s\xE9par\xE9","MGMT non tagu\xE9 ; retirer ce chemin pour le test VPN"]]};function _M(s){let t=s.startsWith("host:")?s.slice(5):null,e=be.nodes.find(l=>l.id===s),n=be.hosts.find(l=>l.id===t);ot("component-panel").hidden=!1,ot("component-icon").replaceChildren(ke(n?"host":s)),ot("node-location").textContent=n?"H\xF4te physique \xB7 "+n.owner:e.kind+" \xB7 PC "+e.host.toUpperCase(),ot("node-title").textContent=n?n.name:e.name,ot("node-purpose").textContent=n?n.id==="a"?"H\xE9berge la passerelle et le poste client. Les acc\xE8s de gestion et le client VPN sont des applications/interfaces de cet h\xF4te.":"H\xE9berge la commutation VLAN, les services Ubuntu et le stockage NAS. Leur communication passe par le pare-feu sur A.":e.purpose;let i=ot("component-layers");if(i.replaceChildren(),n)be.nodes.filter(l=>l.host===n.id&&!l.parent).forEach(l=>{let h=us("",()=>Kn(l.id));h.append(ke(l.id),Zt("span",l.name)),i.append(h)});else for(let[l,h,d]of gM[s]||[]){let u=Zt("div",void 0,"layer");u.append(ke(l));let f=Zt("div");f.append(Zt("strong",h),Zt("p",d)),u.append(f),i.append(u)}let r=ot("component-details");if(r.replaceChildren(),n){r.append(pm("Ressources relev\xE9es",[n.cpu,n.ram,n.free,n.disk]),Zt("p",n.planned,"state-note"));return}if(s==="ubuntu"){r.append(Zt("h3","Services dans cette VM"));for(let l of be.nodes.filter(h=>h.parent==="ubuntu"))r.append(us(l.name,()=>Kn(l.id),"service-action"))}let a=Zt("details");a.append(Zt("summary","Configuration et \xE9tat r\xE9el"));let o=Zt("div",void 0,"technical-body");o.append(Zt("p",e.status,"state-note"),Zt("p",e.resources));let c=Zt("table");for(let l of e.interfaces){let h=Zt("tr");l.forEach(d=>h.append(Zt("td",d))),c.append(h)}o.append(c,pm("Protections \xE0 v\xE9rifier",e.controls),Zt("h3","Prochaine action"),Zt("p",e.next),Zt("h3","Preuve disponible"),Zt("p",e.evidence),Zt("p","Source : "+e.source,"source-note")),a.append(o),r.append(a)}function xM(s){let t=ot("ownership-trail");if(t.replaceChildren(us("R\xE9seau",Ku)),s.startsWith("link:"))return;let e=be.nodes.find(i=>i.id===s),n=s.startsWith("host:")?s.slice(5):e.host;t.append(Zt("span","\u203A"),us("PC "+n.toUpperCase(),()=>Kn("host:"+n))),e?.parent&&t.append(Zt("span","\u203A"),us("Ubuntu",()=>Kn(e.parent))),e&&t.append(Zt("span","\u203A"),Zt("strong",e.name))}function vM(s){let t=be.links.find(e=>e.id===s);ot("component-panel").hidden=!1,ot("component-icon").replaceChildren(ke("switch")),ot("node-location").textContent=t.kind==="storage"?"Relation de stockage locale":"Connexion \xB7 "+(t.kind==="network"?"r\xE9seau":"service interne"),ot("node-title").textContent=t.label,ot("node-purpose").textContent=t.kind==="storage"?"La base active reste dans un volume Ubuntu. Ce lien ne traverse ni le trunk ni le VLAN30.":t.id.startsWith("trunk")?"Les deux VLANs partagent un c\xE2ble Ethernet. Chaque trame porte son tag802.1Q ; SW-B commute et OPNsense route.":t.label+" : les extr\xE9mit\xE9s et le sens sont montr\xE9s dans la sc\xE8ne.",ot("component-layers").replaceChildren(...[[t.from,t.fromPort],[t.to,t.toPort]].map(([e,n])=>{let i=us("",()=>Kn(e));return i.append(ke(e),Zt("span",be.nodes.find(r=>r.id===e).name+" \xB7 "+n)),i})),ot("component-details").replaceChildren(Zt("p",t.kind==="storage"?"Volume local Ubuntu \xB7 aucun tag r\xE9seau":t.id.startsWith("trunk")?"VMnet12 \u2194 Ethernet A \u2194 c\xE2ble \u2194 Ethernet B \u2194 VMnet12 \xB7 VLAN"+t.zone+" tagu\xE9":t.label,"state-note"))}function Kn(s){let t=s.startsWith("link:");(t?!be.links.some(e=>"link:"+e.id===s):s.startsWith("host:")?!be.hosts.some(e=>"host:"+e.id===s):!be.nodes.some(e=>e.id===s))||(Ze(),Ce?.stop(),pi=s,t?(vM(s.slice(5)),Ce?.reset(),Ce?.finishView(),Ce?.inspectLink(s.slice(5))):(_M(s),Ce?.open(s)),xM(s),wc(),ot("scene-hint").textContent="Vue fonctionnelle \xB7 le parcours est conserv\xE9 pendant l\u2019inspection.",ka())}function hs(s=!0){ot("component-panel").hidden=!0,pi=null,s&&(Ce?.reset(),Ce?.finishView(),Qt&&Ce?.showStep(Qt.steps,Ae,!1,()=>{})),wc(),ka()}function Ku(){Ze(),hs(),Ce?.stop(),Ce?.setMode(Tc),ot("scene-hint").textContent="Cliquez sur un \xE9quipement ou suivez un parcours.",fi()}function ka(){be&&(ot("map2d").innerHTML=Ju(be,Qt?.steps||[],Ae,pi||""),ot("map2d").querySelectorAll("[data-id]").forEach(s=>{s.addEventListener("click",()=>Kn(s.dataset.id)),s.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),Kn(s.dataset.id))})}))}function $u(s){Ba=s,ot("map2d").hidden=!s,Ce?.setVisible(!s),ot("toggle-2d").textContent=s?"Revenir \xE0 la maquette3D":"Afficher le plan2D",Ze(),ka(),ot("options").open=!1}function mm(s){clearTimeout(Mc),Fa&&(Mc=setTimeout(()=>{if(Ae===Qt.steps.length-1){Ze();return}Ae++,fi(!0)},s))}function gm(s){let t=be.links.find(o=>o.id===s?.link),e=t?s.from:s?.node,n=t?s.to:null,i=o=>be.nodes.find(c=>c.id===o)?.name||"",r=o=>be.nodes.find(c=>c.id===o)?.host?.toUpperCase()||"";ot("hop-from").textContent=e?i(e)+" \xB7 PC "+r(e):"PC A \xB7 OPNsense",ot("hop-to").textContent=n?i(n)+" \xB7 PC "+r(n):s?.decision?"D\xE9cision au point de contr\xF4le":"PC B \xB7 Alpine SW-B",ot("hop-ingress").textContent=t?t.from===e?t.fromPort:t.toPort:"VMnet12 \u2192 Ethernet A",ot("hop-egress").textContent=t?t.to===n?t.toPort:t.fromPort:"Ethernet B \u2192 VMnet12",s&&!t&&(ot("hop-ingress").textContent=s.node==="fw"?["deny","vpnapp"].includes(Qt?.id)?"Entr\xE9e : interface VPN":Qt?.id==="backup"?"Entr\xE9e : VLAN20":"Entr\xE9e : CLIENTS":"Dans "+i(s.node),ot("hop-egress").textContent=s.denied&&s.node==="fw"?"Aucune sortie \xB7 paquet arr\xEAt\xE9":s.node==="fw"?Qt?.id==="backup"?"Sortie : VLAN30":"Sortie : VLAN20":s.node==="nas"?"Compte et ACL du dataset":s.node==="app"?"Ubuntu \xB7 donn\xE9es locales":"Contr\xF4le du service"),ot("hop-direction").textContent=t?t.id.startsWith("trunk")?"PC "+r(e)+" \u2192 PC "+r(n)+" \xB7 VLAN"+t.zone:s.tag||t.label:(s?.denied&&s.node==="fw"?"REFUS \xB7 ":"")+(s?.decision||"Un c\xE2ble Ethernet \xB7 deux VLANs tagu\xE9s"),ot("inspect-hop").hidden=!t,ot("inspect-hop").textContent=t?"Inspecter cette connexion":"",ot("transport-strip").dataset.active=s?.link||"";let a=(s?.denied&&s.node==="fw"?"REFUS \xB7 ":"")+(s?.decision||"Choisissez un trajet autoris\xE9 ou refus\xE9.");ot("rule-outcome").textContent=a,ot("rule-outcome").classList.toggle("denied",!!s?.denied),ot("rule-match").textContent=Qt?Qt.source+" \u2192 "+Qt.destination+" \xB7 "+Qt.protocol:"Le VPN donne acc\xE8s \xE0 HTTPS8443 ; pas au NAS445.",ot("rule-control").textContent=s?.node==="app"?s.denied?"Disponibilit\xE9 : la sonde HTTPS d\xE9tecte la panne applicative.":"Contr\xF4le ind\xE9pendant : session et r\xF4le InvoiceShelf.":s?.node==="nas"?"Contr\xF4le ind\xE9pendant : compte et ACL du dataset.":s?.node==="fw"?"Point de contr\xF4le : interface entrante OPNsense.":"Le marqueur dans la sc\xE8ne situe le contr\xF4le courant."}function fi(s=!1){if(!Qt){gm(),ot("step-title").classList.remove("denied"),ot("step-position").textContent="Exploration libre",ot("step-title").textContent="Commencez par un clic.",ot("step-copy").textContent="Ouvrez un \xE9quipement pour voir sa coupe et comprendre son r\xF4le. Choisissez ensuite un parcours pour expliquer une communication.",ot("packet-meta").replaceChildren(),ot("step-track").replaceChildren(),ot("play").disabled=!0,ot("prev-step").disabled=!0,ot("next-step").disabled=!0;return}let t=Qt.steps[Ae];gm(t),ot("step-position").textContent="\xC9tape "+(Ae+1)+" sur "+Qt.steps.length+" \xB7 simulation explicative",ot("step-title").textContent=t.title,ot("step-copy").textContent=t.text,ot("step-title").classList.toggle("denied",!!t.denied),ot("packet-meta").replaceChildren(...[Qt.source+" \u2192 "+Qt.destination,Qt.protocol,t.tag||t.decision||""].filter(Boolean).map(e=>Zt("span",e))),ot("play").disabled=!1,ot("prev-step").disabled=Ae===0,ot("next-step").disabled=Ae===Qt.steps.length-1,ot("step-track").replaceChildren(...Qt.steps.map((e,n)=>{let i=us("",()=>Dr(n));return i.setAttribute("aria-label","\xC9tape "+(n+1)+" : "+e.title),i.setAttribute("aria-current",Ae===n?"step":"false"),n<Ae&&i.classList.add("done"),i})),Ce?.showStep(Qt.steps,Ae,s&&!Ba,()=>mm(1100)),ka(),s&&(!t.link||bc.checked||Ba||!Ce)&&mm(3200)}function Dr(s){Qt&&(pi&&hs(),Ze(),Ce?.stop(),Ae=Math.max(0,Math.min(Qt.steps.length-1,s)),fi(!0))}function Sc(s){Ze(),Qt=Zu.find(t=>t.id===s)||null,Ae=0,Oa("logical"),hs(),Ce?.stop(),fi()}function yM(s,t,e){let n=URL.createObjectURL(new Blob([t],{type:e})),i=document.createElement("a");i.href=n,i.download=s,i.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}async function SM(){try{let t=await fetch("network-assets/topology.json");if(!t.ok)throw Error("HTTP "+t.status);be=await t.json();let e=new Set(be.nodes.map(n=>n.id));if(e.size!==be.nodes.length||be.links.some(n=>!e.has(n.from)||!e.has(n.to)))throw Error("Liaisons incoh\xE9rentes")}catch(t){ot("loading").textContent="Impossible de charger le mod\xE8le. Utiliser le lanceur local. "+t.message;return}ot("overview").prepend(ke("global")),ot("presentation").prepend(ke("fullscreen")),ot("close-panel").append(ke("close")),ot("prev-step").append(ke("prev")),ot("next-step").append(ke("next")),Ze(),Zu.forEach(t=>{let e=Zt("option",t.name);e.value=t.id,ot("scenario-select").append(e)});try{Ce=fm(be,Kn)}catch{ot("fallback").hidden=!1,$u(!0),ot("top-view").disabled=!0}ot("loading").hidden=!0,ot("overview").addEventListener("click",Ku),ot("back-network").prepend(ke("prev")),ot("back-network").addEventListener("click",Ku),ot("start-walkthrough").addEventListener("click",()=>{Sc("backup"),ot("scenario-select").value="backup",Dr(1)}),ot("inspect-hop").addEventListener("click",()=>{let t=Qt?.steps[Ae]?.link;t&&Kn("link:"+t)}),document.querySelectorAll("[data-inspect-link]").forEach(t=>t.addEventListener("click",()=>Kn("link:"+t.dataset.inspectLink))),ot("close-panel").addEventListener("click",()=>{Ze(),hs(),ot("scene-hint").textContent="Cliquez sur un \xE9quipement pour l\u2019ouvrir."}),document.querySelectorAll("[data-mode]").forEach(t=>t.addEventListener("click",()=>Oa(t.dataset.mode))),ot("security-allow").addEventListener("click",()=>{Sc("vpnapp"),ot("scenario-select").value="vpnapp",Oa("security"),fi()}),ot("security-deny").addEventListener("click",()=>{Sc("deny"),ot("scenario-select").value="deny",Oa("security"),fi()}),ot("scenario-select").addEventListener("change",t=>Sc(t.target.value)),ot("prev-step").addEventListener("click",()=>Dr(Ae-1)),ot("next-step").addEventListener("click",()=>Dr(Ae+1)),ot("play").addEventListener("click",()=>{if(Qt){if(pi&&hs(),Fa){Ze();return}Ae===Qt.steps.length-1&&(Ae=0),Fa=!0,ot("play").replaceChildren(ke("pause"),document.createTextNode("Pause")),ot("play").setAttribute("aria-pressed","true"),fi(!0)}}),ot("top-view").addEventListener("click",()=>{Ze(),Ce?.topView(),ot("options").open=!1}),ot("toggle-2d").addEventListener("click",()=>$u(!Ba)),bc.addEventListener("change",()=>{Ze(),Ce?.setReduced(bc.checked),Qt&&fi()}),ot("readiness").addEventListener("click",()=>{Ze(),hs(),ot("options").open=!1,ot("component-panel").hidden=!1,ot("component-icon").replaceChildren(ke("layers")),ot("node-location").textContent="Pr\xE9paration du laboratoire",ot("node-title").textContent="Les points ouverts",ot("node-purpose").textContent="Ces points proviennent du plan et de l\u2019\xE9tat d\xE9clar\xE9 par B. Ils restent visibles sans pr\xE9tendre que les tests ont r\xE9ussi.",ot("component-layers").replaceChildren(...be.issues.map(t=>{let e=Zt("div",void 0,"preparation-item");return e.append(us(t.title,()=>Kn(t.node)),Zt("p",t.text),Zt("small","Responsable : "+t.owner)),e})),ot("component-details").replaceChildren(),wc()}),ot("export-svg").addEventListener("click",()=>{Ze(),yM("laboratoire-"+(Qt?.id||"global")+".svg",Ju(be,Qt?.steps||[],Ae,pi||""),"image/svg+xml"),ot("options").open=!1}),ot("presentation").addEventListener("click",async()=>{if(document.fullscreenElement){await document.exitFullscreen();return}try{await document.documentElement.requestFullscreen()}catch{ot("presentation").replaceChildren(ke("fullscreen"),document.createTextNode("Utiliser F11"))}});let s=()=>{document.body.classList.toggle("presentation-mode",!!document.fullscreenElement),ot("presentation").replaceChildren(ke("fullscreen"),document.createTextNode(document.fullscreenElement?"Quitter le plein \xE9cran":"Plein \xE9cran"))};document.addEventListener("fullscreenchange",s),s(),document.addEventListener("keydown",t=>{if(t.key==="Escape"){Ze(),ot("component-panel").hidden||hs(),ot("options").open=!1;return}if(!/INPUT|TEXTAREA|SELECT/.test(t.target.tagName)){if(t.key.toLowerCase()==="f"&&!t.ctrlKey&&!t.metaKey&&!t.altKey){t.preventDefault(),ot("presentation").click();return}t.target.tagName!=="SUMMARY"&&(t.key==="ArrowRight"&&Qt&&(t.preventDefault(),Dr(Ae+1)),t.key==="ArrowLeft"&&Qt&&(t.preventDefault(),Dr(Ae-1)),t.key===" "&&t.target===document.body&&Qt&&(t.preventDefault(),ot("play").click()))}}),document.addEventListener("visibilitychange",()=>{document.hidden&&Ze()}),document.addEventListener("lab-webgl-lost",()=>{Ze(),ot("fallback").hidden=!1,$u(!0)}),Oa("physical"),fi(),window.labDiagram={revision:be.revision,getState:()=>({selected:pi,mode:Tc,scenario:Qt?.id||null,step:Ae,playing:Fa,mapMode:Ba,render:Ce?.info()||null})}}SM();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
