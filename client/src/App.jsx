import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/NavBar";

function App() {
  // récupération de l'id utilisateur par le context currentUserContext par le JWT
  // const id = 2;
  // const { auth } = useCurrentUser();


  return (
    <>
      <Navbar />

      {/* id={auth ? auth.id : null} */}
      <Outlet />
    </>
  );
}

export default App;
