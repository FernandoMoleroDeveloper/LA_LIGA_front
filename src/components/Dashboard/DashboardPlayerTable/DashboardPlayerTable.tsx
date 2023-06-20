import DashboardPlayerUser from "../DashboardPlayerUser/DashboardPlayerUser";
import "./DashboardPlayerTable.scss";

export interface MockUserInterface {
  name: string;
  surname: string;
  email: string;
  role: string;
}

const mockUser: MockUserInterface = {
  name: "Nombre",
  surname: "Apellidos",
  email: "email@email.com",
  role: "Jugador",
};

const DashboardPlayerTable = ({ user }: any): JSX.Element => {
  return (
    <>
      <div className="dashboard-player__team">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard-player__team-title">MI EQUIPO</div>
              </th>
              <th>NOMBRE</th>
              <th>APELLIDOS</th>
              <th>EMAIL</th>
              <th>ROL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="dashboard-player__team-spacer-x2"></tr>
            <DashboardPlayerUser user={mockUser}></DashboardPlayerUser>
            <DashboardPlayerUser user={mockUser}></DashboardPlayerUser>
            <DashboardPlayerUser user={mockUser}></DashboardPlayerUser>
            <DashboardPlayerUser user={mockUser}></DashboardPlayerUser>
            <tr className="dashboard-player__team-spacer"></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardPlayerTable;
