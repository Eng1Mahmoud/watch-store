import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { Link } from "@/i18n/routing";
import { useFooterSections } from "./footerSections";
import { useTranslations } from "next-intl";
// Define a shared link style
const linkClass =
  "text-text-secondary font-main hover:text-main-main dark:text-dark-text";
const Footer = () => {
  const footerSections = useFooterSections();
  const t = useTranslations("footer");
  return (
    <section className="bg-text-fourth dark:bg-dark-bgSection">
      <footer className="footer  p-10 ">
        <aside className="flex flex-col max-w-xs">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="scale-[1.6]"
          />
          <div className="flex flex-col gap-2 font-main text-gray-700 dark:text-dark-text">
            <span className="font-bold text-main-main dark:text-dark-text text-xl">
              {t("store_name")}
            </span>
            <p>{t("trusted_since")}</p>
            <p>
              {t("explore_text")}
              <span className="italic px-1">{t("cta")}</span>{" "}
              {/* Added a call to action */}
            </p>
          </div>
        </aside>
        {footerSections.map((section) => (
          <nav key={section.title}>
            <h6 className="dark:text-dark-text">{section.title}</h6>
            <ul className="flex flex-col gap-2 ">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link className={linkClass} href={link.href as any}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </footer>
      <div className="divider h-[1px] bg-text-third"></div>
      <div className="flex justify-center items-center py-4 ">
        {" "}
        {/* Updated styles for background color, text color, and padding */}
        <div className="text-center flex flex-col gap-2">
          <p className="text-sm dark:text-dark-text">
            <span className="font-semibold dark:text-dark-text">
              &copy; {new Date().getFullYear()}{" "}
            </span>
            {t("copyright")}
          </p>{" "}
          {/* Updated font size */}
          <p className="text-sm dark:text-dark-text">
            {t("developed_by")}{" "}
            <span className="font-semibold dark:text-dark-text">Dhruv</span>
          </p>{" "}
          {/* Updated font size */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
