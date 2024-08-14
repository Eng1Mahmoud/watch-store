import { NextRequest, NextResponse } from 'next/server';

export function authMiddleware(req: NextRequest): NextResponse | undefined {
    if (!req.cookies.get('token')) {
      /*   return NextResponse.redirect('/login'); */
    }
}
