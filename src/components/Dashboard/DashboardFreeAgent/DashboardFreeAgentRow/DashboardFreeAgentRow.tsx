import { AuthContext } from "../../../../App";
import "./DashboardFreeAgentRow.scss";
import { useContext } from "react";

const DashboardFreeAgentRow = ({ user, myTeam }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const API_URL_PUT_PLAYER_INTO_TEAM = `${process.env.REACT_APP_API_URL as string}/user/${user?._id as string}`;

  const addToMyTeam = (user: any): any => {
    const userToUpdate: any = { team: myTeam };

    fetch(API_URL_PUT_PLAYER_INTO_TEAM, {
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
      .catch((error) => {
        alert("Ha ocurrido un error en el codigo al actualizar el usuario.");
        console.error(error);
      });
  };

  return (
    <>
      <tr className="dashboard__free-agent-row">
        <td>
          <img className="dashboard__free-agent-thumbnail" src={user?.image} alt="profile-picture" />
        </td>
        <td>{user?.firstName}</td>
        <td>{user?.lastName}</td>
        <td>{user?.email}</td>
        <td>{user?.rol}</td>
        <td className="dashboard__free-agent-add-player-row">
          <button className="dashboard__free-agent-add-player" onClick={() => addToMyTeam(user?._id)}>
            AÑADIR
          </button>
        </td>
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardFreeAgentRow;
