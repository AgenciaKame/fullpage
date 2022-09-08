import "./Follow.css";
import facebook from "../../Assets/about-facebook-lg.png";
import instagram from "../../Assets/about-instagram-lg.png";
import linkedin from "../../Assets/about-linkedin-lg.png";
import aboutOne from "../../Assets/about-grid-image-one-lg.png";
import aboutTwo from "../../Assets/about-grid-image-two-lg.png";
import aboutThree from "../../Assets/about-grid-image-three-lg.png";
import aboutFour from "../../Assets/about-grid-image-four-lg.png";

const Follow = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <section className="about-media">
      <div className="about-media-title">
        <h3>Follow me</h3>
      </div>
      <div className="about-media-net">
        <ul>
          <img src={facebook} alt="net" />
          <img src={instagram} alt="net" />
          <img src={linkedin} alt="net" />
        </ul>
      </div>
      <div className="about-media-images">
        <img src={aboutOne} alt="about" />
        <img src={aboutTwo} alt="about" />
        <img src={aboutThree} alt="about" />
        {mobile === false ? <img src={aboutFour} alt="about" /> : null}
      </div>
    </section>
  );
};

export default Follow;
