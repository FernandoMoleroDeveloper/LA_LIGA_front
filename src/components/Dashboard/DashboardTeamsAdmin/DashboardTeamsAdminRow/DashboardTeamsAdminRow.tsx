import { useContext } from "react";
import { AuthContext } from "../../../../App";
import { ROL } from "../../../../models/User";
import "./DashboardTeamsAdminRow.scss";

const DashboardTeamsAdminRow = ({ data, user }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  return (
    <>
      <tr className="dashboard__team-row">
        <td>
          <img className="dashboard__team-thumbnail" src={data?.image} alt="profile-picture" />
        </td>
        <td>{data?.name}</td>
        <td>{data?.initials}</td>
        {authInfo?.userRol === ROL.ADMIN ? <td className="dashboard__team-delete-player">ELIMINAR</td> : null}
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardTeamsAdminRow;
