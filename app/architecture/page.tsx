import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture",
};

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="prose mx-auto">
        <h1>Architecture</h1>

        <h2>System Overview</h2>
        <p>
          HestiaOS uses a governance-kernel model where all agent actions must
          pass through explicit decision boundaries before producing external
          side effects.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <pre className="text-sm text-neutral-700">
            {`User / Operator
      |
      v
Intent / Proposal
      |
      v
Policy Decision
      |
      v
DecisionTrace
      |
      v
Approval Gate
      |
      v
ExecutionCommit
      |
      v
Side Effect / External System`}
          </pre>
        </div>

        <p>
          This flow is not optional — every path that produces a side effect
          must go through the governance boundary.
        </p>

        <h2>Governance Kernel Boundary</h2>
        <p>
          The <strong>Governance Kernel</strong> sits between intent and
          execution. It enforces the following invariants:
        </p>
        <ol>
          <li>
            Every intent is <strong>registered</strong> before processing
          </li>
          <li>
            Every intent is <strong>evaluated</strong> against explicit policy
            rules
          </li>
          <li>
            Every evaluation produces a <strong>DecisionTrace</strong> — a
            structured, replayable artifact
          </li>
          <li>
            No external side effect occurs without a valid{" "}
            <strong>ExecutionCommit</strong>
          </li>
          <li>
            Every ExecutionCommit is linked to a <strong>DecisionTrace</strong>
          </li>
        </ol>

        <h2>Evidence Flow</h2>
        <div className="not-prose my-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <pre className="text-sm text-neutral-700">
            {`Intent Registry
      |
      v
Policy Evaluation
      |
      v
DecisionTrace (immutable)
      |
      v
Causal Bridge
      |
      v
Public Evidence Artifact`}
          </pre>
        </div>
        <p>
          Evidence is generated at each stage. Public evidence (this site) is a{" "}
          <strong>sanitized subset</strong> of the internal audit store.
        </p>

        <h2>Agent Proposal Flow</h2>
        <ol>
          <li>
            <strong>Proposal Created</strong> — Agent or operator submits an
            intent
          </li>
          <li>
            <strong>Policy Check</strong> — Kernel evaluates against active
            policy rules
          </li>
          <li>
            <strong>Decision Recorded</strong> — DecisionTrace is written
            (always, even for rejections)
          </li>
          <li>
            <strong>Gate Check</strong> — If approved, requires ExecutionCommit
            for side effects
          </li>
          <li>
            <strong>Execution Logged</strong> — Side effect is recorded with
            causal link to DecisionTrace
          </li>
        </ol>

        <h2>Execution Commit Boundary</h2>
        <p>
          The ExecutionCommit is the <strong>critical boundary</strong> in the
          system:
        </p>
        <ul>
          <li>
            <strong>Without</strong> ExecutionCommit → no external side effect
            is permitted
          </li>
          <li>
            <strong>With</strong> valid ExecutionCommit → side effect proceeds
            under governance
          </li>
          <li>
            Read-only operations may be approved without ExecutionCommit
          </li>
        </ul>
        <p>
          This means even a fully approved intent cannot produce side effects
          without explicitly crossing this boundary — and that crossing is
          always recorded.
        </p>

        <h2>Public vs Private Components</h2>

        <h3>Public Layer</h3>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Visibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Architecture overview</td>
              <td>Public</td>
            </tr>
            <tr>
              <td>Benchmark summaries</td>
              <td>Public (redacted)</td>
            </tr>
            <tr>
              <td>Synthetic traces</td>
              <td>Public</td>
            </tr>
            <tr>
              <td>Demo screenshots</td>
              <td>Public (sanitized)</td>
            </tr>
            <tr>
              <td>This website</td>
              <td>Public</td>
            </tr>
            <tr>
              <td>Public repositories</td>
              <td>Public</td>
            </tr>
          </tbody>
        </table>

        <h3>Private Layer</h3>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Visibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Governance kernel runtime</td>
              <td>Private</td>
            </tr>
            <tr>
              <td>Private repositories</td>
              <td>Private</td>
            </tr>
            <tr>
              <td>OpenProject MCP</td>
              <td>Private</td>
            </tr>
            <tr>
              <td>Nextcloud instance</td>
              <td>Private</td>
            </tr>
            <tr>
              <td>Local agents</td>
              <td>Private</td>
            </tr>
            <tr>
              <td>Credentials &amp; keys</td>
              <td>Private</td>
            </tr>
            <tr>
              <td>Internal audit store</td>
              <td>Private</td>
            </tr>
            <tr>
              <td>Production infrastructure</td>
              <td>Private</td>
            </tr>
          </tbody>
        </table>

        <p>
          The public layer is deliberately narrow. What is shown here represents
          the <strong>contracted boundary</strong> — what HestiaOS commits to
          producing as evidence, not what it uses internally to produce it.
        </p>
      </div>
    </div>
  );
}
