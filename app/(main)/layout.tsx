import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

// Dynamically import components
const ContactWithWhatsapp = dynamic(
  () => import("@/components/ContactWithWhatsapp"),
  { ssr: false },
);
const SessionExpired = dynamic(() => import("@/components/SessionExpired"), {
  ssr: false,
});

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
      <SessionExpired />
      <Header />
      <main>{children}</main>
      <Footer />
      <ContactWithWhatsapp />
    </>
  );
}
