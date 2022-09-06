import "./Header.css";
import { Link } from "react-router-dom";

const LinkMobile = ({ path, setIsMenuOpened, value, image, scroll, id }) => {
  return (
    <Link
      to={path}
      className="link-mobile"
      onClick={() => {
        setIsMenuOpened(false);
        if (scroll) {
          scroll(id);
        }
      }}
    >
      <img src={image} alt="menu-icon" />
      <li>{value}</li>
    </Link>
  );
};

export default LinkMobile;
