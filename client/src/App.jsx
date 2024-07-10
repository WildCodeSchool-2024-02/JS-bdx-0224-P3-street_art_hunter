import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/NavBar";
import LogoutMobile from "./components/LogoutMobile";

function App() {
  return (
    <>
      <LogoutMobile />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
