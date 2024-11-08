import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action Get Generic Detail (Admin)
export const getGeneric = createAsyncThunk("getGeneric", async () => {
  if (!sessionStorage.getItem("generic")) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXTERNAL_API_URL}/api/Generics`
      );
      const result = await response.json();
      sessionStorage.setItem("generic", JSON.stringify(result));

      return result;
    } catch (error) {
      return error.message;
    }
  } else {
    return JSON.parse(sessionStorage.getItem("generic"));
  }
});

const genericSlice = createSlice({
  name: "category",
  initialState: {
    generic: null,
    isLoading: true,
    success: null,
  },
  extraReducers: (builder) => {
    // Action Get Generic (Admin)
    builder.addCase(getGeneric.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getGeneric.fulfilled, (state, action) => {
      state.isLoading = false;
      state.generic = action.payload;
    });
    builder.addCase(getGeneric.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default genericSlice.reducer;
