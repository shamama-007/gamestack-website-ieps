import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action Get Category (User)
export const getCategory = createAsyncThunk("getCategory", async () => {
  if (!sessionStorage.getItem("category")) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXTERNAL_API_URL}/api/Categories`
      );
      const result = await response.json();
      sessionStorage.setItem("category", JSON.stringify(result));
      return result;
    } catch (error) {
      return error.message;
    }
  } else {
    return JSON.parse(sessionStorage.getItem("category"));
  }
});

// Action Get Category (Admin)
export const getAdminCategory = createAsyncThunk(
  "getAdminCategory",
  async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXTERNAL_API_URL}/api/Categories`
      );
      const result = await response.json();
      sessionStorage.setItem("category", JSON.stringify(result));
      return result;
    } catch (error) {
      return error.message;
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: null,
    categoriesDetail: null,
    isLoading: true,
    isLoadingAdmin: true,
    success: null,
  },
  extraReducers: (builder) => {
    // Action Get Category (User)
    builder.addCase(getCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Action Get Category (User)
    builder.addCase(getAdminCategory.pending, (state, action) => {
      state.isLoadingAdmin = true;
    });
    builder.addCase(getAdminCategory.fulfilled, (state, action) => {
      state.isLoadingAdmin = false;
      state.categories = action.payload;
    });
    builder.addCase(getAdminCategory.rejected, (state, action) => {
      state.isLoadingAdmin = false;
    });

    

  },
});

export default categorySlice.reducer;
export const { addToCard, removeCardItem, emptyCardItem, saveShippingInfo } =
  categorySlice.actions;
