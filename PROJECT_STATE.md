# Project state

Updated 2026-10-25, Africa/Tunis. Current work: prepare and review the two-PC plan, corrected PDFs and GitHub handoff. Infrastructure implementation has not started.

## Current request and decisions
- User asks to finish today on at most two physical PCs, smoothly and securely, keeping wording and GitHub coordination simple.
- Both PCs are together and an Ethernet cable is available. This supersedes the earlier separate-home/Wi-Fi-only assumption.
- User's machine is A (GitHub jessem8). Other machine is B (GitHub sanadzhioua); user explicitly requested collaborator access.
- Both old BUILD_PLAN.md and the supplied PDFs are proposals. Neither is assumed correct. Current recommendation is also provisional pending review and runtime checks.
- Proposed guests: A OPNsense3GiB + Windows4GiB + Ubuntu2.5GiB + Alpine switch0.5GiB =10GiB; B TrueNAS8GiB. Same five guests, no extra platform.
- Actual VLAN20/30 trunk is private inside A. Physical Ethernet extends the untagged storage access port to B. Dedicated virtual management network separates the Windows client from administration.
- Read BUILD_PLAN.md, docs/MACHINE_A.md, docs/MACHINE_B.md, docs/LIAISON.md and docs/TEST_MATRIX.md for the current proposal.

## Approval and communication
User authorized preparing/publishing documentation, creating a private remote repository/PR, adding sanadzhioua and communicating through GitHub. User requires review/approval before Machine A begins guest or network work. A normal approval or explicit start comment from the other participant on the current plan revision is enough. Keep the handoff simple; no autonomous provisioning, polling daemon or additional approval ceremonies.
Machine B follows its own user's or the peer's explicit authorization. Joint tests wait for both sides to report ready. Direct later human directions govern.
See docs/COORDINATION.md. This checkpoint is not itself a start approval.

## Requirements retained
Presentation plus live demo, no separate report per user-supplied professor clarification. Windows Sysmon/Defender/local firewall/security audit; Ubuntu SSH keys/iptables/log collection/audit/protection; TrueNAS SMB/permissions/encryption/snapshot restoration; Docker workshop sample app/SQLite, image history and Docker Bench; real Prometheus/Grafana; gateway firewall/NAT/filtering; restricted VPN; actual VLANs.
No separate VM escape exercise/research; do not call ordinary isolation an escape. No public cloud, nested ESXi, AD or Kubernetes. Preserve existing unrelated guests/data, including Kali and ESXi.

## Evidence and limits
- Four supplied PDFs (36pages) text-read; key diagram/tables visually inspected. They depend on an absent/uninspected kit_demain, switch application choice and omit explicit audit/workshop steps. Corrected guides remove that hidden dependency.
- Architect reviewed both layouts and recommended A10/B8 with storage-only cable, filtering bridge, management separation, Docker bridge rules and measured gates. This is design evidence, not working-network evidence.
- Historical A hardware: i7-13700HX,15.71GiB visible,79.31GiB free disk on October23. Today's available resources, other PC hardware, installed guest states and forwarding behavior remain unverified.
- Ubuntu26.04.1 is user-reported; Windows2025/OPNsense26.7/TrueNAS25.10.7 installers were previously observed, not boot-verified.
- Blackboard project brief, workshop and grading evidence were inspected in prior discussion. Ignore placeholder due dates. Older report4points reassignment was not confirmed. Three students was the earlier assumption, not four workers.
- PDF versions/images previously claimed verified do not imply the scripts exist or work. Pin actual software during approved setup.
- No guest boot, installation, host network change, integration test, VPN connection, NAS restoration or simultaneous performance test occurred in this documentation task.

## Repository and outputs
Editable guides and generated PDFs live in this repository. Original Downloads PDFs remain unchanged; copies in sources/original are historical references. Previous local checkpoint/build plan retained in ignored .local-history before replacement.
Do not publish credentials, keys, VPN profiles, raw configuration exports or VM images. Repository: https://github.com/jessem8/virtualization-cloud-lab (private, verified). Branch: docs/two-pc-plan. sanadzhioua write access was verified after the invitation was accepted. Use the planning PR for its current revision and approval.

## Next action
Planning PR https://github.com/jessem8/virtualization-cloud-lab/pull/1 is open; sanadzhioua is requested as reviewer and has write access. Publication and document checks are complete. Wait for the other participant's approval before Machine A implementation. Record the reviewed revision when approval arrives. All live lab tests remain unrun.

## Lessons
1. Treat plans as hypotheses and preserve later user corrections.
2. Two physical PCs do not require a physical tagged trunk.
3. Separate real VLAN evidence from VMnet/subnet labels.
4. Balance resources without removing required security.
5. Keep guest data outside synchronization and preserve unrelated work.
6. Distinguish source review, static checks and actual runtime evidence.
7. One shared planning PR and short progress comments are enough for this lab.
