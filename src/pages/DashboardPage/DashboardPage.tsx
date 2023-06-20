import "./DashboardPage.scss";
import DashboardPlayerCalendar from "../../components/Dashboard/DashboardPlayerCalendar/DashboardPlayerCalendar";
import DashboardPlayerProfile from "../../components/Dashboard/DashboardProfile/DashboardPlayerProfile";
import DashboardPlayerTable from "../../components/Dashboard/DashboardPlayerTable/DashboardPlayerTable";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DashboardFreeAgentTable from "../../components/Dashboard/DashboardFreeAgentTable/DashboardFreeAgentTable";
import React, { useContext } from "react";
import { AuthContext } from "../../App";
import { ROL } from "../../models/User";

const DashboardPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  let content;

  switch (authInfo.userRol) {
    case ROL.PLAYER:
      content = (
        <>
          {/* Mi equipo */}
          <DashboardPlayerTable></DashboardPlayerTable>
          {/* Mi calendario */}
          <DashboardPlayerCalendar></DashboardPlayerCalendar>
        </>
      );
      break;
    case ROL.MANAGER:
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
    case ROL.ADMIN:
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
          <DashboardPlayerProfile></DashboardPlayerProfile>
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
