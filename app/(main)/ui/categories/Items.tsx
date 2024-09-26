"use client";
import { ICategory } from "@/types/types";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { axiosClientInstance } from "@/axios/axiosClientInstance";
const Items = () => {
  const { data } = useQuery({
    queryKey: ["categories-home"],
    queryFn: async () => {
      const response = await axiosClientInstance(
        `/categories?page=${1}&limit=${20}`,
      );
      return response.data;
    },
  });

  const categories = data?.data.categories;
  console.log(categories);

  return (
    <>
      {categories?.map((item: ICategory, index: number) => (
        <Link href={`/categories/${item.name}`} key={item.id}>
          <motion.div
            className="relative overflow-hidden rounded-lg transition-all duration-100 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
            whileHover={{ scale: 1.02 }} // Add hover animation
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src={item.cover_url}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-[200px] object-cover"
              />
            </div>
            <motion.div
              className="hidden absolute top-0 left-0 w-full h-full bg-black/50 sm:flex items-center justify-center text-white text-2xl font-bold"
              whileHover={{ opacity: 0 }} // Hide text on hover
            >
              {item.name}
            </motion.div>
            {/* Add text for small screens */}
            <div className="sm:hidden">
              <h3 className="text-center text-lg font-semibold">{item.name}</h3>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default Items;
