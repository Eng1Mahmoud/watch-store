import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "Watch Store",
  description: "Watch Store is a demo e-commerce website",
};
export default function CustomErrorPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="pt-10">{children}</div>
      </body>
    </html>
  );
}
