# PC A — état consolidé du 29 octobre 2026

Jessem / jessem8. Ce résumé recoupe les [notes A du 29](PC_A_2026-10-29.md), les [notes B du 29](PC_B_2026-10-29.md) et l'[historique A du 27/28](history/PC_A_STATUS.md). Les anciens états/erreurs sont conservés dans ces sources ; leurs suites en attente ne sont plus des actions actuelles.

## Configuration et résultats enregistrés

- **Deux VM sur A** : FW-LAB OPNsense 26.7.7 et WIN-LAB Windows Server 2025 Standard Evaluation/Desktop Experience. WAN em0 sur VMnet8 NAT ; MGMT em1 `10.77.99.1` ; CLIENTS em2 `10.77.10.1` ; TRUNK em3 sans IP, VLAN 20/30 `.1`. Windows est `10.77.10.10/24` sur VMnet10.
- **Sécurité Windows, 28 octobre** : sorties invitées pour Defender et scan rapide, pare-feu actif/journalisé, Sysmon 1/3, audit 4624/4625, windows_exporter local HTTP 200 ; accès DNS/HTTPS via OPNsense après correction VMnet0 → VMnet10. Captures anciennes partiellement non récupérées.
- **Réseau commun, 29 octobre** : captures VLAN 20 taguées et pings Ubuntu/TrueNAS vers leurs passerelles à 4/4 après diagnostic Realtek et règles ICMP limitées. L'ensemble des critères T03/T04 n'est pas établi.
- **SMB depuis Windows** : Alice lit/écrit ; lecteur lit mais ne crée pas de fichier ; Bob s'authentifie au partage mais ne lit pas le fichier. Une nouvelle session a montré `Encrypted=True`. NTP Windows a confirmé `10.77.10.1` et une synchronisation réussie.
- **VPN sans contournement MGMT** : connecté `10.78.0.2`, routes via `10.78.0.1`, InvoiceShelf accessible ; TCP 22/445/3001 refusés avec marqueurs OPNsense reçus sur B. SSH a été retesté avec un socket actif. Après déconnexion : application inaccessible, adresse/routes VPN absentes. WAN VMware simulé.
- **SSH MGMT** : accès par clé avec empreinte serveur épinglée avant/après durcissement et après reboot ; négociation password-only refusée. Root interdit dans la configuration B, sans essai root distinct.
- **Après reboot Ubuntu** : captures Windows vers 18:00 montrant InvoiceShelf authentifié avec données et Grafana HTTPS, cibles/sonde UP et graphes alimentés. Ces observations supersèdent les anciens échecs HTTPS.
- **Nettoyage final A** : route temporaire `10.77.20.10/32` absente, VMnet13 Up, adresse `10.78.0.2` et routes VPN absentes lors de la relecture. Arrêt ultérieur des VM géré par l'utilisateur, non constaté ici.

## Limites conservées

MTU Ubuntu 1400 et MSS 1360 limitée à Windows → InvoiceShelf sont des contournements opérationnels persistants ; cause racine inconnue. Certificats autosignés non approuvés par les navigateurs. Les droits détaillés InvoiceShelf sont rapportés par Jessem/Sanad ; le seul affichage Grafana Viewer ne prouve pas toute l'autorisation. Docker Bench et les critères non confirmés restent dans la [matrice](../docs/TEST_MATRIX.md).

Jessem rapporte plus de cinq heures avec les cinq VM : durée déclarée, sans mesure formelle de performance. La configuration de poussée des routes pour de futurs exports VPN et les mises à jour Windows encore proposées ne sont pas confirmées ; le profil effectivement testé contenait les routes explicites.

## Captures et remise

[13 PNG A et leur index](../screenshots_a/index.csv), conservés intacts ; les anciennes images Sysmon/Defender restent incomplètes. [Index thématique des preuves](README.md). L'[issue #2](https://github.com/jessem8/virtualization-cloud-lab/issues/2) a été clôturée après remise. Aucun nouveau test ni changement hôte/invité n'a été exécuté pendant le rangement. Clés SSH, profil VPN et sauvegardes restent hors Git.
