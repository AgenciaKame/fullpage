import "./Testimonials.css";
import arrowLeft from "../../Assets/brand-left-arrow.png";
import arrowRight from "../../Assets/brand-right-arrow.png";
import testimonialsIcon from '../../Assets/testimonials-icon.png'; 
import { useState } from "react";

const CarouselTestimonials = ({ data }) => {
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
    <div className="testimonials-carousel">
      <div className="testimonials-controls">
        <img onClick={previous} src={arrowLeft} alt="button" />
        <img onClick={next} src={arrowRight} alt="button" />
      </div>
      <div className="testimonials-box">
        <img src={testimonialsIcon} alt="icon" />
        <p>{selectedData.text}</p>
        <h4>{selectedData.author}</h4>
      </div>
      <div className="testimonials-targets">
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

export default CarouselTestimonials