import Script from "next/script";
// import fonts
import { mainFont } from "./fonts/fonts";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${mainFont.variable}`}>
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
        {children}
      </body>
    </html>
  );
}
