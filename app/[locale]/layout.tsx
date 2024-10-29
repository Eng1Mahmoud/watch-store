import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import StoreProvider from "@/redux/StoreProvider";
import { Providers } from "@/QueryProvider/QueryProvider";
import { routing } from "@/i18n/routing";
// import toastify css
import "react-toastify/dist/ReactToastify.css";
import { notFound } from "next/navigation";
import SwitchLang from "@/components/SwitchLang";
const SessionExpired = dynamic(() => import("@/components/SessionExpired"), {
  ssr: false,
});

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false },
);
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <StoreProvider>
        <Providers>
          <SwitchLang locale={locale} />

          {children}
          <Suspense fallback={null}>
            <ToastContainer position="top-right" autoClose={5000} />
            <ScrollToTop />
          </Suspense>
          <SessionExpired />
        </Providers>
      </StoreProvider>
    </NextIntlClientProvider>
  );
}
