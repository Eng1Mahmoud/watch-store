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
          scrollRef.current.style.display = "block";
        } else {
          scrollRef.current.style.display = "none";
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
      className="fixed bottom-8 right-5 z-[1000000000000] cursor-pointer hidden bg-main-main p-2 rounded-full"
      ref={scrollRef}
      onClick={handleClick}
    >
      <IoIosArrowUp size={30} className="text-text-third" />
    </div>
  );
};

export default ScrollToTop;
