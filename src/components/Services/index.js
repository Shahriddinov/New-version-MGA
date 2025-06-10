import React, {useEffect} from 'react';
import "./servies.scss";
import serviesImg from "../../assests/images/services.jpg"
import serviesArx from "../../assests/images/arxitektura.png"
import {FaPlus} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div className="servies">
            <div className="auto-container">
                <div className="flexs">
                    <section className="left-items">
                        <img className="serImg" src={serviesImg} alt="Servies Images"/>
                    </section>
                    <section className="right-items">
                        <h2 className="subTitle">We offer the best services</h2>
                        <p className="des">Lorem ipsum dolor sit amet consectetur. In nulla nunc arcu velit consectetur
                            massa mauris molestie hac. Hac arcu amet nullam pellentesque. Urna eu suspendisse felis sodales
                            sit non.</p>
                    </section>
                </div>
                <div className="serves_card">
                        <a
                            href="/serves"
                            className="serves_card_item"

                            data-aos='fade-up' // Alternate animations
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1500"
                            data-aos-delay='100'
                        >
                            <img src={serviesArx} className="serves_card_item_type" alt="images" />
                            <div className="serves_card_item_name">Arxitektura</div>
                            <div >
                                <FaPlus className="serves_card_item_plus" />
                            </div>
                        </a>
                    <a
                            href="/serves"
                            className="serves_card_item"

                            data-aos='fade-up' // Alternate animations
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1500"
                            data-aos-delay='100'
                        >
                            <img src={serviesArx} className="serves_card_item_type" alt="images" />
                            <div className="serves_card_item_name">Arxitektura</div>
                            <div >
                                <FaPlus className="serves_card_item_plus" />
                            </div>
                        </a>
                    <a
                            href="/serves"
                            className="serves_card_item"

                            data-aos='fade-up' // Alternate animations
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1500"
                            data-aos-delay='100'
                        >
                            <img src={serviesArx} className="serves_card_item_type" alt="images" />
                            <div className="serves_card_item_name">Arxitektura</div>
                            <div >
                                <FaPlus className="serves_card_item_plus" />
                            </div>
                        </a>
                    <a
                    href="/serves"
                    className="serves_card_item"

                    data-aos='fade-up' // Alternate animations
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                    data-aos-delay='100'
                >
                    <img src={serviesArx} className="serves_card_item_type" alt="images"/>
                    <div className="serves_card_item_name">Arxitektura</div>
                    <div>
                        <FaPlus className="serves_card_item_plus"/>
                    </div>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Services;