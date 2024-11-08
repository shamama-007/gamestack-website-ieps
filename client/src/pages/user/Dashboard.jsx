import DashboardSidebar from "../../components/Layout/DashboardSidebar"
import { SemiCircleProgress } from 'react-semicircle-progressbar';


const Dashboard = () => {

    return (
        <DashboardSidebar>
            <div className="panel-main-content">
                <h3>DASHBOARD</h3>
                <div className="dashboard-box">
                    <div className="item item-1">
                        <div className="detail">
                            <h5><strong>Subscription Date</strong></h5>
                            <span>02-06-2025</span>
                        </div>
                        <div className="progress">
                            <SemiCircleProgress
                                percentage={70}
                                size={{
                                    width: 150,
                                    height: 150,
                                }}
                                strokeWidth={6}
                                strokeColor="#FB751A"
                                strokeLinecap="round"

                            />
                        </div>
                    </div>
                    <div className="item item-1">
                        <div className="detail">
                            <h5><strong>Expired Date</strong></h5>
                            <span>02-06-2025</span>
                        </div>
                        <div className="progress">
                            <SemiCircleProgress
                                percentage={20}
                                size={{
                                    width: 150,
                                    height: 150,
                                }}
                                strokeWidth={6}
                                strokeColor="#FB751A"
                                strokeLinecap="round"

                            />
                        </div>
                    </div>
                    <div className="item item-1">
                        <div className="detail">
                            <h5><strong>Expired Date</strong></h5>
                            <span>02-06-2025</span>
                        </div>
                        <div className="progress">
                            <SemiCircleProgress
                                percentage={49}
                                size={{
                                    width: 150,
                                    height: 150,
                                }}
                                strokeWidth={6}
                                strokeColor="#FB751A"
                                strokeLinecap="round"

                            />
                        </div>
                    </div>
                </div>

            </div>
        </DashboardSidebar >
    )
}

export default Dashboard