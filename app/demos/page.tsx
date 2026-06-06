import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demos",
};

const demos = [
  {
    title: "Read-only Command Center",
    description:
      "A dashboard overview showing portfolio status, evidence timeline, workflow run cards, and provenance/read-only badges — without any write capability.",
    features: [
      "Dashboard layout",
      "Portfolio overview",
      "Evidence timeline",
      "Workflow run cards",
      "Provenance badges",
      "Read-only mode indicator",
    ],
    note: "Screenshots pending. All screenshots undergo redaction review before publication.",
  },
  {
    title: "Governance Proposal Flow",
    description:
      "A walkthrough of the core governance loop: proposal created, approval required, audit event written, and the guarantee that no side effect occurs without ExecutionCommit.",
    features: [
      "Proposal creation",
      "Approval gate displayed",
      "Audit event recorded",
      "No side effect without ExecutionCommit",
      "DecisionTrace visible",
    ],
    note: "Screenshots pending. All screenshots undergo redaction review before publication.",
  },
  {
    title: "CEG Replay Example",
    description:
      "A replay demonstration showing input task, policy decision, trace generation, and replay summary — all from synthetic benchmark data.",
    features: [
      "Input task specification",
      "Policy decision rendered",
      "Trace visualization",
      "Replay summary",
    ],
    note: "Screenshots pending. All screenshots undergo redaction review before publication.",
  },
];

export default function DemosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Demos
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">
          Public Demos
        </h1>
        <p className="max-w-3xl text-neutral-600">
          Read-only demo walkthroughs. All screenshots are sanitized — no real
          usernames, private repo names, local paths, IPs, hostnames, tokens,
          or private data of any kind are visible.
        </p>
      </section>

      <section className="space-y-8">
        {demos.map((demo) => (
          <div
            key={demo.title}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <h2 className="mb-2 text-xl font-semibold">{demo.title}</h2>
            <p className="mb-4 text-neutral-600">{demo.description}</p>

            <div className="mb-4">
              <h3 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Features Shown
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {demo.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs italic text-neutral-400">{demo.note}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="mb-2 text-lg font-semibold text-amber-800">
          Screenshot Redaction Policy
        </h2>
        <p className="mb-3 text-sm text-amber-700">
          All screenshots undergo review before publication. The following are
          verified absent from every published screenshot:
        </p>
        <ul className="list-disc pl-5 text-sm text-amber-700">
          <li>Real usernames (except approved public identifiers)</li>
          <li>Private repository names</li>
          <li>Local filesystem paths (e.g. /home/admin01/)</li>
          <li>IP addresses</li>
          <li>Hostnames</li>
          <li>Tokens or credentials</li>
          <li>Private OpenProject ticket data</li>
          <li>Private Nextcloud paths</li>
          <li>Email addresses</li>
        </ul>
      </section>
    </div>
  );
}
