import { Form } from "react-router-dom";
import { PropTypes } from "prop-types";

function ProfileForm({ user, handleCancel }) {
  return (
    <section className="profile-information-edit-section">
      <h2 className="profile-main-titles">Modifier mes informations</h2>
      <Form method="PUT" className="profile-information-form">
        <article className="profile-information-edit-article">
          <label htmlFor="username">Pseudo</label>{" "}
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={user.username}
          />
          <label htmlFor="city">Ville</label>{" "}
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={user.city}
            className=".input"
          />
          <label htmlFor="email">E-mail</label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
          />
        </article>
        <article>
          <button
            type="submit"
            aria-label="Modifier les informations"
            className="profile-information-edit-button"
          >
            Enregistrer
          </button>
          <button
            type="button"
            aria-label="Modifier les informations"
            className="profile-information-edit-button"
            onClick={handleCancel}
          >
            Annuler
          </button>
        </article>
      </Form>
    </section>
  );
}

ProfileForm.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default ProfileForm;
