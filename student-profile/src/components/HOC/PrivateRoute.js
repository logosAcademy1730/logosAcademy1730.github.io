import { RouteConst } from "../../common/RouteConst";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({
  isAllowed,
  redirectPath = RouteConst.NOT_FOUND_PAGE,
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />
};

export default PrivateRoute;
