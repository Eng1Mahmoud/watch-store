import { Suspense } from "react";
import dynamic from "next/dynamic";
import StoreProvider from "@/redux/StoreProvider";
import { Providers } from "@/QueryProvider/QueryProvider";
import Script from "next/script";
// import fonts
import { mainFont } from "./fonts/fonts";
import "./globals.css";
// import toastify css
import "react-toastify/dist/ReactToastify.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mainFont.variable}`}>
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
        <StoreProvider>
          <Providers>
            {children}
            <Suspense fallback={null}>
              <ToastContainer position="top-right" autoClose={5000} />
              <ScrollToTop />
            </Suspense>
            <SessionExpired />
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
