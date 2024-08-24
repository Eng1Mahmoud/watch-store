import Image from "next/image";
import React from "react";
import testimonialImage from "@/public/assets/testimonials/t1.png";
import { Slider } from "./slider/Slider";
const Testimonials = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center text-[30px] font-bold text-main-main my-10 ">
        Testimonials
      </h1>
      <div className="bg-hero bg-cover bg-no-repeat py-20 ">
        <div className="container">
          <div className="flex gap-5 md:gap-3 items-center flex-wrap md:flex-nowrap">
            <div className="md:w-1/3 w-full ">
              <Image
                src={testimonialImage}
                alt="testimonial"
                className="w-full h-full"
              />
            </div>
            <div className="md:w-2/3 w-full">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
