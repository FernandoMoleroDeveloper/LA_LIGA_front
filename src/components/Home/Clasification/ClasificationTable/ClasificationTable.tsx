import "../../../../pages/HomePage/HomePage.scss";
import ClasificationTeamRow from "../CalsificationTeamRow/ClasificationTeamRow";
import { ClasificationTeamTableProps, TeamClasificationResponse } from "../../../../models/Team";

const ClasificationTeamTable = (teams: ClasificationTeamTableProps): JSX.Element => {
  console.log("Pepe", teams.teams);
  return (
    <table className="home-page__table">
      <thead>
        <tr>
          <th>POS</th>
          <th>EQUIPO</th>
          <th>PTS</th>
          <th>PJ</th>
          <th>PG</th>
          <th>PE</th>
          <th>PP</th>
          <th>GF</th>
          <th>GC</th>
        </tr>
      </thead>
      <tbody>
        <tr className="home-page__spacer"></tr>
        {
        teams.teams.map((team: TeamClasificationResponse) => {
          return <>
            <tr className="home-page__spacer"></tr>
            <ClasificationTeamRow key={team.id} team={team}/>
          </>
        })
        }

      </tbody>
    </table>

  );
};

export default ClasificationTeamTable;
