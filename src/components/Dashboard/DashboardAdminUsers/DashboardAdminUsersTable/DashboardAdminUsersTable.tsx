import { AuthContext } from "../../../../App";
import { ROL } from "../../../../models/User";
import DashboardAdminUsersRow from "../DashboardAdminUsersRow/DashboardAdminUsersRow";
import "./DashboardAdminUsersTable.scss";
import React, { useContext, useRef } from "react";

const API_URL_NEW_USER = `${process.env.REACT_APP_API_URL as string}/user`;

interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
}

const DashboardAdminUsersTable = ({ userAdmin }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent): void => {
    //
    event.preventDefault();

    const newUser: NewUser = {
      firstName: firstnameRef?.current?.value as string,
      lastName: lastnameRef?.current?.value as string,
      email: emailRef?.current?.value as string,
    };

    if (!newUser.firstName || !newUser.lastName || !newUser.email) {
      alert("Todos los campos son obligatorios!");
    } else {
      doLoginRequest(newUser);
    }
  };

  const doLoginRequest = (newUser: NewUser): void => {
    fetch(API_URL_NEW_USER, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Login incorrecto");
        }
        return await response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };
  return (
    <>
      <div className="dashboard__team">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard__team-title">USUARIOS</div>
              </th>
              <th>NOMBRE</th>
              <th>APELLIDOS</th>
              <th>EMAIL</th>
              <th>EQUIPO</th>
              <th>ROL</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="dashboard__team-spacer-x2"></tr>
            {userAdmin?.map((user: any) => {
              console.log("pepe", user);
              return <DashboardAdminUsersRow key={user?._id} user={user}></DashboardAdminUsersRow>;
            })}
            <tr className="dashboard__team-spacer"></tr>
          </tbody>
        </table>
      </div>
      <p>AÑADIR JUGADORES</p>
      <div className="dashboard__team">
        <table>
          <tbody>
            {authInfo?.userRol === ROL.ADMIN ? (
              <tr className="dashboard__team-delete-player-head">
                <form onSubmit={submitForm} className="admin-create-team__form">
                  <label className="admin-create-team__form-label" htmlFor="firstname"></label>
                  <input ref={firstnameRef} className="admin-create-team__form-input" type="text" id="firstname" placeholder="Introduce nombre..." />
                  <label className="admin-create-team__form-label" htmlFor="lastname"></label>
                  <input ref={lastnameRef} className="admin-create-team__form-input" type="text" id="lastname" placeholder="Introduce apellidos..." />
                  <label className="admin-create-team__form-label" htmlFor="lastname"></label>
                  <input ref={emailRef} className="admin-create-team__form-input" type="text" id="lastname" placeholder="Introduce email..." />
                  <button className="admin-create-team__form-submit" type="submit" title="LogIn">
                    AÑADIR
                  </button>
                </form>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardAdminUsersTable;
