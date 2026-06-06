import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              HestiaOS Public Evidence Site
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Public, read-only. Contains only approved, redacted, or synthetic
              evidence.
            </p>
          </div>

          <div className="flex gap-6 text-xs text-neutral-500">
            <Link href="/legal" className="hover:text-neutral-700">
              Legal
            </Link>
            <Link
              href="https://github.com/anomalyco/hestiaos-public-evidence-site"
              className="hover:text-neutral-700"
            >
              Site Source
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
