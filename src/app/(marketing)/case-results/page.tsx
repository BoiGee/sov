import { Card } from "@/components/ui/card";
import { caseResults } from "@/lib/content/case-results";

export const metadata = { title: "Case Results" };

export default function CaseResultsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-display text-4xl">Recent Case Results</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Prior results do not guarantee a similar outcome in your matter —
        every case depends on its own facts.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {caseResults.map((result) => (
          <Card key={result.summary}>
            <p className="font-mono text-xs uppercase tracking-wide text-primary">
              {result.practiceArea}
            </p>
            <p className="mt-3 text-foreground">{result.summary}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
