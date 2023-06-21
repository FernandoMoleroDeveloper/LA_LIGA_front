import "./DashboardTeamsAdminRow.scss";

const DashboardTeamsAdminRow = ({ user }: any): JSX.Element => {
  return (
    <>
      <tr className="dashboard__team-row">
        <td>
          <img className="dashboard__team-thumbnail" src={user.image} alt="profile-picture" />
        </td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.rol}</td>
      </tr>
      <tr className="dashboard__team-spacer"></tr>
    </>
  );
};

export default DashboardTeamsAdminRow;
