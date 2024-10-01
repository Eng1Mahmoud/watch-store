import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
// Dynamically import components
const ContactWithWhatsapp = dynamic(
  () => import("@/components/ContactWithWhatsapp"),
  { ssr: false },
);
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
      <Header />
      <main>{children}</main>
      <Footer />
      <ContactWithWhatsapp />
    </>
  );
}
