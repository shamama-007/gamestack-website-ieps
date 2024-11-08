import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action Get Product All (Admin)
export const getProductAll = createAsyncThunk("getProductAll", async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_EXTERNAL_API_URL}/api/Stock`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
});

// Action Get Product (Admin)
export const getProduct = createAsyncThunk("getProduct", async (categoryId) => {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_EXTERNAL_API_URL
      }/api/Stock?CatCode=${categoryId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
});

// Action Get Search Product (Admin)
export const getSearchProductAll = createAsyncThunk(
  "getSearchProductAll",
  async (searchQuery) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_EXTERNAL_API_URL
        }/api/SearchProduct?query=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  }
);

// Action Get Search Product (Admin)
export const getSearchProductForSalesmanAll = createAsyncThunk(
  "getSearchProductForSalesmanAll",
  async (searchQuery) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_EXTERNAL_API_URL
        }/api/SearchProduct?query=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }
);

// Action Get Search Product (User)
export const getSearchProduct = createAsyncThunk(
  "getSearchProduct",
  async (searchQuery) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_EXTERNAL_API_URL
        }/api/SearchProduct?query=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: true,
    isLoadingSearch: true,
    isLoadingSalesmanSearch: true,
    success: null,
  },
  reducers: {
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Action Get Product All (Admin)
    builder.addCase(getProductAll.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductAll.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProductAll.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Action Get Product All (Admin)
    builder.addCase(getSearchProductAll.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSearchProductAll.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getSearchProductAll.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Action getSearchProductForSalesmanAll (Admin)
    builder.addCase(getSearchProductForSalesmanAll.pending, (state, action) => {
      state.isLoadingSalesmanSearch = true;
    });
    builder.addCase(
      getSearchProductForSalesmanAll.fulfilled,
      (state, action) => {
        state.products = action.payload
        state.isLoadingSalesmanSearch = false;
      }
    );
    builder.addCase(
      getSearchProductForSalesmanAll.rejected,
      (state, action) => {
        state.products = action.payload
        state.isLoadingSalesmanSearch = false;
      }
    );

    // Action Get Product (Admin)
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Action Get Product (User)
    builder.addCase(getSearchProduct.pending, (state, action) => {
      state.isLoadingSearch = true;
    });
    builder.addCase(getSearchProduct.fulfilled, (state, action) => {
      state.isLoadingSearch = false;
      state.products = action.payload;
    });
    builder.addCase(getSearchProduct.rejected, (state, action) => {
      state.isLoadingSearch = false;
    });
  },
});

export default productSlice.reducer;
export const { setProductDetail } = productSlice.actions;
