# Application du laboratoire : Vikunja

Le professeur laisse le choix de l'application libre. Vikunja 2.7.1 remplace Homebox pour une démonstration cohérente des VLAN, du VPN, des permissions, de Docker, des sauvegardes et de la supervision. Aucun changement de VM, réseau ou allocation mémoire.

## Scénario de démonstration

Vikunja est un gestionnaire collaboratif de projets/tâches (vue Kanban, pièces jointes). Le partage d'un projet propose trois niveaux : **Read**, **Read & Write**, **Admin**. Il n'est pas présenté comme un inventaire de matériel.

Créer un projet fictif « Lab virtualisation » avec des tâches OPNsense, VLAN, VPN et NAS. Démontrer qu'un éditeur ajoute/modifie une tâche avec une petite pièce jointe, qu'un lecteur consulte sans pouvoir modifier et qu'un visiteur non connecté n'accède pas au projet privé. Démontrer ensuite la persistance, une restauration sur TrueNAS et l'observation d'une panne/reprise via Grafana. GitHub reste le canal de coordination de l'équipe.

## Déploiement prévu sur Ubuntu B, après accord

- **Application** : image officielle `vikunja/vikunja:2.7.1` (version fixe), API et interface dans un seul conteneur avec SQLite intégrée, sans base ni worker supplémentaires. Version/image répertoriées dans les sources officielles ; pas encore téléchargées/exécutées sur le laboratoire.
- **Accès** : conserver le petit Nginx HTTPS existant, publié seulement sur `10.77.20.10:8443` et relayé vers `http://vikunja:3456` sur le Docker bridge interne. Ne pas publier 3456 sur l'hôte ni le WAN ; vérifier les règles INPUT et DOCKER-USER/FORWARD.
- **Persistance** : nouveaux dossiers locaux `/srv/lab/vikunja/db` monté sur `/db` (fichier `/db/vikunja.db`) et `/srv/lab/vikunja/files` monté sur `/app/vikunja/files`. L'image officielle utilise UID1000 ; autoriser l'écriture uniquement sur ces nouveaux dossiers. Pas de base SQLite active sur SMB.
- **Configuration** : `VIKUNJA_SERVICE_PUBLICURL=https://10.77.20.10:8443/` (barre finale), `VIKUNJA_DATABASE_TYPE=sqlite`, et `VIKUNJA_SERVICE_SECRET` aléatoire, stable et stocké dans une configuration privée hors Git. Conserver le secret lors d'une restauration.
- **Nginx/TLS** : certificat avec SAN IP 10.77.20.10, validé depuis Windows et le VPN ; passer Host, X-Forwarded-For et X-Forwarded-Proto. Pour l'IP réelle du client, `VIKUNJA_SERVICE_IPEXTRACTIONMETHOD=xff` exige `VIKUNJA_SERVICE_TRUSTEDPROXIES` limité à l'adresse effective du proxy, à mesurer au déploiement.
- **Comptes** : n'autoriser au départ que MGMT, créer les comptes de test, puis désactiver les inscriptions via `VIKUNJA_SERVICE_ENABLEREGISTRATION=false` et le partage par lien via `VIKUNJA_SERVICE_ENABLELINKSHARING=false`, avant d'ouvrir Windows et VPN. Vérifier les effets réels de ces réglages.
- **Permissions** : partager uniquement le projet de test en Read avec le lecteur, Read & Write avec l'éditeur. Vérifier d'autres partages/héritages éventuels pour que le test de refus soit probant. Aucune permission de gestion globale n'est nécessaire au lecteur.
- **Charge** : Ubuntu conserve 2,5 Gio pour application, sécurité, logs et supervision. Mesurer la consommation simultanée avec Prometheus/Grafana au lieu de supposer la fluidité.

## Persistance, sauvegarde et test de panne

Recréer le conteneur sans supprimer les deux montages : comptes, projets, tâches et pièces jointes doivent rester. Le VPN ne donne accès qu'au HTTPS8443, pas à SSH, SMB ou Grafana.

Pour une copie cohérente, **arrêter proprement Vikunja**, archiver ensemble les dossiers `db` et `files` avec sa configuration et le secret privés, puis copier l'archive vers `tank/app-backups` via le compte NAS dédié `app-backup`. Garder les identifiants du NAS dans un fichier root privé sur Ubuntu, hors conteneur et hors Git. Ne jamais copier une base SQLite active vers un partage SMB.

Restaurer une copie dans un dossier distinct sans écraser le service actif ; vérifier une tâche et le hash de sa pièce jointe. Contrôler la disponibilité HTTPS avec validation du certificat, arrêter volontairement l'application, vérifier l'alerte/indisponibilité et le retour sain dans Grafana. Ces tests restent **non exécutés** tant qu'ils ne sont pas autorisés et observés.

## Atelier Docker du cours

Construire et inspecter le tutoriel `getting-started`, conserver les preuves d'image/historique des couches, puis arrêter l'exemple. Vikunja demeure la seule application permanente. Inspecter l'image Vikunja et exécuter Docker Bench uniquement après revue du script ; ne pas compiler Vikunja depuis les sources.

## Documentation officielle

- [Installation Docker et SQLite](https://vikunja.io/docs/installing/)
- [Exemple Docker avec SQLite](https://vikunja.io/docs/full-docker-example/)
- [Configuration et variables](https://vikunja.io/docs/config-options/)
- [Proxy Nginx](https://vikunja.io/docs/reverse-proxy/)
- [Droits Read / Read & Write / Admin](https://vikunja.io/help/permissions/)
- [Release v2.7.1](https://github.com/go-vikunja/vikunja/releases/tag/v2.7.1)

Sources consultées le 25 octobre 2026. Aucun invité, réseau, service, conteneur, compte, certificat, test ou sauvegarde n'a été exécuté pendant cette modification documentaire.
