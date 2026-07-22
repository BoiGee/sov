# Sterling Vance LLP — Legal Services Web App

A two-sided legal services application: a public marketing site and a
secure client portal (with a matching firm-side workspace) for tracking
legal matters in real time. See [SECURITY.md](./SECURITY.md) before
pointing this at any real client data.

## Build status

Being delivered in milestones, each checked in before moving on:

1. **Project scaffold** — done (this milestone)
2. Database schema + migrations + seed data — not started
3. Auth + role-based access control — not started (config skeleton only)
4. Public marketing site content — not started (route stubs only)
5. Client portal (read-only) — not started (route stubs only)
6. Firm-side workspace (make it live) — not started (route stubs only)
7. Lead intake → inbox → convert-to-matter — not started (form UI disabled)
8. Notifications (email) — not started
9. Polish pass (empty/error/loading states, mobile QA) — not started

Every stub page in the app says, in place, what milestone will make it
real — that's intentional so the site is reviewable end to end at every
stage rather than half-broken.

## Tech stack

- **Next.js 16** (App Router) + TypeScript, Turbopack
- **Tailwind CSS v4** — two theme scopes (`.theme-marketing` dark
  navy/library-green/brass, `.theme-portal` light "ledger paper") driven by
  CSS custom properties in `src/app/globals.css`, so components never
  branch on which site they're in
- **Prisma ORM 7** targeting PostgreSQL, via the `@prisma/adapter-pg`
  driver adapter (portable across Neon, RDS, Supabase, or local Postgres)
- **Auth.js (NextAuth v5)** — Credentials (email/password) + Resend-based
  magic link, roles: `client` / `attorney` / `staff` / `admin`
- **Storage**: `src/lib/storage` defines a `StorageProvider` interface,
  implemented against the S3 API (works unmodified against AWS S3,
  Cloudflare R2, or local MinIO)
- **Email**: Resend
- **Rate limiting**: Upstash Redis + `@upstash/ratelimit`
- **Validation**: zod (added per-form/route as they're built)

Hosting target: Vercel (app) + Neon (Postgres), both free-tier friendly to
start.

## Local setup

Prerequisites: Node.js 20.9+ (Node 24 recommended), npm, a PostgreSQL
database (local, Docker, or a free Neon project).

```bash
npm install
cp .env.example .env   # then fill in real values, see below
npx prisma generate    # regenerates src/generated/prisma after schema changes
npm run dev
```

Open http://localhost:3000.

### Environment variables

See [.env.example](./.env.example) for the full list with explanations.
Nothing is required to boot `npm run dev` and browse the route stubs —
`DATABASE_URL`, `RESEND_API_KEY`, the S3 vars, and the Upstash vars only
become necessary once their respective milestone wires them up. Prisma
itself needs `DATABASE_URL` starting in Milestone 2.

### Database migrations & seed data (from Milestone 2 onward)

```bash
npx prisma migrate dev   # create/apply a migration from prisma/schema.prisma
npx prisma db seed       # run prisma/seed.ts
```

`prisma/seed.ts` will populate placeholder demo content (the "Sterling
Vance LLP" firm, fictional attorneys, sample matters) — kept clearly
separate from real firm data so it's obvious what to delete before this
goes live with a real client's information.

## Project structure

```
src/
  app/
    (marketing)/   public site — dark theme
    (portal)/      client portal — ledger-paper theme, auth-gated (M3)
    firm/          attorney/staff/admin workspace — ledger-paper theme, auth-gated (M3)
    login/         shared sign-in page (outside the auth-gated groups)
    api/auth/      Auth.js route handler
  components/
    ui/            design-system primitives (Button, Card, Tabs, ...)
    marketing/      marketing-site-specific components
    portal/         Docket Board, Case Timeline, ...
  lib/
    prisma.ts       Prisma client singleton (driver adapter)
    auth.ts         Auth.js config
    rbac.ts         role/ownership check placeholder (M3)
    storage/        StorageProvider interface + S3 implementation
    email/          Resend wrapper
    rate-limit.ts   Upstash rate limiters
  proxy.ts          route gating (Next.js 16 renamed `middleware` to `proxy`)
prisma/
  schema.prisma     datasource + generator only until Milestone 2
```

## What's a placeholder vs. real, right now

- All copy, attorney names, and the firm name are placeholder demo
  content — see `src/lib/content/`.
- The `(portal)` and `firm/*` routes render fixed placeholder rows, not
  real data, and are **not** access-controlled yet.
- The contact form and firm-side action buttons are visually complete but
  disabled — no server action is wired up yet.
- Auth.js has providers declared but no database adapter, no password
  check, and no MFA yet.

## Not built at all yet (flagged from the original spec)

Payment processing, e-filing integration, e-signature, and SMS
notifications were never in scope for this build and have no scaffolding
in place — flagging here so they aren't mistaken for oversights later.
