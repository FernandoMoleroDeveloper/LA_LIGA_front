import DashboardPlayerCalendar from "../../components/Dashboard/DashboardPlayerCalendar/DashboardPlayerCalendar";
import DashboardPlayerProfile from "../../components/Dashboard/DashboardProfile/DashboardPlayerProfile";
import DashboardPlayerTable from "../../components/Dashboard/DashboardPlayerTable/DashboardPlayerTable";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./DashboardPage.scss";

const DashboardPage = (): JSX.Element => {
  return (
    <div className="dashboard page">
      <Header></Header>
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
      <Footer></Footer>
    </div>
  );
};

export default DashboardPage;
