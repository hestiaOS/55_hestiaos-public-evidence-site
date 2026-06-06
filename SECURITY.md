# Security Policy

## Scope

This repository is a **public, read-only evidence site**. It contains no runtime systems, credentials, APIs, databases, authentication mechanisms, or live execution controls.

## What This Repository Contains

- Static Next.js website source code
- Public architecture documentation
- Synthetic and redacted evidence artifacts
- Public repository references

## What This Repository Does NOT Contain

- Credentials, tokens, or private keys
- Customer or user data
- Live API endpoints
- Runtime configuration
- Private infrastructure references
- Authentication or authorization code

## Reporting a Security Issue

If you discover a security concern related to this repository, please open an issue in the repository or contact the maintainers through the public repository channels.

Since this repository contains no credentials, runtime systems, or private data, most security issues will relate to dependency vulnerabilities or content that should not have been published.

## Dependency Policy

- Dependencies are kept minimal
- `pnpm audit` should be run regularly
- This site has no backend dependencies

## Publication Review

All content in this repository undergoes a [redaction review](./docs/redaction-checklist.md) before publication and must comply with the [public content policy](./docs/public-content-policy.md).
