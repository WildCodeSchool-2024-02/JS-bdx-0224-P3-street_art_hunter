import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/NavBar";

import "./styles/App.css";

import Footer from "./components/Footer";
import LogoutMobile from "./components/LogoutMobile";
import LogoMobile from "./components/LogoMobile";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { users, pictures } = useLoaderData();
  return (
    <>
      <LogoMobile />
      <LogoutMobile />
      <ScrollToTop />
      <Navbar />
      <Outlet context={{ users, pictures }} />
      <Footer />
    </>
  );
}

export default App;
