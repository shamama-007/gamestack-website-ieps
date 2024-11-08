import { useNavigate, useParams } from "react-router-dom"
import AdminDashboardSidebar from "../../components/Layout/AdminDashboardSidebar"
import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
    clearError,
} from "../../reducers/imageUploadSlice";
import Loader from "../../components/Loader/Loader";


import {
    getBannerImageSingleHandler,
    bannerImageStatusUpdateHandler,
    bannerImageDeleteHandler,
} from "../../reducers/imageUploadSlice";
import { bannerStatusSchema } from "../../schemas/validator";
const AdminBannerUpdate = () => {
    const { bannerId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        alert,
        message,
        bannerDetail,
        isLoadingBannerDetail,
        isLoadingBannerStatus,
        isLoadingBannerDelete,
        success,
        goBack,
    } = useSelector((state) => state.imageUpload);

    useEffect(() => {
        if (alert === true) {
            if (success === true) {
                toast.success(message);
            }
            if (success === false) {
                toast.error(message);
            }
        }

        if (goBack == true) {
            toast.success("Banner Image Delete successfully");
            navigate("/admin/banner");
        }

        dispatch(clearError());
    }, [dispatch, goBack, alert, message, success, navigate]);

    useEffect(() => {
        dispatch(getBannerImageSingleHandler(bannerId));
    }, [bannerId, dispatch]);

    // Banner Status Schema
    const bannerStatusFormik = useFormik({
        initialValues: {
            bannerStatusId: "",
            bannerStatus: "",
        },
        validationSchema: bannerStatusSchema,
        onSubmit: (values) => {
            dispatch(bannerImageStatusUpdateHandler(values));
        },
    });

    return (
        <AdminDashboardSidebar>
            {isLoadingBannerDetail === true ? (
                <Loader />
            ) : (
                <div className="panel-main-content">
                    <h3>BANNERS</h3>

                    <form className="file-upload-form my-3">
                        <label htmlFor="file" className="file-upload-label">
                            <div className="image-upload-container">
                                <img src={import.meta.env.VITE_BACKEND_URL +
                                    bannerDetail.imageLink} height={200}
                                    style={{ objectFit: 'contain', width: '100%' }}
                                    alt="Image" />
                            </div>
                        </label>
                    </form>

                    <div className="table-container">
                        <table className="rwd-table">
                            <tr>
                                <th>BANNER ID</th>
                                <td>#{bannerDetail._id}</td>
                            </tr>
                            <tr>
                                <th>BANNER CURRENT STATUS</th>
                                <td>{bannerDetail.status == 0 ? "Deactive" : "Active"}</td>

                            </tr>
                            <tr>
                                <th>BANNER OPERATION</th>
                                <td>
                                    <form onSubmit={bannerStatusFormik.handleSubmit}>
                                        <input
                                            type="hidden"
                                            value={
                                                (bannerStatusFormik.values.bannerStatusId =
                                                    bannerDetail._id)
                                            }
                                        />
                                        <div className="select">
                                            <select name="bannerStatus"
                                                onChange={bannerStatusFormik.handleChange}
                                                value={bannerStatusFormik.values.bannerStatus}>
                                                <option selected={bannerDetail.status == "1" && true} value="1">Active</option>
                                                <option selected={bannerDetail.status == "0" && true} value="0">Deactive</option>
                                            </select>
                                        </div>

                                        {bannerStatusFormik.touched.bannerStatus &&
                                            bannerStatusFormik.errors.bannerStatus ? (
                                            <p className="error text-danger">
                                                {bannerStatusFormik.errors.bannerStatus}
                                            </p>
                                        ) : null}


                                        <button
                                            className={`btn custom mx-2 rounded-2 ${isLoadingBannerStatus ? "disabled" : ""
                                                }`}
                                            type="submit"
                                            style={{ padding: "4px", fontSize: "12px" }}
                                            disabled={isLoadingBannerStatus ? true : false}
                                        >
                                            {isLoadingBannerStatus ? "LOADING..." : "UPDATE"}
                                        </button>
                                        <button
                                            className={`btn custom status cancel mx-2 rounded-2 ${isLoadingBannerDelete ? "disabled" : ""
                                                }`}
                                            type="button"
                                            style={{ padding: "4px", fontSize: "12px" }}
                                            disabled={isLoadingBannerDelete ? true : false}
                                            onClick={() => {
                                                if (confirm('Are you sure?')) {
                                                    dispatch(
                                                        bannerImageDeleteHandler(bannerDetail._id)
                                                    )
                                                }
                                            }

                                            }
                                        >
                                            {isLoadingBannerDelete ? "LOADING..." : "DELETE"}
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            )}
        </AdminDashboardSidebar>
    )
}

export default AdminBannerUpdate