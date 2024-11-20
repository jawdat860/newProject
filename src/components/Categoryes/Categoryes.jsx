import { LocalText } from "../LocalText/LocalText";
import image1 from "../../assets/images/bg-image/Categoryes1.png";
import image2 from "../../assets/images/bg-image/Categoryes2.png";
import image3 from "../../assets/images/bg-image/Categoryes3.png";
import image4 from "../../assets/images/bg-image/Categoryes4.png";
function Categoryes() {
  return (
    <>
      <div className="genn-Categoryes-title">{LocalText.Categoryes.title}</div>
      <ul className="genn-Categoryes-menu">
        <li className="genn-Categoryes-link">
          {LocalText.Categoryes.CategoryesLinks.l1}
        </li>
        <li className="genn-Categoryes-link">
          {LocalText.Categoryes.CategoryesLinks.l2}
        </li>
        <li className="genn-Categoryes-link">
          {LocalText.Categoryes.CategoryesLinks.l3}
        </li>
        <li className="genn-Categoryes-link">
          {LocalText.Categoryes.CategoryesLinks.l4}
        </li>
        <li className="genn-Categoryes-link">
          {LocalText.Categoryes.CategoryesLinks.l5}
        </li>
      </ul>
      <div className="genn-Categoryes-image-container">
        <div className="genn-Categoryes-image">
          <img src={image1} alt={LocalText.Categoryes.CategoryesLinks.l1} />
          <button className="genn-Categoryes-image-button">
            {LocalText.Categoryes.CategoryesLinks.l1}
          </button>
        </div>
        <div className="genn-Categoryes-image">
          <img src={image2} alt={LocalText.Categoryes.CategoryesLinks.l3} />
          <button className="genn-Categoryes-image-button">
            {LocalText.Categoryes.CategoryesLinks.l3}
          </button>
        </div>
        <div className="genn-Categoryes-image">
          <img src={image3} alt={LocalText.Categoryes.CategoryesLinks.l2} />
          <button className="genn-Categoryes-image-button">
            {LocalText.Categoryes.CategoryesLinks.l2}
          </button>
        </div>
        <div className="genn-Categoryes-image">
          <img src={image4} alt={LocalText.Categoryes.CategoryesLinks.l4} />
          <button className="genn-Categoryes-image-button">
            {LocalText.Categoryes.CategoryesLinks.l4}
          </button>
        </div>
      </div>
    </>
  );
}
export default Categoryes;
