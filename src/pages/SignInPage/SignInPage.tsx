import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./SignInPage.scss";
import React, { ChangeEvent, useState } from "react";

const SignInPage = (): JSX.Element => {
  const API_URL_SIGNIN = `${process.env.REACT_APP_API_URL as string}/user`;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");

  const handleRegister = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      const response = fetch(API_URL_SIGNIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          lastname,
        }),
      });
      const data = (await response).json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
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
            <input
              className="login-page__form-input"
              type="text"
              id="email"
              placeholder="Introduce tu email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />

            <label className="sign-in-page__form-label" htmlFor="password">
              Password
            </label>
            <input
              className="login-page__form-input"
              type="password"
              id="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />

            <label className="sign-in-page__form-label" htmlFor="name">
              Nombre
            </label>
            <input
              className="login-page__form-input"
              type="text"
              id="name"
              placeholder="Introduce tu nombre"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />

            <label className="sign-in-page__form-label" htmlFor="lastname">
              Apellidos
            </label>
            <input
              className="login-page__form-input"
              type="text"
              id="lastname"
              placeholder="Introduce tus apellidos"
              value={lastname}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setLastname(e.target.value);
              }}
            />

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
