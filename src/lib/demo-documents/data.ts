/**
 * DEMO-ONLY document metadata, not backed by a database. Files live on
 * disk under `data/demo-documents/` (outside `public/`, so they are never
 * directly servable — only through the signed download route). This
 * mirrors the eventual `Document` Prisma model (matter, uploader,
 * visibility, storage key) and is replaced entirely once that model and
 * real object storage (`src/lib/storage`) are wired up in Milestone 6.
 */
export type DemoDocumentVisibility = "internal" | "client";

export interface DemoDocument {
  id: string;
  matterId: string;
  filename: string;
  storedAs: string;
  mimeType: string;
  visibility: DemoDocumentVisibility;
  sizeLabel: string;
  uploadedBy: string;
  uploadedAt: string;
}

export const DEMO_DOCUMENTS: DemoDocument[] = [
  {
    id: "doc-1",
    matterId: "1",
    filename: "Engagement Letter.docx",
    storedAs: "engagement-letter.docx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    visibility: "client",
    sizeLabel: "2.3 KB",
    uploadedBy: "Priya Nandakumar",
    uploadedAt: "Jul 2, 2026",
  },
  {
    id: "doc-2",
    matterId: "1",
    filename: "Attorney Case Notes.pdf",
    storedAs: "case-notes.pdf",
    mimeType: "application/pdf",
    visibility: "internal",
    sizeLabel: "1.0 KB",
    uploadedBy: "Priya Nandakumar",
    uploadedAt: "Jul 15, 2026",
  },
  {
    id: "doc-3",
    matterId: "3",
    filename: "Property Photo.png",
    storedAs: "property-photo.png",
    mimeType: "image/png",
    visibility: "client",
    sizeLabel: "1.6 KB",
    uploadedBy: "Eleanor Sterling",
    uploadedAt: "Jul 10, 2026",
  },
  {
    id: "doc-4",
    matterId: "4",
    filename: "Arrest Report.pdf",
    storedAs: "case-notes.pdf",
    mimeType: "application/pdf",
    visibility: "internal",
    sizeLabel: "1.0 KB",
    uploadedBy: "Marcus Vance",
    uploadedAt: "Jul 18, 2026",
  },
];

export function getDocumentsForMatter(matterId: string): DemoDocument[] {
  return DEMO_DOCUMENTS.filter((doc) => doc.matterId === matterId);
}

export function getDocumentById(id: string): DemoDocument | undefined {
  return DEMO_DOCUMENTS.find((doc) => doc.id === id);
}
