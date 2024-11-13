import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SliderControlProps {
  handlePrev: () => void;
  handleNext: () => void;
  className?: string;
}

const SliderControl = ({
  handlePrev,
  handleNext,
  className = "",
}: SliderControlProps) => {
  return (
    <div
      className={`hidden sm:flex absolute inset-y-0 left-0 right-0 items-center justify-between z-50 pointer-events-none ${className}`}
    >
      <button
        onClick={handlePrev}
        className="bg-main-main p-2 rounded-full pointer-events-auto rtl:rotate-180 dark:bg-dark-bgSection dark:shadow-dark dark:border-dark-sectionText dark:border-2"
      >
        <IoIosArrowBack className="text-[25px] text-white" />
      </button>
      <button
        onClick={handleNext}
        className="bg-main-main p-2 rounded-full pointer-events-auto rtl:rotate-180 dark:bg-dark-bgSection dark:shadow-dark dark:border-dark-sectionText dark:border-2"
      >
        <IoIosArrowForward className="text-[25px] text-white" />
      </button>
    </div>
  );
};

export default SliderControl;
