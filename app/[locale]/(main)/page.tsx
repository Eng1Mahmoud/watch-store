import React from "react";
import { Slider } from "./ui/Slider";
import About from "./ui/AboutSection/About";
import { Brands } from "./ui/brandsSection/Brands";
import ContactUs from "./ui/contactUs/ContactUs";
import { Gallery } from "./ui/Gallery/Gallery";
import Testimonials from "./ui/testimonials/Testimonials";
import Categories from "./ui/categories/categories";
import Products from "./ui/Products/Products";
const page = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <About />
      <Brands />
      <Gallery />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default page;
