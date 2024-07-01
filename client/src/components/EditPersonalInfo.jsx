import { Form } from "react-router-dom";

function EditPersonalInfo() {
  return (
    <Form method="put">
      <label htmlFor="username">Pseudo</label>{" "}
      <input
        type="text"
        id="username"
        name="username"
        //   defaultValue={loaderData.username}
      />
      <label htmlFor="city">Ville</label>{" "}
      <input
        type="text"
        id="city"
        name="city"
        //   defaultValue={loaderData.city}
      />
      <label htmlFor="email">E-mail</label>{" "}
      <input
        type="text"
        id="email"
        name="email"
        //   defaultValue={loaderData.email}
      />
      <button
        type="submit"
        aria-label="Soumettre les modifications"
        className="profile-information-submit-button"
        // onClick={handleSave}
      >
        Enregistrer
      </button>
    </Form>
  );
}

export default EditPersonalInfo;
