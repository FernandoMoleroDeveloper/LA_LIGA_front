import { AuthContext } from "../../../../App";
import { ROL, UserCreate } from "../../../../models/User";
import DashboardAdminUsersRow from "../DashboardAdminUsersRow/DashboardAdminUsersRow";
import "./DashboardAdminUsersTable.scss";
import React, { useContext, useRef, useEffect } from "react";

const API_URL_NEW_USER = `${process.env.REACT_APP_API_URL as string}/user`;

const DashboardAdminUsersTable = ({ usersAdminList, getUsersAdminList, teamsAdmin, fetchTeamsAdmin }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rolRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getUsersAdminList();
  }, []);

  const submitForm = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const newUser: UserCreate = {
      firstName: firstnameRef?.current?.value as string,
      lastName: lastnameRef?.current?.value as string,
      email: emailRef?.current?.value as string,
      password: passwordRef?.current?.value as string,
      rol: rolRef?.current?.value as any,
      team: undefined,
    };

    if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password || !isEmailValid(emailRef.current?.value as string)) {
      alert("Todos los campos son obligatorios y el email tener un formato correcto.");
    } else {
      console.log(newUser);
      await addNewUser(newUser);
    }
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addNewUser = async (newUser: UserCreate): Promise<void> => {
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
          if (firstnameRef.current && lastnameRef.current && emailRef.current && passwordRef.current) {
            firstnameRef.current.value = "";
            lastnameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
          }
        }
        return await response.json();
      })
      .then(async () => {
        await getUsersAdminList();
      })
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
            {
            usersAdminList?.map((user: any) => {
              return <DashboardAdminUsersRow key={user?._id} user={user} getUsersAdminList={getUsersAdminList} teamsAdmin={teamsAdmin} fetchTeamsAdmin={fetchTeamsAdmin}></DashboardAdminUsersRow>;
            })}
            <tr className="dashboard-admin__team-spacer"></tr>
          </tbody>
        </table>
      </div>
      <p className="dashboard-admin__title">NUEVO USUARIO</p>
      <div className="dashboard-admin__team">
        {authInfo?.userRol === ROL.ADMIN ? (
          <form onSubmit={submitForm} className="dashboard-admin__new-player">
            <input ref={firstnameRef} className="dashboard-admin__input" type="text" placeholder="Introduce nombre..." />
            <input ref={lastnameRef} className="dashboard-admin__input" type="text" placeholder="Introduce apellidos..." />
            <input ref={emailRef} className="dashboard-admin__input" type="email" placeholder="Introduce email..." />
            <input ref={passwordRef} className="dashboard-admin__input" type="password" placeholder="Introduce password..." />
            <select ref={rolRef as any} className="dashboard-admin__role-selection">
              <option value={ROL.PLAYER}>PLAYER</option>
              <option value={ROL.MANAGER}>MANAGER</option>
            </select>
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
