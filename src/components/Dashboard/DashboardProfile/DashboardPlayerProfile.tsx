import "./DashboardPlayerProfile.scss";

const DashboardPlayerProfile = ({ user }: any): JSX.Element => {
  return (
    <>
      <div className="dashboard-player__profile"></div>
      <img className="dashboard-player__profile-picture" src="https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_400_400/0/1686850028795?e=1692835200&v=beta&t=I9VcCsPSaALNxw1wptANQbMgCvYMmGJVQdiTu25Fhck" alt="profile-picture" />
      <div className="dashboard-player__profile-name">Bill Gates</div>
      <div className="dashboard-player__profile-role">Jugador</div>
      <a className="dashboard-player__profile-edit" href="#">
        Editar perfil
      </a>
    </>
  );
};

export default DashboardPlayerProfile;
