# HestiaOS Public Evidence Site

Public, read-only website for HestiaOS evidence, architecture, and governance documentation.

Built with [Next.js](https://nextjs.org), MDX, and Tailwind CSS.

## What This Site Contains

- Public architecture overview
- Kernel v0.1 freeze documentation
- Redacted benchmark evidence
- Synthetic audit & replay traces
- Demo walkthroughs
- Links to public repositories

## What This Site Does NOT Contain

- Private infrastructure details
- Credentials or tokens
- Customer data
- Live execution controls

See [Public Content Policy](docs/public-content-policy.md) for details.

## Getting Started

```bash
pnpm install
pnpm dev
```

## Before Publishing

1. Review [Redaction Checklist](docs/redaction-checklist.md)
2. Run `pnpm build` and `pnpm lint`
3. Verify no private references in source

## Deployment

This site is designed for [Vercel](https://vercel.com) deployment. Push to GitHub and import in Vercel — no environment variables required.
