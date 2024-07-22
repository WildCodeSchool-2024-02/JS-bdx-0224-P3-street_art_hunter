import "./styles/App.css";
import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import LogoutMobile from "./components/LogoutMobile";
import LogoMobile from "./components/LogoMobile";

function App() {
  const pictures = useLoaderData();
  return (
    <>
      <LogoMobile />
      <LogoutMobile />
      <Navbar />
      <Outlet context={[pictures]} />
      <Footer />
    </>
  );
}

export default App;
