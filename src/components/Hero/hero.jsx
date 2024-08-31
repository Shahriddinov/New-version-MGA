import React, {useState} from 'react';
import "./hero.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation, Autoplay} from "swiper/modules";
import {baseUrlImg} from "../../serves/api/utilis";
import LoadingPage from "../Loading/LoadingPage";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {motion} from 'framer-motion';

const Hero = ({sliderData, error, loading}) => {
    const [slideAnimation, setSlideAnimation] = useState(false);

    const slideVariants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {opacity: 1, scale: 1},
    };



        return (
            <div className="hero">
                <div className="container">
                    <div className="hero_box">
                        {loading ? (
                            <LoadingPage/>
                        ) : error ? (
                            <p>Error loading slider data</p>
                        ) : (
                            <Swiper
                                className="hero_box_swiper"
                                modules={[Navigation, A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                onSlideChangeTransitionStart={() => {
                                    setSlideAnimation(true); // Trigger animation on slide change start
                                }}
                                onSlideChangeTransitionEnd={() => {
                                    setSlideAnimation(false); // Reset animation state on slide change end
                                }}
                            >
                                {sliderData.map((item) => (
                                    <SwiperSlide key={item.id || item.image}>
                                        <motion.div
                                            variants={slideVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{duration: 0.8, ease: "easeOut"}}
                                        >
                                            {item  ? (
                                                <img
                                                    width="100%"
                                                    height="100%"
                                                    alt=""
                                                    src={`${baseUrlImg}/${JSON.parse(item?.video)[0]?.download_link}`}
                                                />
                                            ) : (
                                                <img
                                                    width="100%"
                                                    height="100%"
                                                    src={`${baseUrlImg}/${item?.image}`}
                                                    alt=""
                                                />
                                            )}
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-next">
                                    <GrFormNext className="swiper-button-next_icon"/>
                                </div>
                                <div className="swiper-button-prev">
                                    <GrFormPrevious className="swiper-button-next_icon"/>
                                </div>
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
        );
    }
    ;

    export default Hero;
