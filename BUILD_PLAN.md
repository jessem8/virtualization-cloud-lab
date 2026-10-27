# Plan de travail - deux PC

Mis à jour le 27 octobre 2026. Les anciens plans et les PDF fournis restent des références historiques, pas des configurations validées. L’utilisateur a directement autorisé la configuration du PC A dans la prochaine tâche dédiée ; cette autorisation n’attend pas une validation par un pair ou une PR.

## 1. Objectif et périmètre

Terminer un laboratoire de virtualisation sécurisé sur deux PC physiques au maximum, puis présenter son fonctionnement avec des preuves réelles. Les PC sont ensemble et un câble Ethernet est disponible ; le Wi-Fi fournit Internet. Cette décision remplace l'ancienne hypothèse de domiciles séparés.

Livrable pédagogique : présentation et démonstration, sans rapport séparé selon la clarification transmise par l'utilisateur. Garder le schéma, les configurations et les résultats pour la répétition et la récupération. Ne pas inventer un atelier VM-to-VM escape ; présenter les limites d'isolation et les contrôles effectivement réalisés.

Conserver Windows, Ubuntu, TrueNAS, une application Docker, OPNsense, deux VLANs 802.1Q, un VPN restreint et Prometheus/Grafana. Aucun cloud public, ESXi imbriqué, Kubernetes, domaine AD ou plateforme supplémentaire n'est nécessaire.

Ce plan décrit une cible. Aucun invité, réseau, VPN, NAS ou scénario n'est déclaré fonctionnel avant son contrôle réel.

## 2. Répartition proposée

| PC | Invités et allocation cible | Total invité |
|---|---|---|
| A - jessem8 | OPNsense 3 Gio ; Windows 4 Gio | 7 Gio |
| B - sanadzhioua | TrueNAS 8 Gio ; Ubuntu 2,5 Gio ; switch Alpine 0,5 Gio | 11 Gio |

La capacité actuellement disponible sur chaque hôte reste à confirmer. L’inventaire transmis pour B indique des VM préparées à 6 Gio pour TrueNAS et 4 Gio pour Ubuntu Desktop, contre des cibles de 8 Gio et 2,5 Gio. Confirmer avec Sanad la RAM physique libre et le choix des allocations avant de les modifier ; voir [état de B](evidence/PC_B_STATUS.md). Les totaux invités n’incluent pas l’hôte, Codex, les navigateurs ni VMware.

Ubuntu, l’application, la supervision et le switch restent prévus sur B ; A gère le réseau, Windows et le VPN. Les cinq VM et les allocations du tableau sont des cibles, pas une mesure de capacité ni une preuve de démarrage simultané.

## 3. Schéma physique et logique

```text
PC A : WIN-LAB -> OPNsense -> WAN VMware NAT -> Wi-Fi
                     |
           Ethernet tagué VLAN20/30
                     |
PC B :              SW-B
              /             \
       accès VLAN20     accès VLAN30
         UBU-LAB           NAS-LAB
```

MGMT relie localement l'hôte A à OPNsense pour l'administration. Windows a son propre réseau CLIENTS. Les VLANs réels sont SERVEURS20 et STOCKAGE30 ; MGMT et CLIENTS ne sont pas présentés comme des VLANs.

Le filtrage VLAN est activé sur SW-B. Son port Ubuntu accepte seulement VLAN20, son port stockage seulement VLAN30, son trunk seulement ces deux tags. Aucun VLAN natif, IP de gestion ou routage dans le switch. OPNsense sur A filtre les échanges entre les zones.

Le câble est maintenant un trunk 802.1Q20/30. VMware, les cartes Ethernet et leurs pilotes doivent laisser passer les tags et les MAC dans les deux sens. Consacrer les 20-30 premières minutes de configuration réseau autorisée à ce contrôle, avant les services. En cas d'échec, conserver captures/erreur et arrêter pour revoir le point précis ; ne pas passer la journée à changer des pilotes au hasard. Les hôtes restent de confiance.

## 4. Adressage et interfaces

| Zone | Réseau | Passerelle | Équipement principal |
|---|---|---|---|
| MGMT | 10.77.99.0/24 | 10.77.99.1 | Hôte A .254 |
| CLIENTS | 10.77.10.0/24 | 10.77.10.1 | Windows .10 |
| SERVEURS, VLAN20 | 10.77.20.0/24 | 10.77.20.1 | Ubuntu .10 |
| STOCKAGE, VLAN30 | 10.77.30.0/24 | 10.77.30.1 | TrueNAS .10 |
| VPN | 10.78.0.0/24 | Tunnel | Client authentifié |
| WAN | VMnet8 existant | NAT existant | OPNsense DHCP |

Vérifier les chevauchements avant de réserver ces plages. Le plan détaillé des VMnet, MAC, routes et règles est dans docs/LIAISON.md et docs/MACHINE_A.md. Changer une plage exige de modifier les configurations et documents associés ensemble.

Chaque invité de service a une seule carte finale. Seul OPNsense a une carte WAN. Les cartes NAT temporaires sont retirées avant validation. L'Ethernet physique n'a pas de pile IP hôte, partage Internet ou pont Windows. Ne pas toucher au Wi-Fi ni aux anciens travaux.

## 5. Fonctionnalités et preuves à conserver

| Domaine | Résultat attendu |
|---|---|
| Windows | Defender actif, pare-feu local, Sysmon 1/3, audit Security réel |
| Ubuntu | SSH par clé, refus mot de passe/root, iptables persistant, rsyslog, auditd et protection |
| NAS | SMB autorisé/refusé, lecture seule, dataset chiffré, clé privée et restauration de fichier |
| Docker | InvoiceShelf 2.4.7/SQLite locale, comptes et rôle limité, facture fictive et PDF, persistance et restauration ; exercice du cours, couches d’image et Docker Bench |
| Réseau | Tags VLAN20/30 sur trunk Ethernet, ports d'accès restreints, règles entrantes/sortantes et absence de contournement |
| VPN | Tunnel chiffré, application autorisée, administration/SMB/Grafana refusés |
| Supervision | Métriques Ubuntu/Windows et disponibilité applicative réelles, panne/reprise observées |
| Exploitation | Redémarrage, règles/services persistants, ressources et démonstration fluide |

La matrice complète est docs/TEST_MATRIX.md. Toutes ses lignes commencent « non exécuté ». Une configuration affichée, un outil installé ou un fichier présent n'est pas une preuve de fonctionnement.

## 6. Choix logiciels

Réutiliser les invités adaptés et les installations vérifiées. Ne pas imposer un retour à Windows Server 2022 ou Ubuntu 24.04 uniquement pour suivre un ancien PDF. Contrôler l'édition réellement démarrée et la compatibilité des commandes avant modification.

OPNsense 26.7.7 et TrueNAS Community Edition 25.10.7 sont les versions de référence de la préparation ; vérifier leur disponibilité stable, les empreintes/signatures et ce qui est réellement installé.

Application finale : image officielle InvoiceShelf 2.4.7 sur Ubuntu B, SQLite dans le stockage local persistant d’Ubuntu et Nginx terminant HTTPS sur 8443 vers le service interne `webapp:8080`. Pas de base externe, de worker séparé ou de montage SMB actif pour SQLite. Démonstration : comptes/permissions, facture fictive, génération PDF, persistance et restauration depuis une archive cohérente. Voir [docs/APP.md](docs/APP.md).

L’atelier Docker du cours reste court : construire et expliquer `docker/getting-started-app`, montrer ses couches puis l’arrêter. InvoiceShelf est le seul service applicatif permanent.

L’application HTTPS 8443 et Grafana 3001 sont des services distincts. Prometheus et ses collecteurs restent internes ; le collecteur Windows utilise 9182 et le syslog d’Ubuntu TCP 514. Les règles hôte Docker et DOCKER-USER/FORWARD sont examinées ensemble. Aucun accès Docker distant ou conteneur privilégié n’est requis.

Les guides actuels sont en Markdown ; les PDF retirés restent des références historiques. Les configurations d'exploitation seront créées et vérifiées pendant leur tâche dédiée.

## 7. Préserver la fluidité

1. Cibler 8 Gio pour TrueNAS, 11 Gio invités au total sur B, 7 sur A et un historique Prometheus court. Avant d’augmenter l’allocation TrueNAS, confirmer la RAM physique disponible et la marge réelle de B ; voir [état de B](evidence/PC_B_STATUS.md).
2. Installer et mettre à jour les invités séparément ; construire les images et lancer ClamAV hors répétition complète.
3. Ne lancer aucune VM d'un autre cours ; garder les disques actifs hors OneDrive et éviter les longues chaînes de snapshots.
4. Commencer avec deux vCPU par invité de service, un pour SW-B ; ne pas attribuer tous les processeurs logiques à chaque VM.
5. Mesurer tous les invités ensemble pendant une répétition d'au moins 10 minutes : navigation/app, petite copie SMB, collecte et VPN.
6. Relever RAM disponible/engagée et pagination des hôtes, swap/OOM des invités et temps de réponse. Objectifs de départ : au moins environ 2 Gio disponibles par hôte, pas de pagination/swap soutenue et des actions courantes répondant en quelques secondes.

Ces objectifs sont des seuils de travail, pas une certification de performance. Si la répétition échoue : fermer les applications hôtes non nécessaires, terminer les mises à jour, réduire rétention/collectes superflues, puis refaire un contrôle ciblé. Ne pas désactiver Defender, supprimer un contrôle requis ou déclarer qu'une exécution par étapes prouve l'intégration simultanée.

Conserver au moins 20 Gio physiques libres au démarrage et arrêter les écritures non nécessaires si l'espace devient insuffisant. Ni thin provisioning ni miroir de VMDK ne créent de capacité physique.

## 8. Ordre de travail

1. Terminer la présentation et aligner les documents. Cette étape ne modifie ni les VM ni les réseaux.
2. Configurer le PC A dans la prochaine tâche dédiée, sous l’autorisation directe donnée le 27 octobre.
3. Rencontrer Sanad pour finir le PC B et confirmer ses allocations de ressources.
4. Quand les deux côtés indiquent qu’ils sont prêts, tester ensemble le trunk VLAN20/30 pendant 20 à 30 minutes. En cas d’échec, conserver l’erreur et s’arrêter pour diagnostiquer.
5. Continuer alors avec le filtrage, InvoiceShelf, les partages NAS, le VPN, la supervision, la restauration et la répétition de charge.

## 9. Coordination

Le dépôt privé et une PR suffisent pour partager le plan, les progrès et les preuves. La PR sert à coordonner ; elle n’est pas un prérequis à la configuration du PC A, directement autorisée par l’utilisateur le 27 octobre. Finir le PC B avec Sanad, après autorisation de la personne responsable de ce PC. Lancer les tests entre machines quand les deux côtés indiquent qu’ils sont prêts. Revoir ensemble les changements importants de topologie ou de sécurité avant de les appliquer. Ne pas publier de secrets. Voir [docs/COORDINATION.md](docs/COORDINATION.md).

## 10. Présentation et sauvegardes

Présenter chronologiquement : objectif/rôles, architecture, communications, TrueNAS, pare-feu/règles, VLANs, VPN, protections, Docker, supervision, tests et restauration. Garder une ou deux captures lisibles par point et expliquer le trajet d'un paquet autorisé puis refusé.

Conserver configurations, versions, résultats et fichiers utiles dans des emplacements appropriés. Pas de mot de passe, profil VPN, clé privée, clé NAS, export de pare-feu non expurgé ou disque VM sur GitHub. Un snapshot n'est pas une sauvegarde indépendante. Les fichiers critiques de récupération restent dans une copie privée séparée.

Le VPN prévu est un tunnel réel sur WAN simulé VMware. Il ne prouve pas un accès depuis Internet public. Les disques virtuels TrueNAS conviennent au laboratoire, pas à du stockage critique.

## 11. Références et état de vérification

Exigences : brief de projet examiné localement, atelier Docker et grille déjà inspectés ; clarification de présentation transmise par l'utilisateur. Les anciens documents sont des références historiques, pas une autorité d'exécution. Leurs copies PDF ont été retirées à la demande de l'utilisateur ; l'historique Git conserve la révision précédente.

- [OPNsense 26.7](https://docs.opnsense.org/releases/CE_26.7.html)
- [VLANs OPNsense](https://docs.opnsense.org/manual/how-tos/vlan_and_lagg.html)
- [Réglages du pare-feu OPNsense](https://docs.opnsense.org/manual/firewall_settings.html)
- [Bridge VLAN Linux](https://docs.kernel.org/networking/bridge.html)
- [Réseau dédié VMware](https://knowledge.broadcom.com/external/article/307810/creating-subnets-in-vmware-workstation.html)
- [TrueNAS 25.10.7 et empreintes](https://download.truenas.com/TrueNAS-SCALE-Goldeye/25.10.7/)
- [Matériel TrueNAS](https://www.truenas.com/docs/scale/25.10/gettingstarted/scalehardwareguide/)
- [InvoiceShelf 2.4.7, version stable](https://github.com/InvoiceShelf/InvoiceShelf/releases/tag/2.4.7)
- [InvoiceShelf, guide Docker officiel](https://github.com/InvoiceShelf/docker)
- [InvoiceShelf 2.4.7, exemple Docker SQLite](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/docker/production/docker-compose.sqlite.yml)
- [InvoiceShelf 2.4.7, permissions](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/config/abilities.php)
- [Exercice Docker du cours](https://github.com/docker/getting-started-app)
- [Docker et iptables](https://docs.docker.com/engine/network/firewall-iptables/)
- [Docker Bench for Security](https://github.com/docker/docker-bench-security)
- [Sysmon Microsoft](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)
- [Windows exporter](https://github.com/prometheus-community/windows_exporter)

Les artefacts officiels InvoiceShelf 2.4.7 ont été consultés le 27 octobre pour confirmer l’image, le port interne, les variables SQLite, les chemins persistants et la clé applicative. Les autres sources techniques n’établissent pas la compatibilité effective des pilotes de ces PC. État actuel : documents préparés ; aucune installation, capture VLAN, mesure de charge, restauration ou connexion VPN exécutée dans cette mise à jour.
