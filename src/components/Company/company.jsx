import React, {useEffect, useMemo} from 'react';
import "./company.scss";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../reduxToolkit/aboutSlice";
import {useTranslation} from "react-i18next";
import M from "../../assests/images/m.png"
import G from "../../assests/images/g.png"
import A from "../../assests/images/a.png";
import { useDebounce } from 'use-debounce';
const Company = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.aboutSlice.loading);
    const aboutData = useSelector((state) => state.aboutSlice.aboutData);
    const [debouncedLan] = useDebounce(lan, 500);  // Adjust the debounce delay as needed
    const aboutText = useMemo(() => t("abouts"), [t]);

    useEffect(() => {
        dispatch(getAbout());
    }, [dispatch, debouncedLan]);
    const renderStyledTitle = (title) => {
        const parts = title.split(' '); // Adjust this logic as needed

        // Return JSX with styled spans
        return (
            <div style={{display:"flex", gap:"10px", }}>
                <span className="title-part1">{parts[0]}</span>
                <span className="title-part2">{parts[1]}</span>
                <span style={{color:"#abd046"}}>{parts[2]}</span>
            </div>
        );
    };

    useEffect(() => {
        Aos.init({
            duration: 2000, // Default duration
        });
    }, []);

    return (
        <div className="container">
            <div className="company">
                <div className="company_info">
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1500" // Increased duration
                        className="company_info_m"
                    >
                        <img src={M}  className="company_info_m_log" alt=""/>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        data-aos-delay="300" // Added delay for staggered effect
                        className="company_info_g"
                    >
                        <img src={G}  className="company_info_g_log" alt=""/>

                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        data-aos-delay="600" // Further delay for the next element
                        className="company_info_a"
                    >
                        <img src={A}   className="company_info_a_log" alt=""/>
                    </div>

                </div>
                {aboutData.map((item, id)=>(
                    <div
                        className="company_info"
                        data-aos="fade-down"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1500"
                        key={id}
                    >
                        <div>
                            <div
                                data-aos="fade-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1500"
                                className="company_info_title"
                            >{renderStyledTitle(item.title)}</div>
                            <div
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                                className="company_info_subTitle"
                            >{item.subtitle}</div>
                            <div className="company_info_desc">
                                {aboutText}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Company;
