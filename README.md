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

## Meeting and demonstration

- [Meeting plan: startup, first trunk test and remaining work](BUILD_PLAN.md)
- [Judgment-day scenario and rehearsal](docs/UNDERSTAND_AND_PRESENT.md)
- [Project checkpoint](PROJECT_STATE.md) and [coordination](docs/COORDINATION.md)
- [Machine A](docs/MACHINE_A.md), [Machine B](docs/MACHINE_B.md), [network and firewall](docs/LIAISON.md), [InvoiceShelf](docs/APP.md)
- [Test matrix](docs/TEST_MATRIX.md), [A evidence](evidence/PC_A_STATUS.md), [B evidence](evidence/PC_B_STATUS.md)

The last observations are dated 28 October. Start the VMs needed for the joint VLAN test and confirm current network state together. Keep credentials, private keys, VPN profiles, sensitive exports and VM images out of Git.
