"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const formatPath = (pathSegment: string) => {
    return pathSegment.replace(/-/g, " ");
  };

  const getBreadcrumbs = (pathname: string) => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    return pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return (
        <li key={path} className="capitalize">
          {index < pathSegments.length - 1 ? (
            <Link href={path} className="hover:line-through no-underline">
              {formatPath(segment)}
            </Link>
          ) : (
            formatPath(segment)
          )}
        </li>
      );
    });
  };

  return (
    <div className="breadcrumbs text-sm">
      <ul className="flex space-x-2">
        <li>
          <Link href="/my-acount" className="hover:line-through no-underline">
            My Account
          </Link>
        </li>
        {getBreadcrumbs(pathname)}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
