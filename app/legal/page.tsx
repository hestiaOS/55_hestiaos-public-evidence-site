import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="prose mx-auto">
        <h1>Legal</h1>

        <h2>Public Content Policy</h2>
        <p>This site and its associated repositories are public, read-only resources.</p>
        <p>They contain only:</p>
        <ul>
          <li>Public architecture summaries</li>
          <li>Redacted benchmark evidence</li>
          <li>Synthetic audit traces</li>
          <li>Screenshots without private identifiers</li>
          <li>Links to approved public repositories</li>
        </ul>
        <p>
          They do <strong>not</strong> contain:
        </p>
        <ul>
          <li>Credentials, tokens, or private keys</li>
          <li>Customer or user data</li>
          <li>Private OpenProject or Nextcloud data</li>
          <li>Internal hostnames, IP addresses, or filesystem paths</li>
          <li>Non-redacted internal logs</li>
          <li>Unapproved claims</li>
          <li>Live execution controls</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          The materials on this site are provided for informational and
          evaluation purposes only. They do not constitute:
        </p>
        <ul>
          <li>A safety certification or guarantee</li>
          <li>A security audit</li>
          <li>A production readiness claim</li>
          <li>Legal advice</li>
          <li>A commitment to deliver specific features or timelines</li>
        </ul>
        <p>
          All synthetic examples are clearly marked as synthetic. All redacted
          materials are marked as redacted. All limitations are stated alongside
          corresponding evidence items.
        </p>

        <h2>Contact</h2>
        <p>
          For inquiries about HestiaOS, the public evidence site, or the
          governance model, please refer to the public repositories linked on
          the{" "}
          <Link href="/repos" className="text-blue-600 underline">
            Repos
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
