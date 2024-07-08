import { useState } from "react";
import "../styles/MenuBurger.css";
import { Link } from "react-router-dom";

function MenuBurger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button
        type="button"
        id="menu-bar"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <ul>
          <li className="bar" id="bar1" />
          <li className="bar" id="bar2" />
          <li className="bar" id="bar3" />
        </ul>
      </button>
      <ul className={`nav ${menuOpen ? "open" : ""}`} id="nav">
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
