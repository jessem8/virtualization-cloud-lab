# Point de reprise du projet

Clôture documentaire le **30 octobre 2026**, Africa/Tunis ; preuves de laboratoire datées du 29. **Rangement documentaire terminé et poussé** ; aucune tâche de présentation supplémentaire n'a été commencée. Lire le [README](README.md), le [périmètre actuel](BUILD_PLAN.md) et la [coordination](docs/COORDINATION.md). Les anciens points d'arrêt et propositions sont [archivés avec des références immuables](docs/archive/README.md) ; ils ne gouvernent plus les actions.

Convention de libellé demandée le 30 octobre : nommer les machines **PC A** et **PC B**, sans nom de personne dans leur libellé. Les mentions factuelles des réalisations individuelles restent distinctes.

## Complément documentaire — 30 octobre

À la demande de Jessem, la revue du rangement ajoute [MODULES_DU_PROJET](docs/MODULES_DU_PROJET.md) : neuf modules dans l'ordre de présentation, explications simples, liens vers les preuves, messages oraux brefs et correspondance avec les demandes du sujet. Le README expose cet ordre après les exigences. Le PDF original (trois pages) et les cellules du XLSX ont été relus sans modification ; les clarifications humaines sur le rapport et la couche de sécurité sont conservées.

Le complément reste documentaire : aucune modification du présentateur, des VM ou des configurations ; aucun nouvel essai. Le tableau des tâches reste à compléter sans attribution inventée, la répétition et la préparation Q/A restent ultérieures. L'inspection initiale du site a été interrompue lorsque Jessem a précisé que la demande portait sur la documentation du rangement.

Vérification du complément : 27 fichiers Markdown, 287 liens locaux et 18 fragments Markdown contrôlés sans cible ni ancre manquante ; neuf modules ordonnés et neuf messages oraux présents. Les originaux et les réserves de la matrice restent intacts ; aucun build du présentateur ni essai du labo n'est requis par cette rédaction. L'enregistrement facultatif de cette tâche a renvoyé `invalid_contract` : aucun reçu de registre ni binding natif n'est revendiqué.

## Objectif et limites

Le travail courant est **uniquement le rangement du dépôt, l'alignement factuel et l'accueil des quatre coéquipiers** avant la soutenance du 30 octobre. Présentation remplaçant le rapport séparé selon la clarification du professeur ; environ 15 minutes de présentation dans un total enregistré maximal de 30 minutes, questions comprises. « VM-to-VM escape workshop » signifie couche de sécurité ; aucune évasion d'hyperviseur à inventer.

Aucune refonte du présentateur, préparation Q/A ou QCM, diaporama, attribution de membres/contributions, installation pour Codex B, expansion du labo ou répétition d'essais n'est comprise ici. Ne pas démarrer/arrêter les VM ni modifier les hôtes/invités pour cette tâche. Une suite de présentation attend une tâche distincte.

## Architecture retenue

Deux PC, VMware Workstation, cinq VM : A/Jessem = OPNsense et Windows Server ; B/Sanad = Alpine SW-B, Ubuntu et TrueNAS. SW-B commute à L2 sans IP/routage. CLIENTS et MGMT sont des VMnet non tagués, pas VLAN10/99 ; seul le trunk physique transporte les VLAN20/30. Ubuntu utilise VMnet10 sur B, NAS VMnet11, trunk VMnet12 ; les numéros sont locaux à chaque PC.

Ubuntu héberge Nginx HTTPS8443, InvoiceShelf2.4.7/backend8080 interne, SQLite locale persistante et quatre composants de supervision. Ubuntu→NAS traverse B/tag20 → OPNsense A → B/tag30. NAS reçoit une archive cohérente après arrêt de l'application ; SQLite active n'est jamais hébergée sur SMB. Pas de cloud public, ESXi imbriqué, AD ou Kubernetes demandé.

## État établi par la séance du 29 octobre

Sources : [résumé A](evidence/PC_A_STATUS.md), [résumé B](evidence/PC_B_STATUS.md), [notes A29](evidence/PC_A_2026-10-29.md), [notes B29](evidence/PC_B_2026-10-29.md) et [index des preuves](evidence/README.md).

- Windows InvoiceShelf et Grafana accessibles après reboot Ubuntu, données et graphes visibles ; collecte réelle et panne/reprise de webapp et d'un collecteur testées séparément.
- SMB : Alice RW, lecteur RO/écriture refusée, Bob connecté au partage mais lecture du fichier refusée ; session Windows Encrypted=True. Datasets chiffrés et restauration de fichier NAS documentés.
- Archive InvoiceShelf arrêtée, transfert/retour NAS aux empreintes identiques, facture/PDF dans une copie isolée ; conteneurs de restauration retirés ensuite.
- Logs OPNsense reçus et rotation effective, événement auditd/règle persistante ; ClamAV limité à quatre fichiers.
- VPN application8443 permis, SSH22/SMB445/Grafana3001 refusés et journalisés sans MGMT ; SSH retesté avec socket actif. WAN simulé VMware NAT.
- SSH MGMT par clé/empreinte épinglée avant/après durcissement et reboot ; négociation password-only rejetée. Root refusé en configuration, sans essai root séparé.
- MTU1400, règles hôte/Docker et MSS1360 Windows→InvoiceShelf restaurées au reboot Ubuntu. A : route temporaire 10.77.20.10/32 retirée, VMnet13 Up, adresse/routes VPN absentes.

Ces observations sont datées ; aucun état actuel de VM allumée n'est supposé. Arrêt ultérieur des invités géré par l'utilisateur et non vérifié. Clés SSH/VPN, exports et sauvegardes restent hors Git.

## Réserves à conserver

Cause racine liaison/pilote inconnue malgré les contournements MTU/MSS. Certificats autosignés non approuvés par les navigateurs. Actions du rôle InvoiceShelf rapportées par Jessem/Sanad, sans capture indépendante de chaque refus. Les limites T03/T04, Docker Bench/atelier, certains refus réseau et toute mesure formelle de charge restent explicites dans la [matrice](docs/TEST_MATRIX.md). Poussée des routes pour de futurs profils VPN et dernières offres Windows Update non confirmées.

Jessem rapporte plus de cinq heures avec les cinq VM ; cela n'est pas une mesure de performance et ne justifie pas un nouveau minuteur. B conserve l'allocation observée Ubuntu 4 Gio / TrueNAS 6 Gio, distincte des anciennes cibles 2,5/8 Gio. Ne pas transformer une cible en mesure.

Captures intactes : **13 PNG A + index**, **108 PNG B + index**. Les anciennes images A Sysmon/Defender sont partiellement non récupérées. La collecte A avait comparé les 13 originaux par SHA-256 ; B avait rapporté les comparaisons et conserve les empreintes dans son index. Ce rangement ne revalide pas chaque image ni chaque essai. Issue #2 clôturée après remise ; PR #1 historique.

## Dépôt et présentateur

Deux branches à maintenir : `main` (documentation/preuves) et `presenter` (présentateur existant). Les 28 commits de collecte jusqu'à `4efc321` sont intégrés sans réécriture ; l'ancienne branche `evidence/joint-lab-20261029` est retirée après vérification. Sauvegarde privée complète avant consolidation : `C:/Users/jesse/.codex/recovery/virtualization-cloud-lab-20261029-cleanup/before-cleanup.bundle`, vérifiée, avec les anciennes références et un manifeste, hors dépôt/OneDrive et accès limité au compte local. Récupérer/réconcilier avant les commits et pushes ; jamais de force-push.

Le projet `jessem8/virtualization-cloud-lab` reste privé et sans Pages. Le [site public](https://jessem8.github.io/virtualization-lab-3d/) utilise le dépôt distinct `jessem8/virtualization-lab-3d`, Pages `main` à la racine. Vérifications provider en lecture seule du 29 octobre : visibilité, source Pages, dernier build réussi `119b7c7` du 28/10 et HTTP 200 du site. Aucun réglage, source publique ou déploiement n'est changé.

Sources/artefacts 3D conservés sur les deux branches, lanceur `diagram/start.ps1`, serveur loopback 3187. `topology.json` et certains scénarios contiennent encore VMnet14 et des états préparatoires dépassés ; leur alignement appartient à la tâche ultérieure. Les animations restent simulées. Aucun build ou nouveau contrôle graphique n'est revendiqué par ce rangement.

## Vérification du rangement et prochaine action

Contrôles documentaires effectués : 26 fichiers Markdown du dépôt, 167 liens locaux sans cible manquante ; 158 fichiers protégés comparés au commit `4efc321` et inchangés ; index A 13/B 108 concordants, 108 SHA-256 B correspondants ; observations des deux anciens états conservées dans history ; trois références locales de la page 3D présentes ; `git diff --check` sans erreur. Le contrôle initial avait trouvé un lien cassé dans .local-history ignoré, hors dépôt : il est resté intact, puis le contrôle a été limité aux fichiers du dépôt. Diffs relus, commit de rangement `c5ab49a` poussé. Contrôle final Git : seules les branches locales/distantes main et presenter subsistent, toutes deux alignées au rangement ; collecte supprimée après vérification de zéro commit unique à préserver et du bundle complet. L'arbre suivi était propre après push et suppression. Ce point de clôture est consigné dans le commit suivant. Aucun test du labo, nouveau build ni contrôle graphique n'est exécuté. L'enregistrement facultatif du suivi local a renvoyé `invalid_contract` : aucun reçu de registre ni binding natif n'est revendiqué. Les preuves réelles restent dans le dépôt.

La prochaine action de l'équipe est de lire le README et l'index. Ne pas commencer automatiquement la tâche de présentation. Le barème d'origine reste intact : groupe 20 ; individuel 20 % suivi/80 % Q/A ; final 60/40 ou 90/10 si groupe−individuel>3. Le XLSX contient des ambiguïtés de cellules : ne pas inventer une correction ni des critères.

Correction éditoriale du 30 octobre : nom personnel **Jessem** uniformisé dans les textes, avec conservation des identifiants GitHub, comptes techniques et chemins Windows. Le README et les renvois documentaires utilisent un libellé neutre ; la section de parcours pour rejoindre l'équipe est supprimée. Les corrections de nom dans les notes ne modifient aucun résultat observé. Des liens relatifs vers les captures disponibles et les sources du présentateur complètent les références ; les chemins locaux historiques restent inchangés. Vérification éditoriale : 217 liens locaux valides, aucune occurrence du précédent nom personnel dans les textes suivis, modifications limitées aux fichiers Markdown.

## Leçons retenues

- Expliquer d'abord les cinq VM et le trajet des paquets ; les détails de services viennent ensuite.
- Distinguer commutation L2, routage/filtrage et ACL/permissions applicatives.
- Séparer configuration relue, essais observés, déclarations et simulation.
- Conserver les échecs et contournements sans inventer la cause racine.
- Une copie persistante, un snapshot et une restauration d'archive sont des preuves distinctes.
- Une documentation actuelle remplace les suites obsolètes ; l'historique reste accessible.

## 30 octobre 2026 — refonte du présentateur

À la demande de Jessem, la branche `presenter` reçoit la refonte UX : neuf chapitres, 24 étapes, galerie de huit preuves datées du 29 octobre, « Et si » déplacé dans Options, libellés PC A/PC B. Les sources du présentateur ne contiennent plus VMnet14 ni les anciens états « préparé / non testé ». Vérification navigateur et correctifs CSS : [DIAGRAM_VERIFICATION](evidence/DIAGRAM_VERIFICATION.md). Aucune VM ni configuration modifiée ; le site public distinct n'est pas mis à jour.
