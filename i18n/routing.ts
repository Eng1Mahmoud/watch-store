import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { getLocale } from "next-intl/server";
export const locales = ["en", "ar"];
export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/login": {
      en: "/login",
      ar: "/تسجيل-الدخول",
    },
    "/signup": {
      en: "/signup",
      ar: "/انشاء-حساب",
    },
    "/verify-email/[token]": {
      en: "/verify-email/[token]",
      ar: "/تحقق-من-البريد-الإلكتروني/[token]",
    },
    "/forgot-password": {
      en: "/forgot-password",
      ar: "/نسيت-كلمة-المرور",
    },
    "/reset-password/[token]": {
      en: "/reset-password/[token]",
      ar: "/اعادة-تعين-كلمة-المرور/[token]",
    },
    "/dashboard": {
      en: "/dashboard",
      ar: "/لوحة-التحكم",
    },
    "/dashboard/users": {
      en: "/dashboard/users",
      ar: "/مستخدمين/لوحة-التحكم",
    },
    "/dashboard/edit-user/[id]": {
      en: "/dashboard/edit-user/[id]",
      ar: "/تعديل-مستخدم/لوحة-التحكم/[id]",
    },
    "/dashboard/products": {
      en: "/dashboard/products",
      ar: "/منتجات/لوحة-التحكم",
    },
    "/dashboard/edit-product/[id]": {
      en: "/dashboard/edit-product/[id]",
      ar: "/تعديل-منتج/لوحة-التحكم/[id]",
    },
    "/dashboard/categories": {
      en: "/dashboard/categories",
      ar: "/فئات/لوحة-التحكم",
    },
    "/dashboard/edit-category/[name]": {
      en: "/dashboard/edit-category/[name]",
      ar: "/تعديل-فئة/لوحة-التحكم/[name]",
    },
    "/dashboard/add-product": {
      en: "/dashboard/add-product",
      ar: "/إضافة-منتج/لوحة-التحكم",
    },
    "/dashboard/add-category": {
      en: "/dashboard/add-category",
      ar: "/إضافة-فئة/لوحة-التحكم",
    },
    "/dashboard/orders": {
      en: "/dashboard/orders",
      ar: "/الاوردرات/لوحة-التحكم",
    },
    "/dashboard/orders/[id]": {
      en: "/dashboard/orders/[id]",
      ar: "/الطلبات/لوحة-التحكم/[id]",
    },
    "/dashboard/settings": {
      en: "/dashboard/settings",
      ar: "/الاعدادات/لوحة-التحكم",
    },
    "/my-account": {
      en: "/my-account",
      ar: "/حسابي",
    },
    "/my-account/my-orders": {
      en: "/my-account/my-orders",
      ar: "/طلباتي/حسابي",
    },
    "/my-account/my-orders/[id]": {
      en: "/my-account/my-orders/[id]",
      ar: "/طلباتي/حسابي/[id]",
    },
    "/my-account/change-password": {
      en: "/my-account/change-password",
      ar: "/تغيير-كلمة-المرور/حسابي",
    },
    "/my-account/my-profile": {
      en: "/my-account/my-profile",
      ar: "/الملف-الشخصي/حسابي",
    },
    "/my-account/my-addresses": {
      en: "/my-account/my-addresses",
      ar: "/عناويني/حسابي",
    },
    "/my-cart": {
      en: "/my-cart",
      ar: "/سلة-المشتريات",
    },
    "/shop": {
      en: "/shop",
      ar: "/المتجر",
    },
    "/wishlists": {
      en: "/wishlists",
      ar: "/قائمة-الرغبات",
    },
    "/categories": {
      en: "/categories",
      ar: "/فئات",
    },
    "/faqs": {
      en: "/faqs",
      ar: "/الأسئلة-الشائعة",
    },
    "/cancel": {
      en: "/cancel",
      ar: "/إلغاء-الدفع",
    },
    "/success": {
      en: "/success",
      ar: "/نجاح-الدفع",
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

// create custom redirect function set locale to be in one place  get current locale
export const customRedirect = async (href: any) => {
  const currentLocale = await getLocale();
  redirect({ href, locale: currentLocale });
};
