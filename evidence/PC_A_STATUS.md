# Machine A configuration evidence

Updated 28 October 2026, Africa/Tunis.

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
