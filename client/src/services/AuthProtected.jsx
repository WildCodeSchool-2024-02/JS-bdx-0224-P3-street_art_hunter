import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

export default function AuthProtected({ children }) {
  const navigate = useNavigate();
  const { auth } = useContext(CurrentUserContext);

  useEffect(() => {
    if (!auth?.role || auth?.role !== 1) {
      navigate("/login");
    }
  }, [auth]);

  if (!auth?.role || auth?.role !== 1) {
    return null;
  }

  return children;
}

AuthProtected.propTypes = {
  children: PropTypes.node,
};

AuthProtected.defaultProps = {
  children: null,
};
