# PC B — état observé

## Actualisation — Grafana HTTPS

Grafana est configuré en HTTPS sur 10.77.20.10:3001. Après redémarrage du conteneur, test local avec certificat explicitement approuvé : HTTPS 200 et database ok. Test Viewer Windows et refus VPN à réaliser ; la confiance du navigateur dans le certificat n'est pas établie. Voir [preuves B](PC_B_2026-10-29.md). Les sections précédentes mentionnant HTTP sont historiques.

## Actualisation — journaux et sécurité

Réception du refus OPNsense de Jesse confirmée dans le journal Ubuntu ; connexion TCP depuis 10.77.20.1 observée. Rotation réelle du journal réussie et nouveaux messages reçus. Auditd a enregistré le test sur compose.yaml ; ClamAV a analysé quatre fichiers de configuration sans infection détectée. Un compte Grafana Viewer voit le tableau en local et n'a pas de bouton Edit. HTTPS Grafana est demandé et en cours : le service est encore en HTTP au moment de ce point. Accès Windows, refus VPN et persistance des règles après redémarrage restent à vérifier. Voir [preuves B](PC_B_2026-10-29.md).

## Actualisation — supervision fonctionnelle

Captures et résultats fournis par Sanad : Grafana ouvert après authentification locale ; source Prometheus testée avec succès ; quatre cibles UP ; graphiques CPU Ubuntu et Windows alimentés ; sonde HTTPS InvoiceShelf valide. Arrêt puis reprise du node-exporter : DOWN puis UP. Arrêt du webapp : sonde InvoiceShelf DOWN ; après redémarrage, probe_success=1. Les sections précédentes ci-dessous sont historiques. Accès Grafana en lecture depuis Windows, refus VPN, rsyslog, sécurité et stabilité finale restent à vérifier. Grafana est en HTTP sur 10.77.20.10:3001. Voir [preuves B](PC_B_2026-10-29.md).

## Actualisation — supervision préparée

La capture confirme la suppression des deux conteneurs et du réseau de restauration, sans suppression des fichiers extraits. Captures Ubuntu : quatre images de supervision téléchargées (Prometheus 3.5.5, Grafana 13.2.4, node-exporter 1.12.1, blackbox-exporter 0.28.0), profil LAB-VLAN20 réactivé. VMX contrôlés : Ubuntu VMnet10, NAS VMnet11. Dernier vmrun : les trois VM actives ; Ethernet Up 1 Gbit/s ; RAM Windows disponible 1,27 Gio, disque C: libre 83,25 Gio. Mesures ponctuelles. Mot de passe Grafana et services de supervision non confirmés ; ne pas les déclarer opérationnels. Voir [preuves B](PC_B_2026-10-29.md). Les observations précédentes sont conservées ci-dessous.

## Actualisation — restauration applicative

Le 29 octobre, une archive InvoiceShelf a été créée après arrêt du service, copiée vers le partage NAS de sauvegarde puis retéléchargée. Les empreintes SHA-256 affichées correspondent. Une copie restaurée séparée sur 127.0.0.1:8444 affiche la société, la facture brouillon et son PDF. Les captures et le déroulé sont décrits dans [preuves B](PC_B_2026-10-29.md). L'instance restaurée doit encore être arrêtée ; les données et l'archive restent privées.

Un rôle de lecture a été créé et la liste des factures est visible en session distincte ; Sanad rapporte les restrictions réussies, sans preuve distincte des trois refus. Supervision et essais VPN restent à réaliser.

## Actualisation — MTU du réseau Ubuntu

Après un nouvel échec HTTPS depuis WIN-LAB avec le retour à 1500, la page de connexion s'est affichée après réglage temporaire à 1400. Sanad a choisi de conserver 1400 : capture de contrôle du 29 octobre montrant la propriété MTU du profil LAB-VLAN20 à 1400 et l'interface enp0s17 active à 1400. Réapplication après redémarrage non testée ; cause racine de l'intermittence non établie. Voir [preuves B](PC_B_2026-10-29.md). Les mentions antérieures restent historiques.

## Actualisation du 29 octobre — application et persistance

InvoiceShelf 2.4.7 est installé sur Ubuntu avec SQLite local et proxy HTTPS 10.77.20.10:8443. Sanad a créé une facture brouillon et ouvert son aperçu PDF ; après recréation des deux conteneurs et actualisation, la facture figure toujours dans la liste. Le PDF après recréation n'a pas été montré séparément.

Ubuntu a listé le partage app-backups et envoyé un fichier test avec le compte app-backup après configuration TrueNAS SMB encryption REQUIRED. Jesse a rapporté une session WIN-LAB Encrypted=True. Jesse a aussi rapporté une connexion authentifiée et un aperçu de facture depuis WIN-LAB ; l'accès est signalé indisponible à nouveau après recréation. La piste MTU n'est pas confirmée. Voir [preuves B du 29 octobre](PC_B_2026-10-29.md). Rôles, sauvegarde/restauration applicative, supervision et VPN restent à vérifier. Les observations plus anciennes sont conservées ci-dessous.

## Actualisation du 29 octobre — passerelles VLAN 20 et 30

TrueNAS est démarré dans la capture fournie : enp0s17 10.77.30.10/24, route par défaut via 10.77.30.1. Son dernier ping vers 10.77.30.1 réussit (4 émis, 4 reçus, 0 % de perte). La preuve A enregistre également Ubuntu vers 10.77.20.1 à 4/4. Les exceptions ICMP sont limitées aux invités vers leurs passerelles ; elles ne valident pas les autres flux.

Sur B, MonitorModeEnabled a été passé de 0 à 1 sur l'Ethernet dédié, puis relu à 1 ; PriorityVlanTag est resté à 3. Ubuntu a ensuite affiché la MAC passerelle REACHABLE. Voir [preuves B](PC_B_2026-10-29.md) et [preuves A](PC_A_2026-10-29.md). Prochaine étape : contrôles trunk restants et services autorisés (dont Ubuntu vers NAS TCP 445). Les preuves antérieures sont conservées ci-dessous ; leurs anciens états de VM et tests en attente sont historiques.

## Actualisation du 29 octobre — réseau final Ubuntu

- Ethernet Realtek : état Up, liaison 1 Gbit/s, relevé sur Windows B.
- SW-B et UBU-LAB actives au dernier contrôle `vmrun list` ; NAS-LAB absente de la liste.
- Capture console SW-B fournie par Sanad : eth0 VLAN 30 PVID/Egress Untagged ; eth1 VLAN 20/30 ; eth2 VLAN 20 PVID/Egress Untagged. Interfaces eth0/eth1/eth2 et br-lab UP, sans adresse affichée ; loopback seule avec IP.
- Cartes sauvegardées contrôlées sur B : Ubuntu Custom VMnet10 et NAS Custom VMnet11. L'adresse invitée de TrueNAS reste à configurer et vérifier.
- Sorties Ubuntu fournies par Sanad : enp0s17 UP avec 10.77.20.10/24 ; route par défaut via 10.77.20.1. Profil NetworkManager LAB-VLAN20 créé selon les commandes guidées ; DNS prévu 10.77.20.1, mais valeur effective et résolution non vérifiées par ces sorties.
- Pas de résultat de ping vers 10.77.20.1 reçu à ce stade. Pontage effectif VMnet12, transport physique VLAN 20/30 et communication bidirectionnelle restent à vérifier.
- Transcriptions et sources : [preuves B du 29 octobre](PC_B_2026-10-29.md). Les observations du 28 octobre ci-dessous sont conservées comme historique.


Mis à jour le 28 octobre 2026 avec Sanad. Les configurations décrites ne prouvent pas les communications entre VM ou entre PC.

- **SW-B** : Alpine est installé sur disque, avec 512 Mio de RAM. Trois interfaces sont configurées : VMnet12/eth1 pour le trunk VLAN 20 et 30 ; VMnet10/eth2 pour l'accès Ubuntu VLAN 20 ; VMnet11/eth0 pour l'accès TrueNAS VLAN 30. Après redémarrage, `bridge vlan show` a affiché les VLAN attendus et `ip -br addr` les interfaces actives sans adresse IP, hors loopback. NAT temporaire retiré. SW-B est actuellement arrêté pour libérer de la RAM.
- **Différence documentaire** : l'accès Ubuntu utilise VMnet10 sur B, alors que les guides mentionnent VMnet14. Les numéros VMnet sont locaux à l'hôte ; UBU-LAB devra utiliser le même VMnet que le port Ubuntu de SW-B. Les guides opérationnels ont été alignés le 29 octobre. Aucune modification du réseau n'est faite sur cette base.
- **Ubuntu** : Ubuntu Desktop 26.04.1 LTS a été installé sur UBU-LAB (4 Gio, disque 40 Gio), puis a démarré depuis son disque. Après mise à jour et redémarrage, noyau `7.0.0-42-generic` observé ; une mise à jour Orca reste proposée. Dans l'invité, `free -h` indiquait 3,3 Gio visibles et 2,2 Gio disponibles, et `/` environ 27 Gio libres. La carte NAT temporaire `enp0s17` avait 192.168.228.134/24 ; un ping vers ubuntu.com a répondu 3 fois sur 3. Ubuntu est ensuite éteint. La connexion finale VMnet10 et son adresse restent à configurer.
- **TrueNAS** : NAS-LAB est démarrée (constat `vmrun list`), avec 6 Gio et 2 vCPU. TrueNAS 25.10.7 a démarré sur le disque système SCSI `NAS-boot.vmdk` ; le CD/DVD est déconnecté au démarrage. La carte réseau utilise encore le NAT temporaire, et la console a indiqué `192.168.228.135`. L'accès final VMnet11/VLAN 30 et l'adresse `10.77.30.10` restent à configurer et tester. 6 Gio reste inférieur au minimum documenté de 8 Gio ; la charge simultanée n'a pas été vérifiée.
- **Stockage NAS** : le pool `tank` est en miroir et l'interface indique Online, sans erreur, avec environ 18,89 Gio utilisables. Les deux disques de données virtuels sont raccordés à deux contrôleurs NVMe distincts, avec des numéros de série distincts vérifiés dans TrueNAS ; le disque système reste en SCSI. Après un redémarrage rapporté par Sanad, la capture de l'interface montre `tank/projet` et `tank/app-backups` chiffrés et Unlocked. Sanad indique avoir exporté leur clé et sauvegardé la configuration TrueNAS ; conserver ces fichiers privés hors dépôt. Les deux VMDK du miroir résident sur le même stockage physique : ce miroir ne protège pas contre la perte du PC.
- **SMB et permissions, tests locaux depuis Windows PC B sur le NAT** : SMB est actif ; les partages `projet` et `app-backups` sont créés. Le compte Alice a pu lire et écrire dans `projet` ; `lecteur` a pu lire et son écriture a été refusée ; `bob` s'est authentifié sur IPC$ mais l'accès aux deux partages a été refusé ; `app-backup` a pu lire et écrire dans `app-backups` et l'accès à `projet` lui a été refusé. Ces tests ne prouvent pas l'accès depuis WIN-LAB ou Ubuntu, ni l'application des règles réseau inter-PC. Le chiffrement SMB en transit reste à vérifier ; une tentative de `Get-SmbConnection` a retourné un accès refusé.
- **Snapshot et restauration locale** : snapshot manuel `tank/projet@manual-2026-10-28_22-30` créé après l'écriture d'un fichier de test ; son clone contient la version initiale alors que le fichier d'origine avait été modifié. Sanad a copié le fichier depuis le clone vers `tank/projet/restaure.txt` et la console a affiché la version initiale ; sa lecture a aussi réussi depuis Windows PC B. Le clone et les fichiers de démonstration sont conservés ; le partage temporaire `snapshot-test` est désactivé. Ce test ne constitue pas une sauvegarde indépendante.
- **Ressources et liaison** : après redémarrage de TrueNAS, `vmrun list` montre seulement NAS-LAB active et Windows indique environ 3,91 Gio disponibles sur 15,29 Gio visibles (mesure ponctuelle). L'adaptateur physique `Ethernet`, Realtek Gaming GbE Family Controller, apparaît déconnecté à 0 bps : le câble inter-PC n'est pas encore constaté connecté. Sur cet adaptateur, VMware Bridge Protocol et IPv4, Client et Partage de fichiers Microsoft étaient activés lors d'une lecture ; IPv6 désactivé. L'association effective VMnet12/carte physique et les réglages souhaités pour le trunk restent à vérifier avant modification.
- **À faire** : vérifier SMB après redémarrage et le chiffrement SMB en transit ; brancher le câble dédié et vérifier VMnet12 ; raccorder Ubuntu à VMnet10 et TrueNAS à VMnet11, configurer leurs adresses finales, puis coordonner le premier test du trunk 20/30 avec PC A. Relever la RAM avant de démarrer les invités ensemble. Aucun transport VLAN physique, routage inter-VLAN, accès aux partages depuis PC A ou Ubuntu, restauration d'InvoiceShelf ni test de charge simultanée n'est confirmé. Au prochain rendez-vous, démarrer les VM nécessaires et préparer les interfaces finales pour le premier test commun.
- Les ISO sont dans `project/VMs` ; aucune ISO, disque de VM, clé ou mot de passe n'est inclus dans ce rapport.
