import { AuthContext } from "../../../../App";
import { ROL } from "../../../../models/User";
import DashboardUserRow from "../DashboardUserRow/DashboardUserRow";
import "./DashboardUsersTable.scss";
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

const DashboardUsersTable = ({ playersOnMyTeam, myTeam }: any): JSX.Element => {
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
              {authInfo?.userRol === ROL.MANAGER ? <th className="dashboard__team-delete-player-head">SACAR DEL EQUIPO</th> : null}
            </tr>
          </thead>
          <tbody>
            <tr className="dashboard__team-spacer-x2"></tr>
            {
              playersOnMyTeam.map((user: any) => {
                console.log(user);
                return <DashboardUserRow key={user?._id} user={user}></DashboardUserRow>;
              })
            }
            <tr className="dashboard__team-spacer"></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardUsersTable;
