import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Placeholder (Milestone 1). Next.js 16 renamed `middleware` to `proxy`.
 * Real session + role-based gating for the portal and firm workspace lands
 * in Milestone 3, once the `User`/role model exists — routes below are NOT
 * protected yet, matching the banners shown on those pages.
 */
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/matters/:path*",
    "/settings/:path*",
    "/firm/:path*",
  ],
};
