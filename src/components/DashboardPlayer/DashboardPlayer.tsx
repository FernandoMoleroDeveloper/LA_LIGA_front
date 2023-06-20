import "./DashboardPlayer.scss";
import DashboardPlayerTable from "./DashboardPlayerTable/DashboardPlayerTable";
import DashboardPlayerCalendar from "./DashboardPlayerCalendar/DashboardPlayerCalendar"
import DashboardPlayerProfile from "./DashboardPlayerProfile/DashboardPlayerProfile";

const DashboardPlayer = (): JSX.Element => {
  return (
    <div className="dashboard-player page">

      <div className="dashboard-player__container">
        <div className="dashboard-player__left-column">
          {/* PERFIL */}
          <DashboardPlayerProfile></DashboardPlayerProfile>
        </div>
        <div className="dashboard-player__right-column">
          {/* MI EQUIPO */}
          <DashboardPlayerTable></DashboardPlayerTable>
          {/* PARTIDOS */}
          <DashboardPlayerCalendar></DashboardPlayerCalendar>
        </div>
      </div>
    </div>
  );
};

export default DashboardPlayer;
