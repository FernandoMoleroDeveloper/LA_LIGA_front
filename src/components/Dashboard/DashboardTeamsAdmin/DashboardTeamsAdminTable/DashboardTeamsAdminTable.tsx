import DashboardAdminCreateTeam from "../../DashboardAdminCreateTeam/DashboardAdminCreateTeam";
import DashboardTeamsAdminRow from "../DashboardTeamsAdminRow/DashboardTeamsAdminRow";
import "./DashboardTeamsAdminTable.scss";
// import React, { useContext } from "react";

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

const DashboardTeamsTable = ({ teamsAdmin }: any): JSX.Element => {
  return (
    <>
      <div className="dashboard__team">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard__team-title">EQUIPOS</div>
              </th>
              <th>NOMBRE</th>
              <th>ALIAS</th>
              <th>DELEGADO</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="dashboard__team-spacer-x2"></tr>
            {teamsAdmin.map((team: any) => {
              console.log(team);
              return <DashboardTeamsAdminRow key={team?._id} team={team?.team} manager={team?.manager}></DashboardTeamsAdminRow>;
            })}
            <tr className="dashboard__team-spacer"></tr>
          </tbody>
        </table>
      </div>
      <p>AÑADIR EQUIPO</p>
      <div>
        <DashboardAdminCreateTeam></DashboardAdminCreateTeam>
      </div>
    </>
  );
};

export default DashboardTeamsTable;
