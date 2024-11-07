import { MdManageHistory } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  removeItemSearchFromHistory,
  setSearch,
  clearSearchHistory,
} from "@/redux/features/filter";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const SearchHistory = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchHistory = useAppSelector(
    (state) => state.filter.filter.searchHistory,
  );
  const dispatch = useAppDispatch();
  const t = useTranslations();
  // handle re search by clicking on items the search history
  const handleReSearch = (search: string) => {
    // check pathname if it is not /shop, redirect to /shop`
    if (!pathname.includes("shop")) {
      router.push("/shop");
    }
    dispatch(setSearch(search));
  };
  // handle remove item from search history
  const handleRemoveItem = (search: string) => {
    dispatch(removeItemSearchFromHistory(search));
  };
  // handle clear all search history
  const handleClearAll = () => {
    dispatch(clearSearchHistory());
  };
  return (
    <div className="dropdown dropdown-end absolute rtl:left-3 ltr:right-3 top-1/2 transform -translate-y-1/2 z-[100]">
      <div
        tabIndex={0}
        role="button"
        className="hover:bg-gray-100 dark:hover:bg-dark-bg p-1 rounded-full transition-colors"
      >
        <MdManageHistory
          className="text-gray-500 cursor-pointer dark:text-dark-text"
          size={20}
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-100 dark:bg-dark-bgSection rounded-box z-[10] w-64 p-2 shadow-2xl border border-gray-200 dark:border-dark-sectionText dark:shadow-dark   my-2 max-h-[300px] overflow-y-auto flex flex-col"
      >
        {searchHistory.length === 0 ? (
          <li className="text-center text-gray-500 dark:text-dark-text py-2">
            {t("noSearchHistory")}
          </li>
        ) : (
          <>
            {searchHistory.map((search: string) => (
              <li
                key={search}
                className="hover:bg-gray-100 dark:hover:bg-dark-bg rounded-md my-1 w-full"
              >
                <div className="flex justify-between items-center py-2 px-3">
                  <span
                    onClick={() => handleReSearch(search)}
                    className="cursor-pointer flex-grow truncate"
                  >
                    {search}
                  </span>
                  <FaTimes
                    className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors ml-2"
                    size={14}
                    onClick={() => handleRemoveItem(search)}
                  />
                </div>
              </li>
            ))}
            <li className="text-center mt-2 w-full">
              <button
                onClick={handleClearAll}
                className="btn btn-error-outline text-center w-full"
              >
                {t("clearHistory")}
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SearchHistory;
