# Architecture review

Updated 27 October 2026. This is the current target architecture; guest, network and application behavior still require live verification. The user authorized PC A configuration in the next task. PC B will be finished with Sanad, and joint tests start when both sides report ready.

## Two-PC split and resources

| PC | Guest targets | Current resource evidence |
|---|---|---|
| A — jessem8 | OPNsense 3 Gio; Windows 4 Gio | Available host RAM and disk space must be checked before work. |
| B — sanadzhioua | TrueNAS 8 Gio; Ubuntu 2.5 Gio; SW-B 0.5 Gio | B reports TrueNAS prepared at 6 Gio and Ubuntu Desktop at 4 Gio. Physical RAM and usable headroom remain unverified. |

The five guests and 18 Gio are plan allocations, not proof that they can all run together. Confirm B’s actual capacity and prepared guest settings before changing allocations; see [B’s status](../evidence/PC_B_STATUS.md).

## Network separation

A uses VMnet10 for untagged Windows clients, VMnet13 for untagged MGMT at 10.77.99.0/24, and VMnet12 bridged to its dedicated Ethernet card for tagged VLANs 20 and 30. MGMT is a network, not VLAN 99.

On B, SW-B connects Ubuntu through VMnet14 as an untagged VLAN 20 access port and TrueNAS through VMnet11 as an untagged VLAN 30 access port. The physical Ethernet trunk carries only tagged VLANs 20 and 30 between the switches. Ubuntu-to-NAS traffic must go from B in VLAN 20 through OPNsense on A and back to B in VLAN 30. A shared Ubuntu/NAS VLAN was rejected because it removes this separation.

When both sides are ready, check tag transport for 20–30 minutes before configuring the services. If it fails, keep the captures and error and diagnose the specific link.

## Application and service paths

Use the official InvoiceShelf 2.4.7 image with SQLite on Ubuntu’s local persistent storage. Nginx terminates HTTPS on 8443 and forwards to the private Docker service `webapp:8080`; port 8080 is not published externally. InvoiceShelf has application accounts and roles for the fictitious-invoice and PDF demonstration. SQLite must not be stored on active SMB.

A client on A’s VMnet8 NAT network simulates the VPN’s outside path. The VPN is to reach InvoiceShelf HTTPS 8443 only; SSH 22, SMB 445 and Grafana 3001 remain denied. This does not demonstrate Internet access.

Ubuntu hosts Prometheus locally and Grafana on 3001. Prometheus collects Windows exporter metrics on 9182; OPNsense sends Ubuntu syslog over TCP 514. These paths, the application, restore, TLS and resource usage remain untested.

## Controls and recovery

Retain filtering on both OPNsense and SW-B, separate access ports, host firewalls, Windows Defender/Sysmon/audit, Ubuntu SSH/audit/logging, NAS ACLs, encryption and the restricted VPN. Review both host firewall and Docker forwarding rules for published ports.

For recovery, stop InvoiceShelf before archiving its local `storage`, `Modules` and configuration together. Transfer the consistent archive to the restricted `tank/app-backups` dataset with the dedicated backup account, then test a separate local restore copy. Keep active SQLite off SMB and secrets out of Git.

## Verification state

All live lab checks remain unrun. No VM, host network or guest was changed in this documentation update.
