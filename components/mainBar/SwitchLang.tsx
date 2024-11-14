"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useParams, useSearchParams } from "next/navigation";
import arFlagLang from "@/public/assets/lang-flags/ar-flag.png";
import enFlagLang from "@/public/assets/lang-flags/us-flag.png";
import Image from "next/image";

export default function SwitchLang() {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const { locale } = useParams();
  const pathSegments = usePathname().split("/");
  const pathname = pathSegments.slice(2).join("/");
  const currentPath = pathname ? `/${pathname}` : "/";

  return (
    <div className="dropdown z-[10000]">
      <div
        tabIndex={0}
        role="button"
        className="btn bg-transparent hover:bg-transparent m-1 bg-text-third shadow-input dark:shadow-dark"
      >
        {locale === "en" ? (
          <div className="flex items-center gap-2">
            <Image src={enFlagLang} alt="English" width={20} height={20} />
            <span className=" text-main-main dark:text-dark-text">English</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Image src={arFlagLang} alt="Arabic" width={20} height={30} />
            <span className="text-main-main dark:text-dark-text">عربي</span>
          </div>
        )}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-text-third dark:bg-dark-bgSection rounded-box z-[1] p-2
         shadow-input w-full dark:shadow-dark"
      >
        <li>
          <Link
            href={{
              pathname: currentPath as any,
              query: searchParamsString,
            }}
            locale="en"
            className="text-main-main dark:text-dark-text "
          >
            <button className="flex items-center gap-2 w-full">
              <Image src={enFlagLang} alt="English" width={20} height={20} />
              English
            </button>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: currentPath as any,
              query: searchParamsString,
            }}
            locale="ar"
            className="text-main-main dark:text-dark-text"
          >
            <button className="flex items-center gap-2">
              <Image src={arFlagLang} alt="Arabic" width={20} height={30} />
              عربي
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
