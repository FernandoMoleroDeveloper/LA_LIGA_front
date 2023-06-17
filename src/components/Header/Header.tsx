// import { useContext } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import loginAvatar from "../../assets/login-avatar.svg";
// import { AuthContext } from "../../App";

const Header = (): JSX.Element => {
  // const authInfo = useContext(AuthContext);

  return (
    <header className="header">
      <NavLink to="/" className="header__home">
        FOOTBALL MANAGER
      </NavLink>

      <div className="header__user-info">
        <span className="header__dashboard">MI PERFIL</span>
        <span className="header__logout">LOGOUT</span>

        <NavLink to="/login" className="header__login">
          LOGIN / REGISTRO
          <img className="header__avatar" src={loginAvatar} alt="Login avatar" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
