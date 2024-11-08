import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action Order Place (User)
export const orderPlace = createAsyncThunk("orderPlace", async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/order/new`,
      data,
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
});

// Action Get Order Detail (User)
export const getOrderDetail = createAsyncThunk(
  "getOrderDetail",
  async (orderId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/order/${orderId}`,
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

// Action Get Track Order Detail (User)
export const getTrackOrderDetail = createAsyncThunk(
  "getTrackOrderDetail",
  async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/order/track`,
        data,
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

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    orderId: "",
    isLoading: false,
    isLoadingDetail: true,
    isLoadingTrack: false,
    alert: false,
    success: null,
  },
  reducers: {
    clearError: (state) => {
      state.success = false;
      state.alert = false;
    },
  },
  extraReducers: (builder) => {
    // Action Order Place (User)
    builder.addCase(orderPlace.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(orderPlace.fulfilled, (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
      state.success = action.payload.success;
      state.orderId = action.payload.order._id;
      state.alert = true;
    });
    builder.addCase(orderPlace.rejected, (state, action) => {
      state.isLoading = false;
      state.success = action.payload.success;
      state.alert = true;
    });

    // Action Get Order Detail (User)
    builder.addCase(getOrderDetail.pending, (state, action) => {
      state.isLoadingDetail = true;
    });
    builder.addCase(getOrderDetail.fulfilled, (state, action) => {
      state.isLoadingDetail = false;
      state.order = action.payload.order;
      state.success = action.payload.success;
    });
    builder.addCase(getOrderDetail.rejected, (state, action) => {
      state.isLoadingDetail = false;
      state.success = action.payload.success;
    });

    // Action Get Track Order Detail (User)
    builder.addCase(getTrackOrderDetail.pending, (state, action) => {
      state.isLoadingTrack = true;
    });
    builder.addCase(getTrackOrderDetail.fulfilled, (state, action) => {
      state.isLoadingTrack = false;
      state.order = action.payload.order;
      state.success = action.payload.success;
    });
    builder.addCase(getTrackOrderDetail.rejected, (state, action) => {
      state.isLoadingTrack = false;
      state.success = action.payload.success;
    });
  },
});

export const { clearError } = orderSlice.actions;
export default orderSlice.reducer;
