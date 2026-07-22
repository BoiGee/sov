import { DocketBoard, type DocketRow } from "@/components/portal/docket-board";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Dashboard" };

// Placeholder rows — replaced by a real Prisma query scoped to the
// signed-in client's matters in Milestone 5.
const placeholderRows: DocketRow[] = [
  {
    id: "1",
    caseNumber: "FL-2026-00182",
    matter: "Dissolution of Marriage",
    status: "Discovery",
    nextDate: "Aug 14, 2026",
  },
  {
    id: "2",
    caseNumber: "RE-2025-00937",
    matter: "Purchase Agreement Review — 214 Birch St.",
    status: "Resolved",
  },
  {
    id: "3",
    caseNumber: "EP-2026-00041",
    matter: "Revocable Living Trust",
    status: "Filed",
    nextDate: "Aug 3, 2026",
  },
];

const upcomingDates = [
  { date: "Aug 3, 2026", label: "Document deadline — Revocable Living Trust", caseNumber: "EP-2026-00041" },
  { date: "Aug 14, 2026", label: "Discovery deadline — Dissolution of Marriage", caseNumber: "FL-2026-00182" },
];

const stats = [
  { label: "Open Matters", value: placeholderRows.filter((r) => r.status !== "Resolved").length },
  { label: "Upcoming Dates", value: upcomingDates.length },
  { label: "Unread Messages", value: 0 },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="font-display text-3xl">Your Matters</h1>
      <p className="mt-2 text-muted-foreground">
        Every matter Sterling Vance LLP is handling on your behalf, with its
        current stage and next key date.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <p className="font-display text-3xl text-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="font-display text-xl">Docket Board</h2>
          <div className="mt-4">
            <DocketBoard
              rows={placeholderRows}
              getHref={(row) => `/matters/${row.id}`}
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl">Upcoming Dates</h2>
          <Card className="mt-4">
            {upcomingDates.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nothing upcoming.</p>
            ) : (
              <ul className="space-y-4">
                {upcomingDates.map((item) => (
                  <li key={item.label} className="text-sm">
                    <p className="font-mono text-xs text-primary">{item.date}</p>
                    <p className="mt-1">{item.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.caseNumber}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
