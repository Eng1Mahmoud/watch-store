"use client";
import { axiosClientInstance } from "@/axios/axiosClientInstance";
import { ICategory } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { setCategory } from "@/redux/features/filter";
const CategoriesSelectBox = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.filter.filter.category); // get category from redux

  const { data } = useQuery({
    queryKey: ["categories-home"],
    queryFn: async () => {
      const response = await axiosClientInstance(
        `/categories?page=${1}&limit=${20}`,
      );
      return response.data;
    },
  });

  const categories = data?.data.categories || []; // get categories from api

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedCategory = categories.find(
      (category: ICategory) => category.id === event.target.value,
    );
    if (selectedCategory) {
      dispatch(
        setCategory({ id: selectedCategory.id, name: selectedCategory.name }),
      );
    }
  };

  return (
    <div>
      <h1 className="text-lg pb-2">Categories</h1>
      <select
        className="select select-bordered w-full"
        value={category.id}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        {categories.map((category: ICategory) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoriesSelectBox;
