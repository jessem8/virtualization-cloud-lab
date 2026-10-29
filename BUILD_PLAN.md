# Périmètre actuel — dépôt prêt à lire

Mis à jour le 30 octobre 2026, Africa/Tunis. Le plan de réunion et de construction du 28/29 octobre est désormais [historique](docs/archive/README.md). Les services et essais terminés ne sont plus une liste d'installation à reprendre.

## Travail demandé maintenant

Le rangement est terminé. Le complément du 30 octobre vérifie la couverture du sujet et ajoute un [parcours en neuf modules](docs/MODULES_DU_PROJET.md), avec explications, ordre de présentation, preuves et limites. Le [README](README.md) présente les exigences puis l'index des modules ; l'[index des preuves](evidence/README.md) donne les sources ; la [matrice](docs/TEST_MATRIX.md) garde les réserves. Deux branches sont conservées : `main` pour ces documents et `presenter` pour le présentateur.

Aucune VM, configuration hôte/invitée ou donnée du laboratoire n'est modifiée dans ce travail. Aucun essai de labo n'est répété. Les notes A/B décrivent des observations datées, pas l'état actuel de machines allumées.

## Ce que la séance a établi

- Accès Windows à InvoiceShelf/Grafana après redémarrage Ubuntu, collecte et pannes/reprises distinctes.
- SMB/ACL/chiffrement, sauvegarde cohérente puis facture/PDF dans une copie isolée retirée après essai.
- Journaux OPNsense et rotation, auditd, scan ClamAV borné, accès SSH MGMT par clé et refus password-only.
- VPN : application autorisée et SSH/SMB/Grafana refusés avec journaux, sans contournement MGMT.
- Règles et MTU/MSS restaurées au redémarrage Ubuntu ; nettoyage de la route temporaire sur A.

Les réserves de preuve sont détaillées dans la matrice ; ces points n'équivalent pas à une validation intégrale de tous ses critères.

## Suite séparée, hors du rangement

Le présentateur 3D existant doit devenir le support principal, avec peu de texte et des explications orales : environ 15 minutes dans un total enregistré maximal de 30 minutes, questions comprises. Le parcours documentaire ordonne ses futurs chapitres ; il ne modifie pas l'interface. La refonte du site, la préparation des questions/QCM, tout diaporama et toute répartition de contributions nécessitent leur tâche ultérieure. Ne pas les commencer ici, ne pas ajouter de fonctionnalités au laboratoire.

Les originaux du cours restent intacts dans [requirements/originals](requirements/originals/). La coordination suit [COORDINATION](docs/COORDINATION.md), sans réouverture automatique de l'issue #2 clôturée.
