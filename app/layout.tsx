import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";
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
          <div className="container">
            {children} {/*page content*/}
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
