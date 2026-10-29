# Design brief · démonstration du laboratoire

Référence historique de la conception livrée, conservée sans refonte. Les couleurs et comportements décrits doivent être recoupés avec l'artefact existant avant une évolution ; ce document ne certifie pas l'état du laboratoire. Lire le [README actuel](../README.md).

- **Audience :** étudiant qui découvre le projet et jury technique.
- **Objectif :** comprendre, en suivant une histoire courte, comment un utilisateur atteint InvoiceShelf, comment les VLAN et le pare-feu contrôlent le trajet, puis comment la sauvegarde, le VPN et la reprise s’insèrent dans cette architecture.
- **Composition :** la maquette 3D reste le centre visuel ; une barre de récit stable donne une seule action principale, une étape à la fois, une phrase de narration et des commandes précédent/suivant. Les détails d’un équipement restent accessibles au clic. Les autres trajets restent dans la liste secondaire.
- **Typographie :** Space Grotesk pour les titres et IBM Plex Sans pour le texte, en conservant les polices locales du présentateur.
- **Palette :** préserver les tons crème, bleu nuit, cuivre, menthe et violet du diagramme existant. La menthe identifie VLAN20, le violet identifie VLAN30, et le cuivre identifie le câble. Le rouge n’indique qu’un refus ou une panne simulée.
- **Interaction :** parcours guidé déterministe, navigation clavier gauche/droite, lecture automatique facultative, inspection des composants, mode 2D de secours et réduction des mouvements système.
- **Révélation progressive :** pendant le récit guidé, masquer la bande de transport, les métadonnées de paquets et les étiquettes de ports/zones. Le bouton « Afficher les détails techniques » les remet en place quand le présentateur en a besoin. Pendant une étape, seuls les équipements concernés gardent leur nom ; les autres se réduisent à leur pictogramme et le retrouvent au survol. L’étiquette du paquet ne porte qu’un mot (tag ou refus).
- **Mise en scène :** finition cinématographique (ombres douces, bloom sur les éléments lumineux, contour au survol), titre de chapitre bref, caméra qui cadre chaque étape sans à-coups, porte pare-feu verte ou rouge, paquet éclatable. Le plein écran ne garde que la scène et le récit, sans menus ni notes du présentateur.
- **Apprentissage actif :** « Et si… ? » montre où un trajet casse quand une panne est simulée ; le mode quiz pose une question avant six étapes clés. Les deux sont désactivés par défaut.
- **Vérité du produit :** le parcours est une simulation explicative de l’architecture prévue. Les preuves réelles proviennent des VM, journaux et tests en direct ; aucun mouvement de la maquette ne démontre qu’un service fonctionne.

Le monde graphique et la scène 3D existaient déjà. Cette évolution conserve leur identité et réduit les décisions à prendre au démarrage.
