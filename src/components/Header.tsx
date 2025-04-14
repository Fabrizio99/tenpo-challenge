import { useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import { AuthActionTypes } from "@/context/auth/reducer";

export const Header = () => {
  const {
    dispatch,
    state: { isAuthenticated },
  } = useAuth();
  const { removeUser } = useUser();

  useEffect(() => {
    window.HSDropdown.autoInit();
  }, []);

  const handleLogout = () => {
    dispatch({ type: AuthActionTypes.LOGOUT });
    removeUser();
  };
  return (
    <nav className="navbar bg-base-100 start-0 top-0 z-[1] shadow sticky">
      <div className="layout flex justify-between">
        <h1 className="text-2xl font-bold">Tenpo Challenge</h1>

        {isAuthenticated && (
          <div className="dropdown relative inline-flex">
            <button
              id="dropdown-default"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
              className="cursor-pointer"
            >
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-10 rounded-full">
                  <span className="icon-[tabler--user] size-6"></span>
                </div>
              </div>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-default"
            >
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
