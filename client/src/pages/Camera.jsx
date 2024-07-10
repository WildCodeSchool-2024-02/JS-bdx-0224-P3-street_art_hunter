import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import "../styles/Camera.css";
import { MdCameraswitch } from "react-icons/md";

const FACING_MODE_USER = { facingMode: "user" }; // Front Camera
const FACING_MODE_ENVIRONMENT = { facingMode: { exact: "environment" } }; // Back Camera

function Camera() {
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState(null);
  const [videoConstraints, setVideoConstraints] = useState(FACING_MODE_USER);
  const navigate = useNavigate();

  const getListOfVideoInputs = async () => {
    const mediaDevices = await navigator.mediaDevices.enumerateDevices();
    return mediaDevices.filter((device) => device.kind === "videoinput");
  };

  const switchCamera = async () => {
    const videoInputList = await getListOfVideoInputs();
    if (videoInputList.length > 1) {
      const currentVideoConstraints = { ...videoConstraints };

      if (
        JSON.stringify(currentVideoConstraints) ===
        JSON.stringify(FACING_MODE_USER)
      ) {
        setVideoConstraints(FACING_MODE_ENVIRONMENT);
      } else {
        setVideoConstraints(FACING_MODE_USER);
      }
    } else {
      alert("Device has only one camera.");
    }
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  const retake = () => setImage(null);

  const upload = () => {
    alert("Your photo uploaded successfully!");
    setImage(null);
  };

  const closeCamera = () => {
    navigate("/");
  };

  return (
    <li className="camera-modal">
      <img
        className="logo-pixhunt"
        src="./src/assets/images/new-logo-pixhunt-Photoroom-removebg-preview.png"
        alt="logo pixhunt"
      />

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
          </li>
        ) : (
          <li>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
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
              onClick={retake}
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
                onClick={switchCamera}
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
              type="button"
              aria-labelledby="upload-button"
              className="button"
              onClick={upload}
            >
              Soumettre
            </button>
          </li>
        )}
      </ul>
    </li>
  );
}

export default Camera;
