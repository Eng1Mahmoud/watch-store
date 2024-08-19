import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export const metadata: Metadata = {
  title: "Zon",
  description: "ZON COFFEE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`dark`} suppressHydrationWarning={true}>
          <Header />
          <div className="min-h-[50vh] h-auto">{children}</div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
