import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "@/types/types";

interface FilterState {
  filter: IFilter;
}

const initialState: FilterState = {
  filter: {
    category: "",
    minPrice: 0,
    maxPrice: 0,
    search: "",
    searchHistory: [],
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // set the category
    setCategory: (state, action: PayloadAction<string>) => {
      state.filter.category = action.payload;
    },
    // set the price
    setPrice: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.filter.minPrice = action.payload.min;
      state.filter.maxPrice = action.payload.max;
    },
    // set the search
    setSearch: (state, action: PayloadAction<string>) => {
      // set the search
      state.filter.search = action.payload;
      // ensure searchHistory exists and add the search to it
      if (!Array.isArray(state.filter.searchHistory)) {
        state.filter.searchHistory = [];
      }
      // if
      // check if this search exist in the search history and if not add it
      if (
        !state.filter.searchHistory.includes(action.payload) &&
        action.payload.trim() !== ""
      ) {
        state.filter.searchHistory.push(action.payload);
      }
    },
    // remove the search from the search history
    removeItemSearchFromHistory: (state, action: PayloadAction<string>) => {
      state.filter.searchHistory = state.filter.searchHistory.filter(
        (search) => search !== action.payload,
      );
    },
    // clear the search history
    clearSearchHistory: (state) => {
      state.filter.searchHistory = [];
    },
    // clear the filter
    clearFilter: (state) => {
      state.filter = initialState.filter;
    },
  },
});

export const {
  setCategory,
  setPrice,
  setSearch,
  clearFilter,
  removeItemSearchFromHistory,
  clearSearchHistory,
} = filterSlice.actions;
export default filterSlice.reducer;
