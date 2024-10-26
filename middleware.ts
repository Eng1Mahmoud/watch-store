import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authMiddleware } from "./middleware/authMiddleware";
import { logMiddleware } from "./middleware/logMiddleware";

export default function middleware(request: NextRequest) {
  return runMiddlewares(request, [logMiddleware, authMiddleware]);
}

async function runMiddlewares(request: NextRequest, middlewares: Function[]) {
  for (const middleware of middlewares) {
    const response = await middleware(request);
    if (response) {
      return response;
    }
  }
  return NextResponse.next();
}
