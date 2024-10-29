import type { NextRequest } from "next/server";
import localizationMiddleware from "@/middleware/LocalizationMiddleware";
import { authMiddleware } from "@/middleware/authMiddleware";
import runMiddlewares from "@/middleware/runMiddlewares";

export default async function middleware(request: NextRequest) {
  return await runMiddlewares(request, [
    localizationMiddleware,
    authMiddleware,
  ]);
}

// Config to match internationalized pathnames
export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
