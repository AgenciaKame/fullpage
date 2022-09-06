import "./HomeAbout.css";
import imageMobile from '../../Assets/home-about-image.png'
import imageDesktop from '../../Assets/about-image.png'

const HomeAbout = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <section className="home-about">
      <div className="home-about-image">
        {mobile === true ? (
          <img src={imageMobile} alt="about" />
        ) : (
          <img src={imageDesktop} alt="about" />
        )}
      </div>
      <div className="home-about-info">
        <h3>Who i am!</h3>
        <p>
          Im baby portland put a bird on it blog letterpress bitters yuccie. Im
          baby portland put a bird on it blog letterpress bitters yuccie.
        </p>
        <button>Get it touch</button>
      </div>
    </section>
  );
};

export default HomeAbout;
