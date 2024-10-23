"use client";
import { motion } from "framer-motion";
import aboutItem from "@/public/assets/about/about-item.webp";
import Image from "next/image";
export const ImageSection = () => {
  return (
    <motion.div
      className="pb-12 relative"
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
    >
      <Image src={aboutItem} alt="about-item block" width={500} height={500} />
    </motion.div>
  );
};
