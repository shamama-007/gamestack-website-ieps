import AdminDashboardSidebar from "../../components/Layout/AdminDashboardSidebar"

const AdminGameRequest = () => {

    return (
        <AdminDashboardSidebar>
            <div className="panel-main-content">
                <h3>GAMES REQUEST</h3>
                <div className="table-container">
                    <table className="rwd-table">
                        <tr>
                            <th>ID</th>
                            <th>U.Name </th>
                            <th>Date</th>
                            <th>Message</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Zarqqum</td>
                            <td>01-05-2024</td>
                            <td>Please add Just Cause 2 to the platform. It’s highly requested and would be a great addition for players.</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Saim Ali</td>
                            <td>01-05-2024</td>
                            <td>Please add PUBG to the platform. It’s highly requested and would be a great addition for players.</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shamama Ali</td>
                            <td>01-05-2024</td>
                            <td>Please add Call of Duty to the platform. It’s highly requested and would be a great addition for players.</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mubashir Ali</td>
                            <td>01-05-2024</td>
                            <td>Please add Just Cause 4 to the platform. It’s highly requested and would be a great addition for players.</td>
                        </tr>

                    </table>
                </div>
            </div>
        </AdminDashboardSidebar>
    )
}

export default AdminGameRequest