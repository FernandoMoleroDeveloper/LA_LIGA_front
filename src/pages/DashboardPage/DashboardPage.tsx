import DashboardPlayerPage from "../../components/DashboardPlayer/DashboardPlayer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./DashboardPage.scss";

const DashboardPage = (): JSX.Element => {
  return (
    <div className="dashboard page">
      <Header></Header>
      <DashboardPlayerPage></DashboardPlayerPage>
      <Footer></Footer>
    </div>
  );
};

export default DashboardPage;
