import "./MyTeam.scss";
import { FullUser } from "../../../models/User";

const MyTeam = ({ user }: FullUser): JSX.Element => {
  return (
    <>
      <p className="dashboard__profile"></p>
      <img className="dashboard__profile-picture" src={user?.team?.image} alt="team-image"/>
      <p className="dashboard__profile-role">{user?.team?.name}</p>
      <a className="dashboard__profile-edit" href="#">
        Editar equipo
      </a>
    </>
  );
};

export default MyTeam;
