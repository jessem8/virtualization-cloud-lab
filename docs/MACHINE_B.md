# PC B — TrueNAS, Ubuntu et switch VLAN

Mis à jour le 27 octobre 2026. Ce guide décrit la cible du PC B de sanadzhioua ; les changements sur B suivent l'autorisation de son propriétaire. Il ne prouve aucune exécution.

Le PC B héberge TrueNAS, Ubuntu et le switch VLAN SW-B. Le PC A héberge OPNsense et Windows. Les deux hôtes sont reliés par Ethernet dédié.

## 1. Ressources et préparation

| VM | RAM | vCPU | Disques virtuels | Rôle |
|---|---:|---:|---|---|
| NAS-LAB | 8 Gio | 2 | Boot 20 Gio + 2 disques de données de 20 Gio | TrueNAS, SMB, permissions, snapshots |
| UBU-LAB | 2,5 Gio | 2 | 40 Gio | InvoiceShelf, sécurité, journaux et supervision |
| SW-B | 0,5 Gio | 1 | 2 Gio | Commutation VLAN filtrée |
| Total B | 11 Gio | 5 | 102 Gio au total | Cible planifiée, fluidité à mesurer |

L'état préparé déclaré par B diffère de cette cible : TrueNAS est à 6 Gio au lieu de 8, et Ubuntu Desktop à 4 Gio au lieu de 2,5. Vérifier ces allocations avec Sanad avant tout changement ; voir [l'état déclaré de B](../evidence/PC_B_STATUS.md).

La RAM physique et la marge disponible sur B ne sont pas vérifiées. Avant le démarrage, relever la RAM et le stockage réellement disponibles. Garder 20 Gio physiques libres au minimum, davantage si les systèmes et snapshots l'exigent. Si la capacité ne suffit pas, signaler le blocage et revoir les cibles avec Sanad avant tout changement ; ne pas toucher aux VM sans rapport.

Stocker les disques actifs hors d'un dossier synchronisé. TrueNAS Community Edition 25.10.7 est la référence du plan ; vérifier l'empreinte du fichier utilisé et l'édition réellement démarrée. Installer sur le nouveau disque de boot, jamais sur un ancien disque de données. Ubuntu 26.04.1 a été signalé par l'utilisateur mais n'a pas été vérifié dans l'invité ; confirmer sa version avant de choisir des paquets ou commandes.

## 2. Ethernet et switch SW-B

La carte Ethernet dédiée de B se relie directement à celle de A. Le câble transporte les VLAN 20 et 30 tagués, sans VLAN natif ; il ne transporte pas un port de stockage non tagué. VMware Bridge Protocol reste activé sur les cartes Ethernet. Retirer de ces seules cartes IPv4, IPv6, le client/partage Microsoft et ICS. Ne pas utiliser le pont automatique ni modifier le Wi-Fi. Les VMnet12 de A et B sont des réseaux locaux à chaque hôte, chacun ponté vers sa carte Ethernet précise.

Le premier contrôle commun est le transport des tags sur ce câble, avant toute configuration approfondie ; voir LIAISON.md. En cas d'échec, arrêter et rapporter les captures et l'erreur plutôt que de passer la journée à deviner des réglages de pilote.

SW-B est une VM Alpine neuve avec trois cartes : trunk VMnet12, accès Ubuntu VMnet14 et accès NAS VMnet11. Installer iproute2 et tcpdump après l'autorisation du propriétaire de B. Administrer par console, sans SSH. Utiliser un bridge Linux avec filtrage VLAN, PVID par défaut 0 et sans adresse IP, DHCP, IPv6 ni routage :

| Carte de SW-B | VMnet | Mode |
|---|---|---|
| Trunk Ethernet | VMnet12 ponté vers la carte physique | Tags 20 et 30 autorisés, aucun PVID/VLAN natif |
| Port Ubuntu | VMnet14 privé | Accès VLAN 20, PVID 20 non tagué |
| Port TrueNAS | VMnet11 privé | Accès VLAN 30, PVID 30 non tagué |

Confirmer les noms d'interfaces par MAC avant d'appliquer la configuration. Ne pas ajouter VLAN 1, adresse de gestion, route ou DHCP. Retirer toute carte NAT temporaire d'installation. Rendre la configuration persistante uniquement après le contrôle manuel des ports et des tags.

## 3. Ubuntu, InvoiceShelf et supervision

UBU-LAB a une seule carte sur VMnet14, port d'accès VLAN 20 non tagué : 10.77.20.10/24, passerelle/DNS 10.77.20.1. Vérifier la MAC et la version réelle. Appliquer Netplan depuis la console avec retour arrière disponible ; retirer les cartes temporaires après mise à jour.

Sécuriser SSH : établir une connexion par clé depuis MGMT avant de désactiver le mot de passe et root. Garder une console pendant les changements. Appliquer des règles iptables persistantes et tester ports autorisés/refusés avec des services actifs. Garder le backend iptables de Docker ; contrôler INPUT et DOCKER-USER/FORWARD, car INPUT seul ne filtre pas les ports publiés par Docker. Ne pas rendre Ubuntu routeur entre VLANs ni superposer un pare-feu hôte contradictoire.

Configurer InvoiceShelf selon [APP.md](APP.md), sans recopier sa configuration ici. L'application permanente est l'image officielle `invoiceshelf/invoiceshelf:2.4.7` avec SQLite locale. Le proxy HTTPS publie seulement le port 8443 ; le service Docker `webapp` écoute au port 8080 sur le réseau interne. Aucun port 8080, WAN, base externe ou worker séparé n'est ajouté.

La démonstration couvre une société et une facture fictives, un administrateur, un rôle limité et un PDF généré. Tester les droits de lecture, de création, de modification et de suppression avec des comptes distincts. Les chemins de volumes et variables exacts sont dans APP.md.

Le tutoriel `docker/getting-started-app` reste un court exercice arrêté après la preuve de construction et l'inspection de l'historique des couches. Il ne remplace pas InvoiceShelf. Pour la sauvegarde, arrêter le conteneur, archiver localement `storage`, `Modules` et la configuration selon APP.md, copier l'archive vers le dataset NAS dédié avec le compte de sauvegarde, puis restaurer la copie dans de nouveaux dossiers locaux Ubuntu. SQLite active ne doit pas résider sur SMB.

Prometheus écoute uniquement sur 127.0.0.1:9090 ; Grafana est séparé sur 10.77.20.10:3001. Garder une rétention courte (24 heures, plafond initial d'environ 512 Mio) et des cibles réelles : Ubuntu, Windows exporter 10.77.10.10:9182 et disponibilité d'InvoiceShelf. Aucun générateur synthétique. Vérifier une panne d'InvoiceShelf et la perte d'un collecteur séparément, puis observer le retour à l'état sain. Accès Grafana VPN refusé ; Windows n'a qu'un compte de lecture.

Rsyslog reçoit depuis OPNsense 10.77.20.1 uniquement en TCP 514. Vérifier un refus réel horodaté, la persistance et la rotation des journaux. Activer auditd avec une règle persistante sur un fichier de configuration du projet, modifier ce fichier et retrouver l'événement. Synchroniser les horloges en Africa/Tunis.

Maintenir une protection antivirus Linux : actualiser ClamAV et exécuter un scan borné, en conservant date, résultat et erreurs. Un scan propre ne prouve pas une détection malware. Examiner le script officiel Docker Bench for Security à un commit identifié avant de l'exécuter ; conserver constats, corrections et exceptions justifiées, sans appliquer aveuglément tous les conseils.

## 4. TrueNAS et partages

NAS-LAB a une seule carte sur VMnet11, port d'accès VLAN 30 non tagué : 10.77.30.10/24, passerelle/DNS 10.77.30.1. Ne configurer aucun VLAN dans TrueNAS. L'administration HTTPS vient de l'hôte A 10.77.99.254 à travers OPNsense ; Windows utilise SMB, pas l'interface d'administration.

Créer un pool miroir avec les deux nouveaux disques de données. Ce miroir pédagogique partage le même SSD physique et ne protège pas contre la perte du PC B. Créer tank/projet avec preset SMB et chiffrement activé dès sa création. Exporter la clé de récupération dans un emplacement privé hors dépôt et vérifier le déverrouillage après redémarrage. Ne pas activer déduplication, applications, iSCSI ou services inutiles.

Pour le partage de démonstration, créer trois comptes : alice lecture/écriture, lecteur lecture seule et bob sans accès. Utiliser des groupes et ACL explicites, sans invité, root SMB ni entrée générale qui autorise bob. Vérifier que les ACL du dataset et les permissions du partage concordent. Activer SMB au démarrage et vérifier le chiffrement SMB depuis le client si requis ; ce contrôle est distinct du chiffrement du dataset au repos.

Créer un dataset chiffré séparé tank/app-backups et un compte app-backup autorisé uniquement sur ce dataset. Ne pas rendre ce partage disponible aux comptes Windows de démonstration. Le pare-feu autorise Ubuntu vers NAS en TCP 445 uniquement ; l'ACL du NAS limite la sauvegarde à ce compte et ce dataset. Utiliser le partage seulement pour une archive cohérente après arrêt d'InvoiceShelf, jamais comme montage de données actives.

## 5. Contrôles et état prêt

Depuis Windows, vérifier le partage SMB avec alice : lecture et écriture permises. Avec lecteur, la lecture réussit et l'écriture est refusée. Avec bob, l'accès est refusé. Saisir les mots de passe à l'invite, jamais dans une commande ou une capture. Fermer les sessions SMB du partage entre les essais ; l'erreur Windows 1219 peut être une session conservée, pas une preuve d'ACL.

Après un fichier de référence, créer un snapshot, modifier ou supprimer le fichier, puis restaurer une copie et vérifier son contenu. Un rollback du dataset annule tous les changements depuis le snapshot ; fermer SMB et préférer une restauration de fichier/clone.

Depuis Ubuntu, réaliser l'archive InvoiceShelf uniquement avec le compte app-backup et après arrêt du conteneur. Restaurer dans de nouveaux dossiers, vérifier la société et la facture de test, puis ne pas remplacer les données actives. Vérifier après redémarrage que le dataset est déverrouillé et SMB actif.

Poster versions, ressources mesurées, IP/MAC, preuves d'accès autorisé/refusé, chiffrement, snapshot/restauration et résultats Ubuntu. Indiquer « prêt pour les tests communs » seulement après les contrôles locaux réels.
