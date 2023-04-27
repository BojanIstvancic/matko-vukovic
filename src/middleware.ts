import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { links } from './constants/links'
import { getCookie } from './helpers/cookieStorage';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

const token = request.cookies.get('token');

  if (!token) { 
  return NextResponse.redirect(new URL('/', request.url))}
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/administracija/blog', '/administracija/zaposleni'],
}