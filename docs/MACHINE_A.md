# PC A — référence de configuration

Jessem / jessem8 héberge OPNsense et Windows dans VMware Workstation. L'[architecture commune](../README.md) et l'[état A et ses sources](../evidence/PC_A_STATUS.md) complètent la configuration décrite ci-dessous.

## VM et interfaces

| VM | Ressources documentées | Rôle |
|---|---|---|
| FW-LAB | 3 Gio, 2 vCPU, disque 20 Gio ; OPNsense 26.7.7 observé | Routage, pare-feu, DNS/NTP, OpenVPN, export des logs |
| WIN-LAB | Cible 4 Gio, 2 vCPU, disque 60 Gio ; Windows Server 2025 observé | Client et contrôles Windows, windows_exporter |

| Interface FW-LAB | Réseau A | Adresse/rôle |
|---|---|---|
| em0 WAN | VMnet8 NAT VMware | DHCP ; WAN simulé |
| em1 MGMT | VMnet13 host-only | 10.77.99.1/24 ; hôte A 10.77.99.254/24, sans passerelle par défaut |
| em2 CLIENTS | VMnet10 privé | 10.77.10.1/24 ; Windows 10.77.10.10, passerelle/DNS .1 |
| em3 TRUNK | VMnet12 ponté vers l'Ethernet dédié | Sans IP ; VLAN 20 et 30 tagués |
| vlan01 / vlan02 sur em3 | SERVEURS20 / STOCKAGE30 | 10.77.20.1/24 / 10.77.30.1/24 |

CLIENTS et MGMT sont non tagués. Les numéros VMnet sont locaux ; B héberge Ubuntu et le switch. Les liaisons Ethernet dédiées et les règles entre zones sont détaillées dans [LIAISON](LIAISON.md).

## Services et sécurité

Defender, Windows Firewall, Sysmon, audit des logons et windows_exporter ont des observations datées. L'exporter TCP 9182 est limité en configuration à Ubuntu 10.77.20.10 ; la collecte distante est montrée dans les preuves B. Windows utilise InvoiceShelf HTTPS 8443, Grafana HTTPS 3001 et SMB TrueNAS 445.

Le client OpenVPN est sur **l'hôte A**, via le WAN VMnet8, pas dans Windows Server. Tunnel 10.78.0.0/24, UDP 1194, certificats dédiés, TLS 1.3/AES-GCM observés lors de la connexion. Le profil testé contient explicitement les routes serveurs/stockage ; leur poussée serveur pour de futurs exports reste à confirmer. Le VPN autorise InvoiceShelf et refuse SSH/SMB/Grafana.

Pendant l'essai VPN, MGMT a été désactivé pour supprimer le contournement. À la clôture, MGMT est revenu Up ; la route temporaire 10.77.20.10/32, l'adresse et les routes VPN sont absentes. Ne pas déduire d'un ancien point connecté que le VPN fonctionne encore maintenant.

## Préservation

Les disques actifs restent hors OneDrive ; clés SSH, profil VPN et exports restent hors Git. Préserver les autres VM et le Wi-Fi. Les versions, adresses WAN et ressources libres sont des relevés datés, pas des valeurs à réappliquer aveuglément. Les anciennes procédures et observations sont accessibles dans les [archives](archive/README.md) et l'[historique A](../evidence/history/PC_A_STATUS.md).
