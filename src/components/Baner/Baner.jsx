import videoBg from "../../assets/images/bg-video/bg-video-banner.mp4";
import { LocalText } from "../LocalText/LocalText";
import "./Baner.css";
function Baner() {
  return (
    <>
      <div className="genn-Baner-video">
        <video loop autoPlay muted src={videoBg} />
      </div>
      <div className="genn-Baner-button-container genn-fl-row">
        <button className="genn-Baner-button1">
          {LocalText.Baner.button1}
        </button>
        <button className="genn-Baner-button2">
          {LocalText.Baner.button2}
        </button>
      </div>
    </>
  );
}
export default Baner;
