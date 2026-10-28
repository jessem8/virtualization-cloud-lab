import {cp,readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const here=dirname(fileURLToPath(import.meta.url)),docs=join(here,'..','docs');
const target=process.argv[2]&&resolve(process.argv[2]);
if(!target){console.error('Usage : node publish.mjs <dossier du site public>');process.exit(1);}

const csp="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'";
let html=await readFile(join(docs,'network-lab-3d.html'),'utf8');
html=html.replace('<meta charset="utf-8">','<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="'+csp+'">').replace(/<a href="DIAGRAM_DESIGN\.md"[^>]*>[^<]*<\/a>/,'');
if(html.includes('DIAGRAM_DESIGN.md'))throw Error('Lien vers la documentation privée encore présent.');

await rm(join(target,'network-assets'),{recursive:true,force:true});
await mkdir(target,{recursive:true});
await cp(join(docs,'network-assets'),join(target,'network-assets'),{recursive:true});
await writeFile(join(target,'index.html'),html);
await writeFile(join(target,'.nojekyll'),'');
console.log('Laboratoire3D copié dans '+target+' (index.html, network-assets).');
