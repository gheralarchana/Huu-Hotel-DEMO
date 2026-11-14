# HU'U Beach Front Hotel

Next.js App Router implementation of the HU'U Beach Front Hotel Stitch design.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Routes

- `/`
- `/about-us`
- `/rooms`
- `/dining`
- `/dining#facilities`
- `/gallery`
- `/location`
- `/contact`
- `/book-now`

## Vercel

Import the repository into Vercel and keep the framework preset as Next.js. The project uses the App Router and has no required private environment variables. Copy `.env.example` to the Vercel environment configuration only if a public site URL is needed.

The original Stitch HTML exports remain in `stitch_hu_u_beachfront_boutique_hotel/` as design references. The active application is under `app/` and `components/`.
