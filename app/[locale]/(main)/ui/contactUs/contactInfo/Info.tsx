"use client";
import { GrMapLocation } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Info = () => {
  const t = useTranslations("contact.info");
  const info = [
    {
      id: 1,
      title: t("location.title"),
      description: t("location.description"),
      icon: <GrMapLocation size={30} className="font-extrabold" />,
    },
    {
      id: 2,
      title: t("email.title"),
      description: t("email.description"),
      icon: <CiMail size={30} className="font-extrabold" />,
      href: "mailto:mahmoudAbbamalik@gmail.com",
    },
    {
      id: 3,
      title: t("phone.title"),
      description: t("phone.description"),
      icon: <FiPhoneCall size={30} className="font-extrabold" />,
      href: "tel:+201201453941",
    },
    {
      id: 4,
      title: t("workingHours.title"),
      description: t("workingHours.description"),
      icon: <IoMdTime size={30} className="font-extrabold" />,
    },
  ];
  return (
    <motion.div
      initial={{ x: "100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-5"
    >
      {info.map((item) => (
        <div key={item.id} className="flex gap-4">
          <div className="text-main-main">{item.icon}</div>
          <div>
            <h3 className="text-lg font-bold text-main-main">{item.title}</h3>
            {item.href ? (
              <a href={item.href} className="text-sm text-gray-500">
                {item.description}
              </a>
            ) : (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Info;
