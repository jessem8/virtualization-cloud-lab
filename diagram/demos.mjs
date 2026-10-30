// Console panels for checks whose screenshots were not kept. Values come from the dated notes (A 28/10, B 29/10);
// the layout is illustrative: these are labelled "Démonstration", never presented as captures.
export const demos = {
  'win-defender': {title: 'Windows · Defender', source: 'Notes A du 28/10', cmd: 'PS> Get-MpComputerStatus | Select AntivirusEnabled,RealTimeProtectionEnabled,AntivirusSignatureVersion',
    out: 'AntivirusEnabled          : True\nRealTimeProtectionEnabled : True\nAntivirusSignatureVersion : 1.463.12.0\n# scan rapide terminé, aucune menace enregistrée'},
  'win-firewall': {title: 'Windows · profils du pare-feu', source: 'Notes A du 28/10', cmd: 'PS> Get-NetFirewallProfile | Select Name,Enabled',
    out: 'Name    Enabled\n----    -------\nDomain     True\nPrivate    True\nPublic     True'},
  'win-sysmon': {title: 'Windows · Sysmon 15.22', source: 'Notes A du 28/10 (captures incomplètes)', cmd: "PS> Get-WinEvent -LogName 'Microsoft-Windows-Sysmon/Operational' | ? Id -in 1,3 | Select -First 2 Id,Message",
    out: 'Id Message\n-- -------\n 3 Network connection detected ...\n 1 Process Create ...'},
  'win-audit': {title: 'Windows · audit des ouvertures de session', source: 'Notes A du 28/10', cmd: "PS> Get-WinEvent -FilterHashtable @{LogName='Security';Id=4624,4625} -MaxEvents 2 | Select Id",
    out: '  Id\n  --\n4625   # échec contrôlé (compte de test inexistant)\n4624   # ouverture réussie'},
  'win-9182': {title: 'Windows · règle wf.msc TCP 9182', source: 'Notes A du 28/10 ; collecte observée le 29/10', cmd: "PS> Get-NetFirewallPortFilter | ? LocalPort -eq 9182 | Get-NetFirewallRule | Get-NetFirewallAddressFilter",
    out: 'Action        : Allow (entrant, TCP 9182)\nRemoteAddress : 10.77.20.10\n# une seule règle compatible : windows_exporter limité à Ubuntu'},
  'opn-rules': {title: 'OPNsense · règles par interface', source: 'Notes A du 28/10 (35 règles LAB)', cmd: 'Pare-feu ▸ Règles ▸ MGMT / CLIENTS / SERVEURS20 / STOCKAGE30',
    out: 'MGMT (6)        10.77.99.254 → FW 443 · NAS 443 · Ubuntu 22, 8443, 3001\nCLIENTS (11)    10.77.10.10 → Ubuntu 8443, 3001 · NAS 445 · DNS 53, NTP 123\nSERVEURS20 (10) 10.77.20.10 → Windows 9182 · NAS 445 · DNS 53, NTP 123\nSTOCKAGE30 (8)  10.77.30.10 → DNS 53, NTP 123\nPuis : blocage RFC1918, mises à jour 80/443, refus final journalisé'},
  'opn-vpn': {title: 'OPNsense · règles OpenVPN', source: 'Notes A/B du 29/10', cmd: 'Pare-feu ▸ Règles ▸ OpenVPN (10.78.0.0/24, UDP 1194)',
    out: 'PASS   10.78.0.0/24 → 10.77.20.10  TCP 8443   InvoiceShelf\nBLOCK  tout le reste, journalisé\n# essais du 29/10 : 22, 445 et 3001 refusés et journalisés'}
};
