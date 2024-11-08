import Navbar from '../components/Layout/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Layout/Footer'
import { UserEmail, UserPassword, UserPerson } from '../components/SvgIcon/SvgIcon'
import { clearError } from '../reducers/userAuthSlice';
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
// import { RegisterSchema } from '../schemas/validator';
const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { alert, isLoading, message, success, auth } = useSelector(
        (state) => state.userAuth
    );

    useEffect(() => {
        if (alert === true) {
            if (success === true) {
                toast.success(message);
                navigate("/user/dashboard");
            }
            if (success === false) {
                toast.error(message);
            }
        }

        if (auth === true) {
            navigate("/user/dashboard");
        }

        dispatch(clearError());
    }, [auth, message, success, alert, dispatch, navigate]);


    // Register Schema
    const registerFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        // validationSchema: RegisterSchema,
        onSubmit: (values, action) => {
            console.log(values);
            // dispatch(registerUserHandler(values));
            action.resetForm();
        },
    });

    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center py-5 h-100">
                <form className="form" onSubmit={registerFormik.handleSubmit}>
                    <h3>SIGN UP</h3>

                    <div className="flex-column">
                        <label>Name </label>
                    </div>
                    <div className="inputForm">
                        <UserPerson />
                        <input type="text" name="name"
                            onChange={registerFormik.handleChange}
                            value={registerFormik.values.name} className="input" placeholder="Enter your Name" />
                    </div>
                    {registerFormik.touched.name && registerFormik.errors.name ? (
                        <p className="error text-danger">
                            {registerFormik.errors.name}
                        </p>
                    ) : null}
                    <div className="flex-column">
                        <label>Email </label>
                    </div>
                    <div className="inputForm">
                        <UserEmail />
                        <input type="text" name="email"
                            onChange={registerFormik.handleChange}
                            value={registerFormik.values.email} className="input" placeholder="Enter your Email" />
                    </div>
                    {registerFormik.touched.email && registerFormik.errors.email ? (
                        <p className="error text-danger">
                            {registerFormik.errors.email}
                        </p>
                    ) : null}

                    <div className="flex-column">
                        <label>Password </label>
                    </div>
                    <div className="inputForm">
                        <UserPassword />
                        <input type="password" name="password"
                            onChange={registerFormik.handleChange}
                            value={registerFormik.values.password} className="input" placeholder="Enter your Password" />
                    </div>
                    {registerFormik.touched.password && registerFormik.errors.password ? (
                        <p className="error text-danger">
                            {registerFormik.errors.password}
                        </p>
                    ) : null}

                    <div className="flex-column">
                        <label>Confirm Password </label>
                    </div>
                    <div className="inputForm">
                        <UserPassword />
                        <input type="password" name="confirmPassword"
                            onChange={registerFormik.handleChange}
                            value={registerFormik.values.confirmPassword} className="input" placeholder="Enter your Confirm Password" />
                    </div>
                    {registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword ? (
                        <p className="error text-danger">
                            {registerFormik.errors.confirmPassword}
                        </p>
                    ) : null}

                    <button type='submit' className="button-submit">Sign Up</button>
                    <p className="p">Already have a account? <Link to={'/signin'} className="span">Sign In</Link></p>

                </form>

            </div>
            <Footer />

        </>
    )
}

export default SignUp