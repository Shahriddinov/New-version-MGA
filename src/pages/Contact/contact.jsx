import React, {useEffect, useRef, useState} from "react";
import "./contact.scss";
import PageHero from "../../components/pageHero";
import {IoLocationSharp} from "react-icons/io5";
import {FaPhoneVolume} from "react-icons/fa6";
import {TfiEmail} from "react-icons/tfi";
import Partner from "../../components/Partner";

const Contact = () => {
    const title = 'Contact Us';
    return <div className="contact">
        <PageHero title={title}/>
        <div className="auto-container">
            <h2 className="contact-title">It’s Easy to Find Us</h2>
            <div className="descCon">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br/>
                the industry's standard dummy text ever since the 1500s, when an unknownto.
            </div>
            <div className="contact-info">
                <div className="row clearfix">
                    <div className="col-4-cont">
                        <div className="contI">
                            <IoLocationSharp className="contIcon"/>
                        </div>
                        <h3 className="address">ADDRESS</h3>
                        <p className="addDes">Mirpur New Bazar Road, Block-c, <br/>
                            Dhaka-1210</p>
                    </div>
                    <div className="col-4-cont">
                        <div className="contI">
                            <FaPhoneVolume className="contIcon"/>
                        </div>
                        <h3 className="address">Phone</h3>
                        <p className="addDes">(732) 803-01 03, (732) 806-01 04, <br/> (880)172380129</p>
                    </div>
                    <div className="col-4-cont">
                        <div className="contI">
                            <TfiEmail className="contIcon"/>
                        </div>
                        <h3 className="address">Email</h3>
                        <p className="addDes">info@companyname.com, <br/> otheremail@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="contact-map"><a
            href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>Ташкент</a><a
            href="https://yandex.uz/maps/10335/tashkent/?ll=69.322203%2C41.303646&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.321825%2C41.303496&whatshere%5Bzoom%5D=16&z=17.2"
            style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Улица Махтумкули, 3/4 — Яндекс
            Карты</a>
            <iframe
                className="contact-map-iframe"
                src="https://yandex.uz/map-widget/v1/?ll=69.322203%2C41.303646&mode=whatshere&whatshere%5Bpoint%5D=69.321825%2C41.303496&whatshere%5Bzoom%5D=16&z=17.2"
                width="100%" height="100%" frameBorder="1" allowFullScreen="true"
                style={{position: "relative"}}></iframe>
        </div>
        <section className="default-section">
            <div className="auto-container">
                <div className="sectitle">
                    <h2 className="formCont">Contact Form</h2>
                    <div className="contText">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknownto
                    </div>
                </div>
                <div className="contact-form">
                    <form action="#" aria-label="Contact Form">
                        <div className="rowForm clearfix">
                            <div className="colForm-4 form-group">
                                <input
                                    type="name"
                                    placeholder="Name"
                                    className="formInput"
                                />
                            </div>
                            <div className="colForm-4 form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="formInput"
                                />
                            </div>
                            <div className="colForm-4 form-group">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="formInput"
                                />
                            </div>
                        </div>
                        <textarea name="Message"  cols="30" rows="10" placeholder="Message"></textarea>
                        <button type="submit" className="sendForm">Send</button>
                    </form>
                </div>
            </div>
        </section>
        <Partner/>
    </div>;
};

export default Contact;
