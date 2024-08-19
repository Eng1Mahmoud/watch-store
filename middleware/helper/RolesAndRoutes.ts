export type Role = "guest" | "user" | "admin" | "superAdmin";

interface RouteConfig {
  path: string;
  roles: Role[];
}

export const routes: RouteConfig[] = [
  { path: "/login", roles: ["guest"] },
  { path: "/signup", roles: ["guest"] },
  { path: "/forgot-password", roles: ["guest"] },
  { path: "/home", roles: ["guest", "user", "admin", "superAdmin"] },
  { path: "/about", roles: ["guest", "user", "admin", "superAdmin"] },
  { path: "/profile", roles: ["user", "admin", "superAdmin"] },
  { path: "/settings", roles: ["user", "admin", "superAdmin"] },
  { path: "/admin/dashboard", roles: ["admin", "superAdmin"] },
  { path: "/admin/settings", roles: ["admin", "superAdmin"] },
  { path: "/superadmin/controls", roles: ["superAdmin"] },
  { path: "/superadmin/users", roles: ["superAdmin"] },
];
