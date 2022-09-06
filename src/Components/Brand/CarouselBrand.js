import "./Brand.css";
import arrowLeft from "../../Assets/brand-left-arrow.png";
import arrowRight from "../../Assets/brand-right-arrow.png";
import { useState } from "react";

const CarouselBrand = ({data}) => {
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
    <div className="carousel-brand">
      <div className="carousel-controls">
        <img onClick={previous} src={arrowLeft} alt="btn" />
        <img onClick={next} src={arrowRight} alt="btn" />
      </div>
      <div className="message-box">
        <h3>{selectedData.title}</h3>
        <p>{selectedData.text}</p>
        <button>Get in touch</button>
      </div>
      <div className="carousel-target">
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

export default CarouselBrand