"use client";
import { setCategory, setPrice, setSearch } from "@/redux/features/filter";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MdClose } from "react-icons/md";

const SelectedFilterLabels = () => {
  const dispatch = useAppDispatch();
  const { category, minPrice, maxPrice, search } = useAppSelector(
    (state) => state.filter.filter,
  );
  const labels = [
    {
      label: "Category",
      value: category,
      clear: () => dispatch(setCategory("")),
    },
    {
      label: "Min Price",
      value: minPrice,
      clear: () => dispatch(setPrice({ min: 0, max: maxPrice })),
    },
    {
      label: "Max Price",
      value: maxPrice,
      clear: () => dispatch(setPrice({ min: minPrice, max: 0 })),
    },
    { label: "Search", value: search, clear: () => dispatch(setSearch("")) },
  ];

  return (
    <div className="container max-w-screen-sm py-8">
      <div className="flex flex-wrap gap-2">
        {labels
          .filter((label) => label.value)
          .map(({ label, value, clear }) => (
            <div
              key={label}
              className="bg-text-secondary text-white px-4 py-2 rounded flex items-center"
            >
              <span className="text-sm mr-2">
                {label}: {value}
              </span>
              <MdClose
                className="cursor-pointer text-main-hover text-[1rem] bg-text-third rounded-sm"
                onClick={clear}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectedFilterLabels;
