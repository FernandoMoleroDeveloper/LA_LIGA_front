import { useContext, useState } from "react";
import { AuthContext } from "../../../App";
import DashboardCalendarTable from "./DashboardCalendarTable/DashboardCalendarTable";
import { MatchResponse } from "../../../models/Match";

const API_URL_GENERATE_LEAGUE = `${process.env.REACT_APP_API_URL as string}/match/generate-league`;

const DashboardAdminLeague = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const [leagues, setLeagues] = useState<MatchResponse[]>([]);

  const generateLeague = (): void => {
    fetch(API_URL_GENERATE_LEAGUE, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
      body: JSON.stringify({ startDate: "30/06/23" }),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setLeagues(responseParsed);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición");
        console.error(error);
      });
  };

  return (
    <>
      {leagues?.length > 0 && <DashboardCalendarTable matchesOnMyTeam={leagues} />}
      <button onClick={generateLeague}>{leagues?.length > 0 ? "REINICIAR LIGA" : "GENERAR LIGA"}</button>
    </>
  );
};

export default DashboardAdminLeague;
