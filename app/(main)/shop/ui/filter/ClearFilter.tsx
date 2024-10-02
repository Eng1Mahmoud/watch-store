"use client";
import { useAppDispatch } from "@/redux/hooks";
import { clearFilter } from "@/redux/features/filter";
const ClearFilter = () => {
  const dispatch = useAppDispatch();
  const handleClearFilter = () => {
    dispatch(clearFilter());
  };
  return (
    <div>
      <button
        className="btn btn-error-outline w-full "
        onClick={handleClearFilter}
      >
        Clear Filter
      </button>
    </div>
  );
};

export default ClearFilter;
