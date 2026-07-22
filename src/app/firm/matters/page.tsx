import { DocketBoard, type DocketRow } from "@/components/portal/docket-board";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Matters — Firm Workspace" };

// Placeholder rows — replaced by a filtered Prisma query in Milestone 6.
const placeholderRows: DocketRow[] = [
  {
    id: "1",
    caseNumber: "FL-2026-00182",
    matter: "Dissolution of Marriage",
    status: "Discovery",
    nextDate: "Aug 14, 2026",
    attorney: "Priya Nandakumar",
  },
  {
    id: "2",
    caseNumber: "RE-2025-00937",
    matter: "Purchase Agreement Review — 214 Birch St.",
    status: "Resolved",
    attorney: "Priya Nandakumar",
  },
  {
    id: "3",
    caseNumber: "EP-2026-00041",
    matter: "Revocable Living Trust",
    status: "Filed",
    nextDate: "Aug 3, 2026",
    attorney: "Eleanor Sterling",
  },
  {
    id: "4",
    caseNumber: "CD-2026-00019",
    matter: "State v. Placeholder",
    status: "Hearing Scheduled",
    nextDate: "Jul 30, 2026",
    attorney: "Marcus Vance",
  },
];

const statuses = ["Filed", "Discovery", "Hearing Scheduled", "Resolved"] as const;

export default function FirmMattersPage() {
  const statCounts = statuses.map((status) => ({
    status,
    count: placeholderRows.filter((row) => row.status === status).length,
  }));

  return (
    <div>
      <h1 className="font-display text-3xl">Matters</h1>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
        <Card>
          <p className="font-display text-3xl text-primary">{placeholderRows.length}</p>
          <p className="mt-1 text-sm text-muted-foreground">Total</p>
        </Card>
        {statCounts.map((s) => (
          <Card key={s.status}>
            <p className="font-display text-3xl text-primary">{s.count}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.status}</p>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <span className="rounded-sm border border-border px-3 py-1.5">
          Attorney: All
        </span>
        <span className="rounded-sm border border-border px-3 py-1.5">
          Status: All
        </span>
        <span className="rounded-sm border border-border px-3 py-1.5">
          Practice Area: All
        </span>
        <span className="text-xs italic">
          Working filters land in Milestone 6.
        </span>
      </div>
      <div className="mt-6">
        <DocketBoard
          rows={placeholderRows}
          getHref={(row) => `/firm/matters/${row.id}`}
        />
      </div>
    </div>
  );
}
