import { BrandItems } from "./BrandItems";

export const Brands = () => {
  return (
    <div className="container">
      <h2 className="text-center text-3xl font-bold mt-10 text-main-main">
        Brands
      </h2>

      <div className="grid grid-cols-2  md:grid-cols-8  mt-10">
        <BrandItems />
      </div>
    </div>
  );
};
