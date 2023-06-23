// import { useContext, useRef } from "react";
import "./DashboardAdminCreateTeam.scss";
import { AuthContext } from "../../../App";
import React, { useContext, useRef } from "react";
import { ROL } from "../../../models/User";

const API_URL_NEW_TEAM = `${process.env.REACT_APP_API_URL as string}/team`;

interface NewTeamInfo {
  name: string;
  initials: string;
}

const DashboardAdminCreateTeam = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const nameRef = useRef<HTMLInputElement>(null);
  const initialsRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent): void => {
    //
    event.preventDefault();

    const newTeamInfo: NewTeamInfo = {
      name: nameRef?.current?.value as string,
      initials: initialsRef?.current?.value as string,
    };

    if (!newTeamInfo.name || !newTeamInfo.initials) {
      alert("Nombre y initials son obligatorios!");
    } else {
      doLoginRequest(newTeamInfo);
    }
  };

  const doLoginRequest = (newTeamInfo: NewTeamInfo): void => {
    fetch(API_URL_NEW_TEAM, {
      method: "POST",
      body: JSON.stringify(newTeamInfo),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 201) {
          alert("Login incorrecto");
        }
        return await response.json();
      })
      .then((data) => {
        alert("Equipo creado correctamente");
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="dashboard__team">
      <div className="dashboard-admin__team">
        {authInfo?.userRol === ROL.ADMIN ? (
          <form onSubmit={submitForm} className="dashboard-admin__team-row">
            <input ref={nameRef} className="dashboard-admin__input" type="text" id="name" placeholder="Introduce nombre..." />
            <input ref={initialsRef} className="dashboard-admin__input" type="text" id="initials" placeholder="Introduce Alias..." />
            <button className="dashboard-admin__form-submit" type="submit" title="LogIn">
              AÑADIR
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
};
export default DashboardAdminCreateTeam;
