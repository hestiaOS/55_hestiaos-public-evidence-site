export interface EvidenceLink {
  label: string;
  href: string;
}

export interface EvidenceItem {
  title: string;
  status: "public-summary" | "public-full" | "synthetic" | "redacted";
  date: string;
  claim: string;
  demonstrates: string[];
  limitations: string[];
  links: EvidenceLink[];
}

export const evidenceItems: EvidenceItem[] = [
  {
    title: "CEG Benchmark Mini-Run",
    status: "public-summary",
    date: "2026-05-31",
    claim:
      "Governed mode produced replayable decision evidence for selected benchmark tasks.",
    demonstrates: [
      "auditability",
      "duplicate handling",
      "stale-context handling",
      "governance blocking",
      "replayable traces",
    ],
    limitations: [
      "mini-run only",
      "not a general safety guarantee",
      "public summary redacted",
    ],
    links: [
      {
        label: "Public evidence repository",
        href: "https://github.com/anomalyco/hestiaos-sprind-public",
      },
    ],
  },
  {
    title: "Execution Commit Gate Validation",
    status: "synthetic",
    date: "2026-06-01",
    claim:
      "Side effects are blocked when ExecutionCommit is missing from the decision trace.",
    demonstrates: [
      "execution boundary enforcement",
      "missing ExecutionCommit detection",
      "trace integrity",
    ],
    limitations: [
      "synthetic test scenario",
      "production conditions may differ",
      "does not cover all side effect types",
    ],
    links: [
      {
        label: "Synthetic trace examples",
        href: "/audit-replay",
      },
    ],
  },
  {
    title: "Kernel Structural Invariant Checks",
    status: "public-summary",
    date: "2026-06-02",
    claim:
      "Critical kernel tests pass for DTO contracts, policy authority path, and structural invariants.",
    demonstrates: [
      "DTO contract stability",
      "single policy authority path",
      "structural invariants separated from policy",
    ],
    limitations: [
      "kernel v0.1 freeze candidate only",
      "not all invariants formalized yet",
      "public summary only",
    ],
    links: [
      {
        label: "Kernel freeze documentation",
        href: "/kernel-freeze",
      },
    ],
  },
  {
    title: "Duplicate Proposal Handling",
    status: "public-summary",
    date: "2026-06-03",
    claim:
      "Duplicate intent proposals are detected and prevented from creating duplicate side effects.",
    demonstrates: [
      "idempotency guard",
      "intent deduplication",
      "audit trail consistency",
    ],
    limitations: [
      "content-based dedup only",
      "not timing-attack resistant",
      "public summary",
    ],
    links: [
      {
        label: "Architecture overview",
        href: "/architecture",
      },
    ],
  },
];
