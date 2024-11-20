import "./Header.css";
import logo from "../../assets/images/logo/logo.png";
import image1 from "../../assets/images/ico/h-2-1.png";
import image2 from "../../assets/images/ico/h-2-2.png";
import image3 from "../../assets/images/ico/h-2-3.png";
import image4 from "../../assets/images/ico/h-2-4.png";
import image5 from "../../assets/images/ico/h-2-5.png";
import { LocalText } from "../LocalText/LocalText";
function Header() {
  return (
    <>
      <div className="genn-fl-row genn-Header-1">
        <div className="genn-Header-logo">
          <img src={logo} />
        </div>
        <div className="genn-Header-1-container genn-fl-row">
          <ul className="genn-fl-row genn-Header-menu">
            <li className="genn-Header-1-menu">{LocalText.Header.MenuLinks.ml1}</li>
            <li className="genn-Header-1-menu">{LocalText.Header.MenuLinks.ml2}</li>
            <li className="genn-Header-1-menu">{LocalText.Header.MenuLinks.ml3}</li>
            <li className="genn-Header-1-menu">{LocalText.Header.MenuLinks.ml4}</li>
            <li className="genn-Header-1-menu">{LocalText.Header.MenuLinks.ml5}</li>
          </ul>
          <div className="genn-Header-1-Button">
            <button>{LocalText.Header.MenuButton}</button>
          </div>
        </div>
      </div>
      <div className="genn-fl-row genn-Header-2-block">
        <div className="genn-Header-2-block-menu">
          <img src={image1} alt={LocalText.Header.MenuIco.mi1} />
          <div className="genn-Header-2-block-menu-text">{LocalText.Header.MenuIco.mi1}</div>
        </div>
        <div className="genn-Header-2-block-menu">
          <img src={image2} alt={LocalText.Header.MenuIco.mi2}  />
          <div className="genn-Header-2-block-menu-text">{LocalText.Header.MenuIco.mi2}</div>
        </div>
        <div className="genn-Header-2-block-menu">
          <img src={image3} alt={LocalText.Header.MenuIco.mi3} />
          <div className="genn-Header-2-block-menu-text">{LocalText.Header.MenuIco.mi3}</div>
        </div>
        <div className="genn-Header-2-block-menu">
          <img src={image4} alt={LocalText.Header.MenuIco.mi4} />
          <div className="genn-Header-2-block-menu-text">{LocalText.Header.MenuIco.mi4}</div>
        </div>
        <div className="genn-Header-2-block-menu">
          <img src={image5} alt={LocalText.Header.MenuIco.mi5} />
          <div className="genn-Header-2-block-menu-text">{LocalText.Header.MenuIco.mi5}</div>
        </div>
      </div>
    </>
  );
}
export default Header;
