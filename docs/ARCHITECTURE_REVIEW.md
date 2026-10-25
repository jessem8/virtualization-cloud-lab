# Architecture review

2026-10-25. Read-only review requested by the user. Recommendation, not runtime acceptance.

## Decision

Use five guests: A=OPNsense3 + Windows4 + Ubuntu2.5 + Alpine switch0.5GiB (10GiB); B=TrueNAS8GiB. Keep real tagged VLAN20/30 on a private trunk inside A. Extend only the storage access port across untagged Ethernet to B. This keeps VM count unchanged, balances the proposed allocations and removes physical VLAN-tag driver dependence.

The previous A7/B11 physical tagged-trunk design remains a plausible alternative if actually tested; it is not assumed correct. Combining switching with the Ubuntu application guest saves only0.5GiB and expands its trusted role, so it was rejected.

## Corrections integrated

- Enable bridge VLAN filtering/defaultPVID0; exact tagged trunk20/30 and untagged access memberships; remove nativeVLAN1, IP/IPv6/DHCP/routes/SSH on SW-A.
- Use dedicated Ethernet bridges, no Windows IP/ICS or host sharing on that NIC. The trusted hypervisor administrator remains outside the guest-isolation guarantee.
- Keep a separate virtual management LAN; client Windows cannot administer NAS/firewall/Ubuntu. This adds no VM.
- Use Docker bridge and verify INPUT plus DOCKER-USER/FORWARD, preserving required Docker forwarding.
- Restore task/SQLite app, image-layer history, Docker Bench, Windows security audit and Ubuntu auditd. Extend real monitoring to Windows and app availability.
- Separate app8443 and Grafana3001; restricted VPN reaches app only.
- Check same-subnet WAN reply-to for OpenVPN; test routes and remove management bypass during demonstration.
- Keep TrueNAS8GiB, private recovery keys, actual restore and honest virtual-disk/mirror/snapshot limits.
- Remove references that require an unavailable kit; prepare reviewable configuration files during the assigned implementation.

## Gates and recovery

The first approved work is inventory and the smallest network path. Verify foreign-MAC forwarding, ARP/unicast both ways, private tags and untagged cable; a physical link LED is insufficient. Then prove policies, services, persistence and simultaneous resources. Use docs/TEST_MATRIX.md.

Record only project VMnet/NIC-binding/route/config changes and undo those if needed. Never use whole-host restore/defaults or delete unrelated guests. If transport fails, collect captures before proposing a different topology.

## Evidence and limits

Reviewed local checkpoint/build plan and relevant PDF content plus primary documentation: Linux bridge, OPNsense VLAN/firewall/OpenVPN, Docker bridge/host/iptables, TrueNAS hardware and Broadcom dedicated subnet guidance. Broadcom's article spans older Workstation versions; actual installed behavior remains a test obligation.

Architecture review by the architect agent was integrated by the main agent. No boot, installation, live capture, restored data, VPN tunnel or resource rehearsal occurred in this review. B hardware/guest state and A's current available capacity remain unknown.
