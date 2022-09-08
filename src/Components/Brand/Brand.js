import "./Brand.css";
import brandBg from "../../Assets/brand-bg.png";
import ellipseOne from "../../Assets/ellipse-one.png";
import ellipseTwo from "../../Assets/ellipse-two.png";
import CarouselBrand from "./CarouselBrand";
import { Link } from "react-router-dom";

const Brand = () => {
  const mobile = window.innerWidth < 768 ? true : false;
  const data = [
    {
      title: "Web Design",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
      link: "webDesign",
    },
    {
      title: "Brand Design",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
      link: "brandDesign",
    },
    {
      title: "Photography Design",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
      link: "photography",
    },
  ];

  function linkToScroll(id) {
    setTimeout(() => {
      let element = document.getElementById(id)
      let posY = element.getBoundingClientRect().y
      window.scrollTo({top: posY, behavior:'smooth'})
    }, 300)
  }

  return (
    <div className="brand">
      <div className="brand-title">
        {mobile === true ? (
          <img className="brand-title-bg" src={brandBg} alt="bg" />
        ) : null}
        <h2>Here is where you can put your brand message.</h2>
      </div>
      <div className="brand-info">
        {mobile === true ? (
          <CarouselBrand data={data} linkToScroll={linkToScroll}/>
        ) : (
          <>
            {data.map((box, index) => {
              return (
                <div className="message-desktop" key={index}>
                  <h3>{box.title}</h3>
                  <p>{box.text}</p>
                  <button>
                    <Link to='/services' onClick={() => linkToScroll(box.link)}>Get in touch</Link>
                  </button>
                </div>
              );
            })}
            <img src={ellipseOne} alt="bg" />
            <img src={ellipseTwo} alt="bg" />
          </>
        )}
      </div>
    </div>
  );
};

export default Brand;
