import { useContext } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import loginAvatar from "../../assets/login-avatar.svg";
import { AuthContext } from "../../App";

const Header = ({ roleColor }: any): JSX.Element => {
  const authInfo = useContext(AuthContext);

  return (
    <header className={roleColor || "header"}>
      <NavLink to="/" className="header__home">
        FOOTBALL MANAGER
      </NavLink>

      <div className="header__user-info">
        {authInfo.userToken ? (
          <>
            <NavLink to="/dashboard">
              <span className="header__dashboard">MI PERFIL</span>
            </NavLink>
            <NavLink className="header__logout" to="/">
              <button className="header__dashboard" onClick={authInfo.logOut}>LOGOUT</button>
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className="header__login">
            LOGIN / REGISTRO
            <img className="header__avatar" src={loginAvatar} alt="Login avatar" />
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
