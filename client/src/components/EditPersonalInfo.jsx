// import { useEffect } from "react";
import { Form } from "react-router-dom";
import { PropTypes } from "prop-types";

function EditPersonalInfo({ user, handleModify }) {
  // useEffect(( )=> {

  // },[])

  return (
    <Form method="PUT">
      <label htmlFor="username">Pseudo</label>{" "}
      <input
        type="text"
        id="username"
        name="username"
        defaultValue={user.username}
      />
      <label htmlFor="city">Ville</label>{" "}
      <input type="text" id="city" name="city" defaultValue={user.city} />
      <label htmlFor="email">E-mail</label>{" "}
      <input type="email" id="email" name="email" defaultValue={user.email} />
      <button
        type="submit"
        aria-label="Modifier les informations"
        className="profile-information-edit-button"
        // onClick={handleModify}
      >
        Enregistrer
      </button>
      <button
        type="button"
        aria-label="Modifier les informations"
        className="profile-information-edit-button"
        onClick={handleModify}
      >
        Annuler
      </button>
    </Form>
  );
}

EditPersonalInfo.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
  }),
  handleModify: PropTypes.func.isRequired,
};

EditPersonalInfo.defaultProps = {
  user: {
    username: "",
    city: "",
    email: "",
  },
};

export default EditPersonalInfo;
