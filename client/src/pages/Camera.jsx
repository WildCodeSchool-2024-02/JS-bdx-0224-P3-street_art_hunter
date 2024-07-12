import { useState, useRef, useCallback } from "react";
import { Form, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import "../styles/Camera.css";
import { MdCameraswitch } from "react-icons/md";

function Camera() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
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
