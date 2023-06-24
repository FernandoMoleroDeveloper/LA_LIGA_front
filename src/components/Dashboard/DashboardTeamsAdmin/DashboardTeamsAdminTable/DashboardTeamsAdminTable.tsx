import { useState } from "react";
import DashboardAdminCreateTeam from "../../DashboardAdminCreateTeam/DashboardAdminCreateTeam";
import DashboardAdminPlayersTable from "../../DashboardAdminPlayers/DashboardAdminPlayersTable/DashboardAdminPlayersTable";
import DashboardTeamsAdminRow from "../DashboardTeamsAdminRow/DashboardTeamsAdminRow";
import "./DashboardTeamsAdminTable.scss";

interface DashboardTeamsTableProps {
  playersAdmin: any;
  teamsAdmin: any;
  setShowPlayerTeam: React.Dispatch<React.SetStateAction<boolean>>;
  showPlayerTeam: boolean;
}

const DashboardTeamsTable = ({ playersAdmin, teamsAdmin, setShowPlayerTeam, showPlayerTeam }: DashboardTeamsTableProps): JSX.Element => {
  const [selectedTeamId, setSelectedTeamId] = useState("");

  const handleMostrarJugadores = (idEquipo: string): void => {
    setSelectedTeamId(idEquipo);
    setShowPlayerTeam(true);
  };
  return (
    <>
      <div className="dashboard__team">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard__team-title">EQUIPOS</div>
              </th>
              <th>NOMBRE</th>
              <th>ALIAS</th>
              <th>DELEGADO</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="dashboard__team-spacer-x2"></tr>
            {teamsAdmin.map((team: any) => {
              console.log("team", team);
              return <DashboardTeamsAdminRow key={team?.team?._id} team={team?.team} manager={team?.manager} showPlayerTeam={showPlayerTeam} setShowPlayerTeam={setShowPlayerTeam} handleMostrarJugadores={handleMostrarJugadores}></DashboardTeamsAdminRow>;
            })}
            <tr className="dashboard__team-spacer"></tr>
          </tbody>
        </table>
      </div>
      <p>AÑADIR EQUIPO</p>
      <div>
        <DashboardAdminCreateTeam></DashboardAdminCreateTeam>
      </div>
      {showPlayerTeam && <DashboardAdminPlayersTable playersAdmin={playersAdmin} teamId={selectedTeamId}></DashboardAdminPlayersTable>}
    </>
  );
};

export default DashboardTeamsTable;
