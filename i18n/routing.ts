import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { getLocale } from "next-intl/server";
export const locales = ["en", "ar"];
export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/#about": {
      en: "/#about",
      ar: "/#من-نحن",
    },
    "/#categories": {
      en: "/#categories",
      ar: "/#الفئات",
    },
    "/#products": {
      en: "/#products",
      ar: "/#المنتجات",
    },
    "/#brands": {
      en: "/#brands",
      ar: "/#العلامات-التجارية",
    },
    "/#gallery": {
      en: "/#gallery",
      ar: "/#معرض-الصور",
    },
    "/#testimonials": {
      en: "/#testimonials",
      ar: "/#آراء-العملاء",
    },
    "/#contact": {
      en: "/#contact",
      ar: "/#تواصل-معنا",
    },
    "/login": {
      en: "/login",
      ar: "/تسجيل-الدخول",
    },
    "/signup": {
      en: "/signup",
      ar: "/انشاء-حساب",
    },
    "/verify-email/[token]": {
      en: "/verify-email",
      ar: "/تحقق-من-البريد-الإلكتروني",
    },
    "/forgot-Password": {
      en: "/forgot-Password",
      ar: "/نسيت-كلمة-المرور",
    },
    "/reset-password/[token]": {
      en: "/reset-password/[token]",
      ar: "/اعادة-تعين-كلمة-المرور/[token]",
    },
    "/admin": {
      en: "/admin",
      ar: "/لوحة-التحكم",
    },
    "/admin/users": {
      en: "/admin/users",
      ar: "/مستخدمين/لوحة-التحكم",
    },
    "/admin/edit-user/[id]": {
      en: "/admin/edit-user/[id]",
      ar: "/تعديل-مستخدم/لوحة-التحكم/[id]",
    },
    "/admin/products": {
      en: "/admin/products",
      ar: "/منتجات/لوحة-التحكم",
    },
    "/admin/edit-product/[id]": {
      en: "/admin/edit-product/[id]",
      ar: "/تعديل-منتج/لوحة-التحكم/[id]",
    },
    "/admin/categories": {
      en: "/admin/categories",
      ar: "/فئات/لوحة-التحكم",
    },
    "/admin/edit-category/[name]": {
      en: "/admin/edit-category/[name]",
      ar: "/تعديل-فئة/لوحة-التحكم/[name]",
    },
    "/admin/add-product": {
      en: "/admin/add-product",
      ar: "/إضافة-منتج/لوحة-التحكم",
    },
    "/admin/add-category": {
      en: "/admin/add-category",
      ar: "/إضافة-فئة/لوحة-التحكم",
    },
    "/my-account": {
      en: "/my-account",
      ar: "/حسابي",
    },
    "/my-account/my-orders": {
      en: "/my-account/my-orders",
      ar: "/طلباتي/حسابي",
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
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

// create custom redirect function set locale to be in one place  get current locale
export const customRedirect = async (href: any) => {
  const currentLocale = await getLocale();
  redirect({ href, locale: currentLocale });
};
