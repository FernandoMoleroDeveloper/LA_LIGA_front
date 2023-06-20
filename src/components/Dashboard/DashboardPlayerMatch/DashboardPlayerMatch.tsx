import "./DashboardPlayerMatch.scss";
import teamLogo from "../../../assets/team-logo.png";

const DashboardPlayerMatch = ({ mockMatch }: any): JSX.Element => {
  return (
    <>
      <tr>
        <td className="dashboard-player__matches-row">
          <div className="dashboard-player__matches-details">
            <div className="dashboard-player__matches-round">JORNADA {mockMatch.round} | {mockMatch.date}</div>
            <div className="dashboard-player__matches-teams">
              <span className="dashboard-player__matches-name">{mockMatch.localTeam}</span>
              <img className="dashboard-player__matches-logo" src={teamLogo} alt="Team logo" />
              <div className="dashboard-player__matches-results">{mockMatch.goalsLocal} - {mockMatch.goalsVisitor}</div>
              <img className="dashboard-player__matches-logo" src={teamLogo} alt="Team logo" />
              <span className="dashboard-player__matches-name">{mockMatch.visitorTeam}</span>
            </div>
            <div className="dashboard-player__matches-blank"></div>
          </div>
        </td>
      </tr>
      <tr className="dashboard-player__matches-spacer"></tr>
    </>
  );
};

export default DashboardPlayerMatch;
