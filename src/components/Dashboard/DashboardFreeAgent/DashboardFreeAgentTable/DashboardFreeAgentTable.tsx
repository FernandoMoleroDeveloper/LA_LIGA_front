import useFetch from "../../../../hooks/useFetchGet";
import DashboardFreeAgentRow from "../../DashboardFreeAgent/DashboardFreeAgentRow/DashboardFreeAgentRow";
import "./DashboardFreeAgentTable.scss";
import { useState } from "react";

// Funcion que cambia el estado de addPlayers para mostrar la lista de jugadores a agregar.

const DashboardFreeAgentTable = ({ user, myTeam }: any): JSX.Element => {
  const [addPlayers, setAddPlayers] = useState(false);
  const addPlayerButtonText = addPlayers ? "FIN DE EDICIÓN" : "AÑADIR JUGADORES";
  const API_URL_FREE_AGENTS = `${process.env.REACT_APP_API_URL as string}/user/no-team`;
  // Fetch free agent players
  const [freeAgentPlayers]: any = useFetch(`${API_URL_FREE_AGENTS}`);

  if (freeAgentPlayers) {
    console.log("Free agent players list:");
    console.log(freeAgentPlayers);
  }

  const toggleAddPlayers = (): void => {
    setAddPlayers(!addPlayers);
  };

  return (
    <>
      <button className="dashboard__add-players" onClick={toggleAddPlayers}>
        {addPlayerButtonText}
      </button>
      {!addPlayers ? null : (
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
              {
                freeAgentPlayers?.map((user: any) => {
                  return (
                    <>
                      <DashboardFreeAgentRow user={user} myTeam={myTeam}></DashboardFreeAgentRow>
                    </>
                  )
                })
              }
              <tr className="dashboard__team-spacer"></tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default DashboardFreeAgentTable;
