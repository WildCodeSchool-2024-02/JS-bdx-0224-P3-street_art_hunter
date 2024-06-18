import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Register from "./pages/Register";

const baseArtUrl = "/api";

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
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
