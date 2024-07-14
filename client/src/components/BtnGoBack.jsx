import "../styles/BtnGoBack.css";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function BtnGoBack() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };
  return (
    <button
      aria-labelledby="button-back"
      type="button"
      className="button-back"
      onClick={handleButtonClick}
    >
      <BsArrowLeft />
    </button>
  );
}

export default BtnGoBack;
