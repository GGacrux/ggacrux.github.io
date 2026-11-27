# GGacrux Labs — Design & Publishing Skill

## Purpose
This is the source of truth for the visual, editorial, and implementation standards of **labs.ggacrux.ca**. Apply it whenever creating, editing, reviewing, or extending any page, article, component, or asset in this repository. The goal is a coherent research publication that feels like one carefully maintained product—not a collection of unrelated microsites.

## 1. Design reference
Use the established page at `/ggacrux-labs-autoaisociety/` as the canonical visual reference: dark, restrained, editorial, technical, spacious. Use the deep-sky background, subtle radial illumination and faint star-field texture, hairline borders, quiet surfaces, restrained blue accents, and precise metadata. Create visual interest with typography, spacing, and hierarchy—not unnecessary decoration.

### Design tokens
Keep tokens centralized in `assets/css/research.css`; do not introduce competing palettes.

| Token | Standard |
| --- | --- |
| Background | `#070a10` |
| Elevated surface | `#0c1019` |
| Surface | `#101622` |
| Hover surface | `#151d2c` |
| Primary text | `#eef1f6` |
| Secondary text | `#a5b0c2` |
| Muted text | `#6b7689` |
| Accent | `#8cc8ff` |
| Accent wash | `rgba(140, 200, 255, 0.12)` |
| Hairline border | `rgba(255, 255, 255, 0.09)` |
| Strong border | `rgba(255, 255, 255, 0.18)` |

Signal colors are reserved for meaningful states only: good `#6ee7b7`, warning `#fcd34d`, alert `#fda4af`. Never use them decoratively.

## 2. Typography — preserve exactly
Do not replace the established type system or add font families:
- **Inter** — interface, body copy, navigation, controls, general UI.
- **Newsreader** — editorial headlines, section titles, long-form article headings.
- **JetBrains Mono** — labels, dates, metadata, technical values, tags, annotations.

Load the existing Google Fonts stylesheet once from the shared layout. Use system fallbacks. Do not load fonts separately on individual pages, self-host duplicate font files, or introduce icon fonts.

## 3. Layout and components
- Shared site shell belongs in `_layouts/default.html`: page width, navigation, footer, font loading, stylesheet, and shared script.
- Keep the centered content width (approximately 980px including side padding).
- Keep navigation, numbered section kickers, typography, borders, and link behavior consistent.
- Use generous section spacing and a clear reading measure; long-form text should be narrower than the overall page.
- Reuse existing classes and patterns before creating new ones. Document new reusable patterns in CSS comments.
- Responsive behavior is mandatory: collapse multi-column layouts on narrow screens and prevent horizontal overflow.
- Interactive controls need visible focus states, keyboard access, labels, and adequate contrast.
- Respect reduced-motion preferences. Motion must be subtle and never required to understand content.

## 4. Minimal asset policy
The publication should remain lightweight.
1. Before adding an asset, consider whether CSS, text, or a small inline SVG can achieve the same result.
2. Do not add stock photography, decorative hero images, background video, icon packs, animation libraries, CSS frameworks, or JavaScript frameworks without a clear editorial or functional need.
3. Do not add a dependency for a one-off visual effect.
4. Reuse existing assets where appropriate and licensed.
5. If a content image is genuinely necessary, optimize it, use an appropriate modern format, provide intrinsic dimensions and descriptive alt text, and include a caption/source where relevant.
6. Avoid tracking pixels, remote embeds, and third-party scripts. Any exception requires a documented reason and privacy review.
7. Keep JavaScript progressive and minimal. Prefer native HTML and CSS; retain the existing search/filter behavior in the shared script.

## 5. Publishing and repository structure
- The root homepage is the publication index.
- Existing standalone research pages in root-level topic folders (for example, `ggacrux-labs-autoaisociety/index.html`) are valid publications. Preserve their URLs unless an explicit migration plan is approved.
- Register standalone folder publications in `_data/publications.yml`. Each entry needs a human-readable title, site-relative URL, concise factual excerpt, category, kind, and useful tags. The homepage reads this data file and Jekyll's `_posts` collection, so folder-based work appears in the library without duplicating the article.
- New dated editorial pieces belong in `_posts/YYYY-MM-DD-short-title.md` and use the shared `post` layout.
- Keep drafts out of the public index. Do not invent article content, findings, citations, dates, or author claims to make the library look populated.

Suggested post front matter:
```yaml
---
layout: post
title: "A precise, descriptive title"
subtitle: "Optional one-sentence framing"
date: YYYY-MM-DD
category: Research
tags: [AI, systems, verification]
summary: "A concise statement of the question and the article's contribution."
sources:
  - title: "Primary source title"
    url: "https://example.com/"
---
```

## 6. Editorial integrity
GGacrux Labs is an independently authored research journal, not an automated content farm.
- Distinguish sourced facts, direct observations, experiments, interpretations, and opinions.
- Link primary sources and attribute external work.
- State scope, assumptions, limitations, and uncertainty where they matter.
- Do not imply endorsement by a referenced company or researcher.
- Never fabricate experiments, benchmarks, quotations, citations, or personal experience.
- Do not publish generated filler or placeholder content as completed research.

## 7. Technical standards
- Keep the site compatible with GitHub Pages and the repository's Jekyll configuration.
- Prefer semantic HTML and valid Liquid templates.
- Use relative URL filters for internal links and assets.
- Keep shared CSS in `assets/css/research.css` and shared behavior in `assets/js/research.js`.
- Avoid inline page-specific CSS/JS unless a page has a genuinely isolated requirement; prefer shared reusable classes.
- Do not introduce build steps, packages, or plugins without checking GitHub Pages compatibility.
- Preserve the existing custom domain and canonical URL configuration.

## 8. Definition of done
- [ ] Page follows the established palette, typography, spacing, and editorial style.
- [ ] Inter / Newsreader / JetBrains Mono remain unchanged.
- [ ] No unnecessary images, libraries, fonts, or scripts were added.
- [ ] Navigation, internal links, search, and publication links work.
- [ ] Layout is usable on mobile and desktop; keyboard focus is visible.
- [ ] Existing research content and published URLs remain intact.
- [ ] New folder-based publications are registered in `_data/publications.yml`.
- [ ] Claims and sources are accurate; no placeholder content is presented as research.
- [ ] GitHub Pages/Jekyll build succeeds.

**When in doubt:** preserve the established design and existing content, choose the smallest implementation, and do not invent.
