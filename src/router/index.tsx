import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Public from "./Public";
import Private from "./Private";
import PATHS from "@/config/paths";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));

const router = createBrowserRouter([
  {
    element: <Public />,
    children: [
      {
        path: PATHS.LOGIN,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <Private />,
    children: [
      {
        path: PATHS.HOME,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={PATHS.HOME} replace />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
