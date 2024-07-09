import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const formRef = useRef();

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { pseudo, email, message } = data;
    try {
      setDisabled(true);

      const templateParams = { pseudo, email, message };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      toggleAlert("La soumission du formulaire a fonctionné", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Quelque chose n'a pas fonctionné.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  const handleExternalSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  // Enregistrer les champs de formulaire
  const pseudoRegister = register("pseudo", {
    required: "Veuillez entrer un pseudo",
    maxLength: {
      value: 30,
      message: "Veuillez entrer moins de 30 caractères",
    },
  });

  const emailRegister = register("email", {
    required: "Veuillez entrer une adresse mail valide",
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "Veuillez entrer une adresse mail valide",
    },
  });

  const messageRegister = register("message", {
    required: "Veuillez entrer un message",
  });

  return (
    <>
      <img
        className="logo-pixhunt"
        src="./src/assets/images/new-logo-pixhunt-Photoroom-removebg-preview.png"
        alt="logo pixhunt"
      />
      <button
        aria-labelledby="button-back"
        type="button"
        className="button-back"
        onClick={handleButtonClick}
      >
        <BsArrowLeft />
      </button>
      <h2 className="contact-form-h2">Contact</h2>

      <ul className="contact-form-list">
        <form
          id="contact-form"
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <li className="form-group">
            <label htmlFor="pseudo">Pseudo</label>
            <input
              type="text"
              id="pseudo"
              name={pseudoRegister.name}
              ref={pseudoRegister.ref}
              onChange={pseudoRegister.onChange}
              onBlur={pseudoRegister.onBlur}
              className="form-control"
              placeholder="Entrez votre pseudo"
            />
            {errors.pseudo && (
              <p className="error-message">{errors.pseudo.message}</p>
            )}
          </li>

          <li className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name={emailRegister.name}
              ref={emailRegister.ref}
              onChange={emailRegister.onChange}
              onBlur={emailRegister.onBlur}
              className="form-control"
              placeholder="Entrez votre mail"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </li>
          <li className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name={messageRegister.name}
              ref={messageRegister.ref}
              onChange={messageRegister.onChange}
              onBlur={messageRegister.onBlur}
              rows={6}
              className="form-control"
              placeholder="Entrez votre message"
            />
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </li>
        </form>

        {alertInfo.display && (
          <li className="contact-form-item">
            <div
              className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
              role="alert"
            >
              {alertInfo.message}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() =>
                  setAlertInfo({ display: false, message: "", type: "" })
                }
              />
            </div>
          </li>
        )}
      </ul>

      <button
        type="button"
        aria-labelledby="submit-btn"
        className="submit-btn external-submit-btn"
        disabled={disabled}
        onClick={handleExternalSubmit}
      >
        Envoyer
      </button>
      <img
        className="contact-form-image"
        src="./src/assets/images/5ba7c8d79a1de659493719.jpg"
        alt="young woman in a coloured painting on wall"
      />
    </>
  );
}

export default Contact;
