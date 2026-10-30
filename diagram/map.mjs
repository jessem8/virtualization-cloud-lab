export const xml = s => String(s).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
const positions={wan:[100,130],vpn:[360,130],windows:[130,420],mgmt:[360,420],fw:[350,260],switch:[680,260],ubuntu:[925,130],nas:[925,420],proxy:[840,225],app:[960,225],data:[1080,225],monitor:[925,320]};
export function makeMap(data,steps=[],index=0,selected='fw'){
const current=steps[index],currentLink=current?.link,currentNode=current?.node||current?.to;
const color=z=>({'20':'#1867bc','30':'#b87512',client:'#697f90',mgmt:'#697f90',vpn:'#856f9d',wan:'#697f90',local:'#697579'}[z]||'#697f90');
const size=id=>data.nodes.find(n=>n.id===id)?.parent?[90,46]:[160,72];
function border(id,toward){const p=positions[id],[w,h]=size(id),dx=toward[0]-p[0],dy=toward[1]-p[1],scale=Math.min(dx?w/2/Math.abs(dx):Infinity,dy?h/2/Math.abs(dy):Infinity);return [p[0]+dx*scale,p[1]+dy*scale];}
let out='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 650" role="img" aria-label="Topologie du laboratoire à deux PC"><defs><marker id="packet-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="context-stroke"/></marker></defs><style>text{font-family:Segoe UI,Arial,sans-serif}.small{font-size:12px;fill:#4c6273}.title{font-size:18px;font-weight:600;fill:#183247}.n{fill:#fff;stroke:#a9beca;stroke-width:1.5}.selected{stroke:#1867bc;stroke-width:3}.current{fill:#e6f1fc;stroke:#1867bc;stroke-width:3}.denied{fill:#fbeae4;stroke:#922d24;stroke-width:3}</style><rect width="1200" height="650" fill="#edf2f4"/><text x="38" y="35" class="title">Laboratoire privé · architecture documentée</text><text x="38" y="58" class="small">Simulation explicative · deux PC · cinq VM</text><rect x="35" y="80" width="490" height="460" rx="14" fill="#e0e9ee"/><rect x="600" y="80" width="565" height="460" rx="14" fill="#e3eee9"/><text x="55" y="107" class="title">PC A</text><text x="620" y="107" class="title">PC B</text>';
for(const l of data.links){const a=positions[l.from],b=positions[l.to];if(!a||!b)continue;const isCurrent=l.id===currentLink;let points;
if(l.id.startsWith('trunk')){const y=l.id==='trunk20'?245:275;points=[[a[0]+80,a[1]],[a[0]+100,y],[b[0]-100,y],[b[0]-80,b[1]]];}
else points=[border(l.from,b),border(l.to,a)];
if(isCurrent&&current.from===l.to)points.reverse();
const path=points.map((p,i)=>(i?'L':'M')+p.join(' ')).join(' ');
out+=`<path data-link="${l.id}" d="${path}" fill="none" stroke="${color(l.zone)}" stroke-width="${isCurrent?5:2}" opacity="${current&&!isCurrent?.25:1}" ${isCurrent?'marker-end="url(#packet-arrow)"':''} ${l.id.startsWith('trunk')?'stroke-dasharray="8 5"':''}/>`;
}
out+='<text x="480" y="226" class="small">Ethernet : tags20/30</text><text x="650" y="370" class="small">Deux accès séparés · SW-B ne route pas</text>';
for(const n of data.nodes){const p=positions[n.id];if(!p)continue;const child=!!n.parent,[w,h]=size(n.id),nodeClass=n.id===currentNode?(current.denied?'denied':'current'):n.id===selected?'selected':'';
out+=`<g data-id="${n.id}" tabindex="0" role="button" aria-label="${xml(n.name)}"><rect x="${p[0]-w/2}" y="${p[1]-h/2}" width="${w}" height="${h}" rx="7" class="n ${nodeClass}"/><text x="${p[0]}" y="${p[1]-6}" text-anchor="middle" font-size="${child?10:14}" font-weight="600" fill="#193749">${xml(n.name)}</text><text x="${p[0]}" y="${p[1]+14}" text-anchor="middle" font-size="${child?9:10}" fill="#4d6677">${xml(child?'Dans Ubuntu':n.id==='fw'?'Route & filtre':n.id==='switch'?'L2 · sans IP':n.id==='wan'?'NAT VMware · Wi-Fi':n.id==='vpn'?'Client sur A ·10.78.0.x':n.id==='mgmt'?'10.77.99.254 · non tagué':n.id==='windows'?'10.77.10.10 · non tagué':n.ip)}</text></g>`;
}
if(current?.broken){let p=null;const l=data.links.find(l=>l.id===currentLink);
if(l&&positions[l.from]&&positions[l.to]){const a=positions[l.from],b=positions[l.to];let t=current.breakAt??.5;if(current.from===l.to)t=1-t;p=[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];}
else if(positions[currentNode])p=[positions[currentNode][0]+(size(currentNode)[0]/2),positions[currentNode][1]-size(currentNode)[1]/2];
if(p)out+=`<g role="img" aria-label="Coupure simulée"><circle cx="${p[0]}" cy="${p[1]}" r="17" fill="#922d24" stroke="#fff" stroke-width="2"/><path d="M${p[0]-7} ${p[1]-7} L${p[0]+7} ${p[1]+7} M${p[0]+7} ${p[1]-7} L${p[0]-7} ${p[1]+7}" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/></g>`;}
out+='<text x="40" y="570" class="small">VLAN20 : bleu · VLAN30 : ambre · CLIENTS et MGMT non tagués</text><text x="40" y="593" class="small">Ubuntu → NAS : B / tag20 → OPNsense sur A → tag30 / B → ACL TrueNAS.</text>';
if(current){const from=data.nodes.find(n=>n.id===current.from)?.name,to=data.nodes.find(n=>n.id===current.to)?.name;
out+=`<text x="40" y="623" font-size="13" fill="${current.denied?'#922d24':'#183247'}">${xml((index+1)+'/'+steps.length+' · '+(from?from+' → '+to+' · ':'')+current.title+' · '+(current.tag||current.decision||''))}</text>`;}
return out+'</svg>';
}
