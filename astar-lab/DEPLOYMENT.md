# Cloudflare Pages deployment

This pilot uses the Git-connected Cloudflare Pages project `jianwenxin-astar-lab`.

- GitHub repository: `jianwenxin/Study`
- Production branch: `main`
- Preview branch: `feat/astar-lab-pilot`
- Build command: none (plain HTML, CSS, JavaScript)
- Root directory: repository root
- Build output directory: `astar-lab`
- Expected production URL (after merging and successful deployment): https://jianwenxin-astar-lab.pages.dev

## Verification checklist

1. Confirm GitHub Actions tests pass on PR #2.
2. Confirm a Cloudflare preview build reports success and serves the interactive page.
3. Manually draw obstacles, set start/goal, run A*, and verify the path appears.
4. Review and approve PR before merging into `main`.
5. Confirm production deployment succeeds, then check the production URL.

Only the main-branch merge should publish to the production domain.
