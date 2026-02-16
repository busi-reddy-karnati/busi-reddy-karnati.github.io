# Busi Reddy Karnati - Personal Website

Recruiter-focused personal website for Software, Backend, Infrastructure, and Systems Engineering opportunities.

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- GitHub Actions + GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Editable Content

Update the data model in `src/data/profile.ts`:

- profile details
- role-targeted hero copy
- experience entries
- final bullets vs draft bullets
- projects and skills

## Deploy to GitHub Pages

1. Push to `main` branch.
2. GitHub Action in `.github/workflows/deploy.yml` builds and deploys `/dist`.
3. In repo settings:
   - `Settings -> Pages -> Source`: `GitHub Actions`
4. Keep `public/CNAME` set to:
   - `busireddykarnati.com`

## GoDaddy DNS for Custom Domain

Set these DNS records in GoDaddy:

- A `@` -> `185.199.108.153`
- A `@` -> `185.199.109.153`
- A `@` -> `185.199.110.153`
- A `@` -> `185.199.111.153`
- CNAME `www` -> `busi-reddy-karnati.github.io`

## Resume PDF

Place your final resume at:

- `public/Busi_Reddy_Karnati_Resume.pdf`

The Digital Resume section already links to this file.
