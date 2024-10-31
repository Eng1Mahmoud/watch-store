"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSearch } from "@/redux/features/filter";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
// icons
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import SearchHistory from "./SearchHistory";
const Search = () => {
  const t = useTranslations();
  const searchTerm = useAppSelector((state) => state.filter.filter.search);
  const [inputValue, setInputValue] = useState(searchTerm);
  const router = useRouter();
  const pathname = usePathname(); // get the current pathname

  const dispatch = useAppDispatch();
  // handle the search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };
  // handle search
  const handleSearch = () => {
    if (!pathname.includes("shop")) {
      // if the pathname is not /shop, redirect to /shop to show the search results
      router.push("/shop");
    }
    if (inputValue.trim()) {
      dispatch(setSearch(inputValue));
    }
  };
  // handle cancel search
  const handleCancelSearch = () => {
    dispatch(setSearch(""));
    setInputValue("");
  };
  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);
  return (
    <div className="relative w-full group">
      <motion.input
        type="text"
        placeholder={t("search")}
        className="input input-bordered w-full focus:outline-none rtl:pr-10 ltr:pl-10 text-main-main
         placeholder-gray-400 focus:placeholder-main-main peer"
        initial={{ borderColor: "#e5e7eb" }}
        whileFocus={{
          scale: 1.005,
          borderColor: "#406939",
          boxShadow: "0 0 1px #406939",
          borderBottomWidth: "2px",
        }}
        transition={{ duration: 0.3 }}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <FaTimes
        className="absolute ltr:right-11 rtl:left-11 top-1/2 transform -translate-y-1/2 text-gray-400
         group-focus-within:text-main-main transition-colors duration-300 cursor-pointer hidden peer-[&:not(:placeholder-shown)]:block"
        size={18}
        onClick={handleCancelSearch}
      />
      <SearchHistory />
      <FaSearch
        className="absolute ltr:left-3 rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400
         group-focus-within:text-main-main transition-colors duration-300 cursor-pointer"
        size={18}
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
