import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AuthProtected from "./services/AuthProtected";
import AdminProtected from "./services/AdminProtected";
import Register from "./pages/Register";
import ProfileInfo from "./components/ProfileInfo";
import ProfileContributions from "./components/ProfileContributions";
import ProfileDelete from "./components/ProfileDelete";
import EditProfile from "./pages/EditProfile";
import EditPersonalInfo from "./components/ProfileForm";
import Admin from "./pages/Admin";
import Camera from "./pages/Camera";
import {
  baseLoginUrl,
  baseRegisterUrl,
  baseArtUrl,
  baseUserUrl,
  basePictureUrl,
  baseUploadUrl,
  baseAcceptedArtUrl,
} from "./services/urls";
import { fetchApi, sendData } from "./services/api.service";
import { CurrentUserProvider } from "./contexts/CurrentUserProvider";
import Score from "./pages/Score";
import AdminStreetArtPage from "./pages/AdminStreetArtPage";
import StreetArtList from "./components/StreetArtList";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => fetchApi(basePictureUrl),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetchApi(baseAcceptedArtUrl),
      },
      {
        path: "/camera",
        element: <Camera />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const imageSrc = formData.get("pictureTaken");
          const userId = formData.get("userId");
          const latitude = formData.get("latitude");
          const longitude = formData.get("longitude");
          const title = formData.get("title");
          const artist = formData.get("artist");
          const information = formData.get("information");
          const blob = await fetch(imageSrc).then((res) => res.blob());
          const uploadData = new FormData();
          uploadData.append("file", blob, "pictureTaken.jpg");
          uploadData.append("user_id", userId);
          uploadData.append("latitude", latitude);
          uploadData.append("longitude", longitude);
          uploadData.append("title", title);
          uploadData.append("artist", artist);
          uploadData.append("information", information);
          const response = await sendData(
            `${baseUploadUrl}`,
            uploadData,
            "POST"
          );
          if (response.status === 201) {
            return redirect("/");
          }
          return null;
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/score",
        element: <Score />,
        loader: () => fetchApi(`${baseUserUrl}rank`),
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
          const [sortedUsers, userData, pictureData] = await Promise.all([
            fetchApi(`${baseUserUrl}rank`),
            fetchApi(`${baseUserUrl}/${params.id}`),
            fetchApi(`${basePictureUrl}/${params.id}`),
          ]);
          return { sortedUsers, userData, pictureData };
        },
        action: async ({ params }) => {
          await fetch(
            `${import.meta.env.VITE_API_URL}${baseUserUrl}${params.id}`,
            {
              method: "DELETE",
            }
          );
          return redirect("/register");
        },
        children: [
          {
            path: "",
            element: <ProfileInfo />,
          },
          {
            path: "",
            element: <ProfileDelete />,
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
      {
        path: "/admin",
        element: (
          <AdminProtected>
            <Admin />
          </AdminProtected>
        ),
        loader: async () => {
          const [users, countUsers, countArts] = await Promise.all([
            fetchApi(`${baseUserUrl}`),
            fetchApi(`${baseUserUrl}count`),
            fetchApi(`${baseArtUrl}count`),
          ]);
          return { users, countUsers, countArts };
        },
      },
      {
        path: "/admin/artlist",
        element: (
          <AdminProtected>
            <AdminStreetArtPage />
          </AdminProtected>
        ),
        children: [
          {
            path: "",
            element: <StreetArtList />,
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
