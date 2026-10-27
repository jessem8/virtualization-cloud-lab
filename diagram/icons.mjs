const paths={
fw:'<path d="M12 2 21 6v6c0 5-4 8-9 11C7 20 3 17 3 12V6Z"/><path d="M5 9h14M4 14h15M8 9v5m8-5v5m-4 0v5"/>',
windows:'<path d="M2 4 11 3v8H2Zm11-1 9-1v9h-9ZM2 13h9v8l-9-1Zm11 0h9v9l-9-1Z" fill="currentColor" stroke="none"/>',
switch:'<rect x="2" y="7" width="20" height="11" rx="2"/><path d="M5 13h2v3H5Zm5 0h2v3h-2Zm5 0h2v3h-2Zm5-3h.01M7 4h10m-2-2 2 2-2 2M9 20H5m2-2-2 2 2 2"/>',
ubuntu:'<circle cx="12" cy="12" r="6"/><circle cx="12" cy="3" r="2.2" fill="currentColor"/><circle cx="4.2" cy="16.5" r="2.2" fill="currentColor"/><circle cx="19.8" cy="16.5" r="2.2" fill="currentColor"/><path d="m12 6 0 3m-5 6 3-1.7m4 0 3 1.7"/>',
nas:'<rect x="4" y="2" width="16" height="20" rx="2"/><rect x="7" y="5" width="10" height="4" rx="1"/><rect x="7" y="11" width="10" height="4" rx="1"/><path d="M7 19h5m4 0h1"/>',
mgmt:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 22h8m-4-5v5m-6-11 3-3m0 6-3-3m6 3h5"/>',
wan:'<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0"/><circle cx="12" cy="20" r="1.3" fill="currentColor"/>',
vpn:'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v3"/><path d="m2 5 2-2m16 0 2 2"/>',
proxy:'<path d="M3 5h18v14H3Z"/><path d="m7 9 3 3-3 3m6-3h5"/>',
app:'<path d="M6 2h10l4 4v16H4V2Zm10 0v5h4M8 11h8m-8 4h5m-5 4h3"/><path d="m15 17 2 2 4-5"/>',
data:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0"/>',
monitor:'<rect x="2" y="3" width="20" height="15" rx="2"/><path d="M7 22h10m-5-4v4M5 13h3l2-5 4 7 2-4h3"/>',
host:'<rect x="4" y="2" width="16" height="14" rx="1"/><path d="M4 16 1 22h22l-3-6M7 19h10"/>',
global:'<path d="M3 7 12 2l9 5v10l-9 5-9-5Zm0 0 9 5 9-5M12 12v10"/>',
play:'<path d="m8 4 12 8-12 8Z" fill="currentColor" stroke="none"/>',
pause:'<path d="M7 4h3v16H7Zm7 0h3v16h-3Z" fill="currentColor" stroke="none"/>',
next:'<path d="m9 5 7 7-7 7"/>',prev:'<path d="m15 5-7 7 7 7"/>',
close:'<path d="m6 6 12 12M18 6 6 18"/>',
fullscreen:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
chevron:'<path d="m7 10 5 5 5-5"/>',
layers:'<path d="m2 7 10-5 10 5-10 5Zm0 5 10 5 10-5M2 17l10 5 10-5"/>'
};
export function icon(id,cls=''){return '<svg class="icon '+cls+'" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(paths[id]||paths.host)+'</svg>';}
export function iconElement(id,cls=''){const t=document.createElement('template');t.innerHTML=icon(id,cls);return t.content.firstElementChild;}
export const pictograms=paths;
