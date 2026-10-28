# Coordination

Work directly on main, as requested by the user on 28 October 2026. PR #1 was merged on 27 October and is historical. Keep the plan, brief progress updates and actual evidence in repository files; use GitHub issues for requests between machines. No new branch or PR is required for routine project work.

## Work order

1. Finish the presenter and align the repository documents. This stage does not change guests or networks.
2. Configure PC A (`jessem8`) in the next task, under the user's direct authorization from 27 October. No peer or PR approval is pending.
3. Finish PC B (`sanadzhioua`) with Sanad, after the person responsible for B authorizes its changes. Confirm the prepared VM allocations against available host resources.
4. Start joint tests after both sides report ready. Begin with the VLAN 20/30 trunk for 20–30 minutes; capture an error and stop to diagnose if it fails.
5. Continue with the agreed network, application, NAS, VPN, monitoring and restore checks.

## Updates

Each owner stays within their machine scope and preserves the other owner's work. Fetch/pull the latest main before work and reconcile concurrent changes before pushing scoped commits; never force-push shared history. Update PROJECT_STATE.md and the relevant evidence/PC_A_STATUS.md or evidence/PC_B_STATUS.md. Distinguish observed evidence from planned or unrun checks. Re-review substantial topology or security changes before applying them. Keep credentials, private keys, VPN profiles and sensitive exports out of Git. No automated approval or polling is needed.
