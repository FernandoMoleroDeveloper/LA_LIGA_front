import React, { useContext } from "react";
import "./DashboardAdminUsersRow.scss";
import { ROL } from "../../../../models/User";
import { AuthContext } from "../../../../App";

const DashboardAdminUsersRow = ({ user }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  return (
    <>
      <tr className="dashboard__team-row">
        <td>
          <img className="dashboard__team-thumbnail" src={user?.image} alt="profile-picture" />
        </td>
        <td>{user?.firstName}</td>
        <td>{user?.lastName}</td>
        <td>{user?.email}</td>
        <td>{user?.team?.name}</td>
        <td>{user?.rol}</td>
        {authInfo?.userRol === ROL.ADMIN ? (
          <td className="dashboard__team-delete-player-row">
            <button className="dashboard__team-delete-player">EDITAR</button>
          </td>
        ) : null}
        {authInfo?.userRol === ROL.ADMIN ? (
          <td className="dashboard__team-delete-player-row">
            <button className="dashboard__team-delete-player">ELIMINAR</button>
          </td>
        ) : null}
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardAdminUsersRow;
