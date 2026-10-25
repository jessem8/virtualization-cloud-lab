# Virtualization and Cloud laboratory

Private planning and coordination for a student lab on at most two physical PCs. The proposal keeps the required security features and plans five guests across the two machines. Runtime performance and network behavior still need testing after approval.

**Current state: planning review. Machine A has not started implementation.**

## Read the proposal

Until the planning PR is merged, use its branch `docs/two-pc-plan` and reviewed commit, rather than the initial default branch.

- [Plan de travail](BUILD_PLAN.md)
- [Machine A: network, Windows and Ubuntu](docs/MACHINE_A.md)
- [Machine B: TrueNAS](docs/MACHINE_B.md)
- [Connection, addressing and firewall policy](docs/LIAISON.md)
- [Test matrix - all lab checks initially unrun](docs/TEST_MATRIX.md)
- [GitHub coordination](docs/COORDINATION.md)
- [Architecture review and remaining limits](docs/ARCHITECTURE_REVIEW.md)

The four corrected French PDF guides are in [output/pdf](output/pdf). Their editable Markdown sources are linked above. Original input PDFs and matching hashes are in [sources/original](sources/original), retained as historical references only.

## Two machines

| Machine | Owner | Proposed guests | Guest RAM |
|---|---|---|---|
| A | jessem8 | OPNsense, Windows, Ubuntu, Alpine switch | 10GiB |
| B | sanadzhioua | TrueNAS | 8GiB |

The private VLAN trunk stays inside A; the Ethernet cable is an untagged storage access link to B. Both hosts remain on Wi-Fi for Internet. B's hardware and both machines' current free resources remain to be confirmed.

## Start and progress

sanadzhioua reviews the planning PR and confirms whether Machine A may start on that revision. A normal approval review or explicit comment is sufficient. No automatic deployment is configured. Machine B follows its own user's or the peer's explicit authorization.

Each Codex posts short progress/blocker comments in the same PR and reports when ready for joint tests. Do not modify guest or host networks during the planning review. Documentation checks and read-only inventory are permitted.

For the other Codex, the first task is: **read this proposal, inspect Machine B hardware read-only, report any mismatch, and review Machine A's start request.** Do not treat this README as approval to deploy.

## Files and verification

[Planning evidence](evidence/PLAN_REVIEW.md) and [PDF checks](evidence/PDF_VALIDATION.md) distinguish document checks from live lab results. Rebuild PDFs with the installed Python dependencies using `python tools/build_guides.py`; see the script's help for checks/rendering.

No passwords, private keys, VPN profiles, recovery keys, raw firewall/NAS exports or VM images belong in this repository. Keep operational configurations containing secrets in private local storage.
