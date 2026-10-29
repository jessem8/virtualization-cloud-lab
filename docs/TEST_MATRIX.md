# Matrice de vérification

Révision du 29 octobre 2026 (InvoiceShelf 2.4.7). Les états du tableau sont les états initiaux ; certaines parties ont des preuves locales datées dans les fichiers PC_A_STATUS et PC_B_STATUS. Aucun passage complet n'est déduit de ces preuves partielles. Pour chaque essai, noter la date, la révision, la source, la destination et le port, puis l’attendu, l’observé et une preuve expurgée. Vérifier le service depuis une source autorisée avant de démontrer un refus.

| ID | Contrôle | Résultat attendu / preuve | Responsable | État initial |
|---|---|---|---|---|
| T01 | Inventaire | RAM, espace, versions, MAC et VMnet réels ; capacité libre de B à confirmer (TrueNAS préparé à 6 Gio et Ubuntu Desktop à 4 Gio, cibles 8 et 2,5 Gio) | A+B | Non exécuté |
| T02 | SW-B | Filtrage/PVID0 ; trunk20/30 ; accès20/30 ; aucun VLAN1/IP ; persistance | B | Non exécuté |
| T03 | Trunk physique, premier contrôle (20–30 min) | Tags VLAN 20/30 aux deux extrémités ; accès non tagués ; ARP et unicast bidirectionnels | A+B | Non exécuté |
| T04 | Restriction VLAN | Tag30 émis depuis accès Ubuntu refusé ; trafic20 normal conservé | B avec A | Non exécuté |
| T05 | Zones | Windows vers InvoiceShelf et SMB autorisés ; SSH Ubuntu et administration TrueNAS refusés avec journaux | A+B | Non exécuté |
| T06 | Sysmon | Événements1/3 réels | A | Non exécuté |
| T07 | Audit/firewall Windows | Stratégie audit,4624/4625 ; service actif autorisé puis bloqué | A | Non exécuté |
| T08 | SSH Ubuntu | Clé MGMT permise ; mot de passe/root refusés ; pas de lockout | B avec A | Non exécuté |
| T09 | Pare-feu Ubuntu/Docker | INPUT+DOCKER-USER/FORWARD ; publications limitées ; persistance | B | Non exécuté |
| T10 | Audit/logs Ubuntu | auditd réel ; blocage OPNsense reçu par rsyslog ; rotation | B avec A | Non exécuté |
| T11 | Protection | Defender/signatures et scan ClamAV datés, sans gros scan pendant répétition | A+B | Non exécuté |
| T12 | InvoiceShelf | Facture et PDF fictifs ; administrateur autorisé, rôle limité en lecture seule ; compte et données persistent après recréation | B avec A | Non exécuté |
| T13 | Atelier Docker | Exemple du cours construit, historique conservé puis arrêté ; digest et couches de l’image InvoiceShelf ; Docker Bench et corrections | B | Non exécuté |
| T14 | Monitoring | Ubuntu/Windows identifiés ; métriques réelles ; Prometheus/collecteurs non exposés | B avec A | Non exécuté |
| T15 | Panne/reprise | Indisponibilité InvoiceShelf et perte d’un collecteur testées séparément, puis retour à l’état sain | B | Non exécuté |
| T16 | ACL NAS | AliceRW ; lecteurRO et écriture refusée ; bob refusé sans confusion1219 | B avec A | Non exécuté |
| T17 | Snapshot/chiffrement | Dataset chiffré, clé privée, fichier restauré et comparé | B avec A | Non exécuté |
| T18 | Entrée/sortie | WAN direct->services refusé ; sortie interdite vers service contrôlé avec log | A avec B | Non exécuté |
| T19 | VPN | Accès déconnecté, connecté puis déconnecté ; InvoiceShelf HTTPS 8443 autorisé ; NAS SMB 445, SSH 22 et Grafana 3001 refusés | A avec B | Non exécuté |
| T20 | Redémarrage | Switch/règles/services/dataset et accès principaux persistants | A+B | Non exécuté |
| T21 | Fluidité | Tous invités >=10min ; RAM/pagination/swap/temps réponse réels ; aucune surcharge soutenue | A+B | Non exécuté |
| T22 | Présentation | Schéma/rôles/chronologie/limites et répétition | Groupe | Non exécuté |
| T23 | Sauvegarde InvoiceShelf vers NAS | InvoiceShelf arrêté pendant l’archive de storage, Modules et configuration ; compte NAS dédié ; facture et PDF vérifiés après restauration isolée | B avec A | Non exécuté |

## Précisions

- T03 est le premier contrôle commun après la base réseau minimale des deux côtés. Ne pas attendre la fin des installations applicatives. Si les tags/unicast échouent au bout de20-30minutes, partager captures/erreur et arrêter les changements non ciblés.
- Le câble est tagué. Une communication non taguée ou le seul état « connecté » ne valide pas T03. Tenir compte des offloads en recoupant les captures.
- T04 reste temporaire ; ne pas modifier l'IP principale d'Ubuntu. Les ports d'accès du switch doivent rejeter les tags non autorisés.
- T09 distingue un port uniquement lié à loopback/interne d'un service actif bloqué par une règle. Un port fermé ne prouve pas le filtrage.
- T12 recrée le conteneur en gardant les volumes ; ne pas exécuter une commande qui les supprime. InvoiceShelf est le seul service applicatif permanent.
- T18 utilise un service contrôlé côté WAN, vérifié depuis ce côté avant le refus depuis l'invité ; pas de sondage de systèmes tiers au hasard.
- T19 retire temporairement le chemin MGMT de l'hôte et vérifie les routes du tunnel. Pousser la route NAS pour que le refus arrive à OPNsense. Cela reste un WAN simulé.
- T21 : objectifs d'environ2Gio disponibles par hôte, pas de pagination/swap soutenue, actions courantes en quelques secondes. B=11Gio invités exige une mesure ; un tableau ne suffit pas.
- T23 arrête InvoiceShelf avant d’archiver SQLite et ses fichiers locaux. L’archive contient des secrets et reste privée. Le conteneur InvoiceShelf n’a pas les identifiants de sauvegarde NAS.
- Les preuves publiées excluent mots de passe, clés, profilsVPN et exports bruts.

```text
ID / date / révision :
Source -> destination : port/protocole
Attendu / observé :
Preuve expurgée :
Résultat : réussi / échoué / bloqué / non exécuté
Correction ou limite :
```
