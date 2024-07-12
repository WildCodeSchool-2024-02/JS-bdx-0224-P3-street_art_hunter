import PropTypes from "prop-types";
import "../styles/DesktopBar.css";
import AdminLinks from "./AdminLinks";
import AdminStats from "./AdminStats";
import UserLinks from "./UserLinks";

function DesktopBar({ countUsers, countArts }) {
  return (
    <section className="desktop-bar-section">
      <UserLinks />
      <AdminLinks />
      <AdminStats countUsers={countUsers} countArts={countArts} />
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
