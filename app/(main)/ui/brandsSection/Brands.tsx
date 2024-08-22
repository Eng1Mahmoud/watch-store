import React from "react";
import brand1 from "@/public/assets/brands/brand1.webp";
import brand2 from "@/public/assets/brands/brand2.webp";
import brand3 from "@/public/assets/brands/brand3.webp";
import brand4 from "@/public/assets/brands/brand4.webp";
import brand5 from "@/public/assets/brands/brand5.webp";
import brand6 from "@/public/assets/brands/brand6.webp";
import brand7 from "@/public/assets/brands/brand7.webp";
import brand8 from "@/public/assets/brands/brand8.webp";
import Image from "next/image";
const brands = [
  { src: brand1, alt: "brand1" },
  { src: brand2, alt: "brand2" },
  { src: brand3, alt: "brand3" },
  { src: brand4, alt: "brand4" },
  { src: brand5, alt: "brand5" },
  { src: brand6, alt: "brand6" },
  { src: brand7, alt: "brand7" },
  { src: brand8, alt: "brand8" },
];
export const Brands = () => {
  return (
    <div className="container">
      <h2 className="text-center text-3xl font-bold mt-10 text-main-main">
        Brands
      </h2>

      <div className="grid grid-cols-2  md:grid-cols-8  mt-10">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={brand.src} alt={brand.alt} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};
