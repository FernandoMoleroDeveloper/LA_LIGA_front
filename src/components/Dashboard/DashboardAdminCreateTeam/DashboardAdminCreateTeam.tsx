// import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardAdminCreateTeam.scss";
import { AuthContext } from "../../../App";
import React, { useContext, useRef } from "react";

const API_URL_NEW_TEAM = `${process.env.REACT_APP_API_URL as string}/team`;

interface NewTeamInfo {
  name: string;
  alias: string;
}

const DashboardAdminCreateTeam = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const nameRef = useRef<HTMLInputElement>(null);
  const aliasRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate(); // Obtener la función navigate

  const submitForm = (event: React.FormEvent): void => {
    //
    event.preventDefault();

    const newTeamInfo: NewTeamInfo = {
      name: nameRef?.current?.value as string,
      alias: aliasRef?.current?.value as string,
    };

    if (!newTeamInfo.name || !newTeamInfo.alias) {
      alert("Email y la contraseña son obligatorios!");
    } else {
      doLoginRequest(newTeamInfo);
    }
  };

  const doLoginRequest = (newTeamInfo: NewTeamInfo): void => {
    fetch(API_URL_NEW_TEAM, {
      method: "POST",
      body: JSON.stringify(newTeamInfo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Login incorrecto");
        }
        return await response.json();
      })
      .then((data) => {
        // Login OK -> Guardamos las credenciales
        if (data.token && data.rol && authInfo.logIn) {
          authInfo.logIn(data.token, data.rol);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="admin-create-team__container">
      <div className="admin-create-team__box">
        <form onSubmit={submitForm} className="admin-create-team__form">
          <label className="admin-create-team__form-label" htmlFor="name"></label>
          <input ref={nameRef} className="admin-create-team__form-input" type="text" id="name" placeholder="Introduce nombre..." />
          <label className="admin-create-team__form-label" htmlFor="alias"></label>
          <input ref={aliasRef} className="admin-create-team__form-input" type="text" id="alias" placeholder="Introduce alias..." />
          <button className="admin-create-team__form-submit" type="submit" title="LogIn">
            AÑADIR
          </button>
        </form>
      </div>
    </div>
  );
};
export default DashboardAdminCreateTeam;
