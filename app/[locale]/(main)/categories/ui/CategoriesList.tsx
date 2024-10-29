import { ICategory } from "@/types/types";
import CategoryCard from "@/components/CategoryCard";
interface CategoriesListProps {
  data: ICategory[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((category: ICategory, index: number) => (
        <div key={category.id}>
          <CategoryCard item={category} index={index} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
