import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kernel Freeze",
};

export default function KernelFreezePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="prose mx-auto">
        <h1>Kernel v0.1 Freeze Candidate</h1>

        <h2>Purpose</h2>
        <p>
          The kernel freeze defines a <strong>stable contract boundary</strong>{" "}
          for v0.1: what is locked, what is excluded, and what the freeze
          commits to maintaining.
        </p>
        <p>
          This is a <strong>scope-control document</strong>, not a feature list.
          The freeze serves to establish a known-good reference point for
          evaluation and evidence generation.
        </p>

        <h2>Included in v0.1 Freeze</h2>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stable DTO contracts</td>
              <td>Frozen</td>
            </tr>
            <tr>
              <td>Single policy/decision authority path</td>
              <td>Frozen</td>
            </tr>
            <tr>
              <td>Structural invariants separated from policy</td>
              <td>Frozen</td>
            </tr>
            <tr>
              <td>ExecutionCommit as side-effect boundary</td>
              <td>Frozen</td>
            </tr>
            <tr>
              <td>Runnable CEG Intent Registry</td>
              <td>Frozen</td>
            </tr>
            <tr>
              <td>Execution Gate</td>
              <td>Frozen</td>
            </tr>
            <tr>
              <td>Causal Bridge</td>
              <td>Frozen</td>
            </tr>
            <tr>
              <td>Replayable DecisionTrace evidence</td>
              <td>Frozen</td>
            </tr>
            <tr>
              <td>Critical kernel tests green</td>
              <td>Verified</td>
            </tr>
            <tr>
              <td>Public boundary documentation</td>
              <td>Published</td>
            </tr>
          </tbody>
        </table>

        <h2>Excluded from v0.1 Freeze</h2>
        <p>
          The following are <strong>explicitly excluded</strong> from the kernel
          v0.1 freeze:
        </p>
        <ul>
          <li>Full MCP hardening refactor</li>
          <li>OpenProject write integration</li>
          <li>Vercel/web demo as runtime control plane</li>
          <li>Plugin registry (next phase)</li>
          <li>Edition builds</li>
          <li>Model training infrastructure</li>
          <li>New memory system</li>
          <li>New architecture theory components</li>
        </ul>
        <p>
          Excluding these is intentional. The freeze declares what is{" "}
          <strong>stable and under contract</strong> — not what is desirable or
          planned.
        </p>

        <h2>What the Freeze Means</h2>
        <ol>
          <li>
            <strong>Stability</strong>: DTO contracts and structural invariants
            will not change within v0.1
          </li>
          <li>
            <strong>Evidence</strong>: Any evidence generated against the frozen
            kernel is reproducible
          </li>
          <li>
            <strong>Boundary</strong>: The separation between &quot;in
            kernel&quot; and &quot;not in kernel&quot; is explicit
          </li>
          <li>
            <strong>Audit</strong>: External reviewers can inspect the frozen
            boundary without chasing moving targets
          </li>
        </ol>

        <h2>What the Freeze Does Not Mean</h2>
        <ol>
          <li>
            Development on excluded components stops — it continues outside the
            freeze boundary
          </li>
          <li>
            The kernel is feature-complete — it is scope-complete for v0.1
          </li>
          <li>
            All invariants are formally proven — they are structurally enforced
            and tested
          </li>
        </ol>
      </div>
    </div>
  );
}
