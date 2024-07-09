import PropTypes from "prop-types";

function AdminStats({ countUsers, countArts }) {
  return (
    <section className="admin-stats-section">
      <article>
        <p>{countUsers.totalUsers}</p>
        <p>utilisateurs inscrits</p>
        <p>dont {countUsers.recentUsers} les 7 derniers jours</p>
      </article>
      <article>
        <p>{countArts.totalArts}</p>
        <p>oeuvres d'art ajoutées</p>
        <p>dont {countArts.recentArts} les 7 derniers jours</p>
      </article>
    </section>
  );
}

AdminStats.propTypes = {
  countUsers: PropTypes.shape({
    totalUsers: PropTypes.number.isRequired,
    recentUsers: PropTypes.number.isRequired,
  }).isRequired,
  countArts: PropTypes.shape({
    totalArts: PropTypes.number.isRequired,
    recentArts: PropTypes.number.isRequired,
  }).isRequired,
};

export default AdminStats;
