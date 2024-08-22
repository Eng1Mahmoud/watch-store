import React from "react";
import aboutItem from "@/public/assets/about/about-item.webp";
import Image from "next/image";
const About = () => {
  return (
    <div
      className={`bg-[url('/assets/about/bg-about.jpeg')] bg-cover bg-no-repeat `}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2   items-center">
        <div className="pb-12">
          <Image src={aboutItem} alt="about-item" />
        </div>
        <div className="pb-[100px]">
          <h1 className="text-2xl font-bold text-main-main">About Us</h1>
          <p className="text-text-secondary leading-[30px] pt-5">
            We, dummy company situated at area, city, state, are engaged in
            providing customers a commendable range of quality watches. Our
            collection, is a fine showcase of masterpieces that exhibit
            craftsmanship, designs that represent timeless tradition, and
            embrace innovation. A parade featuring over many international
            labels that inspire people to add to their existing collection. We
            have earned recognition as an honest and dependable watch dealer. We
            are known as the most trusted source for discounted watches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
