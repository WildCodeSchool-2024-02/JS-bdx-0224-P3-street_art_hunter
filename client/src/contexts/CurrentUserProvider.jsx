import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import decodeTokenAndExtractRole from "../services/decodeToken";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeTokenAndExtractRole(token);
      setAuth(userData);
    }
  }, []);

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token");
  };

  const contextValue = useMemo(
    () => ({
      auth,
      setAuth,
      logout,
    }),
    [auth]
  );

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
