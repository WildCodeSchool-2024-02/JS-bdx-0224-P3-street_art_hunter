import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/NavBar";
import InstructionsModal from "./components/InstructionsModal";

function App() {

  return (
    <>
      <InstructionsModal />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
