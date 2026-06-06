import { evidenceItems } from "@/content/evidence";
import EvidenceCard from "@/components/EvidenceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evidence",
};

export default function EvidencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Public Evidence
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">
          Evidence &amp; Benchmarks
        </h1>
        <p className="max-w-3xl text-neutral-600">
          Each evidence item includes what it demonstrates — and, critically,
          its limitations. No claims are made beyond what is publicly
          verifiable.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {evidenceItems.map((item) => (
          <EvidenceCard key={item.title} item={item} />
        ))}
      </section>
    </div>
  );
}
