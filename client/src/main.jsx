import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import App from "./App";
import PersonalInfo from "./components/PersonalInfo";
// import DeleteProfile from "./components/DeleteProfile";
// import EditPersonalInfo from "./components/EditPersonalInfo";

const baseArtUrl = "/api/arts/";
const baseUserUrl = "/api/users/";

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
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetchApi(baseArtUrl),
      },
      {
        path: "/profile/:id",
        element: <Profile />,
        loader: () => fetchApi(baseUserUrl),
        children: [
          {
            path: "",
            element: <PersonalInfo />,
            loader: () => fetchApi(baseUserUrl),
          },
          // {
          //   path: "/edit",
          //   element: <EditPersonalInfo />,
          //   loader: () => fetchApi(baseUserUrl),
          // },
          // {
          //   path: "/delete",
          //   element: <DeleteProfile />,
          //   loader: () => fetchApi(baseUserUrl),
          // },
        ]
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
