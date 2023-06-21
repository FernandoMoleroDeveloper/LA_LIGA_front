import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./HomePage.scss";
import homeImage from "../../assets/home-image.png";
import { useEffect, useState } from "react";
import { MatchResponse } from "../../models/Match";
import CalendarTable from "../../components/Home/Calendar/CalendarTable/CalendarTable";
import ClasificationTeamTable from "../../components/Home/Clasification/ClasificationTable/ClasificationTable";

const API_URL_ALLMATCHS = `${process.env.REACT_APP_API_URL as string}/match/matchall`;
const API_URL_CLASIFICATION = `${process.env.REACT_APP_API_URL as string}/match/calculate-statics`;

const HomePage = (): JSX.Element => {
  const [matchs, setMatchs] = useState<MatchResponse[]>([])
  const [teams, setTeams] = useState([])
  const [totalItems, setTotalItems] = useState<number>()

  console.log(totalItems)

  useEffect(() => {
    fetchmMatchs()
    fetchTeams()
  }, [])

  const fetchmMatchs = (): void => {
    fetch(API_URL_ALLMATCHS)
      .then(async response => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición")
        }
        return await response.json()
      }).then(responseParsed => {
        setMatchs(responseParsed.data);
        setTotalItems(responseParsed.totalTeams)
      })
      .catch(error => {
        alert("Ha ocurrido un error en la petición")
        console.error(error);
      })
  };

  console.log(matchs)

  const fetchTeams = (): void => {
    fetch(API_URL_CLASIFICATION)
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setTeams(responseParsed);
      })
      .catch((error) => {
        alert("Ha ocurrido un error en la petición");
        console.error(error);
      });
  };

  console.log(teams);

  return (
    <div className="home-page page">
      <Header></Header>
      <img className="home-page__image" src={homeImage} alt="header-home image" />
      <div className="home-page__containers">
        <div className="home-page__box">
          <h2 className="home-page__box-title">CLASIFICACIÓN</h2>
          <ClasificationTeamTable teams={teams}/>

        </div>
        <div className="home-page__box">
          <h2 className="home-page__box-title">PARTIDOS</h2>
          <div className="home-page__box-subtitle">
            <button className="home-page__box-btn">{"<"}</button>
            <p>JORNADA 1</p>
            <button className="home-page__box-btn">{">"}</button>
          </div>
          <CalendarTable matchs={matchs}/>

        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
