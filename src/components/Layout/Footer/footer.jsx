import React, {useEffect} from 'react';
import Message from "../../Message/message";
import {useDispatch, useSelector} from "react-redux";
import logoDeveloper from "../../../assests/images/Murod logo.png"
import {getServices} from "../../../reduxToolkit/servesSlice";
import {useTranslation} from "react-i18next";
import logo from "../../../assests/images/2.png"
import {BsYoutube, BsTelephoneForward} from "react-icons/bs";
import {RiInstagramFill} from "react-icons/ri";
import {getSocial} from "../../../reduxToolkit/socialSlice";
import Partner from "../../Partner/partner";
import { IoHomeOutline } from "react-icons/io5";
import {MdOutlineEmail} from "react-icons/md";


const Footer = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const socialData = useSelector((state) => state.socialSlice.socialData);

    const loading = useSelector((state) => state.socialSlice.loading);
    const lan = useSelector((state) => state.language.language);
    const servicesData = useSelector((state) => state.servesSlice.servicesData);
    useEffect(() => {
        dispatch(getServices());
        dispatch(getSocial());
    }, [dispatch, lan]);

    return (
        <>
            <Partner/>
            <Message/>
            <div className="footer">
                <div className="container">
                    <div className="footer_df">
                        <div className="footer_df_cardFooter">
                            <a href="#">
                                <img className="footer_df_cardFooter_brand" src={logo} alt="logo"/>
                            </a>
                            <div className="footer_df_cardFooter_FTitle">
                                {t("help")}
                            </div>
                        </div>
                        <div className="footer_df_cardFooter">
                            <div>Institutsional</div>
                            <ul className="footer_df_cardFooter_link">
                                <li key="1">
                                    <a href="/">{t("main")}</a>
                                </li>
                                <li key="2">
                                    <a href="/company">{t("about")}</a>
                                </li>
                                <li key="3">
                                    <a href="/services">{t("services")}</a>
                                </li>
                                <li key="4">
                                    <a href="/contact">{t("contact")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_df_cardFooter">
                            <div style={{marginBottom: "40px"}}>{t("services")}</div>
                            {servicesData.map((item) => (
                                <ul key={item.id} className="footer_df_cardFooter_Fserver">
                                    <li>
                                        <a href="/gallery">{item.title}</a>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <div className="footer_df_cardFooter">
                            <div>{t("contact")}</div>
                            <ul className="footer_df_cardFooter_link">
                                <li>
                                    <IoHomeOutline className="footer_df_cardFooter_link_homeIcon"   />
                                    <a>{t("address")}</a>
                                </li>
                                <li>
                                    <BsTelephoneForward className="footer_df_cardFooter_link_svg" />
                                    <a>+998770124004</a>
                                </li>
                                <li>
                                    <MdOutlineEmail className="footer_df_cardFooter_link_svg"/>
                                    <a>info@mgareklama.com</a>
                                </li>
                                <li className="footer_df_cardFooter_link_icons">

                                    <a href={socialData[0]?.url} target="_blank" className="footer_df_cardFooter_link_icons_urls">
                                        <BsYoutube />
                                    </a>
                                    <a href={socialData[1]?.url} className="footer_df_cardFooter_link_icons_urls">
                                        <RiInstagramFill />
                                    </a>
                                </li>

                            </ul>
                        </div>

                    </div>


                    <div className=" container footer_developer">
                        <a  href="https://t.me/murod2909" className="footer_developer_devLog">
                            <img width="100%" src={logoDeveloper} alt="logoDeveloper"/>
                        </a>


                        <div>
                            Copyright © 2023 MgaReklama
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;