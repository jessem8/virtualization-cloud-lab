# Application du laboratoire : Homebox

Choix du 25 octobre 2026 après la préférence utilisateur pour un mélange léger d'inventaire et de documents. Le tutoriel et Gitea ne sont pas les applications finales.

## Usage

Un registre privé des équipements du laboratoire : les deux PC, leurs VM, emplacements, champs utiles, photos, guides joints et suivi de maintenance. Utiliser des données de démonstration. Homebox fournit inventaire et pièces jointes ; ce n'est ni un helpdesk complet ni une plateforme de synchronisation de fichiers.

La démonstration relie directement les besoins : créer une fiche équipement, joindre un guide/image, retrouver la fiche, vérifier l'accès authentifié, sauvegarder les données vers TrueNAS et restaurer une copie. GitHub reste la coordination des Codex.

## Composants limités

- Homebox, image maintenue sysadminsmedia, variante rootless, SQLite et interface incluses.
- Un petit proxy Nginx pour HTTPS8443. Homebox7745 reste uniquement sur le réseau Docker interne.
- Aucun serveur de base séparé, Redis, worker, runner ou nouvelle VM. Grafana reste sur3001 et Prometheus sur127.0.0.1:9090.

Le tag stable 0.27.1-rootless a répondu200 au registre officiel pendant cette préparation. Son index de manifeste est sha256:6bb4472e91d3084d292ce654772e26df765d01aa0d38aa7077a7bb07b7d44ac7. La release v0.27.1 est publiée sans indicateur prerelease. Cela prouve la présence de l'image, pas son fonctionnement ici.

## Préparation sur Ubuntu du PC B, après accord

1. Utiliser Docker bridge, INPUT et DOCKER-USER/FORWARD cohérents avec LIAISON.md. Seul Nginx publie 10.77.20.10:8443 vers443 dans son conteneur ; ne pas publier7745.
2. Épingler l'image ghcr.io/sysadminsmedia/homebox:0.27.1-rootless avec le digest vérifié. Épingler aussi le proxy maintenu retenu. Pas de nightly ou latest flottant.
3. Monter un stockage persistant local /srv/lab/homebox/data vers /data. La documentation rootless indique UID/GID65532 ; donner les droits au nouveau dossier dédié seulement, sans modifier un ancien répertoire.
4. Générer un pepper aléatoire fort dans un fichier privé, l'injecter localement comme HBOX_AUTH_API_KEY_PEPPER sans l'afficher ni le publier. Sauvegarder ce secret avec la configuration privée. Ne pas recopier le faux secret de l'exemple officiel.
5. Définir HBOX_OPTIONS_ALLOW_ANALYTICS=false, HBOX_WEB_MAX_UPLOAD_SIZE=10 et TZ=Africa/Tunis. Désactiver les fonctionnalités/intégrations inutiles.
6. Configurer Nginx selon le guide officiel de proxy : certificat SAN10.77.20.10 vérifié côté client, proxy vers homebox:7745, en-têtes Host/X-Real-IP/X-Forwarded-For/X-Forwarded-Proto et WebSocket. Régler HBOX_OPTIONS_TRUST_PROXY=true uniquement parce que le backend est isolé derrière ce proxy ; ne pas accepter un accès direct non filtré.
7. Pendant le premier démarrage, n'autoriser que MGMT. Créer les comptes/groupes de démonstration, puis fixer HBOX_OPTIONS_ALLOW_REGISTRATION=false et vérifier que l'inscription libre est fermée avant d'autoriser Windows/VPN.
8. Tester les droits réellement disponibles. Ne pas inventer un rôle lecture seule ou une portée API limitée : les API keys Homebox n'ont pas de portée fine dans le code consulté. Aucun token API n'est requis pour la démonstration.

Le budget Ubuntu reste2,5Gio avec monitoring/journaux et doit être mesuré avec les autres invités. Les chiffres mémoire annoncés par le projet ne constituent pas une mesure de notre lab. Ne pas ajouter des composants pour transformer Homebox en suite métier.

## Démonstration et récupération

Créer des fiches PC-A, PC-B et NAS-LAB avec un emplacement, un état et une note de maintenance. Ajouter un petit guide texte et une image synthétique. Prouver : utilisateur autorisé capable de retrouver/modifier la fiche ; visiteur non connecté incapable de lire le contenu privé ; éventuel compte d'un autre groupe refusé après vérification réelle de ce modèle d'accès.

Recréer le conteneur sans supprimer /data et vérifier fiches, comptes et pièces jointes. Le VPN donne accès à HTTPS8443 seulement, pas à SSH Ubuntu, Grafana ou SMB.

Pour une sauvegarde cohérente, arrêter Homebox proprement et archiver /data avec la configuration et les secrets privés nécessaires. Les fichiers SQLite, son WAL éventuel et les pièces jointes sont sauvegardés ensemble ; ne pas copier une base active au hasard. Copier l'archive vers tank/app-backups avec le compte NAS app-backup, limité à ce dataset. Les identifiants SMB restent dans un fichier root privé mode600 hors des conteneurs et de Git. Les données actives restent locales à Ubuntu, pas sur SMB.

Restaurer dans une copie isolée, vérifier une fiche et le hash d'une pièce jointe sans écraser l'instance active. Surveiller la disponibilité HTTPS avec le certificat vérifié, puis démontrer panne et reprise. L'archive contient des données/secrets et reste privée.

## Atelier du cours

Réaliser le tutoriel getting-started comme exercice court, garder construction/historique/captures puis arrêter le conteneur. Homebox est la seule application persistante. Inspecter aussi les couches de l'image Homebox et exécuter Docker Bench après revue dans Ubuntu, avec constats et corrections. Pas de compilation de Homebox depuis ses sources pendant la séance.

## Sources et limites

- [Projet maintenu et fonctionnalités](https://github.com/sysadminsmedia/homebox)
- [Installation officielle rootless](https://github.com/sysadminsmedia/homebox/blob/main/docs/src/content/docs/en/quick-start/install.mdx)
- [Configuration](https://github.com/sysadminsmedia/homebox/blob/main/docs/src/content/docs/en/quick-start/configure/index.mdx)
- [Proxy HTTPS officiel](https://github.com/sysadminsmedia/homebox/blob/main/docs/src/content/docs/en/quick-start/configure/proxy.mdx)
- [Release v0.27.1](https://github.com/sysadminsmedia/homebox/releases/tag/v0.27.1)

Docs officielles et métadonnées de release/registre consultées le25octobre2026. Aucun conteneur, compte, certificat, sauvegarde ou test de performance n'a été exécuté pendant cette mise à jour documentaire.
