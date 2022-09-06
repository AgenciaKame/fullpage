import "./Experience.css";
import mainImage from '../../Assets/about-main.png'

const Experience = () => {
  return (
    <section className="about-main">
      <div className="about-main-image">
        <img src={mainImage} alt='main'/>
        <div></div>
      </div>
      <div className="about-main-text">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          repellat amet ipsum? Dolor maxime eligendi est magnam modi assumenda
          hic! Repudiandae.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          ut modi quisquam explicabo reiciendis, animi illo doloremque!
        </p>
        <button>Get in touch</button>
      </div>
    </section>
  );
};

export default Experience;
