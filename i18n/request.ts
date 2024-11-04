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
    ...(await import(`@/messages/${locale}/resetPassword.json`)).default,
    ...(await import(`@/messages/${locale}/verifyEmail.json`)).default,
    ...(await import(`@/messages/${locale}/forgotPassword.json`)).default,
    ...(await import(`@/messages/${locale}/not-found.json`)).default,
    ...(await import(`@/messages/${locale}/error.json`)).default,
    ...(await import(`@/messages/${locale}/403.json`)).default,
    ...(await import(`@/messages/${locale}/shop.json`)).default,
    ...(await import(`@/messages/${locale}/infinityScroll.json`)).default,
    ...(await import(`@/messages/${locale}/wishlists.json`)).default,
    ...(await import(`@/messages/${locale}/my-cart.json`)).default,
    ...(await import(`@/messages/${locale}/my-acount.json`)).default,
    ...(await import(`@/messages/${locale}/profile-details.json`)).default,
    ...(await import(`@/messages/${locale}/my-address.json`)).default,
    ...(await import(`@/messages/${locale}/change-password.json`)).default,
    ...(await import(`@/messages/${locale}/loading-button.json`)).default,
    ...(await import(`@/messages/${locale}/admin-layout.json`)).default,
    ...(await import(`@/messages/${locale}/admin-statistics.json`)).default,
    ...(await import(`@/messages/${locale}/users.json`)).default,
    ...(await import(`@/messages/${locale}/products.json`)).default,
    ...(await import(`@/messages/${locale}/categories.json`)).default,
  };
  return {
    locale,
    messages,
  };
});
