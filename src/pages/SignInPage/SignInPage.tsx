import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./SignInPage.scss";

const SignInPage = (): JSX.Element => {
  return (
    <div className="sign-in-page page">
      <Header></Header>
      <div className="sign-in-page__box">
        <h2 className="sign-in-page__box-title">BIENVENIDO</h2>
        <h3 className="sign-in-page__box-subtitle">SIGN IN</h3>
        <p className="login-page__box-message">Introduce tus credenciales para acceder:</p>
        <form className="sign-in-page__form">
          <label className="sign-in-page__form-label" htmlFor="email">
            Email:
          </label>
          <input className="login-page__form-input" type="text" id="email" placeholder="Introduce tu email" />

          <label className="sign-in-page__form-label" htmlFor="password">
            Password
          </label>
          <input className="login-page__form-input" type="text" id="password" placeholder="Introduce tu contraseña" />

          <label className="sign-in-page__form-label" htmlFor="name">
            Nombre
          </label>
          <input className="login-page__form-input" type="text" id="name" placeholder="Introduce tu nombre" />

          <label className="sign-in-page__form-label" htmlFor="lastname">
            Apellidos
          </label>
          <input className="login-page__form-input" type="text" id="lastname" placeholder="Introduce tus apellidos" />

          <button className="sign-in-page__form-submit" type="submit">
            REGISTRARSE
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default SignInPage;
