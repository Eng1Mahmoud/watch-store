"use client";
import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { motion } from "framer-motion";
const info = [
  {
    id: 1,
    title: "Location",
    description: "1234 Main Street, Melbourne, Australia",
    icon: <GrMapLocation size={30} className="font-extrabold" />,
  },
  {
    id: 2,
    title: "Email",
    description: "mahmoudAbbamalik@gmail.com",
    icon: <CiMail size={30} className="font-extrabold" />,
    href: "mailto:mahmoudAbbamalik@gmail.com",
  },
  {
    id: 3,
    title: "Phone",
    description: "+201201453941",
    icon: <FiPhoneCall size={30} className="font-extrabold" />,
    href: "tel:+201201453941",
  },
  {
    id: 4,
    title: "Working Hours",
    description: "Mon - Fri: 8:00 - 19:00",
    icon: <IoMdTime size={30} className="font-extrabold" />,
  },
];

const Info = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      whileInView={{ x: 0 }}
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
