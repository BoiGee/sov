import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const CLIENT_PATH_PREFIXES = ["/dashboard", "/matters", "/settings"];
const FIRM_PATH_PREFIX = "/firm";

function matchesPrefix(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

/**
 * Gates the client portal and firm workspace behind the demo login from
 * Milestone "1.5". Ownership checks (a client can only see *their own*
 * matters) still don't exist — that requires real `Matter` records and
 * lands with `src/lib/rbac.ts` in Milestone 3. This only enforces
 * authentication + coarse role separation.
 */
export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  const isClientPath = CLIENT_PATH_PREFIXES.some((prefix) =>
    matchesPrefix(pathname, prefix)
  );
  const isFirmPath = matchesPrefix(pathname, FIRM_PATH_PREFIX);

  if (!session?.user) {
    const loginUrl = new URL("/login", req.nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const role = session.user.role;

  if (isClientPath && role !== "client") {
    return NextResponse.redirect(new URL("/firm/matters", req.nextUrl));
  }

  if (isFirmPath && role === "client") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/matters/:path*",
    "/settings/:path*",
    "/firm/:path*",
  ],
};
