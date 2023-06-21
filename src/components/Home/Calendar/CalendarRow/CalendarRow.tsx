import "../../../../pages/HomePage/HomePage.scss";

const CalendarRow = ({ match }: any): JSX.Element => {
  return (
    <tr>
      <div className="home-page__table-row">
        <td>{match.localTeam.initials }</td>
        <td>
          <img className="home-page__team-img" src={match.localTeam.image} alt="Escudo local" />
        </td>
        <td>
          { match.played
            ? <div className="home-page__table-score">
              <p>{match.goalsLocal?.length ? match.goalsLocal.length : 0}</p>
              <p>{match.goalsVisitor?.length ? match.goalsVisitor.length : 0}</p>
            </div>
            : <div className="home-page__table-score">NO DISPUTADO</div>
          }
        </td>
        <td>
          <img className="home-page__team-img" src={match.visitorTeam.image} alt="Escudo visitante" />
        </td>
        <td>{match.visitorTeam.initials }</td>
      </div>
    </tr>
  );
};

export default CalendarRow;
