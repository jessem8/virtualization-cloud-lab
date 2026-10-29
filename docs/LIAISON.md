# Réseau et règles — référence du 29 octobre 2026

Lire d'abord l'[architecture complète](../README.md). Les [preuves A](../evidence/PC_A_2026-10-29.md) et [B](../evidence/PC_B_2026-10-29.md) décrivent les essais ; la [matrice](TEST_MATRIX.md) précise leurs limites. Cette page explique le réseau documenté, sans prescrire un nouveau test ni un changement de configuration.

## Raccordement des deux hôtes

A héberge OPNsense/Windows ; B héberge SW-B/Ubuntu/TrueNAS. Sur chaque PC, VMnet12 est ponté explicitement vers la carte Ethernet dédiée, avec VMware Bridge Protocol. Ce câble transporte les tags 802.1Q **20 et 30**, sans VLAN natif. Les hôtes gardent leur Wi-Fi pour Internet. Les réglages dédiés documentés excluent les liaisons IP hôte, le partage Microsoft et ICS ; le câble n'est pas une interface IP de gestion.

| Hôte | VMnet local | Connexions et adressage |
|---|---|---|
| A | VMnet8 NAT | WAN OPNsense en DHCP ; côté WAN simulé du client VPN hôte |
| A | VMnet13 host-only | MGMT non tagué : hôte 10.77.99.254/24 ↔ OPNsense 10.77.99.1 |
| A | VMnet10 privé | CLIENTS non tagué : Windows 10.77.10.10/24 ↔ OPNsense 10.77.10.1 |
| A | VMnet12 ponté | OPNsense em3 sans IP ; VLAN20 10.77.20.1/24 et VLAN30 10.77.30.1/24 |
| B | VMnet12 ponté | SW-B eth1, trunk tags 20/30 |
| B | VMnet10 privé | SW-B eth2 accès/PVID20 non tagué ↔ Ubuntu 10.77.20.10/24 |
| B | VMnet11 privé | SW-B eth0 accès/PVID30 non tagué ↔ TrueNAS 10.77.30.10/24 |

Les VM utilisent OPNsense `.1` de leur sous-réseau comme passerelle ; DNS `.1` est le contrat documenté (DNS Windows testé, valeur/résolution finale B pas entièrement observée). Les numéros VMnet n'ont de sens qu'à l'intérieur de leur hôte. **MGMT n'est pas VLAN99, CLIENTS n'est pas VLAN10, et B utilise VMnet10 au lieu de l'ancien VMnet14.**

SW-B commute au niveau 2 : bridge filtrant, sans IP/routage, PVID par défaut 0 ; il ajoute le tag au départ d'un port d'accès et le retire à l'arrivée. OPNsense route les sous-réseaux et filtre à l'entrée de chaque interface ; les réponses des connexions permises sont suivies par état. Pas de NAT entre zones internes.

## Politique documentée

| Source | Destination | Service permis |
|---|---|---|
| MGMT hôte A 10.77.99.254 | OPNsense / administration TrueNAS | HTTPS 443 |
| MGMT hôte A | Ubuntu | SSH 22 par clé, InvoiceShelf HTTPS 8443, Grafana HTTPS 3001 |
| Windows 10.77.10.10 | Ubuntu | InvoiceShelf HTTPS 8443 ; Grafana HTTPS 3001, compte Viewer |
| Windows | TrueNAS 10.77.30.10 | SMB TCP 445, puis contrôle des comptes/ACL |
| Ubuntu 10.77.20.10 | Windows | windows_exporter TCP 9182 |
| OPNsense 10.77.20.1 | Ubuntu | Rsyslog TCP 514 |
| Ubuntu | TrueNAS | SMB TCP 445, compte app-backup/dataset réservé |
| Client hôte A côté WAN VMnet8 | WAN OPNsense | OpenVPN UDP 1194 |
| VPN 10.78.0.0/24 | Ubuntu | InvoiceShelf HTTPS TCP 8443 |
| Invités prévus | Passerelle de leur zone | DNS 53 et NTP 123 |
| Invités prévus | Internet hors réseaux privés | HTTP/HTTPS de mises à jour |

Les exceptions précises précèdent les blocs RFC1918 puis les règles de sortie et refus finaux journalisés. Les 35 règles initiales relues le 28 sont décrites dans l'[historique A](../evidence/history/PC_A_STATUS.md) ; deux règles ICMP diagnostiques limitées aux invités vers leur passerelle ont été ajoutées le 29. Ce tableau est une politique, pas la preuve indépendante de chaque ligne.

VPN → SSH22, NAS445 et Grafana3001 : refus observés avec journaux, SSH retesté en écoute. Les autres refus prévus (dont WAN direct, source non autorisée vers pare-feu Ubuntu et isolation des tags d'accès) gardent leur statut dans la matrice. Les pare-feu Windows/Ubuntu et ACL/permissions applicatives sont des contrôles supplémentaires.

## Chemins et points de contrôle

- Windows A → CLIENTS → OPNsense A → trunk tag20 → SW-B B → Ubuntu : Nginx 8443, puis webapp 8080 privé.
- Ubuntu B → accès20 SW-B → tag20 vers A → OPNsense (routage/filtrage) → tag30 retour B → SW-B → accès30 → NAS. **Deux passages sur le câble pour atteindre un autre sous-réseau du même PC.**
- Ubuntu B → OPNsense A → Windows 9182 pour les métriques ; OPNsense → Ubuntu 514 pour les logs.
- VPN hôte A → WAN VMware → OPNsense → VLAN20 → application. MGMT désactivé pendant ce test ; restauré ensuite. Le WAN de l'essai n'est pas Internet public.

## Diagnostic conservé

Les captures initiales ont montré des tags manquants côté A, puis des requêtes/réponses ARP taguées après réglage MonitorModeEnabled des cartes Realtek. Les pings restaient soumis aux règles de passerelle : deux exceptions ICMP précises ont conduit à des réponses 4/4 pour Ubuntu et TrueNAS. Ces succès ne couvrent pas toute la capture bidirectionnelle exigée par T03 ni T04.

Les erreurs HTTPS ultérieures ont été contournées par MTU Ubuntu 1400 et MSS 1360 limitée à Windows → InvoiceShelf, persistantes au reboot. La cause racine n'est pas démontrée. Aucun changement de pilote ou de règle n'est demandé par ce document.

La route de gestion temporaire 10.77.20.10/32 a été retirée en fin de séance ; les routes/adresse VPN sont absentes et VMnet13 Up dans la dernière lecture A. Les anciens guides d'ajout de routes ne sont pas l'état final à recréer.
