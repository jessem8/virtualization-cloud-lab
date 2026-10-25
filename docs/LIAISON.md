# Liaison des deux PC et règles

Plan proposé le 25 octobre 2026. Les deux PC sont ensemble, avec Ethernet disponible. Les modifications et tests de laboratoire commencent seulement après l'accord prévu dans COORDINATION.md.

## 1. Chemin réseau retenu

```text
PC A
  WIN-LAB -- CLIENTS -- OPNsense -- WAN/NAT -- Wi-Fi/Internet
                          |
                     trunk privé
                   VLAN 20 / VLAN 30
                          |
                         SW-A
                 /                  \
       accès VLAN 20          accès VLAN 30
          UBU-LAB           Ethernet non tagué
                                      |
PC B                              NAS-LAB
```

MGMT est un réseau local du PC A entre son adaptateur administrateur et OPNsense. Il n'est pas un troisième VLAN. Le câble Ethernet étend uniquement le port d'accès stockage VLAN30 ; il ne transporte pas les tags 20/30.

SW-A sépare les ports ; OPNsense filtre entre zones ; TrueNAS applique les permissions de fichiers. Les administrateurs des deux hyperviseurs restent de confiance.

## 2. Contrat d'adressage

| Zone | Réseau | Passerelle | Machine |
|---|---|---|---|
| MGMT, LAN OPNsense | 10.77.99.0/24 | 10.77.99.1 | Hôte A 10.77.99.254, sans route par défaut |
| CLIENTS, non tagué | 10.77.10.0/24 | 10.77.10.1 | Windows 10.77.10.10 |
| SERVEURS, VLAN20 | 10.77.20.0/24 | 10.77.20.1 | Ubuntu 10.77.20.10 |
| STOCKAGE, VLAN30 | 10.77.30.0/24 | 10.77.30.1 | TrueNAS 10.77.30.10 |
| VPN | 10.78.0.0/24 | Tunnel OpenVPN | Adresse attribuée au client |
| WAN simulé | VMnet8 existant | NAT VMware existant | Adresse WAN OPNsense en DHCP |

Chaque invité de service a une seule carte finale. Seul OPNsense possède un accès WAN. Aucune NAT entre zones : les journaux doivent garder les adresses sources. Le trafic IPv6 du laboratoire est désactivé ou filtré explicitement ; aucune voie parallèle non évaluée.

## 3. Accès autorisés

Les règles sont sur l'interface d'entrée. Réponses stateful autorisées, autres nouvelles connexions refusées et journalisées selon le test. Éviter les règles générales any ; vérifier les états existants lors d'un changement.

| Source | Destination | Port/service |
|---|---|---|
| MGMT hôte A .99.254 | OPNsense, TrueNAS | HTTPS 443 |
| MGMT hôte A .99.254 | Ubuntu | SSH 22, application 8443, Grafana 3001 |
| Windows .10.10 | Ubuntu | Application HTTPS 8443, Grafana 3001 en lecture |
| Windows .10.10 | TrueNAS | SMB TCP445, comptes/ACL restreints |
| Ubuntu .20.10 | Windows | windows_exporter TCP9182 uniquement |
| OPNsense .20.1 | Ubuntu | Rsyslog TCP514 uniquement |
| Invités | Passerelle de leur zone | DNS UDP/TCP53, NTP UDP123 |
| Invités | Destinations Internet hors réseaux privés | HTTP/HTTPS pour mises à jour requises |
| Client hôte A sur VMnet8 | WAN OPNsense | OpenVPN UDP1194 uniquement |
| VPN | Ubuntu | Application HTTPS TCP8443 uniquement |

ICMP de diagnostic est limité aux sources et destinations utiles, puis conservé seulement si justifié. Les règles Internet excluent les réseaux privés de destination pour ne pas ouvrir les autres zones. Les mises à jour du pare-feu lui-même sont des flux locaux à examiner séparément.

Administration depuis Windows, Ubuntu -> NAS445, VPN -> SSH22/SMB445/Grafana3001 et accès WAN direct aux services sont refusés. Si une sauvegarde applicative vers NAS est ajoutée plus tard, prévoir une permission minimale explicite et sa preuve ; ne pas laisser une règle any.

Grafana et l'application utilisent des ports distincts. Autoriser 8443 n'autorise donc pas automatiquement l'interface Grafana. L'application n'a pas de comptes individuels : le contrôle d'accès est réseau/VPN.

## 4. Administration et VPN

Pour administrer depuis l'hôte A, ajouter uniquement les routes spécifiques du projet vers .10.0/24, .20.0/24 et .30.0/24 via 10.77.99.1 sur l'adaptateur MGMT. Relever les routes existantes avant ajout. Pas de passerelle par défaut sur MGMT.

Avant le test VPN, supprimer uniquement ces routes créées pour le projet et désactiver temporairement MGMT pour exclure le chemin direct ; conserver les consoles VMware. Vérifier route print, adresse du tunnel et compteurs OPNsense. Le profil contient des secrets et reste hors dépôt.

Le serveur pousse une route vers l'application et une route vers le NAS afin que le refus NAS arrive réellement au pare-feu. Contrôler le reply-to sur la règle WAN du client VMnet8 local si le tunnel ne répond pas. Ne pas pousser tout Internet dans le tunnel.

## 5. Premiers contrôles communs

Après confirmation des deux côtés :

1. Vérifier MAC/VMnet/IP, table bridge vlan show et absence de carte NAT temporaire.
2. Prouver Ubuntu -> passerelle en VLAN20, NAS -> passerelle en VLAN30, puis les réponses unicast dans l'autre sens.
3. Capturer sur le trunk privé : tags 20/30. Capturer sur Ethernet : trafic stockage non tagué. Une capture sans tags à cause d'un offload doit être recoupée, pas interprétée automatiquement.
4. Vérifier qu'un tag VLAN30 émis depuis le port d'accès Ubuntu est refusé par la commutation. Préparer ce test de manière temporaire et ne pas modifier l'IP principale.
5. Prouver application/SMB autorisés, puis un flux interdit avec log correspondant et service toujours actif.
6. Exécuter le cycle VPN et le refus sortant de TEST_MATRIX.md.
7. Refaire les principaux contrôles après redémarrage et relever la fluidité sous charge normale.

Si le transport bloque, relever captures et erreur avant de changer un réglage. Une difficulté dépassant 30 minutes est signalée dans la PR. Ne pas ajouter de passerelles, tunnels ou hyperviseurs au hasard. Une modification matérielle du plan se revoit avec l'autre participant.

## 6. Retour aux réglages précédents

Conserver avant changement : numéros VMnet, ponts/MAC, liaisons des cartes, routes et configurations du projet. Revenir uniquement sur les paramètres modifiés pour ce laboratoire. Pas de Restore Defaults VMware, désactivation globale du pare-feu hôte, suppression d'anciennes VM ou restauration complète d'une vieille configuration.

Ordre de démarrage : OPNsense et SW-A, Ubuntu/TrueNAS, puis Windows. Arrêt propre : Windows, application/Ubuntu et TrueNAS, puis SW-A et OPNsense. Aucun arrêt physique pendant une écriture NAS.
