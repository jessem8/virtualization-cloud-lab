const HTTPS={src:'10.77.10.10',dst:'10.77.20.10',proto:'TCP',port:8443,app:'HTTPS · TLS'};
const BACKEND={src:'Nginx',dst:'InvoiceShelf',proto:'TCP',port:8080,app:'HTTP interne · bridge Docker'};
const BACKUP={src:'10.77.20.10',dst:'10.77.30.10',proto:'TCP',port:445,app:'SMB · archive de sauvegarde'};
const VPN_NAS={src:'10.78.0.x',dst:'10.77.30.10',proto:'TCP',port:445,app:'SMB'};
const VPN_APP={src:'10.78.0.x',dst:'10.77.20.10',proto:'TCP',port:8443,app:'HTTPS · TLS'};
const TUNNEL={app:'Encapsulé dans OpenVPN UDP1194'};
const METRICS={src:'10.77.20.10',dst:'10.77.10.10',proto:'TCP',port:9182,app:'HTTP · métriques'};

export const LOCAL_WRITE={app:'SQLite · volume local Ubuntu'};
export const scenarios = [
{id:'app',name:'Windows vers InvoiceShelf',protocol:'HTTPS · TCP8443',source:'10.77.10.10',destination:'10.77.20.10:8443',frame:HTTPS,rule:'clients-app',steps:[
{title:'Une facture à consulter',node:'windows',text:'Windows ouvre InvoiceShelf en HTTPS ; l’accès exige aussi une session.'},
{title:'Le client rejoint sa passerelle',link:'clients',from:'windows',to:'fw',tag:'Non tagué · CLIENTS',text:'Sur VMnet10, non tagué, Windows remet le paquet à sa passerelle 10.77.10.1.'},
{title:'La règle autorise HTTPS8443',node:'fw',decision:'AUTORISÉ · CLIENTS → HTTPS8443',text:'OPNsense route vers 10.77.20.0/24 et autorise TCP 8443, sans NAT entre zones.'},
{title:'VLAN20 sur le câble physique',link:'trunk20',from:'fw',to:'switch',tag:'802.1Q · VLAN20',text:'La trame taguée 20 traverse le câble Ethernet entre PC A et PC B.'},
{title:'SW-B retire le tag20',link:'access20',from:'switch',to:'ubuntu',tag:'Accès VLAN20 · non tagué',text:'Le port d’accès remet une trame non taguée à Ubuntu ; TrueNAS ne la reçoit pas.'},
{title:'HTTPS rejoint le proxy',link:'https',from:'ubuntu',to:'proxy',text:'Nginx reçoit HTTPS 8443 avec un certificat autosigné.'},
{title:'Un service dans Ubuntu',link:'backend',from:'proxy',to:'app',frame:BACKEND,text:'Le proxy relaie vers InvoiceShelf 8080 sur le réseau Docker interne.'},
{title:'Le rôle protège la facture',node:'app',decision:'Limite · refus par rôle non capturé',text:'InvoiceShelf vérifie session et rôle ; le refus de modification du rôle lecteur n’est pas capturé (limite).'}]},
{id:'deny',name:'VPN vers NAS : refus',protocol:'SMB · TCP445',source:'10.78.0.x',destination:'10.77.30.10:445',frame:VPN_NAS,rule:'vpn-nas',steps:[
{title:'Un tunnel ne donne pas tous les droits',node:'vpn',text:'Le client de test sur l’hôte A est connecté à OpenVPN via VMnet8. Le tunnel est chiffré mais son périmètre reste restreint.'},
{title:'La tentative arrive au pare-feu',link:'vpn',from:'vpn',to:'fw',tag:'Dans le tunnel OpenVPN',frame:TUNNEL,text:'La route vers le NAS est présente pour que le refus soit réellement évalué par OPNsense, sans contournement MGMT.'},
{title:'Refus sur l’interface VPN',node:'fw',decision:'VPN → NAS · TCP445',denied:true,text:'Le VPN n’est autorisé que vers InvoiceShelf8443. Le pare-feu refuse SMB445. Le paquet s’arrête ici : aucun trafic autorisé ne part sur le trunk30.'},
{title:'Le refus est journalisé',node:'fw',decision:'Bloqué et journalisé · 29/10 16:33',denied:true,text:'Journal OPNsense reçu sur Ubuntu le 29/10 vers 16:33 : 10.78.0.2 vers 10.77.30.10:445, action block sur ovpns1.'}]},
{id:'backup',name:'Sauvegarde Ubuntu vers TrueNAS',protocol:'Archive cohérente · SMB TCP445',source:'10.77.20.10',destination:'10.77.30.10',frame:BACKUP,rule:'backup-nas',steps:[
{title:'Préparer une copie cohérente',node:'app',text:'Arrêter InvoiceShelf proprement et archiver données persistantes et configuration privée. La base SQLite active ne doit pas être placée sur SMB.'},
{title:'Ubuntu rejoint sa passerelle',link:'access20',from:'ubuntu',to:'switch',tag:'Accès20 · ajout du tag20 au trunk',text:'Bien qu’Ubuntu et le NAS soient sur B, ils appartiennent à deux VLANs. Aucun raccourci entre eux n’est autorisé.'},
{title:'Le paquet quitte B sur VLAN20',link:'trunk20',from:'switch',to:'fw',tag:'802.1Q · VLAN20',text:'La trame emprunte le câble vers OPNsense sur A. SW-B commute ; il ne route pas.'},
{title:'Routage20 vers30 sur A',node:'fw',decision:'AUTORISÉ · Ubuntu → NAS TCP445',text:'OPNsense autorise Ubuntu vers le NAS sur TCP445 et route vers VLAN30. Le compte de sauvegarde reste contrôlé séparément par les ACL NAS.'},
{title:'Retour sur le même câble, VLAN30',link:'trunk30',from:'fw',to:'switch',tag:'802.1Q · VLAN30',text:'Le paquet revient sur B avec un tag30. Une seule liaison physique transporte ici deux canaux logiques distincts.'},
{title:'SW-B remet une trame non taguée',link:'access30',from:'switch',to:'nas',tag:'Accès30 · retrait du tag30',text:'Le port VMnet11 livre la trame à TrueNAS. Le port Ubuntu reste séparé.'},
{title:'Le NAS vérifie le compte',node:'nas',decision:'ACL du dataset app-backups',text:'Le compte app-backup écrit seulement dans son dataset dédié. Une règle réseau autorisée ne remplace pas les permissions du stockage.'},
{title:'Reprise et restauration d’une copie',node:'app',text:'Relancer l’application active puis restaurer l’archive dans un emplacement isolé. Restauration réalisée le 29 octobre dans un emplacement isolé, sans écraser les données actives.'}]},
{id:'monitor',name:'Métriques Windows et panne applicative',protocol:'Exporter TCP9182 · sonde HTTPS',source:'Prometheus sur Ubuntu',destination:'Windows / InvoiceShelf',frame:METRICS,rule:'prom-windows',steps:[
{title:'Prometheus lance la collecte',node:'monitor',text:'Prometheus collecte les cibles ; Grafana affiche les séries collectées. Grafana ne sonde pas directement les exporters.'},
{title:'Ubuntu vers le switch',link:'access20',from:'ubuntu',to:'switch',tag:'Accès20 non tagué → trunk tagué20',text:'Ubuntu envoie une trame non taguée sur VMnet10 ; SW-B ajoute le tag20 sur son trunk.'},
{title:'Collecte vers OPNsense',link:'trunk20',from:'switch',to:'fw',tag:'802.1Q · VLAN20',text:'Le pare-feu doit autoriser Ubuntu10.77.20.10 vers Windows TCP9182 seulement.'},
{title:'La requête atteint Windows exporter',link:'clients',from:'fw',to:'windows',tag:'CLIENTS · non tagué',text:'Le pare-feu Windows autorise aussi cette source. Une cible installée sans métriques reçues ne constitue pas une collecte réussie.'},
{title:'Windows renvoie les métriques',link:'clients',from:'windows',to:'fw',reply:true,tag:'Réponse · CLIENTS non tagué',text:'Windows exporter répond à la requête. Le pare-feu laisse revenir la réponse grâce à l’état de la connexion.'},
{title:'La réponse traverse le trunk20',link:'trunk20',from:'fw',to:'switch',reply:true,tag:'Réponse · 802.1Q VLAN20',text:'Les métriques repartent de A vers B dans le VLAN20.'},
{title:'Prometheus reçoit les métriques',link:'access20',from:'switch',to:'ubuntu',reply:true,tag:'Réponse · accès20 non tagué',text:'SW-B retire le tag20 et remet la réponse à Ubuntu ; Prometheus conserve les métriques et Grafana les affiche.'},
{title:'Simuler l’arrêt applicatif',node:'app',decision:'Sonde HTTPS : DOWN',denied:true,text:'InvoiceShelf (webapp) est arrêté ; les exporters restent UP, la sonde blackbox passe DOWN.'},
{title:'Observer la reprise',node:'monitor',decision:'Panne puis reprise · observé le 29/10',text:'Le 29/10, Grafana affiche InvoiceShelf DOWN après arrêt de webapp (vers 15:23) ; après relance, probe_success=1 est rapporté. Le délai animé n’est pas une mesure.'}]},
{id:'vpnapp',name:'VPN vers InvoiceShelf : autorisé',protocol:'OpenVPN UDP1194 puis HTTPS8443',source:'10.78.0.x',destination:'10.77.20.10:8443',frame:VPN_APP,rule:'vpn-app',steps:[
{title:'Le client est sur A, côté WAN simulé',node:'vpn',text:'Client OpenVPN sur l’hôte A via VMnet8 : WAN simulé, pas Internet public.'},
{title:'Le tunnel arrive à OPNsense',link:'vpn',from:'vpn',to:'fw',frame:TUNNEL,text:'Tunnel chiffré UDP 1194 ; MGMT désactivé pendant l’essai.'},
{title:'Seule l’application est autorisée',node:'fw',decision:'AUTORISÉ · VPN → HTTPS8443',text:'Seul HTTPS 8443 vers InvoiceShelf est autorisé depuis le VPN.'},
{title:'Traversée taguée VLAN20',link:'trunk20',from:'fw',to:'switch',tag:'802.1Q · VLAN20',text:'Le tunnel se termine sur OPNsense ; le trafic continue tagué 20.'},
{title:'Port d’accès Ubuntu',link:'access20',from:'switch',to:'ubuntu',tag:'Non tagué à Ubuntu',text:'SW-B retire le tag sur son port d’accès20.'},
{title:'Authentification encore nécessaire',node:'app',decision:'Rôle applicatif indépendant',text:'Le VPN ouvre un chemin réseau, pas une session : la connexion InvoiceShelf reste nécessaire.'}]}
];
