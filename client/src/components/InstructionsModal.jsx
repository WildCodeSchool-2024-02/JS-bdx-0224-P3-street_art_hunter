import { createPortal } from "react-dom";
import { useState } from "react";
import ModalContent from "./ModalContent";

function InstructionsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button  
        id="portal"
        type="button"
        onClick={() => setShowModal(true)} 
        title="-Instructions d'utilisation du site" 
        aria-label="Bouton Instructions du site*">
        Instructions d'utilisation du site
      </button>

            {showModal && createPortal(
        <section id="portal">
          <ModalContent onClose={() => setShowModal(false)} />
        </section>,
        document.getElementById("portal")
      )}
    </>
  );
}

export default InstructionsModal;
