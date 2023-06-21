import DashboardFreeAgentRow from "../../DashboardFreeAgent/DashboardFreeAgentRow/DashboardFreeAgentRow";
import "./DashboardFreeAgentTable.scss";

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

const DashboardFreeAgentTable = ({ user }: any): JSX.Element => {
  return (
    <>
      <div className="dashboard-free-agent__table">
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
    </>
  );
};

export default DashboardFreeAgentTable;
