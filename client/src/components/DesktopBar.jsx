import PropTypes from "prop-types";
import "../styles/DesktopBar.css";
import AdminLinks from "./AdminLinks";

function DesktopBar({ classNameBody, classNameNav }) {
  return (
    <section className="desktop-bar-section">
      <AdminLinks classNameBody={classNameBody} classNameNav={classNameNav} />
    </section>
  );
}

DesktopBar.propTypes = {
  classNameBody: PropTypes.string.isRequired,
  classNameNav: PropTypes.string.isRequired,
};

export default DesktopBar;
