import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action Login Account (Admin)
export const loginAdminHandler = createAsyncThunk(
  "loginAdminHandler",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/login`,
        { email, password },
        {
          headers: {
            "content-type": "application/json"
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

// Action Admin Account Detail (User)
export const adminDetailHandler = createAsyncThunk(
  "adminDetailHandler",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/me`,
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("auth-token"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

// Action Admin Logout Account (Admin)
export const logoutAdminHandler = createAsyncThunk(
  "logoutAdminHandler",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/logout`
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

// Action Admin Password Update Account (Admin)
export const adminPasswordUpdateHandler = createAsyncThunk(
  "adminPasswordUpdateHandler",
  async ({ oldPassword, newPassword, confirmPassword }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/password/update`,
        { oldPassword, newPassword, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("auth-token"),
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const adminAuthSlice = createSlice({
  name: "adminAuth",
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
  },
  extraReducers: (builder) => {
    // Action Login Account (Admin)
    builder.addCase(loginAdminHandler.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(loginAdminHandler.fulfilled, (state, action) => {
      localStorage.setItem("auth-token", action.payload.token);
      state.isLoading = false;
      state.data = action.payload.user;
      state.token = action.payload.token;
      state.message = action.payload.message;
      state.success = action.payload.status;
      state.auth = action.payload.status;
      state.alert = true;
    });
    builder.addCase(loginAdminHandler.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.success = action.payload.status;
    });

    // Action User Account Detail (User)
    builder.addCase(adminDetailHandler.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(adminDetailHandler.fulfilled, (state, action) => {
      state.isLoading = false;
      state.auth = action.payload.status || false;
      state.data = action.payload.user;
      state.success = action.payload.status;
      state.alert = false;
    });
    builder.addCase(adminDetailHandler.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    });

    // Action User Logout Account (User)
    builder.addCase(logoutAdminHandler.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logoutAdminHandler.fulfilled, (state, action) => {
      localStorage.removeItem("auth-token");
      state.isLoading = false;
      state.auth = false;
      state.data = null;
      state.message = action.payload.message;
      state.success = action.payload.status;
      state.alert = true;
    });
    builder.addCase(logoutAdminHandler.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    });

    // Action Admin Password Update (Admin)
    builder.addCase(adminPasswordUpdateHandler.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(adminPasswordUpdateHandler.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.success = action.payload.status;
      state.alert = true;
    });
    builder.addCase(adminPasswordUpdateHandler.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    });
  },
});
export const { clearError } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
