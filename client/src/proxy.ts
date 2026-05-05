import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { COOKIE_ACCESS_TOKEN_NAME } from '@/constants';
import { PUBLIC_ROUTES, ROUTES } from '@/routes';

/**
 * Decodes the JWT payload and checks whether the token has expired.
 * This is NOT a security check — it does not verify the signature.
 * NestJS handles real validation; this just prevents showing protected pages with a known-expired token.
 */
function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}

/**
 * Next.js middleware that guards routes based on authentication.
 * Unauthenticated users are redirected to the login page.
 * Authenticated users are redirected away from the login page to home.
 */
export function proxy(request: NextRequest) {
  const token = request.cookies.get(COOKIE_ACCESS_TOKEN_NAME)?.value;
  const isAuthenticated = token && !isTokenExpired(token);
  const pathname = request.nextUrl.pathname;
  // user should be redirected to login if:
  // - not unauthorized
  // - not already in log in page
  if (
    !isAuthenticated
    && pathname !== ROUTES.LOGIN
    && !PUBLIC_ROUTES.includes(pathname)
  ) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  if (isAuthenticated && pathname === ROUTES.LOGIN) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
