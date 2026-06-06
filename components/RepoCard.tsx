import type { PublicRepo } from "@/content/repos";
import StatusBadge from "./StatusBadge";

export default function RepoCard({ repo }: { repo: PublicRepo }) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{repo.name}</h3>
        <StatusBadge status={repo.status} />
      </div>

      <p className="mb-4 text-neutral-700">{repo.purpose}</p>

      <div className="mb-4">
        <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Contains
        </h4>
        <ul className="flex flex-wrap gap-1.5">
          {repo.contains.map((c) => (
            <li
              key={c}
              className="rounded-md bg-green-50 px-2 py-0.5 text-xs text-green-700"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Does Not Contain
        </h4>
        <ul className="flex flex-wrap gap-1.5">
          {repo.excludes.map((e) => (
            <li
              key={e}
              className="rounded-md bg-red-50 px-2 py-0.5 text-xs text-red-700"
            >
              {e}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
        <span className="text-xs text-neutral-500">{repo.license}</span>
        <a
          href={repo.href}
          className="text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </a>
      </div>
    </div>
  );
}
