import type { Metadata } from "next";
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
    <html lang="en" >
      <body className={`dark` } >{children}</body>
    </html>
  );
}
