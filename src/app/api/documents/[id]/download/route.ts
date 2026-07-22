import { NextResponse, type NextRequest } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { auth } from "@/lib/auth";
import { getDocumentById, verifyDocumentToken } from "@/lib/demo-documents";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Demo scope: firm-side roles only. Serving a client their own documents
  // safely requires real per-matter ownership checks, which need the
  // `Matter`/`Client` models from Milestone 2/3 — not implemented yet.
  if (session.user.role === "client") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const token = request.nextUrl.searchParams.get("token");
  if (!token || !verifyDocumentToken(id, token)) {
    return NextResponse.json(
      { error: "Invalid or expired download link" },
      { status: 403 }
    );
  }

  const doc = getDocumentById(id);
  if (!doc) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const filePath = path.join(process.cwd(), "data", "demo-documents", doc.storedAs);
  const fileBuffer = await readFile(filePath);

  return new NextResponse(new Uint8Array(fileBuffer), {
    headers: {
      "Content-Type": doc.mimeType,
      "Content-Disposition": `attachment; filename="${doc.filename}"`,
      "Content-Length": String(fileBuffer.length),
      "Cache-Control": "private, no-store",
    },
  });
}
