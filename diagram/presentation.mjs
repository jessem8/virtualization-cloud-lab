export const chapters = [
  {
    "id": "context",
    "title": "Contexte et exigences",
    "icon": "app",
    "proofs": [
      "invoice"
    ]
  },
  {
    "id": "virtualization",
    "title": "Virtualisation et architecture",
    "icon": "host",
    "proofs": [
      "vlan20"
    ]
  },
  {
    "id": "network",
    "title": "Réseau et VLAN",
    "icon": "switch",
    "proofs": [
      "vlan20"
    ]
  },
  {
    "id": "application",
    "title": "Application et Docker",
    "icon": "app",
    "proofs": [
      "invoice",
      "reboot"
    ]
  },
  {
    "id": "security",
    "title": "Sécurité et VPN",
    "icon": "fw",
    "proofs": [
      "vpn",
      "acl",
      "smb"
    ]
  },
  {
    "id": "storage",
    "title": "Stockage et récupération",
    "icon": "nas",
    "proofs": [
      "acl",
      "smb",
      "restore"
    ]
  },
  {
    "id": "monitoring",
    "title": "Supervision et journaux",
    "icon": "monitor",
    "proofs": [
      "monitor"
    ]
  },
  {
    "id": "results",
    "title": "Résultats et limites",
    "icon": "layers",
    "proofs": [
      "reboot",
      "monitor"
    ]
  },
  {
    "id": "conclusion",
    "title": "Bilan",
    "icon": "global",
    "proofs": [
      "invoice",
      "restore",
      "monitor"
    ]
  }
];

export const proofs = [
  {
    "id": "vlan20",
    "title": "VLAN20 sur le trunk",
    "image": "vlan20.png",
    "caption": "Capture OPNsense : requêtes et réponses ARP portant le tag 20.",
    "scope": "29 octobre · preuve ponctuelle du tag 20 ; T03 complet et isolation T04 non établis."
  },
  {
    "id": "invoice",
    "title": "Facture et PDF",
    "image": "invoice.png",
    "caption": "Depuis Windows : facture fictive INV-000001 et aperçu de son PDF dans InvoiceShelf.",
    "scope": "29 octobre · accès authentifié enregistré ; ne prouve pas chaque restriction du rôle lecteur."
  },
  {
    "id": "vpn",
    "title": "Application par le VPN",
    "image": "vpn.png",
    "caption": "Page InvoiceShelf atteinte pendant le test VPN sans chemin MGMT.",
    "scope": "29 octobre · à recouper avec routes et journaux des notes A/B ; une page seule ne prouve pas le chemin."
  },
  {
    "id": "acl",
    "title": "Écriture refusée au lecteur",
    "image": "acl.png",
    "caption": "Lecture du fichier réussie, puis création refusée avec le compte lecteur.",
    "scope": "29 octobre · permission SMB observée sur ce fichier ; compte et connexions distincts dans les notes."
  },
  {
    "id": "restore",
    "title": "PDF dans la copie restaurée",
    "image": "restore.png",
    "caption": "Instance isolée 127.0.0.1:8444 : facture et PDF issus de l’archive récupérée du NAS.",
    "scope": "29 octobre · restauration applicative distincte de la persistance Docker ; copie d’essai retirée ensuite."
  },
  {
    "id": "monitor",
    "title": "Grafana après reboot",
    "image": "monitor.png",
    "caption": "Quatre collectes UP, sonde InvoiceShelf UP et graphes CPU Windows/Ubuntu.",
    "scope": "29 octobre · capture de l’état final ; essais de panne/reprise décrits séparément dans les notes B."
  },
  {
    "id": "reboot",
    "title": "InvoiceShelf après reboot",
    "image": "reboot.png",
    "caption": "Tableau InvoiceShelf accessible depuis Windows après le redémarrage Ubuntu.",
    "scope": "29 octobre · données visibles après reboot ; ne prouve pas la cause initiale du défaut MTU/MSS."
  },
  {
    "id": "smb",
    "title": "SMB chiffré et NTP",
    "image": "smb.png",
    "caption": "Session SMB Encrypted=True et synchronisation Windows par sa passerelle.",
    "scope": "29 octobre · chiffrement en transit, distinct du chiffrement du dataset NAS au repos."
  }
];

export const presentationFlow = {
  "id": "presentation",
  "name": "Présentation · les neuf modules",
  "source": "PC A",
  "destination": "PC B",
  "protocol": "Simulation 3D · preuves du 29 octobre",
  "steps": [
    {
      "module": "context",
      "shot": "overview",
      "node": "fw",
      "title": "Une entreprise à protéger",
      "text": "Créer des factures, maîtriser les accès, récupérer les données et observer les services.",
      "cue": "Présenter le besoin de l’entreprise. Le laboratoire est local : deux PC physiques, sans cloud public.",
      "chapter": "Contexte"
    },
    {
      "module": "virtualization",
      "shot": "overview",
      "node": "fw",
      "title": "Deux PC, cinq machines virtuelles",
      "text": "PC A : OPNsense et Windows. PC B : Alpine, Ubuntu et TrueNAS.",
      "cue": "VMware Workstation est un hyperviseur de type 2. Chaque VM possède son système invité.",
      "chapter": "Virtualisation"
    },
    {
      "module": "virtualization",
      "node": "fw",
      "inspect": "host:a",
      "title": "PC A : accéder et contrôler",
      "text": "Windows utilise les services ; OPNsense route, filtre et termine le VPN.",
      "cue": "Le poste Windows et le pare-feu sont deux VM distinctes sur le même hôte.",
      "chapter": "Virtualisation"
    },
    {
      "module": "virtualization",
      "node": "ubuntu",
      "inspect": "host:b",
      "title": "PC B : servir et conserver",
      "text": "Alpine commute, Ubuntu héberge les services et TrueNAS conserve les fichiers.",
      "cue": "SW-B n’effectue aucun routage. Les conteneurs tournent à l’intérieur d’Ubuntu.",
      "chapter": "Virtualisation"
    },
    {
      "module": "network",
      "link": "clients",
      "from": "windows",
      "to": "fw",
      "frame": {
        "src": "10.77.10.10",
        "dst": "10.77.20.10",
        "proto": "TCP",
        "port": 8443,
        "app": "HTTPS · TLS"
      },
      "tag": "CLIENTS · sans tag",
      "title": "Windows rejoint sa passerelle",
      "text": "CLIENTS est un réseau VMware non tagué ; OPNsense reçoit la requête.",
      "cue": "Ne pas appeler ce réseau VLAN10. VMnet10 est un numéro local au PC.",
      "quiz": {
        "question": "Vers quel équipement Windows envoie-t-il sa requête en premier ?",
        "choices": [
          "Directement vers Ubuntu",
          "Vers OPNsense, sa passerelle",
          "Vers Alpine SW-B"
        ],
        "answer": 1,
        "explain": "CLIENTS est un réseau séparé : tout ce qui en sort passe par la passerelle OPNsense 10.77.10.1."
      },
      "chapter": "Réseau"
    },
    {
      "module": "network",
      "link": "trunk20",
      "from": "fw",
      "to": "switch",
      "frame": {
        "src": "10.77.10.10",
        "dst": "10.77.20.10",
        "proto": "TCP",
        "port": 8443,
        "app": "HTTPS · TLS"
      },
      "tag": "VLAN20",
      "title": "Un câble, deux VLAN",
      "text": "Le tag 20 identifie le réseau Ubuntu sur le trunk Ethernet entre les PC.",
      "cue": "Montrer le tag sur la trame. Le même câble transporte aussi le VLAN30.",
      "quiz": {
        "question": "Qui ajoute le tag VLAN20 avant le câble entre les deux PC ?",
        "choices": [
          "Windows",
          "OPNsense",
          "TrueNAS"
        ],
        "answer": 1,
        "explain": "OPNsense route vers SERVEURS et émet la trame sur son interface VLAN20 : le tag 802.1Q est ajouté sur le trunk."
      },
      "chapter": "Réseau"
    },
    {
      "module": "network",
      "link": "access20",
      "from": "switch",
      "to": "ubuntu",
      "frame": {
        "src": "10.77.10.10",
        "dst": "10.77.20.10",
        "proto": "TCP",
        "port": 8443,
        "app": "HTTPS · TLS"
      },
      "tag": "Sans tag",
      "title": "Alpine livre la trame à Ubuntu",
      "text": "Le port d’accès retire le tag ; Ubuntu reçoit le trafic sur VMnet10 du PC B.",
      "cue": "SW-B commute à L2. OPNsense gère le passage entre les sous-réseaux.",
      "quiz": {
        "question": "Qui retire le tag20 avant qu’Ubuntu ne reçoive la trame ?",
        "choices": [
          "OPNsense",
          "Alpine SW-B",
          "Nginx"
        ],
        "answer": 1,
        "explain": "SW-B commute en couche 2 : sur le port d’accès VLAN20, il retire le tag et livre une trame ordinaire à Ubuntu."
      },
      "chapter": "Réseau"
    },
    {
      "module": "application",
      "node": "ubuntu",
      "inspect": "ubuntu",
      "title": "Une VM, plusieurs services",
      "text": "Docker contient Nginx, InvoiceShelf et la supervision ; SQLite reste local à Ubuntu.",
      "cue": "Cliquer un service pour ses quatre à six faits. Les conteneurs partagent le noyau de la VM.",
      "chapter": "Application"
    },
    {
      "module": "application",
      "link": "backend",
      "from": "proxy",
      "to": "app",
      "frame": {
        "src": "Nginx",
        "dst": "InvoiceShelf",
        "proto": "TCP",
        "port": 8080,
        "app": "Bridge Docker privé"
      },
      "title": "HTTPS devant, backend privé",
      "text": "Nginx reçoit HTTPS 8443 et transmet à InvoiceShelf sur 8080 interne.",
      "cue": "Le backend n’est pas publié directement. Montrer ensuite la vraie facture dans Preuves.",
      "chapter": "Application"
    },
    {
      "module": "application",
      "link": "sqlite",
      "from": "app",
      "to": "data",
      "frame": {
        "app": "Écriture locale · SQLite"
      },
      "title": "La facture reste après recréation",
      "text": "Les dossiers persistants gardent la base et les fichiers, en dehors du conteneur.",
      "cue": "La persistance locale est distincte d’une sauvegarde et d’une restauration.",
      "quiz": {
        "question": "Où vit la base SQLite active d’InvoiceShelf ?",
        "choices": [
          "Sur le partage TrueNAS",
          "Dans un volume local d’Ubuntu",
          "Sur le poste Windows"
        ],
        "answer": 1,
        "explain": "La base active reste dans un volume persistant d’Ubuntu. Le NAS reçoit seulement des archives de sauvegarde."
      },
      "chapter": "Application"
    },
    {
      "module": "security",
      "node": "windows",
      "inspect": "windows",
      "title": "Protéger aussi le poste",
      "text": "Defender et le pare-feu protègent Windows ; Sysmon et l’audit tracent son activité.",
      "cue": "Les événements 1/3 et 4624/4625 sont documentés. Les anciennes captures A sont incomplètes.",
      "chapter": "Sécurité"
    },
    {
      "module": "security",
      "node": "ubuntu",
      "inspect": "ubuntu",
      "title": "Limiter l’administration et Docker",
      "text": "Clé SSH, filtrage INPUT/DOCKER-USER, auditd et ClamAV complètent OPNsense.",
      "cue": "Une règle présente ne prouve pas tous les refus. ClamAV n’a analysé que quatre fichiers.",
      "chapter": "Sécurité"
    },
    {
      "module": "security",
      "link": "vpn",
      "from": "vpn",
      "to": "fw",
      "frame": {
        "app": "OpenVPN · UDP1194"
      },
      "tag": "Tunnel VPN",
      "title": "Un tunnel chiffré, des droits limités",
      "text": "Le client sur l’hôte A rejoint OPNsense par le WAN simulé VMware.",
      "cue": "Le chemin MGMT a été désactivé pendant l’essai. Ce n’est pas un accès Internet public.",
      "chapter": "Sécurité"
    },
    {
      "module": "security",
      "node": "fw",
      "decision": "VPN → HTTPS 8443 · autorisé",
      "rule": "vpn-app",
      "frame": {
        "src": "10.78.0.2",
        "dst": "10.77.20.10",
        "proto": "TCP",
        "port": 8443,
        "app": "HTTPS · TLS"
      },
      "title": "Le VPN permet la facturation",
      "text": "La règle autorise uniquement le point d’entrée HTTPS de l’application, observé le 29.",
      "cue": "Ouvrir la capture d’accès VPN. Les rôles applicatifs restent un contrôle supplémentaire.",
      "chapter": "Sécurité"
    },
    {
      "module": "security",
      "node": "fw",
      "decision": "VPN → SMB 445 · refusé",
      "denied": true,
      "rule": "vpn-nas",
      "frame": {
        "src": "10.78.0.2",
        "dst": "10.77.30.10",
        "proto": "TCP",
        "port": 445,
        "app": "SMB"
      },
      "title": "L’administration et le NAS restent fermés",
      "text": "SSH, SMB et Grafana sont refusés depuis le VPN ; les refus sont journalisés.",
      "cue": "Le paquet s’arrête au pare-feu. Les essais réels sont datés, cette porte rouge est une simulation.",
      "quiz": {
        "question": "Un client VPN tente SMB445 vers le NAS. Que se passe-t-il ?",
        "choices": [
          "Autorisé : le tunnel est chiffré",
          "Refusé au pare-feu OPNsense",
          "Refusé seulement par TrueNAS"
        ],
        "answer": 1,
        "explain": "Le VPN n’ouvre que HTTPS8443 vers l’application. OPNsense arrête SMB445 avant le trunk."
      },
      "chapter": "Sécurité"
    },
    {
      "module": "storage",
      "node": "nas",
      "inspect": "nas",
      "title": "Stocker avec des permissions",
      "text": "Alice écrit ; Bob se connecte mais la lecture lui est refusée par les ACL.",
      "cue": "Distinguer chiffrement du dataset au repos et SMB en transit. Le miroir reste sur un seul PC.",
      "chapter": "Stockage"
    },
    {
      "module": "storage",
      "link": "trunk20",
      "from": "switch",
      "to": "fw",
      "tag": "VLAN20 · B → A",
      "frame": {
        "src": "10.77.20.10",
        "dst": "10.77.30.10",
        "proto": "TCP",
        "port": 445,
        "app": "SMB · archive cohérente"
      },
      "title": "La sauvegarde repart vers PC A",
      "text": "Ubuntu et TrueNAS sont sur deux VLAN : leur échange doit passer par OPNsense.",
      "cue": "Arrêt de l’application avant archive cohérente. La base active reste toujours sur Ubuntu.",
      "quiz": {
        "question": "Ubuntu et TrueNAS sont tous deux sur PC B. Par où passe la sauvegarde ?",
        "choices": [
          "Elle reste sur PC B via SW-B",
          "Elle passe par OPNsense sur PC A",
          "Elle passe par Internet"
        ],
        "answer": 1,
        "explain": "Deux VLAN différents : SW-B ne route pas. La trame part en tag20 vers OPNsense sur A, qui la renvoie en tag30."
      },
      "chapter": "Stockage"
    },
    {
      "module": "storage",
      "link": "trunk30",
      "from": "fw",
      "to": "switch",
      "tag": "VLAN30 · A → B",
      "frame": {
        "src": "10.77.20.10",
        "dst": "10.77.30.10",
        "proto": "TCP",
        "port": 445,
        "app": "SMB · archive cohérente"
      },
      "title": "Le même câble revient vers le stockage",
      "text": "OPNsense route vers VLAN30 ; SW-B livre au NAS, avec le compte app-backup.",
      "cue": "Le compte de sauvegarde est réservé à un dataset distinct. Les ACL s’ajoutent à la règle réseau.",
      "chapter": "Stockage"
    },
    {
      "module": "storage",
      "node": "nas",
      "inspect": "nas",
      "title": "Une copie a réellement été restaurée",
      "text": "L’archive récupérée du NAS a rendu la facture et son PDF dans une instance isolée.",
      "cue": "Ouvrir le PDF restauré dans Preuves. La copie d’essai a ensuite été retirée ; ne pas la chercher en live.",
      "chapter": "Stockage"
    },
    {
      "module": "monitoring",
      "node": "monitor",
      "title": "Mesurer n’est pas seulement dessiner",
      "text": "Prometheus collecte ; Grafana affiche les métriques réelles et la sonde HTTPS.",
      "cue": "Windows exporter et node-exporter mesurent les invités ; blackbox sonde l’application. Ouvrir Grafana dans Preuves.",
      "chapter": "Supervision"
    },
    {
      "module": "monitoring",
      "node": "app",
      "decision": "Sonde HTTPS · panne simulée",
      "denied": true,
      "title": "La VM peut vivre, l’application tomber",
      "text": "L’arrêt de webapp fait échouer la sonde ; la perte d’un collecteur est un autre essai.",
      "cue": "La panne et la reprise réelles sont documentées séparément. Cette animation ne touche aucun conteneur.",
      "chapter": "Supervision"
    },
    {
      "module": "monitoring",
      "node": "monitor",
      "decision": "Reprise · retour de la sonde",
      "title": "Observer la reprise et les événements",
      "text": "La sonde est revenue à 1 ; rsyslog et auditd conservent les événements ; Sysmon : 27/28 événements, preuve incomplète.",
      "cue": "Le job blackbox UP ne suffit pas : regarder probe_success. La réception et la rotation syslog sont documentées.",
      "chapter": "Supervision"
    },
    {
      "module": "results",
      "shot": "overview",
      "node": "fw",
      "title": "Des résultats, et des limites explicites",
      "text": "Accès après reboot observés ; MTU 1400 / MSS 1360 retenues, cause racine inconnue.",
      "cue": "Certificats non approuvés, isolation/Docker Bench et certaines actions de rôle restent incomplets. Aucun nouveau test n’est revendiqué.",
      "chapter": "Résultats"
    },
    {
      "module": "conclusion",
      "shot": "overview",
      "node": "fw",
      "title": "Créer. Protéger. Récupérer. Observer.",
      "text": "Une infrastructure commune relie application, segmentation, stockage et supervision.",
      "cue": "Revenir aux résultats et aux contributions réelles. Le tableau des responsabilités reste à compléter ; ne pas inventer d’attribution.",
      "chapter": "Bilan"
    }
  ]
};
