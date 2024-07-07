import { PropTypes } from "prop-types";

function UserList({ users }) {
  return (
    <section className="UserList-info-section">
      <h2>Liste des utilisateurs</h2>
      <table className="table">
        <thead>
          <tr className="theader">
            <th>Pseudo</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className="cells">
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>37</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserList;
