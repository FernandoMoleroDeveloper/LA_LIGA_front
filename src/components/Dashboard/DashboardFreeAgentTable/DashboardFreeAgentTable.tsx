import DashboardPlayerUser from "../DashboardPlayerUser/DashboardPlayerUser";
import "./DashboardFreeAgentTable.scss";

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

const DashboardFreeAgentTable = ({ user }: any): JSX.Element => {
  return (
    <>
      <div className="dashboard__team">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>NOMBRE</th>
              <th>APELLIDOS</th>
              <th>EMAIL</th>
              <th>ROL</th>
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
    </>
  );
};

export default DashboardFreeAgentTable;
