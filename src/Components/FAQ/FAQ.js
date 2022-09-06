import { useState } from "react";
import faqOpen from "../../Assets/faq-open.png";
import faqClose from "../../Assets/faq-close.png";
import "./FAQ.css";

const dataAccordion = [
  {
    question: "Lorem, ipsum dolor sit consectetur adipisicing elit?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
  },
  {
    question: "Lorem, ipsum dolor sit consectetur adipisicing elit?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
  },
  {
    question: "Lorem, ipsum dolor sit consectetur adipisicing elit?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
  },
  {
    question: "Lorem, ipsum dolor sit consectetur adipisicing elit?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis iure mollitia ex beatae voluptas voluptatum eligendi enim totam possimus, exercitationem asperiores accusamus ullam, atque in?",
  },
];

const FAQ = () => {
  const [accordion, setActiveAccordion] = useState(-1);
  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
    } else {
      setActiveAccordion(index);
    }
  }
  return (
    <section className="faq">
      <div className="faq-title">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="faq-quotes">
        {dataAccordion.map((item, index) => {
          return (
            <div
              className="accordion"
              key={index}
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-header">
                <h3>{item.question}</h3>
                {accordion === index ? (
                  <img src={faqClose} alt="simbolo" />
                ) : (
                  <img src={faqOpen} alt="simbolo" />
                )}
              </div>
              <div className="accordion-content">
                <p className={accordion === index ? "active" : "inactive"}>
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
