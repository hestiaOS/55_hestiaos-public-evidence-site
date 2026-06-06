export interface PublicRepo {
  name: string;
  purpose: string;
  status: "public" | "public-partial";
  contains: string[];
  excludes: string[];
  license: string;
  href: string;
}

export const publicRepos: PublicRepo[] = [
  {
    name: "hestiaos-sprind-public",
    purpose: "Public evidence and selected governance artifacts for SPRIND evaluation.",
    status: "public",
    contains: [
      "selected governance gems",
      "evidence summaries",
      "architecture mapping",
      "public manifest",
      "benchmark descriptions",
    ],
    excludes: [
      "private runtime data",
      "credentials",
      "internal paths",
      "non-redacted traces",
      "private repository references",
    ],
    license: "Proprietary (public artifacts only)",
    href: "https://github.com/anomalyco/hestiaos-sprind-public",
  },
  {
    name: "hestiaos-public-evidence-site",
    purpose: "Public evidence website with architecture, demos, and redacted traces.",
    status: "public",
    contains: [
      "website source code",
      "public content policy",
      "redaction checklist",
      "synthetic audit examples",
      "architecture overview",
    ],
    excludes: [
      "private credentials",
      "runtime configuration",
      "internal hostnames",
      "non-public repository references",
      "customer or user data",
    ],
    license: "Proprietary (public artifacts only)",
    href: "https://github.com/anomalyco/hestiaos-public-evidence-site",
  },
];
