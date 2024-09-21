import { ICategory } from "@/types/types";
import Items from "./Items";
import { getCategories } from "./getCategories";
const Categories = async () => {
  const {
    data: { categories },
  } = (await getCategories(1, 10)) as { data: { categories: ICategory[] } };
  console.log(categories);

  return (
    <div className="container py-10" id="categories">
      <h2 className="text-2xl text-center my-10 text-main-main font-extrabold">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Items categories={categories} />
      </div>
    </div>
  );
};

export default Categories;
