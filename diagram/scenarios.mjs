export const scenarios = [
{id:'app',name:'Windows vers InvoiceShelf',protocol:'HTTPS · TCP8443',source:'10.77.10.10',destination:'10.77.20.10:8443',steps:[
{title:'Une facture à consulter',node:'windows',text:'Le poste Windows ouvre une ressource privée de facturation. La requête exige le serveur et une authentification applicative.'},
{title:'Le client rejoint sa passerelle',link:'clients',from:'windows',to:'fw',tag:'Non tagué · CLIENTS',text:'Sur VMnet10, Windows remet le paquet à OPNsense10.77.10.1. CLIENTS est un réseau séparé non tagué.'},
{title:'La règle autorise HTTPS8443',node:'fw',decision:'AUTORISÉ · CLIENTS → HTTPS8443',text:'OPNsense route vers10.77.20.0/24 et autorise TCP8443. Il conserve l’adresse source ; aucun NAT entre ces zones.'},
{title:'VLAN20 sur le câble physique',link:'trunk20',from:'fw',to:'switch',tag:'802.1Q · VLAN20',text:'La trame taguée traverse les deux ponts VMware, les cartes Ethernet et le câble. Ce transport réel reste à vérifier.'},
{title:'SW-B retire le tag20',link:'access20',from:'switch',to:'ubuntu',tag:'Accès VLAN20 · non tagué',text:'Le port d’accès VMnet14 remet une trame non taguée à Ubuntu. TrueNAS, sur l’autre port, ne reçoit pas ce trafic.'},
{title:'HTTPS rejoint le proxy',link:'https',from:'ubuntu',to:'proxy',text:'Nginx reçoit HTTPS8443. Le certificat du laboratoire doit être approuvé par le client.'},
{title:'Un service dans Ubuntu',link:'backend',from:'proxy',to:'app',text:'Le proxy transmet à InvoiceShelf8080 sur le bridge Docker interne. Ce conteneur n’est pas une VM.'},
{title:'Le rôle protège la facture',node:'app',decision:'Permission applicative à vérifier',text:'InvoiceShelf vérifie la session et le rôle. Un lecteur peut consulter mais sa modification doit être refusée. La réponse réseau suit les états existants en sens inverse.'}]},
{id:'deny',name:'VPN vers NAS : refus',protocol:'SMB · TCP445',source:'10.78.0.x',destination:'10.77.30.10:445',steps:[
{title:'Un tunnel ne donne pas tous les droits',node:'vpn',text:'Le client de test sur l’hôte A est connecté à OpenVPN via VMnet8. Le tunnel est chiffré mais son périmètre reste restreint.'},
{title:'La tentative arrive au pare-feu',link:'vpn',from:'vpn',to:'fw',tag:'Dans le tunnel OpenVPN',text:'La route vers le NAS est présente pour que le refus soit réellement évalué par OPNsense, sans contournement MGMT.'},
{title:'Refus sur l’interface VPN',node:'fw',decision:'VPN → NAS · TCP445',denied:true,text:'Le VPN n’est autorisé que vers InvoiceShelf8443. Le pare-feu refuse SMB445. Le paquet s’arrête ici : aucun trafic autorisé ne part sur le trunk30.'},
{title:'Retrouver la preuve',node:'fw',decision:'Test réel non exécuté',denied:true,text:'La démonstration réelle doit montrer le refus horodaté avec la source VPN, la destination NAS et le port445. Un port fermé ou une animation ne suffit pas.'}]},
{id:'backup',name:'Sauvegarde Ubuntu vers TrueNAS',protocol:'Archive cohérente · SMB TCP445',source:'10.77.20.10',destination:'10.77.30.10',steps:[
{title:'Préparer une copie cohérente',node:'app',text:'Arrêter InvoiceShelf proprement et archiver données persistantes et configuration privée. La base SQLite active ne doit pas être placée sur SMB.'},
{title:'Ubuntu rejoint sa passerelle',link:'access20',from:'ubuntu',to:'switch',tag:'Accès20 · ajout du tag20 au trunk',text:'Bien qu’Ubuntu et le NAS soient sur B, ils appartiennent à deux VLANs. Aucun raccourci entre eux n’est autorisé.'},
{title:'Le paquet quitte B sur VLAN20',link:'trunk20',from:'switch',to:'fw',tag:'802.1Q · VLAN20',text:'La trame emprunte le câble vers OPNsense sur A. SW-B commute ; il ne route pas.'},
{title:'Routage20 vers30 sur A',node:'fw',decision:'AUTORISÉ · Ubuntu → NAS TCP445',text:'OPNsense autorise Ubuntu vers le NAS sur TCP445 et route vers VLAN30. Le compte de sauvegarde reste contrôlé séparément par les ACL NAS.'},
{title:'Retour sur le même câble, VLAN30',link:'trunk30',from:'fw',to:'switch',tag:'802.1Q · VLAN30',text:'Le paquet revient sur B avec un tag30. Une seule liaison physique transporte ici deux canaux logiques distincts.'},
{title:'SW-B remet une trame non taguée',link:'access30',from:'switch',to:'nas',tag:'Accès30 · retrait du tag30',text:'Le port VMnet11 livre la trame à TrueNAS. Le port Ubuntu reste séparé.'},
{title:'Le NAS vérifie le compte',node:'nas',decision:'ACL du dataset app-backups',text:'Le compte app-backup écrit seulement dans son dataset dédié. Une règle réseau autorisée ne remplace pas les permissions du stockage.'},
{title:'Reprise et restauration d’une copie',node:'app',text:'Relancer l’application active puis restaurer l’archive dans un emplacement isolé. Vérifier la facture/PDF sans écraser les données actives. Tous ces contrôles restent à exécuter.'}]},
{id:'monitor',name:'Métriques Windows et panne applicative',protocol:'Exporter TCP9182 · sonde HTTPS',source:'Prometheus sur Ubuntu',destination:'Windows / InvoiceShelf',steps:[
{title:'Prometheus lance la collecte',node:'monitor',text:'Prometheus collecte les cibles ; Grafana affiche les séries collectées. Grafana ne sonde pas directement les exporters.'},
{title:'Ubuntu vers le switch',link:'access20',from:'ubuntu',to:'switch',tag:'Accès20 non tagué → trunk tagué20',text:'Ubuntu envoie une trame non taguée sur VMnet14 ; SW-B ajoute le tag20 sur son trunk.'},
{title:'Collecte vers OPNsense',link:'trunk20',from:'switch',to:'fw',tag:'802.1Q · VLAN20',text:'Le pare-feu doit autoriser Ubuntu10.77.20.10 vers Windows TCP9182 seulement.'},
{title:'La requête atteint Windows exporter',link:'clients',from:'fw',to:'windows',tag:'CLIENTS · non tagué',text:'Le pare-feu Windows autorise aussi cette source. Une cible installée sans métriques reçues ne constitue pas une collecte réussie.'},
{title:'Windows renvoie les métriques',link:'clients',from:'windows',to:'fw',tag:'Réponse · CLIENTS non tagué',text:'Windows exporter répond à la requête. Le pare-feu laisse revenir la réponse grâce à l’état de la connexion.'},
{title:'La réponse traverse le trunk20',link:'trunk20',from:'fw',to:'switch',tag:'Réponse · 802.1Q VLAN20',text:'Les métriques repartent de A vers B dans le VLAN20.'},
{title:'Prometheus reçoit les métriques',link:'access20',from:'switch',to:'ubuntu',tag:'Réponse · accès20 non tagué',text:'SW-B retire le tag20 et remet la réponse à Ubuntu ; Prometheus conserve les métriques et Grafana les affiche.'},
{title:'Simuler l’arrêt applicatif',node:'app',decision:'Simulation : cible HTTPS indisponible',denied:true,text:'Ce scénario représente InvoiceShelf arrêté, pas un exporter arrêté. La sonde applicative doit détecter un échec après son intervalle configuré.'},
{title:'Observer la reprise',node:'monitor',decision:'Mesure réelle à effectuer',text:'Après relance, la sonde redevient saine. Mesurer panne et reprise avec les vrais collecteurs ; le délai illustré ici n’est pas une mesure.'}]},
{id:'vpnapp',name:'VPN vers InvoiceShelf : autorisé',protocol:'OpenVPN UDP1194 puis HTTPS8443',source:'10.78.0.x',destination:'10.77.20.10:8443',steps:[
{title:'Le client est sur A, côté WAN simulé',node:'vpn',text:'Le test utilise VMnet8 sur l’hôte A, sans troisième PC. Il ne prouve pas une connexion depuis Internet public.'},
{title:'Le tunnel arrive à OPNsense',link:'vpn',from:'vpn',to:'fw',text:'OpenVPN établit un tunnel chiffré. La route de l’application passe par ce tunnel, sans route de gestion concurrente.'},
{title:'Seule l’application est autorisée',node:'fw',decision:'AUTORISÉ · VPN → HTTPS8443',text:'La règle VPN autorise InvoiceShelf ; SSH, Grafana et SMB restent refusés.'},
{title:'Traversée taguée VLAN20',link:'trunk20',from:'fw',to:'switch',tag:'802.1Q · VLAN20',text:'Le tunnel se termine sur OPNsense. Le trafic routé continue sur VLAN20 ; HTTPS protège encore le contenu applicatif.'},
{title:'Port d’accès Ubuntu',link:'access20',from:'switch',to:'ubuntu',tag:'Non tagué à Ubuntu',text:'SW-B retire le tag sur son port d’accès20.'},
{title:'Authentification encore nécessaire',node:'app',decision:'Rôle applicatif indépendant',text:'Le VPN donne un chemin réseau autorisé, pas une session InvoiceShelf. Login et permissions restent nécessaires ; la réponse emprunte le chemin stateful inverse.'}]}
];
