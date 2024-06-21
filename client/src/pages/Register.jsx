import { Form, Link } from "react-router-dom";
import "../style/Register.css";

function Register() {
  return (
    <section className="registerForm">
      <Form method="POST">
        <h2>Inscription</h2>

        <label htmlFor="username">
          Pseudonyme*
          <input
            type="text"
            id="username"
            name="username"
            className=""
            required
          />
        </label>

        <label htmlFor="firstname">
          Prénom
          <input type="text" id="firstname" name="firstname" />
        </label>

        <label htmlFor="lastname">
          Nom
          <input type="text" id="lastname" name="lastname" />
        </label>

        <label htmlFor="email">
          Email*
          <input type="text" id="email" name="email" required />
        </label>

        <label htmlFor="password">
          Mot de passe*
          <input type="text" id="password" name="password" required />
        </label>

        <label htmlFor="city">
          City*
          <input type="text" id="city" name="city" required />
        </label>

        <label htmlFor="zipcode">
          Zipcode
          <input type="text" id="zipcode" name="zipcode" required />
        </label>

        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" />
          En cochant, j'accepte les conditions d'utilisations de PixHunt
        </label>
        <button type="submit">S'inscrire</button>
        <Link to="/login" className="redirectionForm">
          J'ai déjà un compte
        </Link>
      </Form>
      <article>
        <img
          src="../src/assets/images/mockup.png"
          alt="Mockups de l'application"
          className="imgRegister"
        />
      </article>
    </section>
  );
}

export default Register;
