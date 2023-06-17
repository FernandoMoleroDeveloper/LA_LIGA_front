import Header from "../../components/Header/Header";
import "./SignInPage.scss";

const SignInPage = (): JSX.Element => {
  return (
    <div className="sign-in-page page">
      <Header></Header>

      <form className="sign-in-page__form">
        <h2 className="sign-in-page__form-title">Bienvenido</h2>
        <h3 className="sign-in-page__form-subtitle">SIGN IN</h3>
        <p>Introduce tus credenciales para acceder:</p>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" placeholder="Introduce tu email" />

        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="Introduce tu contraseña" />

        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" placeholder="Introduce tu nombre" />

        <label htmlFor="lastname">Nombre</label>
        <input type="text" id="lastname" placeholder="Introduce tu apellido" />

        <input type="submit" title="Log in" />
      </form>
    </div>
  );
};
export default SignInPage;
