# Application du laboratoire : InvoiceShelf 2.4.7

InvoiceShelf est l'application de facturation retenue pour la démonstration. La version stable 2.4.7 et l'image officielle `invoiceshelf/invoiceshelf:2.4.7` sont fixées. Elle remplace les propositions précédentes. Les données de démonstration doivent être entièrement fictives.

## Scénario de démonstration

Créer une société fictive, un client, un article et une facture brouillon, puis ouvrir le PDF généré. Créer un compte administrateur et un compte de démonstration avec un rôle limité dans les réglages des rôles. Autoriser la lecture de la facture et refuser sa création, sa modification et sa suppression avec ce rôle ; vérifier chaque résultat en ouvrant une session distincte. Les droits InvoiceShelf sont définis par capacités, avec leurs dépendances affichées dans l'interface.

Démontrer ensuite l'accès HTTPS depuis Windows et le VPN, puis les refus VPN vers SSH 22, SMB 445 et Grafana 3001. Enfin, vérifier persistance, restauration d'une copie et disponibilité dans Grafana. Ne saisir aucune vraie donnée de client, de paiement ou de facturation.

## Architecture prévue sur Ubuntu du PC B

L'allocation cible d'Ubuntu est 2,5 Gio ; la VM préparée et la capacité réelle de B doivent être vérifiées avant de mesurer la charge simultanée.

### Application et accès

- **Image** : `invoiceshelf/invoiceshelf:2.4.7`. Garder ce tag fixe et noter le digest réellement téléchargé.
- **Conteneur** : l'image officielle contient Nginx et PHP-FPM ; elle lance aussi son planificateur de tâches. Un seul conteneur applicatif suffit, sans base de données externe ni worker/cron séparé.
- **Accès HTTPS** : le proxy Nginx prévu termine TLS sur `10.77.20.10:8443` et relaie vers le service Docker `webapp:8080` sur un réseau privé partagé. Seul le proxy publie le port hôte 8443. Ne pas publier le port 8080 de l'application ni l'exposer sur le WAN. Le certificat couvre l'IP 10.77.20.10 ; les règles OPNsense ouvrent d'abord l'accès depuis MGMT, puis depuis Windows et le VPN après le contrôle des comptes et des rôles.
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

Arrêter proprement le conteneur avant d'archiver ensemble `/srv/lab/invoiceshelf/storage`, `/srv/lab/invoiceshelf/modules`, la configuration Compose et tout fichier privé qui contient une clé explicite. Envoyer uniquement cette archive cohérente vers `tank/app-backups` avec le compte NAS `app-backup`. Garder ses identifiants dans un fichier root privé sur Ubuntu, jamais dans le conteneur ou Git. Le NAS reçoit une archive arrêtée ; SQLite reste local et ne doit jamais être copié pendant que l'application écrit.

Restaurer l'archive dans de nouveaux dossiers locaux, sans écraser le service actif. Démarrer la copie sur un réseau et un port d'essai isolés, vérifier la société et la facture fictives, puis arrêter et retirer cette copie. Toutes les données du NAS restent privées.

## Atelier Docker du cours

Construire et inspecter l'exemple `docker/getting-started-app`, conserver les preuves de construction et d'historique des couches, puis arrêter l'exemple. InvoiceShelf est l'unique application persistante. Examiner le digest de son image et le script Docker Bench for Security à un commit identifié avant la vérification du moteur Docker.

## Sources officielles

- [Release InvoiceShelf 2.4.7](https://github.com/InvoiceShelf/InvoiceShelf/releases/tag/2.4.7)
- [Guide de l'image Docker InvoiceShelf](https://github.com/InvoiceShelf/docker#readme)
- [Compose SQLite officiel](https://github.com/InvoiceShelf/docker/blob/master/docker-compose.sqlite.yml)
- [Compose SQLite de la source 2.4.7](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/docker/production/docker-compose.sqlite.yml)
- [Variables d'environnement 2.4.7](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/.env.example)
- [Initialisation Docker et conservation de APP_KEY](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/docker/production/entrypoint.d/00-setup.sh)
- [Capacités et permissions intégrées](https://github.com/InvoiceShelf/InvoiceShelf/blob/2.4.7/config/abilities.php)

Les artefacts officiels ont été lus le 27 octobre 2026. Cette revue documentaire ne confirme pas une installation, un certificat, un rôle, une sauvegarde, une restauration ou un test de disponibilité sur le laboratoire.