import { useTranslations } from "next-intl";
// Define the footer sections with links
export const useFooterSections = () => {
  const t = useTranslations("footer.sections");
  return [
    {
      title: t("importantLinks.title"),
      links: [
        { href: "/", label: t("importantLinks.links.home") },
        { href: "/shop", label: t("importantLinks.links.shop") },
        { href: "/categories", label: t("importantLinks.links.categories") },
        { href: "/faqs", label: t("importantLinks.links.faqs") },
      ],
    },
    {
      title: t("company.title"),
      links: [
        { href: "/#about", label: t("company.links.about_us") },
        { href: "/#contact", label: t("company.links.contact") },
        { href: "/#testimonials", label: t("company.links.testimonial") },
      ],
    },
    {
      title: t("legal.title"),
      links: [
        { href: "/terms", label: t("legal.links.terms") },
        { href: "/privacy", label: t("legal.links.privacy") },
        { href: "/cookie", label: t("legal.links.cookie") },
      ],
    },
  ];
};
