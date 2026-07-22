import { DocketBoard, type DocketRow } from "@/components/portal/docket-board";

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

export default function DashboardPage() {
  return (
    <div>
      <h1 className="font-display text-3xl">Your Matters</h1>
      <p className="mt-2 text-muted-foreground">
        Every matter Sterling Vance LLP is handling on your behalf, with its
        current stage and next key date.
      </p>
      <div className="mt-8">
        <DocketBoard
          rows={placeholderRows}
          getHref={(row) => `/matters/${row.id}`}
        />
      </div>
    </div>
  );
}
