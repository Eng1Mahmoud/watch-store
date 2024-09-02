import type { Metadata } from "next";
import StoreProvider from "@/redux/StoreProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../globals.css";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import ContactWithWhatsapp from "@/components/ContactWithWhatsapp";
export const metadata: Metadata = {
  title: "Watch Store",
  description: "Watch Store is a demo e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          {/* Google tag (gtag.js) */}
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-V9R9XWK0TD`}
          />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V9R9XWK0TD');
        `}
          </Script>
          <Header />
          <div className="">{children}</div>
          <Footer />
          <ToastContainer position="top-right" autoClose={5000} />
          <ScrollToTop />
          <ContactWithWhatsapp />
        </body>
      </html>
    </StoreProvider>
  );
}
