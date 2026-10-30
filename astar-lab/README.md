# A* Pathfinding Lab

Interactive four-neighbor A* pathfinding demonstrator for teaching and workflow validation. Uses Manhattan distance and unit edge weights. No dependencies or user data.

## Run

Open `index.html` via a local static HTTP server (ES modules require HTTP). For example from `astar-lab/`: `python -m http.server 8000`.

## Test

`node --test astar.test.mjs` (Node.js 18+).

## Cloudflare Pages settings

- Git repository: `jianwenxin/Study`
- Production branch: `main`
- Build command: blank
- Build output directory: `astar-lab`
- Project root directory: repository root
- Preview builds: enabled for feature branches

## Workflow

Issue #1 → feature branch → tests → PR → human review → merge to main → automatic Cloudflare Pages production deployment.

This is a teaching demo, not a publication-grade benchmark. No promises of optimality beyond uniform-cost four-neighbor grids with Manhattan distance.
