import { Form, Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function ProfileForm({ user }) {
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
          <button type="submit" className="profile-information-edit-button">
            Enregistrer
          </button>
          <Link
            to={`/profile/${user.id}`}
            className="profile-information-edit-button"
          >
            Annuler
          </Link>
        </article>
      </Form>
    </section>
  );
}

ProfileForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default ProfileForm;
