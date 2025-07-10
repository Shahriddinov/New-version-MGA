import React from "react";
import "./home.scss";
import Hero from "../../components/Hero/hero";
import Partner from "../../components/Partner";
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
