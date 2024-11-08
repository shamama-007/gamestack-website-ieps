import { createSlice } from "@reduxjs/toolkit";

const salesmanOrderSlice = createSlice({
  name: "cart",
  initialState: {
    salesmanOrder: null,
    cartItems: localStorage.getItem("salesmanOrderItems")
      ? JSON.parse(localStorage.getItem("salesmanOrderItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  reducers: {
    takeOrder: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);

      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.id === isItemExist.id ? item : i
        );
        localStorage.setItem("salesmanOrderItems", JSON.stringify(state.cartItems));
      } else {
        state.cartItems.push(item);
        localStorage.setItem("salesmanOrderItems", JSON.stringify(state.cartItems));
      }
    },
    removeCardItem: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      localStorage.setItem("salesmanOrderItems", JSON.stringify(state.cartItems));
    },
    emptyCardItem: (state) => {
      state.cartItems = [];
      localStorage.setItem("salesmanOrderItems", JSON.stringify([]));
    },
    successOrder: (state, action) => {
      state.salesmanOrder = action.payload;
    },
  },
});

export default salesmanOrderSlice.reducer;
export const { takeOrder, removeCardItem, emptyCardItem, successOrder } =
  salesmanOrderSlice.actions;
