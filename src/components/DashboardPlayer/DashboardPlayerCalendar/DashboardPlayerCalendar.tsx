import "./DashboardPlayerCalendar.scss";
import DashboardPlayerMatch from "../DashboardPlayerMatch/DashboardPlayerMatch";

export interface MockMatchInterface {
  date: string;
  localTeam: string;
  visitorTeam: string;
  goalsLocal: number;
  goalsVisitor: number;
  played: boolean;
  round: number;
}

const mockMatch: MockMatchInterface = {
  date: "01-12-2023",
  localTeam: "RMC",
  visitorTeam: "FCB",
  goalsLocal: 1,
  goalsVisitor: 0,
  played: true,
  round: 1
};

const DashboardPlayerCalendar = ({ user }: any): JSX.Element => {
  return (
    <>
      <div className="dashboard-player__matches">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard-player__matches-title">PARTIDOS</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="dashboard-player__matches-spacer"></tr>
            <DashboardPlayerMatch mockMatch={mockMatch}></DashboardPlayerMatch>
            <DashboardPlayerMatch mockMatch={mockMatch}></DashboardPlayerMatch>
            <DashboardPlayerMatch mockMatch={mockMatch}></DashboardPlayerMatch>
            <DashboardPlayerMatch mockMatch={mockMatch}></DashboardPlayerMatch>
            <DashboardPlayerMatch mockMatch={mockMatch}></DashboardPlayerMatch>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardPlayerCalendar;
