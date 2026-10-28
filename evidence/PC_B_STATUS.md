# PC B — état observé

Mis à jour le 28 octobre 2026 avec Sanad. Les configurations décrites ne prouvent pas les communications entre VM ou entre PC.

- **SW-B** : Alpine est installé sur disque, avec 512 Mio de RAM. Trois interfaces sont configurées : VMnet12/eth1 pour le trunk VLAN 20 et 30 ; VMnet10/eth2 pour l'accès Ubuntu VLAN 20 ; VMnet11/eth0 pour l'accès TrueNAS VLAN 30. Après redémarrage, `bridge vlan show` a affiché les VLAN attendus et `ip -br addr` les interfaces actives sans adresse IP, hors loopback. NAT temporaire retiré. SW-B est actuellement arrêté pour libérer de la RAM.
- **Différence documentaire** : l'accès Ubuntu utilise VMnet10 sur B, alors que les guides mentionnent VMnet14. Les numéros VMnet sont locaux à l'hôte ; UBU-LAB devra utiliser le même VMnet que le port Ubuntu de SW-B. Aucune modification du réseau n'est faite sur cette base.
- **Ubuntu** : UBU-LAB, 4 Gio de RAM et disque virtuel de 40 Gio, démarre sur l'ISO Ubuntu Desktop 26.04.1 depuis `project/VMs`. Une carte NAT temporaire est présente. L'installateur interactif est ouvert ; l'installation sur disque et le premier démarrage ne sont pas encore confirmés. Le fuseau Africa/Tunis est sélectionné.
- **TrueNAS** : NAS-LAB préparée avec 6 Gio de RAM ; l'installation et le démarrage restent à faire. 6 Gio reste inférieur au minimum documenté de 8 Gio ; aucune charge simultanée n'a été vérifiée.
- **Ressources** : avant le démarrage d'Ubuntu, environ 5,4 Gio de RAM disponible et 109 Gio libres sur C: ont été observés ; ce sont des mesures ponctuelles.
- **À faire** : terminer Ubuntu puis TrueNAS ; retirer ou reconfigurer le NAT temporaire Ubuntu ; vérifier les connexions locales ; coordonner le test du trunk 20/30 avec PC A. Aucun transport VLAN physique, routage inter-VLAN, VPN, service applicatif, restauration NAS ou test de charge simultanée n'est confirmé.
- Les ISO sont dans `project/VMs` ; aucune ISO, disque de VM, clé ou mot de passe n'est inclus dans ce rapport.
