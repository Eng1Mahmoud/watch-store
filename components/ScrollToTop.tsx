"use client";
import { IoIosArrowUp } from "react-icons/io";
import { useRef } from "react";
const ScrollToTop = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let PositionHidden = 200;
  // handle scroll event
  window.onscroll = function () {
    if (scrollRef.current) {
      if (
        document.body.scrollTop > PositionHidden ||
        document.documentElement.scrollTop > PositionHidden
      ) {
        scrollRef.current.style.display = "block";
      } else {
        scrollRef.current.style.display = "none";
      }
    }
  };
  // handle click event
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="fixed bottom-8 right-5 z-[1000000000000] cursor-pointer hidden bg-main-main p-2 rounded-full"
      ref={scrollRef}
      onClick={handleClick}
    >
      <IoIosArrowUp size={30} className=" text-text-third" />
    </div>
  );
};

export default ScrollToTop;
