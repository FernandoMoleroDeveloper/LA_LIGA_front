import { useContext, useEffect, useState } from "react";
import DashboardFreeAgentTable from "../../DashboardFreeAgent/DashboardFreeAgentTable/DashboardFreeAgentTable";
import DashboardAdminPlayersRow from "../DashboardAdminPlayersRow/DashboardAdminPlayersRow";
import "./DashboardAdminPlayersTable.scss";
import { AuthContext } from "../../../../App";
import { UserResponse } from "../../../../models/User";

const DashboardAdminPlayersTable = ({ team }: any): JSX.Element => {
  const API_URL_ALL_PLAYERS = `${process.env.REACT_APP_API_URL as string}/by-team/${team?._id as string}`;
  console.log("vamos a ver", team);
  const authInfo = useContext(AuthContext);
  const [playersAdminList, setPlayersAdminList] = useState<UserResponse[]>([]);

  useEffect(() => {
    getPlayersAdminTeam();
  }, []);

  const getPlayersAdminTeam = (): void => {
    fetch(API_URL_ALL_PLAYERS, {
      headers: {
        Authorization: `Bearer ${authInfo?.userToken as string}`,
      },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición al servidor.");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setPlayersAdminList(responseParsed.data);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición");

        console.error(error);
      });
  };
  console.log(setPlayersAdminList);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <div className="dashboard-admin__team-title">{team?.name}</div>
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
          {playersAdminList?.map((player: any) => {
            return <DashboardAdminPlayersRow key={player?._id} player={player}></DashboardAdminPlayersRow>;
          })}
          <tr className="dashboard-admin__team-spacer"></tr>
        </tbody>
      </table>
      <DashboardFreeAgentTable></DashboardFreeAgentTable>
    </>
  );
};
export default DashboardAdminPlayersTable;
