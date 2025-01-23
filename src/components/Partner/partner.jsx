import React, { useEffect, useMemo } from 'react';
import "./partner.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPartner } from "../../reduxToolkit/partnerSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useTranslation } from "react-i18next";
import { baseUrlImg } from "../../serves/api/utilis";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Partner = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.partnerSlice.loading);
    const partnerData = useSelector((state) => state.partnerSlice.partnerData);
    const partnerText = useMemo(() => t("partner"), [t]);

    const datas = partnerData?.map((item) => item.image);

    useEffect(() => {
        dispatch(getPartner());
    }, [dispatch, lan]);

    return (
        <div className="partner">
            <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "0 auto" }}>
                <h1 style={{ marginBottom: "5%" }} className="partner_h1">{partnerText}</h1>
                <Swiper

                    slidesPerView={7} // Default number of slides to show
                    spaceBetween={30} // Default space between slides
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        // When window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // When window width is >= 480px
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        // When window width is >= 640px
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        // When window width is >= 768px
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        // When window width is >= 1024px
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30
                        },
                        // When window width is >= 1440px
                        1440: {
                            slidesPerView: 7,
                            spaceBetween: 30
                        }
                    }}
                >
                    {
                        datas?.map((items, index) => (
                            <SwiperSlide key={index} className="partner_cc">
                                <a href={items.url} target="_blank" rel="noopener noreferrer">
                                    <img className="partner_cc_sliderImg"
                                         src={`${baseUrlImg}/${items.image}`}
                                         alt=""
                                    />
                                </a>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Partner;
