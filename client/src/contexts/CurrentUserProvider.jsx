import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [auth, setAuth] = useState(null);

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
