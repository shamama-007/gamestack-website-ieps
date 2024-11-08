import AdminDashboardSidebar from "../../components/Layout/AdminDashboardSidebar"
import ProfileImage from "../../assets/img/dummy-profile-image.jpg";
import { UserEmail, UserPassword } from "../../components/SvgIcon/SvgIcon";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminPasswordUpdateHandler, clearError } from "../../reducers/adminAuthSlice";
import { useFormik } from "formik";
import { ChangPasswordSchema } from "../../schemas/validator";
import { toast } from "react-toastify";

const AdminSettings = () => {

    const dispatch = useDispatch();

    const { alert, isLoading, message, success, auth, data } = useSelector(
        (state) => state.adminAuth
    );

    useEffect(() => {
        if (alert === true) {
            if (success === true) {
                toast.success(message);
            }
            if (success === false) {
                toast.error(message);
            }
        }

        dispatch(clearError());
    }, [auth, message, success, alert, dispatch]);

    // Password Update Schema
    const passwordUpdateFormik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: ChangPasswordSchema,
        onSubmit: (values) => {
            dispatch(adminPasswordUpdateHandler(values));
        },
    });



    return (
        <AdminDashboardSidebar>
            <div className="panel-main-content">
                <h3>PROFILE SETTINGS</h3>
                <div className="setting-profile-avatar mt-3">
                    <img src={ProfileImage} alt="" />
                </div>
                <form className="form p-0">
                    <div className="flex-column">
                        <label>Name </label>
                    </div>
                    <div className="inputForm">
                        <UserEmail />
                        <input type="text" className="input" value={data && data.name.toUpperCase()} readOnly={true} disabled={true} placeholder="Enter your Name" />
                    </div>
                    <button className="button-submit">Update</button>
                </form>

                <hr />

                <h3>PASSWORD MANAGEMENT</h3>

                <form className="form p-0" onSubmit={passwordUpdateFormik.handleSubmit}>
                    <div className="flex-column">
                        <label>Current Password</label>
                    </div>
                    <div className="inputForm">
                        <UserPassword />
                        <input type="password" onChange={passwordUpdateFormik.handleChange}
                            value={passwordUpdateFormik.values.oldPassword}
                            name="oldPassword" className="input" placeholder="Enter your Current Password" />
                    </div>
                    {passwordUpdateFormik.touched.oldPassword &&
                        passwordUpdateFormik.errors.oldPassword ? (
                        <p className="error text-danger">
                            {passwordUpdateFormik.errors.oldPassword}
                        </p>
                    ) : null}

                    <div className="flex-column">
                        <label>New Password</label>
                    </div>
                    <div className="inputForm">
                        <UserPassword />
                        <input type="password" onChange={passwordUpdateFormik.handleChange}
                            value={passwordUpdateFormik.values.newPassword}
                            name="newPassword" className="input" placeholder="Enter your New Password" />
                    </div>
                    {passwordUpdateFormik.touched.newPassword &&
                        passwordUpdateFormik.errors.newPassword ? (
                        <p className="error text-danger">
                            {passwordUpdateFormik.errors.newPassword}
                        </p>
                    ) : null}

                    <div className="flex-column">
                        <label>Confirm Password</label>
                    </div>
                    <div className="inputForm">
                        <UserPassword />
                        <input type="password" onChange={passwordUpdateFormik.handleChange}
                            value={passwordUpdateFormik.values.confirmPassword}
                            name="confirmPassword" className="input" placeholder="Enter your Confirm Password" />
                    </div>
                    {passwordUpdateFormik.touched.confirmPassword &&
                        passwordUpdateFormik.errors.confirmPassword ? (
                        <p className="error text-danger">
                            {passwordUpdateFormik.errors.confirmPassword}
                        </p>
                    ) : null}

                    <button type='submit' className={`button-submit ${isLoading ? "disabled" : ""
                        }`} disabled={isLoading ? true : false}>
                        {isLoading ? "LOADING..." : "Password Update"}
                    </button>
                </form>


            </div>
        </AdminDashboardSidebar>
    )
}

export default AdminSettings