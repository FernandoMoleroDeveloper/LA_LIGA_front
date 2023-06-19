import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./HomePage.scss";
import imageHome from "../../assets/home-image.png";
import escudoAvatar from "../../assets/escudo-avatar.png";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page page">
      <Header></Header>
      <img className="home-page__image" src={imageHome} alt="Login avatar" />
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
              <tr className="home-page__table-spacer"></tr>
              <tr className="home-page__table-spacer"></tr>
              <tr className="home-page__table-row">
                <td>1</td>
                <td className="home-page__table-team">
                  <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__table-spacer"></tr>
              <tr className="home-page__table-row">
                <td>1</td>
                <td className="home-page__table-team">
                  <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__table-spacer"></tr>
              <tr className="home-page__table-row">
                <td>1</td>
                <td className="home-page__table-team">
                  <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  <p>Equipo 1</p>
                </td>
                <td>12</td>
                <td>5</td>
                <td>3</td>
              </tr>
              <tr className="home-page__table-spacer"></tr>
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
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">NO DISPUTADO</div>
                  </td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
                </div>
              </tr>
              <tr>
                <div className="home-page__table-row">
                  <td>RMC</td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>
                    <div className="home-page__table-score">10-0</div>
                  </td>
                  <td>
                    <img className="header__avatar" src={escudoAvatar} alt="Escudo avatar" />
                  </td>
                  <td>BCN</td>
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
