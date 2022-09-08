import SwiperProyects from "./SwiperProyects";
import "./HomeProyects.css";

const HomeProyects = () => {
  const data = [
    {
      title: "Proyect One",
      text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
      link: "proyectOne",
    },
    {
      title: "Proyect Two",
      text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
      link: "proyectTwo",
    },
    {
      title: "Proyect Three",
      text: "Im baby portland put a bird on it blog letterpress bitters yuccie. Im baby portland put a bird on it blog letterpress bitters yuccie.",
      link: "proyectThree",
    },
  ];

  return (
    <section className="home-proyects">
      <div className="home-proyects-title">
        <h2>Recent Proyects</h2>
      </div>
      <div className="home-proyects-info">
        <SwiperProyects data={data} />
      </div>
    </section>
  );
};

export default HomeProyects;
