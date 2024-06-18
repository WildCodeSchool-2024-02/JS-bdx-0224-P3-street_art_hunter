import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Register from "./pages/Register";

import { sendRegistration } from "./services/api.service";

const baseArtUrl = "/api";
const baseRegisterUrl = "/register";

async function fetchApi(url) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetchApi(baseArtUrl),
  },
  {
    path: "/register",
    element: <Register />,
    action: async ({ request }) => {
      const formData = await request.formData();

      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");
      const city = formData.get("city");
      const zipcode = formData.get("zipcode");
      const firstname = formData.get("firstname");
      const lastname = formData.get("lastname");

      await sendRegistration(
        `${baseRegisterUrl}`,
        {
          username,
          email,
          password,
          city,
          zipcode,
          firstname,
          lastname,
        },
        request.method.toUpperCase()
      );
      return redirect("/");
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
