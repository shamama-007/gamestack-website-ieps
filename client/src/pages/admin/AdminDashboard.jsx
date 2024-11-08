import { Link } from "react-router-dom"
import AdminDashboardSidebar from "../../components/Layout/AdminDashboardSidebar"
import { IoDocumentOutline } from "react-icons/io5";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const AdminDashboard = () => {
    const totalEarnAmount = 100000;
    const totalEarnStandardFormat = totalEarnAmount.toLocaleString('en-IN');

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'Real Time View',
            },
        },
    };

    const dataChartJS = [
        {
            id: 1,
            userGain: 1,
        },
        {
            id: 2,
            userGain: 2,
        },
        {
            id: 3,
            userGain: 3,
        },
        {
            id: 4,
            userGain: 4,
        },
        {
            id: 5,
            userGain: 5,
        }
    ];

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataChartJS.map((data) => data.userGain),
                backgroundColor: '#f4863c7a',
            },
        ],
    };
    return (
        <AdminDashboardSidebar>
            <div className="panel-main-content">
                <h3>DASHBOARD</h3>
                <div className="dashboard-box">
                    <div className="item item-1">
                        <div className="detail admin">
                            <h5><strong>Subscription</strong></h5>
                            <h2>400</h2>
                        </div>
                    </div>
                    <div className="item item-1">
                        <div className="detail admin">
                            <h5><strong>Customer</strong></h5>
                            <h2>1050</h2>
                        </div>
                    </div>
                    <div className="item item-1">
                        <div className="detail admin">
                            <h5><strong>Total Earn</strong></h5>
                            <h2>{totalEarnStandardFormat}</h2>
                        </div>
                    </div>
                </div>

                <div className="dashboard-recent">
                    <div className="item item-1">
                        <h5>RECENT ACCOUNT CREATE</h5>
                        <table className="rwd-table admin-dashboard account">
                            <tr>
                                <th>ID</th>
                                <th>U.NAME</th>
                                <th>OPERATION</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Zas dsadarqqum</td>
                                <td>
                                    <Link to="#"><IoDocumentOutline /></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Monitor</td>
                                <td>
                                    <Link to="#"><IoDocumentOutline /></Link>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Monitor</td>
                                <td>
                                    <Link to="#"><IoDocumentOutline /></Link>
                                </td>
                            </tr>


                        </table>
                    </div>

                    <div className="item item-2">
                        <h5>REAL TIME VIEW</h5>
                        <Bar options={options} data={data} />
                    </div>

                </div>



            </div>
        </AdminDashboardSidebar >
    )
}

export default AdminDashboard