import React, { useContext } from "react";
import "./DashboardUserRow.scss";
import { ROL } from "../../../../models/User";
import { AuthContext } from "../../../../App";

const DashboardUserRow = ({ user, getMyTeamPlayerList, getFreeAgentList }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const API_URL_REMOVE_PLAYER_FROM_TEAM = `${process.env.REACT_APP_API_URL as string}/user/${user?._id as string}`;

  const removeFromMyTeam = (user: any): any => {
    const userToUpdate: any = { team: undefined };

    fetch(API_URL_REMOVE_PLAYER_FROM_TEAM, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
      body: JSON.stringify(userToUpdate),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la respuesta al actualizar el usuario.");
        }
        return await response.json();
      })
      .then(() => {
        getMyTeamPlayerList();
        getFreeAgentList();
      })
      .catch((error) => {
        alert("Ha ocurrido un error en el codigo al actualizar el usuario.");
        console.error(error);
      });
  };

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
        {authInfo?.userRol === ROL.MANAGER ? <td className="dashboard__team-delete-player-row"><button onClick={() => removeFromMyTeam(user?._id)} className="dashboard__team-delete-player">ELIMINAR</button></td> : null}
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardUserRow;
