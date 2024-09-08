import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./features/user";
import ShowDialogCropImage from "./features/ShowDialogCropImage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // only user will be persisted
};

const persistedUserReducer = persistReducer(persistConfig, userSlice);

export const Store = () => {
  const store = configureStore({
    reducer: {
      user: persistedUserReducer,
      showDialogCropImage: ShowDialogCropImage,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"],
        },
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export type AppStore = ReturnType<typeof Store>["store"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
