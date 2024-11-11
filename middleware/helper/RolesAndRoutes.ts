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
  { path: "/my-account", roles: ["user", "admin"] },
  { path: "/change-password", roles: ["user", "admin"] },
  { path: "/my-Addresses", roles: ["user", "admin"] },
  { path: "/my-orders", roles: ["user", "admin"] },
  { path: "/my-Wishlist", roles: ["user", "admin"] },
  { path: "/my-profile", roles: ["user", "admin"] },
  { path: "/dashboard", roles: ["admin"] },
  { path: "/my-cart", roles: ["user", "admin"] },
  { path: "/cancel", roles: ["user", "admin"] },
  { path: "/success", roles: ["user", "admin"] },
  // arabic routes
  { path: "/تسجيل-الدخول", roles: ["guest"] },
  { path: "/انشاء-حساب", roles: ["guest"] },
  { path: "/تحقق-من-البريد-الإلكتروني", roles: ["guest"] },
  { path: "/استرجاع-كلمة المرور", roles: ["guest"] },
  { path: "/حسابي", roles: ["user", "admin"] },
  { path: "/تغيير-كلمة المرور", roles: ["user", "admin"] },
  { path: "/عناويني", roles: ["user", "admin"] },
  { path: "/طلباتي", roles: ["user", "admin"] },
  { path: "/قائمة الرغبات", roles: ["user", "admin"] },
  { path: "/الملف-الشخصي", roles: ["user", "admin"] },
  { path: "/سلة-المشتريات", roles: ["user", "admin"] },
  { path: "/إلغاء-الطلب", roles: ["user", "admin"] },
  { path: "/لوحة-التحكم", roles: ["admin"] },
  { path: "/نجاح-الدفع", roles: ["user", "admin"] },
];
