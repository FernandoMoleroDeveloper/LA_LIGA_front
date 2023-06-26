import { useContext, useRef } from "react";
import DashboardAdminPlayersTable from "../../DashboardAdminPlayers/DashboardAdminPlayersTable/DashboardAdminPlayersTable";
import DashboardTeamsAdminRow from "../DashboardTeamsAdminRow/DashboardTeamsAdminRow";
import "./DashboardTeamsAdminTable.scss";
import { AuthContext } from "../../../../App";
import { ROL } from "../../../../models/User";

interface DashboardTeamsTableProps {
  teamsAdmin: any;
  setShowPlayerTeam: React.Dispatch<React.SetStateAction<boolean>>;
  showPlayerTeam: boolean;
}

const API_URL_NEW_TEAM = `${process.env.REACT_APP_API_URL as string}/team`;

interface NewTeamInfo {
  name: string;
  initials: string;
}

const DashboardTeamsTable = ({ teamsAdmin, setShowPlayerTeam, showPlayerTeam }: DashboardTeamsTableProps): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const nameRef = useRef<HTMLInputElement>(null);
  const initialsRef = useRef<HTMLInputElement>(null);

  const handleMostrarJugadores = (idEquipo: string): void => {
    setShowPlayerTeam(true);
  };

  const submitForm = (event: React.FormEvent): void => {
    //
    event.preventDefault();

    const newTeamInfo: NewTeamInfo = {
      name: nameRef?.current?.value as string,
      initials: initialsRef?.current?.value as string,
    };

    if (!newTeamInfo.name || !newTeamInfo.initials) {
      alert("Nombre y initials son obligatorios!");
    } else {
      doLoginRequest(newTeamInfo);
    }
  };

  const doLoginRequest = (newTeamInfo: NewTeamInfo): void => {
    fetch(API_URL_NEW_TEAM, {
      method: "POST",
      body: JSON.stringify(newTeamInfo),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 201) {
          alert("Login incorrecto");
        }
        return await response.json();
      })
      .then((data) => {
        alert("Equipo creado correctamente");
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
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
      <div className="admin-create-team__team">
        {authInfo?.userRol === ROL.ADMIN ? (
          <form onSubmit={submitForm} className="admin-create-team____new-player">
            <input ref={nameRef} className="admin-create-team__input" type="text" id="name" placeholder="Introduce nombre..." />
            <input ref={initialsRef} className="admin-create-team__input" type="text" id="initials" placeholder="Introduce Alias..." />
            <button className="admin-create-team__form-submit" type="submit" title="LogIn">
              AÑADIR
            </button>
          </form>
        ) : null}
      </div>
      {showPlayerTeam && (
        <div>
          {teamsAdmin.map((team: any) => {
            return <DashboardAdminPlayersTable key={team?.team?._id} team={team?.team}></DashboardAdminPlayersTable>;
          })}
        </div>
      )}
    </>
  );
};

export default DashboardTeamsTable;
