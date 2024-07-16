import PropTypes from "prop-types";
import "../styles/DesktopBar.css";
import AdminLinks from "./AdminLinks";
 
function DesktopBar({ classNameBody, classNameSection }) {
  return (
    <section className="desktop-bar-section">
      <AdminLinks
        classNameBody={classNameBody}
        classNameSection={classNameSection}
      />
    </section>
  );
}

DesktopBar.propTypes = {
  classNameBody: PropTypes.string.isRequired,
  classNameSection: PropTypes.string.isRequired,
};

export default DesktopBar;
