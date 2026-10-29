# Index des preuves du laboratoire

Preuves datées du **29 octobre 2026**, heure de Tunis. Le [README du projet](../README.md) décrit l'architecture ; les résumés [PC A](PC_A_STATUS.md) et [PC B](PC_B_STATUS.md) présentent les résultats. Les comptes rendus datés sont [A, 29 octobre](PC_A_2026-10-29.md) et [B, 29 octobre](PC_B_2026-10-29.md).

Les [modules du projet](../docs/MODULES_DU_PROJET.md) replacent ces preuves dans l'ordre de présentation : contexte, architecture, réseau, application, sécurité, stockage, supervision et bilan.

## Comment lire une preuve

- **Configuration sauvegardée / relue** : une interface, règle ou service est configuré ; cela ne prouve pas tous ses effets.
- **Essai observé** : sortie de commande, capture ou consultation directe décrite avec source/date. Un résultat ponctuel n'est pas une garantie générale.
- **Déclaration humaine** : Jessem/Sanad rapporte un résultat ; la preuve indépendante peut manquer.
- **Non confirmé / partiel** : critère sans preuve suffisante. Il reste ainsi dans la [matrice T01–T23](../docs/TEST_MATRIX.md).
- **Simulation** : rendu du présentateur 3D. Il illustre un chemin et ne mesure pas le laboratoire.

Le rangement n'a relancé aucun test. Il a recoupé les notes, les index et l'intégrité des fichiers ; **il n'a pas revalidé visuellement chaque capture ni indépendamment chaque essai**.

## Retrouver une preuve par sujet

| Sujet | Notes et portée | Captures de repère |
|---|---|---|
| VMware, réseaux et VLAN | [A : diagnostics et pings](PC_A_2026-10-29.md), [B : ports SW-B et adresses](PC_B_2026-10-29.md). Pings passerelles 20/30 réussis ; T03 complet et isolation T04 non établis. | [A : pont VMnet12](../screenshots_a/01-vmnet12-bridged-to-ethernet.png), [ARP tagué 20](../screenshots_a/04-vlan20-tagged-arp.png) |
| Windows, Defender, Sysmon, audit | [Historique A du 27/28](history/PC_A_STATUS.md) : sorties invitées, Sysmon 1/3 et Security 4624/4625. Certaines captures du chat précédent n'ont pas été récupérées. | Collection A incomplète pour ces anciens sujets ; ne pas inventer les images manquantes. |
| Facture et persistance | [B : InvoiceShelf et SMB](PC_B_2026-10-29.md) ; facture encore présente après recréation. Rôle limité rapporté ; refus d'actions non tous capturés. | [Facture/PDF A](../screenshots_a/11-invoiceshelf-invoice-preview.png), [liste après recréation B](../screenshots_b/codex-clipboard-60d57685-6aa5-4206-9e92-6f2fcdb8e492.png) |
| SMB, ACL et chiffrement | [A : Alice, lecteur, Bob](PC_A_2026-10-29.md) ; [B : REQUIRED](PC_B_2026-10-29.md). Bob peut se connecter au partage dans le test A mais la lecture du fichier est refusée. | [Lecteur : écriture refusée](../screenshots_a/09-smb-reader-write-denied.png), [Bob : lecture refusée](../screenshots_a/10-smb-bob-read-denied.png), [Encrypted=True et NTP](../screenshots_a/08-smb-encryption-and-ntp.png) |
| Datasets, miroir et snapshot | [Historique B du 28](history/PC_B_STATUS.md) : datasets chiffrés déverrouillés, restauration d'un fichier via clone. Miroir/snapshot sur le même stockage physique. | Détails dans la note ; aucun test de perte de PC revendiqué. |
| Sauvegarde applicative | [B : arrêt, archive, NAS, SHA-256, copie isolée](PC_B_2026-10-29.md). Facture et PDF ouverts à 127.0.0.1:8444 ; conteneurs de restauration retirés ensuite. | [Empreintes](../screenshots_b/codex-clipboard-cb9828a3-70f0-4bb6-b5ba-c9b25f4ff7bc.png), [PDF restauré](../screenshots_b/codex-clipboard-36812d8e-4de8-498e-8237-d88a153100b7.png), [retrait de la copie](../screenshots_b/codex-clipboard-480cc495-775c-4222-bc35-7fd00283820a.png) |
| Collecte et pannes/reprises | [B : supervision](PC_B_2026-10-29.md). Perte/reprise du collecteur Ubuntu et panne/reprise de webapp séparées. Le job blackbox UP ne suffit pas : regarder probe_success. | [Cibles UP](../screenshots_b/codex-clipboard-f2cc6c90-e8fb-40a5-bbb5-c359b621a2ad.png), [sonde DOWN](../screenshots_b/codex-clipboard-48dc8f89-b5eb-4d64-bcde-bae99cf377cd.png) |
| Journaux, auditd, ClamAV | [B : réception du marqueur A, rotation, audit et scan](PC_B_2026-10-29.md). Scan limité à quatre fichiers, pas à tout le système. | [Rotation réussie](../screenshots_b/codex-clipboard-f38eca4e-34bb-4003-857b-15285eb5289f.png), [événement audit](../screenshots_b/codex-clipboard-9deac99d-1abe-4603-8fa3-481c9f0d5d24.png), [scan](../screenshots_b/codex-clipboard-58e10812-9f3c-494e-86e3-56c2c7fb6a8f.png) |
| VPN et refus | [A : tests sans MGMT, puis déconnexion](PC_A_2026-10-29.md), [B : marqueurs de refus et SSH actif](PC_B_2026-10-29.md). WAN simulé VMware ; aucun accès Internet externe démontré. | [VPN connecté](../screenshots_a/05-openvpn-connected.png), [application](../screenshots_a/06-invoiceshelf-via-vpn.png), [déconnecté](../screenshots_a/07-invoiceshelf-unreachable-after-vpn-disconnect.png) |
| SSH de gestion | [A : clé, empreinte épinglée et négociation password-only refusée](PC_A_2026-10-29.md). Root interdit en configuration ; pas d'essai root distinct revendiqué. | [Configuration B](../screenshots_b/codex-clipboard-b61c48b4-a320-4093-892e-ae07d80746c7.png) |
| MTU/MSS et redémarrage | [B : règles et services restaurés](PC_B_2026-10-29.md), [A : accès frais et nettoyage](PC_A_2026-10-29.md). MTU 1400/MSS 1360 retenues ; cause racine inconnue. | [MSS](../screenshots_b/codex-clipboard-4b4ae3ac-c4cc-427e-8c74-fbab71ad2a96.png), [après reboot B](../screenshots_b/codex-clipboard-b02d8aef-4893-4236-8b09-b78199dd2476.png), [InvoiceShelf A](../screenshots_a/12-invoiceshelf-after-reboot.png), [Grafana A](../screenshots_a/13-grafana-after-reboot.png) |

## Collections originales

- **A : 13 PNG** et [index CSV](../screenshots_a/index.csv) : noms lisibles, thèmes, chemins d'origine et observations. La collecte précédente avait comparé les 13 empreintes aux originaux ; les images Sysmon/Defender des anciens échanges restent incomplètes.
- **B : 108 PNG** et [index CSV](../screenshots_b/index.csv) : thème, provenance et SHA-256. Plusieurs lignes disent seulement « See original screenshot » ; l'index ne certifie donc pas tout leur contenu.

Les deux dossiers et leurs index ont été conservés sans modification. **121 captures ne signifient pas 121 exigences validées.** Les captures comprennent aussi des échecs intermédiaires.

## Historique et présentateur

[Début de séance commune](JOINT_SESSION.md), [anciens états A](history/PC_A_STATUS.md), [anciens états B](history/PC_B_STATUS.md) et [archives documentaires](../docs/archive/README.md) gardent la chronologie. Dans les notes datées, les sections de clôture en tête supersèdent les anciennes mentions « en attente ».

Les fichiers [DIAGRAM_VERIFICATION](DIAGRAM_VERIFICATION.md), [PRESENTER_ENHANCEMENT](PRESENTER_ENHANCEMENT.md) et [PRESENTER_SIMPLIFICATION](PRESENTER_SIMPLIFICATION.md), ainsi que les [aperçus](diagram-preview/), concernent l'interface simulée, jamais des tests VM. Ils sont historiques ; aucune nouvelle vérification graphique n'est revendiquée par ce rangement.
