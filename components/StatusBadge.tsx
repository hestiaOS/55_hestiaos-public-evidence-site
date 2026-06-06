type Status =
  | "public-summary"
  | "public-full"
  | "synthetic"
  | "redacted"
  | "public"
  | "public-partial";

const statusConfig: Record<Status, { label: string; className: string }> = {
  "public-summary": {
    label: "Public Summary",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  "public-full": {
    label: "Public",
    className: "bg-green-50 text-green-700 border-green-200",
  },
  synthetic: {
    label: "Synthetic",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  redacted: {
    label: "Redacted",
    className: "bg-purple-50 text-purple-700 border-purple-200",
  },
  public: {
    label: "Public",
    className: "bg-green-50 text-green-700 border-green-200",
  },
  "public-partial": {
    label: "Public (Partial)",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
};

export default function StatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}
