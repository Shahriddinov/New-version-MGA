import React from 'react';
import "./green.scss";
import logos from "../../../assests/images/2.png"

const Green = () => {
    return (
        <div className="green">
            <section className="intro-section">
                <div className="auto-container">
                    <div className="outer-box clearfix">
                        <span className="anim-image">
                            <img className="dream" decoding="asycn" src={logos} alt=""/>
                        </span>
                       <div className="dis">
                           <div className="col">
                               <p className="ps">
                                   Real Estate agents are Property consisting of land and the buildings on it, along with
                                   its seds naturals resources such seds as crops, minerals, or water.
                               </p>
                           </div>
                           <div className="col-2">
                               <a href="#" className="theme-btn style-btn">Contact Now</a>
                           </div>
                       </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Green;