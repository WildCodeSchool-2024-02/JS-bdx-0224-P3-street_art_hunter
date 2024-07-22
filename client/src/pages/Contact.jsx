import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import BtnGoBack from "../components/BtnGoBack";
import logoPixHunt from "../assets/images/logo.png";
import ImgContactForm from "../assets/images/img -contact-page.png";

function Contact() {
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
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toggleAlert("La soumission du formulaire a fonctionné", "success");
    } catch (e) {
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
      <img className="logo-pixhunt" src={logoPixHunt} alt="logo pixhunt" />
      <BtnGoBack />
      <section className="block-desktop">
        <article className="left-part">
          <h2 className="contact-form-h2">Contact</h2>

          <form
            id="contact-form"
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <fieldset className="contact-form-list">
              <label className="form-group" htmlFor="pseudo">
                Pseudo
              </label>
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

              <label className="form-group" htmlFor="email">
                E-mail
              </label>
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

              <label className="form-group" htmlFor="message">
                Message
              </label>
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
            </fieldset>

            {alertInfo.display && (
              <li
                className={`contact-form-item alert alert-${alertInfo.type} alert-dismissible mt-5`}
              >
                {alertInfo.message}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Fermer"
                  onClick={() =>
                    setAlertInfo({ display: false, message: "", type: "" })
                  }
                />
              </li>
            )}
            <button
              type="submit"
              className="submit-btn external-submit-btn"
              disabled={disabled}
              onClick={handleExternalSubmit}
            >
              Envoyer
            </button>
          </form>
        </article>
        <article className="right-part">
          <img
            className="contact-form-image"
            src={ImgContactForm}
            alt="oeuvre d'art multicolore"
          />
        </article>
      </section>
    </>
  );
}

export default Contact;
