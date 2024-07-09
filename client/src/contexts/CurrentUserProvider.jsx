import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import decodeTokenAndExtractRole from "../services/decodeToken";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  // export const CurrentUserProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeTokenAndExtractRole(token);
      setAuth(userData);
    }
  }, []);

  const login = (userData) => {
    setAuth(userData);
  };
  const logout = () => {
    setAuth(null);
  };

  const contextValue = useMemo(() => ({
    auth,
    setAuth,
    login,
    logout,
  }), []);
  
  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};


CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
