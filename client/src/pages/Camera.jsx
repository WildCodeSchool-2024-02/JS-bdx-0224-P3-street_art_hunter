import { useState, useRef, useCallback, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import "../styles/Camera.css";
import { MdCameraswitch } from "react-icons/md";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function Camera() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const navigate = useNavigate();
  const { auth } = useContext(CurrentUserContext);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [webcamRef, setImage]);

  const handleRetake = () => setImage(null);

  const closeCamera = () => {
    navigate("/");
  };

  return (
    <Form
      method="POST"
      encType="multipart/form-data"
      action="/camera"
      className="camera-modal"
    >
      <button
        type="button"
        aria-labelledby="close-button"
        className="close-button"
        onClick={closeCamera}
      >
        x
      </button>

      <ul className="webcam-container">
        {image ? (
          <li>
            <img src={image} alt="Captured" className="captured-image" />
            <input type="hidden" name="pictureTaken" value={image} />
            <input type="hidden" name="userId" value={auth.id} />
            <input type="hidden" name="latitude" value={latitude || ""} />
            <input type="hidden" name="longitude" value={longitude || ""} />
          </li>
        ) : (
          <li>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
          </li>
        )}
      </ul>
      <ul className="button-container">
        {image ? (
          <li>
            <button
              type="button"
              aria-labelledby="retake-button"
              className="button"
              onClick={handleRetake}
            >
              Reprendre
            </button>
          </li>
        ) : (
          <>
            <li>
              <button
                type="button"
                aria-labelledby="switch-button"
                className="switch-button"
              >
                <MdCameraswitch className="switch-icon" />
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-labelledby="camera-button"
                className="camera-button"
                onClick={capture}
              />
            </li>
          </>
        )}
        {image && (
          <li>
            <button
              type="submit"
              aria-labelledby="upload-button"
              className="button"
            >
              Soumettre
            </button>
          </li>
        )}
      </ul>
    </Form>
  );
}

export default Camera;
