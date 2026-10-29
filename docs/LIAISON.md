# Liaison des deux PC et règles

Référence mise à jour le 29 octobre 2026. La connexion Ethernet et les réglages sont à vérifier lors de la réunion ; le Wi-Fi fournit Internet. Cette liaison est la cible prévue. Aucun tag, partage, routage ou test n'est déclaré fonctionnel ici.

## 1. Architecture

A héberge OPNsense et Windows ; B héberge TrueNAS, Ubuntu et SW-B. Le câble physique transporte les VLAN 20 et 30 tagués entre le trunk OPNsense et le trunk SW-B. Le VLAN natif est absent. Ubuntu et TrueNAS reçoivent des trames non taguées depuis leurs ports d'accès séparés.

    PC A: WIN-LAB -- CLIENTS -- OPNsense -- WAN/NAT VMware
                                  |
                          TRUNK VLAN 20/30
                                  |
                    Ethernet physique tagué
                                  |
    PC B:                    SW-B
                           /       \
                    accès 20       accès 30
                      Ubuntu       TrueNAS

MGMT est un réseau local de l'hôte A à OPNsense, pas un VLAN. CLIENTS est également un réseau non tagué, séparé des VLANs réels. OPNsense route et filtre entre zones ; SW-B filtre l'appartenance aux VLANs ; TrueNAS applique les ACL des fichiers.

## 2. Ressources prévues

| PC | VM | RAM | vCPU | Disque virtuel |
|---|---|---:|---:|---:|
| A | FW-LAB / OPNsense | 3 Gio | 2 | 20 Gio |
| A | WIN-LAB | 4 Gio | 2 | 60 Gio |
| B | NAS-LAB / TrueNAS | 8 Gio | 2 | Boot 20 Gio + données 2 × 20 Gio |
| B | UBU-LAB | 2,5 Gio | 2 | 40 Gio |
| B | SW-B / Alpine | 0,5 Gio | 1 | 2 Gio |
| Total A / B | 2 VM / 3 VM | 7 / 11 Gio | 4 / 5 | 182 Gio virtuels |

L'hypothèse de 16 Gio physiques sur B n'est pas vérifiée. Mesurer RAM et espace réellement disponibles sur les deux hôtes, garder au moins 20 Gio libres sur chacun et surveiller l'usage pendant la séance. Une capacité virtuelle allouée ne prouve ni l'espace physique disponible ni la fluidité.

## 3. Adressage

| Zone | Réseau | Passerelle | Hôte |
|---|---|---|---|
| MGMT, LAN OPNsense | 10.77.99.0/24 | 10.77.99.1 | Hôte A 10.77.99.254, sans route par défaut |
| CLIENTS, non tagué | 10.77.10.0/24 | 10.77.10.1 | Windows 10.77.10.10 |
| SERVEURS, VLAN 20 | 10.77.20.0/24 | 10.77.20.1 | Ubuntu 10.77.20.10 |
| STOCKAGE, VLAN 30 | 10.77.30.0/24 | 10.77.30.1 | TrueNAS 10.77.30.10 |
| VPN | 10.78.0.0/24 | Tunnel OpenVPN | Adresse attribuée au client |
| WAN simulé | VMnet8 NAT existant | NAT VMware | WAN OPNsense en DHCP |

Vérifier les chevauchements de sous-réseaux avec les réseaux des deux hôtes avant l'installation. Windows, Ubuntu et TrueNAS gardent chacun une seule carte finale ; seul OPNsense a un WAN. SW-B a trois ports. Aucun NAT entre zones, pour préserver les adresses sources dans les journaux. IPv6 du laboratoire est désactivé ou filtré explicitement.

## 4. VMnet et cartes hôte

Les numéros VMnet sont locaux à chaque VMware Workstation ; les deux VMnet12 sont des ponts séparés vers le même câble, pas un VMnet partagé.

| Hôte | VMnet | Type et connexions |
|---|---|---|
| A | VMnet8 | NAT VMware existant : WAN OPNsense et client VPN de l'hôte A |
| A | VMnet13 MGMT | Host-only : LAN OPNsense et hôte A 10.77.99.254 |
| A | VMnet10 CLIENTS | Privé, sans carte hôte/DHCP : OPNsense et WIN-LAB |
| A | VMnet12 TRUNK | Pont explicite vers l'Ethernet dédié : TRUNK OPNsense |
| B | VMnet12 TRUNK | Pont explicite vers l'Ethernet dédié : trunk SW-B |
| B | VMnet10 UBUNTU | Privé, sans carte hôte/DHCP : accès VLAN 20 de SW-B et UBU-LAB |
| B | VMnet11 NAS | Privé, sans carte hôte/DHCP : accès VLAN 30 de SW-B et NAS-LAB |

Sur les cartes Ethernet dédiées des deux PC, conserver VMware Bridge Protocol ; retirer IPv4, IPv6, le client/partage Microsoft et ICS. Pas de pont Windows, DHCP/APIPA, adresse hôte ou IPv6 link-local sur le câble. Pont VMware lié explicitement à cette carte, jamais à Automatic. Ne pas modifier les cartes Wi-Fi.

SW-B a trois ports : trunk VMnet12 avec VLAN 20 et 30 tagués, sans PVID ; port VMnet10 en accès VLAN 20 non tagué/PVID 20 ; port VMnet11 en accès VLAN 30 non tagué/PVID 30. Activer le filtrage VLAN du bridge et fixer le PVID par défaut à 0. Aucun VLAN natif, VLAN 1, adresse de gestion ou routage dans SW-B.

## 5. Règles entre zones

Les règles OPNsense s'appliquent à l'entrée de l'interface ; réponses stateful autorisées, nouvelles connexions non listées refusées et journalisées pour les essais. Éviter les règles any. Les règles locales Ubuntu et Windows s'appliquent aussi.

| Source | Destination | Autorisation |
|---|---|---|
| Hôte A 10.77.99.254 / MGMT | OPNsense et interface TrueNAS | HTTPS 443 |
| MGMT | Ubuntu | SSH 22 par clé, InvoiceShelf 8443, Grafana 3001 |
| Windows 10.77.10.10 | Ubuntu | InvoiceShelf HTTPS 8443 ; Grafana 3001 en lecture |
| Windows 10.77.10.10 | TrueNAS | SMB TCP 445 pour les essais de comptes/ACL |
| Ubuntu 10.77.20.10 | Windows | windows_exporter TCP 9182 seulement |
| OPNsense 10.77.20.1 | Ubuntu | Rsyslog TCP 514 seulement |
| Ubuntu 10.77.20.10 | NAS 10.77.30.10 | SMB TCP 445 uniquement pour l'archive InvoiceShelf arrêtée ; compte et dataset de sauvegarde dédiés |
| Client VPN de l'hôte A via VMnet8 | WAN OPNsense | OpenVPN UDP 1194 seulement |
| VPN | Ubuntu | InvoiceShelf HTTPS TCP 8443 seulement |
| Chaque zone | Passerelle de sa zone | DNS 53 et NTP 123 selon besoin |
| Invités autorisés | Internet, hors réseaux privés | HTTP/HTTPS nécessaires aux mises à jour |

L'accès VPN vers SSH 22, NAS SMB 445 et Grafana 3001 est refusé avec preuve OPNsense. Pousser la route NAS au client VPN pour que ce refus passe par le pare-feu. L'accès direct WAN vers les services internes est refusé. Le compte et le dataset NAS de sauvegarde sont restreints par ACL en plus de la règle réseau ; Windows n'y accède pas. InvoiceShelf garde ses propres comptes et rôles.

Le proxy Nginx publie HTTPS8443 et relaie vers le service InvoiceShelf au port 8080 sur le réseau Docker privé ; 8080 n'est pas publié sur l'hôte. Grafana 3001 reste distinct. Prometheus reste sur 127.0.0.1:9090 dans Ubuntu. Aucune exposition Internet ni règle générale n'est prévue. La configuration de l'application est dans APP.md.

## 6. Premier contrôle et tests communs

Après autorisation et préparation des deux trunks, consacrer les premières 20–30 minutes au seul transport des tags 20/30 entre FW-LAB et SW-B. Capturer côté trunk sur les deux hôtes ; vérifier une communication attendue sur chaque VLAN et l'absence de VLAN natif. Si le transport échoue, conserver captures/erreur, rapporter le blocage et arrêter avant toute configuration approfondie. Ne pas passer la journée à deviner des réglages de pilote.

Après ce passage, vérifier les accès autorisés et refusés avec des services actifs et les journaux correspondants ; vérifier que le port d'accès VLAN 20 rejette un tag VLAN 30 ajouté en essai, tout en gardant Ubuntu sur son accès normal. Vérifier les comptes SMB, l'archive/restauration InvoiceShelf après arrêt, les métriques réelles, le cycle VPN et la persistance après redémarrage. Un ping ou un port fermé seul ne prouve pas une règle efficace.

Les contrôles entre PC commencent quand chaque côté indique être prêt et que les personnes coordonnent le moment. Aucune approbation supplémentaire n'est nécessaire pour ces essais. Tous les résultats restent « non exécutés » jusqu'à une observation réelle ; un script ne constitue pas un résultat.

## 7. Accès hôte et retour arrière

Pour l'administration depuis A, ajouter uniquement les routes du projet vers CLIENTS, VLAN 20 et VLAN 30 via 10.77.99.1 sur MGMT, sans passerelle par défaut. Avant le test VPN, retirer ces routes de projet et désactiver temporairement l'adaptateur MGMT de l'hôte A ; garder les consoles VMware, vérifier le chemin du tunnel, puis rétablir MGMT.

Avant toute modification autorisée, noter VMnet, MAC, ponts, liaisons et routes concernées. Revenir uniquement sur les réglages du laboratoire. Pas de Restore Defaults VMware, suppression de VM ou changement d'autres travaux. Démarrer OPNsense puis SW-B, ensuite Ubuntu/TrueNAS, puis Windows ; arrêter proprement les invités et ne jamais couper l'alimentation pendant une écriture NAS.
