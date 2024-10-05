"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
const Breadcrumbs = () => {
  const params = useParams();
  const paramsArray = Object.values(params); // convert params to array
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const breadcrumbs = pathSegments.map((segment, index) => {
    let segmentName = segment.replace(/-/g, " ");
    const isLastSegment = index === pathSegments.length - 1;
    const isParam = paramsArray.includes(segment);

    if (isLastSegment) {
      return isParam ? null : (
        <li key={index} className="text-main-main capitalize">
          {segmentName}
        </li>
      );
    } else {
      return (
        <li key={index} className="text-main-main capitalize">
          <Link href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
            {segmentName}
          </Link>
        </li>
      );
    }
  });
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li className="text-main-main">
          <Link href="/">Home</Link>
        </li>
        {breadcrumbs}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
