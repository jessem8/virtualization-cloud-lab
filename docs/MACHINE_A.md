# PC A — pare-feu et Windows

Guide de référence. Les installations et contrôles locaux observés le 28 octobre sont dans [PC_A_STATUS](../evidence/PC_A_STATUS.md) ; suivre [le plan de réunion](../BUILD_PLAN.md) pour la suite.

Le PC A de jessem8 héberge OPNsense et Windows. Le PC B de sanadzhioua héberge TrueNAS, Ubuntu et le switch VLAN SW-B. Ubuntu et le switch ne sont pas hébergés sur A.

## 1. Ressources du PC A

| VM | RAM | vCPU | Disque virtuel | Rôle |
|---|---:|---:|---:|---|
| FW-LAB | 3 Gio | 2 | 20 Gio | OPNsense, routage, filtrage, VPN |
| WIN-LAB | 4 Gio | 2 | 60 Gio | Client Windows, Defender, Sysmon, audit |
| Total A | 7 Gio | 4 | 80 Gio | Ressources allouées, fluidité à mesurer |

Les ressources actuellement libres sur A restent à vérifier. Les mesures historiques ne remplacent pas un inventaire le jour du travail. Garder au moins 20 Gio d'espace physique libre et stocker les disques actifs hors d'un dossier synchronisé.

## 2. Préparation

Au début de la configuration de A, relever les ressources disponibles, les versions VMware, les VM et leurs états, les cartes Ethernet, MAC et VMnet. Réutiliser une VM Windows seulement après avoir vérifié son édition, son démarrage et son état. Windows Server 2025 Evaluation est installé selon les observations du 28 octobre. Ne pas ajouter de domaine AD ni supprimer ou réinitialiser les autres VM.

Le câble direct utilise la carte Ethernet dédiée de A. Dans VMware, associer le réseau ponté à cette carte précise, pas au choix automatique. Sur cette carte hôte uniquement, conserver VMware Bridge Protocol et retirer IPv4, IPv6, le client/partage Microsoft et ICS. Aucun adressage hôte, DHCP, réseau natif ou IPv6 link-local sur ce lien. Ne pas modifier le Wi-Fi.

## 3. Réseaux du PC A

| VMnet local à A | Type | Connexions |
|---|---|---|
| VMnet8 | NAT VMware existant | WAN de FW-LAB ; client VPN de l'hôte A |
| VMnet13 MGMT | Host-only | LAN de FW-LAB et hôte A, 10.77.99.254/24 |
| VMnet10 CLIENTS | Privé, sans adaptateur hôte ni DHCP | FW-LAB et WIN-LAB |
| VMnet12 TRUNK | Ponté vers l'Ethernet physique dédié | Interface TRUNK de FW-LAB, tags VLAN 20/30 |

VMnet12 ne reçoit pas d'adresse IP sur l'hôte. Le câble transporte les VLAN 20 et 30 tagués jusqu'au switch SW-B du PC B. Il n'a pas de VLAN natif.

## 4. OPNsense

FW-LAB conserve quatre cartes finales, affectées selon leur MAC : WAN, MGMT, CLIENTS et TRUNK. WAN utilise DHCP sur le VMnet8 NAT existant. MGMT est 10.77.99.1/24 ; l'hôte A est 10.77.99.254/24 sans passerelle par défaut sur cet adaptateur. CLIENTS est 10.77.10.1/24.

Créer les interfaces VLAN 20 (10.77.20.1/24) et VLAN 30 (10.77.30.1/24) sur TRUNK. Le parent TRUNK n'a pas d'adresse IP, de réseau non tagué ni de VLAN natif. Les règles d'accès entre zones sont dans LIAISON.md ; ne pas remplacer les règles précises par un accès général.

OPNsense 26.7.7 a été observé installé le 28 octobre. Relever la version réelle et appliquer les correctifs disponibles dans le cadre de cette configuration. Vérifier l'offload checksum/TSO/LRO selon les recommandations VMware, la résolution DNS/NTP et le NAT de sortie des zones prévues. Ne pas ouvrir l'administration depuis CLIENTS ou le WAN.

## 5. Windows

WIN-LAB a une seule carte sur CLIENTS : 10.77.10.10/24, passerelle et DNS 10.77.10.1. Vérifier l'édition et les mises à jour Windows, garder Defender et le pare-feu local actifs, et installer VMware Tools si nécessaire.

Installer Sysmon depuis Microsoft avec une configuration examinée ; si Sysmon est déjà présent, contrôler sa configuration plutôt que le réinstaller. Générer et vérifier un événement de processus 1 et un événement réseau 3. Activer l'audit Windows des ouvertures de session réussies/échouées et montrer les événements Security 4624/4625 issus d'un test contrôlé.

Installer windows_exporter depuis sa source officielle. Autoriser TCP 9182 uniquement depuis Ubuntu 10.77.20.10, sur le pare-feu Windows et OPNsense. Vérifier des métriques réellement collectées et un service actif avant de démontrer un refus.

## 6. Contrat avec les services du PC B

Ubuntu sur B garde l'adresse 10.77.20.10. OPNsense envoie ses journaux à cette adresse en TCP 514. Ubuntu collecte les métriques Windows sur TCP 9182. WIN-LAB utilise InvoiceShelf sur HTTPS 8443, Grafana 3001 en lecture et le partage TrueNAS prévu pour les essais SMB. L'accès VPN à InvoiceShelf est limité à HTTPS 8443 ; SSH, NAS et Grafana restent refusés depuis le VPN.

La configuration InvoiceShelf est décrite dans [APP.md](APP.md). GitHub reste le canal de coordination du projet ; InvoiceShelf est une démonstration locale séparée.

## 7. VPN sur OPNsense

Le client OpenVPN de l'hôte A rejoint le WAN de FW-LAB via VMnet8. Ce test simule un côté WAN VMware et ne prouve pas un accès depuis l'Internet public. Créer une instance OpenVPN UDP 1194, chiffrement AEAD moderne, compression désactivée et TLS 1.2 minimum, avec CA, certificat serveur et certificat utilisateur dédiés. Autoriser UDP 1194 du client VMnet8 vers le WAN ; pour ce client du même sous-réseau WAN, vérifier le reply-to sur cette seule règle et le désactiver seulement si nécessaire. Garder profil et clés hors du dépôt.

Utiliser le tunnel 10.78.0.0/24 et les routes nécessaires vers InvoiceShelf et le réseau NAS pour vérifier aussi le refus. Autoriser uniquement InvoiceShelf HTTPS TCP 8443 depuis le VPN. Refuser SSH 22, SMB 445 et Grafana 3001 avec journaux. Ne pas pousser une route par défaut.

Pour le test, retirer seulement les routes MGMT ajoutées pour le laboratoire et désactiver temporairement cet adaptateur hôte ; garder la console VMware. Déconnecté, l'application est inaccessible ; connecté, InvoiceShelf est accessible mais les ressources interdites le restent ; après déconnexion, l'accès disparaît. Rétablir ensuite MGMT.

## 8. État et preuves

Consigner les versions, allocations, MAC/VMnet, règles pertinentes et résultats observés. Marquer les contrôles non exécutés comme tels. Une configuration ou un script ne prouve pas un test réseau. Indiquer « prêt pour les tests communs » avec les contrôles locaux réellement observés.
