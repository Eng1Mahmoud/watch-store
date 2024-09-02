import Link from "next/link";

const ShowAllButton = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <Link href="/products" className="btn btn-primary  px-16">
        Show All
      </Link>
    </div>
  );
};

export default ShowAllButton;
