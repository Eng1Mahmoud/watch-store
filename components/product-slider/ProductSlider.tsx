"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import SliderControl from "./ControlSlider";
import ProductCard from "@/components/product-card/ProductCard";
import { IProduct } from "@/types/types";

interface ProductSliderProps {
  products: IProduct[];
  autoplay?: boolean;
  slidesPerView?: number;
}

const ProductSlider = ({
  products,
  autoplay = true,
  slidesPerView = 4,
}: ProductSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={autoplay ? { delay: 2500, disableOnInteraction: true } : false}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={slidesPerView}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: slidesPerView, spaceBetween: 10 },
      }}
      style={{ padding: "5px !important" }}
      className="w-full relative"
    >
      <SliderControl handlePrev={handlePrev} handleNext={handleNext} />
      {products?.map((product: IProduct) => (
        <SwiperSlide key={product.id} className="overflow-hidden">
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
