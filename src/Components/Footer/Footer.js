import "./Footer.css";
import footerLogo from "../../Assets/footer-logo.png";
import instagram from "../../Assets/footer-instagram.png";
import facebook from "../../Assets/footer-facebook.png";
import linkedin from "../../Assets/footer-linkedin.png";
import kame from '../../Assets/8.png'
import { Link } from "react-router-dom";

const Footer = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Link to='/'>
          <img src={footerLogo} alt="logo" />
          <span>Logotipo</span>
        </Link>
      </div>
      <div className="footer-media">
        {mobile === true ? (
          <div className="footer-media-net">
            <ul>
              <li>
                <img src={facebook} alt="icon" />
              </li>
              <li>
                <img src={instagram} alt="icon" />
              </li>
              <li>
                <img src={linkedin} alt="icon" />
              </li>
            </ul>
          </div>
        ) : null}
        <div className="footer-media-menu">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/proyects">Proyects</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <p>©2022 - Diseñado por Agencia Kame</p>
        <img src={kame} alt='kame' />
      </div>
    </footer>
  );
};

export default Footer;
