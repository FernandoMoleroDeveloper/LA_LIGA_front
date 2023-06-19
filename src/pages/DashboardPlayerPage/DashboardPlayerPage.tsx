import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import teamLogo from "../../assets/team-logo.png";
import "./DashboardPlayerPage.scss";

const DashboardPlayerPage = (): JSX.Element => {
  return (
    <div className="dashboard-player page">
      <Header></Header>

      <div className="dashboard-player__container">
        <div className="dashboard-player__left-column">
          <div className="dashboard-player__profile"></div>
          <img className="dashboard-player__profile-picture" src="https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_400_400/0/1686850028795?e=1692835200&v=beta&t=I9VcCsPSaALNxw1wptANQbMgCvYMmGJVQdiTu25Fhck" alt="profile-picture" />
          <div className="dashboard-player__profile-name">Bill Gates</div>
          <div className="dashboard-player__profile-role">Jugador</div>
          <a className="dashboard-player__profile-edit" href="#">
            Editar perfil
          </a>
        </div>
        <div className="dashboard-player__right-column">
          {/* MI EQUIPO */}
          <div className="dashboard-player__team">
            <table>
              <thead>
                <tr>
                  <th>
                    <div className="dashboard-player__team-title">MI EQUIPO</div>
                  </th>
                  <th>NOMBRE</th>
                  <th>APELLIDOS</th>
                  <th>EMAIL</th>
                  <th>ROL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dashboard-player__team-spacer"></tr>
                <tr className="dashboard-player__team-spacer"></tr>
                <tr className="dashboard-player__team-row">
                  <td>
                    <img className="dashboard-player__team-thumbnail" src="https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_400_400/0/1686850028795?e=1692835200&v=beta&t=I9VcCsPSaALNxw1wptANQbMgCvYMmGJVQdiTu25Fhck" alt="profile-picture" />
                  </td>
                  <td>Bill</td>
                  <td>Gates</td>
                  <td>Gateto@hotmail.com</td>
                  <td>Jugador</td>
                </tr>
                <tr className="dashboard-player__team-spacer"></tr>
                <tr className="dashboard-player__team-row">
                  <td>
                    <img className="dashboard-player__team-thumbnail" src="https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_400_400/0/1686850028795?e=1692835200&v=beta&t=I9VcCsPSaALNxw1wptANQbMgCvYMmGJVQdiTu25Fhck" alt="profile-picture" />
                  </td>
                  <td>Bill</td>
                  <td>Gates</td>
                  <td>Gateto@hotmail.com</td>
                  <td>Jugador</td>
                </tr>
                <tr className="dashboard-player__team-spacer"></tr>
                <tr className="dashboard-player__team-row">
                  <td>
                    <img className="dashboard-player__team-thumbnail" src="https://media.licdn.com/dms/image/D5603AQFxd6snfB-80w/profile-displayphoto-shrink_400_400/0/1686850028795?e=1692835200&v=beta&t=I9VcCsPSaALNxw1wptANQbMgCvYMmGJVQdiTu25Fhck" alt="profile-picture" />
                  </td>
                  <td>Bill</td>
                  <td>Gates</td>
                  <td>Gateto@hotmail.com</td>
                  <td>Jugador</td>
                </tr>
                <tr className="dashboard-player__team-spacer"></tr>
              </tbody>
            </table>
          </div>
          {/* PARTIDOS */}
          <div className="dashboard-player__matches">
            <table>
              <thead>
                <tr>
                  <th>
                    <div className="dashboard-player__matches-title">PARTIDOS</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="dashboard-player__matches-spacer"></tr>
                <tr>
                  <td className="dashboard-player__matches-row">
                    <div className="dashboard-player__matches-details">
                      <div className="dashboard-player__matches-round">
                        JORNADA 1 | 01/12/23
                      </div>
                      <div className="dashboard-player__matches-teams">
                        <span className="dashboard-player__matches-name">RMC</span>
                        <img className="dashboard-player__matches-logo" src={teamLogo} alt="Team logo" />
                        <div className="dashboard-player__matches-results">
                          NO DISPUTADO
                        </div>
                        <img className="dashboard-player__matches-logo" src={teamLogo} alt="Team logo" />
                        <span className="dashboard-player__matches-name">PLN</span>
                      </div>
                      <div className="dashboard-player__matches-blank"></div>
                    </div>
                  </td>
                </tr>
                <tr className="dashboard-player__matches-spacer"></tr>
                <tr>
                  <td className="dashboard-player__matches-row">
                    <div className="dashboard-player__matches-details">
                      <div className="dashboard-player__matches-round">
                        JORNADA 2 | 01/12/23
                      </div>
                      <div className="dashboard-player__matches-teams">
                        <span className="dashboard-player__matches-name">RMC</span>
                        <img className="dashboard-player__matches-logo" src={teamLogo} alt="Team logo" />
                        <div className="dashboard-player__matches-results">
                          0-0
                        </div>
                        <img className="dashboard-player__matches-logo" src={teamLogo} alt="Team logo" />
                        <span className="dashboard-player__matches-name">PLN</span>
                      </div>
                      <div className="dashboard-player__matches-blank"></div>
                    </div>
                  </td>
                </tr>
                <tr className="dashboard-player__matches-spacer"></tr>
                <tr>
                  <td className="dashboard-player__matches-row">
                    <div className="dashboard-player__matches-details">
                      <div className="dashboard-player__matches-round">
                        JORNADA 1 | 01/12/23
                      </div>
                      <div className="dashboard-player__matches-teams">
                        <span className="dashboard-player__matches-name">RMC</span>
                        <img className="dashboard-player__matches-logo" src={teamLogo} alt="Team logo" />
                        <div className="dashboard-player__matches-results">
                          0-0
                        </div>
                        <img className="dashboard-player__matches-logo" src={teamLogo} alt="Team logo" />
                        <span className="dashboard-player__matches-name">PLN</span>
                      </div>
                      <div className="dashboard-player__matches-blank"></div>
                    </div>
                  </td>
                </tr>
                <tr className="dashboard-player__matches-spacer"></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashboardPlayerPage;
