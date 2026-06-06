import { replayExamples, syntheticTraces } from "@/content/auditReplayExamples";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit & Replay",
};

export default function AuditReplayPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Audit &amp; Replay
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">
          Audit &amp; Replay Examples
        </h1>
        <p className="max-w-3xl text-neutral-600">
          All traces shown here are <strong>synthetic</strong> — they were
          generated for public demonstration and contain no real data, no real
          decisions, and no real side effects.
        </p>
      </section>

      <section className="mb-16 space-y-8">
        {replayExamples.map((example) => (
          <div
            key={example.title}
            className="rounded-2xl border border-neutral-200 p-6"
          >
            <h2 className="mb-2 text-xl font-semibold">{example.title}</h2>
            <p className="mb-4 text-neutral-600">{example.description}</p>

            <div className="mb-4 overflow-x-auto">
              <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100">
                {JSON.stringify(example.trace, null, 2)}
              </pre>
            </div>

            <div>
              <h3 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                What to Observe
              </h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600">
                {example.whatToObserve.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">All Synthetic Traces</h2>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-neutral-50">
                <th className="px-4 py-3 font-semibold">Trace ID</th>
                <th className="px-4 py-3 font-semibold">Intent</th>
                <th className="px-4 py-3 font-semibold">Decision</th>
                <th className="px-4 py-3 font-semibold">Side Effect</th>
                <th className="px-4 py-3 font-semibold">Execution Commit</th>
                <th className="px-4 py-3 font-semibold">Replayable</th>
              </tr>
            </thead>
            <tbody>
              {syntheticTraces.map((trace) => (
                <tr key={trace.trace_id} className="border-t border-neutral-100">
                  <td className="px-4 py-3 font-mono text-xs">
                    {trace.trace_id}
                  </td>
                  <td className="px-4 py-3">{trace.intent}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        trace.decision === "approved"
                          ? "bg-green-50 text-green-700"
                          : trace.decision === "blocked"
                            ? "bg-red-50 text-red-700"
                            : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {trace.decision}
                    </span>
                  </td>
                  <td className="px-4 py-3">{trace.side_effect}</td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {trace.execution_commit ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    {trace.replayable ? (
                      <span className="text-green-600">Yes</span>
                    ) : (
                      <span className="text-red-600">No</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          All traces above are synthetic. They contain no real data, no real
          decisions, and no real side effects.
        </p>
      </section>
    </div>
  );
}
