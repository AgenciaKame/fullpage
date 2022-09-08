import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Brand.css";

const CarouselBrand = ({ data, linkToScroll }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[ Pagination, Navigation]}
      className="swiper-brand"
    >
      {data.map((brand, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="message-box">
              <h3>{brand.title}</h3>
              <p>{brand.text}</p>
              <button><Link to='/services' onClick={() => linkToScroll(brand.link)}>Get in touch</Link></button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselBrand;
