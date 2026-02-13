# openvisus.github.io

Website for [OpenVisus](https://github.com/sci-visus/OpenVisus) — high-performance big data analysis and visualization.

## Structure

Each section lives in its own HTML file for easier maintenance:

| File | Content |
|------|---------|
| `index.html` | Home — Hero, headline, call-to-action |
| `about.html` | What It Is — Overview, IDX format, key features |
| `how-it-works.html` | How It Works — Data production → delivery → visualization |
| `examples.html` | Examples — Dashboards, Jupyter notebooks, cookbooks, IEEE SciVis Contest |
| `community.html` | Community — NSDF collaborations, CHESS, SDSC, and data democratization |
| `downloads.html` | Downloads — Nightly builds, Docker, Python, PIDX |
| `support.html` | Support & Contact — Documentation, GitHub, Wiki, quick install, contact form |
| `team.html` | Team — Customize with team members |

Shared layout (nav, footer) is duplicated in each file. When adding or changing nav links, update all page files.

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io/):

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy its form ID
3. In `support.html`, replace `YOUR_FORM_ID` in the form `action` attribute:
   ```html
   action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID"
   ```

## Local Development

Serve the site locally:

```bash
# Python 3
python -m http.server 8000

# or npx
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000).

## Deployment

This repository is set up for GitHub Pages. Push to `main` and the site will be published at [openvisus.org](https://openvisus.org) (via CNAME).
