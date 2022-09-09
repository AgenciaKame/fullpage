import "./Header.css";
import menuClose from "../../Assets/menu-close.png";
import menuLogo from "../../Assets/menu-logo.png";
import contactLogo from '../../Assets/contact-icon.png'
import aboutLogo from '../../Assets/about-icon.png'
import servicesLogo from '../../Assets/services-icon.png'
import proyectsLogo from '../../Assets/proyects-icon.png'
import logoutLogo from '../../Assets/logout-icon.png'
import LinkMobile from "./LinkMobile";

const MenuMobile = ({setIsMenuOpened, scroll}) => {
  return (
    <div className="menu-mobile">
      <div className="menu">
        <div className="menu-mobile-top">
          <div className="brand-logo">
            <img src={menuLogo} alt="icon" />
            <span>Company name</span>
          </div>
          <div onClick={() => setIsMenuOpened(false)}>
            <img src={menuClose} alt="logo" />
          </div>
        </div>
        <ul className="menu-mobile-center">
          <LinkMobile
            path="/about"
            setIsMenuOpened={setIsMenuOpened}
            value="About"
            image={aboutLogo}
          />
          <LinkMobile
            path="/services"
            setIsMenuOpened={setIsMenuOpened}
            value="Services"
            image={servicesLogo}
          />
          <LinkMobile
            path="/proyects"
            setIsMenuOpened={setIsMenuOpened}
            value="Proyects"
            image={proyectsLogo}
          />
          <LinkMobile
            path="/"
            setIsMenuOpened={setIsMenuOpened}
            scroll={scroll}
            id='contacto'
            value="Contact"
            image={contactLogo}
          />
        </ul>
      </div>
      <div className="bg-mobile"></div>
    </div>
  );
};

export default MenuMobile