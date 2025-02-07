import { getTranslations } from "next-intl/server";
import ContactUsForm from "./contactForm/ContactUsForm";
import ContactUsInfo from "./contactInfo/ContactUsInfo";

export const ContactUs = async () => {
  const t = await getTranslations("contact");
  return (
    <div className="container py-10" id="contact">
      <h1 className="text-3xl font-bold text-main-main text-center my-10 dark:text-dark-text">
        {t("title")}
      </h1>
      <div className="">
        <ContactUsForm />
        <ContactUsInfo />
      </div>
    </div>
  );
};

export default ContactUs;
