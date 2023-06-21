import { useContext } from "react";
import { AuthContext } from "../../../../App";
import { ROL } from "../../../../models/User";
import "./DashboardTeamsAdminRow.scss";

const DashboardTeamsAdminRow = ({ team }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  console.log(team);
  return (
    <>
      <tr className="dashboard__team-row">
        <td>
          <img className="dashboard__team-thumbnail" src={team?.image} alt="profile-picture" />
        </td>
        <td>{team?.name}</td>
        <td>{team?.initials}</td>
        <td>{team?.manager}</td>
        {authInfo?.userRol === ROL.ADMIN ? <td className="dashboard-team__edit-team">JUGADORES</td> : null}
        {authInfo?.userRol === ROL.ADMIN ? <td className="dashboard-team__edit-team">EDITAR</td> : null}
        {authInfo?.userRol === ROL.ADMIN ? <td className="dashboard-team__delete-team">ELIMINAR</td> : null}
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardTeamsAdminRow;
