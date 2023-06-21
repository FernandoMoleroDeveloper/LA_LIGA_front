import "./DashboardPage.scss";
import DashboardCalendarTable from "../../components/Dashboard/DashboardCalendar/DashboardCalendarTable/DashboardCalendarTable";
import DashboardUsersTable from "../../components/Dashboard/DashboardUsers/DashboardUsersTable/DashboardUsersTable";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DashboardFreeAgentTable from "../../components/Dashboard/DashboardFreeAgent/DashboardFreeAgentTable/DashboardFreeAgentTable";
import React, { useContext } from "react";
import { AuthContext } from "../../App";
import { ROL, UserResponse } from "../../models/User";
import DashboardProfile from "../../components/Dashboard/DashboardProfile/DashboardProfile";
import { MatchResponse } from "../../models/Match";
import DashboardAdminButtons from "../../components/Dashboard/DashboardAdminButtons/DashboardAdminButtons";
import DashboardTeamsTable from "../../components/Dashboard/DashboardTeams/DashboardTeamsTable/DashboardTeamsTable";

const DashboardPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  let content;
  const API_URL_PROFILE = `${process.env.REACT_APP_API_URL as string}/user/myuser`;

  const [user, setUser] = React.useState<UserResponse>();
  const [playersOnMyTeam, setPlayersOnMyTeam] = React.useState<UserResponse[]>([]);
  const [matchesOnMyTeam, setMatchesOnMyTeam] = React.useState<MatchResponse[]>([]);

  const [activeTable, setActiveTable] = React.useState<"freeAgent" | "teams" | "calendar">("freeAgent");

  React.useEffect(() => {
    fetchmMyProfile();
  }, []);

  const fetchmMyProfile = (): void => {
    fetch(API_URL_PROFILE, {
      headers: {
        Authorization: `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setUser(responseParsed.user);
        setPlayersOnMyTeam(responseParsed.playersOnMyTeam);
        setMatchesOnMyTeam(responseParsed.matchsOnMyTeam);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición");
        console.error(error);
      });
  };

  switch (authInfo.userRol) {
    case ROL.PLAYER:
      content = (
        <>
          {/* Mi equipo */}
          <DashboardUsersTable playersOnMyTeam={playersOnMyTeam}></DashboardUsersTable>
          {/* Mi calendario */}
          <DashboardCalendarTable matchesOnMyTeam={matchesOnMyTeam}></DashboardCalendarTable>
        </>
      );
      break;
    case ROL.MANAGER:
      content = (
        <>
          {/* Mi equipo */}
          {/* <DashboardUsersTable></DashboardUsersTable> */}
          {/* Agregar jugadores */}
          <DashboardFreeAgentTable></DashboardFreeAgentTable>
          {/* Mi calendario */}
          <DashboardCalendarTable></DashboardCalendarTable>
        </>
      );
      break;
    case ROL.ADMIN:
      content = (
        <>
          <DashboardAdminButtons setActiveTable={setActiveTable} />
          {activeTable === "freeAgent" && <DashboardFreeAgentTable />}
          {activeTable === "teams" && <DashboardTeamsTable />}
          {activeTable === "calendar" && <DashboardCalendarTable />}
        </>
      );
      break;
    default:
      content = (
        <>
          {/* Mi equipo */}
          {/* <DashboardUsersTable></DashboardUsersTable> */}
          {/* Mi calendario */}
          <DashboardCalendarTable></DashboardCalendarTable>
        </>
      );
      break;
  }

  console.log("Here is the players and matches:");
  console.log({ playersOnMyTeam, matchesOnMyTeam });

  return (
    <div className="dashboard page">
      <Header></Header>
      <div className="dashboard__container">
        <div className="dashboard__left-column">{authInfo?.userToken && user && <DashboardProfile user={user}></DashboardProfile>}</div>
        <div className="dashboard__right-column">{content}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardPage;
