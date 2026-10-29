# Coordination

For the current joint evidence collection, both machines use `evidence/joint-lab-20261029`, as requested on 29 October 2026. PR #1 was merged on 27 October and is historical. Keep the plan, brief progress updates and actual evidence in repository files; use GitHub issues for requests between machines. No new branch or PR is required for routine project work.

## Work order

1. Jesse and Sanad start the needed VMs, connect the cable and configure the final endpoints together.
2. Begin with the VLAN 20/30 trunk; diagnose observed failures before dependent checks.
3. Complete services and evidence, then rehearse the demonstration. See [the meeting plan](../BUILD_PLAN.md).

## Updates

Each owner stays within their machine scope and preserves the other owner's work. Fetch/pull and reconcile the latest shared evidence branch before pushing and reconcile concurrent changes before pushing scoped commits; never force-push shared history. Update PROJECT_STATE.md and the relevant evidence/PC_A_STATUS.md or evidence/PC_B_STATUS.md. Distinguish observed evidence from planned or unrun checks. Re-review substantial topology or security changes before applying them. Keep credentials, private keys, VPN profiles and sensitive exports out of Git. No automated approval or polling is needed.
