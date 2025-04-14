import { Navigate } from "react-router";
import { Outlet } from "react-router-dom";

import PATHS from "@/config/paths";
import { useAuth } from "@/hooks/useAuth";

const Private = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={PATHS.LOGIN} />;
};

export default Private;
