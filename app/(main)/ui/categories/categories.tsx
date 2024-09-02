import Items from "./Items";

const Categories = () => {
  return (
    <div className="container py-10">
      <h2 className="text-2xl text-center my-10 text-main-main font-extrabold">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Items />
      </div>
    </div>
  );
};

export default Categories;
