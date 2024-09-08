import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import ContactWithWhatsapp from "@/components/ContactWithWhatsapp";
import SessionExpired from "@/components/SessionExpired";
export const metadata: Metadata = {
  title: "Watch Store",
  description: "Watch Store is a demo e-commerce website",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
      <SessionExpired />
      <Header />
      <div>{children}</div>
      <Footer />
      <ContactWithWhatsapp />
    </>
  );
}
