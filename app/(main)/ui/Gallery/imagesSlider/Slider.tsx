"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { images } from "../data/Images";

interface SliderProps {
  initialSlide: number;
}

export const Slider = ({ initialSlide }: SliderProps) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

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
    <div className="w-full  ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        spaceBetween={200}
        slidesPerView={1}
        loop={true}
        initialSlide={initialSlide - 1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative h-[300px] md:h-[600px] max-w-[700px] w-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image src={img.src} alt={img.alt} className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons for larger screens */}
      <div className="hidden md:flex absolute inset-y-1/2 transform -translate-y-1/2 left-5 right-5 justify-between items-center z-50">
        <button
          onClick={handlePrev}
          className="bg-white text-white p-2 rounded-full"
        >
          <IoIosArrowBack className="text-[25px] text-zinc-400" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-white p-2 rounded-full"
        >
          <IoIosArrowForward className="text-[25px] text-zinc-400" />
        </button>
      </div>
      {/* Navigation buttons for mobile screens */}
      <div className="flex md:hidden justify-center items-center mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className="bg-white text-zinc-400 p-2 rounded-full"
        >
          <IoIosArrowBack className="text-[25px]" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-zinc-400 p-2 rounded-full"
        >
          <IoIosArrowForward className="text-[25px]" />
        </button>
      </div>
    </div>
  );
};
