import { FileText, Image as ImageIcon, File as FileIcon, Download, Lock } from "lucide-react";
import type { DemoDocument } from "@/lib/demo-documents";
import { cn } from "@/lib/utils";

function iconForMimeType(mimeType: string) {
  if (mimeType.startsWith("image/")) return ImageIcon;
  if (mimeType === "application/pdf") return FileText;
  if (mimeType.includes("wordprocessingml") || mimeType === "application/msword") {
    return FileText;
  }
  return FileIcon;
}

export function DocumentList({
  documents,
  getDownloadHref,
}: {
  documents: DemoDocument[];
  getDownloadHref: (doc: DemoDocument) => string;
}) {
  if (documents.length === 0) {
    return (
      <div className="rounded-sm border border-dashed border-border p-10 text-center text-muted-foreground">
        No documents have been shared for this matter yet.
      </div>
    );
  }

  return (
    <ul className="divide-y divide-border rounded-sm border border-border">
      {documents.map((doc) => {
        const Icon = iconForMimeType(doc.mimeType);
        return (
          <li key={doc.id} className="flex items-center gap-4 px-4 py-3">
            <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm">{doc.filename}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {doc.sizeLabel} &middot; uploaded by {doc.uploadedBy} on {doc.uploadedAt}
              </p>
            </div>
            <span
              className={cn(
                "hidden shrink-0 items-center gap-1 rounded-sm px-2 py-1 text-xs sm:inline-flex",
                doc.visibility === "client"
                  ? "bg-success/15 text-success"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {doc.visibility === "internal" && <Lock className="h-3 w-3" aria-hidden />}
              {doc.visibility === "client" ? "Client-visible" : "Internal only"}
            </span>
            <a
              href={getDownloadHref(doc)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs hover:border-primary hover:text-primary"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              Download
            </a>
          </li>
        );
      })}
    </ul>
  );
}
