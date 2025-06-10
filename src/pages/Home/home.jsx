import React, { useEffect } from "react";
import "./home.scss";
import Hero from "../../components/Hero/hero";
import Info from "./component/Info";
import Services from "../../components/Services";
import GalleryInfo from "./component/galleryInfo";
import Feedback from "../../components/Feedback";
import Partner from "../../components/Partner";
const Home = () => {
  return <div className="home">
    <Hero/>
    <Info/>
    <Services/>
    <GalleryInfo/>
    <Feedback/>
    <Partner/>
  </div>;
};

export default Home;
