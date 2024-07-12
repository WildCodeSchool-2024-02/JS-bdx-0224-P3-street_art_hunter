import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import LogoutMobile from "./components/LogoutMobile";

function App() {
  return (
    <>
      <LogoutMobile />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
