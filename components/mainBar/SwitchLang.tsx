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
    <details className="dropdown z-[10000]">
      <summary className="btn bg-transparent hover:bg-transparent m-1 bg-text-third border border-gray-500">
        {locale === "en" ? (
          <>
            <Image src={enFlagLang} alt="English" width={20} height={20} />
            <span className="ml-2 dark:text-dark-text">English</span>
          </>
        ) : (
          <>
            <Image src={arFlagLang} alt="Arabic" width={20} height={20} />
            <span className="ml-2 dark:text-dark-text">عربي</span>
          </>
        )}
      </summary>
      <ul className="menu dropdown-content bg-text-third dark:bg-dark-bgSection rounded-box z-[1] p-2 shadow">
        <li>
          <Link
            href={{
              pathname: currentPath as any,
              query: searchParamsString,
            }}
            locale="en"
            className="dark:text-dark-text"
          >
            <button className="flex items-center gap-2">
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
            className="dark:text-dark-text"
          >
            <button className="flex items-center gap-2">
              <Image src={arFlagLang} alt="Arabic" width={20} height={20} />
              عربي
            </button>
          </Link>
        </li>
      </ul>
    </details>
  );
}
