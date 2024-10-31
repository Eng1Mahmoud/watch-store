import { IWishlist } from "@/types/types";
import ProductCard from "@/components/product-card/ProductCard";
interface CategoriesListProps {
  data: IWishlist[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((wishlist: IWishlist) => (
        <div key={wishlist.product.id}>
          <ProductCard product={wishlist.product} forWishlist={true} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
