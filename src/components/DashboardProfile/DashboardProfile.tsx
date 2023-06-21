import "./DashboardProfile.scss";
import { FullUser } from "../../models/User";

const DashboarProfile = ({ user }: FullUser): JSX.Element => {
  return (
    <>
      <p className="dashboard__profile"></p>
      <img className="dashboard__profile-picture" src={user?.image} alt="user-image"/>
      <p>
        <span className="dashboard__profile-firstName">{user?.firstName} </span>
        <span className="dashboard__profile-lastName">{user?.lastName}</span>
      </p>
      <p className="dashboard__profile-role">{user?.rol}</p>
      <a className="dashboard__profile-edit" href="#">
        Editar perfil
      </a>
    </>
  );
};

export default DashboarProfile;
