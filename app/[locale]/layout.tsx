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
import { mainFont_en, mainFont_ar } from "../fonts/fonts";
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
      className={`${locale === "ar" ? mainFont_ar.variable : mainFont_en.variable} light bg-white`}
    >
      <body
        suppressHydrationWarning={true}
        className=" bg-white text-lime-950 dark:bg-dark-bg "
      >
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
                <ToastContainer
                  position={locale === "ar" ? "top-right" : "top-left"}
                  autoClose={5000}
                  style={{
                    zIndex: 100000000000,

                    left: "0px",
                    right: "0px",
                  }}
                />
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
