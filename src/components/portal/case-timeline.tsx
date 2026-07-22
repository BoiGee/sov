import { cn } from "@/lib/utils";

export function CaseTimeline({
  stages,
  currentStage,
}: {
  stages: string[];
  currentStage: string;
}) {
  const currentIndex = stages.indexOf(currentStage);

  return (
    <ol className="flex flex-col gap-6 sm:flex-row sm:gap-0">
      {stages.map((stage, index) => {
        const isComplete = index < currentIndex;
        const isCurrent = index === currentIndex;
        return (
          <li key={stage} className="flex flex-1 items-center gap-3 sm:flex-col sm:items-stretch sm:gap-2">
            <div className="flex items-center gap-3 sm:flex-col sm:items-center">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium",
                  isComplete && "border-success bg-success text-primary-foreground",
                  isCurrent && "border-primary text-primary",
                  !isComplete && !isCurrent && "border-border text-muted-foreground"
                )}
              >
                {index + 1}
              </span>
              {index < stages.length - 1 && (
                <span
                  className={cn(
                    "h-px flex-1 sm:mt-4 sm:h-0.5 sm:w-full",
                    isComplete ? "bg-success" : "bg-border"
                  )}
                  aria-hidden
                />
              )}
            </div>
            <span
              className={cn(
                "text-sm",
                isCurrent ? "font-medium text-foreground" : "text-muted-foreground"
              )}
            >
              {stage}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
