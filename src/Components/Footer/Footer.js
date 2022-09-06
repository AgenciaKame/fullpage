import "./Footer.css";
import footerLogo from "../../Assets/footer-logo.png";
import instagram from "../../Assets/footer-instagram.png";
import facebook from "../../Assets/footer-facebook.png";
import linkedin from "../../Assets/footer-linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  function scrollToTop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100)
  }
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="logo" />
        <span>Logotipo</span>
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
              <Link onClick={scrollToTop} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/proyects">
                Proyects
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <p>© Photo, Inc. 2019. We love our users!</p>
      </div>
    </footer>
  );
};

export default Footer;
