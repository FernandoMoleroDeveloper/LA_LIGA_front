import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./SignInPage.scss";
import React, { useRef } from "react";

const API_URL_SIGNIN = `${process.env.REACT_APP_API_URL as string}/user`;

interface SignInInfo {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignInPage = (): JSX.Element => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleRegister = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const signinInfo: SignInInfo = {
      email: emailRef?.current?.value as string,
      password: passwordRef?.current?.value as string,
      firstName: firstNameRef?.current?.value as string,
      lastName: lastNameRef?.current?.value as string,
    };

    if (!signinInfo.email || !signinInfo.password || !signinInfo.firstName || !signinInfo.lastName) {
      alert("Todos los campos son obligatorios!");
    } else {
      doSignInRequest(signinInfo);
    }
  };

  const doSignInRequest = (signinInfo: SignInInfo): void => {
    fetch(API_URL_SIGNIN, {
      method: "POST",
      body: JSON.stringify(signinInfo),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Registro correcto");
        }
        return await response.json();
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="sign-in-page page">
      <Header></Header>
      <div className="login-page__container">
        <div className="sign-in-page__box">
          <h2 className="sign-in-page__box-title">BIENVENIDO</h2>
          <h3 className="sign-in-page__box-subtitle">SIGN IN</h3>
          <p className="login-page__box-message">Introduce tus datos para registrarte:</p>
          <form className="sign-in-page__form" onSubmit={handleRegister}>
            <label className="sign-in-page__form-label" htmlFor="email">
              Email:
            </label>
            <input className="login-page__form-input" ref={emailRef} type="text" id="email" placeholder="Introduce tu email" />

            <label className="sign-in-page__form-label" htmlFor="password">
              Password
            </label>
            <input className="login-page__form-input" type="password" id="password" placeholder="Introduce tu contraseña" ref={passwordRef} />

            <label className="sign-in-page__form-label" htmlFor="name">
              Nombre
            </label>
            <input className="login-page__form-input" type="text" id="name" placeholder="Introduce tu nombre" ref={firstNameRef} />

            <label className="sign-in-page__form-label" htmlFor="lastname">
              Apellidos
            </label>
            <input className="login-page__form-input" type="text" id="lastname" placeholder="Introduce tus apellidos" ref={lastNameRef} />

            <button className="sign-in-page__form-submit" type="submit">
              REGISTRARSE
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignInPage;
