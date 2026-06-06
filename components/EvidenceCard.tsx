import type { EvidenceItem } from "@/content/evidence";
import StatusBadge from "./StatusBadge";

export default function EvidenceCard({ item }: { item: EvidenceItem }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <StatusBadge status={item.status} />
      </div>

      <p className="mb-2 text-sm text-neutral-500">{item.date}</p>

      <p className="mb-4 text-neutral-700">{item.claim}</p>

      <div className="mb-4">
        <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Demonstrates
        </h4>
        <ul className="flex flex-wrap gap-1.5">
          {item.demonstrates.map((d) => (
            <li
              key={d}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
            >
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Limitations
        </h4>
        <ul className="list-disc pl-5 text-sm text-neutral-600">
          {item.limitations.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>

      {item.links.length > 0 && (
        <div>
          <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Links
          </h4>
          <ul className="space-y-1">
            {item.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-blue-600 underline underline-offset-2 hover:text-blue-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
