import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

export default function AuthProtectedCamera({ children }) {
  const navigate = useNavigate();
  const { auth } = useContext(CurrentUserContext);
  const { id } = useParams();

  useEffect(() => {
    if (!auth || !auth.id) {
      navigate("/login");
    }
  }, [auth, id, navigate]);

  return children;
}

AuthProtectedCamera.propTypes = {
  children: PropTypes.node,
};

AuthProtectedCamera.defaultProps = {
  children: null,
};
