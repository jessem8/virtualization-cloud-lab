# Plan de réunion — finir le laboratoire

29 octobre 2026. Jesse et Sanad travaillent ensemble sur les deux PC. Les états ci-dessous sont les dernières observations du 28 octobre, pas une mesure en direct. Démarrer une VM arrêtée est une action normale, pas un blocage.

## Point de départ

- A : OPNsense et Windows installés, règles configurées, Windows/DNS et première connexion VPN vérifiés localement. Le client VPN a ensuite été fermé. NTP Windows et accès VPN effectifs aux services restent à vérifier.
- B : SW-B et Ubuntu installés ; TrueNAS démarre, pool miroir et datasets chiffrés en place. Permissions SMB et restauration de fichier testées localement. Ubuntu et TrueNAS utilisaient un NAT temporaire. Le trunk physique et les services intégrés ne sont pas encore vérifiés.
- Ne pas réinstaller ni refaire les contrôles locaux déjà établis. Le principal travail restant est l'intégration réseau puis la construction et la vérification de l'application et de la supervision.

## 1. Ensemble : démarrer et relier

1. Brancher les alimentations et le câble Ethernet dédié. Vérifier l'état du lien, la RAM et l'espace libres sur les deux hôtes. Préserver Wi-Fi et VM sans rapport.
2. Jesse démarre FW-LAB sur A. Sanad démarre SW-B, Ubuntu et TrueNAS sur B ; démarrer WIN-LAB pour les contrôles suivants. Les deux propriétaires gardent la console de leurs VM accessible.
3. Vérifier que VMnet12 de chaque PC est ponté à sa carte Ethernet dédiée. Sur ces cartes, garder VMware Bridge Protocol ; vérifier les liaisons IP, partage et ICS selon [LIAISON](docs/LIAISON.md).
4. Sur B, vérifier les deux extrémités de chaque réseau : le port Ubuntu de SW-B est actuellement documenté sur **VMnet10 local à B** et doit correspondre à l'adaptateur Ubuntu ; le port NAS est sur VMnet11. Les numéros VMnet sont locaux à chaque PC.
5. Configurer Ubuntu en 10.77.20.10/24, passerelle/DNS 10.77.20.1 ; TrueNAS en 10.77.30.10/24, passerelle/DNS 10.77.30.1. Retirer les cartes NAT temporaires avant les tests finaux ; garder l'accès console. Vérifier les adresses et routes réelles.
6. Vérifier les VLAN 20/30 de SW-B. TrueNAS était à 6 Gio et Ubuntu à 4 Gio ; relever la marge réelle et tester avant de changer les allocations. 6 Gio est inférieur au minimum TrueNAS documenté de 8 Gio : vérifier la stabilité, sans retarder le premier essai de liaison uniquement pour ce chiffre.

## 2. Premier test commun : T03

Consacrer les premières 20–30 minutes de diagnostic réseau au trunk avant les services. Avec les deux endpoints actifs, observer VLAN 20 et 30 tagués aux deux extrémités, ports d'accès non tagués, ARP et unicast dans les deux sens. Recouper les captures en tenant compte des offloads. Un lien physique ou un ping isolé ne suffit pas. Noter résultat et captures expurgées dans [la matrice](docs/TEST_MATRIX.md).

En cas d'échec, conserver l'erreur et les captures et diagnostiquer le câble, le pont, les ports ou les tags précis. Suspendre les vérifications dépendantes du trunk ; une tâche locale indépendante peut continuer. Ne pas modifier des pilotes ou règles au hasard.

## 3. Terminer les services et les contrôles

Après T03, partager les actions sans attendre que l'autre refasse une installation :

- **Sanad / B :** configurer Ubuntu et InvoiceShelf 2.4.7 selon [APP](docs/APP.md) : HTTPS 8443, image privée sur 8080, SQLite persistante locale. Créer une société, client et facture fictifs, ouvrir le PDF et tester administrateur et rôle limité. Recréer le conteneur sans supprimer les volumes et vérifier les données.
- **Jesse / A :** confirmer Windows, DNS et NTP ; garder Defender, Sysmon et l'audit déjà installés. Vérifier les règles existantes et la disponibilité de l'exporter 9182 depuis Ubuntu ; ne pas reconstruire le pare-feu.
- **Ensemble :** tester l'application HTTPS et SMB depuis les sources prévues, puis les refus avec service actif et journal de pare-feu. Vérifier les ACL NAS et le chiffrement SMB en transit. La restauration locale d'un fichier NAS est déjà observée ; l'accès inter-PC reste à vérifier.
- **B :** terminer SSH par clé, pare-feu Ubuntu et règles Docker, auditd, logs OPNsense, protection, puis Prometheus/Grafana et collecte Windows. Observer une panne et reprise de l'application et une perte/reprise de collecteur séparément.
- **B avec A :** arrêter l'application avant d'archiver storage, Modules et configuration, copier l'archive au dataset NAS réservé, restaurer une copie isolée et y ouvrir facture et PDF. SQLite active reste sur Ubuntu.
- **Ensemble :** terminer l'exercice Docker du cours, les couches/digest et Docker Bench ; traiter les contrôles réseau et sécurité restants dans la matrice. Tester le VPN après accès normal : retirer temporairement le contournement MGMT, vérifier routes et accès HTTPS 8443, refus SSH 22, SMB 445 et Grafana 3001, puis rétablir MGMT. Le WAN est simulé par VMware NAT.
- Redémarrer les composants nécessaires, vérifier leur persistance et faire tourner les cinq VM ensemble au moins 10 minutes. Relever RAM, pagination/swap et réactivité ; corriger seulement les problèmes observés.

## 4. Livrables et répétition

Après les essais, consigner les résultats réellement observés dans les fichiers d'état et la matrice ; garder captures datées et expurgées. Préparer présentation et démonstration selon [le scénario du jour J](docs/UNDERSTAND_AND_PRESENT.md). Aucun rapport séparé n'est demandé selon la clarification reçue. Ne pas publier mots de passe, clés, profils VPN, exports sensibles ou disques VM.

Travail direct sur main : récupérer et réconcilier les changements avant un commit ciblé ; ne jamais forcer le push. Les demandes entre machines passent par les issues GitHub. Réserver le temps long nécessaire à l'installation et au diagnostic de l'application : la fin du laboratoire n'est pas garantie par le seul démarrage des VM.
