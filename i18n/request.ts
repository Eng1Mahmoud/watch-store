import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  const messages = {
    ...(await import(`@/messages/${locale}/header.json`)).default,
    ...(await import(`@/messages/${locale}/home.json`)).default,
    ...(await import(`@/messages/${locale}/login.json`)).default,
    ...(await import(`@/messages/${locale}/signUp.json`)).default,
  };
  return {
    locale,
    messages,
  };
});