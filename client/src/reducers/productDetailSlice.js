import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action Get Product Detail (Admin)
export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (productId) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_EXTERNAL_API_URL
        }/api/Getproductdetails?Code=${productId}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    products: [],
    productDetail: {},
    isLoading: true,
    success: null,
  },

  extraReducers: (builder) => {
    // Action Get Product Detail (Admin)
    builder.addCase(getProductDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetail = action.payload;
    });
    builder.addCase(getProductDetail.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default productDetailSlice.reducer;
