import facebook from "../../Assets/header-facebook-lg.png";
import instagram from "../../Assets/header-instagram-lg.png";
import linkedin from "../../Assets/header-linkedin-lg.png";
import email from "../../Assets/header-email-lg.png";
import "./Header.css";
import { Link } from "react-router-dom";

const HeaderMedia = () => {
  return (
    <div className="social-media">
      <ul>
        <li>
          <Link to="/">
            <img src={facebook} alt="media" />
          </Link>
        </li>
        <li>
          <a href="https://www.instagram.com/agenciakame/" target="__blank">
            <img src={instagram} alt="media" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/agencia-kame/"
            target="__blank"
          >
            <img src={linkedin} alt="media" />
          </a>
        </li>
        <li>
          <a href="mailto:hola@agenciakame.com" target="__blank">
            <img src={email} alt="media" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMedia;
