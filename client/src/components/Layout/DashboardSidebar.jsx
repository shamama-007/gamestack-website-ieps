import Logo from "../../assets/img/logo.png";
import Profile from "../../assets/img/dummy-profile-image.jpg";

import {
  IoMenu,
  IoSettingsOutline,
  IoSpeedometerOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Model from "../Modal/Model";
import { clearError, logoutUser } from "../../reducers/userAuthSlice";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const DashboardSidebar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // logoutUser
  const [isToggle, setIsToggle] = useState(false);
  const [profileOption, setProfileOption] = useState(false);
  const [logoutConfirm, setLogoutConfirm] = useState(false);


  const { auth } = useSelector((state) => state.userAuth);

  const handleChildData = (data) => {
    setLogoutConfirm(data);
  };

  const workingPurpose = () => {
    dispatch(logoutUser());
    toast.success("Logout successfully");
  };


  useEffect(() => {
    if (auth === false) {
      navigate("/signin");
    }

    dispatch(clearError());
  }, [auth, dispatch, navigate]);

  return (
    <>
      <Model
        title={"Confirmation"}
        workingPurpose={workingPurpose}
        logoutConfirm={logoutConfirm}
        handleChildData={handleChildData}
      />
      <header className="dashboard-panel-container">
        <nav className="panel">
          <Link to="/" className=" panel-logo">
            <img src={Logo} />
            <div
              className="panel-burger"
              onClick={() => setIsToggle(!isToggle)}
            >
              <IoMenu />
            </div>
          </Link>

          <div className="panel-account">
            <div
              className="panel-account-container"
              onClick={() => setProfileOption(!profileOption)}
            >
              <div className="panel-account-image">
                <img src={Profile} />
              </div>
              <div className="panel-account-icon">
                <IoSettingsOutline />
              </div>
            </div>
            <div className={`profile-options ${profileOption ? "active" : ""}`}>
              <div className="profile-avatar">
                <div className="profile-image">
                  <img src={Profile} />
                </div>
                <div className="profile-detail">
                  <p className="profile-name m-0">
                    <strong>Shamama Ali</strong>
                  </p>
                  <p className="profile-email m-0">shamamaali.123@gmail.com</p>
                </div>
              </div>

              <div className="profile-options-menu">
                <Link to={"/user/dashboard"} className="item">
                  <div className="icon">
                    <IoSpeedometerOutline />
                  </div>
                  <div className="text">Dashboard</div>
                </Link>

                <Link to={"/user/settings"} className="item">
                  <div className="icon">
                    <IoSettingsOutline />
                  </div>
                  <div className="text">Setting</div>
                </Link>
                <p
                  className="item"
                  onClick={() => setLogoutConfirm(true)}
                >
                  <div className="icon">
                    <IoLogOutOutline />
                  </div>
                  <div className="text">Logout</div>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="content">
        <div className={`panel-left-side ${isToggle ? "active" : ""}`}>
          <Link to={"/user/dashboard"} className="item">
            <div className="icon">
              <IoSpeedometerOutline />
            </div>
            <p>Dashboards</p>
          </Link>

          <Link to={"/user/available-product"} className="item">
            <div className="icon">
              <AiOutlineProduct />
            </div>
            <p>Available Product</p>
          </Link>

          <Link to={"/user/settings"} className="item">
            <div className="icon">
              <IoSettingsOutline />
            </div>
            <p>Setting</p>
          </Link>



          <p className="item" onClick={() => setLogoutConfirm(true)}>
            <div className="icon">
              <IoLogOutOutline />
            </div>
            <p>Logout</p>
          </p>
        </div>

        <div className={`panel-right-side ${isToggle ? "active" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
