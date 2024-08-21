"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper styles

import slid1 from "@/public/assets/slider/slide1.webp";
import slid2 from "@/public/assets/slider/slide2.webp";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const images = [slid1, slid2];
export const Slider: React.FC = () => {
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
    <div className="">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return (
              '<span class="' +
              className +
              '" style="background-color: red; width: 30px; height: 5px; display: inline-block; border-radius: 2px;"></span>'
            );
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        spaceBetween={200}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        className="position-relative h-[200px] md:h-[500px] w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt="slider"
              className="h-full w-full object-fill"
            />
          </SwiperSlide>
        ))}
        {/** creat next and prev button position top center slide  */}
        <div className=" hidden md:flex absolute inset-y-1/2 transform -translate-y-1/2 left-5 right-5  justify-between items-center z-50">
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
            <IoIosArrowForward className="text-[25px]  text-zinc-400" />
          </button>
        </div>
      </Swiper>
      <div className="swiper-pagination position-absolute bottom-[0px] w-full  bg-white z-50"></div>
    </div>
  );
};
