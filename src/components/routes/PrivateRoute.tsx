import React from "react";
import { Outlet } from "react-router-dom";

interface RoutesProps {
  component?: React.FC;
}
const PrivateRoute = ({ component: Component }: RoutesProps) => {
  return Component ? <Component /> : <Outlet />;
};

export default PrivateRoute;
