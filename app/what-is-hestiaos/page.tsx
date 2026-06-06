import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is HestiaOS?",
};

export default function WhatIsHestiaOSPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="prose mx-auto">
        <h1>What is HestiaOS?</h1>

        <h2>Problem</h2>
        <p>
          Agentic systems — whether AI assistants, autonomous workflows, or
          multi-agent architectures — face fundamental challenges around decision
          transparency, accountability, and boundary control.
        </p>
        <p>When an agent acts, several questions arise:</p>
        <ul>
          <li>
            <strong>Who</strong> decided the action should proceed?
          </li>
          <li>
            <strong>What policy</strong> governed the decision?
          </li>
          <li>
            <strong>What evidence</strong> exists that the decision was valid?
          </li>
          <li>
            <strong>Can the chain of events</strong> be reconstructed later?
          </li>
          <li>
            <strong>What side effects</strong> did the action produce?
          </li>
        </ul>
        <p>
          Most existing agent frameworks do not systematically answer these
          questions. Policy is often implicit, traces are incomplete, and there
          is no clear line between &quot;proposed&quot; and
          &quot;executed&quot;.
        </p>

        <h2>Approach</h2>
        <p>
          HestiaOS explores a <strong>governance-first</strong> execution model.
        </p>
        <p>
          Instead of treating policy as an afterthought or guardrail bolted onto
          an otherwise unrestricted agent, HestiaOS places a{" "}
          <strong>governance kernel</strong> at the boundary between intent and
          side effect.
        </p>
        <p>This kernel is responsible for:</p>
        <ul>
          <li>Registering incoming intents</li>
          <li>Evaluating them against explicit policy</li>
          <li>
            Producing <strong>DecisionTraces</strong> — replayable, causal
            records
          </li>
          <li>
            Requiring an <strong>ExecutionCommit</strong> before any external
            side effect is permitted
          </li>
        </ul>

        <h2>Core Concepts</h2>
        <table>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Intent</strong>
              </td>
              <td>A proposed action submitted by an agent or operator.</td>
            </tr>
            <tr>
              <td>
                <strong>Policy Decision</strong>
              </td>
              <td>An explicit evaluation of an intent against declared rules.</td>
            </tr>
            <tr>
              <td>
                <strong>DecisionTrace</strong>
              </td>
              <td>A structured, replayable record of the decision path.</td>
            </tr>
            <tr>
              <td>
                <strong>ExecutionCommit</strong>
              </td>
              <td>
                A cryptographic-style marker that authorizes a side effect.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Causal Bridge</strong>
              </td>
              <td>
                The link between a DecisionTrace and observable outcomes.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Governance Kernel</strong>
              </td>
              <td>The boundary component that enforces the above contracts.</td>
            </tr>
          </tbody>
        </table>

        <h2>What is public here?</h2>
        <p>This site contains:</p>
        <ul>
          <li>Architecture overview at the boundary level</li>
          <li>Public benchmark summaries with stated limitations</li>
          <li>
            <strong>Synthetic</strong> audit and replay traces (no real data)
          </li>
          <li>Redacted screenshots from demo environments</li>
          <li>Links to approved public repositories</li>
          <li>Kernel v0.1 freeze documentation</li>
        </ul>

        <h2>What is not public here?</h2>
        <p>
          This site does <strong>not</strong> contain:
        </p>
        <ul>
          <li>Private runtime infrastructure details</li>
          <li>Production credentials, tokens, or keys</li>
          <li>Internal project data or customer data</li>
          <li>Live execution controls</li>
          <li>Non-redacted internal logs</li>
          <li>Private repository content</li>
          <li>OpenProject or Nextcloud data</li>
        </ul>
        <p>
          If something is not listed here, it is not public — and that is by
          design.
        </p>
      </div>
    </div>
  );
}
