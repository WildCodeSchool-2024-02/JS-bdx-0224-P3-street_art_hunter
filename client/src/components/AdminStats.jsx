import PropTypes from "prop-types";

function AdminStats({ countUsers, countArts }) {
  return (
    <section className="admin-stats-section">
      <article>
        <p>{countUsers.totalUsers}</p>
        <p>utilisateurs inscrits</p>
        <section>
          <p>dont</p>
          <p>{countUsers.recentUsers} </p>
          <p>les 7 derniers jours</p>
        </section>
      </article>
      <article>
        <p>{countArts.totalArts}</p>
        <p>oeuvres d'art ajoutées</p>
        <section>
          <p>dont</p>
          <p>{countArts.recentArts}</p>
          <p>les 7 derniers jours</p>
        </section>
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
