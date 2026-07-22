import { Tabs } from "@/components/ui/tabs";
import { CaseTimeline } from "@/components/portal/case-timeline";
import { Card } from "@/components/ui/card";

const STAGES = ["Filed", "Discovery", "Hearing Scheduled", "Resolved"];

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MatterDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <p className="font-mono text-xs text-muted-foreground">Matter #{id}</p>
      <h1 className="mt-1 font-display text-3xl">Dissolution of Marriage</h1>
      <p className="mt-2 text-muted-foreground">
        This is placeholder detail for the matter — real data comes from the
        `Matter` model in Milestone 5.
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
                <Card className="text-center text-muted-foreground">
                  No documents have been shared yet. Secure upload/download
                  via signed URLs is built in Milestone 6.
                </Card>
              ),
            },
            {
              id: "messages",
              label: "Messages",
              content: (
                <Card className="text-center text-muted-foreground">
                  No messages yet. Threaded, case-scoped messaging with your
                  attorney is built in Milestone 6.
                </Card>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
