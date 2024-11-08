import Logo from "../../assets/img/logo.png"
import Profile from "../../assets/img/dummy-profile-image.jpg"

import { IoMenu, IoSettingsOutline, IoHappyOutline, IoSpeedometerOutline, IoLogOutOutline, IoPulseOutline, IoPeopleOutline, IoAperture } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import Model from "../Modal/Model";
import { logoutAdminHandler } from "../../reducers/adminAuthSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
const AdminDashboardSidebar = ({ children }) => {
    const dispatch = useDispatch()
    const [isToggle, setIsToggle] = useState(false);
    const [profileOption, setProfileOption] = useState(false);
    const [logoutConfirm, setLogoutConfirm] = useState(false);

    const handleChildData = (data) => {
        setLogoutConfirm(data);
    };

    const workingPurpose = () => {
        dispatch(logoutAdminHandler());
        toast.success('Logout successfully');
    }

    return (
        <>
            <Model title={'Confirmation'} workingPurpose={workingPurpose} logoutConfirm={logoutConfirm} handleChildData={handleChildData} />

            <header className='dashboard-panel-container'>
                <nav className="panel">
                    <div className=" panel-logo">
                        <img src={Logo} />
                        <div className="panel-burger" onClick={() => setIsToggle(!isToggle)}>
                            <IoMenu />
                        </div>
                    </div>

                    <div className="panel-account">
                        <div className="panel-account-container" onClick={() => setProfileOption(!profileOption)}>
                            <div className="panel-account-image">
                                <img src={Profile} />
                            </div>
                            <div className="panel-account-icon"><IoSettingsOutline /></div>
                        </div>
                        <div className={`profile-options ${profileOption ? 'active' : ''}`}>
                            <div className="profile-avatar">
                                <div className="profile-image">
                                    <img src={Profile} />
                                </div>
                                <div className="profile-detail">
                                    <p className="profile-name m-0"><strong>Welcome Admin</strong></p>
                                    <p className="profile-email m-0">admin@gmail.com</p>
                                </div>
                            </div>

                            <div className="profile-options-menu">

                                <Link to={"/admin/dashboard"} className="item">
                                    <div className="icon"><IoSpeedometerOutline /></div>
                                    <div className="text">Dashboard</div>
                                </Link>
                                <Link to={"/admin/subscription"} className="item">
                                    <div className="icon"><IoPulseOutline /></div>
                                    <div className="text">Subscription</div>
                                </Link>
                                <Link to={"/admin/settings"} className="item">
                                    <div className="icon"><IoSettingsOutline /></div>
                                    <div className="text">Setting</div>
                                </Link>
                                <Link to={"#"} className="item" onClick={() => setLogoutConfirm(true)}>
                                    <div className="icon"><IoLogOutOutline /></div>
                                    <div className="text">Logout</div>
                                </Link>

                            </div>

                        </div>


                    </div>

                </nav>
            </header>

            <div className="content">
                <div className={`panel-left-side ${isToggle ? 'active' : ''}`}>
                    <Link to={'/admin/dashboard'} className="item">
                        <div className="icon"><IoSpeedometerOutline /></div>
                        <p>Dashboards</p>
                    </Link>

                    <Link to={'/admin/subscription'} className="item">
                        <div className="icon"><IoPulseOutline /></div>
                        <p>Subscription</p>
                    </Link>

                    <Link to={'/admin/users'} className="item">
                        <div className="icon"><IoPeopleOutline /></div>
                        <p>Users</p>
                    </Link>

                    <Link to={'/admin/game-request'} className="item">
                        <div className="icon"><IoHappyOutline /></div>
                        <p>Game Request</p>
                    </Link>

                    <Link to={'/admin/banner'} className="item">
                        <div className="icon"><IoAperture /></div>
                        <p>Banners</p>
                    </Link>

                    <Link to={'/admin/settings'} className="item">
                        <div className="icon"><IoSettingsOutline /></div>
                        <p>Setting</p>
                    </Link>

                    <p className="item" onClick={() => setLogoutConfirm(true)}>
                        <div className="icon"><IoLogOutOutline /></div>
                        <p>Logout</p>
                    </p>
                </div>

                <div className={`panel-right-side ${isToggle ? 'active' : ''}`}>

                    {children}

                </div>
            </div>
        </>
    )
}

export default AdminDashboardSidebar