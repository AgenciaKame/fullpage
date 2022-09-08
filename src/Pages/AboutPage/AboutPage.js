import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Follow from "../../Components/Follow/Follow";
import Quote from "../../Components/Quote/Quote";
import "./AboutPage.css";

const AboutPage = ({ title }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    document.title = title;
  });

  return <>
    <About />
    <Quote />
    <Experience />
    <Follow />
  </>;
};

export default AboutPage;
