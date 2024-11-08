import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Banner Image Upload (Admin)
export const bannerImageUploadHandler = createAsyncThunk(
  "bannerImageUploadHandler",
  async ({ bannerImage }) => {
    const formData = new FormData();
    formData.append("bannerImage", bannerImage);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/banner/image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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

// Banner Image Get (Admin)
export const getBannerImageHandler = createAsyncThunk(
  "getBannerImageHandler",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/banner/image`,
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

// Banner Image Get Single (Admin)
export const getBannerImageSingleHandler = createAsyncThunk(
  "getBannerImageSingleHandler",
  async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/banner/image/${id}`,
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

// Banner Status Update (Admin)
export const bannerImageStatusUpdateHandler = createAsyncThunk(
  "bannerImageStatusUpdateHandler",
  async ({ bannerStatus, bannerStatusId }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL
        }/api/v1/admin/banner/image/${bannerStatusId}`,
        { status: bannerStatus },
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
export const bannerImageDeleteHandler = createAsyncThunk(
  "bannerImageDeleteHandler",
  async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/banner/image/${id}`,
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

export const imageUploadSlice = createSlice({
  name: "imageUpload",
  initialState: {
    isLoading: false,
    message: "",
    banners: [],
    bannerDetail: {},
    isLoadingBanner: true,
    isLoadingBannerUpload: false,
    isLoadingBannerDetail: true,
    isLoadingBannerStatus: false,
    isLoadingBannerDelete: false,
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
    builder.addCase(bannerImageUploadHandler.pending, (state, action) => {
      state.isLoadingBannerUpload = true;
    });

    builder.addCase(bannerImageUploadHandler.fulfilled, (state, action) => {
      state.isLoadingBannerUpload = false;
      state.message = action.payload.message;
      state.success = action.payload.status;
      state.banners = action.payload.banners;
      state.alert = true;
    });
    builder.addCase(bannerImageUploadHandler.rejected, (state, action) => {
      state.isLoadingBannerUpload = false;
      state.message = action.payload.message;
      state.success = action.payload.status;
      state.banners = action.payload.banners;
      state.alert = true;
    });

    // Banner Get
    builder.addCase(getBannerImageHandler.pending, (state, action) => {
      state.isLoadingBanner = true;
    });

    builder.addCase(getBannerImageHandler.fulfilled, (state, action) => {
      state.isLoadingBanner = false;
      state.banners = action.payload.banners;
    });
    builder.addCase(getBannerImageHandler.rejected, (state, action) => {
      state.isLoadingBanner = false;
      state.banners = action.payload.banners;
    });

    // Banner Get Single
    builder.addCase(getBannerImageSingleHandler.pending, (state, action) => {
      state.isLoadingBannerDetail = true;
    });

    builder.addCase(getBannerImageSingleHandler.fulfilled, (state, action) => {
      state.isLoadingBannerDetail = false;
      state.bannerDetail = action.payload.banner;
    });
    builder.addCase(getBannerImageSingleHandler.rejected, (state, action) => {
      state.isLoadingBannerDetail = false;
      state.bannerDetail = action.payload.banner;
    });

    // Banner Status Update
    builder.addCase(bannerImageStatusUpdateHandler.pending, (state) => {
      state.isLoadingBannerStatus = true;
      state.alert = false;
    });

    builder.addCase(
      bannerImageStatusUpdateHandler.fulfilled,
      (state, action) => {
        state.isLoadingBannerStatus = false;
        state.bannerDetail = action.payload.banner;
        state.success = action.payload.status;
        state.message = action.payload.message;
        state.alert = true;
      }
    );
    builder.addCase(
      bannerImageStatusUpdateHandler.rejected,
      (state, action) => {
        state.isLoadingBannerStatus = false;
        state.bannerDetail = action.payload.banner;
        state.message = action.payload.message;
        state.alert = true;
      }
    );

    // Banner Status Delete
    builder.addCase(bannerImageDeleteHandler.pending, (state) => {
      state.isLoadingBannerDelete = true;

    });

    builder.addCase(bannerImageDeleteHandler.fulfilled, (state, action) => {
      state.isLoadingBannerDelete = false;
      state.goBack = true;
      state.message = "Banner Image Delete Successfully";
    });
    builder.addCase(bannerImageDeleteHandler.rejected, (state, action) => {
      state.isLoadingBannerDelete = false;
      state.bannerDetail = action.payload.banner;
      state.message = "Banner Image Delete not Successfully";
      state.goBack = false
    });
  },
});


export const { clearError } = imageUploadSlice.actions;

export default imageUploadSlice.reducer;
