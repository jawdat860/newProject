import "./App.css";
import Baner from "./components/Baner/Baner";
import Header from "./components/Header/Header";
import SliderBaner from "./components/SliderBaner/SliderBaner";
import Categoryes from "./components/Categoryes/Categoryes";
import TwoButtonV1 from "./components/TwoButtonV1/TwoButtonV1";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import ImegBox from "./components/ImegBox/ImegBox";
import IconsBox from "./components/IconsBox/IconsBox";
import CommentsModal from "./components/CommentsModal/CommentsModal";
import TwoButtonV2 from "./components/TwoButtonV2/TwoButtonV2";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div id="genn-Baner" className="genn-Baner-container">
        <Baner />
      </div>
      <div id="genn-SliderBaner" className="genn-SliderBaner-container">
        <SliderBaner />
      </div>
      <div id="genn-Categoryes " className="genn-Categoryes">
        <Categoryes />
      </div>
      <div id="genn-TwoButtonV1">
        <TwoButtonV1 />
      </div>
      <div id="genn-VideoSlider">
        <VideoSlider />
      </div>
      <div id="genn-ImegBox">
        <ImegBox />
      </div>
      <div id="genn-IconsBox">
        <IconsBox />
      </div>
      <div id="genn-CommentsModal">
        <CommentsModal />
      </div>
      <div id="genn-TwoButtonV2">
        <TwoButtonV2 />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
