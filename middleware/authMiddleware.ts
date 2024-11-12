import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "@/utils/decodeToken";
import { routes } from "./helper/RolesAndRoutes";
import type { Role } from "./helper/RolesAndRoutes";
export async function authMiddleware(
  request: NextRequest,
  response: NextResponse,
) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  const currentLang = pathname.split("/")[1];
  const currentPath = pathname.split("/")[2]
    ? `/${decodeURIComponent(pathname.split("/")[2])}`
    : "/";
  let userRole: Role = "guest"; // Default role is guest

  // Decode the token to extract user role if available
  if (token) {
    try {
      const decodedToken: any = decodeToken(token);
      userRole = decodedToken?.role;
    } catch (error) {
      return NextResponse.redirect(
        new URL(`/${currentLang}/login`, request.url),
      );
    }
  }

  // Check route permissions
  const route = routes.find((route) => currentPath.startsWith(route.path));
  if (!route) return response || NextResponse.next(); // Allow access if route is not restricted

  if (!route.roles.includes(userRole)) {
    return NextResponse.redirect(
      new URL(
        `/${currentLang}/${userRole === "guest" ? "login" : "403"}`,
        request.url,
      ),
    );
  }

  return response || NextResponse.next(); // Allow access if route is not restricted
}
