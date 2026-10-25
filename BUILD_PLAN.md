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
| A - jessem8 | OPNsense 3 Gio ; Windows 4 Gio ; Ubuntu 2,5 Gio ; switch Alpine 0,5 Gio | 10 Gio |
| B - sanadzhioua | TrueNAS 8 Gio | 8 Gio |

Le PC A dispose historiquement d'environ 15,7 Gio visibles et d'un i7-13700HX. La RAM et l'espace disponibles aujourd'hui restent à relever. Le PC B est supposé avoir au moins 16 Gio ; cette hypothèse doit être confirmée. Ces sommes n'incluent pas le système hôte, Codex, les navigateurs et les surcoûts VMware.

L'architecture précédente A=7/B=11 Gio plaçait la charge la plus lourde sur le PC B. La nouvelle répartition conserve cinq VM, rapproche la charge des deux machines et évite de transporter des tags VLAN dans le pilote Ethernet physique. Le switch reste une VM distincte afin de séparer la commutation de l'application.

## 3. Schéma physique et logique

```text
PC A : WIN-LAB -> OPNsense -> WAN VMware NAT -> Wi-Fi
                     |
           trunk virtuel privé VLAN20/30
                     |
                    SW-A
              /             \
       accès VLAN20     accès VLAN30
         UBU-LAB       câble non tagué
                             |
PC B :                    NAS-LAB
```

MGMT relie localement l'hôte A à OPNsense pour l'administration. Windows a son propre réseau CLIENTS. Les VLANs réels sont SERVEURS20 et STOCKAGE30 ; MGMT et CLIENTS ne sont pas présentés comme des VLANs.

Le filtrage VLAN doit être activé sur SW-A. Son port Ubuntu accepte seulement VLAN20, son port stockage seulement VLAN30, et son trunk seulement les deux tags. Aucun VLAN natif, IP de gestion ou routage dans le switch. OPNsense assure le routage et les règles entre zones.

Le câble est une extension non taguée du port d'accès stockage, pas un trunk. La capacité de VMware à transporter les MAC derrière le switch reste à tester dans les deux sens. Les administrateurs des hôtes restent de confiance.

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
| Docker | Application de tâches/SQLite, volume persistant, image construite, historique des couches, Docker Bench examiné |
| Réseau | Tags VLAN20/30 sur trunk privé, ports d'accès restreints, règles entrantes/sortantes et absence de contournement |
| VPN | Tunnel chiffré, application autorisée, administration/SMB/Grafana refusés |
| Supervision | Métriques Ubuntu/Windows et disponibilité applicative réelles, panne/reprise observées |
| Exploitation | Redémarrage, règles/services persistants, ressources et démonstration fluide |

La matrice complète est docs/TEST_MATRIX.md. Toutes ses lignes commencent « non exécuté ». Une configuration affichée, un outil installé ou un fichier présent n'est pas une preuve de fonctionnement.

## 6. Choix logiciels

Réutiliser les invités adaptés et les installations vérifiées. Ne pas imposer un retour à Windows Server 2022 ou Ubuntu 24.04 uniquement pour suivre un ancien PDF. Contrôler l'édition réellement démarrée et la compatibilité des commandes avant modification.

OPNsense 26.7.7 avec correctifs disponibles et TrueNAS Community Edition 25.10.7 sont les références vérifiées pendant la préparation. Employer les éditions stables officielles, vérifier les empreintes/signatures et consigner ce qui a réellement été installé. Les numéros exacts des images Docker ne sont pas repris comme des faits sans manifeste consultable.

Application : petit exemple officiel docker/getting-started-app avec SQLite. Nginx sert de proxy HTTPS, pas de remplacement silencieux de l'atelier Docker. Les versions du code, de la base Node et des images seront fixées et enregistrées lors de la préparation approuvée.

Les ports de l'application HTTPS8443 et de Grafana3001 sont distincts. Prometheus et ses collecteurs restent internes. Docker bridge conserve l'isolation réseau ; les règles INPUT et DOCKER-USER/FORWARD sont vérifiées ensemble. Aucun accès Docker distant ou conteneur privilégié non requis.

Les PDF précédents dépendaient d'un kit_demain non fourni et non retrouvé dans Downloads. Cette proposition ne demande pas d'exécuter ce kit. Les configurations sont créées, relues et versionnées pendant les tâches attribuées, puis exécutées seulement dans le périmètre approuvé. Aucun script absent n'est présenté comme prêt ou contrôlé.

## 7. Préserver la fluidité

1. Garder 8 Gio pour TrueNAS, les allocations du tableau et un historique Prometheus court.
2. Installer et mettre à jour les invités séparément ; construire les images et lancer ClamAV hors répétition complète.
3. Ne lancer aucune VM d'un autre cours ; garder les disques actifs hors OneDrive et éviter les longues chaînes de snapshots.
4. Commencer avec deux vCPU par invité de service, un pour SW-A ; ne pas attribuer tous les processeurs logiques à chaque VM.
5. Mesurer tous les invités ensemble pendant une répétition d'au moins 10 minutes : navigation/app, petite copie SMB, collecte et VPN.
6. Relever RAM disponible/engagée et pagination des hôtes, swap/OOM des invités et temps de réponse. Objectifs de départ : au moins environ 2 Gio disponibles par hôte, pas de pagination/swap soutenue et des actions courantes répondant en quelques secondes.

Ces objectifs sont des seuils de travail, pas une certification de performance. Si la répétition échoue : fermer les applications hôtes non nécessaires, terminer les mises à jour, réduire rétention/collectes superflues, puis refaire un contrôle ciblé. Ne pas désactiver Defender, supprimer un contrôle requis ou déclarer qu'une exécution par étapes prouve l'intégration simultanée.

Conserver au moins 20 Gio physiques libres au démarrage et arrêter les écritures non nécessaires si l'espace devient insuffisant. Ni thin provisioning ni miroir de VMDK ne créent de capacité physique.

## 8. Travail de la journée

Les créneaux ci-dessous sont indicatifs à partir du début autorisé. Les téléchargements, l'état initial des VM et les corrections peuvent les prolonger. Trois étudiants ont été évoqués ; ne pas planifier automatiquement quatre personnes.

| Créneau relatif | PC A | PC B |
|---|---|---|
| Début, 30-45 min | Inventaire, sauvegarde des réglages, VMnet/MAC | Inventaire, stockage disponible, Ethernet |
| Puis 1-2 h | OPNsense/SW-A, VLAN20 local ; installations séquencées | Installation et préparation TrueNAS |
| Puis 2-3 h | Windows, application, audit, Docker et supervision | Dataset, ACL, chiffrement et preuves locales |
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

Exigences : brief de projet examiné localement, atelier Docker et grille déjà inspectés ; clarification de présentation transmise par l'utilisateur. Les anciens documents sont conservés dans sources/original comme références historiques, sans autorité d'exécution.

- [OPNsense 26.7](https://docs.opnsense.org/releases/CE_26.7.html)
- [VLANs OPNsense](https://docs.opnsense.org/manual/how-tos/vlan_and_lagg.html)
- [Réglages du pare-feu OPNsense](https://docs.opnsense.org/manual/firewall_settings.html)
- [Bridge VLAN Linux](https://docs.kernel.org/networking/bridge.html)
- [Réseau dédié VMware](https://knowledge.broadcom.com/external/article/307810/creating-subnets-in-vmware-workstation.html)
- [TrueNAS 25.10.7 et empreintes](https://download.truenas.com/TrueNAS-SCALE-Goldeye/25.10.7/)
- [Matériel TrueNAS](https://www.truenas.com/docs/scale/25.10/gettingstarted/scalehardwareguide/)
- [Application Docker de l'atelier](https://github.com/docker/getting-started-app)
- [Docker et iptables](https://docs.docker.com/engine/network/firewall-iptables/)
- [Docker Bench for Security](https://github.com/docker/docker-bench-security)
- [Sysmon Microsoft](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon)
- [Windows exporter](https://github.com/prometheus-community/windows_exporter)

Les sources techniques principales ont été consultées pendant la revue ; elles n'établissent pas la compatibilité effective des pilotes de ces deux PC. État actuel : architecture relue, documents préparés ; aucune installation, capture VLAN, mesure de charge, restauration ou connexion VPN exécutée dans cette préparation.
