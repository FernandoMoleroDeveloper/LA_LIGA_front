import "./DashboardFreeAgentPlayer.scss";

const DashboardFreeAgentPlayer = ({ user }: any): JSX.Element => {
  return (
    <>
      <tr className="dashboard-player__team-row">
        <td>
          <img className="dashboard-player__team-thumbnail" src="https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_400_400/0/1686850028795?e=1692835200&v=beta&t=I9VcCsPSaALNxw1wptANQbMgCvYMmGJVQdiTu25Fhck" alt="profile-picture" />
        </td>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
      </tr>
      <tr className="dashboard-player__team-spacer"></tr>
    </>
  );
};

export default DashboardFreeAgentPlayer;
