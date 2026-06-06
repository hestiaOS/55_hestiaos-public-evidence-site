# Deployment Runbook

## Local Development

```bash
pnpm dev
```

Opens at http://localhost:3000

## Build

```bash
pnpm build
```

## Production Start

```bash
pnpm start
```

## Vercel Deployment (Recommended)

1. Push the repository to GitHub
2. Import the project in Vercel
3. Vercel auto-detects Next.js
4. No environment variables required for the public site

## Pre-Deployment Checklist

- [ ] Run `pnpm build` and verify no errors
- [ ] Run `pnpm lint` and verify no warnings
- [ ] Review all pages for unredacted content
- [ ] Verify all synthetic examples are marked
- [ ] Verify all limitations are stated
- [ ] Check no absolute local paths in source
- [ ] Check no private references in content files
