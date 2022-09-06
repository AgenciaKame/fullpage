import Proyect from "./Proyect";
import "./Proyects.css";
import proyectOneMobile from '../../Assets/proyect-image-one-sm.png'
import proyectTwoMobile from '../../Assets/proyect-image-two-sm.png'
import proyectThreeMobile from '../../Assets/proyect-image-three-sm.png'
import proyectOneDesktop from '../../Assets/proyect-image-one-lg.png'
import proyectTwoDesktop from '../../Assets/proyect-image-two-lg.png'
import proyectThreeDesktop from '../../Assets/proyect-image-three-lg.png'

const Proyects = () => {
  return (
    <section className="proyects">
      <div className="proyects-title">
        <h3>
          Check out some recent client proyects we had the pleasure of creating.
        </h3>
      </div>
      <div className="proyects-group">
        <Proyect
          imageMobile={proyectOneMobile}
          imageDesktop={proyectOneDesktop} 
          span='Proyect One'
          title='Here goes the name of the proyect.'
          text='Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.'
        />
        <Proyect
          imageMobile={proyectTwoMobile}
          imageDesktop={proyectTwoDesktop}
          span='Proyect Two'
          title='Here goes the name of the proyect.'
          text='Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.'
        />
        <Proyect
          imageMobile={proyectThreeMobile}
          imageDesktop={proyectThreeDesktop}
          span='Proyect Three'
          title='Here goes the name of the proyect.'
          text='Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.'
        />
      </div>
    </section>
  );
};

export default Proyects;
