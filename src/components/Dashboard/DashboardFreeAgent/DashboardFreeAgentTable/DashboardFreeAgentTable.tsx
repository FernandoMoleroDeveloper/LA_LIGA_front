import DashboardPlayerUser from "../../DashboardUsers/DashboardUserRow/DashboardUserRow";
import "./DashboardFreeAgentTable.scss";
import { useState } from "react";

export interface MockFreeAgentInterface {
  name: string;
  surname: string;
  email: string;
  role: string;
}

const mockFreeAgent: MockFreeAgentInterface = {
  name: "Free",
  surname: "Agent",
  email: "email@email.com",
  role: "Jugador",
};

// Funcion que cambia el estado de addPlayers para mostrar la lista de jugadores a agregar

const DashboardFreeAgentTable = ({ user }: any): JSX.Element => {
  const [addPlayers, setAddPlayers] = useState(false);
  const addPlayerButtonText = addPlayers ? "FIN DE EDICIÓN" : "AÑADIR JUGADORES";

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
                <th>AÑADIR AL EQUIPO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="dashboard__team-spacer-x2"></tr>
              <DashboardPlayerUser user={mockFreeAgent}></DashboardPlayerUser>
              <DashboardPlayerUser user={mockFreeAgent}></DashboardPlayerUser>
              <DashboardPlayerUser user={mockFreeAgent}></DashboardPlayerUser>
              <DashboardPlayerUser user={mockFreeAgent}></DashboardPlayerUser>
              <tr className="dashboard__team-spacer"></tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default DashboardFreeAgentTable;
