import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <main>
      <Outlet />
      <Navbar />
    </main>
  );
}

export default App;
