# PC B — état consolidé du 29 octobre 2026

Sanad / sanadzhioua. Sources : [notes B du 29](PC_B_2026-10-29.md), [notes A du 29](PC_A_2026-10-29.md) et [historique B conservé](history/PC_B_STATUS.md). Les états antérieurs NAT/préparation et leurs actions en attente sont historiques.

## Configuration et résultats enregistrés

- **SW-B Alpine** : 512 Mio ; trois ports, eth1 trunk VMnet12 avec tags 20/30, eth2 accès Ubuntu VMnet10/PVID20 non tagué, eth0 accès NAS VMnet11/PVID30 non tagué. Bridge et ports sans IP hors loopback ; absence de routage. Persistance observée au redémarrage du 28.
- **Ubuntu Desktop 26.04.1** : allocation observée 4 Gio, disque 40 Gio ; `enp0s17 10.77.20.10/24`, passerelle `10.77.20.1`, profil NetworkManager LAB-VLAN20, MTU 1400. Ubuntu utilise VMnet10 sur B, pas l'ancien VMnet14.
- **TrueNAS 25.10.7** : allocation observée 6 Gio, 2 vCPU ; adresse finale `10.77.30.10/24`, passerelle `10.77.30.1`, VMnet11. Pool miroir tank ; datasets projet et app-backups chiffrés et déverrouillés après reboot rapporté. Export privé des clés/configuration déclaré par Sanad.
- **Réseau commun** : Ethernet B Up 1 Gbit/s ; port Ubuntu et NAS raccordés, pings de chaque invité vers sa passerelle A réussis. Les critères complets de capture/isolation T03/T04 ne sont pas déduits de ces pings.
- **Application** : Docker 29.1.3, Compose 2.40.3 ; InvoiceShelf 2.4.7 avec proxy Nginx sur HTTPS 8443 et backend 8080 interne. SQLite et dossiers persistants locaux à Ubuntu. Facture/PDF observés ; facture toujours présente après recréation. Rôle lecteur visible ; restrictions d'actions rapportées.
- **NAS et sauvegarde** : SMB REQUIRED ; Ubuntu app-backup a listé/envoyé vers le partage réservé. Archive après arrêt du webapp, transfert NAS puis copie récupérée aux empreintes identiques. Société, facture et PDF ouverts dans une instance isolée `127.0.0.1:8444` ; les deux conteneurs de restauration et leur réseau ont ensuite été retirés, sans effacer les archives.
- **Supervision** : Prometheus 3.5.5, Grafana 13.2.4, node-exporter 1.12.1 et blackbox-exporter 0.28.0. Quatre jobs UP, graphiques CPU Ubuntu/Windows et sonde HTTPS. Perte/reprise du node-exporter puis panne/reprise applicative testées séparément. Grafana est passé de HTTP à **HTTPS 3001** ; accès Viewer local puis captures Windows sur A.
- **Sécurité** : journaux OPNsense reçus, marqueur A corrélé et rotation suivie de nouvelles lignes ; auditd avec événement et règle persistante ; ClamAV/freshclam, scan de quatre fichiers, zéro infection/code 0. SSH par clé activé, password/kbdinteractive/root interdits en configuration ; vérifications A liées.
- **Pare-feu et reboot Ubuntu** : chaînes LAB-INPUT et LAB-DOCKER, DOCKER-USER sur destination initiale, blocage SSH IPv6 ciblé sur enp0s17, accès précis aux clients prévus. Service lab-firewall réapplique les règles après Docker. Adresse, MTU, règles/MSS, auditd, rsyslog, SSH et six conteneurs retrouvés après reboot ; accès frais Windows confirmé dans les notes A. La route temporaire de A a ensuite été retirée.

## Difficultés résolues et réserves

L'initialisation InvoiceShelf a rencontré un conflit d'adresse du proxy et un dossier de templates PDF manquant ; les notes enregistrent leur correction puis le PDF visible. Les échecs HTTPS ultérieurs ont conduit à MTU 1400 et à MSS 1360 **uniquement pour `10.77.10.10 → 10.77.20.10:8443`**. Accès final et persistance observés ; cause de liaison/pilote inconnue.

Le certificat reste autosigné/non approuvé par les navigateurs. Les restrictions détaillées des actions InvoiceShelf, Docker Bench, certains refus de sources non autorisées et les critères d'isolation restent non confirmés. Le filtrage Ubuntu décrit est ciblé sur enp0s17 ; il ne prouve pas le filtrage de toute autre interface.

Les 6 Gio TrueNAS observés restent inférieurs aux 8 Gio du plan de référence. Les mesures de RAM sont ponctuelles ; le fonctionnement simultané de plus de cinq heures est rapporté par Jesse, sans mesure de charge. Le miroir et les snapshots restent sur le stockage physique du PC B.

[108 PNG B et index avec empreintes](../screenshots_b/index.csv) ; [index thématique](README.md) ; [matrice avec réserves](../docs/TEST_MATRIX.md). Aucun test ni changement sur B n'a été exécuté pour ce rangement.
