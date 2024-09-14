import type { Metadata } from "next";
import SessionExpired from "@/components/SessionExpired";
import DrawerToggle from "./admin/ui/DrawerToggle";

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
      <SessionExpired />
      <DrawerToggle>{children}</DrawerToggle>
    </>
  );
}
