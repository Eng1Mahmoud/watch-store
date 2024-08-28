"use client";
import { motion } from "framer-motion";
export const AboutContent = () => {
  return (
    <motion.div
      className="pb-[100px]"
      initial={{ x: "100%" }}
      whileInView={{ x: 0 }}
    >
      <h1 className="text-2xl font-bold text-main-main">About Us</h1>
      <p className="text-text-secondary leading-[30px] pt-5">
        We, dummy company situated at area, city, state, are engaged in
        providing customers a commendable range of quality watches. Our
        collection, is a fine showcase of masterpieces that exhibit
        craftsmanship, designs that represent timeless tradition, and embrace
        innovation. A parade featuring over many international labels that
        inspire people to add to their existing collection. We have earned
        recognition as an honest and dependable watch dealer. We are known as
        the most trusted source for discounted watches.
      </p>
    </motion.div>
  );
};
