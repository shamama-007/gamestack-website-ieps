import Navbar from "../components/Layout/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Layout/Footer";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearError, loginUserHandler } from "../reducers/userAuthSlice";
import { emailExistHandler } from "../reducers/userAuthSlice";

import { emailExistSchema, LoginSchema } from "../schemas/validator";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {auth , alert, isLoading, success, formShowingStatus, message, userExistMessage } = useSelector(
    (state) => state.userAuth
  );
  const [isForm, setIsForm] = useState(true);

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
      setIsForm(true);
      navigate("/user/dashboard");
    }

    if (auth === false) {
      navigate("/signin");
    }

    dispatch(clearError());

    if (formShowingStatus === true) {
      setIsForm(false);
    }
  }, [auth, message, alert, success, formShowingStatus, dispatch, navigate]);

  // Email Exist Schema
  const emailExistFormik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values, action) => {
      dispatch(emailExistHandler(values));
      action.resetForm();
    },
  });

  // Login Schema
  const loginFormik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      console.log(values);
      dispatch(loginUserHandler(values));
      action.resetForm();
    },
  });

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center py-5 h-100">
        {isForm ? (
          <form className="form" onSubmit={emailExistFormik.handleSubmit}>
            <h3>Login</h3>
            <div className="flex-column">
              <label>Email</label>
            </div>
            <div className="inputForm">
              <svg
                style={{ fill: "white" }}
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input
                type="text"
                className="input"
                placeholder="Enter your Email"
                name="email"
                onChange={emailExistFormik.handleChange}
                value={emailExistFormik.values.email}
              />
            </div>

            {emailExistFormik.touched.email && emailExistFormik.errors.email ? (
              <span className="text-danger">
                {emailExistFormik.errors.email}
              </span>
            ) : null}

            {userExistMessage && <span className="text-danger">{userExistMessage}</span>}

            <br />

            <button
              type="submit"
              disabled={isLoading ? true : false}
              className="button-submit"
            >
              {formShowingStatus ? "LOADING..." : "SEND OTP"}
            </button>

            <p className="p m-0 text-end">
              <Link to="/forget-password">Forget Password?</Link>
            </p>
            <hr />
            <p className="p">
              Create an account?{" "}
              <Link to={"/signup"} className="span">
                Sign Up
              </Link>
            </p>
          </form>
        ) : (
          <form className="form" onSubmit={loginFormik.handleSubmit}>
            <h3>SIGN IN</h3>
            <div className="flex-column">
              <label>User ID </label>
            </div>
            <div className="inputForm">
              <svg
                style={{ fill: "white" }}
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input
                type="text"
                className="input"
                placeholder="Enter your Email"
                name="userId"
                disabled
                onChange={loginFormik.handleChange}
                value={
                  (loginFormik.values.userId =
                    localStorage.getItem("user-code"))
                }
              />
            </div>

            {loginFormik.touched.userId && loginFormik.errors.userId ? (
              <span className="text-danger">{loginFormik.errors.userId}</span>
            ) : null}

            <div className="flex-column">
              <label>Password </label>
            </div>
            <div className="inputForm">
              <svg
                style={{ fill: "white" }}
                height="20"
                viewBox="-64 0 512 512"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
              </svg>
              <input
                type="password"
                className="input"
                name="password"
                onChange={loginFormik.handleChange}
                value={loginFormik.values.password}
                placeholder="Enter your Password"
              />
            </div>

            {loginFormik.touched.password && loginFormik.errors.password ? (
              <span className="text-danger">{loginFormik.errors.password}</span>
            ) : null}
            <br />

            <button type="submit" className="button-submit">
              Sign In
            </button>
            <p className="p m-0 text-end">
              <Link to="/forget-password">Forget Password?</Link>
            </p>
            <hr />
            <p className="p">
              Create an account?{" "}
              <Link to={"/signup"} className="span">
                Sign Up
              </Link>
            </p>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
