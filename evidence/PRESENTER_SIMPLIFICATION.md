# Vérification de la simplification du présentateur

## Changement livré

Le bouton principal lance maintenant un récit fixe de 18 étapes : architecture, demande de facture, passage CLIENTS → pare-feu → trunk20 → Ubuntu, inspection de la coupe interne Ubuntu, base locale, archive vers TrueNAS par OPNsense, refus VPN vers SMB et panne/reprise applicative. Chaque étape a une phrase de narration. L’utilisateur peut avancer ou reculer manuellement ; la lecture automatique reste disponible. Les autres scénarios et l’exploration interactive restent accessibles.

Pendant le récit, la bande transport, les métadonnées de paquets et les étiquettes secondaires de ports/zones sont cachées. Le bouton « Afficher les détails techniques » les restaure. Les étiquettes des équipements restent visibles pour l’inspection.

Une étape invite explicitement à cliquer Ubuntu. L’inspection existante ouvre la coupe 3D avec Nginx, InvoiceShelf, SQLite et la supervision à l’intérieur de cette seule VM. La palette reprend les couleurs visibles du schéma : menthe pour VLAN20, violet pour VLAN30, cuivre pour le câble.

La première vue précise que le schéma illustre l’architecture prévue. Le texte rappelle aussi que « déployer » veut ici dire installer/configurer/démarrer un service sur une VM, et que le schéma n’exécute aucune installation.

## Contrôles effectués

- Sources relues : `diagram/app.mjs`, `diagram/scenarios.mjs`, `diagram/scene.mjs`, `diagram/map.mjs`, `docs/network-lab-3d.html`, le modèle `docs/network-assets/topology.json` et le checkpoint.
- `node build.mjs` : réussi, bundle généré avec les dépendances locales.
- `node --check app.mjs` et `node --check scenarios.mjs` : réussis.
- La dernière liste des IDs de liens connue pour l’histoire avait 17 étapes, cinq chapitres, chaque étape narrée et aucun lien manquant. Une étape d’inspection Ubuntu a ensuite été ajoutée ; les liens existants n’ont pas changé.
- Revue Chrome à 90 % avant la dernière modification : vue 3D présente, bouton de récit fonctionnel, clavier droit avançant, narration visible, scène montrant Windows puis CLIENTS vers OPNsense.
- Détecteur Impeccable exécuté une fois avant l’ajustement final : il signale le fond crème et les reflets colorés préexistants, ainsi qu’un avertissement possible sur le hover générique. La couleur de texte normale des boutons primaires est définie par une règle plus spécifique. Ces éléments existants sont préservés.

## Limites

La dernière tentative de rafraîchir Chrome a été bloquée par Computer Use, qui ne pouvait pas vérifier l’URL avec assez de confiance. Le masquage final des étiquettes, le bouton de révélation, la nouvelle étape Ubuntu et les valeurs de trajet corrigées n’ont donc pas été revus dans le navigateur. La limitation a été respectée sans tenter un contournement par un autre navigateur ou outil d’interface.

Le parcours décrit l’architecture cible. Aucune VM, règle, route, application, sauvegarde, restauration ou sonde n’est déclarée opérationnelle par cette modification. Aucun contrôle mobile ou rendu final du nouveau masquage visuel n’est revendiqué.
