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
    "/Dashboard": {
      en: "/Dashboard",
      ar: "/لوحة-التحكم",
    },
    "/Dashboard/users": {
      en: "/Dashboard/users",
      ar: "/مستخدمين/لوحة-التحكم",
    },
    "/Dashboard/edit-user/[id]": {
      en: "/Dashboard/edit-user/[id]",
      ar: "/تعديل-مستخدم/لوحة-التحكم/[id]",
    },
    "/Dashboard/products": {
      en: "/Dashboard/products",
      ar: "/منتجات/لوحة-التحكم",
    },
    "/Dashboard/edit-product/[id]": {
      en: "/Dashboard/edit-product/[id]",
      ar: "/تعديل-منتج/لوحة-التحكم/[id]",
    },
    "/Dashboard/categories": {
      en: "/Dashboard/categories",
      ar: "/فئات/لوحة-التحكم",
    },
    "/Dashboard/edit-category/[name]": {
      en: "/Dashboard/edit-category/[name]",
      ar: "/تعديل-فئة/لوحة-التحكم/[name]",
    },
    "/Dashboard/add-product": {
      en: "/Dashboard/add-product",
      ar: "/إضافة-منتج/لوحة-التحكم",
    },
    "/Dashboard/add-category": {
      en: "/Dashboard/add-category",
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
