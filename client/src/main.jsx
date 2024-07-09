import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { fetchApi, sendData, sendAuth } from "./services/api.service";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import EditPersonalInfo from "./components/ProfileForm";
import ProfileInfo from "./components/ProfileInfo";
import ProfileContributions from "./components/ProfileContributions";
import { CurrentUserProvider } from "./contexts/CurrentUserProvider";
import AuthProtected from "./services/AuthProtected";
// import ProfileDelete from "./components/ProfileDelete";
const baseArtUrl = "/api/arts/";
const baseUserUrl = "/api/users/";
const basePictureUrl = "/api/pictures/";
const baseRegisterUrl = "/api/auth/users";
const baseLoginUrl = "/api/auth/login";

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
          // {
          //   path: "/delete",
          //   element: <ProfileDelete />,
          // },
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
