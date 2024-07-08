import { Form, Link } from "react-router-dom";
// import { useCurrentUser } from "../contexts/CurrentUserProvider";
import logoImg from "../assets/images/logo.png";
import "../styles/RegisterLogin.css";

function Login() {
  // const { login } = useCurrentUser();

  // const emailRef = useRef();
  // const passwordRef = useRef();

  // const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/auth/login`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           email: emailRef.current.value,
  //           password: passwordRef.current.value,
  //         }),
  //       }
  //     );

  //     if (response.status === 200) {
  //       const authData = await response.json();
  //       console.log(authData)
  //       login(authData);
  //       navigate(`/profile/${authData.user.id}`);
  //     } else {
  //       console.info(response);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  
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
