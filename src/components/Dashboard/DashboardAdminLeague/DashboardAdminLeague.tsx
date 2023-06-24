import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../App";
import DashboardCalendarTable from "./DashboardCalendarTable/DashboardCalendarTable";
import { GoalsMatch, MatchResponse } from "../../../models/Match";

const API_URL_GENERATE_LEAGUE = `${process.env.REACT_APP_API_URL as string}/match/generate-league`;
const API_URL_ALLMATCHS = `${process.env.REACT_APP_API_URL as string}/match/matchall`;
const API_URL_UPDATEMATCHS = `${process.env.REACT_APP_API_URL as string}/match`;

const DashboardAdminLeague = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const [leagues, setLeagues] = useState<MatchResponse[]>([]);
  const [inputDate, setInputDate] = useState<string>("")

  useEffect(() => {
    fetchmMatchs();
  }, []);

  const fetchmMatchs = (): void => {
    fetch(API_URL_ALLMATCHS)
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setLeagues(responseParsed.data);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición");
        console.error(error);
      });
  };

  const fetchUpdateMatchs = (values: GoalsMatch): void => {
    fetch(`${API_URL_UPDATEMATCHS}/${values.id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
      body: JSON.stringify({
        goalsLocal: values.goalsLocal,
        goalsVisitor: values.goalsVisitor,
        played: values.played,
      }),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        console.log(responseParsed, "UPDATED");
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición");
        console.error(error);
      });
  };

  const generateLeague = (): void => {
    fetch(API_URL_GENERATE_LEAGUE, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authInfo?.userToken as string}`,
      },
      body: JSON.stringify({ startDate: inputDate || "01/08/2023" }),
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
      {leagues?.length > 0 && (
        <DashboardCalendarTable
          matchesOnMyTeam={leagues}
          updatedGoalsMatch={(values) => {
            fetchUpdateMatchs(values);
          }}
        />
      )}
      {leagues?.length > 0 && (
        <input
          type="text"
          value={inputDate}
          min="1/1/2023"
          max="31/12/2023"
          placeholder="dd/mm/yyyy"
          onChange={(event) => {
            setInputDate(event.target.value)
          }}
        />
      )}
      <button onClick={generateLeague}>{leagues?.length > 0 ? "REINICIAR LIGA" : "GENERAR LIGA"}</button>
    </>
  );
};

export default DashboardAdminLeague;
