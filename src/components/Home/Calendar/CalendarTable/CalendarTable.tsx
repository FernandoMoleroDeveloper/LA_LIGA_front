import CalendarRow from "../CalendarRow/CalendarRow";
import "../../../../pages/HomePage/HomePage.scss";
import { MatchTableProps, MatchResponse } from "../../../../models/Match";

const CalendarTable = (matchs: MatchTableProps): JSX.Element => {
  return (
    <table className="home-page__table">
      <tbody>
        {
          matchs.matchs.map((match: MatchResponse) => {
            return <CalendarRow key={match.id} match={match}/>
          })
        }
      </tbody>
    </table>
  );
};

export default CalendarTable;
