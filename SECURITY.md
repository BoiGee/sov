# Security Notice

This application is being built to hold **confidential legal client data**
(matter details, documents, messages between clients and their attorneys).
Treat everything in this repository as pre-production until the checklist
below is complete — do not point it at real client data before then.

## Status: Milestone 1 (scaffold)

No security-relevant logic exists yet beyond intent baked into the
architecture. Specifically, as of this milestone:

- There is **no authentication enforcement**. The `(portal)` and `firm/*`
  routes render placeholder data and are not gated by `src/proxy.ts` yet —
  the banner on those pages says so explicitly.
- There is **no role-based access control**. `src/lib/rbac.ts` is a
  placeholder that throws if called.
- There are **no database models**, so there is nothing to leak yet — but
  also no ownership checks to verify.
- Document storage (`src/lib/storage`) is stubbed against the S3 API but
  not connected to any real bucket or access-control policy.
- Rate limiting (`src/lib/rate-limit.ts`) is configured but not yet applied
  to any route.

## What real production use will require, beyond finishing the build

Building the features correctly is necessary but not sufficient. Before
this application handles real client data, the firm should also arrange:

1. **An independent security/compliance review** by someone who did not
   write the code — including a review of state bar rules on client data
   handling and attorney advertising for every jurisdiction the firm
   practices in.
2. **Penetration testing** against the deployed application, not just the
   source code.
3. **Vendor data-processing agreements** (a BAA-equivalent for legal
   services) with every third party that will touch client data: the
   hosting provider (Vercel), database provider (Neon or equivalent),
   object storage provider, and email provider (Resend). Read each
   vendor's DPA/subprocessor terms — don't assume a generic "enterprise
   plan" satisfies a law firm's confidentiality obligations.
4. **A records-retention and deletion policy** for closed matters,
   agreed with the firm, not assumed by the engineering team.
5. **Incident response and breach-notification procedures**, since legal
   client data carries specific notification obligations in most
   jurisdictions.

## Security properties this build targets (tracked per milestone)

- Every API route/server action enforces both authentication *and*
  ownership (a client must never reach another client's matter by
  guessing an ID) — lands in Milestone 3.
- Document downloads only ever go through short-lived signed URLs, never
  permanent public storage links — interface is in place (Milestone 1),
  wired to real routes in Milestone 6.
- Passwords hashed with bcrypt; MFA required for attorney/staff/admin
  roles — lands in Milestone 3.
- All mutating actions (status changes, visibility changes) get an audit
  log entry — lands alongside the relevant model in Milestone 2/6.
- CSRF protection and zod validation on every form/API boundary.
- Rate limiting on auth endpoints and the public intake form — configured
  in Milestone 1, applied in Milestone 3/7.

## Reporting a concern

This is an internal project repository, not a public product with a
disclosed vulnerability program. If you find a security issue, raise it
directly with the project owner rather than filing a public issue.
