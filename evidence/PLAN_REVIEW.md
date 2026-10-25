# Planning review evidence

Updated2026-10-25. Current task changes documents and GitHub only.

## Inputs

The user-supplied four PDFs (36pages), assignment and prior workshop/grid evidence were reviewed previously. They are proposals, not proof of correctness. Original Downloads files remain unchanged; current repository PDF copies/exports/tooling are removed at the user's request. Their previous revision remains in Git history.

Latest requirements: replace the tutorial app with a useful open-source service, move more actual work to B, keep two PCs and all required controls, use Markdown only, update the existing PR and leave commit comment ".".

## Decisions

- A7/B11GiB: move Ubuntu, application, monitoring and switching to B; keep OPNsense/Windows/VPN on A. Same five guests and18GiB total.
- Physical trunk20/30 replaces the private trunk/storage-only cable. Check it in the first20-30minutes of approved network work. B hardware/headroom remain unverified.
- Gitea was rejected before publication. The user chose a lightweight inventory/documents mix: Homebox rootless/SQLite with a small HTTPS proxy, no externalDB/worker/newVM. Official docs, non-prerelease release and exact rootless image tag/digest were retrieved read-only.
- Keep the required tutorial as a short stopped exercise; add useful equipment-record/attachment/login/persistence and NAS backup evidence.
- Architect reviewed this allocation and supports it as the simplest balanced implementation split preserving NAS isolation.

## Verification

Before push: check all Markdown links and current allocation/ownership/ports; ensure no tracked PDFs/export tools; compare original input hashes with the previous manifest; inspect staged changes/exclusions. No deployment, image pull, Docker build or live test is part of this revision.

The final verification results and remote commit/comment are recorded in the task receipt and PR. Native hook binding is not independently verified.

## Remaining obligations

All runtime test rows remain unrun. Physical tags, current hardware, resource smoothness, Homebox behavior/security, NAS recovery and VPN must be tested after approval of the current revision.
