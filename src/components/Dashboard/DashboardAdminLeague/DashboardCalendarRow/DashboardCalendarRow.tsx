import { useRef, useState } from "react";
import { GoalsMatch, MatchResponse } from "../../../../models/Match";

interface DashboardCalendarRowProps {
  match: MatchResponse;
  onGoalsMatch: (goalsMatch: GoalsMatch) => void;
}

const DashboardCalendarRow = ({ match, onGoalsMatch }: DashboardCalendarRowProps): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const goalsLocal = match.goalsLocal ? match.goalsLocal.length : "0";
  const goalsVisitor = match.goalsVisitor ? match.goalsVisitor.length : "0";
  const [inputValue, setInputValue] = useState<string>(match.played ? `${goalsLocal} - ${goalsVisitor}` : "No disputado");
  const inputRef = useRef(null);

  return (
    <>
      <tr>
        <td className="dashboard__matches-row">
          <div className="dashboard__matches-details">
            <div className="dashboard__matches-round"></div>
            <div className="dashboard__matches-teams">
              <span className="dashboard__matches-name">{match.localTeam.initials}</span>
              <img className="dashboard__matches-logo" src={match.localTeam.image} alt="Team logo" />
              <input
                ref={inputRef}
                disabled={isDisabled}
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
              <img className="dashboard__matches-logo" src={match.visitorTeam.image} alt="Team logo" />
              <span className="dashboard__matches-name">{match.visitorTeam.initials}</span>
            </div>
            <button
              className="dashboard__team-delete-player"
              onClick={() => {
                setIsDisabled(false);
              }}
            >
              Editar
            </button>
            {!isDisabled && (
              <button className="dashboard__team-delete-player"
                onClick={() => {
                  if (inputValue !== "No disputado") {
                    onGoalsMatch({
                      id: match._id,
                      goalsLocal: Array(Number(inputValue.split("-")[0])).fill(match.localTeam._id),
                      goalsVisitor: Array(Number(inputValue.split("-")[1])).fill(match.visitorTeam._id),
                      played: true
                    });
                  }
                }}
                // className="dashboard__matches-blank"
              >
                Guardar
              </button >
            )}
          </div>
        </td>
      </tr>
      <tr className="dashboard__matches-spacer"></tr>
    </>
  );
};

export default DashboardCalendarRow;
