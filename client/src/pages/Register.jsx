import { Form, Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  return (
    <section className="registerForm">
      <Form method="POST">
        <h2>Inscription</h2>

        <label htmlFor="username">
          Pseudonyme
          <input
            type="text"
            id="username"
            name="username"
            placeholder="JohnDoe"
            required
          />
        </label>

        <label htmlFor="city">
          Ville
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Bordeaux"
            required
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </label>

        <label htmlFor="password">
          Mot de passe
          <input
            type="text"
            id="password"
            name="password"
            placeholder="********"
            required
          />
        </label>

        <label htmlFor="password">
          Confirmation du mot de passe
          <input
            type="text"
            id="password"
            name="password"
            placeholder="********"
            required
          />
        </label>

        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" />
          En cochant, j'accepte les conditions d'utilisations de PixHunt
        </label>

        <button type="submit">S'inscrire</button>

        <p>
          Déjà inscirt ?
          <Link to="/login" className="redirectionForm">
            Se connecter
          </Link>
        </p>
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
