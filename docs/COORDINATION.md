# Coordination

Use this private repository and its single planning PR to coordinate the two Codex instances and their human owners. Until the planning PR merges, its exact current head commit is the shared plan; the default branch is only a scaffold. Both the previous and incoming plans remain provisional until the current PR revision is reviewed.

## Starting work

Machine A (`jessem8`) may start its assigned implementation after Machine B (`sanadzhioua`) gives a standard GitHub Approve review or a plain PR comment explicitly authorizing A to start on the current revision. Record the exact reviewed commit SHA and keep it as the plan revision after merge. A material topology or security change requires review of the updated revision; routine evidence or status updates do not. No second approval is needed after merge.

Machine B starts its assigned work only after its human owner/user or an authorized peer explicitly authorizes it. A direct human instruction in that Codex's chat counts. An explicit later instruction from the human user can also authorize work.

Before authorization, limit work to documentation and read-only host inventory. Do not create or boot guests, install software, or change VM, virtual-network, host-network, or firewall configuration. The user has authorized short, project-related coordination comments and reviews in this repository; that does not authorize unrelated messages. Do not use automated approvals, provisioning, or polling. Keep credentials, keys, VPN profiles, recovery keys, and other secrets out of posts.

## Ownership and updates

Each machine owner stays within their assigned scope. Do not edit shared plan or interface files concurrently; coordinate a change before building against different versions. Preserve the other owner's work; do not reset it or change unrelated VMs. The two-machine split does not establish additional team members or responsibilities.

Post short progress or blocker updates with the current PR revision and actual evidence. Include measured host resources and relevant addresses/configuration, and distinguish expected from observed results. Mark unrun checks as unrun; a script alone does not show that a live test passed. Machine B's 16 GB RAM figure remains an unverified assumption until measured.

When local checks are complete, each Codex can say **ready for joint tests** and give the supporting evidence. People coordinate timing and scope after both sides are ready; no extra approval ritual is needed for those joint tests.

Readiness concerns the next agreed test, not necessarily the whole machine. The first joint test is the physical VLAN trunk after only the minimal network setup; do not wait for Vikunja/NAS services before checking this dependency.
