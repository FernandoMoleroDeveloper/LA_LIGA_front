import "./DashboardPage.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React, { useContext, useEffect, useState } from "react";
import DashboardCalendarTable from "../../components/Dashboard/DashboardCalendar/DashboardCalendarTable/DashboardCalendarTable";
import DashboardUsersTable from "../../components/Dashboard/DashboardUsers/DashboardUsersTable/DashboardUsersTable";
import DashboardFreeAgentTable from "../../components/Dashboard/DashboardFreeAgent/DashboardFreeAgentTable/DashboardFreeAgentTable";
import MyProfile from "../../components/Dashboard/DashboardProfile/MyProfile/MyProfile";
import DashboardAdminButtons from "../../components/Dashboard/DashboardAdminButtons/DashboardAdminButtons";
import DashboardTeamsAdminTable from "../../components/Dashboard/DashboardTeamsAdmin/DashboardTeamsAdminTable/DashboardTeamsAdminTable";
import DashboardAdminLeague from "../../components/Dashboard/DashboardAdminLeague/DashboardAdminLeague";
import DashboardAdminUsersTable from "../../components/Dashboard/DashboardAdminUsers/DashboardAdminUsersTable/DashboardAdminUsersTable";
import MyTeam from "../../components/Dashboard/DashboardProfile/MyTeam";
import { AuthContext } from "../../App";
import { MatchResponse } from "../../models/Match";
import { TeamResponse } from "../../models/Team";
import { ROL, UserResponse } from "../../models/User";

const DashboardPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const [roleColor, setRoleColor] = useState<string>("header");
  const [user, setUser] = React.useState<UserResponse>();
  // const [playersOnMyTeam, setPlayersOnMyTeam] = useState<UserResponse[]>([]);
  const [myTeamPlayerList, setMyTeamPlayerList] = useState<UserResponse[]>([]);
  const [freeAgentList, setFreeAgentList] = useState<UserResponse[]>([]);
  const [usersAdminList, setUsersAdminList] = React.useState<UserResponse>();
  const [matchesOnMyTeam, setMatchesOnMyTeam] = useState<MatchResponse[]>([]);
  const [teamsAdmin, setTeamsAdmin] = useState<TeamResponse[]>([]);
  const [activeTable, setActiveTable] = React.useState<"users" | "teams" | "calendar">("users");
  const API_URL_PROFILE = `${process.env.REACT_APP_API_URL as string}/user/myuser`;
  const API_URL_TEAMS = `${process.env.REACT_APP_API_URL as string}/team`;
  const API_URL_FREE_AGENTS = `${process.env.REACT_APP_API_URL as string}/user/no-team`;
  const API_URL_ALL_USERS = `${process.env.REACT_APP_API_URL as string}/user/?page=1&limit=100`;
  let content;

  useEffect(() => {
    fetchMyProfile();
    getMyTeamPlayerList();
    if (authInfo.userRol === ROL.MANAGER) {
      getFreeAgentList();
    }

    if (authInfo.userRol === ROL.ADMIN) {
      fetchTeamsAdmin();
      getUsersAdminList();
      // fetchManagerTeam();
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

  const fetchMyProfile = (): void => {
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
        console.log("Este es el usuario traido:");
        console.log(responseParsed.user.team);
        // setPlayersOnMyTeam(responseParsed.playersOnMyTeam);
        setMatchesOnMyTeam(responseParsed.matchsOnMyTeam);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición");
        console.error(error);
      });
  };

  // Obtiene los jugadores el equipo del usuario logado
  const getMyTeamPlayerList = (): void => {
    fetch(API_URL_PROFILE, {
      headers: {
        Authorization: `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición al servidor.");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setMyTeamPlayerList(responseParsed.playersOnMyTeam);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición en el codigo.");
        console.error(error);
      });
  };

  // Obtiene los jugadores del equipo del usuario logado
  const getFreeAgentList = (): void => {
    fetch(API_URL_FREE_AGENTS, {
      headers: {
        Authorization: `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición getFreeAgentList");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setFreeAgentList(responseParsed);
        console.log("Acabo de pedir los jugadores libres desde dashboardPage, esto ha llegado:");
        console.log(responseParsed);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición getFreeAgentList");
        console.error(error);
      });
  };

  const getUsersAdminList = (): void => {
    fetch(API_URL_ALL_USERS, {
      headers: {
        Authorization: `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición al servidor.");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setUsersAdminList(responseParsed.data);
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
          <DashboardUsersTable myTeamPlayerList={myTeamPlayerList}></DashboardUsersTable>
          {/* Mi calendario */}
          <DashboardCalendarTable matchesOnMyTeam={matchesOnMyTeam}></DashboardCalendarTable>
        </>
      );
      break;
    case ROL.MANAGER:
      content = (
        <>
          {/* Mi equipo */}
          <DashboardUsersTable myTeamPlayerList={myTeamPlayerList} getMyTeamPlayerList={getMyTeamPlayerList} getFreeAgentList={getFreeAgentList}></DashboardUsersTable>
          {/* Agregar jugadores */}
          <DashboardFreeAgentTable myTeam={user?.team} fetchMyProfile={fetchMyProfile} freeAgentList={freeAgentList} getMyTeamPlayerList={getMyTeamPlayerList} getFreeAgentList={getFreeAgentList}></DashboardFreeAgentTable>
          {/* Mi calendario */}
          <DashboardCalendarTable matchesOnMyTeam={matchesOnMyTeam}></DashboardCalendarTable>
        </>
      );
      break;
    case ROL.ADMIN:
      content = (
        <>
          <DashboardAdminButtons setActiveTable={setActiveTable}></DashboardAdminButtons>
          {activeTable === "users" && <DashboardAdminUsersTable usersAdminList={usersAdminList} getUsersAdminList={getUsersAdminList} teamsAdmin={teamsAdmin} fetchTeamsAdmin={fetchTeamsAdmin}></DashboardAdminUsersTable>}
          {activeTable === "teams" && <DashboardTeamsAdminTable teamsAdmin={teamsAdmin} playersAdmin={undefined} setShowPlayerTeam={function (value: React.SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          } } showPlayerTeam={false}></DashboardTeamsAdminTable>}
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

  return (
    <div className="dashboard page">
      <Header roleColor={roleColor}></Header>
      <div className="dashboard__container">
        <div className="dashboard__left-column">
          {
            authInfo?.userToken && user && <MyProfile user={user}></MyProfile>
          }
          {
            authInfo?.userToken && user?.rol === "MANAGER" && <MyTeam user={user}></MyTeam>
          }
        </div>
        <div className="dashboard__right-column">{content}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardPage;
