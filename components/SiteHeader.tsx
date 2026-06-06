import Link from "next/link";

const navLinks = [
  { href: "/what-is-hestiaos", label: "What is HestiaOS?" },
  { href: "/architecture", label: "Architecture" },
  { href: "/evidence", label: "Evidence" },
  { href: "/kernel-freeze", label: "Kernel Freeze" },
  { href: "/demos", label: "Demos" },
  { href: "/audit-replay", label: "Audit & Replay" },
  { href: "/repos", label: "Repos" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-neutral-900"
        >
          HestiaOS
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
