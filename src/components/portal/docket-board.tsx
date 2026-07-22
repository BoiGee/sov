import Link from "next/link";
import { cn } from "@/lib/utils";

export interface DocketRow {
  id: string;
  caseNumber: string;
  matter: string;
  status: string;
  nextDate?: string;
  attorney?: string;
}

const statusTone: Record<string, string> = {
  Filed: "bg-muted text-muted-foreground",
  Discovery: "bg-warning/15 text-warning",
  "Hearing Scheduled": "bg-accent/15 text-accent",
  Resolved: "bg-success/15 text-success",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-sm px-2.5 py-1 text-xs font-medium",
        statusTone[status] ?? "bg-muted text-muted-foreground"
      )}
    >
      {status}
    </span>
  );
}

export function DocketBoard({
  rows,
  getHref,
}: {
  rows: DocketRow[];
  getHref: (row: DocketRow) => string;
}) {
  const showAttorney = rows.some((row) => row.attorney);

  if (rows.length === 0) {
    return (
      <div className="rounded-sm border border-dashed border-border p-10 text-center text-muted-foreground">
        No matters to show yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-sm border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-card text-xs uppercase tracking-wide text-muted-foreground">
            <th scope="col" className="px-4 py-3 font-medium">Case No.</th>
            <th scope="col" className="px-4 py-3 font-medium">Matter</th>
            {showAttorney && (
              <th scope="col" className="px-4 py-3 font-medium">Attorney</th>
            )}
            <th scope="col" className="px-4 py-3 font-medium">Status</th>
            <th scope="col" className="px-4 py-3 font-medium">Next Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-border last:border-0 hover:bg-card">
              <td className="px-4 py-3 font-mono text-xs">
                <Link href={getHref(row)} className="text-primary underline-offset-4 hover:underline">
                  {row.caseNumber}
                </Link>
              </td>
              <td className="px-4 py-3">
                <Link href={getHref(row)} className="hover:underline">
                  {row.matter}
                </Link>
              </td>
              {showAttorney && (
                <td className="px-4 py-3 text-muted-foreground">{row.attorney ?? "—"}</td>
              )}
              <td className="px-4 py-3">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                {row.nextDate ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
