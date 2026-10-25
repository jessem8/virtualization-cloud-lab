# Plan de travail - deux PC

Proposition du 25 octobre 2026. Les anciens plans et les PDF fournis ont été examinés comme des propositions, pas comme des configurations validées. Le présent plan attend une revue dans GitHub avant de commencer les modifications du laboratoire.

## 1. Objectif et périmètre

Terminer un laboratoire de virtualisation sécurisé sur deux PC physiques au maximum, puis présenter son fonctionnement avec des preuves réelles. Les PC sont ensemble et un câble Ethernet est disponible ; le Wi-Fi fournit Internet. Cette décision remplace l'ancienne hypothèse de domiciles séparés.

Livrable pédagogique : présentation et démonstration, sans rapport séparé selon la clarification transmise par l'utilisateur. Garder le schéma, les configurations et les résultats pour la répétition et la récupération. Ne pas inventer un atelier VM-to-VM escape ; présenter les limites d'isolation et les contrôles effectivement réalisés.

Conserver Windows, Ubuntu, TrueNAS, une application Docker, OPNsense, deux VLANs 802.1Q, un VPN restreint et Prometheus/Grafana. Aucun cloud public, ESXi imbriqué, Kubernetes, domaine AD ou plateforme supplémentaire n'est nécessaire.

Les documents préparent les travaux. Aucun invité, réseau, VPN, NAS ou scénario n'est déclaré fonctionnel avant son contrôle. La préparation des guides n'autorise pas leur exécution.

## 2. Répartition proposée

| PC | Invités et allocation initiale | Total invité |
|---|---|---|
| A - jessem8 | OPNsense 3 Gio ; Windows 4 Gio | 7 Gio |
| B - sanadzhioua | TrueNAS 8 Gio ; Ubuntu 2,5 Gio ; switch Alpine 0,5 Gio | 11 Gio |

Le PC A dispose historiquement d'environ 15,7 Gio visibles et d'un i7-13700HX. La RAM et l'espace disponibles aujourd'hui restent à relever. Le PC B est supposé avoir au moins 16 Gio ; cette hypothèse doit être confirmée. Ces sommes n'incluent pas le système hôte, Codex, les navigateurs et les surcoûts VMware.

Cette révision déplace Ubuntu, l'application, la supervision et le switch vers B : A gère réseau/Windows/VPN, B gère stockage/services. Les cinq VM et les 18 Gio alloués au total restent identiques. Le travail est mieux réparti ; la mémoire n'est pas égale, et B garde moins de marge. Vérifier sa capacité avant installation. Aucun nouveau composant n'est ajouté.

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
| Docker | Homebox/SQLite, inventaire/documents/authentification, persistance et récupération ; exercice du cours, historique des couches et Docker Bench |
| Réseau | Tags VLAN20/30 sur trunk Ethernet, ports d'accès restreints, règles entrantes/sortantes et absence de contournement |
| VPN | Tunnel chiffré, application autorisée, administration/SMB/Grafana refusés |
| Supervision | Métriques Ubuntu/Windows et disponibilité applicative réelles, panne/reprise observées |
| Exploitation | Redémarrage, règles/services persistants, ressources et démonstration fluide |

La matrice complète est docs/TEST_MATRIX.md. Toutes ses lignes commencent « non exécuté ». Une configuration affichée, un outil installé ou un fichier présent n'est pas une preuve de fonctionnement.

## 6. Choix logiciels

Réutiliser les invités adaptés et les installations vérifiées. Ne pas imposer un retour à Windows Server 2022 ou Ubuntu 24.04 uniquement pour suivre un ancien PDF. Contrôler l'édition réellement démarrée et la compatibilité des commandes avant modification.

OPNsense 26.7.7 avec correctifs disponibles et TrueNAS Community Edition 25.10.7 sont les références vérifiées pendant la préparation. Employer les éditions stables officielles, vérifier les empreintes/signatures et consigner ce qui a réellement été installé. Les numéros exacts des images Docker ne sont pas repris comme des faits sans manifeste consultable.

Application finale : Homebox rootless avec SQLite, sur Ubuntu du PC B, derrière un petit proxy Nginx HTTPS. Un conteneur applicatif et le proxy, sans base externe ni worker supplémentaire. Démonstration : fiches équipement, documents/photos joints, connexion, persistance et sauvegarde NAS cohérente. Voir docs/APP.md pour les paramètres et sources officielles.

L'atelier Docker demandé au cours reste un exercice court : construire et expliquer l'exemple getting-started, garder les preuves puis l'arrêter. Homebox est le seul service applicatif permanent ; ne pas construire Homebox depuis les sources pour cette séance.

Les ports de l'application HTTPS8443 et de Grafana3001 sont distincts. Prometheus et ses collecteurs restent internes. Docker bridge conserve l'isolation réseau ; les règles INPUT et DOCKER-USER/FORWARD sont vérifiées ensemble. Aucun accès Docker distant ou conteneur privilégié non requis.

Les guides sont désormais uniquement en Markdown. Les anciens PDF et leur chaîne d'export sont retirés du dépôt ; les originaux locaux restent inchangés. Ne pas exécuter un kit externe absent : les configurations d'exploitation seront créées/relues dans les tâches approuvées. Aucun script absent n'est présenté comme prêt.

## 7. Préserver la fluidité

1. Garder 8 Gio pour TrueNAS, 11 Gio invités au total sur B, 7 sur A et un historique Prometheus court. B doit confirmer au moins 16 Gio physiques et sa marge réelle ; un total théorique ne suffit pas.
2. Installer et mettre à jour les invités séparément ; construire les images et lancer ClamAV hors répétition complète.
3. Ne lancer aucune VM d'un autre cours ; garder les disques actifs hors OneDrive et éviter les longues chaînes de snapshots.
4. Commencer avec deux vCPU par invité de service, un pour SW-B ; ne pas attribuer tous les processeurs logiques à chaque VM.
5. Mesurer tous les invités ensemble pendant une répétition d'au moins 10 minutes : navigation/app, petite copie SMB, collecte et VPN.
6. Relever RAM disponible/engagée et pagination des hôtes, swap/OOM des invités et temps de réponse. Objectifs de départ : au moins environ 2 Gio disponibles par hôte, pas de pagination/swap soutenue et des actions courantes répondant en quelques secondes.

Ces objectifs sont des seuils de travail, pas une certification de performance. Si la répétition échoue : fermer les applications hôtes non nécessaires, terminer les mises à jour, réduire rétention/collectes superflues, puis refaire un contrôle ciblé. Ne pas désactiver Defender, supprimer un contrôle requis ou déclarer qu'une exécution par étapes prouve l'intégration simultanée.

Conserver au moins 20 Gio physiques libres au démarrage et arrêter les écritures non nécessaires si l'espace devient insuffisant. Ni thin provisioning ni miroir de VMDK ne créent de capacité physique.

## 8. Travail de la journée

Les créneaux ci-dessous sont indicatifs à partir du début autorisé. Les téléchargements, l'état initial des VM et les corrections peuvent les prolonger. Trois étudiants ont été évoqués ; ne pas planifier automatiquement quatre personnes.

| Créneau relatif | PC A | PC B |
|---|---|---|
| Début, 30-45 min | Inventaire, sauvegarde des réglages, VMnet/MAC | Inventaire, stockage disponible, Ethernet |
| Puis 1-2 h | OPNsense et VLANs ; contrôle du trunk avec B | SW-B et Ubuntu minimal ; contrôle du trunk avec A |
| Puis 2-3 h | Windows, Sysmon/audit, règles et VPN | TrueNAS, Homebox, Ubuntu/audit, Docker et supervision |
| Quand les deux sont prêts | Contrôles de transport, règles, partages et VPN | Contrôles croisés et restauration |
| Dernières 1,5-2 h | Redémarrage, ressources, présentation, répétition | Même répétition, preuves et sauvegardes |

Garder le chemin réseau prioritaire. Un blocage prolongé se partage avec l'erreur exacte avant d'ajouter un nouveau composant. La contrainte « aujourd'hui » ne transforme pas un test absent en succès. Les fonctions de sécurité requises passent avant les améliorations décoratives ou un nouvel outil.

## 9. Échanges GitHub

Un dépôt privé, une PR de plan et deux responsabilités de machine suffisent. sanadzhioua relit la proposition et confirme si le PC A peut commencer sur la révision courante. Une approbation GitHub normale ou un commentaire explicite de cet autre participant suffit ; pas de commande spéciale ni de workflow de déploiement.

Chaque Codex travaille sur sa machine et publie de courts points d'avancement et des preuves sans secrets. Le PC B peut commencer son périmètre quand son utilisateur ou l'autre participant l'y autorise. Les tests entre machines attendent que les deux côtés indiquent qu'ils sont prêts et coordonnent leur disponibilité.

Voir docs/COORDINATION.md. La présence du dépôt, une invitation ou les PDF ne constituent pas un accord de démarrage. Une modification importante de topologie/sécurité se revoit avant exécution. Les contrôles de documents et l'inventaire en lecture seule sont permis pendant la préparation.

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
- [Homebox maintenu](https://github.com/sysadminsmedia/homebox)
- [Installation Homebox](https://github.com/sysadminsmedia/homebox/blob/main/docs/src/content/docs/en/quick-start/install.mdx)
- [Proxy HTTPS Homebox](https://github.com/sysadminsmedia/homebox/blob/main/docs/src/content/docs/en/quick-start/configure/proxy.mdx)
- [Exercice Docker du cours](https://github.com/docker/getting-started-app)
- [Docker et iptables](https://docs.docker.com/engine/network/firewall-iptables/)
- [Docker Bench for Security](https://github.com/docker/docker-bench-security)
- [Sysmon Microsoft](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)
- [Windows exporter](https://github.com/prometheus-community/windows_exporter)

Les sources techniques principales ont été consultées pendant la revue ; elles n'établissent pas la compatibilité effective des pilotes de ces deux PC. État actuel : architecture relue, documents préparés ; aucune installation, capture VLAN, mesure de charge, restauration ou connexion VPN exécutée dans cette préparation.
