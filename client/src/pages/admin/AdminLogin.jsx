import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer'
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { AdminLoginSchema } from '../../schemas/validator';
import { clearError, loginAdminHandler } from '../../reducers/adminAuthSlice';
import { UserEmail, UserPassword } from '../../components/SvgIcon/SvgIcon';
const AdminLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { alert, isLoading, message, success, auth } = useSelector(
        (state) => state.adminAuth
    );

    useEffect(() => {
        if (alert === true) {
            if (success === true) {
                toast.success(message);
                navigate("/admin/banner");
            }
            if (success === false) {
                toast.error(message);
            }
        }

        if (auth === true) {
            navigate("/admin/banner");
        }

        if (auth === false) {
            navigate("/admin/login");
        }

        dispatch(clearError());
    }, [auth, message, success, alert, dispatch, navigate]);


    // Login Schema

    const loginFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: AdminLoginSchema,
        onSubmit: (values, action) => {
            dispatch(loginAdminHandler(values));
            action.resetForm();
        },
    });

    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center py-5 h-100">
                <form className="form" onSubmit={loginFormik.handleSubmit}>
                    <h3>ADMIN LOGIN</h3>
                    <div className="flex-column">
                        <label>Email </label>
                    </div>
                    <div className="inputForm">
                        <UserEmail />
                        <input type="text" name="email"
                            onChange={loginFormik.handleChange}
                            value={loginFormik.values.email} className="input" placeholder="Enter your Email" />
                    </div>
                    {loginFormik.touched.email && loginFormik.errors.email ? (
                        <p className="error text-danger">{loginFormik.errors.email}</p>
                    ) : null}

                    <div className="flex-column">
                        <label>Password </label>
                    </div>
                    <div className="inputForm">
                        <UserPassword />
                        <input type="password" name="password"
                            onChange={loginFormik.handleChange}
                            value={loginFormik.values.password} className="input" placeholder="Enter your Password" />
                    </div>
                    {loginFormik.touched.password && loginFormik.errors.password ? (
                        <p className="error text-danger">
                            {loginFormik.errors.password}
                        </p>
                    ) : null}

                    <button type='submit' className={`button-submit ${isLoading ? "disabled" : ""
                        }`}>
                        {isLoading ? "LOADING..." : "Sign In"}
                    </button>
                </form>

            </div>
            <Footer />

        </>
    )
}

export default AdminLogin