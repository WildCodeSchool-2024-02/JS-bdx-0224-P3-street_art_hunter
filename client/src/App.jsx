import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/NavBar";

function App() {
  // récupération de l'id utilisateur par le context currentUserContext par le JWT
  const id = 2;
  return (
    <>
      <Navbar id={id} />
      <Outlet />
    </>
  );
}

export default App;
