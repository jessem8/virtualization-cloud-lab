# PC B - TrueNAS

Plan proposé le 25 octobre 2026. À valider dans la PR avant création, démarrage ou modification des VM. Le PC B de sanadzhioua héberge uniquement le NAS ; Ubuntu et la commutation restent sur le PC A pour équilibrer la mémoire.

## 1. Préparation

Lire BUILD_PLAN.md, LIAISON.md et COORDINATION.md sur la même révision que le PC A. Signaler RAM physique, RAM/espace réellement disponibles, versions VMware et carte Ethernet. L'hypothèse de 16 Gio sur ce PC n'a pas été vérifiée.

Prévoir TrueNAS à 8 Gio RAM, 2 vCPU, boot 20 Gio et deux nouveaux disques de données de 20 Gio alloués à la demande. Les disques actifs sont hors dossier synchronisé. Conserver au moins 20 Gio physiques libres au départ et surveiller les écritures/snapshots. Ne pas attribuer un ancien disque contenant des données.

TrueNAS Community Edition 25.10.7 est la référence du plan, déjà présente au téléchargement officiel. Vérifier le SHA256 du fichier utilisé. Il s'agit de la branche Linux/SCALE : sélectionner un invité Linux/Debian 64 bits adapté, pas recycler sans examen un profil FreeNAS/FreeBSD. Aucun service Docker ou VM supplémentaire dans TrueNAS.

## 2. Liaison Ethernet

Créer un seul VMnet Bridged vers la carte Ethernet précise, VMnet11 si libre. Ne pas sélectionner Automatic ni le Wi-Fi. Relier uniquement NAS-LAB à ce réseau, avec une seule carte finale. La carte de la VM ne porte pas de tag VLAN.

Le câble véhicule des trames non taguées. Le port distant de SW-A sur le PC A les classe dans VLAN 30. Les VLANs 20 et 30 sont sur le trunk virtuel privé du PC A : le câble n'est pas un trunk.

Sur l'Ethernet dédié du PC B, après sauvegarde : garder VMware Bridge Protocol et retirer la participation IP et client/partage Microsoft. Pas d'ICS, pont Windows, DHCP/APIPA ou IPv6 link-local. Ne pas toucher au Wi-Fi ni aux autres travaux. Ne pas activer un ID VLAN arbitraire dans le pilote Ethernet.

## 3. Installation et réseau

Installer sur le nouveau disque de boot, jamais sur un disque de données. Retirer l'ISO après installation. Choisir un compte d'administration propre au projet et un mot de passe privé.

Configurer depuis la console :

| Paramètre | Valeur |
|---|---|
| Nom | NAS-LAB |
| IPv4 | 10.77.30.10/24 |
| Passerelle | 10.77.30.1 |
| DNS | 10.77.30.1 |
| VLAN dans TrueNAS | Aucun ; port d'accès non tagué |
| IPv6 du laboratoire | Désactivé selon le périmètre IPv4 retenu |

Les communications avec le PC A se vérifient quand les deux côtés sont prêts. Une interface Windows « câble connecté » ne valide ni ARP, ni routage, ni VLAN.

L'administration HTTPS vient uniquement de 10.77.99.254 via OPNsense. Le client Windows 10.77.10.10 utilise SMB, pas l'interface d'administration.

## 4. Stockage et comptes

Créer tank avec les deux nouveaux disques de données en miroir. Ce miroir pédagogique partage le même SSD physique : il ne protège pas contre la perte du PC B. Ne pas activer déduplication, applications, iSCSI ou autres services hors périmètre.

Créer un dataset enfant tank/projet avec preset SMB. Activer son chiffrement dès sa création et exporter la clé de récupération dans un emplacement privé séparé du dépôt. Vérifier la méthode de déverrouillage au redémarrage.

Créer trois comptes de démonstration : alice lecture/écriture, lecteur lecture seule et bob sans accès. Groupes/ACL explicites ; pas de partage invité, root SMB ou entrée générale donnant l'accès à bob. Les droits de partage et les ACL du dataset doivent être cohérents.

Créer le partage projet sur /mnt/tank/projet et activer le démarrage automatique de SMB. Utiliser SMB moderne ; vérifier le chiffrement SMB effectif depuis le client si requis. Chiffrement du dataset au repos et chiffrement du transport SMB sont deux contrôles différents.

## 5. Contrôles avec PC A

Depuis WIN-LAB, vérifier d'abord TCP445. Connexion avec mot de passe demandé à l'écran, sans le mettre dans la commande :

```powershell
net use Z: \\10.77.30.10\projet /user:alice *
'version initiale' | Set-Content Z:\preuve.txt
Get-Content Z:\preuve.txt
Get-SmbConnection |
  Select-Object ServerName,ShareName,UserName,Dialect,Encrypted
net use Z: /delete
net use \\10.77.30.10\projet /delete
```

Tester ensuite lecteur : lecture autorisée, écriture refusée. Tester bob : accès refusé. Fermer uniquement les connexions du partage de démonstration entre comptes. L'erreur Windows 1219 peut être une session conservée et ne prouve pas un refus par ACL.

Créer un snapshot après le fichier initial, modifier/supprimer ce fichier, puis restaurer sa version initiale. Préférer un clone ou une restauration de fichier si disponible. Un rollback de dataset ne concerne ici que le dataset neuf de test ; il annule toutes ses modifications depuis le snapshot. Fermer la session SMB avant restauration et vérifier le contenu après reconnexion.

Le refus VPN vers SMB doit apparaître dans OPNsense, tandis qu'alice depuis Windows doit continuer à fonctionner. Ne pas présenter un NAS arrêté comme une règle de sécurité efficace.

## 6. Sauvegardes et état prêt

Exporter la configuration TrueNAS et conserver les clés séparément, hors GitHub et des captures publiques. Copier des preuves expurgées : pool, dataset chiffré, ACL, accès autorisé/refusé, snapshot et contenu restauré.

Un snapshot ZFS reste sur le même stockage ; une copie du fichier VMX ne sauvegarde pas les données. Une éventuelle copie de VM arrêtée inclut tous les VMDK. La lab utilise des disques virtuels de démonstration, sans données critiques.

Après redémarrage, vérifier dataset déverrouillé, SMB actif et partage prêt. Poster une courte confirmation avec versions, IP/MAC, ressources et contrôles locaux. Les mesures de fluidité et les communications entre PC restent à établir pendant la séance commune.
