import { Tabs } from "@/components/ui/tabs";
import { CaseTimeline } from "@/components/portal/case-timeline";
import { DocumentList } from "@/components/portal/document-list";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getDocumentsForMatter, getSignedDownloadHref } from "@/lib/demo-documents";

const STAGES = ["Filed", "Discovery", "Hearing Scheduled", "Resolved"];

type Props = {
  params: Promise<{ id: string }>;
};

export default async function FirmMatterDetailPage({ params }: Props) {
  const { id } = await params;
  const documents = getDocumentsForMatter(id);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-muted-foreground">Matter #{id}</p>
          <h1 className="mt-1 font-display text-3xl">Dissolution of Marriage</h1>
        </div>
        <div className="flex items-center gap-3">
          <select
            disabled
            className="rounded-sm border border-border bg-card px-3 py-2 text-sm disabled:opacity-60"
            defaultValue="Discovery"
          >
            {STAGES.map((stage) => (
              <option key={stage}>{stage}</option>
            ))}
          </select>
          <Button variant="secondary" disabled>
            Update Status
          </Button>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Status updates are audit-logged and wired up in Milestone 6.
      </p>

      <div className="mt-10">
        <Tabs
          tabs={[
            {
              id: "timeline",
              label: "Timeline",
              content: (
                <div className="py-4">
                  <CaseTimeline stages={STAGES} currentStage="Discovery" />
                </div>
              ),
            },
            {
              id: "documents",
              label: "Documents",
              content: (
                <div>
                  <DocumentList
                    documents={documents}
                    getDownloadHref={(doc) => getSignedDownloadHref(doc.id)}
                  />
                  <p className="mt-4 text-xs text-muted-foreground">
                    Demo documents against a hardcoded list — download links
                    are still short-lived signed URLs, same as production
                    will use against real object storage. Upload with an
                    internal/client-visible flag lands in Milestone 6.
                  </p>
                </div>
              ),
            },
            {
              id: "messages",
              label: "Messages",
              content: (
                <Card className="text-center text-muted-foreground">
                  No messages yet. Case-scoped messaging lands in Milestone 6.
                </Card>
              ),
            },
            {
              id: "client",
              label: "Client Info",
              content: (
                <Card className="text-muted-foreground">
                  Client contact details render here once matters are backed
                  by real `Client` records in Milestone 5.
                </Card>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
