import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
export const Store = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof Store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
