# Project state

Updated 2026-10-25, Africa/Tunis. Current work: revise the two-PC allocation and application, keep Markdown only, and update the existing GitHub PR. Infrastructure implementation has not started.

## Current request and decisions
- User asks to finish today on at most two physical PCs, smoothly and securely, keeping wording and GitHub coordination simple.
- Both PCs are together and an Ethernet cable is available. This supersedes the earlier separate-home/Wi-Fi-only assumption.
- User's machine is A (GitHub jessem8). Other machine is B (GitHub sanadzhioua); user explicitly requested collaborator access.
- Both old BUILD_PLAN.md and the supplied PDFs are proposals. Neither is assumed correct. Current recommendation is also provisional pending review and runtime checks.
- User requested a more useful app and more actual work on B. Revised guests: A OPNsense3GiB + Windows4GiB =7GiB; B TrueNAS8GiB + Ubuntu2.5GiB + SW-B0.5GiB =11GiB. Same five guests,18GiB total. This balances setup responsibilities, not equal RAM; B capacity remains to verify.
- Physical Ethernet now carries tagged VLAN20/30 between OPNsense A and SW-B. Ubuntu/NAS use separate access ports on B. MGMT99 remains separate on A. First approved20-30min checks physical tags and bidirectional forwarding; stop/report a failure rather than guessing drivers all day.
- The earlier Homebox inventory/document preference was superseded by the user's explicit decision to choose **Vikunja** for the professor's free-choice application. Vikunja 2.7.1 + bundled SQLite, persistent database/attachments and the existing Nginx HTTPS proxy require no extra VM, database, worker or network change. GitHub remains the Codex coordination channel. The tutorial sample stays a stopped exercise. Guides remain Markdown-only.
- Read BUILD_PLAN.md, docs/MACHINE_A.md, docs/MACHINE_B.md, docs/LIAISON.md and docs/TEST_MATRIX.md for the current proposal.

## Approval and communication
User authorized preparing/publishing documentation, creating a private remote repository/PR, adding sanadzhioua and communicating through GitHub. User requires review/approval before Machine A begins guest or network work. A normal approval or explicit start comment from the other participant on the current plan revision is enough. Keep the handoff simple; no autonomous provisioning, polling daemon or additional approval ceremonies.
Machine B follows its own user's or the peer's explicit authorization. Joint tests wait for both sides to report ready. Direct later human directions govern.
See docs/COORDINATION.md. This checkpoint is not itself a start approval.

## Requirements retained
Presentation plus live demo, no separate report per user-supplied professor clarification. Windows Sysmon/Defender/local firewall/security audit; Ubuntu SSH keys/iptables/log collection/audit/protection; TrueNAS SMB/permissions/encryption/snapshot restoration; Vikunja/SQLite plus the short Docker tutorial exercise, image history and Docker Bench; real Prometheus/Grafana; gateway firewall/NAT/filtering; restricted VPN; actual VLANs.
No separate VM escape exercise/research; do not call ordinary isolation an escape. No public cloud, nested ESXi, AD or Kubernetes. Preserve existing unrelated guests/data, including Kali and ESXi.

## Evidence and limits
- Four supplied PDFs (36pages) text-read; key diagram/tables visually inspected. They depend on an absent/uninspected kit_demain, switch application choice and omit explicit audit/workshop steps. Corrected guides remove that hidden dependency.
- Previous A10/B8 private-trunk proposal was superseded by the request for more work on B. A7/B11 remains conditional on early tagged transport and resource checks. Vikunja's official Docker/SQLite, permissions and reverse-proxy docs and v2.7.1 image tag/release were checked read-only. Actual runtime/security/footprint tests have not run.
- Historical A hardware: i7-13700HX,15.71GiB visible,79.31GiB free disk on October23. Today's available resources, other PC hardware, installed guest states and forwarding behavior remain unverified.
- Ubuntu26.04.1 is user-reported; Windows2025/OPNsense26.7/TrueNAS25.10.7 installers were previously observed, not boot-verified.
- Blackboard project brief, workshop and grading evidence were inspected in prior discussion. Ignore placeholder due dates. Older report4points reassignment was not confirmed. Three students was the earlier assumption, not four workers.
- PDF versions/images previously claimed verified do not imply the scripts exist or work. Pin actual software during approved setup.
- No guest boot, installation, host network change, integration test, VPN connection, NAS restoration or simultaneous performance test occurred in this documentation task.

## Repository and outputs
Only editable Markdown guides remain in the current repository tree. PDF outputs, original PDF copies and generation tooling are removed. Downloads originals remain unchanged. Prior plans are recoverable in Git history; earlier local checkpoints also remain in ignored .local-history.
Do not publish credentials, keys, VPN profiles, raw configuration exports or VM images. Repository: https://github.com/jessem8/virtualization-cloud-lab (private, verified). Branch: docs/two-pc-plan. sanadzhioua write access was verified after the invitation was accepted. Use the planning PR for its current revision and approval.

## Next action
Planning PR https://github.com/jessem8/virtualization-cloud-lab/pull/1 is open; sanadzhioua is requested as reviewer and has write access. This revision updates app/allocation and needs review of the current PR head. Wait for the other participant's approval before Machine A implementation. Record the reviewed revision when approval arrives. All live lab tests remain unrun.

## Lessons
1. Treat plans as hypotheses and preserve later user corrections.
2. Physical tag transport is an explicit gate when Ubuntu and NAS are hosted behind SW-B.
3. Separate real VLAN evidence from VMnet/subnet labels.
4. Balance implementation responsibilities as well as RAM, without removing required security.
5. Keep guest data outside synchronization and preserve unrelated work.
6. Distinguish source review, static checks and actual runtime evidence.
7. One shared planning PR and short progress comments are enough for this lab.
