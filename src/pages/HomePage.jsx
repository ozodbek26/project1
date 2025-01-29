import Achievements from "../component/Achievements/Achievements";
import Scroll from "../component/AdditionalContent/Scroll/Scroll";
import Block1 from "../component/Block1/Block1";
import FindNew from "../component/FindNew/FindNew";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import RoadMap from "../component/RoadMap/RoadMap";
import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <Header />
      <Scroll />
      <Block1 />
      <RoadMap />
      <Achievements />
      <FindNew />
      <Footer />
    </div>
  );
}

export default HomePage;
