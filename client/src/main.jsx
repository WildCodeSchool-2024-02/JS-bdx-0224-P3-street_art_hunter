import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import {
  baseLoginUrl,
  baseRegisterUrl,
  baseArtUrl,
  baseUserUrl,
  basePictureUrl,
} from "./services/urls";
import { fetchApi, sendData } from "./services/api.service";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import EditPersonalInfo from "./components/ProfileForm";
import ProfileInfo from "./components/ProfileInfo";
import ProfileContributions from "./components/ProfileContributions";
import { CurrentUserProvider } from "./contexts/CurrentUserProvider";
import AuthProtected from "./services/AuthProtected";
import ProfileDelete from "./components/ProfileDelete";

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
        path: "/register",
        element: <Register />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const username = formData.get("username");
          const email = formData.get("email");
          const city = formData.get("city");
          const password = formData.get("password");
          const response = await sendData(
            `${baseRegisterUrl}`,
            {
              username,
              email,
              city,
              password,
            },
            "POST"
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
          const response = await sendData(
            `${baseLoginUrl}`,
            {
              email,
              password,
            },
            "POST"
          );
          if (response) {
            const authData = await response.json();
            localStorage.setItem("token", authData.token);
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "/profile/:id",
        element: (
          <AuthProtected>
            <Profile />
          </AuthProtected>
        ),
        loader: async ({ params }) => {
          const [userData, pictureData] = await Promise.all([
            fetchApi(`${baseUserUrl}/${params.id}`),
            fetchApi(`${basePictureUrl}/${params.id}`),
          ]);
          return { userData, pictureData };
        },
        children: [
          {
            path: "",
            element: <ProfileInfo />,
          },
          {
            path: "",
            element: <ProfileDelete />,
            // action: async ({ params }) => {
            //   await fetch(`${baseUserUrl}/${params.id}`, {
            //     method: "DELETE",
            //   });
            //   if (response.ok) {
            //     return redirect("/login");
            //   } else {
            //     console.error("Erreur lors de la suppression du profil.");
            //     return redirect("/error");
            //   }
            // },
            // action: async ({ params }) => {
            //   const user = fetchApi(`${baseUserUrl}${params.id}`);
            //   const formData = await request.formData();
            //   await formData.delete(user);

            //   return redirect("/");
            // },

            // // if (response.ok) {
            //   return redirect(`/login`);
            // } else {
            //   // Handle error appropriately
            //   console.error("Erreur lors de la suppression du profil.");
            //   return redirect(`/error`);
            // }
            // },
          },
          {
            path: "",
            element: <ProfileContributions />,
          },
        ],
      },
      {
        path: "/profile/:id/edit",
        element: <EditProfile />,
        loader: ({ params }) => fetchApi(`${baseUserUrl}/${params.id}`),
        action: async ({ request, params }) => {
          const formData = await request.formData();
          const username = formData.get("username");
          const city = formData.get("city");
          const email = formData.get("email");
          await sendData(
            `${baseUserUrl}${params.id}`,
            {
              username,
              city,
              email,
            },
            "PUT"
          );
          return redirect(`/profile/${params.id}`);
        },
        children: [
          {
            path: "",
            element: <EditPersonalInfo />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <RouterProvider router={router} />
    </CurrentUserProvider>
  </React.StrictMode>
);
