export type Role = "guest" | "user" | "admin";

interface RouteConfig {
  path: string;
  roles: Role[];
}

export const routes: RouteConfig[] = [
  { path: "/login", roles: ["guest"] },
  { path: "/signup", roles: ["guest"] },
  { path: "/verify-email", roles: ["guest"] },
  { path: "/reset-password", roles: ["guest"] },
  { path: "/forgot-password", roles: ["guest"] },
  { path: "/my-acount", roles: ["user", "admin"] },
  { path: "/change-password", roles: ["user", "admin"] },
  { path: "/my-Addresses", roles: ["user", "admin"] },
  { path: "/my-orders", roles: ["user", "admin"] },
  { path: "/my-Wishlist", roles: ["user", "admin"] },
  { path: "/my-profile", roles: ["user", "admin"] },
  { path: "/Dashboard", roles: ["admin"] },
  { path: "/my-cart", roles: ["user", "admin"] },
  { path: "/cancel", roles: ["user", "admin"] },
];
