import brand1 from "@/public/assets/brands/brand1.webp";
import brand2 from "@/public/assets/brands/brand2.webp";
import brand3 from "@/public/assets/brands/brand3.webp";
import brand4 from "@/public/assets/brands/brand4.webp";
import brand5 from "@/public/assets/brands/brand5.webp";
import brand6 from "@/public/assets/brands/brand6.webp";
import brand7 from "@/public/assets/brands/brand7.webp";
import brand8 from "@/public/assets/brands/brand8.webp";
import { StaticImageData } from "next/image";
export const brands = [
  { src: brand1, alt: "brand1" },
  { src: brand2, alt: "brand2" },
  { src: brand3, alt: "brand3" },
  { src: brand4, alt: "brand4" },
  { src: brand5, alt: "brand5" },
  { src: brand6, alt: "brand6" },
  { src: brand7, alt: "brand7" },
  { src: brand8, alt: "brand8" },
];

export interface BrandTypes {
  src: StaticImageData;
  alt: string;
}
