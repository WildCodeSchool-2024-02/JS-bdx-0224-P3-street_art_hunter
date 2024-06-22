import PropTypes from 'prop-types';

function ModalContent({ onClose }) {
    return (
      <section className="hidden fixed z-100 pt-2 pb-1 px-4 bg-white rounded-md flex flex-col items-center">
        <h2 className="text-red-200">Comment intéragir avec votre site PixHunt</h2>
          <p>
            Autorise ton téléphone à te géolocaliser pour te placer sur lacarte
          </p>
          <p>Connecte-toi ou crée un compte si n’en as pas encore créé un !!*</p>
          <p>
            Avec le bouton appareil photo de la carte, ouvre l'appareil photo de ton téléphone pour photographiers l’oeuvre que tu as choisie !!*
          </p>
          <p>
            Tu peux rajouter un titre à l’oeuvre, dans la description, n’hésite pas à expliquer ou se trouve la peinture si elle n’est pas facilement accessible
          </p>
          <p>
            Tes photos sont conservées sous ton profil avec un maximum de X photos, tu recevras une info-bulle lorsque tu prendra une photo te demandant d’effacer des photos
          </p>
        <button onClick={onClose} type="button">Close</button>
      </section>
    );

    };
    ModalContent.propTypes = {
        onClose: PropTypes.func.isRequired,
  }

  export default ModalContent;

  