import React from "react";
import "./about.scss";
import aboutimg from "../../assests/images/featured-image-1.jpg";
import { FaCheck } from "react-icons/fa";
import Feedback from "../../components/Feedback";
import Partner from "../../components/Partner";

const About = () => {
    return <>
       <section className="about-section">
           <div className="auto-container">
               <div className="about-titles">
                   <h2 className="tit">WELCOME TO <strong className="strongs">MGA REKLAMA</strong></h2>
                   <div className="subDes">
                       There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                       alteration in some form, by injected humour, or randomised words
                   </div>
               </div>
               <figure className="full-image">
                   <img decoding="async" src={aboutimg} width="100%" alt="about images"/>
               </figure>
               <div className="services-outer">
                   <div className="row clearfix">
                       <article className="column col-4">
                           <div className="inner-about">
                               <div className="icon-left">
                                   <div className="checkIcon">
                                       <FaCheck/>
                                   </div>
                                   <span className="numbers">1</span>
                               </div>
                               <div className="contents-about">
                                   <h3 className="sup">LIFETIME SUPPORT</h3>
                                   <p className="about-des">
                                       Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at tempor.
                                   </p>
                               </div>
                           </div>
                       </article>
                       <article className="column col-4">
                           <div className="inner-about">
                               <div className="icon-left">
                                   <div className="checkIcon">
                                       <FaCheck/>
                                   </div>
                                   <span className="numbers">1</span>
                               </div>
                               <div className="contents-about">
                                   <h3 className="sup">Largest Community</h3>
                                   <p className="about-des">
                                       Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at tempor.
                                   </p>
                               </div>
                           </div>
                       </article>
                       <article className="column col-4">
                           <div className="inner-about">
                               <div className="icon-left">
                                   <div className="checkIcon">
                                       <FaCheck/>
                                   </div>
                                   <span className="numbers">1</span>
                               </div>
                               <div className="contents-about">
                                   <h3 className="sup">24 HOURS SERVICE</h3>
                                   <p className="about-des">
                                       Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at
                                       tempor.
                                   </p>
                               </div>
                           </div>
                       </article>
                   </div>
               </div>
           </div>
       </section>
       <Feedback/>
       <Partner/>
   </>
};

export default About;
