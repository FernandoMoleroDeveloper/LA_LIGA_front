import React, { useContext, useState, useRef, useEffect } from "react";
import "./DashboardAdminUsersRow.scss";
import { ROL } from "../../../../models/User";
import { AuthContext } from "../../../../App";

const DashboardAdminUsersRow = ({ user, getUsersAdminList }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const API_URL_DELETE_USER = `${process.env.REACT_APP_API_URL as string}/user/${user?._id as string}`;
  const [toggleEdit, setToggleEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const editUser = (): void => {
    setToggleEdit(!toggleEdit);
    console.log("Editando...");
  };

  useEffect(() => {
    if (toggleEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [toggleEdit]);

  const deleteUser = (): void => {
    fetch(API_URL_DELETE_USER, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la respuesta al eliminar el usuario.");
        }
        return await response.json();
      })
      .then(async () => {
        await getUsersAdminList();
      })
      .catch((error) => {
        alert("Ha ocurrido un error en el código al eliminar el usuario.");
        console.error(error);
      });
  };

  return (
    <>
      <tr className="dashboard__team-row">
        <td>
          <img className="dashboard__team-thumbnail" src={user?.image} alt="profile-picture" />
        </td>
        <td>
          <input ref={inputRef} className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} value={user?.firstName} readOnly={!toggleEdit} type="text" />
        </td>
        <td>
          <input className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} value={user?.lastName} readOnly={true} type="text" />
        </td>
        <td>
          <input className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} value={user?.email} readOnly={true} type="text" />
        </td>
        <td>
          <input className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} value={user?.team?.name} readOnly={true} type="text" />
          {}
        </td>
        <td>
          <input className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} value={user?.rol} readOnly={true} type="text" />
        </td>
        {!toggleEdit && authInfo?.userRol === ROL.ADMIN && (
          <td className="dashboard__team-delete-player-row">
            <button className="dashboard__team-delete-player" onClick={editUser}>
              EDITAR
            </button>
          </td>
        )}

        {!toggleEdit && authInfo?.userRol === ROL.ADMIN && (
          <td className="dashboard__team-delete-player-row">
            <button onClick={deleteUser} className="dashboard__team-delete-player">
              ELIMINAR
            </button>
          </td>
        )}

        {toggleEdit && (
          <>
            <td></td>
            <td className="dashboard__team-delete-player-row">
              <span>GUARDAR</span>
            </td>
          </>
        )}
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardAdminUsersRow;
