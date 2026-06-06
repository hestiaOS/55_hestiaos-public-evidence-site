import { publicRepos } from "@/content/repos";
import RepoCard from "@/components/RepoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Repositories",
};

export default function ReposPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Repositories
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight">
          Public Repositories
        </h1>
        <p className="max-w-3xl text-neutral-600">
          Approved public repositories containing evidence, artifacts, and
          documentation. Each listing states what the repository contains and,
          equally important, what it does not.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {publicRepos.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </section>
    </div>
  );
}
