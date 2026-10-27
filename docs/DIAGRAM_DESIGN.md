# Diagramme interactif du laboratoire

Version du 27 octobre 2026. Présentateur de bureau pour la démonstration devant le professeur. Une maquette explique le réseau prévu ; elle ne configure aucune VM et ne mesure aucun trafic.

## Lancer

Depuis la racine : `powershell -NoProfile -File diagram/start.ps1`, puis http://127.0.0.1:3187/. Le lanceur cherche Node dans le runtime Codex puis dans PATH. Les assets sont livrés : aucune compilation ou connexion Internet nécessaire à la consultation. Le serveur écoute sur127.0.0.1 seulement, sans exposer le reste du dépôt.

Pour arrêter : terminer seulement le processus Node exécutant diagram/serve.mjs, pas les autres processus Node. Pour un autre port, définir LAB_DIAGRAM_PORT et lancer Node avec diagram/serve.mjs.

## Présenter

- Cliquer une machine ou un équipement : ouverture de sa coupe fonctionnelle et de son explication. Ubuntu révèle ses services Docker. Les formes3D illustrent des rôles virtuels, pas l’intérieur physique réel des logiciels.
- Retour au parcours, visible dans la coupe, referme l’inspection sans perdre le scénario ni l’étape. Le fil Réseau → PC → VM → service permet aussi le retour au parent. Vue globale, Échap et la fermeture du panneau conservent le parcours.
- Équipements et Connexions gardent les positions stables. Sécurité révèle les volumes CLIENTS/SERVEURS/STOCKAGE, explique trois barrières et propose les parcours VPN autorisé/refusé.
- Choisir un parcours en bas, puis Lire/Pause ou les flèches d’étape. Les flèches clavier fonctionnent hors des champs. Une étape manuelle anime son seul trajet.
- Plein écran (ou F) ouvre la présentation avec un en-tête compact et plus de place pour la scène. Quitter le plein écran, F et Échap permettent de sortir.
- Configuration et état réel, dans le composant, conserve les interfaces, les protections attendues et les preuves disponibles.
- Options regroupe vue du dessus, plan2D, export SVG, points ouverts et mouvement réduit.

Les anciennes saisies locales du premier prototype ne sont pas supprimées du navigateur, mais leur formulaire a été retiré de cette version pour simplifier la présentation.

## Direction visuelle

Audience : professeur et étudiants. Objectif : comprendre hôte/hyperviseur/VM/conteneur et le trajet d’une communication autorisée/refusée. Composition : deux PC en vue d’ensemble, cinq invités identifiables, un seul parcours guidé à la fois. Au clic, la coupe du composant est isolée ; les autres équipements et connexions s’effacent jusqu’au retour au réseau. Bureau et projection uniquement ; aucun travail de compatibilité téléphone demandé.

Matériaux graphite et métal aux arêtes adoucies. Pictogrammes SVG dessinés dans diagram/icons.mjs, géométrie3D procédurale et signes reconnaissables des systèmes, sans badges de lettres. Aucun modèle ou service3D payant. Palette révisée : scène bleu nuit, surfaces ivoire, texte encre ; câble cuivre, VLAN20 bleu et VLAN30 ambre. Les autorisations/refus conservent texte et signes en plus du vert/rouge. Titres Space Grotesk, textes IBM Plex Sans auto-hébergés, textes secondaires assombris.

Transport : câble et canaux plus épais, cartouche explicite802.1Q ; un refus s’arrête au pare-feu. Coupes : plateaux séparés et légendes nommées pour les fonctions. La signature est Ubuntu→NAS : VLAN20 vers A, routage sur OPNsense, VLAN30 retour vers B.

Three.js0.186.1 et GSAP3.15.0 séparent scène, animation et UI. Rendu à la demande ; densité plafonnée à1,5 ; pas de bloom ni d’ombres temps réel. Les tweens sont arrêtés ou remplacés lors d’une nouvelle interaction.

## État réel et sources

A : OPNsense/Windows. B : SW-B/Ubuntu/TrueNAS. CLIENTS et MGMT non tagués ; trunk VLAN20/30 ; SW-B L2 sans IP/routage. Client VPN sur l’hôte A via WAN VMware simulé, sans prétendre un accès Internet public.

Application choisie : InvoiceShelf2.4.7 avec SQLite local et Nginx HTTPS8443 ; backend8080 interne. Prometheus collecte, Grafana affiche. La sauvegarde exige arrêt/archivage/reprise et restauration isolée ; les ACL NAS s’ajoutent au pare-feu.

La préparation déclarée par B le26/10 ne prouve ni installation ni réseau fonctionnel. TrueNAS6 Gio préparés contre8 Gio au plan, et UbuntuDesktop4 Gio contre2,5 Gio au plan, restent à réconcilier. Tous les tests réseau/VPN/restauration restent à effectuer.

Sources : docs/LIAISON.md, docs/MACHINE_A.md, docs/MACHINE_B.md, evidence/PC_B_STATUS.md, révision921eebf et décisions humaines du27/10. Le choix InvoiceShelf supersède Homebox/Vikunja ; les guides opérationnels ont été alignés sur ce choix.

Conseils consultés : [Web3D Integration Patterns](https://www.skills.sh/freshtechbro/claudedesignskills/web3d-integration-patterns), séparation des couches, état synchronisé et rendu à la demande. [image-3d](https://www.skills.sh/starchild-ai-agent/official-skills/image-3d) produit des images2D au rendu3D, pas des modèles interactifs ; aucun script de facturation ni service Starchild n’est utilisé. Les consultations Astra en lecture seule ont guidé les trajets exacts, les vues fonctionnelles et la distinction simulation/preuve. La revue finale du code a conduit aux corrections des connexions internes, du serveur local et du sens en2D.

Le concept raster généré a servi à la composition, pas aux faits. Ses chiffres/adresses illustratifs ne sont pas réutilisés ; le modèle JSON gouverne l’interface.

## Sources éditables et reconstruction

docs/network-assets/topology.json contient les faits ; diagram/scenarios.mjs contient les étapes ; diagram/scene.mjs, diagram/app.mjs, diagram/icons.mjs et diagram/map.mjs contiennent scène, interface, pictogrammes et plan2D.

Dans diagram/ : `pnpm install --frozen-lockfile --ignore-scripts`, puis `node build.mjs`. Les dépendances sont verrouillées ; node_modules est exclu de Git. Le build regroupe les bibliothèques, copie polices/notices et régénère docs/network-lab-2d.svg. L’entrée actuelle est docs/network-lab-3d.html ; docs/network-lab.html conserve la version antérieure de B.

## Vérification

Voir evidence/DIAGRAM_VERIFICATION.md. Les captures sont des rendus du navigateur, pas des tests du réseau. La fluidité avec toutes les VM, le PC B et la projection physique restent non vérifiés.

## Dernière passe approuvée

La lecture principale suit un paquet : ports nommés, sens A/B, ajout/retrait des tags et décision au point de contrôle. Les connexions se sélectionnent et s’expliquent. Les vues fonctionnelles remplacent les plateaux génériques : interfaces/règle OPNsense, ports SW-B, frontière Ubuntu/Docker et volume local distinct, datasets/ACL/snapshots NAS. Le fil Réseau → PC → VM → service conserve le parcours et son étape. Les claviers et écrans prennent moins de place ; la palette bleu nuit/ivoire et VLAN20 bleu/VLAN30 ambre est conservée.
