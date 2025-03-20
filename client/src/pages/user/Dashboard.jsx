import { useEffect, useState } from "react";
import DashboardSidebar from "../../components/Layout/DashboardSidebar"
import { useSelector } from "react-redux";


const Dashboard = () => {

    const { token } = useSelector((state) => state.userAuth);
    const [userDetail, setUserDetail] = useState(null);
    const [userProductDetail, setUserProductDetail] = useState(null);

    useEffect(() => {
        getUserDetail();
        getUserProductListDetail();
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

    const getUserProductListDetail = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_CLIENT_API}/api/Customer/GetProdDetail`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const result = await response.json();
        console.log(result);
        setUserProductDetail(result);

    };

    return (
        <DashboardSidebar>
            <div className="panel-main-content">
                <h3>DASHBOARD</h3>
                <div className="dashboard-box user">

                    <div className="row mt-3">
                        <div className="col-12 col-md-4">
                            <div className="item item-1">
                                <div className="detail">
                                    <h2><strong>BALANCE</strong></h2>
                                    <span>Rs. {userDetail?.balance}</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-4">
                            <div className="item item-1">
                                <div className="detail">
                                    <h2><strong>SUBSCRIPTION</strong></h2>
                                    <span>{userDetail?.package}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="item item-1">
                                <div className="detail">
                                    <h2><strong>TOTAL GAME</strong></h2>
                                    <span>{userProductDetail?.length < 10 ? '0' : ''}{userProductDetail?.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-4" >OCCUPIED GAMES</h3>
                    <div className="row mt-3">
                        <div className="col-12 col-md-12">
                            <div className="item item-1" style={{ height: 'auto' }} >
                                <div className="detail" style={{ gap: '10px' }}>
                                    {
                                        userProductDetail?.map((item, index) => {
                                            return <h2 key={index} style={{ fontSize: '24px' }}> <strong>{item?.gameCategory}: </strong>  <span style={{ fontSize: '24px' }}>{item?.productName}</span></h2>
                                        })
                                    }
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </DashboardSidebar >
    )
}

export default Dashboard