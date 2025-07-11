import React from "react";
import "./style.scss";
const Spinner = () => {

    return (
        <div className="loading-page">
            <div className="preloaders">
                <div className="waviy" style={{alignItems: "center", display:"flex", justifyContent:"center"}}>
                     <span className="hrefs">M</span>
                     <span className="hrefs">G</span>
                     <span className="hrefs">A</span>
                
                </div>
                <div className="waviy">
                <span className="hrefs">R</span>
                    <span className="hrefs">E</span>
                    <span className="hrefs">K</span>
                    <span className="hrefs">L</span>
                    <span className="hrefs">A</span>
                    <span className="hrefs">M</span>
                    <span className="hrefs">A</span>
                </div>
            </div>
        </div>
    );
};


export default Spinner;
