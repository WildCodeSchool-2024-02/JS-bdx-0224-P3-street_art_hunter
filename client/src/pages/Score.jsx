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
          <section className="podium-first-rank" key={topThreeUser.id}>
            <p>{index + 1}</p>
            <p>{topThreeUser.username}</p>
            <p>{topThreeUser.point_number}</p>
          </section>
        ))}
      </article>
      <article className="podium-total">
        {sortedUsers.map((sortedUser) => (
          <p key={sortedUser.id}>{sortedUser.username}</p>
        ))}
      </article>
    </section>
  );
}

export default Score;
