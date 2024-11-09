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
    <div className="p-2">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="position-relative h-auto  m-[10px]"
      >
        {[1, 2, 3].map((slide) => (
          <SwiperSlide
            key={slide}
            className="bg-white dark:bg-dark-bgSection dark:shadow-dark p-5 rounded-lg shadow-xl h-[250px] flex flex-col border-2 dark:border-dark-sectionText"
          >
            {" "}
            {/* Set a fixed height */}
            <div>
              <div className="flex items-center justify-center flex-shrink-0">
                <FaQuoteLeft className="text-[50px] text-main-main" />
              </div>
              <div className="flex flex-col flex-grow justify-center">
                <h1 className="text-text-secondary dark:text-dark-text text-2xl font-bold text-center pt-5">
                  {t(`${slide}.title`)}
                </h1>
                <p className="text-text-secondary dark:text-dark-text text-center pt-5 overflow-y-auto">
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
            className="border-2 bg-white text-white p-2 rounded-full dark:bg-dark-bgSection
             dark:text-dark-text dark:shadow-dark dark:border-dark-sectionText rtl:rotate-180"
          >
            <IoIosArrowBack className="text-[25px] text-zinc-400" />
          </button>

          <button
            onClick={handleNext}
            className="border-2 bg-white text-white p-2 rounded-full dark:bg-dark-bgSection
             dark:text-dark-text dark:shadow-dark dark:border-dark-sectionText rtl:rotate-180"
          >
            <IoIosArrowForward className="text-[25px]  text-zinc-400" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
