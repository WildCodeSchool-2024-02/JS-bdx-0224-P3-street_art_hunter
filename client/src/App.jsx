import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
