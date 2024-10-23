// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authMiddleware } from "./middleware/authMiddleware";
import LocalizationMiddleware from "./middleware/LocalizationMiddleware";

// Main middleware handler
export default async function middleware(request: NextRequest) {
  // Run i18n middleware first, then auth middleware
  return await runMiddlewares(request, [
    LocalizationMiddleware,
    authMiddleware,
  ]);
}

// Helper function to execute multiple middlewares sequentially
async function runMiddlewares(request: NextRequest, middlewares: Function[]) {
  for (const middleware of middlewares) {
    const response = await middleware(request);
    // If any middleware returns a response (e.g., a redirect), return it
    if (response) {
      return response;
    }
  }
  // If no middleware returns a response, proceed with the request
  return NextResponse.next();
}

// Add matcher for all content routes
export const config = {
  matcher: ["/", "/(en|ar)/:path*"], // Ensure localization is applied for all routes
};
