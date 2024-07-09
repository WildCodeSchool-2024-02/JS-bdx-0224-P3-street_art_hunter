import "../styles/MenuBurger.css";
import { Link } from "react-router-dom";

function MenuBurger() {
  const menuOnClick = () => {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  };

  const closeMenu = () => {
    document.getElementById("menu-bar").classList.remove("change");
    document.getElementById("nav").classList.remove("change");
    document.getElementById("menu-bg").classList.remove("change-bg");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      menuOnClick();
    }
  };

  return (
    <>
      <button
        id="menu-bar"
        type="button"
        aria-labelledby="menu-bar"
        onClick={menuOnClick}
        onKeyPress={handleKeyPress}
      />
      <ul>
        <li className="bar" id="bar1" />
        <li className="bar" id="bar2" />
        <li className="bar" id="bar3" />
      </ul>
      <ul className="nav" id="nav">
        <li>
          <Link to="/Credits" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default MenuBurger;
