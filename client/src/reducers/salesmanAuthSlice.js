import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action Login Account (Salesman)
export const loginSalesmanHandler = createAsyncThunk(
  "loginSalesmanHandler",
  async ({ userId, password }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_EXTERNAL_API_URL}/api/User/Login`,
        { userId, password },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const salesmanAuthSlice = createSlice({
  name: "salesmanAuth",
  initialState: {
    isLoading: true,
    data: null,
    token: null,
    message: "",
    success: null,
    auth: false,
    alert: false,
  },
  reducers: {
    clearError: (state) => {
      state.success = false;
      state.alert = false;
    },
    SalesmanAuthCheck: (state) => {
      let token = JSON.parse(localStorage.getItem("salesman-token"));
      if (localStorage.getItem("salesman-token")) {
        state.isLoading = false;
        state.data = JSON.parse(localStorage.getItem("salesman-token"));
        state.token = token.token;
        state.message = "Salesman login successfully";
        state.success = true;
        state.auth = true;
        state.alert = true;
      } else {
        state.isLoading = false;
        state.data = JSON.parse(localStorage.getItem("salesman-token"));
        state.token = null;
        state.message = "Salesman Logout";
        state.success = false;
        state.auth = false;
        state.alert = false;
      }
    },

    logoutSalesman: (state) => {
      localStorage.removeItem("salesman-token");
      state.data = null;
      state.token = null;
      state.message = "Salesman Logout successfully";
      state.success = true;
      state.auth = false;
      state.alert = true;
    },
  },
  extraReducers: (builder) => {
    // Action Login Account (Salesman)
    builder.addCase(loginSalesmanHandler.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(loginSalesmanHandler.fulfilled, (state, action) => {
      localStorage.setItem("salesman-token", JSON.stringify(action.payload));
      state.isLoading = false;
      state.data = action.payload;
      state.token = action.payload.token;
      state.message = "Salesman login successfully";
      state.success = true;
      state.auth = true;
      state.alert = true;
    });
    builder.addCase(loginSalesmanHandler.rejected, (state, action) => {
      state.isLoading = false;
      state.message = "Salesman login not successfully";
      state.success = false;
    });
  },
});
export const { clearError, SalesmanAuthCheck, logoutSalesman } =
  salesmanAuthSlice.actions;

export default salesmanAuthSlice.reducer;
