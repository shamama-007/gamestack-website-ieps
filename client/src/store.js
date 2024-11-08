import { configureStore } from "@reduxjs/toolkit";
import adminAuthSlice from "./reducers/adminAuthSlice";
import cartSlice from "./reducers/cartSlice";
import productSlice from "./reducers/productSlice";
import categorySlice from "./reducers/categorySlice";
import genericSlice from "./reducers/genericSlice";
import productDetailSlice from "./reducers/productDetailSlice";
import imageUploadSlice from "./reducers/imageUploadSlice";
import orderSlice from "./reducers/orderSlice";
import orderAdminSlice from "./reducers/orderAdminSlice";
import salesmanAuthSlice from "./reducers/salesmanAuthSlice";
import salesmanOrderSlice from "./reducers/salesmanOrderSlice";
import userAuthSlice from "./reducers/userAuthSlice";

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthSlice,
    userAuth: userAuthSlice,
    salesmanAuth: salesmanAuthSlice,
    cart: cartSlice,
    salesmanOrder: salesmanOrderSlice,
    product: productSlice,
    category: categorySlice,
    generic: genericSlice,
    productDetail: productDetailSlice,
    imageUpload: imageUploadSlice,
    order: orderSlice,
    adminOrder: orderAdminSlice,
  },
});
