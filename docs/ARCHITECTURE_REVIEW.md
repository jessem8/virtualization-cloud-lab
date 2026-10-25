# Architecture review

Updated2026-10-25. Current recommendation follows the user's request for a more useful app and more implementation on B. It remains subject to peer review and runtime checks.

## Current split

A=OPNsense3 + Windows4 =7GiB (2VMs). B=TrueNAS8 + Ubuntu2.5 + SW-B0.5 =11GiB (3VMs). Five guests and18GiB total, unchanged. This redistributes setup/CPU responsibilities; it does not equalize RAM. B has less host headroom and must confirm its capacity before allocation.

Use OPNsense on A and filtering SW-B on B, with a tagged20/30 Ethernet trunk. Ubuntu and NAS have separate untagged access ports. Keep MGMT99 separate from Windows clients. Physical tag transport is the early20-30minute network gate; preserve exact errors/captures and stop if it fails, rather than changing drivers all day.

The former A10/B8 private-trunk/untagged-storage proposal was reviewed but placed most setup on A. It is superseded by this explicit user decision. A shared Ubuntu/NAS VLAN was rejected because it weakens the required separation. No overlay, extra gateway or VM is added.

## Application

Homebox rootless + SQLite with one small HTTPS proxy is supported by the maintained project's documentation. It combines inventory, document attachments and maintenance tracking for the lab without an external DB, worker or new VM. It does not claim to be enterprise ITSM or a file-sync suite. Keep HTTPS8443 separate from Grafana3001. Release and rootless image tag/digest have been verified read-only. Persistence, TLS and actual footprint remain approved-setup checks.

The Docker course sample remains a short exercise with retained build/history evidence, then is stopped. Homebox is the sole persistent application. Docker Bench evaluates Ubuntu's Docker host.

## Controls retained

Bridge filtering/PVID0/no nativeVLAN1; source-preserving routing; INPUT and DOCKER-USER/FORWARD; private management; Windows Sysmon/Defender/audit; Ubuntu SSH/AV/auditd/rsyslog; restricted VPN; real Windows/Ubuntu/app monitoring; NAS ACL/encryption/restore. A dedicated NAS backup account/dataset receives consistent stopped-Homebox archives; live databases stay local to Ubuntu.

The same-subnet VMnet8 VPN rule checks reply-to, with management bypass removed for testing. Both hypervisor administrators remain trusted. Virtual mirror/snapshots are lab controls, not independent physical backup.

## Verification and limits

The architect supports A7/B11 as the simplest2/3VM split preserving NAS isolation, conditional on the early trunk gate. B capacity, current guest state, driver behavior and full-load performance remain unknown. No guest was started or changed, and no live test ran during this revision. Markdown replaces PDF outputs; document checks are not runtime evidence.
