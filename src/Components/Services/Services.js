import Service from "./Service";
import "./Services.css";
import serviceMobileOne from '../../Assets/services-image-one-sm.png'
import serviceMobileTwo from '../../Assets/services-image-two-sm.png'
import serviceMobileThree from '../../Assets/services-image-three-sm.png'
import serviceDesktopOne from '../../Assets/services-image-one-lg.png'
import serviceDesktopTwo from '../../Assets/services-image-two-lg.png'
import serviceDesktopThree from '../../Assets/services-image-three-lg.png'

const Services = () => {
  return (
    <section className="services">
      <Service
        imageMobile={serviceMobileOne}
        imageDesktop={serviceDesktopOne}
        title="Web Design"
        paragraph1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        iure mollitia ex beatae voluptas voluptatum eligendi enim totam
        possimus, exercitationem asperiores accusamus ullam, atque in?"
        paragraph2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        iure mollitia ex beatae voluptas voluptatum eligendi enim totam
        possimus, exercitationem asperiores accusamus ullam, atque in?"
      />
      <Service
        imageMobile={serviceMobileTwo}
        imageDesktop={serviceDesktopTwo}
        title="Brand Design"
        paragraph1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        iure mollitia ex beatae voluptas voluptatum eligendi enim totam
        possimus, exercitationem asperiores accusamus ullam, atque in?"
        paragraph2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        iure mollitia ex beatae voluptas voluptatum eligendi enim totam
        possimus, exercitationem asperiores accusamus ullam, atque in?"
      />
      <Service
        imageMobile={serviceMobileThree}
        imageDesktop={serviceDesktopThree}
        title="Photography"
        paragraph1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        iure mollitia ex beatae voluptas voluptatum eligendi enim totam
        possimus, exercitationem asperiores accusamus ullam, atque in?"
        paragraph2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
        iure mollitia ex beatae voluptas voluptatum eligendi enim totam
        possimus, exercitationem asperiores accusamus ullam, atque in?"
      />
    </section>
  );
};

export default Services;
