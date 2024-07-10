import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import BeforeHome from "./pages/BeforeHome";
import App from "./App";
import Register from "./pages/Register";

import sendAuth from "./services/api.service";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { baseLoginUrl, baseRegisterUrl } from "./services/urls";

const baseArtUrl = "/api/arts/";

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
    element: <BeforeHome />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
        loader: () => fetchApi(baseArtUrl),
      },
      {
        path: "/register",
        element: <Register />,
        action: async ({ request }) => {
          const formData = await request.formData();

          const username = formData.get("username");
          const email = formData.get("email");
          const city = formData.get("city");
          const password = formData.get("password");

          const response = await sendAuth(
            `${baseRegisterUrl}`,
            {
              username,
              email,
              city,
              password,
            },
            request.method.toUpperCase()
          );
          if (response.status === 201) {
            return redirect("/login");
          }
          return null;
        },
      },
      {
        path: "/login",
        element: <Login />,
        action: async ({ request }) => {
          const formData = await request.formData();

          const email = formData.get("email");
          const password = formData.get("password");

          const response = await sendAuth(
            `${baseLoginUrl}`,
            {
              email,
              password,
            },
            request.method.toUpperCase()
          );
          if (response.status === 200) {
            return redirect("/");
          }
          return null;
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
