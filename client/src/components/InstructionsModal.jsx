import { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../style/InstructionsModal.css';

function InstructionsModal({ show, handleClose }) {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClose]);  

    return(
        <section className={showHideClassName}>
            <header className="modal-main">
            <span className="close" onClick={handleClose} onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleClose();
                        }
                    }}
                    tabIndex="0"
                    role="button"
                    aria-label="Close"
                >
                    &times;
                </span>
                <h2>Comment intéragir avec votre site PixHunt</h2>
                <ul>
                    <li>Autorise ton téléphone à te géolocaliser afin de te placer sur la carte à l’endroit de ta localisation actuelle</li>
                    <li>Connecte-toi ou crée un compte si n’en as pas encore créé un</li>
                    <li>Avec le bouton appareil photo situé sur la carte, tu peux ouvrir la fenêtre de ton téléphone afin de prendre une photo de l’oeuvre que tu as choisie</li>
                    <li>Une fois que tu as pris une photo, tu peux en reprendre une autre si elle ne te convient pas ou bien clique sur le bouton soumettre </li>
                    <li>Tu peux rajouter  un titre à l’oeuvre, le nom de l’artiste si tu le connait, et une description, n’hésite pas à expliquer ou se trouve la peinture si elle n’est pas facilement accessible</li>
                    <li>En soumettant une photo, tu gagnes des points, si cette photo est sélectionnée comme photo de l’oeuvre, tu gagnes des points</li>
                    <li>Tes photos sont conservées sous ton profil avec un maximum de X photos, tu recevras une info-bulle lorsque tu prendra une photo te demandant d’effacer des photos</li>
                </ul>
            </header> 0
0

<div className="03526"><div className="3">
    .3.36</div></div>        </section>
    )
    
}

InstructionsModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default InstructionsModal;