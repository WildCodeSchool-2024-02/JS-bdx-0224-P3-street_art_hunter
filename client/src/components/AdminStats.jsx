import PropTypes from "prop-types";

function AdminStats({ countUsers, countArts }) {
  return (
    <section className="admin-stats-section">
      <article>
        <p>
          <span className="admin-stats-total-number">
            {countUsers.totalUsers}
          </span>
          utilisateurs inscrits
        </p>
        <section>
          <p>
            <span className="admin-stats-recent-number">
              {countUsers.recentUsers}
            </span>{" "}
            sur les 7 derniers jours
          </p>
        </section>
      </article>
      <article>
        <p>
          <span className="admin-stats-total-number">
            {countArts.totalArts}
          </span>
          oeuvres d'art ajoutées
        </p>
        <section>
          <p>
            <span className="admin-stats-recent-number">
              {countArts.recentArts}
            </span>{" "}
            sur les 7 derniers jours
          </p>
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
