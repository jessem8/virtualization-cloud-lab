# Design brief · démonstration du laboratoire

- **Audience :** étudiant qui découvre le projet et jury technique.
- **Objectif :** comprendre, en suivant une histoire courte, comment un utilisateur atteint InvoiceShelf, comment les VLAN et le pare-feu contrôlent le trajet, puis comment la sauvegarde, le VPN et la reprise s’insèrent dans cette architecture.
- **Composition :** la maquette 3D reste le centre visuel ; une barre de récit stable donne une seule action principale, une étape à la fois, une phrase de narration et des commandes précédent/suivant. Les détails d’un équipement restent accessibles au clic. Les autres trajets restent dans la liste secondaire.
- **Typographie :** Space Grotesk pour les titres et IBM Plex Sans pour le texte, en conservant les polices locales du présentateur.
- **Palette :** préserver les tons crème, bleu nuit, cuivre, menthe et violet du diagramme existant. La menthe identifie VLAN20, le violet identifie VLAN30, et le cuivre identifie le câble. Le rouge n’indique qu’un refus ou une panne simulée.
- **Interaction :** parcours guidé déterministe, navigation clavier gauche/droite, lecture automatique facultative, inspection des composants, mode 2D de secours et réduction des mouvements système.
- **Révélation progressive :** pendant le récit guidé, masquer la bande de transport, les métadonnées de paquets et les étiquettes de ports/zones. Le bouton « Afficher les détails techniques » les remet en place quand le présentateur en a besoin. Les noms des équipements restent visibles pour l’inspection directe.
- **Vérité du produit :** le parcours est une simulation explicative de l’architecture prévue. Les preuves réelles proviennent des VM, journaux et tests en direct ; aucun mouvement de la maquette ne démontre qu’un service fonctionne.

Le monde graphique et la scène 3D existaient déjà. Cette évolution conserve leur identité et réduit les décisions à prendre au démarrage.
