import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemsApi } from "../features/itemsSlice";
export const store = configureStore({
  reducer: {
    [ItemsApi.reducerPath]: ItemsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(ItemsApi.middleware),
});