import React, {useEffect} from "react";
import "./home.scss";
import Hero from "../../components/Hero/hero";
import Partner from "../../components/Partner";
import Pession from "../../components/Pession";
import Projects from "../../components/HomeServies";
import ProductImage from "../../components/ProjectImage";
import NewLetter from "../../components/newLetter";
import AboutCompany from "../../components/Pession";
import HomeServices from "../../components/HomeServies";

const Home = () => {
    return <div className="home">
     <Hero/>
     <AboutCompany/>
     <HomeServices/>
     {/* <ProductImage/> */}
     <Partner/>
     <NewLetter/>
       
    </div>;
};

export default Home;
