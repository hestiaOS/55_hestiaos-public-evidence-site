export interface AuditTrace {
  trace_id: string;
  intent: string;
  decision: "approved" | "requires_approval" | "blocked";
  reason?: string;
  side_effect: string;
  execution_commit: string | null;
  replayable: boolean;
  public_note?: string;
}

export const syntheticTraces: AuditTrace[] = [
  {
    trace_id: "public-demo-trace-001",
    intent: "create_project_comment_proposal",
    decision: "requires_approval",
    side_effect: "none",
    execution_commit: null,
    replayable: true,
    public_note: "Synthetic public demonstration trace. No real data used.",
  },
  {
    trace_id: "public-demo-trace-002",
    intent: "write_to_external_system",
    decision: "blocked",
    reason: "missing_execution_commit",
    side_effect: "none",
    execution_commit: null,
    replayable: true,
    public_note: "Synthetic trace showing blocked side effect without ExecutionCommit.",
  },
  {
    trace_id: "public-demo-trace-003",
    intent: "read_portfolio_summary",
    decision: "approved",
    side_effect: "none",
    execution_commit: null,
    replayable: true,
    public_note:
      "Read-only operations may be approved without ExecutionCommit when no side effects occur.",
  },
  {
    trace_id: "public-demo-trace-004",
    intent: "create_governed_artifact",
    decision: "approved",
    side_effect: "artifact_created",
    execution_commit: "ec_demo_2026-06-01_001",
    replayable: true,
    public_note: "Side effect permitted only with valid ExecutionCommit in trace.",
  },
];

export interface ReplayExample {
  title: string;
  description: string;
  trace: AuditTrace;
  whatToObserve: string[];
}

export const replayExamples: ReplayExample[] = [
  {
    title: "Read-only Request (No Side Effect)",
    description:
      "A read operation is proposed. The governance kernel permits it without an ExecutionCommit because it produces no side effects.",
    trace: syntheticTraces[2],
    whatToObserve: [
      "Decision: approved",
      "No ExecutionCommit needed",
      "Side effect: none",
      "Replayable: true",
    ],
  },
  {
    title: "Proposal Requires Approval",
    description:
      "A write proposal is submitted. The kernel flags it as requiring_approval, preventing immediate execution.",
    trace: syntheticTraces[0],
    whatToObserve: [
      "Decision: requires_approval",
      "No ExecutionCommit generated",
      "Side effect: none",
      "Replayable: true",
    ],
  },
  {
    title: "Side Effect Blocked (Missing ExecutionCommit)",
    description:
      "An attempt to write externally without a valid ExecutionCommit is blocked by the governance boundary.",
    trace: syntheticTraces[1],
    whatToObserve: [
      "Decision: blocked",
      "Reason: missing_execution_commit",
      "Side effect: none",
      "Replayable: true",
    ],
  },
  {
    title: "Governed Side Effect with ExecutionCommit",
    description:
      "A write operation with a valid ExecutionCommit proceeds through the governance boundary.",
    trace: syntheticTraces[3],
    whatToObserve: [
      "Decision: approved",
      "ExecutionCommit present",
      "Side effect recorded",
      "Replayable: true",
    ],
  },
];
