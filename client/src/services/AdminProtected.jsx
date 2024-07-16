import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

export default function AdminProtected({ children }) {
  const navigate = useNavigate();
  const { auth } = useContext(CurrentUserContext);

  useEffect(() => {
    if (!auth?.role || auth?.role !== 1) {
      navigate("/");
    }
  }, [auth]);

  return children;
}

AdminProtected.propTypes = {
  children: PropTypes.node,
};

AdminProtected.defaultProps = {
  children: null,
};
