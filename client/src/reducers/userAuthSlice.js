import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action Login Account (User)
export const loginUserHandler = createAsyncThunk(
  "loginUserHandler",
  async ({ userId, password }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CLIENT_API}/api/Users/Login`,
        { userId, password },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    formShowingStatus: false,
    isLoading: true,
    data: null,
    userData: null,
    token: null,
    message: "",
    success: null,
    auth: false,
    alert: false,
  },
  reducers: {

    UserAuthCheck: (state) => {
      if (localStorage.getItem("user-token")) {
        state.isLoading = false;
        state.data = JSON.parse(localStorage.getItem("user-data"));
        state.token = JSON.parse(localStorage.getItem("user-token"));
        state.message = "User login successfully";
        state.success = true;
        state.auth = true;
        state.alert = true;
      } else {
        state.isLoading = false;
        state.data = null;
        state.token = null;
        state.message = "User Logout";
        state.success = false;
        state.auth = false;
        state.alert = false;
      }
    },

    logoutUser: (state) => {
      localStorage.removeItem("user-data");
      localStorage.removeItem("user-token");
      state.data = null;
      state.token = null;
      state.message = "User Logout successfully";
      state.success = true;
      state.auth = false;
      state.alert = true;
    },

    clearError: (state) => {
      state.success = false;
      state.alert = false;
    },


  },
  extraReducers: (builder) => {

    // Action Login Account (Salesman)
    builder.addCase(loginUserHandler.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(loginUserHandler.fulfilled, (state, action) => {
      if (action.payload.token) {
        localStorage.setItem("user-data", JSON.stringify(action.payload));
        localStorage.setItem(
          "user-token",
          JSON.stringify(action.payload.token)
        );
        state.isLoading = false;
        state.data = action.payload;
        state.token = action.payload.token;
        state.message = "User login successfully";
        state.success = true;
        state.auth = true;
        state.alert = true;
      } else {
        state.isLoading = false;
        state.message = "Invalid credential";
        state.success = false;
        state.alert = true;
        state.auth = false;
      }
    });
    builder.addCase(loginUserHandler.rejected, (state, action) => {
      state.isLoading = false;
      state.message = "Invalid credential";
      state.success = false;
    });
  },
});
export const { UserAuthCheck, logoutUser, clearError } = userAuthSlice.actions;

export default userAuthSlice.reducer;
