import { AuthContext } from "../../App";
import { ROL } from "../../models/User";
import DashboardPlayerUser from "../Dashboard/DashboardPlayerUser/DashboardPlayerUser";
import "./DashboardTable.scss";
import React, { useContext } from "react";

// export interface MockUserInterface {
//   name: string;
//   surname: string;
//   email: string;
//   role: string;
// }

// const mockUser: UserResponse = {
//   _id: "xxx",
//   firstName: "Nombre",
//   lastName: "Apellidos",
//   email: "email@email.com",
//   rol: ROL.PLAYER,
// };

const DashboardPlayerTable = ({ playersOnMyTeam }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);

  return (
    <>
      <div className="dashboard__team">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard__team-title">MI EQUIPO</div>
              </th>
              <th>NOMBRE</th>
              <th>APELLIDOS</th>
              <th>EMAIL</th>
              <th>ROL</th>
              {authInfo?.userRol === ROL.MANAGER ? <th>ELIMINAR</th> : null}
            </tr>
          </thead>
          <tbody>
            <tr className="dashboard__team-spacer-x2"></tr>
            {
              playersOnMyTeam.map((user: any) => {
                console.log(user);
                return <DashboardPlayerUser key={user?._id} user={user}></DashboardPlayerUser>;
              })
            }
            <tr className="dashboard__team-spacer"></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardPlayerTable;
