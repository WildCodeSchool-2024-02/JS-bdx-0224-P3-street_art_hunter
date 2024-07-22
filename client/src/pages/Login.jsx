import { Form, Link } from "react-router-dom";
import "../styles/RegisterLogin.css";
import ImgMockUp from "../assets/images/mockup.png";

function Login() {
  return (
    <section className="registerAndLoginForm">
      <Form method="POST" className="form-login">
        <h2>Connexion</h2>

        <label htmlFor="email">
          E-mail
          <input
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
            autoComplete="email"
          />
        </label>

        <label htmlFor="password" className="label-login">
          Mot de passe
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            autoComplete="new-password"
          />
        </label>

        <button type="submit">Se connecter</button>

        <p>
          Pas encore inscrit ?
          <Link to="/register" className="redirectionForm">
            Créer un compte
          </Link>
        </p>
      </Form>

      <img
        src={ImgMockUp}
        alt="Aperçu de l'application en version mobile"
        className="imgMockup"
      />
    </section>
  );
}

export default Login;
