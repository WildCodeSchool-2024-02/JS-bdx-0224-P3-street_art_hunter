import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import LogoMobile from "./components/LogoMobile";
import LogoutMobile from "./components/LogoutMobile";

function App() {
  return (
    <>
      <LogoMobile />
      <LogoutMobile />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
