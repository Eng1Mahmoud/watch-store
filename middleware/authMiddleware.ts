import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { routes } from "./helper/RolesAndRoutes";
import type { Role } from "./helper/RolesAndRoutes";
export function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("your_auth_token"); // Replace with your actual token name
  let userRole: Role = "guest"; // Default role is guest

  if (token) {
    try {
      const decodedToken = jwt.decode(token.value) as { role: Role };
      userRole = decodedToken.role;
    } catch (error) {
      console.log("Invalid token:", error);
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
