import { Form, Link } from "react-router-dom";
// import { useCurrentUser } from "../contexts/CurrentUserProvider";
import logoImg from "../assets/images/logo.png";
import "../styles/RegisterLogin.css";

function Login() {
  return (
    <section className="registerAndLoginForm">
      <Link to="/">
        <img
          src={logoImg}
          alt="Logo pour retourner à l'accueil"
          className="logoAuth"
        />
      </Link>
      <Form method="POST" className="form-login">
        {/* onSubmit={handleSubmit}  */}
        <h2>Connexion</h2>

        <label htmlFor="email">
          E-mail
          <input
            type="text"
            // ref={emailRef}
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
            // ref={passwordRef}
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
