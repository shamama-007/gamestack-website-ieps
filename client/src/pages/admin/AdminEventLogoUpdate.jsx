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
    getEventLogoSingleHandler,
    eventLogoStatusUpdateHandler,
    eventLogoDeleteHandler,
} from "../../reducers/eventLogoUploadSlice";
import { eventStatusSchema } from "../../schemas/validator";
const AdminBannerUpdate = () => {
    const { eventId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        alert,
        message,
        eventDetail,
        isLoadingEventDetail,
        isLoadingEventStatus,
        isLoadingEventDelete,
        success,
        goBack,
    } = useSelector((state) => state.eventLogoUpload);

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
            toast.success("Event Logo Delete successfully");
            navigate("/admin/event");
        }

        dispatch(clearError());

    }, [dispatch, goBack, alert, message, success, navigate]);

    useEffect(() => {
        dispatch(getEventLogoSingleHandler(eventId));
    }, [eventId, dispatch]);

    // Banner Status Schema
    const eventStatusFormik = useFormik({
        initialValues: {
            eventStatusId: "",
            eventStatus: "",
        },
        validationSchema: eventStatusSchema,
        onSubmit: (values) => {
            dispatch(eventLogoStatusUpdateHandler(values));
        },
    });

    return (
        <AdminDashboardSidebar>
            {isLoadingEventDetail === true ? (
                <Loader />
            ) : (
                <div className="panel-main-content">
                    <h3>EVENTS</h3>

                    <form className="file-upload-form my-3">
                        <label htmlFor="file" className="file-upload-label">
                            <div className="image-upload-container">
                                <img src={import.meta.env.VITE_BACKEND_URL +
                                    eventDetail?.imageLink} height={200}
                                    style={{ objectFit: 'contain', width: '100%' }}
                                    alt="Image" />
                            </div>
                        </label>
                    </form>

                    <div className="table-container">
                        <table className="rwd-table">
                            <tr>
                                <th>BANNER ID</th>
                                <td>#{eventDetail?._id}</td>
                            </tr>
                            <tr>
                                <th>BANNER CURRENT STATUS</th>
                                <td>{eventDetail?.status == 0 ? "Deactive" : "Active"}</td>

                            </tr>
                            <tr>
                                <th>BANNER OPERATION</th>
                                <td>
                                    <form onSubmit={eventStatusFormik.handleSubmit}>
                                        <input
                                            type="hidden"
                                            value={
                                                (eventStatusFormik.values.eventStatusId =
                                                    eventDetail?._id)
                                            }
                                        />
                                        <div className="select">
                                            <select name="eventStatus"
                                                onChange={eventStatusFormik.handleChange}
                                                value={eventStatusFormik.values.eventStatus}>
                                                <option selected={eventDetail?.status == "1" && true} value="1">Active</option>
                                                <option selected={eventDetail?.status == "0" && true} value="0">Deactive</option>
                                            </select>
                                        </div>

                                        {eventStatusFormik.touched.eventStatus &&
                                            eventStatusFormik.errors.eventStatus ? (
                                            <p className="error text-danger">
                                                {eventStatusFormik.errors.eventStatus}
                                            </p>
                                        ) : null}


                                        <button
                                            className={`btn custom mx-2 rounded-2 ${isLoadingEventStatus ? "disabled" : ""
                                                }`}
                                            type="submit"
                                            style={{ padding: "4px", fontSize: "12px" }}
                                            disabled={isLoadingEventStatus ? true : false}
                                        >
                                            {isLoadingEventStatus ? "LOADING..." : "UPDATE"}
                                        </button>
                                        <button
                                            className={`btn custom status cancel mx-2 rounded-2 ${isLoadingEventDelete ? "disabled" : ""
                                                }`}
                                            type="button"
                                            style={{ padding: "4px", fontSize: "12px" }}
                                            disabled={isLoadingEventDelete ? true : false}
                                            onClick={() => {
                                                if (confirm('Are you sure?')) {
                                                    dispatch(
                                                        eventLogoDeleteHandler(eventDetail?._id)
                                                    )
                                                }
                                            }

                                            }
                                        >
                                            {isLoadingEventDelete ? "LOADING..." : "DELETE"}
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