import { getTranslations } from "next-intl/server";

export const FaqItems = async () => {
  const t = await getTranslations("faqs.questions");

  const faqItems = [
    {
      title: t("returnPolicy.title"),
      body: t("returnPolicy.body"),
    },
    {
      title: t("shippingTime.title"),
      body: t("shippingTime.body"),
    },
    {
      title: t("internationalShipping.title"),
      body: t("internationalShipping.body"),
    },
    {
      title: t("createAccount.title"),
      body: t("createAccount.body"),
    },
    {
      title: t("login.title"),
      body: t("login.body"),
    },
    {
      title: t("resetPassword.title"),
      body: t("resetPassword.body"),
    },
  ];

  return faqItems;
};
