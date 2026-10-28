# Machine A configuration evidence

Updated 28 October 2026, Africa/Tunis.

## OpenVPN configuration and first handshake — 28 October

Chrome configuration created dedicated LAB-VPN-CA (RSA-3072/SHA256), LAB-VPN-Server (serverAuth) and LAB-VPN-PC-A (clientAuth), and enabled LAB-OpenVPN-InvoiceShelf on WAN 192.168.53.136 UDP4 1194 with tunnel 10.78.0.0/24, required client certificates and AES-128/256-GCM. OPNsense status reports server ok. No password database authentication was configured; access uses the dedicated client certificate.

Saved/applied and read-back rules: WAN pass only 192.168.53.1 to WAN address UDP 1194; OpenVPN group permits 10.78.0.0/24 to 10.77.20.10 TCP 8443, followed by logged SSH 22, NAS SMB 445, Grafana 3001 denies and logged IPv4/IPv6 catch-all deny. Rule ordering was corrected before apply. Same-subnet WAN rule reply-to is disabled. WAN Block private networks was disabled because the simulated WAN uses RFC1918; bogon blocking remains enabled and explicit/default firewall filtering remains in place.

OpenVPN Community 2.7.7 was installed on the physical host via winget (official swupdate.openvpn.org MSI, package hash verified). Private client profile is outside Git in Downloads; it validates the server identity and requires TLS >=1.2. Explicit client routes for 10.77.20.0/24 and 10.77.30.0/24 were added locally: the observed server PUSH_REPLY did not include these routes. Server-side route-push configuration still needs reconciliation for future exports.

First client log verifies the CA/server name, TLS 1.3 and AES-128-GCM negotiation, and a 10.78.0.2 allocation. That unelevated client failed Windows tunnel address configuration. After clearing the failed session by restarting only the new VPN instance, an elevated client completed initialization. Host queries confirm OpenVPN Data Channel Offload address 10.78.0.2 and routes 10.77.20.0/24 and 10.77.30.0/24 through 10.78.0.1. The client profile was corrected to place both route directives on separate lines; the missing first route was added to the active session. OPNsense read-back reports PC-A-VPN from 192.168.53.1 connected, virtual address 10.78.0.2, status ok. Client remains connected. Screenshot: C:/Users/jesse/AppData/Local/Temp/lab-vpn-connected.png. No B application access, deny enforcement or MGMT-bypass-removed demo is claimed. Keep profile/private keys and raw logs outside Git.


## WIN-LAB installed and CLIENTS connectivity verified — 28 October

Windows Server 2025 Standard Evaluation with Desktop Experience is installed. The user installed VMware Tools 13.1.0, restarted Windows and ran Codex CLI inside the guest. The user supplied LabSetup.zip for read-only review on the host; its scripts were inspected, not executed on the host. The ZIP contains pre-restart reports; later user-supplied console output confirms the post-restart state.

- Hostname WIN-LAB, WORKGROUP, UTC+01:00; rename, CBS and Windows Update restart flags all false in the supplied post-restart output.
- Recorded update installation results include KB5127690 and KB5126646. Saved VMware guest metadata reports build 26100.33650. The post-restart check returned to the prompt, but its separate update-offer JSON was not supplied; zero remaining applicable updates is not claimed.
- Defender signatures 1.463.12.0 dated 28 October, quick scan completed, no threat-detection records in the supplied report; antivirus, real-time, behavior, IOAV and network inspection protections enabled.
- All Windows Firewall profiles enabled, dropped-packet logging enabled with 16 MiB limit.
- Sysmon 15.22 service automatic/running; supplied evidence records process events 1 (records 73/75) and network event 3 (record 80). Logon auditing records successful 4624 (1327) and a controlled failed 4625 (1329, nonexistent test account).
- windows_exporter 0.32.0 service automatic/running. Local /metrics returned HTTP 200 with build info. Supplied firewall audit found one compatible allow rule, TCP 9182 restricted to Ubuntu 10.77.20.10. Remote permitted/denied traffic and actual Prometheus scraping remain untested.
- Latest supplied resource snapshot: 1.65 GiB available guest RAM and 41.14 GiB free guest disk; not a simultaneous two-PC load test.

Windows used temporary NAT for installation/downloads. The prepared MAC-checked transition script was reviewed and then run by the user inside the guest, setting 10.77.10.10/24 with gateway/DNS 10.77.10.1. An initial DNS timeout led to a host-side VMX check: Windows was configured on VMnet0 while OPNsense CLIENTS used VMnet10. After correction to Custom VMnet10, the user ran Resolve-DnsName against 10.77.10.1 successfully and curl.exe HTTPS to www.microsoft.com returned HTTP/1.1 200 OK (response dated 28 October 20:37:16 GMT). Both FW-LAB and WIN-LAB were running at the host check. This verifies the supplied guest DNS/HTTPS path through OPNsense; it does not prove NTP, all firewall enforcement, IPv6 transport or cross-PC connectivity.

Next: configure restricted OpenVPN on FW-LAB, retain VMnet10 as Windows's final network, obtain B readiness and coordinate trunk/application/NAS/monitoring/restore tests. No VPN or joint-test pass is claimed. Original ZIP, binaries and raw logs remain outside Git; only this summary is published.

## Continuation inspection — 28 October

Unbound General shows enabled, port 53 and All interfaces; the ACL page shows default Allow and no custom entries. NTP General also shows All interfaces, and NTP Status shows an active peer with reach 373. This verifies the displayed configuration and upstream time synchronization, not guest DNS/NTP access or WAN isolation. No configuration was changed. Later host snapshot: 6.24 GiB available physical RAM of 15.71 GiB and 76.23 GiB free on C:. An earlier 2.61 GiB available reading was a point-in-time snapshot, not proof of a blocker. A Windows Server evaluation ISO is present in Downloads; integrity and installed edition are unverified.

## Current state — 28 October (supersedes historical installation notes below)

OPNsense is installed and its wizard completed in Chrome on 28 October. Hostname FW-LAB.internal, timezone Africa/Tunis. MAC-verified interfaces: WAN em0 DHCP 192.168.53.136/24 (gateway 192.168.53.2); MGMT em1 10.77.99.1/24; CLIENTS em2 10.77.10.1/24; TRUNK em3 with no IP. VLAN device vlan01/tag20 and vlan02/tag30 use em3; assigned/enabled as SERVEURS20 10.77.20.1/24 and STOCKAGE30 10.77.30.1/24. The interface overview reports these addresses and routes. Host VMnet13 address 10.77.99.254/24 and absence of a default route on it were checked. The dedicated Ethernet bindings were rechecked after the user's changes: IPv4, IPv6, Microsoft client and file sharing are disabled; VMware Bridge Protocol remains enabled. User screenshot shows Internet Connection Sharing unchecked. DHCP/DNS listening scope, NTP, VPN and cross-PC VLAN behavior still require work or verification; firewall rules are now configured as recorded below, with traffic tests pending. No B changes were made. Resume here, not at the installer; see evidence/PC_A_STATUS.md.

Browser settings inspected: checksum/TSO/LRO offloads already disabled. Global Turn off IPv6 was selected and applied; UI readback shows checked. VLAN hardware filtering remains at its default. At the earlier interface-setup checkpoint, inter-zone rules had not yet been added; this is superseded by the firewall configuration below. User personally submitted the wizard credential step; no password was read or recorded. DNS Lookup for pkg.opnsense.org returned IPv4 89.149.222.99 through local resolver 127.0.0.1 (265 ms); the VMware DNS server also returned an AAAA answer. This verifies this DNS lookup, not all client DNS/NTP behavior. The overview still shows WAN/loopback IPv6 link-local addresses after the global IPv6 checkbox was applied; full runtime IPv6 removal is not claimed. Firmware was subsequently updated and its running version/retained addresses verified after reboot; see post-update evidence below.

Browser evidence screenshot: C:/Users/jesse/AppData/Local/Temp/opnsense-interfaces-20261028.jpg (interface overview).

## Historical preparation evidence — 27 October

## Observed host and installer state

- VMware Workstation 26.0.0 build 25388281 installed.
- Before first FW-LAB boot: available RAM 5.00 GiB, C: free space 79.79 GiB. These are point-in-time readings.
- OPNsense archive: C:/Users/jesse/Downloads/OPNsense-26.7-dvd-amd64.iso.bz2.
- Archive SHA-256 95cafedda6d5b22ce832e249dc2309110fbee19f813ad78cf28bb3d387186bfb matches the checksum retrieved from https://pkg.opnsense.org/releases/mirror/OPNsense-26.7-checksums-amd64.sha256.
- Existing extracted ISO: 2101714944 bytes; streaming SHA-256 comparison confirmed identical content to the decompressed archive. Detached signature verification has not been performed.

## VM and adapter configuration

Saved VM configuration inspected: C:/VMs/FW-LAB/FreeBSD 14 64-bit.vmx.

- Display name FW-LAB, guest profile FreeBSD 14 64-bit.
- 3072 MiB RAM, 2 vCPU with 2 cores per socket, 20 GiB virtual disk as shown in VMware.
- ISO attached to virtual CD/DVD.

| VMware adapter | VMX device | Network | MAC | Intended role |
|---|---|---|---|---|
| Network Adapter | ethernet0 | VMnet8 | 00:0c:29:fd:9a:4e | WAN |
| Network Adapter 2 | ethernet1 | VMnet13 | 00:0c:29:fd:9a:58 | MGMT |
| Network Adapter 3 | ethernet2 | VMnet10 | 00:0c:29:fd:9a:62 | CLIENTS |
| Network Adapter 4 | ethernet3 | VMnet12 | 00:0c:29:fd:9a:6c | TRUNK |

All four present and configured as custom networks in the saved VMX. Connect at power on was checked in the hardware setup. Guest interface names and assignments remain unverified.

## Host network editor evidence

User screenshots show VMnet12 bridged explicitly to Realtek PCIe GbE Family Controller; VMnet13 host-only 10.77.99.0/24 with host adapter and DHCP disabled; VMnet10 private/custom 10.77.10.0/24 with host adapter and DHCP disabled. These are editor/screenshot observations, not guest traffic evidence. The host management address 10.77.99.254, dedicated Ethernet bindings and routes have not been configured or verified.

Other registered Ubuntu/Kali/Metasploitable VMX adapter settings were inspected: NAT or default host-only; no dependency on VMnet10/12/13 was found in those three configurations. They were not edited. Wi-Fi was not changed.

## Installation progress and limitations

FW-LAB first boot initiated. vmrun list confirms it is the only running VM. The OPNsense 26.7 boot loader and FreeBSD startup appeared. No persistent OPNsense disk installation, interface assignment, firewall rules, VLANs, updates, VPN or connectivity checks are complete.

VMware Computer Use can change the VM hardware dialog, but Network Editor input was ineffective; user performed network editor changes. A Removable Devices startup notice also resisted automated dismissal during boot. Next action: dismiss the notice, reach installer login and install OPNsense on the new FW-LAB virtual disk, preserving other guests and host networks.

Task evidence helper registration was attempted but rejected with invalid_contract; no successful registry receipt or native hook binding is claimed. This file retains the actual observed state.


## Post-update verification — 28 October

Chrome dashboard confirms OPNsense 26.7.7-amd64, FreeBSD 15.1-RELEASE-p4 and OpenSSL 3.5.9 after the user-reported update/reboot. Uptime was 55 seconds at inspection. The live dashboard retained WAN 192.168.53.136/24, MGMT 10.77.99.1/24, CLIENTS 10.77.10.1/24, SERVEURS20 10.77.20.1/24, STOCKAGE30 10.77.30.1/24 and unnumbered TRUNK. Management web access works after reboot. No cross-PC or application behavior is inferred.

Pre-update VMware snapshot before-26.7.7-20261028 appears in vmrun listSnapshots. The snapshot command had not returned while its lazy memory save was underway; no completed memory-save or restore test is claimed.

Post-update screenshot: C:/Users/jesse/AppData/Local/Temp/opnsense-updated-20261028.jpg. Next: inspect remaining DHCP/DNS scope, NTP and default firewall policy; coordinate minimum trunk/endpoints with Sanad before T03. Windows, VPN, application, recovery and joint tests remain outstanding.

## Applied firewall policy — 28 October

On 28 October, 35 named LAB firewall rules were saved/applied in Chrome and read back after reload: 6 MGMT, 11 CLIENTS, 10 SERVEURS20 and 8 STOCKAGE30. The two broad default MGMT/LAN allow rules are disabled. Exact host/service permissions precede RFC1918 blocks, HTTP/HTTPS update permissions and logged IPv4/IPv6 final denies. Management access remains reachable. This is configuration evidence; guest traffic and cross-PC enforcement remain untested.

- MGMT source 10.77.99.254: firewall HTTPS 443; NAS 10.77.30.10 HTTPS 443; Ubuntu 10.77.20.10 TCP 22, 8443 and 3001.
- CLIENTS source 10.77.10.10: Ubuntu TCP 8443/3001; NAS TCP 445; its own gateway DNS TCP/UDP 53 and NTP UDP 123.
- SERVEURS20 source 10.77.20.10: Windows 10.77.10.10 TCP 9182; NAS TCP 445; its own gateway DNS TCP/UDP 53 and NTP UDP 123.
- STOCKAGE30 source 10.77.30.10: its own gateway DNS TCP/UDP 53 and NTP UDP 123.
- CLIENTS/SERVEURS20/STOCKAGE30 each block other destinations in 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16 after the specific exceptions, then allow their named guest TCP 80/443 updates, then block/log remaining IPv4/IPv6 traffic. MGMT ends with a logged IPv4/IPv6 deny. All custom LAB rules log.

Browser Apply returned a checkmark, reload retained the rules, and per-interface readback verified the displayed order and destinations. Two overly broad gateway destinations caught during form readback were corrected before Apply. Built-in automatic rules were not altered; no claim is made that the custom host-specific HTTPS rule replaces the automatic anti-lockout protection. Host Windows Firewall was not changed. VPN/WAN and syslog configuration remain pending. DNS/NTP firewall permissions do not establish service listening scope or guest resolution/time behavior.

Screenshot: C:/Users/jesse/AppData/Local/Temp/opnsense-mgmt-rules-20261028.jpg. Next: configure/check DNS and NTP service scope, then create WIN-LAB. Do not claim network enforcement until controlled allowed/denied connections are observed with services active.
