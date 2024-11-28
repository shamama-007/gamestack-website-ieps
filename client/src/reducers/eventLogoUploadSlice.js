import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Event Logo Upload (Admin)
export const eventLogoUploadHandler = createAsyncThunk(
  "eventLogoUploadHandler",
  async ({ eventLogo }) => {
    const formData = new FormData();
    formData.append("eventLogo", eventLogo);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/event/image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.getItem("auth-token"),
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

// Event Logo Get (Admin)
export const getEventLogoHandler = createAsyncThunk(
  "getEventLogoHandler",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/event/image`,
        {
          headers: {
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

// Event Logo Get Single (Admin)
export const getEventLogoSingleHandler = createAsyncThunk(
  "getEventLogoSingleHandler",
  async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/event/image/${id}`,
        {
          headers: {
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

// Event Status Update (Admin)
export const eventLogoStatusUpdateHandler = createAsyncThunk(
  "eventLogoStatusUpdateHandler",
  async ({ eventStatus, eventStatusId }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL
        }/api/v1/admin/event/image/${eventStatusId}`,
        { status: eventStatus },
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

// Banner Status Delete (Admin)
export const eventLogoDeleteHandler = createAsyncThunk(
  "eventLogoDeleteHandler",
  async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/event/image/${id}`,
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

export const eventLogoUploadSlice = createSlice({
  name: "eventLogoUpload",
  initialState: {
    isLoading: false,
    message: "",
    events: [],
    eventDetail: {},
    isLoadingEvent: true,
    isLoadingEventUpload: false,
    isLoadingEventDetail: true,
    isLoadingEventStatus: false,
    isLoadingEventDelete: false,
    success: null,
    alert: false,
    goBack: false,
  },
  reducers: {
    clearError: (state) => {
      state.success = false;
      state.alert = false;
      state.goBack = false;
    },
  },
  extraReducers: (builder) => {

    // Banner Upload
    builder.addCase(eventLogoUploadHandler.pending, (state, action) => {
      state.isLoadingEventUpload = true;
    });

    builder.addCase(eventLogoUploadHandler.fulfilled, (state, action) => {
      state.isLoadingEventUpload = false;
      state.message = action.payload.message;
      state.success = action.payload.status;
      state.events = action.payload.event;
      state.alert = true;
    });
    builder.addCase(eventLogoUploadHandler.rejected, (state, action) => {
      state.isLoadingEventUpload = false;
      state.message = action.payload.message;
      state.success = action.payload.status;
      state.events = action.payload.event;
      state.alert = true;
    });

    // Banner Get
    builder.addCase(getEventLogoHandler.pending, (state, action) => {
      state.isLoadingEvent = true;
    });

    builder.addCase(getEventLogoHandler.fulfilled, (state, action) => {
      state.isLoadingEvent = false;
      state.events = action.payload.event;
    });
    builder.addCase(getEventLogoHandler.rejected, (state, action) => {
      state.isLoadingEvent = false;
      state.events = action.payload.event;
    });

    // Banner Get Single
    builder.addCase(getEventLogoSingleHandler.pending, (state, action) => {
      state.isLoadingEventDetail = true;
    });

    builder.addCase(getEventLogoSingleHandler.fulfilled, (state, action) => {
      state.isLoadingEventDetail = false;
      state.eventDetail = action.payload.event;
    });
    builder.addCase(getEventLogoSingleHandler.rejected, (state, action) => {
      state.isLoadingEventDetail = false;
      state.eventDetail = action.payload.event;
    });

    // Banner Status Update
    builder.addCase(eventLogoStatusUpdateHandler.pending, (state) => {
      state.isLoadingEventStatus = true;
      state.alert = false;
    });

    builder.addCase(
      eventLogoStatusUpdateHandler.fulfilled,
      (state, action) => {
        state.isLoadingEventStatus = false;
        state.eventDetail = action.payload.event;
        state.success = action.payload.status;
        state.message = action.payload.message;
        state.alert = true;
      }
    );
    builder.addCase(
      eventLogoStatusUpdateHandler.rejected,
      (state, action) => {
        state.isLoadingEventStatus = false;
        state.eventDetail = action.payload.event;
        state.message = action.payload.message;
        state.alert = true;
      }
    );

    // Banner Status Delete
    builder.addCase(eventLogoDeleteHandler.pending, (state) => {
      state.isLoadingEventDelete = true;

    });

    builder.addCase(eventLogoDeleteHandler.fulfilled, (state, action) => {
      state.isLoadingEventDelete = false;
      state.goBack = true;
      state.message = "Banner Image Delete Successfully";
    });
    builder.addCase(eventLogoDeleteHandler.rejected, (state, action) => {
      state.isLoadingEventDelete = false;
      state.eventDetail = action.payload.event;
      state.message = "Banner Image Delete not Successfully";
      state.goBack = false
    });
  },
});


export const { clearError } = eventLogoUploadSlice.actions;

export default eventLogoUploadSlice.reducer;
