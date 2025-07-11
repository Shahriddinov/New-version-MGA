import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./hero.scss";
import heroVideo from "../../assests/images/heroVideo.mp4";
const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // Swiper instansiyani olish uchun

  const slides = [{ id: 1, image: heroVideo }];

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="hero">
      <div className="sliderWrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Swiper instance saqlab qo‘yiladi
          }}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="slide">
              <div className="container">
                <video
                  src={slide.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="bag"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </div>
  );
};

export default Hero;
