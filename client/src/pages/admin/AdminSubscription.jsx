import { Link } from "react-router-dom";
import AdminDashboardSidebar from "../../components/Layout/AdminDashboardSidebar"
import { IoDocumentOutline } from "react-icons/io5";

const AdminSubscription = () => {
    const joinDate = new Date('9/14/2024');
    joinDate.setDate(joinDate.getDate() + 30);

    // Format date as MM-DD-YYYY
    const formattedDate = `${joinDate.getMonth() + 1}-${joinDate.getDate()}-${joinDate.getFullYear()}`;

    return (
        <AdminDashboardSidebar>
            <div className="panel-main-content">
                <h3>SUBSCRIPTION</h3>
                <div className="table-container">
                    <table className="rwd-table">
                        <tr>
                            <th>ID</th>
                            <th>U.NAME</th>
                            <th>SUBSCRIPTION</th>
                            <th>JOIN DATE</th>
                            <th>EXPIRED DATE</th>
                            <th>OPERATION</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Zarqqum</td>
                            <td>STANDARD</td>
                            <td>01-05-2024</td>
                            <td>{formattedDate}</td>
                            <td>
                                <Link to="#"><IoDocumentOutline /></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Monitor</td>
                            <td>PREMIUM</td>
                            <td>12-09-2023</td>
                            <td>{formattedDate}</td>
                            <td>
                                <Link to="#"><IoDocumentOutline /></Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </AdminDashboardSidebar>
    )
}

export default AdminSubscription