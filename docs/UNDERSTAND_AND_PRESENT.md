# Understand the project, then present it
Personal learning and rehearsal guide • 28 October 2026

Read this first. Then use [the mission report](MISSION_AND_FAST_LAB.md) to finish the lab. This is your team's requested learning artifact; it does not add a professor-required report.

**Current truth:** A stopped during the first OPNsense ISO boot, before installation. B has an Alpine live boot and prepared Ubuntu/TrueNAS guests, not installed services. You confirmed no further progress. The diagram explains the intended design. It does not measure the machines.

## 1. Explain it like I am five

Imagine a small company with an office, a locked workroom and a safe.

- **Windows is the employee's desk.** The employee wants to make an invoice.
- **Ubuntu is the workroom.** It runs InvoiceShelf, the invoice application.
- **TrueNAS is the safe.** It holds shared files and backup archives.
- **OPNsense is the security guard.** It checks which room each request may enter.
- **Alpine SW-B is the corridor junction.** It sends traffic to the correct room; the guard decides whether traffic may cross between rooms.
- **The VPN is a checked entrance.** Having an entrance pass does not give access to every room.
- **Prometheus and Grafana are the instruments and display.** One gathers measurements; the other shows them.

Two real PCs hold five virtual computers. A virtual machine is a computer made in software with its own operating system. Docker containers are smaller application environments *inside Ubuntu*. They are not extra physical PCs or extra VMs.

**The whole project in one sentence:** “We built a small private company network on two PCs, then checked that employees can use an invoice application, unauthorized access is blocked, and data can survive a failure.”

Until the checks succeed, say **“We are building…”** instead of “We built…”.

## 2. Where each thing lives

| Physical machine | Virtual machines | Job |
|---|---|---|
| A — Jesse | OPNsense; Windows | Security guard, routing, VPN, employee desk |
| B — Sanad | Alpine SW-B; Ubuntu; TrueNAS | VLAN switching, application/monitoring, files/backups |

On Ubuntu: HTTPS proxy → InvoiceShelf → local persistent data. Prometheus and Grafana also run here. The active SQLite database stays on Ubuntu; the NAS receives a coherent backup archive.

The physical Ethernet cable carries **VLAN 20 and VLAN 30**, like labelled lanes on one road. Labels separate traffic; they do not encrypt it. HTTPS and the VPN provide encryption for their respective paths. CLIENTS and MGMT are separate, untagged networks in this design, not VLAN 10 and VLAN 99.

The Wi-Fi gives the hosts Internet access. OPNsense's WAN uses VMware NAT. The dedicated Ethernet cable connects the lab PCs.

## 3. The one journey you must understand

When Windows opens an invoice:

1. Windows sends the request to OPNsense.
2. OPNsense checks its rule: may this client reach Ubuntu on HTTPS 8443?
3. Allowed traffic crosses the Ethernet cable with VLAN tag 20.
4. Alpine sends it through the Ubuntu access port, removing the tag.
5. Nginx receives HTTPS and passes the request to InvoiceShelf internally on 8080.
6. InvoiceShelf checks the login and role, then uses its local database.
7. The reply returns through the established connection.

There are **two different permission checks**: the firewall controls the network path; the application controls what a logged-in user can do. A successful VPN connection does not log someone into InvoiceShelf.

The most surprising journey is the backup:

**Ubuntu on B → VLAN 20 → OPNsense on A → VLAN 30 → TrueNAS on B.**

Why leave B and come back? Ubuntu and TrueNAS are in different network zones. SW-B does not route between them. OPNsense is the common routing and filtering point. Show this in 3D: it is an architectural explanation, not a decorative effect.

## 4. What “deploy” actually means here

“Deploy” means **put a component in its intended place, configure it, start it and verify that it can do its job**. The reports use one word for several different actions. There is no single magic Deploy button.

| Phrase | Actual work | Convincing demonstration |
|---|---|---|
| Deploy a VM | Create/use the guest, install its OS, attach correct networks | Guest boots from its disk and has the intended interfaces |
| Deploy the network | Set up VMnets, VLAN-aware switch, addresses, routing and rules | Tagged traffic crosses both PCs; permitted and forbidden flows behave correctly |
| Deploy InvoiceShelf | Run the pinned image on Ubuntu with private internal networking, HTTPS and persistent directories | Windows opens HTTPS, logs in, creates a fictitious invoice and opens its PDF |
| Redeploy/recreate the container | Replace the running container while keeping persistent directories | The same account and invoice still exist afterward |
| Deploy monitoring | Run collectors/Prometheus/Grafana and configure targets | Current measurements and a real outage/recovery are visible |
| Deploy a backup process | Create a consistent archive and store it with restricted NAS access | Restore a separate copy and open the saved invoice/PDF |

**You normally deploy before the presentation.** Installing five operating systems live is slow and proves little to an audience. During the demonstration, show the working result, briefly show the configuration that produced it, and perform one rehearsed change.

A container recreation demonstrates persistence; it does **not** prove a backup can be restored. A NAS snapshot recovery and an isolated InvoiceShelf archive restore are also distinct checks.

No public cloud deployment is planned. This is a local virtualized private lab. The real VPN runs over a simulated WAN; it does not prove access from public Internet.

## 5. A presentation story you can rehearse

Use this as a roughly 8–10 minute core story; timing is a rehearsal target, not a required duration. Keep the full course evidence ready for questions. The short story does not replace the complete [verification matrix](TEST_MATRIX.md).

Two roles help: **speaker** explains; **operator** clicks. Agree on the word “next” as the cue. The speaker should not have to troubleshoot while talking.

| Scene | Say this | Show this | What it establishes |
|---|---|---|---|
| 1 — Company need, 45 s | “A small company needs invoices, controlled access and recoverable data.” | Quiet 3D overview of the two PCs and five VMs | Purpose and ownership |
| 2 — Employee request, 90 s | “Follow one request from the employee to the application. The guard checks it before it crosses the cable.” | Windows → InvoiceShelf scenario, step by step; then real Windows browser and fictitious PDF | Understandable path, then actual use |
| 3 — Inside the server, 60 s | “Ubuntu is the virtual computer. Docker runs the application inside it. Its data lives outside the disposable container.” | Open Ubuntu in 3D; show proxy/app/local data; show recorded recreation evidence or a rehearsed live recreation | VM/container distinction and persistence |
| 4 — Controlled access, 90 s | “The VPN provides a protected entrance, with access only to the invoice service.” | VPN app-allowed scenario, then NAS-refused scenario; real HTTPS access and matching OPNsense deny log | Encrypted path and limited network permissions |
| 5 — Backup journey, 90 s | “These two services are on B, but crossing zones still requires the guard on A.” | Animate B → A → B; show existing archive and isolated restored invoice | Segmentation and recovery |
| 6 — Detect a failure, 90 s | “A running server can still have a broken application. We watch application availability separately.” | Actual application stop, HTTPS probe changes, restart, recovery in Grafana | Monitoring detects application failure |
| 7 — Close, 30 s | “We demonstrated useful access, controlled refusal, persistence, recovery and observation.” | Return to overview | Connects the technical work to the company need |

For scene 4, prove SMB is available from an authorized source first. Otherwise “connection failed” might simply mean a stopped service. For scene 6, wait for the configured probe interval; do not promise an immediate change.

To demonstrate roles, use a separate logged-in session for the restricted account: viewing succeeds, creation/modification/deletion fail. Network denial and application-role denial are different demonstrations.

## 6. The impressive moments — and why they matter

1. **Open the physical PC, then Ubuntu, then its application.** The nested view explains physical host → VM → container.
2. **Follow the same backup across the cable twice.** Two VLANs share one physical cable; routing and filtering occur on A.
3. **Stop a forbidden request at OPNsense.** Pair the simulated stop with a real log showing source, destination, port and time.
4. **Recover the same invoice.** The familiar document makes persistence and restoration understandable.
5. **Show a real outage and return.** The dashboard has meaning because the audience saw the action that caused it.

Do not rotate the camera constantly or show every technical label at once. Let one visible movement answer one question. Use manual steps for talking; autoplay is for rehearsal or a short silent transition.

## 7. Your stress-resistant cue sheet

Memorize six words, not a paragraph:

**Need → Path → Container → Permission → Recovery → Monitoring**

Before each action, say what you expect. After it, say what you observed. Then explain why it matters.

If you lose your place:
> “Let us return to the employee's request. Where is it now, and who decides whether it continues?”

If a live action fails:
> “The expected result is X. The live result is Y. I will show the recorded evidence from our rehearsal, then explain the path.”

Use that sentence only when you actually have recorded evidence. If you do not:
> “This part is not yet verified. The diagram shows the intended behavior.”

If the 3D view fails: switch to the existing 2D view or the previously exported SVG. If the VM demonstration fails, a diagram remains an explanation, not a substitute for measured evidence.

If a probe is slow: explain the collection interval and move to the already prepared result. Avoid changing firewall rules, cables or credentials spontaneously on stage.

Do not promise “no blockers.” You can reduce surprises by rehearsal, simple controls and a recovery route.

## 8. Rehearsal checklist

- Use the local launcher: `powershell -NoProfile -File diagram/start.ps1`, then `http://127.0.0.1:3187/`.
- Start the five intended VMs only; confirm the basic permitted application flow.
- Check the laptop power supplies, Ethernet cable, projector readability and browser zoom.
- Pre-open the app, PDF, necessary logs, Grafana and evidence. Keep credentials and private exports off the projected screen.
- Prepare fictitious data and a verified private backup. Perform restores into separate directories.
- Run the entire talk with the operator once without stopping. Note exactly where explanation or controls become confusing.
- Repeat with the fallback: 2D/SVG and genuine dated screenshots or recordings.
- Complete the simultaneous-load check for at least ten minutes. Good slides cannot compensate for hosts that run out of memory.
- Record remaining failures honestly in the matrix. Do not tick a box based on an animation.

## 9. Understand it together after the build

Schedule a 30-minute team teach-back after the physical lab works.

**First 10 minutes:** each person explains one component without acronyms, then points to its actual VM or service.

**Next 10 minutes:** one person traces the invoice path; another traces backup B → A → B. Swap and correct each other.

**Last 10 minutes:** each person performs one permitted action, explains one denial and identifies one recovery proof. Anyone can ask “what would break if this component stopped?”

You are ready when you can answer these without reading:
- Why are there five VMs but more than five services?
- Why does the backup cross the cable twice?
- Why does a VPN user still need an app login?
- Why does the database survive replacing a container?
- Why is a snapshot different from an independent backup?
- How do we distinguish an application outage from an exporter outage?
- Which claims have real evidence and which remain planned?

Answers: containers/services live inside VMs; different VLANs route via A; network and application permissions are separate; persistent data is kept outside the replaceable container; a snapshot shares its storage failure domain; use an application probe separately from exporter health; consult dated results in the verification matrix.

## Sources and limits

This guide follows the local checkpoint, BUILD_PLAN, APP, TEST_MATRIX and the PC_A/PC_B status records, inspected 28 October. B's older “application undecided” note is historical; the current selected application is InvoiceShelf 2.4.7. Technical setup remains in the operational guides. No machine configuration, service access, backup restore or VPN behavior was verified while writing this learning guide.
