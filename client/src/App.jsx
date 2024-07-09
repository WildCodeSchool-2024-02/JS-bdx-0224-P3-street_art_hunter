import { Outlet, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import ModalContent from "./components/ModalContent";

import "./styles/App.css";
import "./styles/ModalContent.css";

function App() {
  const [showModal, setShowModal] = useState(true);
  const modalContentEl = document.getElementById("modal-content");
  const location = useLocation();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit") === null;
    if (isFirstVisit) {
      setShowModal(true);
      localStorage.setItem("isFirstVisit", "false");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {}, [showModal, modalContentEl]);
  const isHomepage = location.pathname === "/";
  return (
    <>
      {showModal &&
        modalContentEl &&
        isHomepage &&
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
