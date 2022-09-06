import "./About.css";
import aboutImage from "../../Assets/about-image.png";

const About = () => {
  return (
    <section className="about-me">
      <div className="about-me-title">
        <h3>Hey there!</h3>
      </div>
      <div className="about-me-image">
        <img src={aboutImage} alt="about-img" />
      </div>
      <div className="about-me-text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          repellat amet ipsum? Dolor maxime eligendi est magnam modi assumenda
          hic! Repudiandae.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          ut modi quisquam explicabo reiciendis, animi illo doloremque!
        </p>
      </div>
    </section>
  );
};

export default About;
