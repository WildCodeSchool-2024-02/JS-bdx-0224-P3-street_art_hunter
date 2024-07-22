import { useMap } from "react-leaflet";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiSolidMinusCircle } from "react-icons/bi";
import "../styles/ZoomControl.css";

function ZoomControlCustom() {
  const map = useMap();

  const handleZoomIn = () => {
    map.zoomIn();
  };

  const handleZoomOut = () => {
    map.zoomOut();
  };

  return (
    <ul className="custom-zoom-control">
      <li>
        <button
          aria-label="the + for control zoom"
          type="button"
          className="zoom-in"
          onClick={handleZoomIn}
        >
          <BsPlusCircleFill />
        </button>
      </li>
      <li>
        <button
          aria-label="the - for control zoom"
          type="button"
          className="zoom-out"
          onClick={handleZoomOut}
        >
          <BiSolidMinusCircle />
        </button>
      </li>
    </ul>
  );
}

export default ZoomControlCustom;
