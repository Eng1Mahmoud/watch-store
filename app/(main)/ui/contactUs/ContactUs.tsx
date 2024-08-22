import React from "react";
import ContactUsForm from "./contactForm/ContactUsForm";
import ContactUsInfo from "./contactInfo/ContactUsInfo";

const ContactUs = () => {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-main-main text-center my-10">
        Contact Us
      </h1>
      <ContactUsForm />
      <ContactUsInfo />
    </div>
  );
};

export default ContactUs;
