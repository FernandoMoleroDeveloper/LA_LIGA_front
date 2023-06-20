import DashboardPlayerCalendar from "../../components/Dashboard/DashboardPlayerCalendar/DashboardPlayerCalendar";
import DashboardPlayerProfile from "../../components/Dashboard/DashboardProfile/DashboardPlayerProfile";
import DashboardPlayerTable from "../../components/Dashboard/DashboardPlayerTable/DashboardPlayerTable";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./DashboardPage.scss";
import DashboardFreeAgentTable from "../../components/Dashboard/DashboardFreeAgentTable/DashboardFreeAgentTable";

const DashboardPage = (): JSX.Element => {
  let content;

  switch (authInfo.rol) {
    case "Player":
      content = (
        <>
          {/* Mi equipo */}
          <DashboardPlayerTable></DashboardPlayerTable>
          {/* Mi calendario */}
          <DashboardPlayerCalendar></DashboardPlayerCalendar>
        </>
      );
      break;
    case "Manager":
      content = (
        <>
          {/* Mi equipo */}
          <DashboardPlayerTable></DashboardPlayerTable>
          {/* Agregar jugadores */}
          <DashboardFreeAgentTable></DashboardFreeAgentTable>
          {/* Mi calendario */}
          <DashboardPlayerCalendar></DashboardPlayerCalendar>
        </>
      );
      break;
    case "Admin":
      content = (
        <>
          {/* Mi equipo */}
          <DashboardPlayerTable></DashboardPlayerTable>
          {/* Mi calendario */}
          <DashboardPlayerCalendar></DashboardPlayerCalendar>
        </>
      );
      break;
    default:
      content = (
        <>
          {/* Mi equipo */}
          <DashboardPlayerTable></DashboardPlayerTable>
          {/* Mi calendario */}
          <DashboardPlayerCalendar></DashboardPlayerCalendar>
        </>
      );
      break;
  }

  return (
    <div className="dashboard page">
      <Header></Header>
      <div className="dashboard-player__container">
        <div className="dashboard-player__left-column">
          {/* PERFIL */}
          <DashboardPlayerProfile role={role}></DashboardPlayerProfile>
        </div>
        <div className="dashboard-player__right-column">
          {content}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardPage;
