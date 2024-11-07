import Image from "next/image";
import { getTranslations } from "next-intl/server";
import testimonialImage from "@/public/assets/testimonials/t1.png";
import { Slider } from "./slider/Slider";
export const Testimonials = async () => {
  const t = await getTranslations("testimonials");
  return (
    <div className="mt-8" id="testimonials">
      <h1 className="text-center text-[30px] font-bold text-main-main my-10 dark:text-dark-text">
        {t("title")}
      </h1>
      <div className="bg-text-fourth dark:bg-dark-bgSection py-20 ">
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
