import HomeBanner from "./HomeBanner";
import "./HomeContact.css";
import ws from '../../Assets/home-contact-ws.png'
import email from '../../Assets/home-contact-email.png'
import imageOne from '../../Assets/home-grid-image-1.png'
import imageTwo from '../../Assets/home-grid-image-2.png'
import imageThree from '../../Assets/home-grid-image-3.png'
import imageFour from '../../Assets/home-grid-image-4.png'
import imageFive from '../../Assets/home-grid-image-5.png'
import imageSix from '../../Assets/home-grid-image-6.png'
import imageSeven from '../../Assets/home-grid-image-7.png'
import imageEight from '../../Assets/home-grid-image-8.png'
import imageNine from '../../Assets/home-grid-image-9.png'


const HomeContact = () => {
  const mobile = window.innerWidth < 768 ? true : false; 
  return (
    <>
      <HomeBanner />
      <section className="contact" id="contacto">
        <div className="contact-form">
          <h3>Suscribe</h3>
          <h4>Sign up with your email address to receive more information.</h4>
          <div className="form-group">
            <input type="text" placeholder="John Doe" />
            <input type="text" placeholder="joe@example.com" />
            <input type="text" placeholder="Your question" className="textarea" />
          </div>
          <button>Send</button>
          <ul className="contact-media">
            <li>
              <div>
                <div>
                  <img src={email} alt="email" />
                </div>
                <span>miemail@hotmail.com</span>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <img src={ws} alt="ws" />
                </div>
                <span>(+54) 11 2023 2425</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="contact-images">
          <img src={imageOne} alt="grid-img" />
          <img src={imageTwo} alt="grid-img" />
          <img src={imageThree} alt="grid-img" />
          <img src={imageFour} alt="grid-img" />
          <img src={imageFive} alt="grid-img" />
          <img src={imageSix} alt="grid-img" />
          {mobile === false ? (
            <img src={imageSeven} alt="grid-img" />
          ) : null}
          {mobile === false ? (
            <img src={imageEight} alt="grid-img" />
          ) : null}
          {mobile === false ? (
            <img src={imageNine} alt="grid-img" />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default HomeContact;
