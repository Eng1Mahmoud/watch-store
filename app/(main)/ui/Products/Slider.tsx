"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
import SliderControl from "./SliderControl";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "/assets/products/product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "/assets/products/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "/assets/products/product3.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    image: "/assets/products/product4.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    image: "/assets/products/product5.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    image: "/assets/products/product6.jpg",
  },
];

const Slider = () => {
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
    <>
      <SliderControl handlePrev={handlePrev} handleNext={handleNext} />
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
        style={{ padding: "5px !important" }}
        className="w-full "
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="shadow-custom my-3 overflow-hidden "
          >
            <div className="hover:scale-105 duration-300 transition-transform ">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="mx-auto"
              />
              <div className="p-3">
                <h3 className="mt-2 font-semibold">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
