import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeToken } from "@/utils/decodeToken";
import { routes } from "./helper/RolesAndRoutes";
import type { Role } from "./helper/RolesAndRoutes";
export function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value; // Replace with your actual token name
  let userRole: Role = "guest"; // Default role is guest
  console.log("token", token);
  if (token) {
    try {
      const decodedToken: any = decodeToken(token);
      userRole = decodedToken;
      console.log("userRole", userRole);
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login if token is invalid
    }
  }

  // Find the matching route
  const route = routes.find((route) => pathname.startsWith(route.path));

  if (!route) {
    return NextResponse.next(); // Allow access if route is not restricted
  }

  // Check if user role is allowed to access the route
  if (!route.roles.includes(userRole)) {
    if (userRole === "guest") {
      return NextResponse.redirect(new URL("/login", request.url)); // Redirect guests to login
    } else {
      return NextResponse.redirect(new URL("/403", request.url)); // Redirect unauthorized users to 403 page
    }
  }

  return NextResponse.next(); // Allow access if role is authorized
}
