"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa6";
import { useTranslations } from "next-intl";
// Import Swiper styles
import { Autoplay } from "swiper/modules";
export const Slider: React.FC = () => {
  const t = useTranslations("testimonials.items");
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
    <div className="py-2">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        spaceBetween={200}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          // when window width is >= 640px

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="position-relative h-auto  w-full"
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide key={slide}>
            {" "}
            {/* Set a fixed height */}
            <div className="bg-white p-5 rounded-lg shadow-xl h-[250px] flex flex-col">
              <div className="flex items-center justify-center flex-shrink-0">
                <FaQuoteLeft className="text-[50px] text-main-main" />
              </div>
              <div className="flex flex-col flex-grow justify-center">
                <h1 className="text-text-secondary text-2xl font-bold text-center pt-5">
                  {t(`${slide}.title`)}
                </h1>
                <p className="text-text-secondary text-center pt-5 overflow-y-auto">
                  {t(`${slide}.description`)}
                </p>
              </div>
            </div>
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
    </div>
  );
};
