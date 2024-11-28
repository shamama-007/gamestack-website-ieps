import { configureStore } from "@reduxjs/toolkit";
import adminAuthSlice from "./reducers/adminAuthSlice";
import imageUploadSlice from "./reducers/imageUploadSlice";
import userAuthSlice from "./reducers/userAuthSlice";
import eventLogoUploadSlice from "./reducers/eventLogoUploadSlice";

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthSlice,
    userAuth: userAuthSlice,
    imageUpload: imageUploadSlice,
    eventLogoUpload: eventLogoUploadSlice
  },
});
