import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./store/AuthContext";

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
