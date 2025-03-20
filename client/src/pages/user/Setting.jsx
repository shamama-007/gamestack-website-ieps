import { IoPerson, IoMailOutline, IoCallOutline, IoBusinessOutline, IoLocationOutline } from "react-icons/io5";
import { FiHash } from "react-icons/fi";
import DashboardSidebar from "../../components/Layout/DashboardSidebar"
import ProfileImage from "../../assets/img/dummy-profile-image.jpg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Settings = () => {
    const { data, token } = useSelector((state) => state.userAuth);
    const [userDetail, setUserDetail] = useState(null);


    useEffect(() => {
        getUserDetail();
    }, []);
    const getUserDetail = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_CLIENT_API}/api/Customer/GetDetail`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const result = await response.json();
        setUserDetail(result);
    };
    return (
        <DashboardSidebar>
            <div className="panel-main-content">
                <h3>PROFILE SETTINGS</h3>
                <div className="setting-profile-avatar mt-3">
                    <img src={ProfileImage} alt="" />
                </div>
                <form className="form p-0">
                    <div className="flex-column">
                        <label>User Id </label>
                    </div>
                    <div className="inputForm">
                    <FiHash style={{ fill: 'white', fontSize: '24px' }} />

                        <input type="text" className="input" readOnly value={data && data.userId} />
                    </div>

                    <div className="flex-column">
                        <label>Name </label>
                    </div>
                    <div className="inputForm">
                        <IoPerson style={{ fill: 'white', fontSize: '24px' }} />

                        <input type="text" className="input" readOnly value={data && data.name} />
                    </div>


                    <div className="flex-column">
                        <label>Email </label>
                    </div>
                    <div className="inputForm">
                        <IoMailOutline style={{ fill: 'white', fontSize: '24px' }} />

                        <input type="email" className="input" readOnly value={userDetail && userDetail.email} />
                    </div>

                    <div className="flex-column">
                        <label>Phone Number </label>
                    </div>
                    <div className="inputForm">
                        <IoCallOutline style={{ fill: 'white', fontSize: '24px' }} />

                        <input type="text" className="input" readOnly value={userDetail && userDetail.mobileNo} />
                    </div>


                    <div className="flex-column">
                        <label>City</label>
                    </div>
                    <div className="inputForm">
                        <IoBusinessOutline style={{ fill: 'white', fontSize: '24px' }} />
                        <input type="text" className="input" readOnly value={userDetail && userDetail.city} />
                    </div>


                    <div className="flex-column">
                        <label>Address</label>
                    </div>
                    <div className="inputForm">
                        <IoLocationOutline style={{ fill: 'white', fontSize: '24px' }} />

                        <input type="text" className="input" readOnly value={userDetail && userDetail.address} />
                    </div>
                </form>

            </div>
        </DashboardSidebar>
    )
}

export default Settings