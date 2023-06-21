import React, { useContext } from "react";
import "./DashboardUserRow.scss";
import { ROL } from "../../../../models/User";
import { AuthContext } from "../../../../App";

const DashboardUserRow = ({ user }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);

  return (
    <>
      <tr className="dashboard__team-row">
        <td>
          <img className="dashboard__team-thumbnail" src={user.image} alt="profile-picture" />
        </td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.rol}</td>
        {authInfo?.userRol === ROL.MANAGER ? <td className="dashboard__team-delete-player">ELIMINAR</td> : null}
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardUserRow;
