# Virtualization and Cloud laboratory

Private planning for a secure student lab on two physical PCs. Current proposal: **Homebox with SQLite**, five guests, shared work across both machines. No infrastructure has been deployed by this planning task.

## Plan and tasks

Use the current head of [PR #1](https://github.com/jessem8/virtualization-cloud-lab/pull/1), branch `docs/two-pc-plan`, until reviewed and merged.

- [Plan de travail](BUILD_PLAN.md)
- [Machine A - OPNsense, Windows and VPN](docs/MACHINE_A.md)
- [Machine B - TrueNAS, Ubuntu, Homebox, monitoring and switch](docs/MACHINE_B.md)
- [Homebox setup and demonstration](docs/APP.md)
- [Addressing, VLANs and access rules](docs/LIAISON.md)
- [Test matrix - live checks unrun](docs/TEST_MATRIX.md)
- [Simple GitHub coordination](docs/COORDINATION.md)
- [Architecture review](docs/ARCHITECTURE_REVIEW.md)

Documentation is Markdown only. PDF copies, exports and generation tooling have been removed. Original input files in the user's Downloads folder were not changed.

## Allocation

| Machine | Owner | Guests | Planned guest RAM |
|---|---|---|---|
| A | jessem8 | OPNsense3GiB, Windows4GiB | 7GiB |
| B | sanadzhioua | TrueNAS8GiB, Ubuntu2.5GiB, SW-B0.5GiB | 11GiB |

This moves actual Ubuntu/application/switch work to B; total guest RAM remains18GiB. B's hardware and free memory are unverified. Ethernet carries tagged VLAN20/30; verify it at the start of approved network work and stop/report a failure promptly. Ubuntu and NAS remain separate zones.

Homebox provides equipment records, document/image attachments and maintenance tracking. Use its rootless application container, SQLite and one small Nginx HTTPS proxy; no external database or runner. GitHub remains the Codex coordination channel. The course sample is a short exercise, not another persistent application.

## Start

sanadzhioua reviews this material revision and approves or comments whether A may start. B follows its own user's or peer's explicit authorization. Both sides post brief progress/blocker comments in PR #1 and coordinate joint tests after local readiness. Documentation/read-only inventory may precede approval; guest/network changes may not.

[Review evidence](evidence/PLAN_REVIEW.md) separates source/document checks from runtime results. No credentials, keys, VPN profiles, secret-bearing exports or VM images belong in Git.
