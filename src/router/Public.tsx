import { Navigate } from "react-router";
import { Outlet } from "react-router-dom";

import PATHS from "@/config/paths";
import { useAuth } from "@/hooks/useAuth";

const Public = () => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  return isAuthenticated ? <Navigate to={PATHS.HOME} /> : <Outlet />;
};

export default Public;
