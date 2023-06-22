import { ClasificationTeamRowProps } from "../../../../models/Team";
import "../../../../pages/HomePage/HomePage.scss";

const ClasificationTeamRow = ({ team }: ClasificationTeamRowProps): JSX.Element => {
  return (
    <><tr className="home-page__spacer"></tr><tr className="home-page__table-clas">
      <td className="home-page__table-number">{team.position}</td>
      <td>
        <div className="home-page__table-team">
          <img className="home-page__team-img" src={team.image} alt="Escudo avatar" />
          <p>{team.name}</p>
        </div>
      </td>
      <td>{team.points}</td>
      <td>{team.matchesPlayed}</td>
      <td>{team.matchesWon}</td>
      <td>{team.matchesDrawn}</td>
      <td>{team.matchesLost}</td>
      <td>{team.goalsFor}</td>
      <td>{team.goalsAgainst}</td>
    </tr></>
  );
};

export default ClasificationTeamRow;
