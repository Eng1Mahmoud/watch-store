import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearFilter, loadFilter } from "@/redux/features/filter";

export const useFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter.filter);
  // save filter to localStorage
  const saveFilterToLocalStorage = ({ id }: { id: string }) => {
    localStorage.setItem(`filter-${id}`, JSON.stringify(filter));
    dispatch(clearFilter());
  };
  // load filter from localStorage
  const loadFilterFromLocalStorage = ({ id }: { id: string }) => {
    const savedFilter = localStorage.getItem(`filter-${id}`);
    if (savedFilter) {
      dispatch(loadFilter(JSON.parse(savedFilter)));
    }
  };

  return {
    saveFilterToLocalStorage,
    loadFilterFromLocalStorage,
  };
};
