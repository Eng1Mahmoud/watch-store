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
import MainBar from "@/components/mainBar/MainBar";
import { mainFont } from "../fonts/fonts";
import "./globals.css";
import Script from "next/script";
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
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${mainFont.variable}`}
    >
      <body suppressHydrationWarning={true}>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-V9R9XWK0TD`}
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-V9R9XWK0TD');
      `}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <Providers>
              <MainBar />
              {children}
              <Suspense fallback={null}>
                <ToastContainer position="top-right" autoClose={5000} />
                <ScrollToTop />
              </Suspense>
              <SessionExpired />
            </Providers>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
