"use client";
import { ICategory } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetCategoriesSelectBox } from "@/hooks/getCategoriesSelectBox";
import { setCategory } from "@/redux/features/filter";
const CategoriesSelectBox = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.filter.filter.category); // get category from redux
  const { categories } = useGetCategoriesSelectBox();
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <div>
      <h1 className="text-lg pb-2">Categories</h1>
      <select
        className="select select-bordered w-full"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        {categories.map((category: ICategory) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriesSelectBox;
