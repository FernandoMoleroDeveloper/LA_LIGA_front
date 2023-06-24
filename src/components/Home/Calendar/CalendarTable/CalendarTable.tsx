import CalendarRow from "../CalendarRow/CalendarRow";
import "../../../../pages/HomePage/HomePage.scss";
import { MatchTableProps, MatchResponse } from "../../../../models/Match";

const CalendarTable = (matchs: MatchTableProps): JSX.Element => {
  return (
    <table className="home-page__table">
      <tbody>
        <tr className="home-page__spacer"></tr>
        {matchs.matchs.map((match: MatchResponse) => {
          return <CalendarRow key={match._id} match={match} />;
        })}
      </tbody>
    </table>
  );
};

export default CalendarTable;
