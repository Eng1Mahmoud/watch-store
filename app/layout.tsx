import StoreProvider from "@/redux/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
