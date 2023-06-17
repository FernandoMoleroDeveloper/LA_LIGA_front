import Header from "../../components/Header/Header";
import "./HomePage.scss";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page page">
      <Header></Header>
      <h1>La Liga React App</h1>
    </div>
  );
};

export default HomePage;
