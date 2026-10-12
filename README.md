# Muheng Li — Personal Research Site

Public academic homepage for **Muheng Li / 李沐恒**, using **Astro + Markdown + GitHub Pages**.

Production domain: **https://muhengli.dev**  
Intended repository: **bill810975/bill810975.github.io**

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Build: `npm run build`. The generated site is in `dist/`.

## Content

- `src/pages/` — site pages and project routes
- `src/data/projects.ts` — project summaries (from the supplied CV)
- `src/content/blog/*.md` — blog entries
- `src/content/notes/*.md` — technical notes
- `src/styles/global.css` — visual styles and responsive rules

To publish an entry, add a Markdown file with `title`, `summary`, `date`, `tags`, and `draft: false` in its frontmatter. Setting `draft: true` removes it from the published site.

## GitHub Pages deployment

1. Create a **public** GitHub repository named `bill810975.github.io` under account `bill810975`.
2. Push the contents of this project to the repository's `main` branch.
3. Open repository **Settings → Pages** and set source to **GitHub Actions**.
4. The workflow `.github/workflows/deploy.yml` builds Astro and uploads `dist/` to GitHub Pages.
5. Under **Settings → Pages → Custom domain**, enter `muhengli.dev`. For Actions-based publishing, GitHub ignores a `CNAME` file in the repository; the domain must be set in Pages settings.
6. **Only after the custom domain is saved in GitHub**, add Cloudflare DNS for the GitHub Pages host and disable proxy during initial certificate provisioning. Enable **Enforce HTTPS** when available.

### Cloudflare DNS (apex)

Preferred GitHub-documented IPv4 records:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | bill810975.github.io | DNS only |

Cloudflare CNAME flattening can also be used for the root domain, but native A records make configuration explicit. See https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Privacy

The original CV PDF includes personal contact details and **must not be committed or uploaded**. The site contains only public, redacted summaries. Email addresses, phone numbers, and student identification numbers are excluded from source, public assets, and built output.

There is no photo, form, third-party analytics, or client-side tracking.

## Editing considerations

The first blog and notes entries are **draft website starter copy generated for this initial site**. Review them for authorial voice before treating them as final research writing. Ongoing projects intentionally do not disclose private results.
