import "./DashboardPlayerMatch.scss";
import teamLogo from "../../../assets/team-logo.png";

const DashboardPlayerMatch = ({ mockMatch }: any): JSX.Element => {
  return (
    <>
      <tr>
        <td className="dashboard__matches-row">
          <div className="dashboard__matches-details">
            <div className="dashboard__matches-round">JORNADA {mockMatch.round} | {mockMatch.date}</div>
            <div className="dashboard__matches-teams">
              <span className="dashboard__matches-name">{mockMatch.localTeam}</span>
              <img className="dashboard__matches-logo" src={teamLogo} alt="Team logo" />
              <div className="dashboard__matches-results">{mockMatch.goalsLocal} - {mockMatch.goalsVisitor}</div>
              <img className="dashboard__matches-logo" src={teamLogo} alt="Team logo" />
              <span className="dashboard__matches-name">{mockMatch.visitorTeam}</span>
            </div>
            <div className="dashboard__matches-blank"></div>
          </div>
        </td>
      </tr>
      <tr className="dashboard__matches-spacer"></tr>
    </>
  );
};

export default DashboardPlayerMatch;
