import {cp,readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const here=dirname(fileURLToPath(import.meta.url)),docs=join(here,'..','docs');
const args=process.argv.slice(2),includePrivate=args.includes('--include-private-evidence'),target=args.find(a=>!a.startsWith('--'));
if(!target){console.error('Usage : node publish.mjs <dossier du site public> [--include-private-evidence]');process.exit(1);}
const targetDir=resolve(target);

const csp="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'";
let html=await readFile(join(docs,'network-lab-3d.html'),'utf8');
html=html.replace('<meta charset="utf-8">','<meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="'+csp+'">').replace(/<a href="DIAGRAM_DESIGN\.md"[^>]*>[^<]*<\/a>/,'');
if(html.includes('DIAGRAM_DESIGN.md'))throw Error('Lien vers la documentation privée encore présent.');

// Screenshots stay private unless explicitly requested: the page then shows its placeholder.
const evidenceDir=resolve(docs,'network-assets','evidence');
await rm(join(targetDir,'network-assets'),{recursive:true,force:true});
await mkdir(targetDir,{recursive:true});
await cp(join(docs,'network-assets'),join(targetDir,'network-assets'),{recursive:true,filter:src=>includePrivate||!resolve(src).startsWith(evidenceDir)});
await writeFile(join(targetDir,'index.html'),html);
await writeFile(join(targetDir,'.nojekyll'),'');
console.log((includePrivate?'Avec':'Sans')+' captures privées · Laboratoire3D copié dans '+targetDir+' (index.html, network-assets).');
