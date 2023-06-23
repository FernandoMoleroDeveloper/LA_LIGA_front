// import useFetch from "../../../../hooks/useFetchGet";
// import { AuthContext } from "../../../../App";
import DashboardFreeAgentRow from "../../DashboardFreeAgent/DashboardFreeAgentRow/DashboardFreeAgentRow";
import "./DashboardFreeAgentTable.scss";
import { useState } from "react";

// Funcion que cambia el estado de addPlayers para mostrar la lista de jugadores a agregar.

const DashboardFreeAgentTable = ({ user, myTeam, freeAgentList, getFreeAgentList, getMyTeamPlayerList }: any): JSX.Element => {
  // const authInfo = useContext(AuthContext);
  const [addPlayersButtonState, setAddPlayersButtonState] = useState(false);
  const addPlayerButtonText = addPlayersButtonState ? "FIN DE EDICIÓN" : "AÑADIR JUGADORES";
  // const API_URL_FREE_AGENTS = `${process.env.REACT_APP_API_URL as string}/user/no-team`;
  // const [freeAgentPlayers, setFreeAgentPlayers] = useState([]);

  const toggleAddPlayers = async (): Promise<void> => {
  //  await fetchFreeAgents();
    setAddPlayersButtonState(!addPlayersButtonState);
  };

  // const fetchFreeAgents = async (): Promise<void> => {
  //   console.log("Fetching free agents...");
  //   await fetchMyProfile(); // Actualiza algunos estados en el dashboardPage para refrescar mi equipo
  //   fetch(API_URL_FREE_AGENTS, {
  //     headers: {
  //       Authorization: `Bearer ${authInfo?.userToken as string}`,
  //     },
  //   })
  //     .then(async (response) => {
  //       if (response.status !== 200) {
  //         alert("Ha ocurrido un error en la petición");
  //       }
  //       return await response.json();
  //     })
  //     .then((responseParsed) => {
  //       setFreeAgentPlayers(responseParsed);
  //     })
  //     .catch((error) => {
  //       alert("Ha ocurrido un error en la petición");
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <button className="dashboard__add-players" onClick={toggleAddPlayers}>
        {addPlayerButtonText}
      </button>
      {!addPlayersButtonState ? null : (
        <div className="dashboard__free-agent">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>NOMBRE</th>
                <th>APELLIDOS</th>
                <th>EMAIL</th>
                <th>ROL</th>
                <th className="dashboard__free-agent-add-player-head">AÑADIR AL EQUIPO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="dashboard__team-spacer-x2"></tr>
              {freeAgentList?.map((user: any) => {
                return <DashboardFreeAgentRow key={user._id} user={user} myTeam={myTeam} getMyTeamPlayerList={getMyTeamPlayerList} getFreeAgentList={getFreeAgentList}></DashboardFreeAgentRow>;
              })}
              <tr className="dashboard__team-spacer"></tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default DashboardFreeAgentTable;
