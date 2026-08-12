# UofT Blockchain Society Website

Official website for the University of Toronto Blockchain Society.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, ready to deploy on **Vercel**.

## Pages

- `/` — Home (hero, mission, partners ticker)
- `/events` — Upcoming and past events
- `/team` — Executive team and associates

## Local development

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Updating content

Content lives in typed data files (no HTML edits required):

- [`lib/data/partners.ts`](lib/data/partners.ts) — partner logos
- [`lib/data/team.ts`](lib/data/team.ts) — team groups and members
- [`lib/data/events.ts`](lib/data/events.ts) — past events and photos
- [`lib/data/social.ts`](lib/data/social.ts) — social links and Telegram CTA
- [`lib/data/nav.ts`](lib/data/nav.ts) — navigation and footer links

Images live in [`public/assets`](public/assets).

## Deploy to Vercel

### Option A — GitHub integration (recommended)

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project** and import this repo.
4. Leave the defaults (Framework: Next.js, Build Command: `next build`, Output: `.next`).
5. Click **Deploy**.

Every push to `main` will auto-deploy.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to link the project and deploy. Use `vercel --prod` for production.

## Custom domain (`uoftblockchain.ca`)

The site previously used GitHub Pages with a `CNAME` file. On Vercel, domains are managed in the dashboard:

1. Open your Vercel project → **Settings** → **Domains**.
2. Add `uoftblockchain.ca` and `www.uoftblockchain.ca` (optional).
3. At your domain registrar, update DNS as Vercel instructs, typically:
   - **A record** for apex `@` → `76.76.21.21`
   - **CNAME** for `www` → `cname.vercel-dns.com`
4. Remove any GitHub Pages DNS records (A/CNAME pointing at GitHub).
5. Wait for DNS propagation and SSL provisioning (usually a few minutes to a few hours).

Once DNS points at Vercel, the GitHub Pages site can be disabled in the repo Settings → Pages.

## Project structure

```
app/                 # App Router pages and layout
components/          # Shared UI (Header, Footer, ticker, carousel, team)
lib/data/            # Typed content (team, events, partners, nav)
public/assets/       # Static images and logos
```
