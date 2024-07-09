import { Form, Link } from "react-router-dom";
import "../styles/RegisterLogin.css";
import { useRef, useState } from "react";

function Register() {
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  const usernameRef = useRef(null);
  const cityRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    const newErrors = {};

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (username.length < 5) {
      newErrors.username = "Le pseudonyme doit contenir au moins 5 caractères";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Il faut une adresse mail valide";
    }

    if (password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    if (Object.keys(newErrors).length > 0) {
      event.preventDefault();
      setErrors(newErrors);
    }

    setErrors(newErrors);
  };

  return (
    <section className="registerAndLoginForm ">
      <Form method="POST" onSubmit={handleSubmit} className="form-register">
        <h2>Inscription</h2>
        <label htmlFor="username">
          Pseudonyme
          <input
            type="text"
            id="username"
            name="username"
            ref={usernameRef}
            placeholder="JohnDoe"
            required
          />
          {errors.username && <p className="errorsForm">{errors.username}</p>}
        </label>
        <label htmlFor="city">
          Ville
          <input
            type="text"
            id="city"
            name="city"
            ref={cityRef}
            placeholder="Bordeaux"
            required
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="text"
            id="email"
            name="email"
            ref={emailRef}
            placeholder="johndoe@gmail.com"
            required
            autoComplete="email"
          />
          {errors.email && <p className="errorsForm">{errors.email}</p>}
        </label>
        <label htmlFor="password">
          Mot de passe
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            placeholder="********"
            required
            autoComplete="new-password"
          />
          {errors.password && <p className="errorsForm">{errors.password}</p>}
        </label>
        <label htmlFor="confirmPassword">
          Confirmation du mot de passe
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            ref={confirmPasswordRef}
            placeholder="********"
            required
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <p className="errorsForm">{errors.confirmPassword}</p>
          )}
        </label>
        <label htmlFor="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" />
          En cochant, j'accepte les conditions d'utilisations de PixHunt
        </label>
        <button type="submit">S'inscrire</button>
        <p>
          Déjà inscrit ?
          <Link to="/login" className="redirectionForm">
            Se connecter
          </Link>
        </p>
      </Form>

      <img
        src="../src/assets/images/mockup.png"
        alt="Mockups de l'application"
        className="imgMockup"
      />
    </section>
  );
}

export default Register;
