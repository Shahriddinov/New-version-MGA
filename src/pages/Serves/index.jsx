import React from 'react';
import "./serves.scss"
import PageHero from "../../components/pageHero";
import singleImg1 from "../../assests/images/IMG_2.png"
import singleImg2 from "../../assests/images/IMG_3.jpg"
import singleIcon1 from "../../assests/images/arxitektura.png"
import Partner from "../../components/Partner";
const Serves = () => {
    const title = 'Serves Page'
    return (
        <section className="section-serves">
            <PageHero title={title}/>
            <div className="auto-container">
                <div className="rows">
                    <div className="col-md-4">
                        <div className="services-item">
                            <div className="single-img">
                                <img
                                    src={singleImg1}
                                    fetchPriority="high"
                                    decoding="sync"
                                    width="360px"
                                    height="400px"
                                    className="singleOne"
                                    alt="single images"
                                />
                            </div>
                            <div className="services-content">
                                <div className="singliIcon">
                                    <img src={singleIcon1} decoding="sync" width="50px" height="49px" alt="single Icons"/>
                                </div>
                                <div className="cont-single">
                                    <h4 className="single-title">Transit Media</h4>
                                    <p className="single-des">Transit Media advertising has grown as technology to reach market. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="services-item">
                            <div className="single-img">
                                <img
                                    src={singleImg2}
                                    fetchPriority="high"
                                    decoding="sync"
                                    width="360px"
                                    height="400px"
                                    className="singleOne"
                                    alt="single images"
                                />
                            </div>
                            <div className="services-content">
                                <div className="singliIcon">
                                    <img src={singleIcon1} decoding="sync" width="50px" height="49px" alt="single Icons"/>
                                </div>
                                <div className="cont-single">
                                    <h4 className="single-title">Transit Media</h4>
                                    <p className="single-des">Transit Media advertising has grown as technology to reach market. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="services-item">
                            <div className="single-img">
                                <img
                                    src={singleImg1}
                                    fetchPriority="high"
                                    decoding="sync"
                                    width="360px"
                                    height="400px"
                                    className="singleOne"
                                    alt="single images"
                                />
                            </div>
                            <div className="services-content">
                                <div className="singliIcon">
                                    <img src={singleIcon1} decoding="sync" width="50px" height="49px" alt="single Icons"/>
                                </div>
                                <div className="cont-single">
                                    <h4 className="single-title">Transit Media</h4>
                                    <p className="single-des">Transit Media advertising has grown as technology to reach market. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="services-item">
                            <div className="single-img">
                                <img
                                    src={singleImg1}
                                    fetchPriority="high"
                                    decoding="sync"
                                    width="360px"
                                    height="400px"
                                    className="singleOne"
                                    alt="single images"
                                />
                            </div>
                            <div className="services-content">
                                <div className="singliIcon">
                                    <img src={singleIcon1} decoding="sync" width="50px" height="49px" alt="single Icons"/>
                                </div>
                                <div className="cont-single">
                                    <h4 className="single-title">Transit Media</h4>
                                    <p className="single-des">Transit Media advertising has grown as technology to reach market. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Partner/>
        </section>
    );
};

export default Serves;