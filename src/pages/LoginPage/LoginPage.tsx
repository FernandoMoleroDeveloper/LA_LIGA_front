// import { useContext, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./LoginPage.scss";
import { AuthContext } from "../../App";
import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";

const API_URL_LOGIN = `${process.env.REACT_APP_API_URL as string}/user/login`;

interface LogInInfo {
  email: string;
  password: string;
}

const LoginPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent): void => {
    //
    event.preventDefault();

    const loginInfo: LogInInfo = {
      email: emailRef?.current?.value as string,
      password: passwordRef?.current?.value as string,
    };

    if (!loginInfo.email || !loginInfo.password) {
      alert("Email y la contraseña son obligatorios!");
    } else {
      doLoginRequest(loginInfo);
    }
  };

  const doLoginRequest = (loginInfo: LogInInfo): void => {
    fetch(API_URL_LOGIN, {
      method: "POST",
      body: JSON.stringify(loginInfo),
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
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="login-page page">
      <Header></Header>
      <div className="login-page__container">
        <div className="login-page__box">
          <h2 className="login-page__box-title">BIENVENIDO</h2>
          <h3 className="login-page__box-subtitle">LOGIN</h3>
          <p className="login-page__box-message">Introduce tus credenciales para acceder:</p>
          <form onSubmit={submitForm} className="login-page__form">
            <label className="login-page__form-label" htmlFor="email">
              Email
            </label>
            <input ref={emailRef} className="login-page__form-input" type="text" id="email" placeholder="Introduce tu email" />

            <label className="login-page__form-label" htmlFor="password">
              Password
            </label>
            <input ref={passwordRef} className="login-page__form-input" type="text" id="password" placeholder="Introduce tu password" />

            <button className="login-page__form-submit" type="submit" title="LogIn">
              ACCEDER
            </button>
            <NavLink className="login-page__form-signin" to="/sign-in">
              <button className="login-page__form-signin">REGISTRARSE</button>
            </NavLink>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default LoginPage;
