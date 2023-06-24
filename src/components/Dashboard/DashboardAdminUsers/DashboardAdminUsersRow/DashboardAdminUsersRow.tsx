import React, { useContext, useState, useRef, useEffect } from "react";
import "./DashboardAdminUsersRow.scss";
import { ROL, UserUpdate } from "../../../../models/User";
import { AuthContext } from "../../../../App";

const DashboardAdminUsersRow = ({ user, getUsersAdminList, teamsAdmin, fetchTeamsAdmin }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const API_URL_USER_ACTIONS = `${process.env.REACT_APP_API_URL as string}/user/${user?._id as string}`;
  const [toggleEdit, setToggleEdit] = useState(false);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const rolRef = useRef<HTMLInputElement>(null);
  const teamRef = useRef<HTMLInputElement>(null);

  const editUser = (): void => {
    setToggleEdit(!toggleEdit);
  };

  const updateUser = (): void => {
    const updatedUser: UserUpdate = {
      firstName: firstNameRef?.current?.value as string,
      lastName: lastNameRef?.current?.value as string,
      email: emailRef?.current?.value as string,
      team: user?.team as string,
      rol: rolRef?.current?.value as ROL,
    };

    fetch(API_URL_USER_ACTIONS, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la respuesta al actualizar el usuario.");
        }
        return await response.json();
      })
      .then(async () => {
        await getUsersAdminList();
        setToggleEdit(!toggleEdit);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en el codigo al actualizar el usuario.");
        console.error(error);
      });

    console.log("Usuario actualizado");
    console.log(updatedUser);
  };

  useEffect(() => {
    if (toggleEdit && firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, [toggleEdit]);

  const deleteUser = (): void => {
    fetch(API_URL_USER_ACTIONS, {
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
          <input ref={firstNameRef} className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} defaultValue={user?.firstName} readOnly={!toggleEdit} type="text" />
        </td>
        <td>
          <input ref={lastNameRef} className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} defaultValue={user?.lastName} readOnly={!toggleEdit} type="text" />{" "}
        </td>
        <td>
          <input ref={emailRef} className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} defaultValue={user?.email} readOnly={!toggleEdit} type="text" />
        </td>
        <td>
          <input ref={teamRef} className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"} defaultValue={user?.team?.name} readOnly={!toggleEdit} type="text" />
        </td>
        <td>
          <select ref={rolRef as any} className={!toggleEdit ? "dashboard-admin__player-data" : "dashboard-admin__player-data-edit"}>
            <option value={ROL.PLAYER}>PLAYER</option>
            <option value={ROL.MANAGER}>MANAGER</option>
          </select>
        </td>
        {!toggleEdit && authInfo?.userRol === ROL.ADMIN && (
          <td className="dashboard__team-delete-player-row">
            <button className="dashboard-admin__player-actions" onClick={editUser}>
              EDITAR
            </button>
          </td>
        )}

        {!toggleEdit && authInfo?.userRol === ROL.ADMIN && (
          <td className="dashboard-admin__team-delete-player-row">
            <button onClick={deleteUser} className="dashboard-admin__player-actions">
              ELIMINAR
            </button>
          </td>
        )}

        {toggleEdit && (
          <>
            <td></td>
            <td>
              <button onClick={updateUser} className="dashboard-admin__player-save">
                GUARDAR
              </button>
            </td>
          </>
        )}
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardAdminUsersRow;
