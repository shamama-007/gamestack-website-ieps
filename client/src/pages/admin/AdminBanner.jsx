import { Link } from "react-router-dom"
import AdminDashboardSidebar from "../../components/Layout/AdminDashboardSidebar"
import { IoDocumentOutline, IoCloudUpload } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
    clearError,
    bannerImageUploadHandler,
    getBannerImageHandler,
} from "../../reducers/imageUploadSlice";
import Loader from "../../components/Loader/Loader";
const AdminBanner = () => {
    const dispatch = useDispatch();
    const [Image, setImage] = useState(null);

    const {
        alert,
        isLoadingBanner,
        isLoadingBannerUpload,
        banners,
        message,
        success,
    } = useSelector((state) => state.imageUpload);


    const base64Convert = (data) => {
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(data);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setImage(null);
        base64Convert(file);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (alert === true) {
            if (success === true) {
                toast.success(message);
                dispatch(getBannerImageHandler());
            }

            if (success === false) {
                toast.error(message);
            }
        }

        dispatch(getBannerImageHandler());
        dispatch(clearError());
    }, [dispatch, alert, message, success]);

    // Product Upload Schema
    const bannerFormik = useFormik({
        initialValues: {},
        onSubmit: (values) => {
            dispatch(bannerImageUploadHandler(values));
            setImage(null);
        },
    });

    const setImageBase64 = (event) => {
        const file = event.currentTarget.files[0];
        setImage(null);
        base64Convert(file);
        bannerFormik.setFieldValue("bannerImage", file);
    };

    return (
        <AdminDashboardSidebar>
            <div className="panel-main-content">
                <h3>BANNERS</h3>

                <form onSubmit={bannerFormik.handleSubmit} className="file-upload-form my-3">
                    <label htmlFor="file" className="file-upload-label" onDrop={handleDrop}
                        onDragOver={handleDragOver}>
                        {Image !== null && <div className="image-upload-container">
                            <img src={Image} alt="Image" />
                        </div>}

                        {Image === null && <>
                            <div className="file-upload-design">
                                <div className="upload-icon">
                                    <IoCloudUpload />
                                </div>
                                <p>Drag and Drop</p>
                                <p>or</p>
                                <span className="browse-button">Browse file</span>
                            </div>
                            <input id="file" accept="image/png, image/jpg, image/jpeg" onChange={(e) => setImageBase64(e)} type="file" />
                        </>
                        }

                        {Image !== null && <div className="d-flex justify-content-center align-content-center w-100 mt-3">
                            <button type="button" onClick={() => setImage(null)} className="browse-button mx-2">Cancel</button>
                            {/* <button type="button" onClick={() => setImage(null)} className="browse-button mx-2">Upload Now</button> */}
                            <button
                                type="submit"
                                className={`browse-button mx-2 ${isLoadingBannerUpload ? "disabled" : ""
                                    }`}
                                disabled={isLoadingBannerUpload ? true : false}
                            >
                                {isLoadingBannerUpload ? "LOADING..." : "UPLOAD NOW"}
                            </button>
                        </div>}
                    </label>
                </form>


                {isLoadingBanner === true ? (
                    <Loader />
                ) : (
                    <div className="table-container">
                        {banners && banners.length === 0 ? (
                            <>
                                <h3 className="text-center">Banner Not Found</h3>
                            </>
                        ) : (
                            <table className="rwd-table">
                                <tr>
                                    <th>ID</th>
                                    <th>IMAGE</th>
                                    <th>STATUS</th>
                                    <th>OPERATION</th>

                                </tr>

                                {banners &&
                                    banners.map((item, index) => {
                                        return <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td className="image">
                                                <img src={import.meta.env.VITE_BACKEND_URL + item.imageLink} alt="Banner" />
                                            </td>
                                            <td>{item.status == 0 ? "Deactive": "Active"}</td>
                                            <td>
                                                <Link to={`/admin/banner/${item._id}`}><IoDocumentOutline /></Link>
                                            </td>
                                        </tr>
                                    })}

                            </table>
                        )}
                    </div>
                )}



            </div>
        </AdminDashboardSidebar>
    )
}

export default AdminBanner