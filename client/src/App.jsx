import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import LogoutMobile from "./components/LogoutMobile";
import LogoMobile from "./components/LogoMobile";

function App() {
  return (
    <>
      <LogoMobile />
      <LogoutMobile />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
