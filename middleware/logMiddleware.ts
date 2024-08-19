import { NextRequest } from "next/server";

export function logMiddleware(req: NextRequest): void {
  console.log(`Request made to: ${req.nextUrl.pathname}`);
}
