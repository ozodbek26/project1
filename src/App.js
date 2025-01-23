import "./App.css";
import Block1 from "./component/Block1/Block1";
import Header from "./component/Header/Header";
import RoadMap from "./component/RoadMap/RoadMap";
import Achievements from "./component/Achievements/Achievements";
import FindNew from "./component/FindNew/FindNew";
import Footer from "./component/Footer/Footer";
import Scroll from "./component/AdditionalContent/Scroll/Scroll";

function App() {
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

export default App;
