import { Form, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <section className="registerAndLoginForm">
      <Form method="POST">
        <h2>Connexion</h2>

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

        <label htmlFor="password" className="label-login">
          Mot de passe
          <input
            type="text"
            id="password"
            name="password"
            placeholder="********"
            required
          />
        </label>

        <button type="submit">Se connecter</button>

        <p>
          Pas encore inscrit ?
          <Link to="/register" className="redirectionForm">
            Se créer une compte
          </Link>
        </p>
      </Form>

      <article>
        <img
          src="../src/assets/images/mockup.png"
          alt="Mockups de l'application"
          className="imgMockup"
        />
      </article>
    </section>
  );
}

export default Login;
