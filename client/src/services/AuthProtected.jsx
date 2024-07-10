import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

export default function AuthProtected({ children }) {
  const navigate = useNavigate();
  const { auth } = useContext(CurrentUserContext);
  const { id } = useParams();

  useEffect(() => {
    if (!auth?.id || (auth?.id !== Number(id) && auth?.role !== 1)) {
      navigate("/");
    }
  }, [auth, id, navigate]);

  return children;
}

AuthProtected.propTypes = {
  children: PropTypes.node,
};

AuthProtected.defaultProps = {
  children: null,
};
