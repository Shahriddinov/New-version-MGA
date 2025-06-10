import React from 'react';
import "./style.scss"
import Photo from "../../../../components/Photo";
import Green from "../../../../components/Photo/green";

const galleryInfo = () => {
    return (
        <div className="galleryInfo">
           <div className="auto-container">
               <div className="sec-title">
                   <h2 className="gal-title">Photo <span className="themes">Gallery</span>
                   </h2>
                   <div className="texts">
                       Real Estate agents are Property consisting of land and the buildings on it, along with its seds
                       naturals resources such seds as crops, minerals, or water
                   </div>
               </div>
           </div>
            <Photo/>
            <Green/>
        </div>
    );
};

export default galleryInfo;