# Modules du projet et ordre de présentation

Le fil conducteur est une facture : un utilisateur l'ouvre, le réseau contrôle son accès, le serveur la traite, les données sont protégées et la supervision observe le service. Les neuf modules ci-dessous expliquent l'ensemble avant les détails de chaque machine.

Les résultats décrits proviennent des observations des 28 et 29 octobre 2026. Les explications simples reprennent les points clarifiés dans les échanges du groupe ; les faits techniques restent rattachés aux [preuves](../evidence/README.md). Ce document n'est pas un nouvel essai du laboratoire.

## Vue du parcours

| Ordre | Module | Ce que le public doit comprendre | Durée indicative |
|---|---|---|---|
| 1 | [Contexte et exigences](#module-1) | Le besoin de l'entreprise et le résultat attendu. | 1 min |
| 2 | [Virtualisation et architecture](#module-2) | Deux PC, cinq VM et des conteneurs dans Ubuntu. | 1 min |
| 3 | [Réseau et VLAN](#module-3) | Où passe une requête et qui décide de son passage. | 2 min |
| 4 | [Application et Docker](#module-4) | Comment la facture arrive au navigateur et où elle est conservée. | 2 min |
| 5 | [Sécurité et VPN](#module-5) | Les protections réseau, système et applicatives. | 3 min |
| 6 | [Stockage et récupération](#module-6) | Qui accède aux fichiers et comment retrouver les données. | 2 min |
| 7 | [Supervision et journaux](#module-7) | Comment observer les machines, les accès et une panne. | 1 min 30 |
| 8 | [Résultats, difficultés et limites](#module-8) | Ce qui a fonctionné, ce qui a été contourné et ce qui reste incertain. | 1 min 30 |
| 9 | [Bilan et contributions](#module-9) | Le résultat d'ensemble et le travail réellement réalisé. | 1 min |

Total indicatif : **15 minutes**, dans le plafond enregistré de **30 minutes incluant les questions**. Les durées sont une proposition d'organisation, pas une nouvelle consigne du professeur. L'ordre est commun à la lecture des documents et à la future présentation 3D ; il n'est pas encore implémenté par ce document dans le site.

<a id="module-1"></a>
## 1. Contexte et exigences

Une petite entreprise a besoin de créer des factures, partager des fichiers, limiter les accès et retrouver ses données après un incident. Le projet construit cette infrastructure à petite échelle sur deux PC.

Le [sujet original](../requirements/originals/Document.pdf) demande Windows, Ubuntu, un NAS, une application Docker, un pare-feu, des VLAN, un VPN, des protections internes, de la supervision, un schéma, des configurations documentées, une démonstration et un tableau des responsabilités. Le [barème original](<../requirements/originals/Project Assessment Grid (1).xlsx>) attribue des points à ces réalisations et à leur explication.

Deux clarifications du professeur, transmises par Jessem, gouvernent les livrables : la présentation remplace le rapport écrit séparé ; le libellé « VM-to-VM escape workshop » désigne la couche de sécurité. Cela ne constitue pas une demande de démonstration d'évasion d'hyperviseur.

**À montrer :** la vue d'ensemble et le besoin de l'entreprise. **Message oral :** « Nous avons construit une infrastructure virtualisée pour utiliser une application de facturation avec des accès contrôlés, des données récupérables et une supervision. »

Le laboratoire n'utilise pas de cloud public. Ses services sont hébergés sur les deux PC. Le choix précis de cinq VM et d'Alpine est celui de cette architecture, pas un nombre de machines imposé explicitement par le sujet.

<a id="module-2"></a>
## 2. Virtualisation et architecture

Un PC fournit les ressources physiques. VMware Workstation, hyperviseur de type 2 exécuté sur le système hôte, permet d'y faire fonctionner plusieurs ordinateurs virtuels. Chaque VM a son système invité, sa mémoire allouée, son disque et ses cartes virtuelles.

| PC | VM | Explication simple |
|---|---|---|
| PC A | OPNsense / FW-LAB | Le point de passage entre réseaux : il route et filtre. |
| PC A | Windows / WIN-LAB | Le poste qui utilise les services et fournit des événements et métriques Windows. |
| PC B | Alpine / SW-B | Le switch qui transporte les VLAN vers les bons ports. |
| PC B | Ubuntu / UBU-LAB | Le serveur qui exécute l'application et la supervision. |
| PC B | TrueNAS / NAS-LAB | Le stockage partagé, les permissions et les sauvegardes. |

À l'intérieur d'Ubuntu, Docker exécute les conteneurs. Ceux-ci partagent le noyau Linux de cette VM ; ils ne sont pas cinq ou six nouvelles VM. Les six conteneurs enregistrés en fin de séance correspondent au proxy Nginx, à InvoiceShelf et aux quatre composants de supervision.

**À montrer :** les deux hôtes et les cinq VM, puis la relation Ubuntu → Docker → services. Le [schéma 2D existant](network-lab-2d.svg) et le [présentateur 3D](network-lab-3d.html) sont des illustrations ; certains libellés du présentateur restent anciens. Les références actuelles sont [Machine A](MACHINE_A.md) et [Machine B](MACHINE_B.md).

**Message oral :** « Les deux PC hébergent cinq systèmes distincts ; plusieurs services sont ensuite regroupés dans la VM Ubuntu. »

<a id="module-3"></a>
## 3. Réseau et VLAN

Les réseaux séparent les usages. CLIENTS relie Windows au pare-feu ; MGMT sert à l'administration depuis l'hôte A. Ces deux réseaux VMware sont non tagués : leurs adresses ne les transforment pas en VLAN 10 ou 99.

Le câble Ethernet entre les PC transporte deux VLAN réels, identifiés par les tags 802.1Q : **20 pour Ubuntu**, **30 pour TrueNAS**. Le trunk est ce lien qui porte plusieurs VLAN. Un port d'accès remet à sa VM des trames non taguées appartenant à son VLAN.

Alpine SW-B commute les trames dans les VLAN ; il ne route pas entre sous-réseaux. OPNsense connaît leurs passerelles et applique les règles de passage. Les numéros VMnet sont locaux : VMnet10 sur A est CLIENTS ; VMnet10 sur B relie Ubuntu au port d'accès VLAN 20.

Le parcours d'une facture est :

```text
Windows A (10.77.10.10)
  → OPNsense A : autorisation et routage
  → câble Ethernet, tag VLAN 20
  → SW-B B : port d'accès, retrait du tag
  → Ubuntu B (10.77.20.10), HTTPS 8443
```

Le parcours d'une sauvegarde est différent :

```text
Ubuntu B → SW-B → câble, VLAN 20 → OPNsense A
         → câble retour, VLAN 30 → SW-B → TrueNAS B
```

Ubuntu et TrueNAS sont sur le même PC, mais dans deux sous-réseaux. Le détour par A impose le passage au point de routage et de filtrage. Le NAT sert à la sortie WAN lorsque nécessaire ; il n'est pas utilisé entre les zones internes.

**À montrer :** un trajet à la fois, puis la [capture d'ARP tagué 20](../screenshots_a/04-vlan20-tagged-arp.png). Les pings passerelles et les services inter-PC sont documentés dans les [notes A](../evidence/PC_A_2026-10-29.md) et [B](../evidence/PC_B_2026-10-29.md). Cette capture ne prouve pas à elle seule tout le transport VLAN 30 ni le rejet d'un tag non autorisé ; T03/T04 gardent leurs réserves dans la [matrice](TEST_MATRIX.md).

**Message oral :** « SW-B sépare et commute les VLAN ; OPNsense décide des communications entre réseaux. »

<a id="module-4"></a>
## 4. Application et Docker

InvoiceShelf 2.4.7 est l'application de l'entreprise fictive : clients, factures et PDF. Déployer signifie ici installer les composants, les configurer et démarrer le service sur Ubuntu.

Docker fournit un environnement reproductible à partir d'une image. Le conteneur est l'instance exécutée de cette image. Le proxy Nginx reçoit HTTPS sur **8443** et relaie vers InvoiceShelf sur **8080**, à l'intérieur du réseau Docker privé. Le navigateur ne rejoint pas directement ce backend.

SQLite est la base de données de l'application. La base et les fichiers sont conservés dans des dossiers persistants sur Ubuntu. Recréer le conteneur sans supprimer ces dossiers laisse les données disponibles. Cette persistance locale n'est pas encore une sauvegarde indépendante.

**À montrer :** l'application depuis Windows, une facture fictive et son PDF ; [capture facture/PDF](../screenshots_a/11-invoiceshelf-invoice-preview.png). La [facture visible après recréation](../screenshots_b/codex-clipboard-60d57685-6aa5-4206-9e92-6f2fcdb8e492.png) illustre un résultat distinct. Le PDF après cette recréation n'a pas été montré séparément.

Les comptes applicatifs ajoutent des droits après l'accès réseau. Un rôle lecteur a été montré ; les restrictions détaillées ont été rapportées par Jessem/Sanad, sans capture indépendante de chaque action refusée.

**Message oral :** « Nginx reçoit la connexion chiffrée, InvoiceShelf traite la facture et SQLite conserve ses données sur le stockage persistant d'Ubuntu. »

Les chemins et le contrat technique sont dans [APP](APP.md). La présence d'InvoiceShelf ne valide pas l'atelier Docker du cours, l'inspection du digest et des couches ni Docker Bench : T13 reste non confirmé.

<a id="module-5"></a>
## 5. Sécurité et VPN

La sécurité répond à plusieurs risques : un service exposé inutilement, un déplacement vers une autre VM, un compte trop puissant, des données interceptées, une activité non tracée ou la perte d'un hôte. La virtualisation conserve aussi une dépendance à l'hyperviseur et au stockage physique.

Une couche limite une partie de ces risques ; les autres prennent le relais à un autre niveau.

| Couche | Réalisation documentée | Fonction |
|---|---|---|
| Réseau | Segmentation et règles OPNsense | Limiter qui peut joindre quel service. |
| Windows | Defender, Windows Firewall, Sysmon et audit | Protéger l'invité et observer processus, connexions et logons. |
| Ubuntu | SSH par clé, iptables, filtrage Docker, auditd et ClamAV | Limiter l'administration et les entrées ; tracer les événements. |
| Application et fichiers | Rôles InvoiceShelf et ACL TrueNAS | Autoriser des actions après authentification. |
| Communication | HTTPS, SMB chiffré et OpenVPN | Chiffrer les échanges concernés. |
| Observation et récupération | Journaux, supervision, snapshots et archive restaurée | Détecter des incidents et retrouver des données. |

Sysmon enregistre des événements détaillés ; il ne remplace pas Defender. Auditd trace des activités Linux. Le filtrage Ubuntu contrôle INPUT et le trafic transféré vers les ports Docker via DOCKER-USER : INPUT seul ne couvre pas ces publications. Les essais et leur portée sont détaillés dans la [matrice](TEST_MATRIX.md), notamment T06–T11.

Le client OpenVPN tourne sur **l'hôte A**, pas dans la VM Windows. Il rejoint le WAN simulé VMware et reçoit une adresse du réseau 10.78.0.0/24. Le tunnel chiffre la connexion, mais les règles ne lui accordent pas tous les droits :

| Depuis le VPN | Résultat enregistré |
|---|---|
| InvoiceShelf HTTPS 8443 | Autorisé. |
| SSH 22, NAS SMB 445, Grafana 3001 | Refusés avec journaux ; SSH retesté avec un service en écoute. |

Pendant cet essai, MGMT a été désactivé pour éviter un autre chemin d'accès. Après déconnexion, l'application est devenue inaccessible depuis l'hôte par le chemin testé.

**À montrer :** une règle précise et les preuves [VPN connecté](../screenshots_a/05-openvpn-connected.png), [application accessible](../screenshots_a/06-invoiceshelf-via-vpn.png), [accès perdu après déconnexion](../screenshots_a/07-invoiceshelf-unreachable-after-vpn-disconnect.png). Les refus corrélés sont décrits dans les [notes A](../evidence/PC_A_2026-10-29.md) et [B](../evidence/PC_B_2026-10-29.md). Les anciennes captures Sysmon/Defender restent partiellement manquantes ; leurs sorties sont conservées dans l'[historique A](../evidence/history/PC_A_STATUS.md).

**Message oral :** « Le tunnel donne un accès chiffré, puis les règles limitent cet accès à la facturation ; les invités et les comptes appliquent leurs propres protections. »

Le WAN est simulé, pas un accès Internet public démontré. TLS chiffre les échanges ; le certificat autosigné du labo n'est pas automatiquement approuvé par les navigateurs. Ces contrôles ne prouvent pas une résistance à une évasion de VM ; aucun essai de cette catégorie n'a été réalisé.

<a id="module-6"></a>
## 6. Stockage et récupération

TrueNAS fournit du stockage par le réseau. SMB permet à Windows et Ubuntu d'utiliser des partages. Les ACL déterminent ce que chaque compte peut faire sur les fichiers.

Dans l'essai Windows : Alice lit et écrit ; lecteur lit mais ne crée pas de fichier ; Bob peut se connecter au partage, mais la lecture du fichier protégé lui est refusée. L'archive applicative utilise un autre compte, app-backup, sur un dataset réservé.

Le chiffrement du dataset protège les données au repos. Le chiffrement SMB protège leur transport. Ce sont deux mécanismes distincts ; la [session SMB Encrypted=True](../screenshots_a/08-smb-encryption-and-ntp.png) documente le second.

Trois notions doivent rester séparées :

| Mécanisme | Ce qu'il apporte | Limite |
|---|---|---|
| Persistance Docker | Les données restent après recréation du conteneur. | Elles sont encore sur Ubuntu. |
| Snapshot ZFS | Un état antérieur permet de retrouver un fichier ; une restauration via clone a été observée. | Il dépend du stockage NAS. |
| Sauvegarde applicative | Une archive cohérente permet de reconstruire une copie séparée de l'application. | Ubuntu et NAS restent sur le PC B. |

Les deux disques virtuels du miroir TrueNAS sont aussi sur le même stockage physique. Ni le miroir ni les snapshots ni cette archive sur B ne garantissent la récupération après perte complète du PC B.

La sauvegarde vérifiée suit cette chaîne : arrêt du service applicatif → archive SQLite/fichiers/configuration → reprise du service → copie vers le NAS → retour avec empreinte SHA-256 identique → restauration dans une instance distincte sur 127.0.0.1:8444 → ouverture de la facture et du PDF. Les conteneurs d'essai ont ensuite été retirés ; la copie restaurée n'est pas un service permanent à ouvrir pendant la soutenance.

**À montrer :** [écriture lecteur refusée](../screenshots_a/09-smb-reader-write-denied.png), [lecture Bob refusée](../screenshots_a/10-smb-bob-read-denied.png), [empreintes comparées](../screenshots_b/codex-clipboard-cb9828a3-70f0-4bb6-b5ba-c9b25f4ff7bc.png) et [PDF restauré](../screenshots_b/codex-clipboard-36812d8e-4de8-498e-8237-d88a153100b7.png). La restauration de fichier NAS est documentée dans l'[historique B](../evidence/history/PC_B_STATUS.md).

**Message oral :** « Les permissions limitent l'accès ; le snapshot retrouve un état de fichier et l'archive a permis de restaurer une copie de l'application. »

<a id="module-7"></a>
## 7. Supervision et journaux

Prometheus collecte des mesures ; Grafana les présente. Windows exporter fournit les métriques Windows et node-exporter celles d'Ubuntu. Blackbox-exporter vérifie l'accès HTTPS à InvoiceShelf.

Un serveur peut continuer à fonctionner alors que son application est arrêtée. C'est pourquoi les métriques CPU ne suffisent pas : une sonde vérifie aussi le service.

Deux essais distincts sont enregistrés : arrêter node-exporter fait perdre sa cible de collecte ; arrêter webapp fait échouer la sonde applicative. Les reprises ont rétabli leurs résultats. Le job blackbox UP signifie que l'exporter est joignable ; **probe_success=1** signifie que la sonde a réussi l'accès applicatif.

Les journaux répondent à une autre question : quels événements ont eu lieu ? OPNsense envoie ses refus à rsyslog sur Ubuntu en TCP 514. Un marqueur horodaté a été reçu ; la rotation a créé une archive et de nouvelles lignes ont continué dans le fichier actif. Sysmon et auditd complètent cette observation dans les invités.

**À montrer :** [Grafana depuis Windows après reboot](../screenshots_a/13-grafana-after-reboot.png), puis la [preuve de sonde DOWN](../screenshots_b/codex-clipboard-48dc8f89-b5eb-4d64-bcde-bae99cf377cd.png) et les [notes de reprise et de journaux](../evidence/PC_B_2026-10-29.md). Ces mesures datées ne sont pas des données live affichées par la maquette.

**Message oral :** « Nous observons à la fois les machines, l'accès à l'application et les événements de sécurité. »

<a id="module-8"></a>
## 8. Résultats, difficultés et limites

La réalisation s'est déroulée par dépendances : choix de l'architecture, installation et sécurisation des invités, liaison des deux PC, diagnostic des VLAN, intégration de l'application et du NAS, essais de sécurité/récupération/supervision, puis reboot et conservation des preuves. Jessem a principalement réalisé A, Sanad B ; ils ont effectué l'intégration ensemble avec l'assistance de Codex. Les sources ne permettent pas d'attribuer chaque commande à une personne ou à l'outil.

| Difficulté | Réponse documentée | Conclusion permise |
|---|---|---|
| Windows associé au mauvais VMnet | Correction VMnet0 vers VMnet10 CLIENTS. | DNS/HTTPS Windows ont ensuite fonctionné sur le réseau prévu. |
| Tags/pings sur le trunk | Captures, réglages Realtek et règles ICMP précises. | Les passerelles VLAN20/30 ont répondu ; T03/T04 ne sont pas intégralement établis. |
| Expirations/réinitialisations HTTPS | MTU Ubuntu 1400 et MSS 1360 limitée à Windows → InvoiceShelf. | Accès final et persistance observés ; cause racine inconnue. |

Les [accès InvoiceShelf après reboot](../screenshots_a/12-invoiceshelf-after-reboot.png) et Grafana complètent les résultats précédents. Plus de cinq heures avec les cinq VM ont été rapportées par Jessem ; cela ne constitue pas une mesure formelle de performance.

Les réserves restent visibles dans la [matrice](TEST_MATRIX.md) : Docker Bench/atelier, isolement complet des tags, certains refus réseau et chaque action refusée du rôle InvoiceShelf ne disposent pas tous de preuves suffisantes. Les allocations observées sur B sont Ubuntu 4 Gio et TrueNAS 6 Gio, distinctes des anciennes cibles ; TrueNAS reste sous les 8 Gio de référence. Les VM n'ont pas été réinspectées pendant cette revue documentaire.

**À montrer :** deux ou trois résultats finaux et une difficulté expliquée avec sa limite. **Message oral :** « Les fonctions principales ont des essais documentés ; nous distinguons ces résultats des contrôles incomplets et des causes encore inconnues. »

<a id="module-9"></a>
## 9. Bilan et contributions

Le résultat est un ensemble : Windows utilise une application hébergée sur l'autre PC, OPNsense contrôle les passages, TrueNAS conserve des fichiers et une archive, et la supervision observe les services. La maquette explique cet ensemble ; les captures et les notes montrent les essais réalisés.

Le sujet demande un tableau des responsabilités. **Ce tableau reste à compléter et n'est pas créé ici**, conformément au périmètre documentaire actuel. Les responsabilités de présentation devront être distinguées des réalisations effectives. Aucun travail ne doit être attribué fictivement à un membre.

**À montrer :** la vue d'ensemble et le bilan des résultats. **Message oral :** « Nous avons relié virtualisation, segmentation, sécurité, application, stockage et supervision dans un scénario commun. »

La préparation individuelle des questions/réponses reste une étape ultérieure. Ce guide ne remplace ni cette préparation ni une répétition chronométrée, toutes deux encore à effectuer.

## Correspondance avec les demandes du sujet

Cette table vérifie la couverture documentaire, pas l'exécution de nouveaux essais.

| Demande d'origine | Modules | Références et état |
|---|---|---|
| Architecture physique/logique, VM, interconnexions | 2–3 | [README](../README.md), [A](MACHINE_A.md), [B](MACHINE_B.md), [réseau](LIAISON.md). |
| Windows, Sysmon, Defender, pare-feu et audit | 2 et 5 | [A](MACHINE_A.md), [historique A](../evidence/history/PC_A_STATUS.md), T06/T07/T11. |
| Ubuntu, iptables, SSH par clé et logs | 4–5 et 7 | [B](MACHINE_B.md), [preuves B](../evidence/PC_B_2026-10-29.md), T08–T11. |
| NAS, permissions, chiffrement et snapshots | 6 | [B](MACHINE_B.md), [preuves stockage](../evidence/README.md), T16/T17. |
| Application Docker privée et configuration | 4 | [APP](APP.md), T12 ; atelier/Docker Bench T13 non confirmé. |
| Pare-feu, entrée/sortie, routage et NAT | 3 et 5 | [LIAISON](LIAISON.md), T05/T09/T18 : certains refus restent non confirmés. |
| VPN et accès limités | 5 | [preuves A](../evidence/PC_A_2026-10-29.md), T19 ; WAN simulé. |
| VLAN et filtrage inter-réseaux | 3 et 5 | [LIAISON](LIAISON.md), T02–T04 ; captures/rejets incomplets. |
| Antivirus, audit et Prometheus/Grafana | 5 et 7 | [index](../evidence/README.md), T06/T07/T10/T11/T14/T15. |
| Risques de virtualisation et couche de sécurité | 5 et 8 | Risques et limites explicités ; aucun atelier d'évasion demandé après clarification. |
| Documentation des configurations | Tous | Références liées et [originaux](../requirements/originals/Document.pdf) ; présentation remplaçant le rapport séparé selon clarification. |
| Démonstration et scénario | 1–9 | Parcours de 15 minutes proposé ici ; répétition non réalisée par cette rédaction. |
| Tableau des tâches et responsabilités | 9 | Livrable encore à compléter ; aucune attribution inventée. |

## Vocabulaire utile

| Terme | Sens dans ce projet |
|---|---|
| Hôte / invité | Le PC physique et son système / le système exécuté dans une VM. |
| Hyperviseur | Le logiciel qui fournit des ressources virtuelles aux VM. |
| Image / conteneur | Le modèle logiciel / son instance en exécution. |
| Port TCP/UDP | Le numéro d'un service réseau, par exemple HTTPS 8443. |
| VLAN / sous-réseau | Séparation Ethernet / réseau IP ; le passage entre sous-réseaux nécessite ici OPNsense. |
| Authentification / autorisation | Vérifier l'identité / décider de ce que cette identité peut faire. |
| Métrique / journal | Une mesure / une trace d'événement. |
| Preuve / simulation | Un résultat enregistré / une illustration de fonctionnement. |
