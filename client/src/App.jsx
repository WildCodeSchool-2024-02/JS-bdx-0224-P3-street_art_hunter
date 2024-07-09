import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import LogoMobile from "./components/LogoMobile";

function App() {
  return (
    <>
      <LogoMobile />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
