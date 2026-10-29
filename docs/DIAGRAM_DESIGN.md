# Diagramme interactif du laboratoire

Documentation de l'interface livrée le 28 octobre 2026 ; alignement documentaire le 29. Pour l'état réel, lire le [README](../README.md) et l'[index des preuves](../evidence/README.md). Les simulations et les anciens faits affichés ne sont pas une source de statut actuel. Présentateur de bureau pour la démonstration devant le professeur. Une maquette explique le réseau prévu ; elle ne configure aucune VM et ne mesure aucun trafic.

## Lancer

Depuis la racine : `powershell -NoProfile -File diagram/start.ps1`, puis http://127.0.0.1:3187/. Le lanceur cherche Node dans le runtime Codex puis dans PATH. Les assets sont livrés : aucune compilation ou connexion Internet nécessaire à la consultation. Le serveur écoute sur127.0.0.1 seulement, sans exposer le reste du dépôt.

Pour arrêter : terminer seulement le processus Node exécutant [diagram/serve.mjs](../diagram/serve.mjs), pas les autres processus Node. Pour un autre port, définir LAB_DIAGRAM_PORT et lancer Node avec [diagram/serve.mjs](../diagram/serve.mjs).

## Version publique

Seul le laboratoire3D est publié, dans le dépôt public jessem8/virtualization-lab-3d : [site public](https://jessem8.github.io/virtualization-lab-3d/). Ce dépôt-ci reste privé. Pour mettre à jour : `node build.mjs`, puis `node publish.mjs <clone de virtualization-lab-3d>` depuis diagram/, puis commit et push dans ce clone. Le script copie index.html et network-assets seulement, ajoute une politique de contenu équivalente à celle du serveur local et retire le lien vers cette documentation.

## Présenter

- Cliquer une machine ou un équipement : ouverture de sa coupe fonctionnelle et de son explication. Ubuntu révèle ses services Docker. Les formes3D illustrent des rôles virtuels, pas l’intérieur physique réel des logiciels.
- Retour au parcours, visible dans la coupe, referme l’inspection sans perdre le scénario ni l’étape. Le fil Réseau → PC → VM → service permet aussi le retour au parent. Vue globale, Échap et la fermeture du panneau conservent le parcours.
- Équipements et Connexions gardent les positions stables. Sécurité révèle les volumes CLIENTS/SERVEURS/STOCKAGE, explique trois barrières et propose les parcours VPN autorisé/refusé.
- Choisir un parcours en bas, puis Lire/Pause ou les flèches d’étape. Les flèches clavier fonctionnent hors des champs. Une étape manuelle anime son seul trajet.
- Plein écran (ou F) masque l’en-tête, la barre d’outils, la légende, la bande de transport, le choix des trajets et les notes « À dire » : il ne reste que la scène et une bande de récit sombre (titre, texte, flèches). Le bouton « Quitter le plein écran » et le curseur s’effacent après quelques secondes d’inactivité ; Échap, F ou un mouvement de souris les ramènent. Préparer le trajet, le quiz ou la panne avant d’entrer en plein écran.
- Caméra : glisser avec le bouton gauche pour tourner, avec le bouton droit pour déplacer ; la molette zoome vers le curseur. La cible reste bornée au laboratoire. Pendant un récit, la caméra cadre chaque étape en douceur ; une manipulation manuelle suspend ce cadrage jusqu’à l’étape suivante. Options → Caméra libre le désactive. Double-clic ou Vue globale recentre.
- Paquet : P ou « Ouvrir le paquet » éclate la trame en couches (Ethernet, tag802.1Q, IP, TCP, données) avec leurs valeurs ; P ou Échap la referme et le trajet reprend.
- Et si… ? : choisir une ou plusieurs pannes (câble trunk, SW-B, règle CLIENTS → 8443, conteneur InvoiceShelf, VLAN supprimés sur B) puis rejouer un trajet. La maquette arrête le paquet au point de rupture et l’explique ; Tout rétablir revient au trajet normal. Aucune VM n’est modifiée.
- Mode quiz étudiants : six questions s’affichent avant les étapes clés de la présentation ; 1, 2, 3 répondent, Entrée ou → montre la réponse en3D. Score à la fin.
- Configuration et état réel, dans le composant, conserve les interfaces, les protections attendues et les preuves disponibles.
- Options regroupe vue du dessus, plan2D, export SVG, points ouverts et mouvement réduit.

Les anciennes saisies locales du premier prototype ne sont pas supprimées du navigateur, mais leur formulaire a été retiré de cette version pour simplifier la présentation.

## Direction visuelle

Audience : professeur et étudiants. Objectif : comprendre hôte/hyperviseur/VM/conteneur et le trajet d’une communication autorisée/refusée. Composition : deux PC en vue d’ensemble, cinq invités identifiables, un seul parcours guidé à la fois. Au clic, la coupe du composant est isolée ; les autres équipements et connexions s’effacent jusqu’au retour au réseau. Bureau et projection uniquement ; aucun travail de compatibilité téléphone demandé.

Matériaux graphite et métal aux arêtes adoucies. Pictogrammes SVG dessinés dans [diagram/icons.mjs](../diagram/icons.mjs), géométrie3D procédurale et signes reconnaissables des systèmes, sans badges de lettres. Aucun modèle ou service3D payant. Palette révisée : scène bleu nuit, surfaces ivoire, texte encre ; câble cuivre, VLAN20 bleu et VLAN30 ambre. Les autorisations/refus conservent texte et signes en plus du vert/rouge. Titres Space Grotesk, textes IBM Plex Sans auto-hébergés, textes secondaires assombris.

Transport : câble et canaux plus épais, cartouche explicite802.1Q ; un refus s’arrête au pare-feu. Coupes : plateaux séparés et légendes nommées pour les fonctions. La signature est Ubuntu→NAS : VLAN20 vers A, routage sur OPNsense, VLAN30 retour vers B.

Three.js0.186.1 et GSAP3.15.0 séparent scène, animation et UI ; camera-controls3.1.2 pilote la caméra et postprocessing6.39.5 la finition. Rendu à la demande ; densité plafonnée à1,5. Qualité haute : environnement d’éclairage, ombres douces recalculées seulement quand la disposition change, bloom sélectif sur les LED, écrans et paquet, tone mapping ACES, contour au survol, SMAA et vignette. Qualité économe (Options, ou automatique si l’image dépasse environ28 ms) coupe ces effets. Les tweens sont arrêtés ou remplacés lors d’une nouvelle interaction.

Lisibilité : pendant une étape, seules les machines concernées gardent leur nom ; les autres n’affichent que leur pictogramme (le nom revient au survol et en vue d’ensemble). L’étiquette du paquet se limite au tag courant (Sans tag, VLAN20, VLAN30, Écriture locale, Refusé) ; le détail de la trame reste dans la bande de récit et dans le paquet éclaté. Les étiquettes gardent leur position tant qu’elle reste lisible et glissent au lieu de sauter quand elles doivent s’écarter.

## État réel et sources

A : OPNsense/Windows. B : SW-B/Ubuntu/TrueNAS. CLIENTS et MGMT non tagués ; trunk VLAN20/30 ; SW-B L2 sans IP/routage. Client VPN sur l’hôte A via WAN VMware simulé, sans prétendre un accès Internet public.

Application choisie : InvoiceShelf2.4.7 avec SQLite local et Nginx HTTPS8443 ; backend8080 interne. Prometheus collecte, Grafana affiche. La sauvegarde exige arrêt/archivage/reprise et restauration isolée ; les ACL NAS s’ajoutent au pare-feu.

Le laboratoire a été intégré le29/10 : les preuves datées remplacent les anciens états préparatoires. Ubuntu4 Gio et TrueNAS6 Gio sont les allocations observées ; les anciennes cibles2,5/8 Gio restent des références distinctes. Les succès et les limites sont dans la matrice ; aucun test n'est relancé pour ce rangement.

Sources : [liaison et règles](LIAISON.md), [machine A](MACHINE_A.md), [machine B](MACHINE_B.md), [état B](../evidence/PC_B_STATUS.md), révision921eebf et décisions humaines du27/10. Le choix InvoiceShelf supersède Homebox/Vikunja ; les guides opérationnels ont été alignés sur ce choix.

Conseils consultés : [Web3D Integration Patterns](https://www.skills.sh/freshtechbro/claudedesignskills/web3d-integration-patterns), séparation des couches, état synchronisé et rendu à la demande. [image-3d](https://www.skills.sh/starchild-ai-agent/official-skills/image-3d) produit des images2D au rendu3D, pas des modèles interactifs ; aucun script de facturation ni service Starchild n’est utilisé. Les consultations Astra en lecture seule ont guidé les trajets exacts, les vues fonctionnelles et la distinction simulation/preuve. La revue finale du code a conduit aux corrections des connexions internes, du serveur local et du sens en2D.

Le concept raster généré a servi à la composition, pas aux faits. Ses chiffres/adresses illustratifs ne sont pas réutilisés ; le modèle JSON gouverne l’interface simulée, pas le statut réel du laboratoire.

## Sources éditables et reconstruction

[topology.json](network-assets/topology.json) contient les faits affichés par la maquette, dont certains sont historiques (VMnet14, états préparatoires). Les sources éditables sont [scenarios.mjs](../diagram/scenarios.mjs) pour les étapes, [scene.mjs](../diagram/scene.mjs) pour la scène, [app.mjs](../diagram/app.mjs) pour l'interface, [icons.mjs](../diagram/icons.mjs) pour les pictogrammes et [map.mjs](../diagram/map.mjs) pour le plan 2D. Les modules [fx.mjs](../diagram/fx.mjs), [camera.mjs](../diagram/camera.mjs), [packet.mjs](../diagram/packet.mjs), [whatif.mjs](../diagram/whatif.mjs) et [quiz.mjs](../diagram/quiz.mjs) gèrent le rendu, la caméra, les paquets, les pannes et les questions simulées. La politique simulée est dans la propriété policy de topology.json.

Dans diagram/ : `pnpm install --frozen-lockfile --ignore-scripts`, puis `node build.mjs`. Les dépendances sont verrouillées ; node_modules est exclu de Git. Le build regroupe les bibliothèques, copie polices/notices et régénère le [schéma SVG](network-lab-2d.svg). L'entrée actuelle est la [page 3D](network-lab-3d.html) ; la [page précédente](network-lab.html) conserve la version antérieure de B.

## Vérification

Les contrôles sont consignés dans [DIAGRAM_VERIFICATION](../evidence/DIAGRAM_VERIFICATION.md). Les captures de l'interface comprennent la [vue générale](../evidence/diagram-preview/overview.jpg), les [couches du pare-feu](../evidence/diagram-preview/firewall-layers.jpg), les [services Ubuntu](../evidence/diagram-preview/ubuntu-services.jpg) et le [refus VPN simulé](../evidence/diagram-preview/vpn-denied.jpg). Les captures sont des rendus du navigateur, pas des tests du réseau. La fluidité avec toutes les VM, le PC B et la projection physique restent non vérifiés.

## Dernière passe approuvée

La lecture principale suit un paquet : ports nommés, sens A/B, ajout/retrait des tags et décision au point de contrôle. Les connexions se sélectionnent et s’expliquent. Les vues fonctionnelles remplacent les plateaux génériques : interfaces/règle OPNsense, ports SW-B, frontière Ubuntu/Docker et volume local distinct, datasets/ACL/snapshots NAS. Le fil Réseau → PC → VM → service conserve le parcours et son étape. Les claviers et écrans prennent moins de place ; la palette bleu nuit/ivoire et VLAN20 bleu/VLAN30 ambre est conservée.
