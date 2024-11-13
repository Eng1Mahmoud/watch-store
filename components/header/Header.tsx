import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { Link } from "@/i18n/routing";
import Search from "./search/Search";
import Cart from "./cart/Cart";
import NavLinks from "./NavLinks";
import Avatar from "./avatar/Avatar";
import Aside from "./Aside";
import AuthLinks from "./AuthLinks";
import WishList from "./wish-list/WishList";
const Header = () => {
  return (
    <div className="header container">
      <div className="navbar bg-base-100 gap-5 dark:bg-dark-bg">
        <div className="flex-none">
          <Link href="/">
            <Image
              width={100}
              height={100}
              alt="watch shop "
              src={logo}
              className="scale-[1.6]"
            />
          </Link>
        </div>
        <div className="gap-2 flex-1 justify-end ">
          <div className="hidden md:flex-1 md:flex">
            <Search />
          </div>
          <div className="flex items-center gap-3 pr-2">
            <WishList />
            <Cart />
            <Avatar />
            <AuthLinks />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className=" mt-3 pb-2">
        <div className="flex justify-center items-center gap-2 ">
          <NavLinks />
          <div className="flex-1 md:hidden">
            <Search />
          </div>
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Header;
