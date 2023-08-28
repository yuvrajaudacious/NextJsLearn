import { NextResponse } from "next/server";

export function middleware(request) {
  const redirectUrl = new URL("/login", request.url).toString(); // Convert the URL object to a string
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: "/about/:path*",
};
