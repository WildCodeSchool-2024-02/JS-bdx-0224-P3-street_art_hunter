import { useLoaderData } from "react-router-dom";
import "../styles/Score.css";

function Score() {
  const users = useLoaderData();

  const sortedUsers = users.sort((a, b) => b.point_number - a.point_number);
  const topThreeUsers = sortedUsers.slice(0, 3);

  return (
    <section className="score-section">
      <h2 className="score-main-title">Classement</h2>
      <article className="podium-top3">
        {topThreeUsers.map((topThreeUser, index) => (
          <section className="podium-rank" key={topThreeUser.id}>
            <p>{index + 1} </p>
            <p>{topThreeUser.username}</p>
            <p>{topThreeUser.point_number} points</p>
          </section>
        ))}
      </article>
      <article className="total-ranking">
        <table className="total-ranking-table">
          <thead className="theader">
            <tr>
              <th>Rang</th>
              <th>Pseudo</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody className="total-ranking-tbody">
            {sortedUsers.map((sortedUser, index) => (
              <tr key={sortedUser.id}>
                <td>{index + 1}</td>
                <td>{sortedUser.username}</td>
                <td>{sortedUser.point_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default Score;
