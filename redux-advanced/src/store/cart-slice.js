import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialCartState = {
  totalAmount: 18,
  totalQuantity: 3,
  items: [{ id: 1, title: "Test Item", quantity: 3, price: 6, total: 18 }],
  isChanged: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.isChanged = true;
      const existInCartIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log('existInCartIndex', existInCartIndex);
      if (existInCartIndex >= 0) {
        // such an item exist in a cart
        state.items[existInCartIndex].quantity++;
        state.items[existInCartIndex].total += action.payload.price;
      } else {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
          total: action.payload.price,
        });
      }
      state.totalQuantity++;
      state.totalAmount += action.payload.price;
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    removeItem(state, action) {
      state.isChanged = true;
      const existInCartIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const price = state.items[existInCartIndex].price;
      if (state.items[existInCartIndex].quantity > 1) {
        state.items[existInCartIndex].quantity--;
        state.items[existInCartIndex].total -= price;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.totalQuantity--;
      state.totalAmount -= price;
    },
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
