import { useLoaderData } from "react-router-dom";
import "../styles/Score.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function Score() {
  const sortedUsers = useLoaderData();
  const { auth } = useContext(CurrentUserContext);

  const topThreeUsers = sortedUsers.slice(0, 3);

  return (
    <section className="score-section-wrapper">
      <article className="score-article">
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
              <thead className="total-ranking-thead">
                <tr>
                  <th>Rang</th>
                  <th>Pseudo</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody className="total-ranking-tbody">
                {sortedUsers.map((sortedUser, index) => (
                  <tr
                    key={sortedUser.id}
                    className={
                      auth.id === sortedUser.id && "total-ranking-auth"
                    }
                  >
                    <td>{index + 1}</td>
                    <td>{sortedUser.username}</td>
                    <td>{sortedUser.point_number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>
      </article>
    </section>
  );
}

export default Score;
