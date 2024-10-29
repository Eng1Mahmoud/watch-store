import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ICategory } from "@/types/types";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/redux/hooks";
import { setCategory } from "@/redux/features/filter";
interface CategoryCardProps {
  item: ICategory;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ item, index }) => {
  const dispatch = useAppDispatch();
  // set category to redux
  const handleCategory = () => {
    dispatch(setCategory(item.name));
  };
  return (
    <Link
      href={`/shop/`}
      key={item.id}
      onClick={handleCategory}
      className="shadow-lg"
    >
      <motion.div
        className="relative overflow-hidden rounded-lg transition-all duration-100 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.3 }}
        whileHover={{ scale: 1.02 }} // Add hover animation
        viewport={{ once: true }}
      >
        <div className="relative">
          <Image
            src={item.cover_url}
            alt={item.name}
            width={300}
            height={200}
            className="w-full h-[200px] object-cover"
          />
        </div>
        <motion.div
          className="hidden absolute top-0 left-0 w-full h-full bg-black/50 sm:flex items-center justify-center text-white text-2xl font-bold"
          whileHover={{ opacity: 0 }} // Hide text on hover
        >
          {item.name}
        </motion.div>
        {/* Add text for small screens */}
        <div className="sm:hidden">
          <h3 className="text-center text-lg font-semibold">{item.name}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
