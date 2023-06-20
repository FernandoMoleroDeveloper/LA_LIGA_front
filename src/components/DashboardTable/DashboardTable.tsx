import { AuthContext } from "../../App";
import { ROL, UserResponse } from "../../models/User";
import DashboardPlayerUser from "../Dashboard/DashboardPlayerUser/DashboardPlayerUser";
import "./DashboardTable.scss";
import React, { useContext } from "react";

// export interface MockUserInterface {
//   name: string;
//   surname: string;
//   email: string;
//   role: string;
// }

const mockUser: UserResponse = {
  _id: "xxx",
  firstName: "Nombre",
  lastName: "Apellidos",
  email: "email@email.com",
  rol: ROL.PLAYER,
};

const DashboardPlayerTable = (): JSX.Element => {
  const authInfo = useContext(AuthContext);

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
              {
                authInfo?.userRol === ROL.MANAGER ? (
                  <th>ELIMINAR</th>
                ) : null
              }
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
