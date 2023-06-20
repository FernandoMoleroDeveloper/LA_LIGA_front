import "./DashboardPage.scss";
import DashboardCalendar from "../../components/Dashboard/DashboardCalendar/DashboardCalendar";
import DashboardTable from "../../components/DashboardTable/DashboardTable";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DashboardFreeAgentTable from "../../components/Dashboard/DashboardFreeAgentTable/DashboardFreeAgentTable";
import React, { useContext } from "react";
import { AuthContext } from "../../App";
import { ROL, UserResponse } from "../../models/User";
import DashboardProfile from "../../components/DashboardProfile/DashboardProfile";
import { MatchResponse } from "../../models/Match";

const DashboardPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  let content;
  const API_URL_PROFILE = `${process.env.REACT_APP_API_URL as string}/user/myuser`

  const [user, setUser] = React.useState<UserResponse>()
  const [playersOnMyTeam, setPlayersOnMyTeam] = React.useState<UserResponse[]>([])
  const [matchsOnMyTeam, setMatchsOnMyTeam] = React.useState<MatchResponse[]>([])

  React.useEffect(() => {
    fetchmMyProfile()
  }, [])

  const fetchmMyProfile = (): void => {
    fetch(API_URL_PROFILE, {
      headers: {
        Authorization: `Bearer ${authInfo?.userToken as string}`
      }
    }).then(async response => {
      if (response.status !== 200) {
        alert("Ha ocurrido un error en la petición")
      }
      return await response.json()
    }).then(responseParsed => {
      console.log(responseParsed)
      setUser(responseParsed.user);
      setPlayersOnMyTeam(responseParsed.playersOnMyTeam);
      setMatchsOnMyTeam(responseParsed.matchsOnMyTeam);
    })
      .catch(error => {
        alert("Ha ocurrido un error en la petición")
        console.error(error);
      })
  }

  switch (authInfo.userRol) {
    case ROL.PLAYER:
      content = (
        <>
          {/* Mi equipo */}
          <DashboardTable></DashboardTable>
          {/* Mi calendario */}
          <DashboardCalendar></DashboardCalendar>
        </>
      );
      break;
    case ROL.MANAGER:
      content = (
        <>
          {/* Mi equipo */}
          <DashboardTable></DashboardTable>
          {/* Agregar jugadores */}
          <DashboardFreeAgentTable></DashboardFreeAgentTable>
          {/* Mi calendario */}
          <DashboardCalendar></DashboardCalendar>
        </>
      );
      break;
    case ROL.ADMIN:
      content = (
        <>
          {/* Mi equipo */}
          <DashboardTable></DashboardTable>
          {/* Mi calendario */}
          <DashboardCalendar></DashboardCalendar>
        </>
      );
      break;
    default:
      content = (
        <>
          {/* Mi equipo */}
          <DashboardTable></DashboardTable>
          {/* Mi calendario */}
          <DashboardCalendar></DashboardCalendar>
        </>
      );
      break;
  }
  console.log({ playersOnMyTeam, matchsOnMyTeam })
  return (
    <div className="dashboard page">
      <Header></Header>
      <div className="dashboard__container">
        <div className="dashboard__left-column">
          {authInfo?.userToken && user &&
          <DashboardProfile _id={user._id} firstName={user.firstName} lastName={user.lastName} email={user.email} rol={user.rol} image={user.image}></DashboardProfile>}
        </div>
        <div className="dashboard__right-column">
          {content}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardPage;
