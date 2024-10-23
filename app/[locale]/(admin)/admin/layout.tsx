import type { Metadata } from "next";
import DrawerToggle from "../ui/DrawerToggle";

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
      <DrawerToggle>
        <div className="container py-2">{children}</div>
      </DrawerToggle>
    </>
  );
}
