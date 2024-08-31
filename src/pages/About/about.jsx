import React from 'react';
import "./about.scss";
import aboutImg from "../../assests/images/3.png"
import Company from "../../components/Company/company";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about_headImg">
                    <img width="100%" height="100%" src={aboutImg} alt=""/>
                </div>
                <Company/>
            </div>
        </div>
    );
};

export default About;