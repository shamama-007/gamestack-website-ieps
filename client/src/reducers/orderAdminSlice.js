import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action Get Order Detail (Admin)
export const getOrder = createAsyncThunk("getOrder", async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/orders`,
      {
        headers: {
          "content-type": "application/json",
          token: localStorage.getItem("auth-token"),
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.message;
  }
});

// Action Get Order Detail (Admin)
export const getOrderDetail = createAsyncThunk(
  "getOrderDetail",
  async (orderId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/order/${orderId}`,
        {
          headers: {
            "content-type": "application/json",
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

// Action Order Status Update (Admin)
export const orderStatusUpdate = createAsyncThunk(
  "orderStatusUpdate",
  async (data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/order/${
          data.values.orderStatusId
        }`,
        data,
        {
          headers: {
            "content-type": "application/json",
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

// Action Order Status Update (Admin)
export const orderItemStatusUpdate = createAsyncThunk(
  "orderItemStatusUpdate",
  async (data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/order/${
          data.orderStatusId
        }/${data.orderItemStatusId}`,
        { status: data.orderItemStatus },
        {
          headers: {
            "content-type": "application/json",
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

const orderAdminSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    orderDetail: {},
    isLoading: true,
    isLoadingDetail: true,
    isLoadingStatus: false,
    isLoadingItemStatus: false,
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
    // Action Get All Order (Admin)
    builder.addCase(getOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.order = action.payload.orders;
      state.success = action.payload.success;
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.success = action.payload.success;
    });

    // Action Get Order Detail (Admin)
    builder.addCase(getOrderDetail.pending, (state, action) => {
      state.isLoadingDetail = true;
    });
    builder.addCase(getOrderDetail.fulfilled, (state, action) => {
      state.isLoadingDetail = false;
      state.orderDetail = action.payload.order;
      state.success = action.payload.success;
    });
    builder.addCase(getOrderDetail.rejected, (state, action) => {
      state.isLoadingDetail = false;
      state.success = action.payload.success;
    });

    // Action Order Status Update (Admin)
    builder.addCase(orderStatusUpdate.pending, (state, action) => {
      state.isLoadingStatus = true;
    });
    builder.addCase(orderStatusUpdate.fulfilled, (state, action) => {
      state.isLoadingStatus = false;
      state.orderDetail = action.payload.order;
      state.success = action.payload.success;
      state.alert = true;
    });
    builder.addCase(orderStatusUpdate.rejected, (state, action) => {
      state.isLoadingStatus = false;
      state.success = action.payload.success;
      state.alert = true;
    });

    // Action Order Item Status Update (Admin)
    builder.addCase(orderItemStatusUpdate.pending, (state, action) => {
      state.isLoadingItemStatus = true;
    });
    builder.addCase(orderItemStatusUpdate.fulfilled, (state, action) => {
      state.isLoadingItemStatus = false;
      state.orderDetail = action.payload.order;
      state.success = action.payload.success;
      state.alert = true;
    });
    builder.addCase(orderItemStatusUpdate.rejected, (state, action) => {
      state.isLoadingItemStatus = false;
      state.success = action.payload.success;
      state.alert = true;
    });
  },
});

export const { clearError } = orderAdminSlice.actions;
export default orderAdminSlice.reducer;
