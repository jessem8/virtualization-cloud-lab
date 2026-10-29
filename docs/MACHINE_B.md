# PC B — référence de configuration

Sanad / sanadzhioua héberge SW-B, Ubuntu et TrueNAS dans VMware Workstation. L'[architecture commune](../README.md) et l'[état B et ses sources](../evidence/PC_B_STATUS.md) complètent la configuration décrite ci-dessous.

## Trois VM et ports locaux

| VM | Allocation observée / référence | Connexion finale |
|---|---|---|
| SW-B / Alpine | 512 Mio ; référence 1 vCPU, disque 2 Gio | Trois cartes, voir ci-dessous |
| UBU-LAB / Ubuntu Desktop 26.04.1 | 4 Gio, disque 40 Gio observés ; ancienne cible 2,5 Gio | VMnet10, 10.77.20.10/24, passerelle 10.77.20.1 |
| NAS-LAB / TrueNAS 25.10.7 | 6 Gio, 2 vCPU observés ; référence 8 Gio et boot 20 Gio + deux données 20 Gio | VMnet11, 10.77.30.10/24, passerelle 10.77.30.1 |

Les 6 Gio TrueNAS restent inférieurs aux 8 Gio de référence ; les relevés de RAM libre sont ponctuels. Aucun changement d'allocation n'est induit par ce document. Les deux disques virtuels du miroir partagent le stockage du PC B.

| Port SW-B observé | VMnet B | Traitement |
|---|---|---|
| eth1 | VMnet12 ponté vers l'Ethernet dédié | Trunk : tags 20 et 30 |
| eth2 | VMnet10 privé | Accès Ubuntu : PVID 20, non tagué |
| eth0 | VMnet11 privé | Accès TrueNAS : PVID 30, non tagué |

Bridge Linux filtrant, PVID par défaut 0, sans VLAN natif. Ports et bridge sans IP de gestion, sans DHCP ni routage ; administration par console. Le NAT temporaire d'installation n'est pas le chemin final décrit. VMnet10 de B est distinct du VMnet10 CLIENTS de A.

## Ubuntu

Le profil réel est **NetworkManager LAB-VLAN20**, interface enp0s17, MTU 1400 enregistrée/retrouvée au reboot. Les anciens conseils Netplan ne décrivent pas cette réalisation.

L'[application](APP.md) conserve SQLite localement ; Nginx publie 8443. La supervision comprend Prometheus, Grafana HTTPS 3001, node-exporter et blackbox-exporter. Rsyslog reçoit TCP 514 depuis OPNsense ; auditd et un scan ClamAV borné ont leurs preuves.

Le filtrage local utilise INPUT et DOCKER-USER, avec chaînes LAB-INPUT/LAB-DOCKER et destination initiale des connexions Docker. Le service lab-firewall réapplique les règles après Docker. La règle MSS 1360 est limitée à Windows → InvoiceShelf ; elle n'est pas un réglage global. Le SSH de gestion par clé est limité à 10.77.99.254 ; mot de passe, kbdinteractive et root sont interdits en configuration.

Les observations de reboot et d'accès figurent dans les [preuves datées B](../evidence/PC_B_2026-10-29.md) et [A](../evidence/PC_A_2026-10-29.md). Elles ne valident pas chaque refus sur chaque interface.

## TrueNAS

Pool miroir `tank`, datasets chiffrés `projet` et `app-backups`. SMB chiffré en transit (REQUIRED) est distinct du chiffrement au repos. Comptes de démonstration : alice en lecture/écriture, lecteur en lecture seule, bob refusé au fichier dans l'essai A. Le compte `app-backup` est réservé au dataset de sauvegarde, distinct du partage de démonstration.

Une restauration de fichier depuis un clone de snapshot a été observée le 28 ; la restauration applicative isolée a été observée le 29. Un snapshot n'est pas une sauvegarde indépendante. Clés et configuration exportées restent privées, comme les archives. Les [archives](archive/README.md) et l'[historique B](../evidence/history/PC_B_STATUS.md) gardent les détails antérieurs.
