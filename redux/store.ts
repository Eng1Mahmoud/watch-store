import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./features/user";
import CartSlice from "./features/cart";
import filterSlice from "./features/filter";
const rootReducer = combineReducers({
  user: userSlice,
  cart: CartSlice,
  filter: filterSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "filter"], // Specify which reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

// Define TypeScript types
export type AppStore = ReturnType<typeof Store>["store"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
