import React, { useContext, useEffect, useState } from "react";
import "./DashboardPage.scss";
import DashboardCalendarTable from "../../components/Dashboard/DashboardCalendar/DashboardCalendarTable/DashboardCalendarTable";
import DashboardUsersTable from "../../components/Dashboard/DashboardUsers/DashboardUsersTable/DashboardUsersTable";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DashboardFreeAgentTable from "../../components/Dashboard/DashboardFreeAgent/DashboardFreeAgentTable/DashboardFreeAgentTable";
import { AuthContext } from "../../App";
import { ROL, UserResponse } from "../../models/User";
import DashboardProfile from "../../components/Dashboard/DashboardProfile/DashboardProfile";
import { TeamResponse } from "../../models/Team";
import DashboardAdminButtons from "../../components/Dashboard/DashboardAdminButtons/DashboardAdminButtons";
import { MatchResponse } from "../../models/Match";
import DashboardTeamsAdminTable from "../../components/Dashboard/DashboardTeamsAdmin/DashboardTeamsAdminTable/DashboardTeamsAdminTable";
import DashboardAdminLeague from "../../components/Dashboard/DashboardAdminLeague/DashboardAdminLeague";

const DashboardPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const [roleColor, setRoleColor] = useState<string>("header");
  const [user, setUser] = React.useState<UserResponse>();
  const [playersOnMyTeam, setPlayersOnMyTeam] = useState<UserResponse[]>([]);
  const [matchesOnMyTeam, setMatchesOnMyTeam] = useState<MatchResponse[]>([]);
  const [teamsAdmin, setTeamsAdmin] = useState<TeamResponse[]>([]);
  const [activeTable, setActiveTable] = React.useState<"freeAgent" | "teams" | "calendar">("freeAgent");
  let content;
  const API_URL_PROFILE = `${process.env.REACT_APP_API_URL as string}/user/myuser`;
  const API_URL_TEAMS = `${process.env.REACT_APP_API_URL as string}/team`;

  useEffect(() => {
    fetchmMyProfile();
    if (authInfo.userRol === ROL.ADMIN) {
      fetchTeamsAdmin();
    }

    switch (authInfo.userRol) {
      case ROL.PLAYER:
        setRoleColor("header");
        break;
      case ROL.MANAGER:
        setRoleColor("header accent-manager");
        break;
      case ROL.ADMIN:
        setRoleColor("header accent-admin");
        break;
      default:
        setRoleColor("header");
        break;
    }
  }, [authInfo?.userRol]);

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

  const fetchTeamsAdmin = (): void => {
    fetch(API_URL_TEAMS, {
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
        setTeamsAdmin(responseParsed.data);
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
          <DashboardUsersTable playersOnMyTeam={playersOnMyTeam}></DashboardUsersTable>
          {/* Agregar jugadores */}
          <DashboardFreeAgentTable myTeam={user?.team}></DashboardFreeAgentTable>
          {/* Mi calendario */}
          <DashboardCalendarTable matchesOnMyTeam={matchesOnMyTeam}></DashboardCalendarTable>
        </>
      );
      break;
    case ROL.ADMIN:
      content = (
        <>
          <DashboardAdminButtons setActiveTable={setActiveTable} />
          {activeTable === "freeAgent" && <DashboardFreeAgentTable />}
          {activeTable === "teams" && <DashboardTeamsAdminTable teamsAdmin={teamsAdmin}></DashboardTeamsAdminTable>}
          {activeTable === "calendar" && <DashboardAdminLeague />}
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
      <Header roleColor={roleColor}></Header>
      <div className="dashboard__container">
        <div className="dashboard__left-column">{authInfo?.userToken && user && <DashboardProfile user={user}></DashboardProfile>}</div>
        <div className="dashboard__right-column">{content}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardPage;
