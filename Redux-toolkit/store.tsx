import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterReducer from './slice/filterSlice'
import userReducer from './slice/userSlice'
const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"], // Example: only persist 'items' in cart
};

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["session"], // Example: don't persist 'session' in user
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);


export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    filter: filterReducer,
    user: persistedUserReducer,
  },
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
