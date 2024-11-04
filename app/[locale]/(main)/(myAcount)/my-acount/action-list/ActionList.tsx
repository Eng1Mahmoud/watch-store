import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export const ActionList = async () => {
  const t = await getTranslations("my-account.acount-actions");
  const actionList = [
    {
      title: t("my-orders.title"),
      description: t("my-orders.description"),
      icon: <IoCartOutline className="text-main-main" size={22} />,
      link: "my-acount/my-orders",
      id: 1,
    },
    {
      title: t("my-wishlist.title"),
      description: t("my-wishlist.description"),
      icon: <MdFavoriteBorder className="text-main-main" size={22} />,
      link: "/wishlists",
      id: 2,
    },
    {
      title: t("my-profile.title"),
      description: t("my-profile.description"),
      icon: <CgProfile className="text-main-main" size={22} />,
      link: "my-acount/my-profile",
      id: 3,
    },
    {
      title: t("my-address.title"),
      description: t("my-address.description"),
      icon: <CiLocationOn className="text-main-main" size={22} />,
      link: "my-acount/my-Addresses",
      id: 4,
    },
    {
      title: t("change-password.title"),
      description: t("change-password.description"),
      icon: <IoKeyOutline className="text-main-main" size={22} />,
      link: "my-acount/change-password",
      id: 5,
    },
  ];
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3  lg:grid-cols-5">
        {actionList.map((action) => (
          <div
            key={action.id}
            className="  py-3 px-4 border-[1px]  rounded-md shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative border-b-8 border-b-main-main"
          >
            <div className="flex gap-2">
              <div className="mr-2">{action.icon}</div>
              <div className="pt-0">
                <h3 className="font-semibold pt-0">{action.title}</h3>
                <p className="text-gray-500">{action.description}</p>
              </div>
            </div>
            <Link
              href={action.link}
              className="absolute top-0 left-0 right-0 bottom-0"
            ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};
