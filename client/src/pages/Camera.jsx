import { useState, useRef, useCallback, useContext } from "react";
import { Form } from "react-router-dom";
import Webcam from "react-webcam";
import "../styles/Camera.css";
import { MdCameraswitch } from "react-icons/md";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function Camera() {
  const { auth } = useContext(CurrentUserContext);
  const webcamRef = useRef(null);

  const [image, setImage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artist, setArtist] = useState("");

  const capture = useCallback(  
    (e) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
      }
    },
    [webcamRef, setImage]
  );

  const handleRetake = () => {
    setImage(null);
    setLatitude(null);
    setLongitude(null);
    setTitle("");
    setDescription("");
    setArtist("");
  };

  return (
    <Form
      method="POST"
      encType="multipart/form-data"
      action="/camera"
      className="camera-modal"
    >
      <section className="webcam-container">
        {image ? (
          <>
            <img src={image} alt="Captured" className="captured-image" />
            <input type="hidden" name="pictureTaken" value={image} />
            <input type="hidden" name="userId" value={auth.id} />
            <input type="hidden" name="latitude" value={latitude} />
            <input type="hidden" name="longitude" value={longitude} />
          </>
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam"
          />
        )}
      </section>

      {image && (
        <section className="info-section">
          <p>Ajouter des informations complémentaires (facultatif)</p>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="artist">Artiste</label>
          <input
            type="text"
            name="artist"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </section>
      )}

      {!image ? (
        <section className="initial-buttons">
          <button
            type="button"
            aria-labelledby="switch-button"
            className="switch-button"
          >
            <MdCameraswitch className="switch-icon" />
          </button>
          <button
            type="button"
            aria-labelledby="camera-button"
            className="camera-button"
            onClick={capture}
          />
        </section>
      ) : (
        <section className="button-container">
          <button
            type="button"
            aria-labelledby="retake-button"
            className="button-retake-picture"
            onClick={handleRetake}
          >
            Reprendre
          </button>
          <button
            type="submit"
            aria-labelledby="upload-button"
            className="button-submit-picture"
          >
            Soumettre
          </button>
        </section>
      )}
    </Form>
  );
}

export default Camera;
