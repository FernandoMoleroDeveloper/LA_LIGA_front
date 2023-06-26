import { useContext } from "react";
import "./DashboardAdminPlayersRow.scss";
import { AuthContext } from "../../../../App";
import { ROL } from "../../../../models/User";

const DashboardAdminPlayersRow = ({ player }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);

  console.log("eli", player);
  return (
    <>
      <tr className="dashboard__team-row">
        <td>
          <img className="dashboard__team-thumbnail" src={player?.image} alt="profile-picture" />
        </td>
        <td>{player?.firstName}</td>
        <td>{player?.lastName}</td>
        <td>{player?.email}</td>
        <td>{player?.team?.name}</td>
        <td>{player?.rol}</td>
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
export default DashboardAdminPlayersRow;
