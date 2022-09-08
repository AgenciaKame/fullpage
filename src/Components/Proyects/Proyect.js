import "./Proyects.css";

const Proyect = ({ imageMobile, imageDesktop, span, title, text, id }) => {
  const mobile = window.innerWidth < 768 ? true : false;
  return (
    <div className="proyect" id={id}>
      <div className="proyect-image">
        {mobile === true ? (
          <img src={imageMobile} alt="pic" />
        ) : (
          <img src={imageDesktop} alt="pic" />
        )}
        <span>{span}</span>
      </div>
      <div className="proyect-title">
        <h3>{title}</h3>
      </div>
      <div className="proyect-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Proyect;
