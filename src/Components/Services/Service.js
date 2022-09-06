import "./Services.css";

const Service = ({ imageMobile, imageDesktop, title, paragraph1, paragraph2 }) => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="service">
      <div className="service-image">
        {mobile === true ? (
          <img src={imageMobile} alt="pic" />
        ) : (
          <img src={imageDesktop} alt="pic" />
        )}
        {mobile === true ? <span>{title}</span> : null}
      </div>
      <div className="service-info">
        {mobile === false ? <h3>{title}</h3> : null}
        <p>
          {paragraph1}
          <br />
          <br />
          {paragraph2}
        </p>
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default Service;
