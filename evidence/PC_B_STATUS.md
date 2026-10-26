# PC B — status

Updated 2026-10-26. Observations on PC B; this is not approval for PC A to start.

- Interactive diagram added in `docs/network-lab.html`. The application choice is pending; the controls and network paths in the diagram are proposals, not live test results.
- TrueNAS 25.10.7, Ubuntu 26.04.1 **Desktop**, and Alpine Virtual 3.24.3 ISO files were located. Each local SHA-256 matches the corresponding publisher checksum.
- PC B has 15.29 GiB usable RAM. About 4.41 GiB was available at the check, before starting Alpine; this is a snapshot, not a simultaneous-load test. TrueNAS's documented VM minimum remains 8 GiB.
- A new SW-B VMware guest was created with 512 MiB RAM, one vCPU and a new 2 GiB virtual disk. The Alpine ISO reached the live environment login prompt. Alpine has **not** been installed to the disk. The guest currently has no network adapter; switch/VLAN configuration and tagged-Ethernet tests have not been performed.
- PC B's user chose Ubuntu Desktop with 4 GiB and TrueNAS with 6 GiB for a lab test. With Alpine at 0.5 GiB, the planned total is 10.5 GiB. TrueNAS's 6 GiB is below its documented 8 GiB VM minimum; Ubuntu Desktop's 4 GiB is below Ubuntu 26.04's 6 GB comfortable-use recommendation. Both require real startup and workload testing. Neither VM has been started or installed for this project; the application remains undecided.
- No VPN, firewall, network integration, NAS restore or simultaneous-load test has been completed. Existing unrelated VMs were not started.
