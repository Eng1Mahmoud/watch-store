"use client";
import { useEffect, useRef } from "react";
import whatsapp from "@/public/assets/whatsapp.svg";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const ContactWithWhatsapp = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const PositionHidden = 160;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        if (
          document.body.scrollTop > PositionHidden ||
          document.documentElement.scrollTop > PositionHidden
        ) {
          scrollRef.current.classList.remove("translate-x-[150%]");
        } else {
          scrollRef.current.classList.add("translate-x-[150%]");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed bottom-24 right-5 translate-x-[150%] transition-transform duration-300 z-[200000000000000000000]"
      id="whatsapp-button"
      ref={scrollRef}
    >
      <Link href="https://wa.me/201201453941" target="_self">
        <Image src={whatsapp} alt="whatsapp" width={50} height={50} />
      </Link>
    </div>
  );
};

export default ContactWithWhatsapp;
