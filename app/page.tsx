import Link from "next/link";

const sections = [
  {
    title: "What is HestiaOS?",
    href: "/what-is-hestiaos",
    text: "A concise introduction to the research and engineering goals.",
  },
  {
    title: "Architecture",
    href: "/architecture",
    text: "Public overview of the governance and evidence boundaries.",
  },
  {
    title: "Evidence",
    href: "/evidence",
    text: "Challenge evidence, benchmark summaries, and limitations.",
  },
  {
    title: "Kernel Freeze",
    href: "/kernel-freeze",
    text: "Kernel v0.1 freeze scope, inclusions, and exclusions.",
  },
  {
    title: "Demos",
    href: "/demos",
    text: "Screenshots and read-only public demo flows.",
  },
  {
    title: "Audit & Replay",
    href: "/audit-replay",
    text: "Synthetic and redacted examples of replayable traces.",
  },
  {
    title: "Public Repositories",
    href: "/repos",
    text: "Links to approved public repositories and artifacts.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Public Evidence Site
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          HestiaOS
        </h1>

        <p className="max-w-3xl text-lg text-neutral-700">
          HestiaOS is a research and engineering platform for deterministic
          governance, causal traces, replayable evidence, and explicit execution
          boundaries in agentic systems.
        </p>

        <p className="mt-6 max-w-3xl text-sm text-neutral-500">
          This website is public, read-only, and contains only approved,
          redacted, or synthetic evidence. It does not expose private runtime
          systems, credentials, customer data, or live execution controls.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-400"
          >
            <h2 className="mb-2 text-xl font-semibold">{section.title}</h2>
            <p className="text-neutral-600">{section.text}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
