import PropTypes from "prop-types";
import "../styles/DesktopBar.css";
import AdminLinks from "./AdminLinks";
import AdminStats from "./AdminStats";

function DesktopBar({ countUsers, countArts }) {
  return (
    // ajouter la logique pour que cette modification ne s'affiche que pour le profil administrateur
    <section className="desktop-bar-section">
      <section className="desktop-bar-section-admin">
        <AdminStats countUsers={countUsers} countArts={countArts} />
        <AdminLinks />
      </section>
    </section>
  );
}

export default DesktopBar;

DesktopBar.propTypes = {
  countUsers: PropTypes.shape({
    totalUsers: PropTypes.number.isRequired,
    recentUsers: PropTypes.number.isRequired,
  }).isRequired,
  countArts: PropTypes.shape({
    totalArts: PropTypes.number.isRequired,
    recentArts: PropTypes.number.isRequired,
  }).isRequired,
};
