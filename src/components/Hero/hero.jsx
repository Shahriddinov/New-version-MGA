import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "./hero.scss"
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import hero1 from "../../assests/images/IMG.png"
import hero2 from "../../assests/images/IMG_2.png"
import hero3 from "../../assests/images/IMG_3.jpg"
const Hero = () => {
    const slides = [
        {
            id: 1,
            title: "Tabiatning go'zalligi",
            description: "Har bir manzara go'zallikni o'zida aks ettiradi.",
            image: hero1,
        },
        {
            id: 2,
            title: "Shahar hayoti",
            description: "Hayotning ritmi shahar ko'chalari bilan uyg'unlashadi.",
            image: hero2,
        },
        {
            id: 3,
            title: "Tog'lar va sarguzashtlar",
            description: "Sarguzashtlar tog'lar bilan boshlanadi!",
            image: hero3,
        },
    ];
    return (
        <div className="hero">
            <div className="carouselContainer">
                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    effect="fade"
                    navigation
                    loop
                    className="swiperItem"
                >
                    <div>
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} >
                                <div className="slide">
                                    <img src={slide.image} alt={slide.title} style={{ width: "100vw", height: "100vh", objectFit: "cover", display:"block" }} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>
            </div>
        </div>
    );
};

export default Hero;