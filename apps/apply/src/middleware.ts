import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const requestPathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-pathname", requestPathname);

  const jobIdRegex = /^\/jobs\/([^/]+)/;
  const match = requestPathname.match(jobIdRegex);

  if (match && match[1]) {
    const jobId = match[1];
    requestHeaders.set("x-job-id", jobId);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/jobs/:path*",
};
