import { Outlet } from "react-router-dom";
import "./styles/App.css";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import ModalContent from "./components/ModalContent";
import "./styles/ModalContent.css";

function App() {
  const [showModal, setShowModal] = useState(true);
  const modalContentEl = document.getElementById("modal-content");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {}, [showModal, modalContentEl]);
  return (
    <>
      {showModal &&
        modalContentEl &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          modalContentEl
        )}
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
