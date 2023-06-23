// import useFetch from "../../../../hooks/useFetchGet";
// import { AuthContext } from "../../../../App";
import DashboardFreeAgentRow from "../../DashboardFreeAgent/DashboardFreeAgentRow/DashboardFreeAgentRow";
import "./DashboardFreeAgentTable.scss";
import { useState } from "react";

// Funcion que cambia el estado de addPlayers para mostrar la lista de jugadores a agregar.

const DashboardFreeAgentTable = ({ user, myTeam, freeAgentList, getFreeAgentList, getMyTeamPlayerList }: any): JSX.Element => {
  const [addPlayersButtonState, setAddPlayersButtonState] = useState(false);
  const addPlayerButtonText = addPlayersButtonState ? "FIN DE EDICIÓN" : "AÑADIR JUGADORES";

  console.log("El team que le esta llegando al manager es:");
  console.log(myTeam);

  const toggleAddPlayers = async (): Promise<void> => {
    setAddPlayersButtonState(!addPlayersButtonState);
  };

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
