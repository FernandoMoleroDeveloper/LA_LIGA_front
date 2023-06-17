// import { useContext, useRef } from "react";
import Header from "../../components/Header/Header";
import "./LoginPage.scss";

const LoginPage = (): JSX.Element => {
  //  const API_URL_LOGIN = `${process.env.REACT_APP_API_URL as string}/user/login`;
  //  const authInfo = useContext(AuthContext);
  //  const emailRef = useRef<HTMLInputElement>(null);
  //  const passwordRef = useRef<HTMLInputElement>(null);
  //
  //  const submitForm = (event: React.FormEvent): void => {//
  //  event.preventDefault();
  //
  //  const loginInfo: LoginInfo = {
  //    email: emailRef?.current?.value as string,
  //    password: passwordRef?.current?.value as string,
  //  };

  //  if (!loginInfo.email || !loginInfo.password) {
  //    alert("Email y la contraseña son obligatorios!");
  //  } else {
  //    doLoginRequest(loginInfo);
  //  }
  //  };
  //
  //  const doLoginRequest = (loginInfo: LoginInfo): void => {
  //    fetch(API_URL_LOGIN, {
  //      method: "POST",
  //      body: JSON.stringify(loginInfo),
  //      headers: { "Content-type": "application/json; charset=UTF-8" },
  //    })
  //      .then(async (response) => {
  //  if (response.status !== 200) {
  //    alert("Login incorrecto");
  //  }
  //  return await response.json();
  //      })
  //      .then((data) => {
  // Login OK -> Guardamos las credenciales
  //  if (data.token && data.user && authInfo.login) {
  //    authInfo.login(data.token, data.user);
  //  }
  //      })
  //      .catch((error) => {
  //  console.error(error);
  //  alert("Ha ocurrido un error en la petición");
  //      });
  //  };

  return (
    <div className="login-page page">
      <Header></Header>
      <div className="login-page__box">
        <h2 className="login-page__box-title">Bienvenido</h2>
        <h3 className="login-page__box-subtitle">LOGIN</h3>
        <p className="login-page__box-message">Introduce tus credenciales para acceder:</p>
        <form className="login-page__box-form">
          <label htmlFor="email">Email</label>
          <input className="login-page__form-input" type="text" id="email" placeholder="Introduce tu email" />

          <label htmlFor="password">Password</label>
          <input className="login-page__form-input" type="text" id="password" placeholder="Introduce tu password" />
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
