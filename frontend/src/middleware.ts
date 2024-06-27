import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "./lib/auth";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;

  if (!session || !verifyJWT(session)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Could refresh token here, but leaving as is (token valid for an hour by default)
  return NextResponse.next();
}

// Normally would do exclusion matching, but since only one protected route,
// only run on favorites
export const config = {
  matcher: ["/favorites/:path*"],
};
