import React from "react";
import Breadcrumbs from "./ui/Breadcrumbs";
interface AcountLayoutProps {
  children: React.ReactNode;
}
const AcountPagesLayout = ({ children }: AcountLayoutProps) => {
  return (
    <div className="container">
      <div className="mt-4 shadow-custom rounded-md p-2">
        <Breadcrumbs />
      </div>

      {children}
    </div>
  );
};

export default AcountPagesLayout;
