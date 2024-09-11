import StoreProvider from "@/redux/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "@/components/ScrollToTop";
// import fonts
import { mainFont } from "./fonts/fonts";
import "./globals.css";
import "./style.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mainFont.variable} `}>
      <head></head>
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          {children}
          <ToastContainer position="top-right" autoClose={5000} />
          <ScrollToTop />
        </StoreProvider>
      </body>
    </html>
  );
}
