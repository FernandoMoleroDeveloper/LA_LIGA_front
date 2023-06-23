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
  password: string;
}

const DashboardAdminUsersTable = ({ userAdmin }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent): void => {
    event.preventDefault();

    const newUser: NewUser = {
      firstName: firstnameRef?.current?.value as string,
      lastName: lastnameRef?.current?.value as string,
      email: emailRef?.current?.value as string,
      password: passwordRef?.current?.value as string,
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
        if (response.status !== 201) {
          alert("Registro incorrecto");
        } else {
          alert("Registro correcto");
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
      <div className="dashboard-admin__team">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard-admin__team-title">USUARIOS</div>
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
            <tr className="dashboard-admin__team-spacer-x2"></tr>
            {userAdmin?.map((user: any) => {
              return <DashboardAdminUsersRow key={user?._id} user={user}></DashboardAdminUsersRow>;
            })}
            <tr className="dashboard-admin__team-spacer"></tr>
          </tbody>
        </table>
      </div>
      <p className="dashboard-admin__title">NUEVO USUARIO</p>
      <div className="dashboard-admin__team">
        {authInfo?.userRol === ROL.ADMIN ? (
          <form onSubmit={submitForm} className="dashboard-admin__row">
            <input ref={firstnameRef} className="dashboard-admin__input" type="text" placeholder="Introduce nombre..." />
            <input ref={lastnameRef} className="dashboard-admin__input" type="text" placeholder="Introduce apellidos..." />
            <input ref={emailRef} className="dashboard-admin__input" type="text" placeholder="Introduce email..." />
            <input ref={passwordRef} className="dashboard-admin__input" type="text" placeholder="Introduce password..." />
            <button className="dashboard-admin__form-submit" type="submit" title="LogIn">
              AÑADIR
            </button>
          </form>
        ) : null}
      </div>
    </>
  );
};

export default DashboardAdminUsersTable;
