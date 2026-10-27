# Project checkpoint

Updated 27 October 2026, Africa/Tunis.

## Start here

The desktop presenter is finished, reviewed and pushed in delivery commit f546293 on branch `docs/two-pc-plan`, in the existing [PR #1](https://github.com/jessem8/virtualization-cloud-lab/pull/1). The repository guides are aligned. The next task is **full Machine A configuration in a new chat**. Do not repeat the diagram design phase.

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

Astra supplied a read-only critique; a separate final source review identified internal-link visibility, encoded asset traversal and2D direction issues. All three were corrected. See evidence/DIAGRAM_VERIFICATION.md for actual checks and review scope.

## Current handoff status

No VM or host network was changed in this presenter task. Machine A configuration is the next work item; Machine B completion and joint integration follow it. Keep the detailed implementation results in the existing machine evidence files as work proceeds, rather than repeatedly listing every pending check in conversation.

Git base brought in B's four commits through921eebf. Presenter delivery f546293 is published on the shared branch/PR; this checkpoint records its completion. Use the branch's latest head. Do not merge or force-push unless the user asks. Keep secrets, VM images, VPN profiles and private recovery/configuration exports out of Git.

## Lessons to retain

- Make the packet path and enforcement points explain the architecture; decorative3D alone does not.
- Separate a local storage relation from a VLAN link.
- Keep request/response captions aligned to animation direction.
- Inspection should preserve the walkthrough and ownership context.
- Human instructions supersede the old start-approval gate.
- Inventory and configure A next; do not restart planning or add another platform.
