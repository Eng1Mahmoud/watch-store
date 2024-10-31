import { Link } from "@/i18n/routing";

const ShowAllButton = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <Link href="/shop" className="btn btn-primary  px-16">
        Show All
      </Link>
    </div>
  );
};

export default ShowAllButton;
