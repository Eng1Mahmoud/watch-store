import Items from "./Items";
import { getCategories } from "@/actions/getCategories";
import { QueryClient } from "@tanstack/react-query";
import Link from "next/link";
const Categories = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["categories-home"],
    queryFn: () => getCategories(1, 20),
  });
  return (
    <div className="container py-10" id="categories">
      <h2 className="text-2xl text-center my-10 text-main-main font-extrabold">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Items />
      </div>
      <div className="flex justify-center mt-10">
        <Link className="btn btn-primary px-16" href="/categories">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Categories;
