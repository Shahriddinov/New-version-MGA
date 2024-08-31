import React, { useEffect, useMemo } from 'react';
import "./serves.scss";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from "react-redux";
import { baseUrlImg } from "../../serves/api/utilis";
import { getServices } from "../../reduxToolkit/servesSlice";
import { useDebounce } from "use-debounce";
import { FaPlus } from "react-icons/fa6";

const Serves = () => {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const { t } = useTranslation();
    const servicesData = useSelector((state) => state.servesSlice.servicesData);
    const [debouncedLan] = useDebounce(lan, 500);  // Adjust the debounce delay as needed
    const serviesText = useMemo(() => t("services"), [t]);

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch, debouncedLan]);

    return (
        <div className="serves">
            <div className="serves_headBg">
                <div
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"
                    className="serves_headBg_texts"
                >
                    {serviesText}
                </div>
            </div>
            <div className="container">
                <div className="serves_card">
                    {servicesData.map((item, index) => (
                        <a
                            href="/gallery"
                            className="serves_card_item"
                            key={index}
                            data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'} // Alternate animations
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1500"
                            data-aos-delay={index * 100}
                        >
                            <img src={`${baseUrlImg}/${item?.image}`} className="serves_card_item_type" alt="images" />
                            <div className="serves_card_item_name">{item?.title}</div>
                           <div >
                               <FaPlus className="serves_card_item_plus" />
                           </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Serves;
