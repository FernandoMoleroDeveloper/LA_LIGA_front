import DashboardFreeAgentTable from "../../DashboardFreeAgent/DashboardFreeAgentTable/DashboardFreeAgentTable";
import DashboardAdminPlayersRow from "../DashboardAdminPlayersRow/DashboardAdminPlayersRow";
import "./DashboardAdminPlayersTable.scss";

const DashboardAdminPlayersTable = ({ playersAdmin }: any): JSX.Element => {
  console.log(playersAdmin);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <div className="dashboard-admin__team-title">{}</div>
            </th>
            <th>NOMBRE</th>
            <th>APELLIDOS</th>
            <th>EMAIL</th>
            <th>ROL</th>
            <th>SACAR DEL EQUIPO</th>
          </tr>
        </thead>
        <tbody>
          <tr className="dashboard-admin__team-spacer-x2"></tr>
          {playersAdmin?.map((user: any) => {
            return <DashboardAdminPlayersRow key={user?._id} user={user}></DashboardAdminPlayersRow>;
          })}
          <tr className="dashboard-admin__team-spacer"></tr>
        </tbody>
      </table>
      <DashboardFreeAgentTable></DashboardFreeAgentTable>
    </>
  );
};
export default DashboardAdminPlayersTable;
