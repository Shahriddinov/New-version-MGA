import React from 'react';
import "./style.scss"
import { MdOutlineBedroomChild } from "react-icons/md";
import { TbGeometry } from "react-icons/tb";
import { LiaBathSolid } from "react-icons/lia";
import { BsCalendarDate } from "react-icons/bs";
import { FaParking } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Info = () => {

    return (
        <div className="properties">
            <section className="details">
                <div className="auto-container">
                    <div className="clearfix">
                        <div className="column-left">
                            <div className="sec-title">
                                <h2 className="about">About <span className="theme">Property</span></h2>

                                <div className="text">
                                    Real Estate agents are Property consisting of land and the buildings on it, along with its seds
                                    naturals resources such seds as crops, minerals, or water; immovable property of this
                                    nature.Since this was a limited seds unit auction, we had approached by Developers to release
                                    incremental units to fulfill the demands at a stepped up cut-off price.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="auto-container">
                    <div className="five-theme">
                        <div className="clearfix">
                            <article className="column">
                                <div className="inner-box">
                                    <div className="inner-box_icon">
                                        <MdOutlineBedroomChild/>
                                    </div>
                                    <h4 className="bed">Bedrooms</h4>
                                    <h3 className="inner-box_count">3</h3>
                                </div>
                            </article>
                            <article className="column">
                                <div className="inner-box">
                                    <div className="inner-box_icon">
                                        <TbGeometry/>
                                    </div>
                                    <h4 className="bed">Square Feet</h4>
                                    <h3 className="inner-box_count">2350</h3>
                                </div>
                            </article>
                            <article className="column">
                                <div className="inner-box">
                                    <div className="inner-box_icon">
                                        <LiaBathSolid/>
                                    </div>
                                    <h4 className="bed">Baths</h4>
                                    <h3 className="inner-box_count">2</h3>
                                </div>
                            </article>
                            <article className="column">
                                <div className="inner-box">
                                    <div className="inner-box_icon">
                                        <BsCalendarDate/>
                                    </div>
                                    <h4 className="bed">Year Build</h4>
                                    <h3 className="inner-box_count">2350</h3>
                                </div>
                            </article>
                            <article className="column">
                                <div className="inner-box">
                                    <div className="inner-box_icon">
                                        <FaParking/>
                                    </div>
                                    <h4 className="bed">Car Parking</h4>
                                    <h3 className="inner-box_count">2350</h3>
                                </div>
                            </article>
                        </div>
                    </div>
            </div>


        </div>
    );
};

export default Info;