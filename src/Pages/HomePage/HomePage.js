import { useEffect } from "react";
import Brand from "../../Components/Brand/Brand";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import HomeContact from "../../Components/HomeContact/HomeContact";
import HomeProyects from "../../Components/HomeProyects/HomeProyects";
import "./HomePage.css";

const HomePage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return <>
    <Brand />
    <HomeAbout />
    <HomeProyects />
    <HomeContact />
  </>;
};

export default HomePage;
