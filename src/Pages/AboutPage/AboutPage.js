import { useEffect } from "react";
import About from "../../Components/About/About";
import Experience from "../../Components/Experience/Experience";
import Follow from "../../Components/Follow/Follow";
import Quote from "../../Components/Quote/Quote";
import "./AboutPage.css";

const AboutPage = ({ title }) => {
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
