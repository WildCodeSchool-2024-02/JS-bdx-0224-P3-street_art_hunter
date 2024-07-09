import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import decodeTokenAndExtractRole from "../services/decodeToken";

export const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const token = localStorage.getItem("token");
  const [auth, setAuth] = useState(decodeTokenAndExtractRole(token));

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        console.info("Token", token);
        const userData = await decodeTokenAndExtractRole(token);
        setAuth({ id: userData.id, role: userData.role });
        console.info("User Data Id", userData.id);
        console.info("User Data Role", userData.role);
        console.info("Auth", auth);
      }
    };
    fetchUserData();
  });
  // }, []);
  // GIT COMMIT : React Hook useEffect has missing dependencies: 'auth' and 'token'. Either include them or remove the dependency array

  const logout = () => {
    setAuth(null);
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
