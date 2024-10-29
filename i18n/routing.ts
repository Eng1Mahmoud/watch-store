import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { getLocale } from "next-intl/server";
export const locales = ["en", "ar"];
export const routing = defineRouting({
  locales,
  defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

// create custom redirect function set locale to be in one place  get current locale
export const customRedirect = async (href: string) => {
  const currentLocale = await getLocale();
  redirect({ href, locale: currentLocale });
};
