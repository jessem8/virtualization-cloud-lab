# Coordination du dépôt

Mise à jour du 29 octobre 2026. Deux branches maintenues dans **ce dépôt privé** :

| Branche | Usage |
|---|---|
| `main` | Documentation actuelle, originaux et preuves A/B. Point de départ pour les quatre membres. |
| `presenter` | Sources et assets du présentateur 3D existant ; réservée à son évolution ultérieure. |

Les 28 commits de `evidence/joint-lab-20261029` jusqu'à `4efc321` ont été intégrés à `main` sans réécriture. Cette ancienne branche de collecte est supprimée après sauvegarde et vérification ; ne pas la recréer pour poursuivre la collecte. Les références internes de Codex ne sont pas des branches de travail.

## Avant un changement

Récupérer les changements distants et vérifier son arbre de travail. Sur une copie propre destinée à la documentation :

```powershell
git fetch --prune origin
git switch main
git pull --ff-only origin main
```

Si une ancienne copie utilise encore la branche de collecte, conserver d'abord tout changement local, puis rejoindre `main`. En cas de divergence, examiner et réconcilier les commits ; ne pas réinitialiser ni forcer le push. Faire des commits ciblés et préserver les modifications de l'autre PC. Pour le présentateur, partir de `presenter`, récupérer son état distant et ne pas mélanger les preuves privées à la publication.

## Preuves et autorisations

Jesse est propriétaire du PC A ; Sanad du PC B. Les notes [A](../evidence/PC_A_STATUS.md) et [B](../evidence/PC_B_STATUS.md) résument les dernières preuves, avec leurs sources datées. Une configuration sauvegardée, une capture, un test observé et un témoignage sont distingués. Ne jamais transformer un contrôle non confirmé en réussite.

La tâche actuelle est documentaire : pas de démarrage/arrêt de VM, modification réseau, installation ou nouvel essai. L'[issue #2](https://github.com/jessem8/virtualization-cloud-lab/issues/2) est clôturée après la remise des captures ; [PR #1](https://github.com/jessem8/virtualization-cloud-lab/pull/1) est historique. Utiliser les issues uniquement pour une nouvelle demande humaine autorisée ; aucun message ni suivi automatique n'est lancé.

## Publication et récupération

Le site public reste [virtualization-lab-3d](https://jessem8.github.io/virtualization-lab-3d/), dans le [dépôt public distinct](https://github.com/jessem8/virtualization-lab-3d). Pages y utilise `main` à la racine. Aucune Pages n'est activée ici. `diagram/publish.mjs` conserve son rôle d'export de la page et des assets ; sa présence n'autorise pas un déploiement automatique.

Avant consolidation, une sauvegarde Git complète privée a été créée et vérifiée sur A : `C:/Users/jesse/.codex/recovery/virtualization-cloud-lab-20261029-cleanup/before-cleanup.bundle`, hors dépôt et hors OneDrive, avec accès réservé au compte local. Elle contient les anciennes références ; les commits utiles restent aussi ancêtres de `main`. Ne jamais l'ajouter à Git.

Les clés, profils VPN, exports sensibles, archives applicatives et disques VM restent privés et hors dépôt. Aucune suppression dans le dépôt public ou dans un autre projet n'est incluse.
