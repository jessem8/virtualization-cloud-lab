# Vérification du présentateur

27 octobre2026, PC A. Cette livraison termine le présentateur de bureau et aligne les guides sur InvoiceShelf. La configuration de Machine A commence ensuite dans une nouvelle conversation.

## Revue et corrections

Une critique Astra a ciblé l’explication du trajet, les vues fonctionnelles, les décisions et la navigation. Une revue indépendante du code a relevé trois défauts : l’inspection d’un lien interne masquait ses services ; une traversée de chemin encodée pouvait sortir du dossier d’assets ; le plan2D ne distinguait pas le sens courant. Les trois ont été corrigés, puis vérifiés ci-dessous. Les relecteurs n’ont pas conduit les vérifications du navigateur : celles-ci ont été effectuées par l’agent principal.

Autres corrections : SQLite possède une relation de stockage local neutre, séparée du VLAN30 ; le scénario de supervision décrit la requête puis anime sa réponse dans le bon sens. Le retour et les parents Réseau/PC/Ubuntu gardent le scénario et l’étape.

## Construction et accès local

- Build Node/esbuild réussi ; bundle environ685 Kio, dépendances verrouillées, assets/polices locaux.
- Les six modules app, scene, map, scenarios, serve et build passent `node --check`.
- Le SVG généré est accepté par le parseur XML Python.
- Contrôle de whitespace Git réussi sur les fichiers de livraison. Les attributs Git identifient le bundle généré et les licences tierces ; leur whitespace amont est préservé, sans modifier les chaînes de shaders Three.js.
- Serveur redémarré avec le correctif, sur127.0.0.1:3187 uniquement.
- Requêtes HTTP observées : / →200 ; /network-assets/topology.json →200 ; /APP.md →404 ; /network-assets/..%2fAPP.md →403 ; variante ..%5c →403.

Aucun test, fixture ou dépendance de test ajouté.

## Comportements observés dans le navigateur

Les contrôles ont été exercés à des dimensions de bureau1366×768 et1536×864. Aucun travail téléphone.

- Parcours Ubuntu→NAS : B→A/VLAN20, décision de routage sur A, A→B/VLAN30 et retrait du tag30.
- Ports nommés et connexion sélectionnable ; inspecteur d’un trunk puis retour à la même étape.
- OPNsense : entrée/interface, route+règle, sortie/interface.
- Ubuntu : frontière VM, Docker, Nginx, InvoiceShelf, volume SQLite distinct et supervision ; ouverture d’InvoiceShelf, retour au parent Ubuntu, puis même étape du parcours.
- Connexion interne backend inspectée après correction : Nginx et InvoiceShelf restent visibles avec le lien actif.
- VPN→NAS : marqueur REFUS sur OPNsense, interface VPN en entrée et « Aucune sortie · paquet arrêté ». Les règles attendues, source/destination/port et le contrôle applicatif/ACL restent distincts.
- Supervision : requête vers Windows puis réponse. En2D, chemin clients observé `M300.5 296 L179.5 384` puis `M179.5 384 L300.5 296`, avec marqueur de flèche ; décision courante mise en évidence.
- Lecture automatique du parcours sauvegarde jusqu’à sa dernière étape ; relance, pause, puis avance manuelle avec mouvement réduit.
- Plein écran : bouton de sortie et interface compacte observés ; sortie et redimensionnement sans débordement horizontal.
- Bascule plan2D/3D ; export SVG téléchargé pendant la vérification du présentateur.
- Aucun avertissement ou erreur console aux inspections effectuées.

## Captures du rendu

- diagram-preview/overview.jpg : routage VLAN20→30 sur A.
- diagram-preview/firewall-layers.jpg : vue fonctionnelle OPNsense.
- diagram-preview/ubuntu-services.jpg : services et volume contenus dans Ubuntu.
- diagram-preview/vpn-denied.jpg : décision de refus VPN sur OPNsense.

## État du laboratoire

Ces animations expliquent l’architecture prévue. Cette tâche n’a modifié aucune VM ni configuration réseau. Les résultats réels seront ajoutés pendant les prochaines étapes : configurer A, finir B avec Sanad, connecter et vérifier ensemble. La projection physique, la charge avec toutes les VM et la perte réelle de contexte WebGL n’ont pas été évaluées ; le plan2D a été ouvert manuellement.

Les sources de topologie sont les guides du dépôt, evidence/PC_B_STATUS.md, les commits de B jusqu’à921eebf et les décisions humaines du27 octobre. Les guides opérationnels sont maintenant alignés sur InvoiceShelf2.4.7 et l’autorisation directe de A.

## 30 octobre 2026 — refonte du présentateur

Branche `presenter`, PC A, serveur loopback 127.0.0.1:3187, révision `diagramme-2026-10-28`. Contrôle dans Microsoft Edge piloté par Playwright, scripts hors dépôt, à 1366x768 et 1920x1080.

- Parcours : 24 étapes en neuf chapitres (1/3/3/3/5/4/3/1/1), navigation par le rail et par les flèches ; aucune erreur de page ni requête en échec (seul `favicon.ico` répond 404).
- Galerie : huit captures chargées, chacune datée du 29 octobre ; flèches gauche/droite et Échap vérifiés. Depuis un chapitre, la galerie montre seulement ses preuves.
- Clavier : focus visible sur les commandes, Échap ferme la galerie et le panneau composant ; Explorer puis Présenter reprend la même étape.
- Vue en coupe et faits du composant (PC A) ; mouvement réduit respecté ; plan 2D par le bouton et en repli sans WebGL.
- Correctifs CSS : l'avis 2D ne recouvre plus le titre du plan ; contraste AA des numéros de chapitre et des titres d'options ; aide clavier à 12 px.

Simulation explicative : ces contrôles ne mesurent pas le laboratoire et aucune VM n'a été touchée.
