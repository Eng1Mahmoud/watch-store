"use client";
import React from "react";
import { useParams } from "next/navigation";
import { getPathname, Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
const Breadcrumbs = () => {
  const locale = useLocale();
  const params = useParams();
  const newParams = Object.fromEntries(Object.entries(params).slice(1)); // get the params except the first one TO BE USED IN getPathname
  const paramsValues = Object.values(params).slice(1); // get the params values except the first one to be used in the path segments to remove them from the path segments
  const pathname = usePathname();
  const pathnames = getPathname({
    locale: locale,
    href: {
      pathname: pathname as any,
      params: newParams as any,
    },
  });

  const pathSegments = pathnames
    .split("/")
    .filter(
      (segment) =>
        segment !== "" && segment !== locale && !paramsValues.includes(segment),
    )
    .map(
      (segment, index, array) =>
        locale === "ar"
          ? array[array.length - 1 - index] // For Arabic
          : segment, // For other languages
    );
  const breadcrumbs = pathSegments.map((segment, index) => {
    let segmentName = segment.replace(/-/g, " ");
    const isLastSegment = index === pathSegments.length - 1; // check if it is the last segment

    if (isLastSegment) {
      return (
        <li
          key={index}
          className="text-main-main capitalize dark:text-dark-text"
        >
          {segmentName}
        </li>
      );
    } else {
      return (
        <li
          key={index}
          className="text-main-main capitalize dark:text-dark-text"
        >
          <Link href={`/${pathSegments.slice(0, index + 1).join("/")}` as any}>
            {segmentName}
          </Link>
        </li>
      );
    }
  });
  return (
    <div className="breadcrumbs text-sm dark:bg-dark-bgSection dark:shadow-dark px-3">
      <ul>
        <li className="text-main-main dark:text-dark-text">
          <Link href="/">{locale === "ar" ? "الرئيسية" : "Home"}</Link>
        </li>
        {breadcrumbs}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
