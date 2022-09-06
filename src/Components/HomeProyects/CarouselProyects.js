import "./HomeProyects.css";
import arrowLeft from "../../Assets/brand-left-arrow.png";
import arrowRight from "../../Assets/brand-right-arrow.png";
import bg from "../../Assets/home-proyects-bg-sm.png";
import { useState } from "react";

const CarouselProyects = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedData, setSelectedData] = useState(data[0]);
  const [selectedTarget, setSelectedTarget] = useState(0);

  const selectNewData = (index, data, next = true) => {
    const condition = next
      ? selectedIndex < data.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : data.length - 1;
    setSelectedIndex(nextIndex);
    setSelectedTarget(nextIndex);
    setSelectedData(data[nextIndex]);
  };
  const previous = () => {
    selectNewData(selectedIndex, data, false);
  };
  const next = () => {
    selectNewData(selectedIndex, data);
  };
  return (
    <div className="home-proyects-carousel">
      <img src={bg} alt="border" />
      <div className="carousel-controls-proy">
        <img onClick={previous} src={arrowLeft} alt="btn" />
        <img onClick={next} src={arrowRight} alt="btn" />
      </div>
      <div className="carousel-proyects">
        <h3>{selectedData.title}</h3>
        <p>{selectedData.text}</p>
        <span>+ SEE MORE</span>
      </div>
      <div className="carousel-target-proy">
        {data.map((target, index) => {
          return (
            <div
              className={selectedTarget === index ? "current" : null}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselProyects;
