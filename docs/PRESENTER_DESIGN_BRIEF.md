# Design brief · présentateur du laboratoire

## Direction retenue — 30 octobre 2026

- **Public et objectif :** quatre étudiants et jury ; présenter en environ 15 minutes l'infrastructure réelle en neuf chapitres, sans devoir choisir parmi les outils de simulation. Mode de surface : Experience, avec une navigation de présentation lisible.
- **Composition :** en-tête discret, rail gauche des neuf chapitres, grande scène 3D, bande basse avec un titre, une phrase, Preuves et Précédent/Suivant. Présenter est le mode par défaut ; Explorer donne accès aux trajets, vues réseau/sécurité, quiz et pannes déjà existants. La caméra et le paquet expliquent le trajet ; aucun mouvement permanent décoratif n'est ajouté.
- **Identité :** conserver les modèles et coupes Three.js, Space Grotesk et IBM Plex locaux, surfaces ivoire, scène bleu nuit, VLAN20 bleu, VLAN30 ambre et câble cuivre. Les hôtes s'appellent seulement PC A et PC B. Préserver les contrastes et les signes/textes de refus.
- **Interaction :** neuf chapitres accessibles directement, un parcours déterministe, clavier gauche/droite, inspection compacte (nom, rôle, objet et 4–6 faits), retour au même chapitre/étape, preuves datées à un clic dans une galerie. Notes orales et paramètres secondaires repliés. Plein écran, mouvement réduit, plan 2D et économie graphique conservés. Bureau/projection : 1366×768 et 1920×1080.
- **Vérité :** contenus issus des preuves du 29 octobre et de MODULES_DU_PROJET. La 3D reste une simulation ; les captures sont des essais antérieurs. Conserver les limites MTU/MSS, certificat, T03/T04/T13, rôle lecteur et ressources. Aucun nouveau test de labo ou publication publique n'est autorisé par ce travail.

## Référence de composition

Concept Image Gen : C:/Users/jesse/.codex/generated_images/01a189ae-ec60-7411-9b3d-2aaadfb704da/exec-83e511ec-2d22-4857-aa5e-d131f7ffc585.png. Il sert à la composition de l'interface, pas aux faits : son placement d'Alpine sur PC A est erroné et sera corrigé (SW-B est sur PC B). Les autres écarts intentionnels sont les modèles procéduraux existants, les icônes du dépôt et le libellé exact des chapitres fondé sur le guide.

## Outils et périmètre

Impeccable distill pour la hiérarchie et la réduction de charge, design-motion pour la continuité, Build Web Apps pour l'implémentation et la comparaison du rendu. Les capacités de modèles/scènes 3D découvertes sont disponibles à évaluer ; aucune génération de modèle externe ou migration du renderer n'est nécessaire à la correction UX. Les dépendances verrouillées sont conservées. Les preuves copiées dans les assets sont consultées avant sélection ; leur export public attend une revue distincte.

## Ordre des chapitres

Contexte → Virtualisation → Réseau → Application → Sécurité/VPN → Stockage/récupération → Supervision/journaux → Résultats/limites → Bilan. Les contributions individuelles restent à compléter sans attribution inventée ; la préparation Q/A reste ultérieure.

## 30 octobre 2026 — refonte du présentateur

Livré : 24 étapes réparties 1/3/3/3/5/4/3/1/1, « Et si » dans Options. Vérifié dans Edge à 1366x768 et 1920x1080 ; l'avis du plan 2D est placé au-dessus du plan sans recouvrir son titre, et les petits textes du rail et des options atteignent le contraste AA. Détails : [DIAGRAM_VERIFICATION](../evidence/DIAGRAM_VERIFICATION.md).

## 30/10 — présentateur en direct

Quatre sections et 13 scènes, une phrase et un plan de caméra par scène. Répétition dans le navigateur conforme ; le rendu s'arrête une fois la scène fixe (0 image au repos), et la qualité économique divise par trois environ les appels de dessin par rapport à 1e48368. Détails et limites : [DIAGRAM_VERIFICATION](../evidence/DIAGRAM_VERIFICATION.md).
