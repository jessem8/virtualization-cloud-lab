# Scénario de soutenance — deux PC

Ce guide prépare la présentation et la démonstration. Répéter avec les résultats réellement vérifiés ; le diagramme montre une simulation, pas du trafic en direct. Présentation en français avec noms techniques habituels.

## Avant l'arrivée du jury

1. Brancher les deux PC, alimentations et câble dédié. Démarrer OPNsense, SW-B, Ubuntu et TrueNAS, puis Windows. Vérifier que les services et les datasets sont disponibles.
2. Ouvrir la présentation locale avec `powershell -NoProfile -File diagram/start.ps1` puis http://127.0.0.1:3187/. Préparer la vue 2D ou SVG en secours.
3. Préouvrir la facture et son PDF fictifs, la session du rôle limité, le journal OPNsense, Grafana et la copie restaurée. Garder les secrets hors écran.
4. Vérifier rapidement l'accès autorisé à l'application et à SMB, les routes VPN et le résultat de la répétition simultanée. Préparer des captures datées des vrais résultats en cas de panne. Répéter une fois les transitions et convenir qui parle et qui manipule.

## Démonstration : besoin → chemin → contrôle → récupération → supervision

| Étape | Ce que le présentateur explique | Ce que l'opérateur montre |
|---|---|---|
| 1. Besoin | Une petite entreprise doit créer ses factures, limiter les accès et récupérer ses données. Deux PC hébergent cinq VM. | Vue générale, rôles de A et B. |
| 2. Chemin | Windows rejoint InvoiceShelf via OPNsense et VLAN 20. Le switch sépare les flux ; le pare-feu décide du passage. | Diagramme puis navigateur Windows, connexion, facture fictive et PDF. |
| 3. Application | Docker tourne dans Ubuntu ; la base SQLite reste sur le disque local persistant. Les droits applicatifs sont distincts du filtrage réseau. | Session administrateur puis rôle limité : lecture autorisée et action interdite. Montrer la preuve de persistance après recréation. |
| 4. Stockage | Ubuntu vers TrueNAS traverse VLAN 20, OPNsense sur A, puis VLAN 30 vers B. Un miroir sur un seul disque physique ne protège pas contre la perte du PC. | Partage autorisé, refus d'un compte et dataset ; présenter la restauration locale de fichier comme un résultat distinct. |
| 5. Sauvegarde | L'application est arrêtée pour archiver une base cohérente ; l'archive va au dataset réservé et se restaure dans une copie isolée. | Archive et facture/PDF dans la copie restaurée, après vérification préalable. |
| 6. Sécurité/VPN | Le VPN ne donne accès qu'à HTTPS 8443. Le WAN utilisé est simulé par VMware NAT. | Sans chemin MGMT de contournement : application via VPN, refus d'un service actif et journal correspondant. Montrer les autres refus vérifiés si le temps le permet. Rétablir MGMT après le test. |
| 7. Supervision | Une application peut tomber alors que la VM fonctionne. | Grafana et métriques réelles ; panne contrôlée d'InvoiceShelf, attente de l'intervalle de collecte, reprise. Montrer séparément la preuve de perte/reprise de collecteur. |

Cible de répétition : environ 8–10 minutes, à adapter au temps réellement accordé. Garder les autres preuves de la [matrice T01–T23](TEST_MATRIX.md) disponibles pour les questions : VLAN et filtrage, Defender/Sysmon/audit, SSH et pare-feu Ubuntu, chiffrement/ACL NAS, exercice Docker, redémarrage et charge simultanée.

## Si une étape échoue

Dire le résultat attendu et le résultat observé. Utiliser une capture datée uniquement comme preuve d'un essai antérieur. Si aucun essai n'a réussi, dire que le point reste à vérifier. Une animation n'est pas une preuve. Éviter les changements improvisés de câbles, règles ou identifiants devant le jury.

## Questions à savoir expliquer

- Pourquoi cinq VM et davantage de services ? Les conteneurs et services tournent à l'intérieur des VM.
- Pourquoi le trafic Ubuntu–NAS passe-t-il par A ? Les deux VLAN sont routés et filtrés par OPNsense.
- Pourquoi la connexion VPN ne donne-t-elle pas tous les droits ? Les règles réseau et les rôles applicatifs sont deux contrôles.
- Pourquoi une recréation de conteneur ne prouve-t-elle pas une restauration ? La persistance locale et une copie restaurée sont deux essais distincts.
- Pourquoi un snapshot n'est-il pas une sauvegarde indépendante ? Il partage le stockage et son domaine de panne.
