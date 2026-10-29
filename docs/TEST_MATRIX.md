# Matrice de vérification — état documentaire consolidé

**29 octobre 2026, Africa/Tunis.** Cette revue recoupe les preuves existantes ; elle n'a exécuté aucun essai. Les identifiants d'origine sont conservés pour retrouver les contrôles. « Observé » décrit un résultat ponctuel dans la source ; « partiel » ou « non confirmé » ne vaut pas réussite complète.

Sources courtes : **[A29](../evidence/PC_A_2026-10-29.md)**, **[B29](../evidence/PC_B_2026-10-29.md)**, **[A28](../evidence/history/PC_A_STATUS.md)**, **[B28](../evidence/history/PC_B_STATUS.md)**. Les [captures et leur portée](../evidence/README.md) complètent les notes.

| ID | Contrôle d'origine | État et éléments réellement enregistrés | Limite / source |
|---|---|---|---|
| T01 | Inventaire | **Partiel** : versions, VMnet, ressources ponctuelles et allocations documentés. | Pas d'inventaire simultané complet ni mesure de capacité finale ; TrueNAS B 6 Gio contre 8 au plan. A28/B28/B29. |
| T02 | SW-B | **Configuration et persistance observées** : ports VLAN20/30, accès/PVID, interfaces sans IP hors loopback, reboot du 28. | Pas de preuve de tous les rejets de tags. B28/B29. |
| T03 | Trunk physique | **Partiel** : ARP tagué20 sur A ; pings Ubuntu→20.1 et NAS→30.1 à 4/4 ; services inter-PC ultérieurs. | Toutes les captures des deux tags, ports d'accès et unicast aux deux extrémités ne sont pas établies. A29/B29. |
| T04 | Restriction VLAN | **Non confirmé** : aucun essai démontrant le rejet d'un tag30 injecté sur l'accès Ubuntu. | Ne pas déduire ce refus de la seule configuration SW-B. |
| T05 | Zones | **Partiel** : Windows→application, Grafana et SMB observés. | Refus SSH/administration NAS depuis CLIENTS non confirmés ; essais VPN distincts en T19. A29. |
| T06 | Sysmon | **Observé dans les sorties invitées** : événements 1/3. | Images de l'ancien chat A partiellement non récupérées. A28. |
| T07 | Audit/firewall Windows | **Partiel** : audit 4624/4625, profils actifs et logs bornés ; exporter limité en configuration. | Essai complet autorisé/bloqué sur service Windows actif non confirmé. A28. |
| T08 | SSH Ubuntu | **Observé** : clé MGMT avec empreinte épinglée avant/après durcissement et reboot ; password-only rejeté. | Root interdit en configuration, sans essai d'authentification root distinct. A29/B29. |
| T09 | Pare-feu Ubuntu/Docker | **Configuration/persistance et accès permis observés** : INPUT, DOCKER-USER, IPv6 SSH ciblé, MSS et service après reboot. | Refus d'une source non autorisée directement sur ces règles non confirmé ; portée enp0s17. B29/A29. |
| T10 | Audit/logs Ubuntu | **Observé** : marqueur A reçu, rotation effective et nouvelles lignes ; événement auditd, règle retrouvée au reboot. | Refus d'un émetteur syslog non autorisé non confirmé. B29. |
| T11 | Protection | **Observé dans le périmètre décrit** : Defender/scan rapide du 28 ; ClamAV quatre fichiers, zéro infection/code0 du 29. | Pas d'attestation de système sans malware ni scan Linux complet. A28/B29. |
| T12 | InvoiceShelf | **Observé + déclaré** : facture/PDF, facture après recréation, accès Windows après reboot ; lecteur visible et restrictions rapportées. | Chaque refus de création/modification/suppression n'a pas sa capture ; PDF après recréation non montré séparément. B29/A29. |
| T13 | Atelier Docker | **Non confirmé** : atelier du cours, digest/couches et Docker Bench/corrections sans compte rendu final suffisant. | L'exécution d'InvoiceShelf n'établit pas cet atelier. |
| T14 | Monitoring | **Observé** : quatre jobs UP, CPU Ubuntu/Windows, probe_success=1, Grafana HTTPS Viewer et accès Windows. | Non-exposition de tous les collecteurs non testée indépendamment ; Viewer visible sans test complet d'autorisation. B29/A29. |
| T15 | Panne/reprise | **Observé** : node-exporter DOWN/UP ; webapp arrêté→sonde DOWN puis probe_success=1 après reprise. | Deux essais distincts, pas une disponibilité mesurée dans la durée. B29. |
| T16 | ACL NAS | **Observé** : Alice RW ; lecteur lit/écriture refusée ; Bob connecté au partage mais lecture du fichier refusée ; compte backup limité lors des essais locaux. | Bob : refus au fichier dans l'essai A, pas refus de toute connexion SMB. A29/B28. |
| T17 | Snapshot/chiffrement | **Observé + déclaré** : datasets chiffrés, fichier restauré via clone, déverrouillage affiché après reboot rapporté ; SMB REQUIRED et session Windows Encrypted=True. | Clés/configuration exportées déclarées privées ; snapshot/miroir sur même stockage physique. B28/B29 et capture A08. |
| T18 | Entrée/sortie | **Non confirmé pour le critère complet** : règles WAN/sortie sauvegardées ; marqueurs MGMT/VPN documentés séparément. | Pas de démonstration complète WAN direct→service actif et sortie interdite vers service contrôlé. A28/A29. |
| T19 | VPN | **Observé** : MGMT désactivé, routes tunnel, application8443 permise ; SSH22/SMB445/Grafana3001 refusés avec logs ; échec après déconnexion. | SSH retesté en écoute ; WAN simulé, pas Internet externe. A29/B29. |
| T20 | Redémarrage | **Observé sur les composants décrits** : SW-B le28 ; datasets après reboot rapporté ; Ubuntu règles/services/MTU/MSS et accès frais Windows le29. | Pas de preuve d'un redémarrage conjoint complet des cinq VM. A28/B28/B29/A29. |
| T21 | Fluidité | **Déclaré** : Jessem rapporte les cinq VM ensemble plus de cinq heures ; mesures de RAM ponctuelles disponibles. | Aucune mesure formelle de charge, pagination ou temps de réponse ; pas de nouveau minuteur requis. A29. |
| T22 | Présentation | **Existante, à mettre à jour dans une tâche séparée** : présentateur 3D conservé ; documentation d'accueil rangée. | Répétition finale, refonte et préparation orale non réalisées par ce rangement ; certains faits du présentateur sont anciens. |
| T23 | Sauvegarde InvoiceShelf | **Observé** : arrêt/archivage, NAS, empreintes comparées, restauration isolée, société/facture/PDF puis retrait des conteneurs d'essai. | Archives et secrets privés ; aucun écrasement du service actif. B29. |

## Interprétation

Un port fermé ne prouve pas une règle de filtrage ; un service actif et un journal corrélé sont nécessaires pour attribuer le refus. Un job blackbox UP prouve la collecte de la sonde, tandis que `probe_success` décrit l'accès à l'application. La persistance locale, un snapshot et une restauration d'archive sont trois résultats distincts.

Les étapes non confirmées sont des limites de preuve, pas une autorisation de relancer des essais. Les anciennes consignes de construction/rejeu sont dans les [archives](archive/README.md). Ne jamais enregistrer mots de passe, clés ou archives applicatives dans Git.
