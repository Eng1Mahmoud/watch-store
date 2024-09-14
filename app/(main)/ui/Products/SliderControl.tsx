import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderControl = ({
  handlePrev,
  handleNext,
}: {
  handlePrev: () => void;
  handleNext: () => void;
}) => {
  return (
    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between z-50 pointer-events-none">
      <button
        onClick={handlePrev}
        className="bg-main-main p-2 rounded-full pointer-events-auto"
      >
        <IoIosArrowBack className="text-[25px] text-white" />
      </button>
      <button
        onClick={handleNext}
        className="bg-main-main p-2 rounded-full pointer-events-auto"
      >
        <IoIosArrowForward className="text-[25px] text-white" />
      </button>
    </div>
  );
};

export default SliderControl;
