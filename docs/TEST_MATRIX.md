# Matrice de vérification

Plan proposé le 25 octobre 2026. Tous les contrôles du laboratoire sont non exécutés à cette date de préparation. Les contrôles de documents ne valident pas ces résultats.

Après accord de démarrage, indiquer pour chaque ligne : date, révision de configuration, source/destination/port, attendu, observé, preuve expurgée et résultat. Un contrôle non réalisé reste « non exécuté », un échec reste visible. Un refus doit être accompagné d'une preuve que le service fonctionne depuis une source autorisée.

| ID | Contrôle | Résultat attendu / preuve | Responsable | État initial |
|---|---|---|---|---|
| T01 | Inventaire | Versions réelles, RAM/disque libres, MAC/VMnet ; autres travaux préservés | A et B | Non exécuté |
| T02 | Commutation locale | Bridge filtrant ; VLAN20/30 seuls, aucun VLAN1/IP ; état persistant | A | Non exécuté |
| T03 | Transport commun | Tags20/30 sur trunk privé ; NAS non tagué sur câble ; ARP/unicast aller/retour | A+B | Non exécuté |
| T04 | Accès VLAN restreint | Tag30 venant du port d'accès Ubuntu refusé ; VLAN20 normal continue | A | Non exécuté |
| T05 | Règles entre zones | Windows->app/SMB autorisé ; Windows->SSH/NAS admin refusé avec logs | A+B | Non exécuté |
| T06 | Sysmon | Événements1 et3 réellement générés par les actions de test | A | Non exécuté |
| T07 | Audit/firewall Windows | Politique d'audit et4624/4625 ; service local autorisé puis bloqué | A | Non exécuté |
| T08 | SSH | Clé MGMT autorisée ; mot de passe/root refusés ; accès console conservé | A | Non exécuté |
| T09 | Pare-feu Ubuntu/Docker | INPUT et DOCKER-USER/FORWARD actifs ; ports publiés limités ; refus et persistance | A | Non exécuté |
| T10 | Audit/journaux Ubuntu | Événement auditd sur fichier test ; blocage OPNsense reçu par rsyslog ; rotation | A | Non exécuté |
| T11 | Protection | Defender/signatures vérifiés ; scan ClamAV borné avec date et résultat | A | Non exécuté |
| T12 | Application | Tâches modifiables ; volume SQLite conservé après recréation ; HTTPS vérifié | A | Non exécuté |
| T13 | Atelier Docker | Source/image enregistrées ; image history expliqué ; Bench examiné avec constats/corrections | A | Non exécuté |
| T14 | Métriques | Ubuntu et Windows identifiés ; valeurs réelles ; ports internes non exposés | A | Non exécuté |
| T15 | Panne/reprise | Sonde app et perte collecteur observées séparément, puis retour sain | A | Non exécuté |
| T16 | Permissions NAS | Alice RW ; lecteur RO avec écriture refusée ; bob refusé sans confusion1219 | B avec A | Non exécuté |
| T17 | Données NAS | Dataset chiffré ; clé privée exportée ; fichier restauré et comparé | B avec A | Non exécuté |
| T18 | Entrée/sortie | WAN direct->services refusé ; sortie interdite vers service contrôlé refusée avec log | A | Non exécuté |
| T19 | VPN restreint | Déconnecté/connecté/déconnecté ; app autorisée ; NAS445/SSH22/Grafana3001 refusés | A avec B | Non exécuté |
| T20 | Redémarrage | Bridge, règles, services, dataset/partage et accès principaux restaurés | A+B | Non exécuté |
| T21 | Fluidité | Tous invités ensemble >=10min ; RAM/pagination/swap et réponses consignées | A+B | Non exécuté |
| T22 | Présentation | Parcours chronologique, schéma, limites, responsabilités et répétition | Groupe | Non exécuté |

## Précisions

- T03/T05/T16/T17/T19/T20/T21 impliquent les deux côtés : attendre leurs confirmations de disponibilité. Les contrôles locaux du périmètre approuvé peuvent précéder.
- T04 ne consiste pas à créer une interface persistante supplémentaire sur Ubuntu. Utiliser un essai temporaire identifié et le retirer ; conserver la connexion normale.
- T09 distingue un service uniquement lié à loopback/interne d'un service actif bloqué par une règle. Un port fermé ne prouve pas un filtrage efficace.
- T12 : une recréation conserve le volume nommé ; ne pas utiliser une commande supprimant les volumes. Les sauvegardes/restaurations se font sur une copie cohérente.
- T18 : utiliser une destination de test contrôlée, par exemple un service borné sur le côté WAN du laboratoire. Vérifier ce service depuis ce côté autorisé avant de prouver le refus depuis une VM. Ne pas sonder des systèmes tiers au hasard. Les règles hôtes temporaires sont limitées au réseau de test puis retirées.
- T19 : désactiver temporairement le chemin MGMT de l'hôte et vérifier les routes du tunnel. Pousser la route NAS de test pour que le refus soit journalisé dans OPNsense. Ce test reste un WAN simulé.
- T21 : objectifs de départ d'environ2Gio disponibles par hôte, absence de pagination/swap soutenue, actions courantes en quelques secondes. Si ces objectifs échouent, consigner et ajuster avant de dire que le laboratoire est fluide.
- Les logs, captures et résultats publiés ne contiennent ni secrets, profils VPN, clés NAS ou exports de configuration bruts. Les preuves privées restent sur les machines.

## Fiche courte de résultat

```text
ID / date / révision :
Source -> destination : port/protocole
Attendu :
Observé :
Preuve expurgée :
Résultat : réussi / échoué / bloqué / non exécuté
Correction ou limite :
```
