import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./LeaguePage.scss";

const LeaguePage = (): JSX.Element => {
  return (
    <div className="league-page page">
      <Header></Header>

      <h1>League Page!</h1>
      <Footer></Footer>
    </div>
  );
};
export default LeaguePage;
