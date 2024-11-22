import { LocalText } from "../LocalText/LocalText";
import image1 from "../../assets/images/bg-image/SliderBaner1.png";
import image2 from "../../assets/images/bg-image/SliderBaner2.png";
import image3 from "../../assets/images/bg-image/SliderBaner3.png";
import image4 from "../../assets/images/bg-image/SliderBaner4.png";
import image5 from "../../assets/images/bg-image/SliderBaner5.png";
import "./SliderBaner.css";
function SliderBaner() {
  return (
    <>
      <div className="genn-SliderBaner-text-title">
        {LocalText.SliderBaner.title}
      </div>
      <div className="genn-SliderBaner-text-des">
        {LocalText.SliderBaner.description}
      </div>
      <div className="genn-SliderBaner-image-container genn-fl-row">
        <div className="genn-SliderBaner-image">
          <img src={image1} alt={LocalText.SliderBaner.altImage1} />
        </div>
        <div className="genn-SliderBaner-image">
          <img src={image2} alt={LocalText.SliderBaner.altImage2} />
        </div>
        <div className="genn-SliderBaner-image">
          <img src={image3} alt={LocalText.SliderBaner.altImage3} />
        </div>
        <div className="genn-SliderBaner-image">
          <img src={image4} alt={LocalText.SliderBaner.altImage4} />
        </div>
        <div className="genn-SliderBaner-image">
          <img src={image5} alt={LocalText.SliderBaner.altImage5} />
        </div>
      </div>
    </>
  );
}
export default SliderBaner;
