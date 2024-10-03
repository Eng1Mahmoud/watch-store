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
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.filter.category = action.payload;
    },
    setPrice: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.filter.minPrice = action.payload.min;
      state.filter.maxPrice = action.payload.max;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filter.search = action.payload;
    },
    clearFilter: (state) => {
      state.filter = initialState.filter;
    },
  },
});

export const { setCategory, setPrice, setSearch, clearFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
