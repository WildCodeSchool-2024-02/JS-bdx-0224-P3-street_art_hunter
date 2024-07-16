import { PropTypes } from "prop-types";

function UserList({ users }) {
  return (
    <section className="user-list-info-section">
      <article className="artlist-article">
      <h2 className="user-list-h2">Liste des utilisateurs</h2>
      <ul className="user-list-ul">
        <li className="user-list-li">Tous</li>
        <li className="user-list-li">7 derniers jours</li>
      </ul>
      <table className="user-list-table">
        <thead>
          <tr className="user-list-theader">
            <th className="user-list-th">Pseudo</th>
            <th className="user-list-th">Points</th>
          </tr>
        </thead>
        <tbody className="user-list-cells">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="user-list-tr">{user.username}</td>
              <td className="user-list-tr">{user.point_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </article>
    </section>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf({
    username: PropTypes.string.isRequired,
    point_number: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserList;
