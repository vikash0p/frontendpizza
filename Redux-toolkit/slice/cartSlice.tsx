"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/Redux-toolkit/store";

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  qty: number;
}
interface initialState {
  cart: Item[];
}

const initialState: initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      const pizzaData = action.payload;
      const existItem = state.cart.find((item) => item.id === pizzaData.id);

      if (existItem) {
        state.cart = state.cart.map((value) => {
          if (value.id === pizzaData.id) {
            return { ...value, qty: value.qty + 1 };
          } else {
            return value;
          }
        });
      } else {
        state.cart.push(pizzaData);
      }
    },
    removeFromCart: (state, action: PayloadAction<Item>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    IncreaseQty: (state, action: PayloadAction<Item>) => {
      state.cart = state.cart.map((value) => {
        if (value.id === action.payload.id) {
          let myQty: number;

          if (value.qty >= 0 && value.qty <=9  ) {
            myQty = value.qty + 1;
          } else {
            myQty = 1;
          }

          //  const myQty = value.qty +1
          return {
            ...value,
            qty: myQty,
          };
        } else {
          return value;
        }
      });
    },
    DecreaseQty: (state, action: PayloadAction<Item>) => {
      state.cart = state.cart.map((value) => {
        if (value.id === action.payload.id) {
          let myQty: number;

          if (value.qty >= 2) {
            myQty = value.qty - 1;
          } else {
            myQty = 1;
          }
          return {
            ...value,
            qty: myQty,
          };
        } else {
          return value;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, IncreaseQty, DecreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
