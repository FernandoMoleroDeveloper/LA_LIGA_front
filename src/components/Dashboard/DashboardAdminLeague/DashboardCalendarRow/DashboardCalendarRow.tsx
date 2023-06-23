import { useRef, useState } from "react";
import "./DashboardCalendarRow.scss";

const DashboardCalendarRow = ({ match }: any): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>(match.played ? `${match.goalsLocal.length - match.goalsVisitor.length}` : "No disputado ")
  const inputRef = useRef(null);

  console.log(match);
  return (
    <>
      <tr>
        <td className="dashboard__matches-row">
          <div className="dashboard__matches-details">
            <div className="dashboard__matches-round">
            </div>
            <div className="dashboard__matches-teams">
              <span className="dashboard__matches-name">{match.localTeam.initials}</span>
              <img className="dashboard__matches-logo" src={match.localTeam.image} alt="Team logo" />
              <input ref={inputRef} disabled={isDisabled} value={inputValue} onChange={(event) => { setInputValue(event.target.value) }}/>
              <img className="dashboard__matches-logo" src={match.visitorTeam.image} alt="Team logo" />
              <span className="dashboard__matches-name">{match.visitorTeam.initials}</span>
            </div>
            <button
              className="dashboard__matches-blank"
              onClick={() => {
                setIsDisabled(false);
              }}
            >
              Editar
            </button>
            <div className="dashboard__matches-blank"></div>
          </div>
        </td>
      </tr>
      <tr className="dashboard__matches-spacer"></tr>
    </>
  );
};

export default DashboardCalendarRow;
