import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
const ProtectedRouteAdmin = () => {
  const { isLoading, auth } = useSelector((state) => state.adminAuth);
  // const auth = true;
  // const isLoading = false;
  return (
    <Fragment>
      {isLoading === false &&
        (auth === false ? <Navigate to="/admin/login" /> : <Outlet />)}
    </Fragment>
  );
};
export default ProtectedRouteAdmin;
