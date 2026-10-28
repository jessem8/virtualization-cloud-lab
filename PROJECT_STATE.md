# Project checkpoint

Updated 28 October 2026, Africa/Tunis.

## PC B — actualisation du 28 octobre

Sanad a installé et configuré SW-B ; les VLAN locaux et l'absence d'adresses sur ses ports ont été observés après redémarrage. Ubuntu Desktop 26.04.1 est installé, a redémarré après mise à jour et a répondu à un ping via son NAT temporaire ; il est maintenant éteint. TrueNAS 25.10.7 a été installé sur le disque système de 20 Gio identifié ; son démarrage depuis ce disque et la création du pool restent à vérifier (commit B 542556b). Sanad maintient Ubuntu à 4 Gio et TrueNAS à 6 Gio pour l'essai ; la charge simultanée n'est pas validée. Le port Ubuntu de SW-B utilise VMnet10 sur B, au lieu de VMnet14 dans les guides. Voir [l'état observé de B](evidence/PC_B_STATUS.md). Les tests de trafic local et de trunk entre les PC restent à faire. Les anciennes mentions ci-dessous décrivant B au 26 octobre sont historiques.

## 28 October learning and demonstration refinement

The learning/presenter task copied an older A stopping point. This is superseded by the installation and management-access screenshots in the Machine A chat and the 28 October applied browser configuration below. B remains at its recorded prepared-guest state; no provisioning occurred in the learning/presenter task.

Start learning with docs/UNDERSTAND_AND_PRESENT.md (simple explanation, deploy meanings, demo script, stress/failure cues and team teach-back). Use docs/MISSION_AND_FAST_LAB.md for the shortest dependency-aware physical lab sequence and copyable A/B/optional Ubuntu-agent missions. Physical preparation is prioritized separately from final submission artifacts.

The existing 3D presenter now has a local 18-step guided story, speaker cues and a technical-detail toggle; see evidence/PRESENTER_SIMPLIFICATION.md for the actual validation scope. These edits were pushed in 706cc8c. The new mission report preserves all course requirements and moves joint T03 immediately after the minimum network/endpoints are ready. T03 needs Ubuntu and TrueNAS endpoints as well as FW-LAB/SW-B. B memory allocation still needs Sanad's reconciliation.

Task-helper registration for understand-demo-20261028 returned invalid_contract. No registry receipt or native binding is claimed; ordinary source/build/browser evidence is recorded in project files.

## Start here

The desktop presenter delivery f546293 was included in [PR #1](https://github.com/jessem8/virtualization-cloud-lab/pull/1), merged on 27 October as b466d875a56440b958ad6e1b8d755d1e16f64359. The user explicitly prefers direct work on main as of 28 October; no routine branch/PR workflow is required. The repository guides are aligned. **Machine A configuration is in progress in the current chat**, with English guidance requested by the user. Do not repeat the diagram design phase.

The user explicitly authorized Machine A configuration. No peer or PR start approval is pending. The agreed sequence is:
1. Finish/review/push this presenter and save this checkpoint.
2. In a new chat, guide the beginner through configuring Machine A (this PC).
3. Meet Sanad and finish Machine B.
4. Connect the two PCs, check the trunk, then complete the application/security/recovery demonstration together.

Keep instructions short and concrete. Mention an uncertainty only when it affects the next action. Do not mistake the presenter's simulations for working VM/network results.

## Fixed scope and application

Two physical PCs, five VM. French explanations with standard technical names. Presentation plus live demo; no separate report according to the professor clarification provided by the user. No public cloud, nested ESXi, AD, Kubernetes or VM escape exercise. Preserve unrelated guests and data, including Kali/ESXi.

The final app is **InvoiceShelf2.4.7**, on Ubuntu B. It demonstrates a fictitious company, invoices/PDF, expenses, login/roles, persistence and recovery. Older Homebox/Vikunja choices are superseded.

Read the current operational guides: BUILD_PLAN.md, docs/MACHINE_A.md, docs/MACHINE_B.md, docs/LIAISON.md, docs/APP.md, docs/TEST_MATRIX.md and docs/COORDINATION.md. They are aligned to InvoiceShelf and the direct A authorization.

## Machines and interfaces

| PC | Owner | Guests and RAM target |
|---|---|---|
| A | jessem8 | OPNsense3 Gio + Windows4 Gio |
| B | sanadzhioua | Alpine SW-B0.5 Gio + Ubuntu2.5 Gio + TrueNAS8 Gio |

B's26 October snapshot reports Alpine live ISO login only, not installed; Ubuntu Desktop4 Gio and TrueNAS6 Gio prepared with empty disks and no adapters. Reconcile those prepared allocations with Sanad before changing B. See evidence/PC_B_STATUS.md.

A's27 October pre-reboot read-only snapshot: i7-13700HX,15.71 Gio visible,2.59 Gio available and36.79 Gio free on C:. Refresh inventory in the new chat; the PC has since restarted. Keep active VM disks outside OneDrive. Previously observed installers are inventory references, not a requirement to replace a suitable existing guest.

| Network | Mapping and address |
|---|---|
| WAN | OPNsense DHCP on existing VMnet8 NAT; Wi-Fi is host Internet |
| MGMT | VMnet13 host-only, non-tagged10.77.99.0/24; OPNsense .1, host A .254 |
| CLIENTS | VMnet10 private, non-tagged10.77.10.0/24; OPNsense .1, Windows .10 |
| TRUNK | VMnet12 explicitly bridged to dedicated Ethernet on each PC; tags20/30 only; parent without IP/native VLAN |
| SERVEURS20 | OPNsense10.77.20.1; SW-B access VMnet14; Ubuntu10.77.20.10 |
| STOCKAGE30 | OPNsense10.77.30.1; SW-B access VMnet11; TrueNAS10.77.30.10 |
| VPN | OpenVPN10.78.0.0/24, UDP1194; client app on host A through simulated WAN |

MGMT is not VLAN99. CLIENTS is not VLAN10. SW-B is L2 without IP/routing. Ubuntu→NAS must travel **B/tag20 → OPNsense A → B/tag30**. No NAT between lab zones. Restrict access ports and remove temporary service-guest NAT adapters before joint validation.

## Service contract

- Ubuntu B: Nginx HTTPS8443 → InvoiceShelf8080 on private Docker bridge. Only8443 is published.
- Official InvoiceShelf2.4.7 image uses local SQLite at /var/www/html/storage/app/database.sqlite, persistent storage and Modules mounts. APP.md records tagged official configuration sources and private key handling.
- SQLite stays local. Stop the app, archive its persistent/configuration data coherently, resume, then send the archive to the restricted NAS app-backup dataset. Restore a separate copy.
- Prometheus on Ubuntu polls Windows exporter9182; Grafana3001 displays metrics. Prometheus9090 is internal. OPNsense sends logs to Ubuntu TCP514.
- VPN allows application8443 only; deny SSH22, NAS445 and Grafana3001. Remove the host's MGMT bypass during that demonstration.
- Required OS/security work remains: Defender/firewall/Sysmon/audit on Windows; SSH keys/iptables/audit/logging/protection on Ubuntu; SMB ACLs/encryption/snapshots on NAS; Docker course exercise/history and Docker Bench.

## Presenter delivery

Entry: docs/network-lab-3d.html. Launch `powershell -NoProfile -File diagram/start.ps1`, then http://127.0.0.1:3187/. The server is loopback-only and serves explicitly allowed presenter files/assets. Node uses the bundled runtime when present, otherwise PATH.

Sources: diagram/app.mjs, scene.mjs, scenarios.mjs, map.mjs, icons.mjs; facts in docs/network-assets/topology.json. Rebuild from diagram/ with `node build.mjs`; dependencies are locked, node_modules ignored. Fonts/assets are local. docs/network-lab.html preserves B's earlier diagram.

The final pass adds named ports, directional packet travel, VLAN tag changes, firewall decision markers, selectable links, functional device expansions, Ubuntu/Docker containment and local-volume distinction. Breadcrumbs and return preserve the scenario/step. Full screen, manual/automatic play, reduced motion,2D fallback and SVG export remain available. Desktop presentation only; phone checks are explicitly excluded.

28 October enhancement: cinematic rendering with an economy fallback, story camera, VLAN-tag packet with exploded view, firewall gate, "Et si… ?" simulated faults, optional student quiz, decluttered labels and a scene-only full screen. Simulations only; see evidence/PRESENTER_ENHANCEMENT.md for checks and the unverified real-hardware frame rate. Public copy of the lab only (this repository stays private): https://jessem8.github.io/virtualization-lab-3d/ from the public repo jessem8/virtualization-lab-3d, refreshed with diagram/publish.mjs.

Astra supplied a read-only critique; a separate final source review identified internal-link visibility, encoded asset traversal and2D direction issues. All three were corrected. See evidence/DIAGRAM_VERIFICATION.md for actual checks and review scope.

## Current handoff status

OpenVPN server and restricted rules were configured on 28 October with dedicated VPN certificates. The elevated physical-host client completed initialization using TLS 1.3/AES-GCM; host queries confirm 10.78.0.2 and both lab routes through 10.78.0.1. OPNsense reports the PC-A-VPN session ok. Client remains connected; application/deny enforcement and the MGMT-bypass-removed demonstration remain untested. Client profile remains private outside Git. See evidence/PC_A_STATUS.md; VPN application/deny demonstrations still require B.

On 28 October, WIN-LAB Windows Server 2025 Desktop Experience installation, VMware Tools, rename/restart, Defender updates/quick scan, Sysmon events 1/3, logon events 4624/4625 and local windows_exporter metrics were recorded in the user-supplied guest evidence. Post-restart output shows WIN-LAB active and no pending restart. Windows Firewall is enabled with bounded dropped-packet logging; exporter TCP 9182 is restricted in configuration to Ubuntu 10.77.20.10. After correcting a VMnet0/VMnet10 adapter mismatch, the user verified DNS via 10.77.10.1 and HTTPS HTTP 200 from Windows on the intended CLIENTS network (10.77.10.10/24, gateway/DNS 10.77.10.1). These are guest-output checks, not joint network or remote scraping proof. Remaining update offers after restart are unknown. Next A task: restricted OpenVPN; cross-PC VLAN, application/NAS access, monitoring, recovery and load checks remain pending. See evidence/PC_A_STATUS.md for scope and evidence distinctions.


On 28 October in the continuation chat, OPNsense Unbound was enabled on port 53 and set to all interfaces; its ACL page showed default Allow with no custom entries. NTP was also set to all interfaces, and its status showed an active synchronized peer. These are UI observations, not guest-side DNS/NTP or WAN exposure tests. No settings were changed during this inspection. A later host reading showed 6.24 GiB available of 15.71 GiB and 76.23 GiB free on C:. The earlier 2.61 GiB reading was a transient snapshot, not proof of a blocker. A Windows Server evaluation ISO exists in Downloads, but its contents/edition and integrity have not been verified here. Existing unrelated presenter edits remain local.

On 28 October, 35 named LAB firewall rules were saved/applied in Chrome and read back after reload: 6 MGMT, 11 CLIENTS, 10 SERVEURS20 and 8 STOCKAGE30. The two broad default MGMT/LAN allow rules are disabled. Exact host/service permissions precede RFC1918 blocks, HTTP/HTTPS update permissions and logged IPv4/IPv6 final denies. Management access remains reachable. This is configuration evidence; guest traffic and cross-PC enforcement remain untested.

Post-update Chrome verification on 28 October: OPNsense 26.7.7-amd64 booted with all planned interface addresses retained and management access working. Update/reboot verification is complete; this does not establish the remaining firewall/services or cross-PC behavior.

OPNsense is installed and its wizard completed in Chrome on 28 October. Hostname FW-LAB.internal, timezone Africa/Tunis. MAC-verified interfaces: WAN em0 DHCP 192.168.53.136/24 (gateway 192.168.53.2); MGMT em1 10.77.99.1/24; CLIENTS em2 10.77.10.1/24; TRUNK em3 with no IP. VLAN device vlan01/tag20 and vlan02/tag30 use em3; assigned/enabled as SERVEURS20 10.77.20.1/24 and STOCKAGE30 10.77.30.1/24. The interface overview reports these addresses and routes. Host VMnet13 address 10.77.99.254/24 and absence of a default route on it were checked. The dedicated Ethernet bindings were rechecked after the user's changes: IPv4, IPv6, Microsoft client and file sharing are disabled; VMware Bridge Protocol remains enabled. User screenshot shows Internet Connection Sharing unchecked. DHCP/DNS listening scope, NTP, VPN and cross-PC VLAN behavior still require work or verification; firewall rules are now configured as recorded above, with traffic tests pending. No B changes were made. Resume here, not at the installer; see evidence/PC_A_STATUS.md.

Git base brought in B's four commits through921eebf. PR #1 is merged. Continue on main: fetch/pull, reconcile concurrent changes, commit only scoped work and push without force. Keep current status in repository files and requests between machines in GitHub issues. A fresh Machine B status has been requested in [issue #2](https://github.com/jessem8/virtualization-cloud-lab/issues/2); its last report remains dated 26 October until B supplies actual new evidence. Keep secrets, VM images, VPN profiles and private recovery/configuration exports out of Git.

## Lessons to retain

- Make the packet path and enforcement points explain the architecture; decorative3D alone does not.
- Separate a local storage relation from a VLAN link.
- Keep request/response captions aligned to animation direction.
- Inspection should preserve the walkthrough and ownership context.
- Human instructions supersede the old start-approval gate.
- Inventory and configure A next; do not restart planning or add another platform.
