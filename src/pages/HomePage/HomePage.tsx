import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./HomePage.scss";
import teamLogo from "../../assets/team-logo.png";
import homeImage from "../../assets/home-image.png";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page page">
      <Header></Header>
      <img className="home-page__image" src={homeImage} alt="header-home image" />
      <div className="home-page__containers">
        <div className="home-page__box">
          <h2 className="home-page__box-title">CLASIFICACIÓN</h2>
          <table className="home-page__table">
            <thead>
              <tr>
                <th>POS</th>
                <th>EQUIPO</th>
                <th>PTS</th>
                <th>PP</th>
                <th>PG</th>
              </tr>
            </thead>
            <tbody>
              <tr className="home-page__spacer"></tr>
              <tr className="home-page__spacer"></tr>
              <tr className="home-page__table-clas">
                <td className="home-page__table-number">1</td>
                <td>
                  <div className="home-page__table-team">
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                    <p>Equipo 1</p>
                  </div>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__spacer"></tr>
              <tr className="home-page__table-clas">
                <td className="home-page__table-number">2</td>
                <td className="home-page__table-team">
                  <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__spacer"></tr>
              <tr className="home-page__table-clas">
                <td className="home-page__table-number">3</td>
                <td className="home-page__table-team">
                  <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__spacer"></tr>
              <tr className="home-page__table-clas">
                <td className="home-page__table-number">4</td>
                <td className="home-page__table-team">
                  <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__spacer"></tr>
              <tr className="home-page__table-clas">
                <td className="home-page__table-number">5</td>
                <td className="home-page__table-team">
                  <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__spacer"></tr>
              <tr className="home-page__table-clas">
                <td className="home-page__table-number">6</td>
                <td className="home-page__table-team">
                  <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__spacer"></tr>
              <tr className="home-page__table-clas">
                <td className="home-page__table-number">7</td>
                <td className="home-page__table-team">
                  <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="home-page__box">
          <h2 className="home-page__box-title">PARTIDOS</h2>
          <div className="home-page__box-subtitle">
            <button className="home-page__box-btn">{"<"}</button>
            <p>JORNADA 1</p>
            <button className="home-page__box-btn">{">"}</button>
          </div>
          <table className="home-page__table">
            <tbody>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">NO DISPUTADO</div>
                  </td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>
                    <span>RMC</span>
                  </td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Team logo" />
                  </td>
                  <td>
                    <div className="home-page__table-score">0-0</div>
                  </td>
                  <td>
                    <img className="home-page__team-img" src={teamLogo} alt="Team logo" />
                  </td>
                  <td>
                    <span>PLN</span>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
