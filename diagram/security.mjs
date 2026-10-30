// Content of the "Sécurité" page. Facts from topology.json, MODULES_DU_PROJET, MACHINE_A/B, APP, PC_A/PC_B status and TEST_MATRIX.
export const security = {
  intro: 'La virtualisation concentre plusieurs machines sur un même hôte. Le laboratoire répond à chaque risque par une couche distincte ; aucun atelier d’évasion d’hyperviseur n’a été demandé ni réalisé.',
  risks: [
    {risk: 'Évasion de VM', text: 'Un invité compromis tente d’atteindre l’hyperviseur ou une autre VM.', mitigation: 'VMware Workstation 26.0.0 (hyperviseur de type 2), une fonction par VM, comptes et services limités dans chaque invité.'},
    {risk: 'Compromission de l’hôte ou de l’hyperviseur', text: 'L’hôte contrôle toutes ses VM, leurs disques et leurs réseaux.', mitigation: 'Disques actifs hors OneDrive ; clés SSH, profil VPN et exports hors Git ; les services sont répartis sur deux PC.'},
    {risk: 'VLAN hopping', text: 'Une trame forge un tag pour sortir de son VLAN.', mitigation: 'SW-B : bridge filtrant, PVID 0, sans VLAN natif ni IP ; ports d’accès PVID 20 et 30.'},
    {risk: 'Exposition des snapshots et sauvegardes', text: 'Une copie contient les mêmes données que la production.', mitigation: 'Datasets chiffrés, compte app-backup limité à son dataset, archives privées ; la restauration a été faite dans une instance isolée puis retirée.'},
    {risk: 'Trafic est-ouest', text: 'Une VM compromise rebondit vers ses voisines.', mitigation: 'Ubuntu et TrueNAS sont sur le même PC mais dans deux VLAN : tout échange passe par OPNsense et ses règles par hôte et par port.'},
    {risk: 'Problème réel rencontré', text: 'Windows était branché sur VMnet0 au lieu de VMnet10 (DNS en échec) ; puis des erreurs HTTPS Windows → InvoiceShelf.', mitigation: 'Carte corrigée vers VMnet10 ; MTU 1400 sur Ubuntu et MSS 1360 limitée à Windows → 8443. La cause racine de liaison reste inconnue.'}
  ],
  measures: [
    'Segmentation : CLIENTS et MGMT non tagués, VLAN 20 SERVEURS et VLAN 30 STOCKAGE sur un seul câble.',
    'OPNsense : 35 règles LAB nommées (28/10), exceptions par hôte et port, refus final journalisé ; pas de NAT entre zones.',
    'VPN OpenVPN : seul HTTPS 8443 autorisé ; 22, 445 et 3001 refusés et journalisés (29/10).',
    'Windows : Defender, pare-feu actif, Sysmon (événements 1/3), audit 4624/4625 (28/10).',
    'Ubuntu : SSH par clé depuis 10.77.99.254 seulement ; iptables LAB-INPUT et DOCKER-USER réappliqués au démarrage ; auditd ; ClamAV.',
    'TrueNAS : SMB chiffré requis, ACL par compte, datasets chiffrés, snapshots.',
    'Journaux OPNsense envoyés à rsyslog sur Ubuntu en TCP 514 ; supervision Prometheus/Grafana HTTPS.'
  ],
  summaries: [
    {title: 'Installation de TrueNAS', items: ['VM NAS-LAB sur PC B : TrueNAS 25.10.7, 6 Gio, 2 vCPU (référence 8 Gio).', 'Disque de démarrage 20 Gio et deux disques de données 20 Gio en miroir : pool tank.', 'Datasets chiffrés projet et app-backups ; snapshots ZFS.', 'Réseau VMnet11, 10.77.30.10/24, passerelle 10.77.30.1 (VLAN 30 via SW-B).', 'SMB chiffrement REQUIRED ; comptes alice (RW), lecteur (RO), bob (lecture du fichier refusée), app-backup (sauvegardes).']},
    {title: 'Application conteneurisée', items: ['Docker 29.1.3 et Compose 2.40.3 dans la VM Ubuntu.', 'Image fixée invoiceshelf/invoiceshelf:2.4.7 ; un seul conteneur applicatif.', 'Proxy Nginx : HTTPS 10.77.20.10:8443 → webapp:8080 sur le réseau Docker privé ; 8080 non publié.', 'SQLite et dossiers persistants locaux : /srv/lab/invoiceshelf/storage et /modules.', 'Sauvegarde : arrêt de webapp, archive, envoi SMB par app-backup ; restauration isolée sur 127.0.0.1:8444.']},
    {title: 'Configuration des machines', items: ['PC A · OPNsense 26.7.7 : WAN em0 (VMnet8), MGMT em1 10.77.99.1, CLIENTS em2 10.77.10.1, TRUNK em3 sans IP avec VLAN 20/30.', 'PC A · Windows Server 2025 : 10.77.10.10/24, passerelle et DNS 10.77.10.1 ; windows_exporter 9182 limité à Ubuntu.', 'PC B · SW-B Alpine : eth1 trunk 20/30, eth2 accès 20 (Ubuntu), eth0 accès 30 (NAS) ; ni IP ni routage.', 'PC B · Ubuntu 26.04.1 : 10.77.20.10/24, MTU 1400, profil LAB-VLAN20 ; 6 conteneurs.', 'PC B · TrueNAS : 10.77.30.10/24, voir ci-dessus.']},
    {title: 'Règles, VPN et VLAN', items: ['MGMT : 10.77.99.254 → pare-feu 443, NAS 443, Ubuntu 22/8443/3001.', 'CLIENTS : Windows → Ubuntu 8443/3001, NAS 445, DNS/NTP de sa passerelle.', 'SERVEURS20 : Ubuntu → Windows 9182, NAS 445, DNS/NTP.', 'STOCKAGE30 : NAS → DNS/NTP de sa passerelle uniquement.', 'OpenVPN UDP 1194, tunnel 10.78.0.0/24 : 8443 seulement ; MGMT désactivé pendant l’essai.', 'VLAN 20 et 30 tagués sur le trunk VMnet12 entre les deux PC.']}
  ]
};
