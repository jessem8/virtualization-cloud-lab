# Laboratoire de virtualisation et cloud

## Exigences du projet

Le projet consiste à concevoir et expliquer une infrastructure virtualisée : réseau segmenté, systèmes Windows/Linux sécurisés, stockage NAS, application en conteneurs, supervision et accès VPN. Les exigences d'origine sont conservées dans le [sujet PDF](requirements/originals/Document.pdf) et la [grille d'évaluation XLSX](<requirements/originals/Project Assessment Grid (1).xlsx>).

La grille de groupe (onglet `G1`, cellules `E4:E16`) répartit les **20 points** ainsi :

| Critère d'origine | Maximum |
|---|---:|
| Architecture physique et logique | 1 |
| Déploiement des VM et de l'application conteneurisée | 2 |
| Pare-feu et politiques de sécurité | 4 |
| VPN/VLAN et accès autorisés | 2 |
| Services internes : Sysmon, syslog, antivirus, chiffrement/snapshots NAS, Prometheus/Grafana | 5 |
| Démonstration en direct | 2 |
| Qualité du rapport/documentation des configurations | 4 |

Le sujet utilise le nom FreeNAS ; la VM NAS déployée utilise TrueNAS. Le libellé écrit « rapport » est conservé ici pour restituer le barème original. Les clarifications du professeur transmises par Jessem précisent que **la présentation remplace le rapport écrit séparé** ; la mention « VM-to-VM escape workshop » désigne la **couche de sécurité**, pas un exercice d'évasion de VM. Aucun test de résistance à une évasion d'hyperviseur n'est documenté.

Soutenance prévue le **30 octobre 2026**, heure de Tunis : durée prévue d'environ **15 minutes de présentation**, dans un total enregistré de **30 minutes maximum, questions comprises**. La grille donne une note de groupe sur 20 ; la note individuelle comprend 20 % de suivi et 80 % de questions/réponses. La note finale combine normalement 60 % individuel et 40 % groupe ; si la note de groupe dépasse l'individuelle de plus de 3 points, la pondération devient 90 % / 10 %. Les formules sont celles de l'onglet `G1` (`D4`, `G4`, `F17`). Le modèle contient des cellules individuelles sans formule et une ambiguïté de saisie du sous-total des services : il est conservé intact, sans recalcul ni nouveau barème.

## Modules du projet

Le [parcours par modules](docs/MODULES_DU_PROJET.md) explique le fonctionnement de l'ensemble dans l'ordre prévu pour la présentation. Chaque module relie une explication simple, la réalisation documentée et les preuves à montrer.

| Ordre | Module |
|---|---|
| 1 | [Contexte et exigences](docs/MODULES_DU_PROJET.md#module-1) |
| 2 | [Virtualisation et architecture](docs/MODULES_DU_PROJET.md#module-2) |
| 3 | [Réseau et VLAN](docs/MODULES_DU_PROJET.md#module-3) |
| 4 | [Application et Docker](docs/MODULES_DU_PROJET.md#module-4) |
| 5 | [Sécurité et VPN](docs/MODULES_DU_PROJET.md#module-5) |
| 6 | [Stockage et récupération](docs/MODULES_DU_PROJET.md#module-6) |
| 7 | [Supervision et journaux](docs/MODULES_DU_PROJET.md#module-7) |
| 8 | [Résultats, difficultés et limites](docs/MODULES_DU_PROJET.md#module-8) |
| 9 | [Bilan et contributions](docs/MODULES_DU_PROJET.md#module-9) |

Le guide propose une répartition de 15 minutes et une correspondance avec les demandes du sujet. Le tableau des responsabilités reste à compléter ; la préparation Q/A et l'évolution du site 3D restent séparées.

## Présentation du projet

Une petite entreprise fictive utilise **InvoiceShelf 2.4.7** pour ses clients, factures et PDF. Le laboratoire illustre le contrôle des accès, la supervision du service et la récupération des données. L'infrastructure repose sur **deux PC physiques avec VMware Workstation et cinq VM**, sans infrastructure cloud publique.

L'essentiel de la réalisation a été effectué par **Jessem sur le PC A** et **Sanad sur le PC B**, avec l'assistance de Codex. Jessem a mis en place OPNsense et Windows, puis documenté les accès Windows, SMB et VPN. Sanad a mis en place SW-B, Ubuntu, TrueNAS, l'application, les sauvegardes et la supervision. Ils ont réalisé ensemble l'intégration et les diagnostics du 29 octobre. Les [preuves A](evidence/PC_A_STATUS.md) et [preuves B](evidence/PC_B_STATUS.md) précisent ce qui a été observé ou seulement rapporté.

## Architecture

| PC physique | VM | Fonction |
|---|---|---|
| **[A — Jessem / jessem8](docs/MACHINE_A.md)** | **FW-LAB : OPNsense** | Route et filtre entre les réseaux ; DNS/NTP ; terminaison OpenVPN ; journaux de pare-feu. |
| A | **WIN-LAB : Windows Server 2025** | Client de démonstration : navigateur InvoiceShelf/Grafana et SMB ; Defender, Sysmon, audit ; windows_exporter. |
| **[B — Sanad / sanadzhioua](docs/MACHINE_B.md)** | **SW-B : Alpine Linux** | Switch virtuel de niveau 2 : ajoute/retire les tags VLAN aux ports d'accès. Sans IP de gestion ni routage. |
| B | **UBU-LAB : Ubuntu** | Docker, proxy Nginx, InvoiceShelf, SQLite locale persistante, supervision et réception des journaux. |
| B | **NAS-LAB : TrueNAS** | Partages SMB, comptes/ACL, datasets chiffrés, snapshots et archives de sauvegarde. |

Une **VM** possède son système invité et son disque virtuel ; VMware Workstation l'exécute sur le PC. Un **conteneur Docker** partage le noyau de la VM Ubuntu : les conteneurs ne sont donc pas des VM supplémentaires. Les six conteneurs constatés en fin de séance sont le proxy, InvoiceShelf et les quatre composants de supervision.

Dans Ubuntu, **Nginx HTTPS 8443 → [InvoiceShelf](docs/APP.md) 8080 interne**. SQLite et les dossiers persistants restent sur le disque d'Ubuntu, hors du cycle de vie du conteneur. **Le NAS reçoit des archives après arrêt de l'application ; il n'héberge pas la base SQLite active.** Prometheus collecte ; Grafana affiche ; node-exporter fournit les métriques Ubuntu ; blackbox-exporter sonde HTTPS ; windows_exporter tourne dans Windows.

### Réseaux et adresses

| Réseau | Connexions et adresses | Transport |
|---|---|---|
| **CLIENTS** | A : Windows `10.77.10.10` ↔ OPNsense `10.77.10.1` | VMnet10 local à A, non tagué. Ce n'est pas VLAN 10. |
| **MGMT** | A : hôte `10.77.99.254` ↔ OPNsense `10.77.99.1` | VMnet13 local à A, non tagué. Ce n'est pas VLAN 99. |
| **SERVEURS / VLAN 20** | B : Ubuntu `10.77.20.10` ; passerelle OPNsense A `10.77.20.1` | Accès non tagué VMnet10 sur B ; tag 20 sur le trunk. |
| **STOCKAGE / VLAN 30** | B : TrueNAS `10.77.30.10` ; passerelle OPNsense A `10.77.30.1` | Accès non tagué VMnet11 sur B ; tag 30 sur le trunk. |
| **TRUNK physique** | OPNsense A ↔ Ethernet dédié ↔ SW-B B | VMnet12 de chaque PC ponté vers sa carte dédiée ; tags 802.1Q **20 et 30**, sans VLAN natif ni IP sur le parent. |
| **WAN simulé / VPN** | WAN OPNsense sur NAT VMware VMnet8 ; tunnel `10.78.0.0/24` | Client OpenVPN sur l'hôte A, UDP 1194 ; Internet des hôtes par Wi-Fi. |

Les réseaux internes ci-dessus utilisent des masques /24. **Les numéros VMnet sont locaux à chaque PC** : VMnet10 sur A est CLIENTS ; VMnet10 sur B est l'accès Ubuntu au VLAN 20. L'ancien VMnet14 de B est dépassé. Ce sont les tags et le câble qui relient les PC, pas l'égalité des numéros VMnet.

### Trajets réseau

- **Windows → facture** : Windows A → CLIENTS → OPNsense (autorisation TCP 8443 et routage) → trunk tag 20 → SW-B B (retrait du tag) → Ubuntu → Nginx → InvoiceShelf → SQLite locale. La réponse suit le chemin inverse.
- **Ubuntu → sauvegarde NAS** : Ubuntu B → SW-B (ajout tag 20) → câble vers **OPNsense A** → routage/filtrage → câble retour tag 30 → SW-B B (retrait du tag) → TrueNAS B, TCP 445. Même sur le même PC, les deux VM sont dans des sous-réseaux différents : **B/VLAN 20 → A → B/VLAN 30**.
- **Supervision** : Prometheus sur Ubuntu B → VLAN 20 → OPNsense A → Windows `9182` ; Grafana présente les métriques sur HTTPS `3001`. Les cibles locales Ubuntu et la sonde applicative complètent la collecte.
- **Journaux** : OPNsense `10.77.20.1` → Ubuntu `10.77.20.10:514/TCP` ; rsyslog conserve et fait tourner le journal.
- **VPN** : hôte A → WAN VMware simulé → OpenVPN/OPNsense → VLAN 20 → InvoiceShelf `8443`. SSH `22`, SMB `445` et Grafana `3001` sont refusés depuis le VPN ; le chemin MGMT a été désactivé pendant l'essai.

La [politique réseau](docs/LIAISON.md) définit les passages entre zones. OPNsense les contrôle ; SW-B commute les trames dans chaque VLAN ; les pare-feu des invités, les rôles InvoiceShelf et les ACL TrueNAS ajoutent leurs propres contrôles. Il n'y a pas de NAT entre zones du laboratoire. Le miroir de deux disques virtuels TrueNAS et les snapshots restent sur le stockage du PC B : ils ne protègent pas contre sa perte.

## Résultats et difficultés rencontrées

Les notes du **29 octobre** enregistrent l'accès InvoiceShelf et Grafana depuis Windows après redémarrage Ubuntu, la sauvegarde/restauration isolée d'une facture et de son PDF, les tests SMB et VPN, la collecte réelle et les deux cycles de panne/reprise. L'[index des preuves](evidence/README.md) relie chaque sujet aux notes et aux captures ; la [matrice T01–T23](docs/TEST_MATRIX.md) conserve les contrôles partiels ou non confirmés.

Captures associées : [InvoiceShelf après redémarrage](screenshots_a/12-invoiceshelf-after-reboot.png), [Grafana après redémarrage](screenshots_a/13-grafana-after-reboot.png) et [PDF restauré](screenshots_b/codex-clipboard-36812d8e-4de8-498e-8237-d88a153100b7.png).

Trois difficultés expliquent la configuration finale :

- Une mauvaise association VMnet0/VMnet10 a empêché le réseau Windows ; la carte a été corrigée vers CLIENTS.
- Le transport VLAN et les pings passerelles ont nécessité des diagnostics Realtek/802.1Q puis des règles ICMP limitées. Les observations montrent ensuite les deux passerelles joignables ; elles ne valident pas toute l'isolation des ports.
- Les expirations/réinitialisations HTTPS ont été contournées par **MTU 1400 sur Ubuntu** et **MSS 1360 limitée à Windows → InvoiceShelf**. Leur persistance et l'accès final sont documentés ; **la cause racine de liaison/pilote reste inconnue**.

Les certificats du labo sont autosignés et non approuvés par les navigateurs. Les restrictions détaillées du rôle InvoiceShelf ont été rapportées par Jessem/Sanad ; chaque action refusée n'a pas sa preuve indépendante. Docker Bench, certains refus réseau et les mesures formelles de performance restent non confirmés. Les cinq VM auraient fonctionné ensemble plus de cinq heures selon Jessem : ce témoignage ne remplace pas une mesure de charge.

## Dépôt privé, branche du présentateur et site public

Ce dépôt **`virtualization-cloud-lab` reste privé**. Deux branches sont maintenues : **`main`** pour la documentation et les preuves, **`presenter`** pour le présentateur. La collecte `evidence/joint-lab-20261029` a été intégrée à `main` ; son historique est conservé. Les règles de contribution sont décrites dans la [coordination Git](docs/COORDINATION.md).

Le site existant est hébergé **dans un autre dépôt public**, [`jessem8/virtualization-lab-3d`](https://github.com/jessem8/virtualization-lab-3d), par GitHub Pages depuis sa branche `main`, dossier racine. La branche `presenter` de ce dépôt privé ne déclenche pas ce déploiement. Le script [`diagram/publish.mjs`](diagram/publish.mjs) copie uniquement la page et ses assets vers un clone public ; la publication demande ensuite un commit/push distinct.

Lancement local : `powershell -NoProfile -File diagram/start.ps1`, puis [http://127.0.0.1:3187/](http://127.0.0.1:3187/). Le [lanceur PowerShell](diagram/start.ps1), la [page 3D](docs/network-lab-3d.html) et le [schéma SVG](docs/network-lab-2d.svg) sont conservés dans le dépôt. Le modèle [topology.json](docs/network-assets/topology.json) et certains [scénarios](diagram/scenarios.mjs) contiennent encore VMnet14 et d'anciens états « préparé / non testé ». L'état du laboratoire est décrit dans les notes du 29 octobre ; les animations restent des simulations. Les contrôles du présentateur sont documentés dans [DIAGRAM_VERIFICATION](evidence/DIAGRAM_VERIFICATION.md).

Les [archives documentaires](docs/archive/README.md) conservent l'accès aux propositions et anciens points d'arrêt. [PROJECT_STATE](PROJECT_STATE.md) et [BUILD_PLAN](BUILD_PLAN.md) consignent l'état et le périmètre du projet. Le dépôt exclut les mots de passe, clés, profils VPN, sauvegardes privées et images de VM.
