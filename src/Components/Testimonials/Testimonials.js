import CarouselTestimonials from "./CarouselTestimonials";
import "./Testimonials.css";
import testimonialsIcon from "../../Assets/testimonials-icon.png";

const Testimonials = () => {
  const data = [
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
      author: "Jeff Bezos",
      target: false,
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
      author: "Elon Musk",
      target: false,
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
      author: "Galperin",
      target: false,
    },
  ];
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <section className="testimonials">
      <div className="testimonials-title">
        <h3>Testimonials</h3>
      </div>
      {mobile === true ? (
        <CarouselTestimonials data={data} />
      ) : (
        <div className="testimonials-desktop">
          {data.map((testimony, index) => {
            return (
              <div className="testimony" key={index}>
                <img src={testimonialsIcon} alt="icon" />
                <p>{testimony.text}</p>
                <h4>{testimony.author}</h4>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
