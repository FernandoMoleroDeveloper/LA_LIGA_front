import "./DashboardCalendarRow.scss";
import teamLogo from "../../../../assets/team-logo.png";

const DashboardCalendarRow = ({ match }: any): JSX.Element => {
  return (
    <>
      <tr>
        <td className="dashboard__matches-row">
          <div className="dashboard__matches-details">
            <div className="dashboard__matches-round">JORNADA {match.round} | {new Date(match.date).toLocaleString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" })}</div>
            <div className="dashboard__matches-teams">
              <span className="dashboard__matches-name">{match.localTeam.initials}</span>
              <img className="dashboard__matches-logo" src={teamLogo} alt="Team logo" />
              <div className="dashboard__matches-results">{match.goalsLocal.length} - {match.goalsVisitor.length}</div>
              <img className="dashboard__matches-logo" src={teamLogo} alt="Team logo" />
              <span className="dashboard__matches-name">{match.visitorTeam.initials}</span>
            </div>
            <div className="dashboard__matches-blank"></div>
          </div>
        </td>
      </tr>
      <tr className="dashboard__matches-spacer"></tr>
    </>
  );
};

export default DashboardCalendarRow;
