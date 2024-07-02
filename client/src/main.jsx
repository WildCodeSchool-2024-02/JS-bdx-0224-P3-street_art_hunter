import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import App from "./App";
import PersonalInfo from "./components/PersonalInfo";
import EditPersonalInfo from "./components/EditPersonalInfo";
// import DeleteProfile from "./components/DeleteProfile";

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

async function sendData(url, data, http) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: http,
      headers: {
        "Content-Type": "application / json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données :", error);
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
        loader: ({params}) => fetchApi(`${baseUserUrl}/${params.id}`),
        children: [
          {
            path: "",
            element: <PersonalInfo />,
          },
          {
            path: "edit",
            element: <EditPersonalInfo />,
            action: async ({ request, params }) => {
              const formData = await request.formData();
              const username = formData.get("username");
              const city = formData.get("city");
              const email = formData.get("email");
              await sendData(
                `${baseUserUrl}/${params.id}`,
                {
                  username,
                  city,
                  email,
                },
                "PUT"
              );

              return redirect(`/profile/${params.id}`);
            },
          },
          // {
          //   path: "/profile/:id/delete",
          //   element: <DeleteProfile />,
          //   loader: () => fetchApi(baseUserUrl),
          // },
        ],
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
