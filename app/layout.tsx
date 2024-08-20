import type { Metadata } from "next";
import StoreProvider from "@/redux/StoreProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
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
          <div className="">{children}</div>
          <Footer />
          <ToastContainer position="top-right" autoClose={5000} />
        </body>
      </html>
    </StoreProvider>
  );
}
