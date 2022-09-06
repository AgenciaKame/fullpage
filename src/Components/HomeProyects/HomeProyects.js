import CarouselProyects from "./CarouselProyects";
import "./HomeProyects.css";
import oval from '../../Assets/home-proyects-bg-lg.png';

const HomeProyects = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  const data = [
    {
      title: "Proyect One",
      text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
      target: false,
    },
    {
      title: "Proyect Two",
      text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
      target: false,
    },
    {
      title: "Proyect Three",
      text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
      target: false,
    },
  ];

  return (
    <section className="home-proyects">
      <div className="home-proyects-title">
        <h2>Recent Proyects</h2>
      </div>
      <div className="home-proyects-info">
        {mobile === true ? (
          <CarouselProyects data={data} />
        ) : (
          <div className="carousel-proyects-desktop">
            {data.map((proyect, index) => {
              return (
                <div className={`proyect-desktop ${index === 1 ? 'main' : ''}`} key={index}>
                  {index === 1 ? (
                    <img src={oval} alt='bg'/>
                  ) : null}
                  <h3>{proyect.title}</h3>
                  <p>{proyect.text}</p>
                  <span>+ SEE MORE</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeProyects;
