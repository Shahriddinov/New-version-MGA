import React, {useEffect, useRef, useState} from 'react';
import "./contact.scss";
import ContactImg from "../../assests/images/6.png";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import {sendInfoContact} from "../../reduxToolkit/messageSlice";
import {resetContact} from "../../reduxToolkit/messageSlice/messageSlice";
import {getContact} from "../../reduxToolkit/contactSlice";
import LoadingPage from "../../components/Loading/LoadingPage";
import {useTranslation} from "react-i18next";
import PhoneInput from "react-phone-number-input";
import {Link} from "react-router-dom";
import {MdArrowRight} from "react-icons/md";
import {BiWalk} from "react-icons/bi";
import {SiMetrodeparis} from "react-icons/si";
import {RiCloseFill} from "react-icons/ri";

const Contact = () => {
    const dispatch = useDispatch();
    const formRef = useRef();
    const [activeMapNavigationBar, setactiveMapNavigationBar] = useState(true);

    const lan = useSelector((state) => state.language.language);
    const {t} = useTranslation();
    const loading = useSelector((state) => state.contactSlice.loading);
    const conctactData = useSelector((state) => state.contactSlice.contactData);
    const sendInfoData = useSelector((state) => state.sendQuestion.sendPostData);
    const options = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    };
    const [dataContact, setDataContact] = useState({
        name: "",
        family: "",
        phone: "",
        description: "",
    });
    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(sendInfoContact(dataContact));
        formRef.current.reset();
    };
    useEffect(() => {
        if (sendInfoData) {
            toast.success(t("sendContact"), options);
        }

        dispatch(resetContact());
    }, [sendInfoData, lan]);

    useEffect(() => {
        dispatch(getContact());
    }, [dispatch, lan]);

    if (loading) {
        return <LoadingPage/>;
    }
    return (
        <div className="contact">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="container">
                <div className="contact_imgC">
                    <img src={ContactImg} width="100%" height="100%" alt="Default Contact" loading="lazy"/>
                </div>
                <div className="contact-wrapper">

                    <div className="contact-action">
                        <div className="contact-action-form-wrapper">
                            <h2 className="contact-action-title">
                                {t("appForm")}
                            </h2>
                            <form
                                className="contact-action-form"
                                ref={formRef}
                                onSubmit={handleSumbit}
                            >
                                <input
                                    className="contact-action-form-nameInput"
                                    type="text"
                                    placeholder={t("name")}
                                    minLength={3}
                                    maxLength={50}
                                    required
                                    onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                />
                                <input
                                    className="contact-action-form-nameInput"
                                    type="text"
                                    placeholder={t("lastName")}
                                    minLength={3}
                                    maxLength={50}
                                    required
                                    onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            family: e.target.value,
                                        }))
                                    }
                                />
                                <PhoneInput
                                    className="contact-action-form-numberInput"
                                    placeholder={t("number")}
                                    onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            phone: e,
                                        }))
                                    }
                                />
                                <textarea

                                    id=""
                                    className="contact-action-form-areaInput"
                                    required
                                    name="decrebtion"
                                    placeholder={t("description")}
                                    onChange={(e) =>
                                        setDataContact((prev) => ({
                                            ...prev,
                                            description: e.target.value,
                                        }))
                                    }
                                ></textarea>
                                <div className="contact-action-form-btn-wrapper">
                                    <button className="contact-action-form-btn" type="submit">
                                        {t("send")}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="contact-action-address">
                            <div className="contact-action-address-item">
                                <span>Адресс</span>
                                <strong> <a target="_blank" style={{color: "#25333b"}}>{t("address")}
                                </a></strong>
                            </div>
                            <div className="contact-action-address-item">
                                <span>{t("workingHours")}</span>
                                <strong>{t("openHours")}</strong>
                            </div>
                            <div className="contact-action-address-item">
                                <span>{t("contactInfo")}</span>
                                <a style={{color: "#25333b"}} href="tel:+998770124004">+998770124004</a>
                                <a target="_blank" style={{color: "#25333b"}}
                                   href="mailto:info@mgareklama.com">info@mgareklama.com</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div >
                    <div className="contact-map" style={{position:"relative",overflow:"hidden"}}><a
                        href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                        style={{color:"#eee", fontSize:"12px",position:"absolute",top:"0px"}}>Ташкент</a><a
                        href="https://yandex.uz/maps/10335/tashkent/?ll=69.322203%2C41.303646&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.321825%2C41.303496&whatshere%5Bzoom%5D=16&z=17.2"
                        style={{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"}}>Улица Махтумкули, 3/4 — Яндекс
                        Карты</a>
                        <iframe
                            className="contact-map-iframe"
                            src="https://yandex.uz/map-widget/v1/?ll=69.322203%2C41.303646&mode=whatshere&whatshere%5Bpoint%5D=69.321825%2C41.303496&whatshere%5Bzoom%5D=16&z=17.2"
                            width="100%" height="100%" frameBorder="1" allowFullScreen="true"
                            style={{position:"relative"}}></iframe>
                    </div>
                    {/*<iframe*/}
                    {/*    title="map"*/}
                    {/*   */}
                    {/*    src="https://yandex.com/map-widget/v1/?ll=69.311797%2C41.298890&mode=search&oid=202914034599&ol=biz&z=16"*/}
                    {/*    width="100%" height="100%" frameBorder="1" allowFullScreen="true"*/}

                    {/*></iframe>*/}

                </div>
            </div>
        </div>
    );
};

export default Contact;