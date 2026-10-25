# PC A - réseau, Windows et Ubuntu

Plan proposé le 25 octobre 2026. À valider dans la PR avant création, démarrage ou modification des VM. Ce guide prépare le travail ; aucun résultat d'exécution n'est acquis.

## 1. Périmètre et ressources

Le PC A est la machine de jessem8. Il héberge les calculs et le réseau. Le PC B de sanadzhioua héberge TrueNAS. Les deux PC restent reliés par Ethernet ; le Wi-Fi fournit Internet. Voir BUILD_PLAN.md et COORDINATION.md.

| VM | RAM | vCPU | Disque fin | Fonction |
|---|---|---|---|---|
| FW-LAB | 3 Gio | 2 | 20 Gio | OPNsense, routage, filtrage, VPN |
| WIN-LAB | 4 Gio | 2 | 60 Gio | Client, Defender, Sysmon, audit |
| UBU-LAB | 2,5 Gio | 2 | 40 Gio | Application Docker, journaux, supervision |
| SW-A | 0,5 Gio | 1 | 2 Gio | Commutation VLAN uniquement |
| Total PC A | 10 Gio | 7 attribués | Allocation à la demande | Performance à mesurer |

Ce total laisse environ 5,7 Gio nominaux sur les 15,7 Gio précédemment observés, avant les surcoûts. Il ne prouve pas que la machine sera fluide. Installer, mettre à jour, construire les images et scanner séparément. Ne pas réduire la mémoire TrueNAS et ne pas désactiver la sécurité de l'hôte.

## 2. Avant de modifier

Après accord, relever RAM/espace libres, versions de VMware, VM existantes, réseaux VMnet et MAC. Les numéros ci-dessous sont des exemples réservés au projet s'ils sont libres. Ne pas utiliser Restore Defaults. Conserver Kali, ESXi et les autres travaux.

Réutiliser un Windows/Ubuntu adapté si son état est confirmé. Windows Server 2025 Evaluation déjà disponible convient ; Windows Server 2022 n'est pas une obligation. Ubuntu 26.04.1 a été signalé par l'utilisateur, pas confirmé dans l'invité. Vérifier la version et les applications avant toute adaptation. Un script conçu pour les paquets Ubuntu 24.04/Noble ne doit pas être exécuté tel quel sur une autre version.

Créer les nouveaux disques actifs hors OneDrive. Garder au moins 20 Gio physiques libres avant les installations et surveiller leur croissance. Les capacités virtuelles ne sont pas de l'espace réellement disponible.

## 3. Réseaux du PC A

| Réseau | Type | Connexions | Adressage |
|---|---|---|---|
| VMnet8 existant | NAT | WAN de FW-LAB, client VPN de l'hôte | Conserver le sous-réseau existant |
| VMnet13 MGMT | Host-only | LAN de FW-LAB, adaptateur hôte A | FW 10.77.99.1 ; hôte 10.77.99.254/24 |
| VMnet10 CLIENTS | Privé, sans DHCP/adaptateur hôte | FW-LAB, WIN-LAB | 10.77.10.0/24 |
| VMnet12 TRUNK | Privé, sans DHCP/adaptateur hôte | FW-LAB, SW-A | VLAN 20/30 tagués ; aucune IP native |
| VMnet14 SERVEURS | Privé, sans DHCP/adaptateur hôte | SW-A, UBU-LAB | Accès non tagué VLAN 20 |
| VMnet11 STOCKAGE | Bridged sur Ethernet précis | Port stockage de SW-A | Accès non tagué VLAN 30 vers PC B |

L'adaptateur MGMT de l'hôte n'a ni passerelle ni DNS. Vérifier d'abord les chevauchements avec Wi-Fi, VPN personnels et réseaux existants. Si une plage change, modifier tous les documents et configurations concernés ensemble.

Pour l'Ethernet dédié des deux PC : conserver VMware Bridge Protocol ; retirer la participation IPv4/IPv6 et les clients/partages Microsoft de cette carte uniquement, après sauvegarde des réglages. Pas d'ICS, pas de pont Windows, pas de DHCP/APIPA ni IPv6 link-local sur cette liaison. Exclure cette carte du pont VMware automatique. Ne pas modifier la carte Wi-Fi. Utiliser la console si l'identification d'une carte est incertaine.

## 4. OPNsense et SW-A

FW-LAB a quatre cartes finales : WAN, MGMT/LAN, CLIENTS et TRUNK. Affecter par MAC. WAN en DHCP sur VMnet8 ; MGMT 10.77.99.1/24 ; CLIENTS 10.77.10.1/24. Sur TRUNK, créer VLAN 20 = 10.77.20.1/24 et VLAN 30 = 10.77.30.1/24. Aucun DHCP du projet, aucune passerelle amont sur les interfaces internes, aucune IP sur le parent TRUNK.

OPNsense 26.7.7 et ses correctifs disponibles sont une référence vérifiée lors de la préparation ; relever la version réellement installée. Suivre les recommandations de virtualisation pour checksum offload/TSO/LRO. Sur le WAN privé de laboratoire, adapter Block private networks sans ouvrir les services internes. Vérifier les règles Source NAT générées pour les réseaux autorisés. Fournir DNS et NTP sur les interfaces internes prévues.

L'administration vient de MGMT. L'anti-lockout peut rester sur ce LAN de gestion ; ne pas présenter le réseau Windows CLIENTS comme un accès administrateur. Ajouter les règles précises de LIAISON.md avant de retirer une règle générale.

SW-A est une VM Alpine distincte de 512 Mio. Trois cartes finales : trunk VMnet12, Ubuntu VMnet14, stockage Ethernet VMnet11. Une carte NAT temporaire peut servir à l'installation ; la retirer et retirer sa configuration DHCP avant les contrôles finaux. Administrer SW-A par console, sans SSH.

Dans cette VM neuve uniquement, installer iproute2 et tcpdump. Relever les noms d'interfaces par MAC. Exemple à adapter, puis à conserver dans un script OpenRC local après revue :

```sh
# Remplacer les trois noms par ceux confirmés par MAC.
LAB_TRUNK=eth0
LAB_UBUNTU=eth1
LAB_NAS=eth2
ip link add br-lab type bridge vlan_filtering 1 vlan_default_pvid 0
ip link set "$LAB_TRUNK" master br-lab
ip link set "$LAB_UBUNTU" master br-lab
ip link set "$LAB_NAS" master br-lab
bridge vlan add dev "$LAB_TRUNK" vid 20
bridge vlan add dev "$LAB_TRUNK" vid 30
bridge vlan add dev "$LAB_UBUNTU" vid 20 pvid untagged
bridge vlan add dev "$LAB_NAS" vid 30 pvid untagged
ip link set br-lab up
ip link set "$LAB_TRUNK" up
ip link set "$LAB_UBUNTU" up
ip link set "$LAB_NAS" up
bridge vlan show
ip -br addr
```

Ce bloc vise un bridge absent, pas une commande à relancer aveuglément. Le script persistant doit vérifier l'état existant et les MAC avant toute modification ; le versionner et le relire avant exécution. Désactiver IPv6 dans SW-A, laisser le routage IP désactivé, supprimer toute ancienne IP/DHCP de ses cartes et vérifier absence de route. Aucun VLAN 1, IP de gestion, IP link-local ou réseau natif sur le bridge/ports.

Les premiers contrôles locaux sont le VLAN 20 sur le trunk privé et sa passerelle. Le chemin NAS, les deux sens unicast/ARP et l'absence de tags sur Ethernet seront vérifiés avec le PC B quand les deux côtés seront prêts. La commutation de MAC derrière SW-A reste à vérifier dans VMware.

## 5. Windows

WIN-LAB a une seule carte CLIENTS : 10.77.10.10/24, passerelle/DNS 10.77.10.1. Mettre à jour Windows et Defender, installer VMware Tools et conserver le pare-feu local actif. Aucun rôle AD, DHCP ou DNS Server requis.

Installer Sysmon depuis Microsoft avec une configuration examinée et versionnée. Si déjà installé, charger la configuration plutôt que réinstaller. Générer puis conserver un événement de processus 1 et un événement réseau 3. Ne pas supposer que l'événement 3 est activé par défaut.

Activer aussi les stratégies d'audit Windows pour les ouvertures de session réussies/échouées et les activités retenues. Vérifier la politique avec auditpol et montrer des événements Security 4624/4625 corrélés à un test contrôlé. Sysmon ne remplace pas cette vérification.

Installer windows_exporter depuis son dépôt officiel après contrôle de la version. Autoriser TCP 9182 uniquement depuis 10.77.20.10 dans le pare-feu Windows et OPNsense. Les métriques doivent identifier WIN-LAB. Prouver une règle locale avec un service actif autorisé puis refusé, pas avec un port où rien n'écoute.

## 6. Ubuntu, application et protections

UBU-LAB a une seule carte SERVEURS : 10.77.20.10/24, passerelle/DNS 10.77.20.1. Identifier la carte réelle ; appliquer Netplan depuis la console avec netplan try. Retirer les cartes NAT temporaires.

Installer Docker depuis son dépôt officiel correspondant exactement à l'Ubuntu constaté. Préparer un petit dossier de configuration versionné pendant le travail approuvé ; aucun dossier kit_demain externe n'est présumé disponible.

Application retenue : docker/getting-started-app avec SQLite. Épingler le commit source et un Node LTS maintenu lors de la construction. Construire une image locale, utiliser les dépendances de production, un utilisateur non root et un volume dédié pour la base. Pas de conteneur privilégié, de socket Docker monté ni d'API de contrôle publiée.

Utiliser des réseaux Docker bridge privés. Seuls Nginx HTTPS sur 10.77.20.10:8443 et Grafana sur 10.77.20.10:3001 sont publiés. L'application reste derrière Nginx, sur son réseau interne. Publier Prometheus uniquement sur 127.0.0.1:9090 pour le tunnel SSH depuis MGMT. node-exporter et le collecteur HTTP restent sur le réseau Docker interne, sans port publié sur l'adresse du laboratoire. Le certificat HTTPS doit contenir l'adresse utilisée et être vérifié depuis le client. Ne pas banaliser curl -k comme preuve de confiance TLS.

L'application n'a pas d'authentification individuelle native. Sa restriction repose sur réseau/VPN et pare-feu ; le dire dans la présentation. Grafana a des comptes distincts : administration depuis MGMT, lecture depuis Windows. Le VPN autorise seulement 8443, pas Grafana 3001.

Conserver le backend iptables Docker. Vérifier INPUT pour les services Ubuntu ET DOCKER-USER/FORWARD pour les ports conteneurs. Docker effectue du DNAT : les règles doivent viser le flux/destinataire d'origine si nécessaire. Autoriser les échanges internes nécessaires et ESTABLISHED/RELATED, puis limiter les nouvelles connexions entrantes aux sources/ports de LIAISON.md. Ne pas désactiver globalement IP forwarding, requis par le bridge Docker. Ne pas empiler UFW et des règles contradictoires.

Créer et tester une clé SSH depuis MGMT avant de désactiver mots de passe et root. Conserver une session et la console pendant le changement. Vérifier une nouvelle connexion par clé et le refus explicite du mot de passe. Rendre pare-feu, configuration SSH et journaux persistants.

Rsyslog reçoit les logs OPNsense en TCP 514 depuis 10.77.20.1 uniquement. Vérifier un refus réel daté. Activer auditd avec une règle persistante limitée à un fichier de configuration du projet, modifier ce fichier et retrouver l'événement. Prévoir rotation des logs et garder des horloges synchronisées en Africa/Tunis.

ClamAV : actualiser les signatures et scanner un petit fichier de test dans un créneau sans construction d'image. Un scan propre prouve le fonctionnement du scan, pas la détection d'un malware. Conserver erreurs et dates exactes ; ne pas neutraliser TLS pour contourner une mise à jour échouée.

## 7. Supervision et atelier Docker

Prometheus/Grafana montrent des métriques réelles Ubuntu et Windows, et une sonde HTTP de l'application. Ne pas utiliser de générateur synthétique. Valeurs de départ : scrape 30 secondes, rétention 24 heures et environ 512 Mio maximum de données Prometheus ; garder un historique court et surveiller l'espace réel. Ajuster après mesure, pas par promesse de performance.

Enregistrer les versions/images/digests réellement utilisés. Vérifier les logs, les comptes, les accès et les limites avant de fixer les ressources. Des plafonds mémoire trop faibles peuvent provoquer des arrêts ; ne pas les inventer sans observation.

Conserver docker image history de l'image construite et expliquer ses couches. Examiner le script officiel Docker Bench for Security à un commit choisi avant de l'exécuter dans UBU-LAB. Ne pas reprendre son ancienne image préconstruite sans contrôle. Garder les constats, corrections et exceptions justifiées ; une liste de warnings ne signifie pas conformité complète.

Créer des tâches, recréer le conteneur sans supprimer son volume et vérifier leur persistance. Préparer une sauvegarde SQLite cohérente en arrêtant/quiesçant l'application ; toute restauration se fait dans une copie, pas sur l'unique base active.

Observer séparément la perte d'un collecteur et l'indisponibilité de l'application, puis leur reprise. Aucune notification externe n'est nécessaire pour cette démonstration.

## 8. VPN et état prêt

Le client OpenVPN est l'hôte physique A sur VMnet8. Il utilise le WAN privé de FW-LAB ; aucun troisième PC ni port ouvert sur la box n'est requis. C'est un WAN simulé, pas une preuve d'accès Internet distant.

Créer CA, certificat serveur et utilisateur/certificat client dédiés. Utiliser OpenVPN Instances, UDP 1194, chiffrement moderne AEAD, compression désactivée et TLS 1.2 minimum. Exporter le profil sans publier sa clé privée. Autoriser UDP1194 du client VMnet8 vers le WAN. Pour ce client du même sous-réseau WAN, vérifier/désactiver reply-to sur cette seule règle si nécessaire ; ne pas changer tous les réseaux.

Tunnel 10.78.0.0/24. Pousser les routes nécessaires vers l'application et vers le NAS pour le test de refus ; pas de redirect-gateway. VPN -> application TCP8443 autorisé ; SSH22, SMB445 et Grafana3001 refusés avec logs.

Pour le test, retirer uniquement les routes de gestion ajoutées pour ce projet et désactiver temporairement l'adaptateur MGMT de l'hôte ; conserver la console. Vérifier le chemin choisi. Déconnecté : application inaccessible ; connecté : application accessible, NAS/SSH refusés ; déconnecté : accès perdu. Rétablir ensuite MGMT. Expliquer le résultat réel.

Publier dans la PR : versions, MAC/VMnet, allocations, configurations sans secrets, résultats locaux et limites. Dire « prêt pour les tests communs » quand les contrôles locaux sont faits. Ne pas annoncer de test avec PC B avant son accord et sa disponibilité.
