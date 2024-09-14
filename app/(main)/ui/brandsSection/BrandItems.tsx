"use client";
import Image from "next/image";
import { brands } from "./images";
import { BrandTypes } from "./images";
import { motion } from "framer-motion";
export const BrandItems = () => {
  return (
    <>
      {brands.map((brand: BrandTypes, index: number) => (
        <motion.div
          key={brand.alt}
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={100}
            height={100}
            className="w-full h-full"
          />
        </motion.div>
      ))}
    </>
  );
};
