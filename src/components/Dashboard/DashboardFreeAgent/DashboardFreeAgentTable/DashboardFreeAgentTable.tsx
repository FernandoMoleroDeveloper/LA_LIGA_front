import DashboardFreeAgentRow from "../../DashboardFreeAgent/DashboardFreeAgentRow/DashboardFreeAgentRow";
import "./DashboardFreeAgentTable.scss";
import { useState } from "react";

export interface MockFreeAgentInterface {
  firstName: string;
  lastName: string;
  email: string;
  team: string;
  rol: string;
}

const mockFreeAgent: MockFreeAgentInterface = {
  firstName: "Free",
  lastName: "Agent",
  email: "email@email.com",
  team: "",
  rol: "Jugador",
};

// Funcion que cambia el estado de addPlayers para mostrar la lista de jugadores a agregar.

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
                <th>EQUIPO</th>
                <th>ROL</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <tr className="dashboard__team-spacer-x2"></tr>
              <DashboardFreeAgentRow user={mockFreeAgent}></DashboardFreeAgentRow>
              <DashboardFreeAgentRow user={mockFreeAgent}></DashboardFreeAgentRow>
              <DashboardFreeAgentRow user={mockFreeAgent}></DashboardFreeAgentRow>
              <DashboardFreeAgentRow user={mockFreeAgent}></DashboardFreeAgentRow>
              <tr className="dashboard__team-spacer"></tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default DashboardFreeAgentTable;
