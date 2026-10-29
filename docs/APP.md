# Application du laboratoire : InvoiceShelf 2.4.7

InvoiceShelf est l'application de facturation retenue pour la démonstration. La version stable 2.4.7 et l'image officielle `invoiceshelf/invoiceshelf:2.4.7` sont fixées. Elle remplace les propositions précédentes. Les données de démonstration sont fictives. Lire le [README](../README.md) pour l'architecture complète et les [preuves B du 29 octobre](../evidence/PC_B_2026-10-29.md) pour l'exécution. Cette page conserve les références techniques ; elle n'est pas une demande de redéploiement.

## Réalisation observée et contrat technique

Les preuves du 29 octobre montrent la société fictive, une facture brouillon et son PDF, la facture après recréation des conteneurs, les accès Windows/VPN et les résultats après reboot Ubuntu. Le rôle lecteur est visible ; les restrictions détaillées sont rapportées par Jesse/Sanad, sans preuve indépendante de chaque refus.

L'allocation Ubuntu observée est **4 Gio**, contre une ancienne cible de 2,5 Gio. Le réseau réel est NetworkManager LAB-VLAN20 sur VMnet10 B, MTU 1400 ; la règle MSS 1360 reste limitée à Windows → InvoiceShelf. La cause racine du défaut HTTPS est inconnue.

Les chemins et variables ci-dessous sont le **contrat documenté à partir de l'image 2.4.7**. Le Compose et les secrets effectifs restent privés ; cette page n'en est pas un export intégral.

### Application et accès

- **Image** : `invoiceshelf/invoiceshelf:2.4.7`. Garder ce tag fixe et noter le digest réellement téléchargé.
- **Conteneur** : l'image officielle contient Nginx et PHP-FPM ; elle lance aussi son planificateur de tâches. Un seul conteneur applicatif suffit, sans base de données externe ni worker/cron séparé.
- **Accès HTTPS** : le proxy Nginx termine TLS sur `10.77.20.10:8443` et relaie vers le service Docker `webapp:8080` sur un réseau privé partagé. Seul le proxy publie le port hôte 8443. Ne pas publier le port 8080 de l'application ni l'exposer sur le WAN. Le certificat du labo couvre l'IP 10.77.20.10, mais reste autosigné/non approuvé par les navigateurs. Les accès MGMT/Windows/VPN sont bornés par les règles documentées.
- **En-têtes proxy** : transmettre Host, X-Forwarded-For et X-Forwarded-Proto. Limiter `TRUSTED_PROXIES` à l'adresse ou au sous-réseau privé du proxy, choisi lors de la création du réseau Docker.

### SQLite et dossiers persistants

Configurer `DB_CONNECTION=sqlite` et `DB_DATABASE=/var/www/html/storage/app/database.sqlite`. Créer deux dossiers locaux sur Ubuntu et les monter ainsi :

| Usage | Dossier Ubuntu | Chemin dans le conteneur |
|---|---|---|
| Base et données de l'application | `/srv/lab/invoiceshelf/storage` | `/var/www/html/storage` |
| Modules installés | `/srv/lab/invoiceshelf/modules` | `/var/www/html/Modules` |

Le premier dossier contient la base SQLite, les fichiers de l'application et la clé générée ; le second garde les modules installés. Ne pas placer ces dossiers sur SMB. L'image fonctionne avec l'UID 82 ; les dossiers montés doivent lui être accessibles en écriture.

### Variables d'application et clé

- `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://10.77.20.10:8443` et `APP_TIMEZONE=Africa/Tunis`.
- Pour les sessions, adapter `SESSION_DOMAIN=10.77.20.10` et `SANCTUM_STATEFUL_DOMAINS=10.77.20.10:8443` à l'URL effectivement utilisée dans le navigateur.
- Ne pas copier la clé publique d'exemple. L'image 2.4.7 en génère une et la conserve sous `/var/www/html/storage/app/.app_key`. Préserver tout le dossier `storage` lors d'une sauvegarde. Si une clé `APP_KEY` est définie explicitement, garder cette configuration privée et la restaurer avec les données.

## Sauvegarde et restauration

Le 29 octobre, les captures B montrent l'arrêt de webapp, l'archive, le transfert SMB et le retour à empreinte identique ; la copie isolée 127.0.0.1:8444 a affiché société, facture et PDF. Ses deux conteneurs et son réseau ont ensuite été retirés. Les consignes suivantes expliquent ce mécanisme, sans demander de le répéter.

Arrêter proprement le conteneur avant d'archiver ensemble `/srv/lab/invoiceshelf/storage`, `/srv/lab/invoiceshelf/modules`, la configuration Compose et tout fichier privé qui contient une clé explicite. Envoyer uniquement cette archive cohérente vers `tank/app-backups` avec le compte NAS `app-backup`. Garder ses identifiants dans un fichier root privé sur Ubuntu, jamais dans le conteneur ou Git. Le NAS reçoit une archive arrêtée ; SQLite reste local et ne doit jamais être copié pendant que l'application écrit.

Restaurer l'archive dans de nouveaux dossiers locaux, sans écraser le service actif. Démarrer la copie sur un réseau et un port d'essai isolés, vérifier la société et la facture fictives, puis arrêter et retirer cette copie. Toutes les données du NAS restent privées.

## Atelier Docker du cours — non confirmé

La présence d'InvoiceShelf ne prouve pas la réalisation de l'atelier ni de Docker Bench. La matrice T13 reste non confirmée ; les anciennes consignes de référence étaient les suivantes.

Construire et inspecter l'exemple `docker/getting-started-app`, conserver les preuves de construction et d'historique des couches, puis arrêter l'exemple. InvoiceShelf est l'unique application persistante. Examiner le digest de son image et le script Docker Bench for Security à un commit identifié avant la vérification du moteur Docker.

## Sources officielles

- [Release InvoiceShelf 2.4.7](https://github.com/InvoiceShelf/InvoiceShelf/releases/tag/2.4.7)
- [Guide de l'image Docker InvoiceShelf](https://github.com/InvoiceShelf/docker#readme)
- [Compose SQLite officiel](https://github.com/InvoiceShelf/docker/blob/master/docker-compose.sqlite.yml)
- [Compose SQLite de la source 2.4.7](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/docker/production/docker-compose.sqlite.yml)
- [Variables d'environnement 2.4.7](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/.env.example)
- [Initialisation Docker et conservation de APP_KEY](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/docker/production/entrypoint.d/00-setup.sh)
- [Capacités et permissions intégrées](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/config/abilities.php)

Ces références ont été lues lors de la préparation du 27 octobre 2026 ; elles n'ont pas été réinterrogées pour ce rangement. Les observations du laboratoire sont dans les notes datées, avec les limites regroupées dans la [matrice](TEST_MATRIX.md).