"use client";
import { IoIosArrowUp } from "react-icons/io";
import { useRef, useEffect } from "react";

const ScrollToTop = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const PositionHidden = 200;

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

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect once on mount

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className=" border-[1px] fixed bottom-8 right-5 z-[1000000000000] cursor-pointer bg-main-main dark:bg-dark-bgSection dark:shadow-dark dark:border-white  p-2 rounded-full translate-x-[150%] transition-transform duration-300"
      ref={scrollRef}
      onClick={handleClick}
    >
      <IoIosArrowUp size={30} className="text-text-third" />
    </div>
  );
};

export default ScrollToTop;
