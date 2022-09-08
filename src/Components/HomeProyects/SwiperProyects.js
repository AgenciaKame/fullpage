import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeProyects.css";
import bg from "../../Assets/home-proyects-bg-sm.png";

const SwiperProyects = ({ data }) => {
  function linkToScroll(id) {
    setTimeout(() => {
      let element = document.getElementById(id)
      let posY = element.getBoundingClientRect().y
      window.scrollTo({top: posY, behavior:'smooth'})
    }, 300)
  } 
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    breakpoints={{
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }}
    loop={true}
    modules={[Pagination, Navigation]}
    className="swiper-proyects"
    >
      {data.map((proyect, index) => {
        return (
          <SwiperSlide className="proyects-slide" key={index}>
            <div className="home-proyects-carousel">
              {window.innerWidth < 768 ? (<img src={bg} alt="border" />) : null}
              <div className="carousel-proyects">
                <h3>{proyect.title}</h3>
                <p>{proyect.text}</p>
                <Link to={'proyects'} onClick={() => linkToScroll(proyect.link)}>+ SEE MORE</Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperProyects;
