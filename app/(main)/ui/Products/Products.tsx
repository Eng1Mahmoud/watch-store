import ShowAllButton from "./ShowAllButton";
import Slider from "./Slider";
const Products = () => {
  return (
    <div className="container py-10" id="products">
      <h1 className="text-2xl font-extrabold text-center text-main-main pb-10">
        Products
      </h1>
      <Slider />
      <ShowAllButton />
    </div>
  );
};

export default Products;
