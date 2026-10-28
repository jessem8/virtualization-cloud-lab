# Mission and shortest lab completion path

This guide explains what the project is, what remains to be done on the two PCs, who owns each step, and what “deploy” means in the existing plan. It is an operator’s mission guide, not proof that a step has happened.

## The project in one sentence

Build a small, isolated company lab on two physical PCs: OPNsense on PC A routes and filters traffic between Windows clients, an Ubuntu application server and a TrueNAS storage server on PC B; a VLAN switch and a tagged Ethernet cable connect the server and storage networks; then demonstrate access control, monitoring, backup and recovery.

The business story is a fictitious company using InvoiceShelf to make an invoice. The technical story follows one request: Windows opens InvoiceShelf through OPNsense; Ubuntu stores the application’s SQLite data locally; a deliberate, stopped copy is sent to a restricted TrueNAS backup dataset; monitoring and firewall logs show what happened. A VPN client may reach the application, while SSH, SMB and Grafana remain blocked from VPN.

The lab has five guests across two computers:

| Physical PC | Owner | Guests and job |
|---|---|---|
| A | Jesse | OPNsense firewall/router (FW-LAB); Windows client (WIN-LAB) |
| B | Sanad | Alpine Layer-2 VLAN switch (SW-B); Ubuntu application/monitoring/log server (UBU-LAB); TrueNAS storage (NAS-LAB) |

No public cloud is part of this demonstration. The VPN’s “WAN” is VMware NAT for a controlled lab test; it does not prove access from the public Internet. The 3D presenter is an explanation and simulation aid, not a live network monitor.

## The simplest mental picture

```text
PC A: Windows ── CLIENTS ──┐
                            │
                    OPNsense FW-LAB ── VMware NAT ── Wi-Fi/Internet for updates
                            │
PC A Ethernet ══ tagged VLAN 20 + VLAN 30 ══ PC B Ethernet
                                                  │
                                               SW-B (Layer 2)
                                           ┌──────┴──────┐
                                    access VLAN 20   access VLAN 30
                                       Ubuntu            TrueNAS
                                    app/metrics/logs     SMB/backups
```

The important route is Ubuntu VLAN 20 → SW-B → tagged Ethernet → OPNsense on A → tagged Ethernet → SW-B → TrueNAS VLAN 30. OPNsense makes the routing and firewall decision. SW-B only switches frames; it has no IP address, DHCP service or routing. MGMT and CLIENTS are separate, untagged VMware networks. MGMT is not VLAN 99; CLIENTS is not VLAN 10.

## What “deploy” means here

“Deploy” is repeated in the plan because it describes several different installation/configuration actions. It does not mean publishing this project to a cloud or making it public.

| Phrase in a guide | Plain meaning | Evidence that would support “done” |
|---|---|---|
| Deploy/configure a VM | Create or reuse the VM, install its guest OS on the intended virtual disk, assign the planned virtual adapters and configure the guest | VM settings plus guest boot/version and interface/address evidence |
| Deploy a VLAN/network | Configure VMnet, physical bridge, SW-B VLAN membership/PVID, OPNsense interfaces/routes/rules and host bindings | Settings plus tagged traffic, expected reachability and firewall logs from real endpoints |
| Deploy InvoiceShelf | Run the fixed InvoiceShelf 2.4.7 image on Ubuntu with persistent local SQLite, private Docker networking and HTTPS proxy on 8443 | Browser login, fictitious invoice/PDF, container/volume settings and successful persistence check |
| Deploy monitoring/logging | Run Prometheus/Grafana and Windows exporter; forward OPNsense logs to Ubuntu | Fresh metric samples and an observed log event in the receiver |
| Deploy the VPN | Configure OpenVPN server/client and narrow firewall access | Client connects, application succeeds, forbidden ports fail and rules/logs show the decision |
| Deploy a backup/recovery path | Stop InvoiceShelf, archive coherent local data/configuration, copy to restricted NAS, restore to a separate test copy | Archive location/ACL evidence and the restored fictitious invoice/PDF on the isolated copy |

When presenting, use “install/configure/run” for the action and “verified” only for an observed result. Avoid saying “deployed” alone; say what was installed and which proof was observed. No evidence currently establishes that any of these live services or integrated paths work.

## Current starting point

The existing desktop presenter and operational guides are available. This task refines the presenter separately; do not spend physical lab time rebuilding diagrams or preparing submission artifacts.

- PC A: FW-LAB exists at `C:/VMs/FW-LAB` with OPNsense ISO attached, 3 GiB RAM, 2 vCPU, 20 GiB disk and saved VMnet8/13/10/12 adapters. The initial ISO boot reached FreeBSD startup. A VMware “Removable Devices” notice blocked automated input. Persistent installation, host MGMT address/routes, guest interface assignments, VLANs, rules, VPN and traffic are not verified.
- PC B: SW-B exists at 0.5 GiB/1 vCPU/2 GiB disk and Alpine only reached its live ISO login; it is not installed and has no network adapters. Ubuntu Desktop (4 GiB) and TrueNAS (6 GiB) VMs have empty disks and no adapters and have not been started. Those allocations differ from target values (Ubuntu 2.5 GiB, TrueNAS 8 GiB). B has 15.29 GiB usable RAM and about 4.41 GiB available in a 26 October snapshot; this is stale capacity evidence, not current free memory or proof that the full lab can run together.
- The chosen application is InvoiceShelf 2.4.7. B’s earlier undecided-app note is superseded.

Refresh each host’s free RAM/storage and VM inventory before work. Keep active VM disks outside OneDrive. Preserve unrelated guests and Wi-Fi settings. Do not change PC B until Sanad authorizes the changes. PC A configuration is already directly authorized by Jesse; no PR or peer approval is pending.

## Shortest dependency-aware route to a working lab

This is the shortest safe order because it tests the highest-risk dependency—the tagged link—before time is spent finishing services that depend on it. “Shortest” means no duplicate planning or unnecessary platform work; it does not promise a duration. The project still includes the course security and recovery requirements listed below.

### 1. Resume PC A at the actual stop

Dismiss the VMware notice manually if it still appears, continue the OPNsense installer, and install to the new FW-LAB virtual disk. Do not reset VMware networks or touch unrelated guests.

Then configure FW-LAB’s interfaces by the saved MAC addresses, not by guessed interface names:

- WAN → existing VMnet8 NAT, DHCP.
- MGMT → VMnet13, OPNsense 10.77.99.1/24; configure host A as 10.77.99.254/24 without a default gateway on that adapter.
- CLIENTS → VMnet10; OPNsense 10.77.10.1/24.
- TRUNK → VMnet12; no parent IP, no untagged/native VLAN.
- Create VLAN 20 (10.77.20.1/24) and VLAN 30 (10.77.30.1/24) on TRUNK.

Do not open broad inter-zone access. Record the actual version, interface-to-MAC mapping and observed result. The earlier ISO archive checksum and extracted-file match were checked; detached signature verification was not performed.

In parallel only if Jesse is actively able, prepare WIN-LAB on CLIENTS at 10.77.10.10/24, preserving Defender and the Windows firewall. Windows can be finished after the network foundation is in place. Avoid running all VMs before B is ready.

**A local-ready gate:** FW-LAB boots from its virtual disk; the four interfaces match the planned MAC/VMnet mapping; WAN, MGMT and CLIENTS have the expected addresses/behavior; the dedicated Ethernet is bridged to the selected physical NIC; host binding has no IP/IPv6/ICS on that dedicated adapter; VLAN 20/30 are defined on an unnumbered TRUNK. This gate does not yet prove cross-PC tags.

### 2. Prepare PC B with Sanad

First Sanad confirms available RAM, physical free disk, current VM inventory and the intended B allocations. The current snapshot is not enough to assume 11 GiB of guests can run smoothly. If capacity cannot support the target, stop and agree which allocation or run order changes before editing.

After Sanad authorizes the changes:

- Install Alpine SW-B to its new disk and give it only the three planned adapters: trunk VMnet12, Ubuntu access VMnet14, NAS access VMnet11.
- Build SW-B as a Layer-2 bridge with VLAN filtering: trunk carries tagged 20 and 30 only; Ubuntu access is untagged VLAN 20/PVID 20; NAS access is untagged VLAN 30/PVID 30. No native trunk VLAN, VLAN 1, IP, DHCP or routing. Confirm interface names by MAC; administer via VM console.
- Install/reuse Ubuntu on its intended disk and connect only VMnet14 for the final state. Its address is 10.77.20.10/24, gateway/DNS 10.77.20.1.
- Install/reuse TrueNAS on its new boot disk, never an old data disk. Attach two new data disks only. Final address 10.77.30.10/24 via VLAN 30. Set up the planned SMB users, ACLs, encrypted dataset and snapshot policy only after the network is reachable.

Do not keep temporary NAT adapters on service VMs. If an installer needs temporary Internet, use a documented temporary adapter and remove it before readiness checks.

**B local-ready gate:** SW-B configuration persists after a controlled restart; its ports match the intended MACs/modes; Ubuntu and TrueNAS boot and have one final service adapter each; their planned addresses are set; there is no switch management IP, routing or DHCP. This still does not prove the physical trunk.

### 3. Meet and test the physical trunk before building the application

Bring both owners together with both PCs on power and the dedicated Ethernet cable connected. Confirm each VMnet12 bridges to that PC’s dedicated Ethernet NIC. Start FW-LAB on A and SW-B plus the Ubuntu and TrueNAS endpoints on B. The endpoints are needed to generate and receive real traffic on both VLANs; FW-LAB and the unnumbered SW-B alone cannot validate end-to-end access traffic. Capture at both trunk ends.

For the first 20–30 minutes, test only VLAN 20 and 30 tagging, expected access-port untagging, ARP and bidirectional unicast. Do not spend this window configuring InvoiceShelf. A connected link light, ping on the wrong interface or an untagged packet is not a pass. Account for capture offloads when comparing captures.

**T03 pass:** observed tagged VLAN 20 and 30 traffic reaches both trunk ends; expected access traffic is untagged; ARP and unicast work in both directions on each VLAN; no native/untagged trunk path is used. Record source, destination, tag, expected/observed result and redacted capture.

**If T03 fails:** save both captures and exact error, stop the broader work and troubleshoot the concrete NIC/bridge/tag issue together. Do not spend the day cycling through random driver settings. The rest of the app work is downstream of this path.

### 4. Complete the services in parallel, then integrate

Once T03 passes, A and B have useful independent work.

**PC A / Jesse:** finish OPNsense inter-zone rules, outbound NAT only where intended, DNS/NTP, logging, then Windows hardening and evidence. Configure the VPN only after the application and destination routes work. Keep the VPN test last so host MGMT does not accidentally bypass it.

**PC B / Sanad:** finish the SW-B VLAN rejection check; secure Ubuntu; create the application and monitoring stack; configure TrueNAS SMB/ACL/encryption/snapshot. The Ubuntu-to-NAS traffic must route through OPNsense A; do not add a second router, NAT shortcut or shared SMB mount for SQLite.

**Cross-PC work:** install the planned rules and test an allowed service before its corresponding denial. Open only the required ports from the named source zones. Confirm logs at the firewall and Ubuntu. Remove temporary installer adapters and verify no guest has an unintended second path.

The intended service contracts are:

- InvoiceShelf 2.4.7 runs on Ubuntu. Nginx terminates HTTPS at 10.77.20.10:8443 and proxies to InvoiceShelf at 8080 on a private Docker network. Only 8443 is host-published. SQLite is local persistent Ubuntu storage; never place its active database on SMB.
- Prometheus runs on Ubuntu; Windows exporter listens on 9182 and accepts Ubuntu only. Grafana is on 3001. Prometheus 9090 remains internal. OPNsense logs go to Ubuntu over TCP 514.
- TrueNAS SMB is restricted by both network rules and dataset ACLs. An app-backup account writes only to the restricted backup dataset. Store credentials/keys privately on Ubuntu, never in Git or inside the app container.
- VPN allows InvoiceShelf HTTPS 8443 only. VPN attempts to SSH 22, SMB 445 and Grafana 3001 must be denied and logged. Remove the host’s MGMT bypass during this test; restore it afterward.

## Parallel responsibilities: who does what

| Person/agent | Owns | Must not assume |
|---|---|---|
| Jesse (human, A owner) | Approves and performs A’s host/VM changes; confirms A evidence; leads firewall/VPN and Windows demonstration | Historical host readings are current; screenshot settings prove traffic |
| Sanad (human, B owner) | Authorizes B changes; confirms B capacity/allocations; performs B VM/storage changes and validates B evidence | Prior prepared VMs are installed or their RAM choices satisfy the final workload |
| Codex in A’s task | Guided, one action at a time configuration of A; explain commands/settings; inspect outputs and keep A’s status accurate | It may change B, destroy unrelated guests, or claim unobserved connectivity |
| Codex in B’s task (optional) | Guide Sanad through B only after his authorization; inspect commands/settings and update B evidence | A is ready or the cross-PC trunk works before T03 |
| Ubuntu CLI session (optional) | Run bounded Ubuntu setup/diagnostics with Sanad present: version/interfaces, SSH/firewall, Docker, InvoiceShelf, monitoring/logging, backup checks | It may change VMware/host adapters, OPNsense, NAS data, or store secrets in chat/Git |

Use the existing project docs and evidence files as the shared source. Keep updates short and factual: **done and observed**, **not done**, **blocked by**, and **next action**. Share redacted output/screenshots through the project’s existing private coordination route. Never place passwords, VPN profiles, private keys, raw sensitive exports or VM disks in the repository. Do not have two agents edit the same host or configure competing rules simultaneously.

### Copyable task prompts

Use one prompt at a time in the relevant machine’s task. Replace bracketed status with a real observation. These prompts do not grant permission to change the other owner’s machine.

**Codex on PC A**

> Continue from PROJECT_STATE.md and docs/MACHINE_A.md; inspect evidence/PC_A_STATUS.md first. PC A is Jesse’s machine, and he has authorized A configuration. Resume at the recorded FW-LAB first-boot stop. Give one beginner-sized action at a time, explain its purpose, preserve unrelated guests and Wi-Fi, and keep VM disks outside OneDrive. Use the existing VM/MAC/VMnet plan. Do not change PC B. After each meaningful step, distinguish observed evidence from the target plan and update PC_A_STATUS.md. Stop at the local-ready gate and report what has and has not been verified. Do not claim cross-PC VLAN success until the two owners run T03 together.

**Codex on PC B**

> Read PROJECT_STATE.md, docs/MACHINE_B.md, docs/LIAISON.md and evidence/PC_B_STATUS.md. Sanad owns PC B; make no B changes until he is present and authorizes them. First inspect current RAM/storage and VM state, then reconcile the prepared 6 GiB TrueNAS and 4 GiB Ubuntu allocations with the target and real capacity. Guide B only, one beginner-sized action at a time. Preserve unrelated guests and data; use new boot/data disks and keep VM files outside OneDrive. Do not claim the trunk works before joint T03. Update B evidence from actual observations and stop at B local-ready gate, listing any capacity or install blocker.

**Ubuntu CLI session**

> Work only inside UBU-LAB on PC B, with Sanad present. First report the actual Ubuntu version, adapters, routes, free memory/disk and existing services without changing anything. Then follow docs/MACHINE_B.md and docs/APP.md in small reversible steps, keeping console access and a rollback path. Do not edit VMware, OPNsense, TrueNAS data, host settings or another VM. Keep SQLite on Ubuntu local storage; publish only HTTPS 8443 through the proxy. Keep credentials and keys out of chat, shell history, logs and Git. Verify each service with a real local or named-source check before calling it ready; report exact command output with secrets removed.

## Finish and prove the project

Keep the check matrix as the ledger. Its initial state is “not executed”; change a row only after a real observation. For a failed check, preserve the failure and correction instead of rewriting it as a pass.

The course/security scope still includes:

- Windows Defender and firewall active; Sysmon process/network events 1/3; controlled successful/failed logon audit events 4624/4625; Windows exporter restricted to Ubuntu.
- Ubuntu SSH keys with password/root login denied only after key access works; persistent iptables plus Docker-aware DOCKER-USER/FORWARD review; auditd, rsyslog and protection checks.
- SW-B VLAN filtering, expected VLANs only, unauthorized VLAN tag rejected at access port, configuration persists.
- TrueNAS SMB access and denial by user, read-only role, encrypted dataset, private recovery key, snapshot and an actual file restore.
- Docker course example built, layers/history inspected and then stopped; InvoiceShelf digest/layers recorded; Docker Bench reviewed/run with corrections recorded.
- InvoiceShelf’s fictitious company/client/item/invoice/PDF; admin and restricted role tested in separate sessions; HTTPS access, persistence after container recreation and isolated restore checked.
- Prometheus/Grafana show fresh Ubuntu and Windows metrics; Prometheus stays internal; OPNsense log arrives at Ubuntu; controlled service/collector outage and recovery observed.
- Inbound and outbound firewall denials observed with services active and matching logs; VPN disconnected/connected/disconnected sequence; only InvoiceShelf works through VPN.
- Controlled restart confirms the needed network/services/persistence return. Then run all guests together for at least 10 minutes and record host/guest memory, paging/swap and response observations. If resource targets fail, revise the workload with both owners; do not claim smooth performance from a plan or sequential run.

The matrix has more detailed per-check expectations: [TEST_MATRIX.md](TEST_MATRIX.md). The live demonstration should show one allowed request, one deliberate denial, one monitoring/logging result, and the separate-copy recovery. The 3D presenter can narrate each route and decision, then switch to the actual VM/browser/log evidence. Label an animation as “simulated path” when it is not displaying live traffic.

## Short rehearsal story

1. “This is a small company lab on two PCs. A is the client/firewall side; B runs the switch, app and storage.”
2. Show the 3D model and trace Windows → OPNsense → VLAN 20 → Ubuntu/InvoiceShelf. Point out where the firewall permits it.
3. Open the fictitious invoice and PDF. Explain that the app’s SQLite data is stored locally on Ubuntu.
4. Trace Ubuntu → OPNsense → VLAN 30 → TrueNAS. Show the restricted backup dataset and explain that the app is stopped before SQLite is archived.
5. Show the backup restored to a separate test copy, then show fresh metrics/logs.
6. Connect the VPN and open only HTTPS 8443. Show SSH, SMB and Grafana denied. State plainly that the VPN endpoint is simulated behind VMware NAT and this is not a public Internet test.

If you become stressed, return to the same six steps. You are explaining one request path, one enforcement point, one stored dataset and one recovery. If a live service fails, say “This check failed; here is the evidence and next diagnosis.” Do not improvise a pass or depend on the animation to conceal the failure.
