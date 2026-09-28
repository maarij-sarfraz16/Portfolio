# Maarij Sarfraz — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Editing content

All copy and data live in two files — components don't need to change.

- `src/content/site.ts` — name, role, site URL, email / LinkedIn / GitHub, optional portrait.
- `src/content/work.ts` — projects, experience and skills.

Search for `TODO(Maarij)` to find everything still missing. Placeholder contact
links render with a visible dashed "placeholder" tag until they're replaced.

Optional fields render only when filled in:

- Projects: `role`, `year`, `links`, `image` (put screenshots in `public/work/`).
- Experience: `period`, `summary`.
- Portrait: add a square photo to `public/` and set `site.portrait`.

## Structure

```
src/app/            layout (metadata, fonts), page, icon, Open Graph image
src/components/     nav + reveal observer (client), everything else server-rendered
src/components/sections/  hero, about, work, experience, skills, contact
src/content/        editable data
```
# Portfolio
