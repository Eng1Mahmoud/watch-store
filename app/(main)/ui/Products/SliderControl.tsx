import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderControl = ({
  handlePrev,
  handleNext,
}: {
  handlePrev: () => void;
  handleNext: () => void;
}) => {
  return (
    <div className="relative pt-5">
      {/**control slider */}
      <div className="flex items-center z-50 justify-start gap-8 mb-5">
        <div className="flex gap-4">
          <button onClick={handlePrev} className="btn btn-primary">
            <IoIosArrowBack className="text-[25px]" />
          </button>
          <button onClick={handleNext} className="btn btn-primary">
            <IoIosArrowForward className="text-[25px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderControl;
