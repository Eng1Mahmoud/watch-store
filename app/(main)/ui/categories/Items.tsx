"use client";
import { motion } from "framer-motion"; // Import motion from framer-motion
import cat1 from "@/public/assets/categories/cat1.webp";
import cat2 from "@/public/assets/categories/cat2.webp";
import cat3 from "@/public/assets/categories/cat3.webp";
import cat4 from "@/public/assets/categories/cat4.jpeg";
import Image from "next/image";

const categorieItems = [
  {
    id: 1,
    name: "men's",
    image: cat1,
  },
  {
    id: 2,
    name: "women's",
    image: cat2,
  },
  {
    id: 3,
    name: "kids",
    image: cat3,
  },
  {
    id: 4,
    name: "unisex",
    image: cat4,
  },
];

const Items = () => {
  return (
    <>
      {categorieItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.3 }}
          whileHover={{ scale: 1.05 }} // Add hover animation
        >
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center text-white text-2xl font-bold"
            whileHover={{ opacity: 0 }} // Hide text on hover
          >
            {item.name}
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default Items;
