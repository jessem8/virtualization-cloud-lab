# PC B — TrueNAS, Ubuntu et switch VLAN

Plan proposé le 25 octobre 2026. À examiner dans la PR avant toute modification du laboratoire. Ce guide décrit le PC B de sanadzhioua ; il ne prouve aucune exécution.

Le PC B héberge TrueNAS, Ubuntu et le switch VLAN SW-B. Le PC A héberge OPNsense et Windows. Les deux hôtes sont reliés par Ethernet dédié.

## 1. Ressources et préparation

| VM | RAM | vCPU | Disques virtuels | Rôle |
|---|---:|---:|---|---|
| NAS-LAB | 8 Gio | 2 | Boot 20 Gio + 2 disques de données de 20 Gio | TrueNAS, SMB, permissions, snapshots |
| UBU-LAB | 2,5 Gio | 2 | 40 Gio | Vikunja, sécurité, journaux et supervision |
| SW-B | 0,5 Gio | 1 | 2 Gio | Commutation VLAN filtrée |
| Total B | 11 Gio | 5 | 102 Gio au total | Ressources allouées, fluidité à mesurer |

L'hypothèse de 16 Gio de RAM sur B n'est pas vérifiée. Avant le démarrage, relever la RAM et le stockage réellement disponibles. Garder 20 Gio physiques libres au minimum, davantage si les systèmes et snapshots l'exigent. Si le budget ne tient pas, signaler le blocage ; ne pas réduire les 8 Gio de TrueNAS ni toucher aux VM sans rapport.

Stocker les disques actifs hors d'un dossier synchronisé. TrueNAS Community Edition 25.10.7 est la référence du plan ; vérifier l'empreinte du fichier utilisé et l'édition réellement démarrée. Installer sur le nouveau disque de boot, jamais sur un ancien disque de données. Ubuntu 26.04.1 a été signalé par l'utilisateur mais n'a pas été vérifié dans l'invité ; confirmer sa version avant de choisir des paquets ou commandes.

## 2. Ethernet et switch SW-B

La carte Ethernet dédiée de B se relie directement à celle de A. Le câble transporte les VLAN 20 et 30 tagués, sans VLAN natif ; il ne transporte pas un port de stockage non tagué. VMware Bridge Protocol reste activé sur les cartes Ethernet. Retirer de ces seules cartes IPv4, IPv6, le client/partage Microsoft et ICS. Ne pas utiliser le pont automatique ni modifier le Wi-Fi. Les VMnet12 de A et B sont des réseaux locaux à chaque hôte, chacun ponté vers sa carte Ethernet précise.

Le premier contrôle commun est le transport des tags sur ce câble, avant toute configuration approfondie ; voir LIAISON.md. En cas d'échec, arrêter et rapporter les captures et l'erreur plutôt que de passer la journée à deviner des réglages de pilote.

SW-B est une VM Alpine neuve avec trois cartes : trunk VMnet12, accès Ubuntu VMnet14 et accès NAS VMnet11. Installer iproute2 et tcpdump après autorisation. Administrer par console, sans SSH. Utiliser un bridge Linux avec filtrage VLAN, PVID par défaut 0 et sans adresse IP, DHCP, IPv6 ni routage :

| Carte de SW-B | VMnet | Mode |
|---|---|---|
| Trunk Ethernet | VMnet12 ponté vers la carte physique | Tags 20 et 30 autorisés, aucun PVID/VLAN natif |
| Port Ubuntu | VMnet14 privé | Accès VLAN 20, PVID 20 non tagué |
| Port TrueNAS | VMnet11 privé | Accès VLAN 30, PVID 30 non tagué |

Confirmer les noms d'interfaces par MAC avant d'appliquer la configuration. Ne pas ajouter VLAN 1, adresse de gestion, route ou DHCP. Retirer toute carte NAT temporaire d'installation. Rendre la configuration persistante uniquement après le contrôle manuel des ports et des tags.

## 3. Ubuntu, Vikunja et supervision

UBU-LAB a une seule carte sur VMnet14, port d'accès VLAN 20 non tagué : 10.77.20.10/24, passerelle/DNS 10.77.20.1. Vérifier la MAC et la version réelle. Appliquer Netplan depuis la console avec retour arrière disponible ; retirer les cartes temporaires après mise à jour.

Sécuriser SSH : établir une connexion par clé depuis MGMT avant de désactiver le mot de passe et root. Garder une console pendant les changements. Appliquer des règles iptables persistantes et tester ports autorisés/refusés avec des services actifs. Garder le backend iptables de Docker ; contrôler INPUT et DOCKER-USER/FORWARD, car INPUT seul ne filtre pas les ports publiés par Docker. Ne pas rendre Ubuntu routeur entre VLANs ni superposer un pare-feu hôte contradictoire.

Configurer Vikunja selon [APP.md](APP.md), sans recopier sa configuration ici. Vikunja est l'unique application persistante : projets/tâches Kanban, pièces jointes et partage Read/Read & Write/Admin, image officielle 2.7.1 avec SQLite intégrée. Nginx publie HTTPS8443 ; Vikunja3456 reste sur le réseau Docker interne. Pas de base externe, worker, runner ou nouvelle VM.

La démonstration Vikunja couvre un projet avec tâches et pièce jointe, un éditeur autorisé, un lecteur dont l'écriture est refusée et un visiteur non authentifié bloqué. Vérifier l'absence d'autres partages de projet qui élèveraient les droits du lecteur. Après recréation, comptes, tâches et pièces jointes persistent dans les montages locaux `db` et `files`. Ne pas stocker SQLite actif sur SMB.

Le tutoriel de cours docker/getting-started-app reste un court exercice arrêté après la preuve de construction et l'inspection de l'historique des couches. Il ne devient pas le service permanent et ne remplace pas Vikunja. Pour la sauvegarde, arrêter Vikunja proprement, archiver ses données et sa configuration selon APP.md, copier l'archive vers le dataset NAS dédié avec le compte de sauvegarde, puis restaurer une copie dans un autre dossier local Ubuntu. Comparer cette copie sans écraser la base active.

Prometheus écoute uniquement sur 127.0.0.1:9090 ; Grafana est séparé sur 10.77.20.10:3001. Garder une rétention courte (24 heures, plafond initial d'environ 512 Mio) et des cibles réelles : Ubuntu, Windows exporter 10.77.10.10:9182 et disponibilité de Vikunja. Aucun générateur synthétique. Vérifier une panne de Vikunja et la perte d'un collecteur séparément, puis observer le retour à l'état sain. Accès Grafana VPN refusé ; Windows n'a qu'un compte de lecture.

Rsyslog reçoit depuis OPNsense 10.77.20.1 uniquement en TCP 514. Vérifier un refus réel horodaté, la persistance et la rotation des journaux. Activer auditd avec une règle persistante sur un fichier de configuration du projet, modifier ce fichier et retrouver l'événement. Synchroniser les horloges en Africa/Tunis.

Maintenir une protection antivirus Linux : actualiser ClamAV et exécuter un scan borné, en conservant date, résultat et erreurs. Un scan propre ne prouve pas une détection malware. Examiner le script officiel Docker Bench for Security à un commit identifié avant de l'exécuter ; conserver constats, corrections et exceptions justifiées, sans appliquer aveuglément tous les conseils.

## 4. TrueNAS et partages

NAS-LAB a une seule carte sur VMnet11, port d'accès VLAN 30 non tagué : 10.77.30.10/24, passerelle/DNS 10.77.30.1. Ne configurer aucun VLAN dans TrueNAS. L'administration HTTPS vient de l'hôte A 10.77.99.254 à travers OPNsense ; Windows utilise SMB, pas l'interface d'administration.

Créer un pool miroir avec les deux nouveaux disques de données. Ce miroir pédagogique partage le même SSD physique et ne protège pas contre la perte du PC B. Créer tank/projet avec preset SMB et chiffrement activé dès sa création. Exporter la clé de récupération dans un emplacement privé hors dépôt et vérifier le déverrouillage après redémarrage. Ne pas activer déduplication, applications, iSCSI ou services inutiles.

Pour le partage de démonstration, créer trois comptes : alice lecture/écriture, lecteur lecture seule et bob sans accès. Utiliser des groupes et ACL explicites, sans invité, root SMB ni entrée générale qui autorise bob. Vérifier que les ACL du dataset et les permissions du partage concordent. Activer SMB au démarrage et vérifier le chiffrement SMB depuis le client si requis ; ce contrôle est distinct du chiffrement du dataset au repos.

Créer un dataset chiffré séparé tank/app-backups et un compte app-backup autorisé uniquement sur ce dataset. Ne pas rendre ce partage disponible aux comptes Windows de démonstration. Le pare-feu autorise Ubuntu vers NAS en TCP 445 uniquement ; l'ACL du NAS limite la sauvegarde à ce compte et ce dataset. Utiliser le partage seulement pour une archive cohérente après arrêt de Vikunja, jamais comme montage de données actives.

## 5. Contrôles et état prêt

Depuis Windows, vérifier le partage SMB avec alice : lecture et écriture permises. Avec lecteur, la lecture réussit et l'écriture est refusée. Avec bob, l'accès est refusé. Saisir les mots de passe à l'invite, jamais dans une commande ou une capture. Fermer les sessions SMB du partage entre les essais ; l'erreur Windows 1219 peut être une session conservée, pas une preuve d'ACL.

Après un fichier de référence, créer un snapshot, modifier ou supprimer le fichier, puis restaurer une copie et vérifier son contenu. Un rollback du dataset annule tous les changements depuis le snapshot ; fermer SMB et préférer une restauration de fichier/clone.

Depuis Ubuntu, réaliser l'archive Vikunja uniquement avec le compte app-backup et après arrêt du service. Restaurer dans un dossier distinct, confirmer une tâche et le hash d'une pièce jointe, puis ne pas remplacer les données actives. Vérifier après redémarrage que le dataset est déverrouillé et SMB actif.

Poster versions, ressources mesurées, IP/MAC, preuves d'accès autorisé/refusé, chiffrement, snapshot/restauration et résultats Ubuntu. Indiquer « prêt pour les tests communs » seulement après les contrôles locaux réels.
