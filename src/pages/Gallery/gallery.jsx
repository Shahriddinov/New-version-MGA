import React, {useEffect, useState} from "react";
import "./gallery.scss";
import PageHero from "../../components/pageHero";
import Photo from "../../components/Photo";
import Green from "../../components/Photo/green";

const Gallery = () => {
    const title = "Gallery Full Width";
    return <div className="gallery">
        <PageHero title={title}/>
        <div className="auto-container">
            <div className="gal-title">
                <div className="textGal">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words
                </div>
            </div>
        </div>
        <Photo/>
        <Green/>
    </div>;
};

export default Gallery;
