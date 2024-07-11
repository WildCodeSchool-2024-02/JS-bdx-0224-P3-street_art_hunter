import PropTypes from "prop-types";
import "../styles/DesktopBar.css";
import UserLinks from "./UserLinks";

function UserBar() {
  return (
    <section className="desktop-user-section">
      <UserLinks />
    </section>
  );
}

export default UserBar;

UserBar.propTypes = {
  countUsers: PropTypes.shape({
    totalUsers: PropTypes.number.isRequired,
    recentUsers: PropTypes.number.isRequired,
  }).isRequired,
  countArts: PropTypes.shape({
    totalArts: PropTypes.number.isRequired,
    recentArts: PropTypes.number.isRequired,
  }).isRequired,
};
