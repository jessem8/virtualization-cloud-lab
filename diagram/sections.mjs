// Four-section live presenter. Each scene: one purpose, one camera shot, one sentence.
// path: {flow, from, to} slices a scenario from scenarios.mjs (0-based, inclusive); extra steps may be appended.
import {LOCAL_WRITE} from './scenarios.mjs';
export {demos} from './demos.mjs';

export const proofs = {
  vlan20: {title: 'VLAN 20 sur le trunk', image: 'vlan20.png', caption: 'OPNsense : requêtes et réponses ARP portant le tag 20.', scope: '29/10 · trames ARP taguées 20 sur le trunk.'},
  invoice: {title: 'Facture et PDF', image: 'invoice.png', caption: 'Depuis Windows : facture fictive INV-000001 et aperçu de son PDF.', scope: '29/10 · accès authentifié ; ne prouve pas chaque restriction du rôle lecteur.'},
  vpn: {title: 'Application par le VPN', image: 'vpn.png', caption: 'InvoiceShelf atteint pendant l’essai VPN, MGMT désactivé.', scope: '29/10 · à recouper avec routes et journaux des notes A/B.'},
  'vpn-deny': {title: 'Refus VPN journalisés', image: 'vpn-deny.png', caption: 'Journal OPNsense reçu sur Ubuntu : 10.78.0.2 bloqué vers 22, 445 et 3001.', scope: '29/10 vers 16:33 · filterlog block sur ovpns1 ; WAN VMware simulé.'},
  sha: {title: 'Archive identique au retour', image: 'sha.png', caption: 'Archive envoyée au NAS par app-backup, récupérée, empreintes SHA-256 identiques.', scope: '29/10 vers 14:17 · intégrité du transfert, distincte de la restauration.'},
  acl: {title: 'Écriture refusée au lecteur', image: 'acl.png', caption: 'Lecture réussie, puis création de fichier refusée au compte lecteur.', scope: '29/10 · Bob se connecte au partage mais la lecture du fichier est refusée (notes A).'},
  restore: {title: 'Copie restaurée isolée', image: 'restore.png', caption: 'Instance isolée 127.0.0.1:8444 : facture et PDF issus de l’archive du NAS.', scope: '29/10 · restauration réalisée sans toucher l’instance active ; copie retirée ensuite.'},
  monitor: {title: 'Grafana après reboot', image: 'monitor.png', caption: 'Quatre collectes UP, sonde InvoiceShelf UP, graphes CPU.', scope: '29/10 · état final ; panne et reprise documentées séparément.'},
  syslog: {title: 'Journaux OPNsense reçus', image: 'syslog.png', caption: 'rsyslog écoute TCP 514 sur Ubuntu ; lignes filterlog de FW-LAB reçues.', scope: '29/10 vers 15:43 · refus d’un émetteur non autorisé non testé.'},
  'probe-down': {title: 'Sonde InvoiceShelf DOWN', image: 'probe-down.png', caption: 'Grafana : collecteurs UP, sonde HTTPS InvoiceShelf DOWN après arrêt de webapp.', scope: '29/10 vers 15:23 · reprise probe_success=1 rapportée ensuite.'},
  reboot: {title: 'InvoiceShelf après reboot', image: 'reboot.png', caption: 'Tableau InvoiceShelf accessible depuis Windows après redémarrage d’Ubuntu.', scope: '29/10 · ne prouve pas la cause du défaut MTU/MSS.'}
};

export const sections = [
  {id: 'architecture', title: 'Architecture et VLAN', duration: '4 min', summary: 'Deux PC, cinq VM, un câble et deux VLAN.', scenes: [
    {title: 'Deux PC, cinq VM', line: 'PC A porte OPNsense et Windows ; PC B porte SW-B, Ubuntu et TrueNAS, sous VMware.', shot: 'overview', focus: ['fw', 'windows', 'switch', 'ubuntu', 'nas'],
      controls: ['PC A : Intel i7-13700HX, 15,71 Gio ; PC B : Ryzen 7 7840HS, 15,29 Gio.', 'Un seul câble Ethernet relie les deux hôtes (VMnet12 de chaque côté).', 'Zones : CLIENTS (non tagué), SERVEURS VLAN 20, STOCKAGE VLAN 30, MGMT.'], proofs: []},
    {title: 'SW-B ne fait que commuter', line: 'Le trunk transporte les VLAN 20 et 30 tagués ; chaque port d’accès livre un seul VLAN, sans routage.', inspect: 'switch', focus: ['switch'],
      controls: ['Trunk eth1 (VMnet12) : tags 20 et 30, sans VLAN natif.', 'Accès Ubuntu eth2 (VMnet10) : VLAN 20 non tagué ; accès NAS eth0 (VMnet11) : VLAN 30.', 'Aucune adresse IP ni routage sur SW-B.'], proofs: ['vlan20']},
    {title: 'Une requête traverse le câble', line: 'Windows → OPNsense autorise 8443 → trunk VLAN 20 → SW-B → Ubuntu.', shot: 'path', focus: ['windows', 'fw', 'switch', 'ubuntu'], path: {flow: 'app', from: 1, to: 4},
      controls: ['CLIENTS est non tagué ; OPNsense route vers 10.77.20.0/24, sans NAT.', 'SW-B retire le tag 20 sur le port d’accès d’Ubuntu.', 'MSS 1360 ciblée Windows → 8443 et MTU 1400 stabilisent l’accès.'], proofs: ['invoice']}
  ]},
  {id: 'securite', title: 'Sécurité et VPN', duration: '3 min', summary: 'Des zones séparées, un pare-feu qui décide, un VPN restreint.', scenes: [
    {demos: ['win-defender', 'win-firewall', 'win-sysmon', 'win-audit', 'opn-rules'], title: 'OPNsense décide entre les zones', line: 'Toute communication entre zones passe par OPNsense, qui autorise uniquement les flux prévus.', shot: 'focus', mode: 'security', focus: ['fw', 'windows', 'ubuntu', 'nas'],
      controls: ['Défense en profondeur : règles OPNsense, iptables sur Ubuntu, ACL TrueNAS, rôles InvoiceShelf.', 'Windows : Defender, pare-feu, Sysmon et audit 4624/4625.', 'SSH Ubuntu par clé depuis MGMT ; mot de passe et root interdits en configuration.'], proofs: []},
    {demos: ['opn-vpn'], title: 'Le VPN n’ouvre que l’application', line: 'Tunnel → OPNsense autorise 8443 → trunk VLAN 20 → Ubuntu.', shot: 'path', focus: ['vpn', 'fw', 'switch', 'ubuntu'], path: {flow: 'vpnapp', from: 1, to: 4},
      controls: ['Client OpenVPN sur l’hôte A : 10.78.0.2, passerelle 10.78.0.1.', 'Après déconnexion, l’application est inaccessible et les routes VPN absentes.', 'Le VPN ne remplace pas la connexion InvoiceShelf.'], proofs: ['vpn']},
    {title: 'Le reste est refusé', line: 'Depuis le tunnel, SMB vers le NAS s’arrête à OPNsense et le refus est journalisé.', shot: 'path', focus: ['vpn', 'fw'], path: {flow: 'deny', from: 1, to: 3},
      controls: ['SSH 22 et Grafana 3001 sont aussi refusés et journalisés (29/10).', 'SSH a été retesté avec un socket actif avant de retenir le refus.', 'MGMT (VMnet13) désactivé pendant l’essai : aucun contournement.'], proofs: ['vpn-deny']}
  ]},
  {id: 'stockage', title: 'Docker et Stockage', duration: '4 min', summary: 'L’application dans Docker, ses données et leur sauvegarde.', scenes: [
    {title: 'Ubuntu exécute les services', line: 'Docker isole le proxy, InvoiceShelf et la supervision dans la VM Ubuntu.', inspect: 'ubuntu', focus: ['ubuntu', 'proxy', 'app', 'data', 'monitor'],
      controls: ['Docker 29.1.3, Compose 2.40.3 ; six conteneurs retrouvés après reboot.', 'Seul Nginx publie 8443 ; InvoiceShelf 8080 reste interne.', 'Prometheus 9090 interne ; Grafana HTTPS 3001.'], proofs: []},
    {title: 'De HTTPS à la base locale', line: 'Nginx 8443 → InvoiceShelf 8080 → SQLite sur le disque d’Ubuntu.', shot: 'path', focus: ['proxy', 'app', 'data'], path: {flow: 'app', from: 5, to: 6, extra: [{title: 'Écriture locale SQLite', link: 'sqlite', from: 'app', to: 'data', frame: LOCAL_WRITE, text: 'La base active reste sur Ubuntu, jamais sur SMB.'}]},
      controls: ['La facture reste présente après recréation des conteneurs.', 'Accès Windows retrouvé après reboot d’Ubuntu (29/10).', 'Certificat TLS autosigné, non approuvé par les navigateurs.'], proofs: ['invoice', 'reboot']},
    {title: 'La sauvegarde passe par le pare-feu', line: 'Accès 20 → trunk 20 → OPNsense → trunk 30 → accès 30 : même PC, deux VLAN.', shot: 'path', focus: ['ubuntu', 'switch', 'fw', 'nas'], path: {flow: 'backup', from: 1, to: 5},
      controls: ['Archive créée après arrêt de webapp, puis envoyée par le compte app-backup.', 'Copie récupérée du NAS : empreintes SHA-256 identiques (29/10).', 'OPNsense autorise seulement Ubuntu → NAS TCP 445.'], proofs: ['sha']},
    {title: 'TrueNAS protège et restaure', line: 'ACL par compte, snapshots, archive, puis restauration isolée sur le port 8444.', inspect: 'nas', focus: ['nas'],
      controls: ['Alice lit et écrit ; lecteur lit mais ne crée pas ; Bob se connecte mais la lecture est refusée.', 'SMB chiffré requis : session Windows Encrypted=True.', 'Restauration réalisée le 29/10 dans une instance isolée 127.0.0.1:8444, puis retirée.'], proofs: ['acl', 'restore']}
  ]},
  {id: 'supervision', title: 'Monitoring et Bilan', duration: '4 min', summary: 'Ce qui est mesuré, ce qui a été vu tomber, et le bilan.', scenes: [
    {demos: ['win-9182'], title: 'Prometheus collecte Windows', line: 'Ubuntu interroge windows_exporter 9182 à travers OPNsense, puis Grafana affiche les séries.', shot: 'path', focus: ['monitor', 'ubuntu', 'switch', 'fw', 'windows'], path: {flow: 'monitor', from: 0, to: 6},
      controls: ['Quatre jobs UP : prometheus, ubuntu, windows, invoiceshelf.', 'Journaux OPNsense envoyés à rsyslog sur Ubuntu en TCP 514, rotation vérifiée.', 'Grafana 13.2.4 en HTTPS 3001 ; Prometheus reste interne.'], proofs: ['monitor', 'syslog']},
    {title: 'Une panne, puis la reprise', line: 'Webapp arrêtée : la sonde passe DOWN, puis revient après relance — observé le 29/10.', shot: 'path', focus: ['app', 'monitor'], path: {flow: 'monitor', from: 7, to: 8},
      controls: ['Sonde DOWN vue dans Grafana vers 15:23 le 29/10.', 'Reprise : probe_success=1 rapporté après relance.', 'Perte et reprise de node-exporter testées séparément.'], proofs: ['probe-down']},
    {title: 'Bilan', line: 'Le laboratoire fonctionne sur deux PC ; chaque résultat présenté est daté.', shot: 'overview', focus: ['fw', 'switch', 'ubuntu', 'nas', 'windows'],
      controls: ['Acquis : VLAN sur un câble, pare-feu entre zones, VPN restreint, sauvegarde vérifiée, supervision.', 'Difficultés : réseaux VMnet, trunk entre deux hôtes, MTU 1400 et MSS 1360.'], proofs: ['reboot']}
  ]}
];

// Security scenarios: each one plays like a section scene. evidence: 'datée' = dated log/capture, 'démo' = illustration only.
const TUNNEL = {app: 'Encapsulé dans OpenVPN UDP1194'};
const tunnel = {title: 'Le paquet arrive par le tunnel', link: 'vpn', from: 'vpn', to: 'fw', frame: TUNNEL, text: 'Client OpenVPN sur l’hôte A, adresse 10.78.0.2.'};
export const scenarioSection = {id: 'scenarios', title: 'Scénarios bloqués', duration: '', summary: 'Ce que la sécurité refuse.', scenes: [
  {title: 'VPN → SSH 22 : refusé', line: 'Depuis le tunnel, SSH vers Ubuntu est bloqué par OPNsense et journalisé.', shot: 'path', evidence: 'datée', focus: ['vpn', 'fw'],
    path: {steps: [tunnel, {title: 'Refus SSH 22', node: 'fw', decision: 'REFUS · 10.78.0.2 → 10.77.20.10:22 · journalisé', denied: true, frame: {src: '10.78.0.x', dst: '10.77.20.10', proto: 'TCP', port: 22, app: 'SSH'}, text: 'Seul HTTPS 8443 est permis depuis le VPN.'}]},
    controls: ['Règle VPN : seul TCP 8443 vers 10.77.20.10 est autorisé.', 'Journal OPNsense reçu sur Ubuntu le 29/10 vers 16:33 (filterlog block, ovpns1).', 'SSH retesté avec un socket 22 actif : bloqué à 16:49 le 29/10.'], proofs: ['vpn-deny']},
  {title: 'VPN → SMB 445 : refusé', line: 'Le NAS n’est pas joignable depuis le tunnel ; le refus est journalisé.', shot: 'path', evidence: 'datée', focus: ['vpn', 'fw'], path: {flow: 'deny', from: 1, to: 3},
    controls: ['Tentative 10.78.0.2 → 10.77.30.10:445.', 'Bloquée par OPNsense avant le trunk 30 (29/10 vers 16:33).', 'MGMT désactivé pendant l’essai : pas de contournement.'], proofs: ['vpn-deny']},
  {title: 'VPN → Grafana 3001 : refusé', line: 'La supervision reste réservée à Windows et MGMT ; le VPN est refusé.', shot: 'path', evidence: 'datée', focus: ['vpn', 'fw'],
    path: {steps: [tunnel, {title: 'Refus Grafana 3001', node: 'fw', decision: 'REFUS · 10.78.0.2 → 10.77.20.10:3001 · journalisé', denied: true, frame: {src: '10.78.0.x', dst: '10.77.20.10', proto: 'TCP', port: 3001, app: 'HTTPS Grafana'}, text: 'Grafana HTTPS 3001 n’est pas ouvert au VPN.'}]},
    controls: ['Journal OPNsense : 10.78.0.2 → 10.77.20.10:3001, block (29/10 vers 16:33).', 'Grafana reste accessible depuis Windows (CLIENTS) et MGMT.'], proofs: ['vpn-deny']},
  {title: 'Client → MGMT : bloqué', line: 'Windows ne peut pas joindre le réseau d’administration : aucune règle CLIENTS ne l’autorise.', shot: 'path', evidence: 'démo', focus: ['windows', 'fw', 'mgmt'],
    path: {steps: [{title: 'Windows vise MGMT', link: 'clients', from: 'windows', to: 'fw', frame: {src: '10.77.10.10', dst: '10.77.99.254', proto: 'TCP', port: 22, app: 'Administration'}, text: 'Tentative depuis CLIENTS vers 10.77.99.0/24.'}, {title: 'Bloqué sur CLIENTS', node: 'fw', decision: 'BLOQUÉ · CLIENTS → MGMT', denied: true, text: 'Après ses exceptions, CLIENTS bloque les autres destinations privées puis journalise le reste.'}]},
    controls: ['Règles CLIENTS (11) appliquées le 28/10 : exceptions précises, puis blocage des réseaux privés.'], proofs: []},
  {title: 'VLAN 30 → VLAN 20 : refusé', line: 'Même PC B, deux VLAN : le NAS ne peut pas ouvrir de connexion vers Ubuntu.', shot: 'path', evidence: 'démo', focus: ['nas', 'switch', 'fw', 'ubuntu'],
    path: {steps: [{title: 'Le NAS envoie sur son accès 30', link: 'access30', from: 'nas', to: 'switch', frame: {src: '10.77.30.10', dst: '10.77.20.10', proto: 'TCP', port: 22, app: 'Tentative inter-VLAN'}, text: 'SW-B ajoute le tag 30 ; il ne route pas.'}, {title: 'Remontée sur le trunk 30', link: 'trunk30', from: 'switch', to: 'fw', tag: '802.1Q · VLAN30', text: 'Seul OPNsense peut passer d’un VLAN à l’autre.'}, {title: 'Refus sur STOCKAGE30', node: 'fw', decision: 'BLOQUÉ · STOCKAGE30 → SERVEURS20', denied: true, text: 'STOCKAGE30 n’autorise que DNS et NTP vers sa passerelle.'}]},
    controls: ['Règles STOCKAGE30 (8) appliquées le 28/10 : DNS/NTP vers la passerelle, puis blocages journalisés.', 'Un blocage STOCKAGE30 a été vu en direct le 29/10 vers 12:30 (ping NAS → passerelle, avant la règle de diagnostic).'], proofs: []}
]};
