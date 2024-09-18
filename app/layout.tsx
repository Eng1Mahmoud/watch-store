import { Suspense } from "react";
import dynamic from "next/dynamic";
import StoreProvider from "@/redux/StoreProvider";
// import fonts
import { mainFont } from "./fonts/fonts";
import "./globals.css";

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
        <StoreProvider>
          {children}
          <Suspense fallback={null}>
            <ToastContainer position="top-right" autoClose={5000} />
            <ScrollToTop />
          </Suspense>
        </StoreProvider>
      </body>
    </html>
  );
}
