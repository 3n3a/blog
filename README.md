# 3n3a's Blog

Source of [blog.3n3a.ch](https://blog.3n3a.ch), built with [Astro](https://astro.build) (based on the official blog starter) and styled to match [3n3a.ch](https://3n3a.ch).

## Development

Requires Node.js `>=22.23.4` (see `.tool-versions` / `.node-version`).

```sh
npm install
npm run dev       # dev server on http://localhost:4321 (drafts are visible here)
npm run build     # static build into dist/
npm run preview   # serve the build locally
npm run check     # type-check .astro / .ts files
```

## Writing posts

Posts live in `src/content/blog/` as `.md` or `.mdx`. Images can sit next to the post and be referenced relatively (`./image.png`), or go in `public/img/`.

```md
---
title: "My post"
date: 2025-01-31 12:00
draft: false            # drafts are excluded from the production build
authors: enk
tags: [tag-one, tag-two]
slug: custom-url        # optional, defaults to the file path
description: "..."      # optional, defaults to the text before <!--truncate-->
---

Intro shown on the index page.

<!--truncate-->

Rest of the post.

:::warning
Docusaurus-style admonitions (note, tip, info, warning, caution, danger) still work.
:::
```

The URL is the file path without extension (`servicenow/cad-exam-prep.md` → `/servicenow/cad-exam-prep`, `foo/index.md` → `/foo`), unless `slug` is set. This keeps the URLs from the old Docusaurus version.

## Deployment (Cloudflare Pages)

- Build command: `npm run build`
- Build output directory: `dist`
- Node version comes from `.node-version` (or set `NODE_VERSION` in the Pages settings)

`public/_redirects` maps the old Docusaurus `/atom.xml` feed to `/rss.xml`.
