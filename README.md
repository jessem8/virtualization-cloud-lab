# Virtualization and Cloud laboratory

Secure student lab on two physical PCs. Current application target: **InvoiceShelf 2.4.7 with local SQLite** on Ubuntu B. The deployment and live network checks remain pending; the application guide and machine plans now match this choice.

## Interactive presentation

Run `powershell -NoProfile -File diagram/start.ps1` and open http://127.0.0.1:3187/. The desktop presenter is in French: click a component to inspect its cutaway, use **Retour au réseau** to return, or follow an application, VPN, backup or monitoring path. **F** toggles full screen.

- [Presenter source](docs/network-lab-3d.html)
- [Usage, design and configuration truth](docs/DIAGRAM_DESIGN.md)
- [Actual diagram verification and limits](evidence/DIAGRAM_VERIFICATION.md)
- [Standalone network SVG](docs/network-lab-2d.svg)
- [Earlier diagram from B](docs/network-lab.html)

The animations explain expected paths; they are not live traffic or evidence of successful security tests. Assets and fonts are local. The server listens only on 127.0.0.1.

## Plan and coordination

Work directly on `main`. Keep the shared plan and current status in this repository; use GitHub issues for requests between machines. PR #1 is merged and retained only as history.

- [Project decisions and current limits](PROJECT_STATE.md)
- [Work plan](BUILD_PLAN.md)
- [Architecture review](docs/ARCHITECTURE_REVIEW.md)
- [Application: InvoiceShelf 2.4.7](docs/APP.md)
- [Machine A: OPNsense, Windows and VPN](docs/MACHINE_A.md)
- [Machine B: TrueNAS, Ubuntu, monitoring and switch](docs/MACHINE_B.md)
- [Addressing, VLANs and access rules](docs/LIAISON.md)
- [Live test matrix: unrun](docs/TEST_MATRIX.md)
- [GitHub coordination](docs/COORDINATION.md)
- [A's verified configuration and remaining work](evidence/PC_A_STATUS.md)
- [B's last reported preparation; fresh status requested](evidence/PC_B_STATUS.md)

A hosts OPNsense and Windows. B hosts SW-B, Ubuntu and TrueNAS. A dedicated Ethernet trunk carries tags 20/30. CLIENTS and MGMT are separate non-tagged networks. Ubuntu→NAS must cross OPNsense on A in VLAN 20 and return to B in VLAN 30.

PC A configuration is underway: OPNsense 26.7.7 is installed, management/VLAN addresses are configured, and 35 lab firewall rules have been applied and read back. Windows, VPN and guest/cross-PC traffic tests remain pending. See A's evidence above. No peer or PR approval is pending. B reports TrueNAS at 6 Gio prepared / 8 Gio target and Ubuntu Desktop at 4 Gio prepared / 2.5 Gio target. Physical RAM and simultaneous capacity are unverified. Joint tests begin after both sides report ready.

Keep credentials, private keys, VPN profiles, sensitive exports and VM images out of Git.
