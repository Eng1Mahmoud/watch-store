import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from './middleware/authMiddleware';
import { logMiddleware } from './middleware/logMiddleware';

export function middleware(req: NextRequest): NextResponse | undefined {
    logMiddleware(req);
    const authResponse = authMiddleware(req);
    if (authResponse) {
        return authResponse;
    }
    return NextResponse.next();
}
