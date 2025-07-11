import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./partner.scss";
import brand1 from "../../assests/images/partner/akfa.jpg";
import brand2 from "../../assests/images/partner/artel.jpg";
import brand3 from "../../assests/images/partner/avant.jpg";
import brand4 from "../../assests/images/partner/coca cola.jpg";
import brand5 from "../../assests/images/partner/crowne plaza.jpg";
import brand6 from "../../assests/images/partner/infinbank.jpg";
import brand7 from "../../assests/images/partner/koch.jpg";

export default function Partner() {
    const brandImages = [
  brand1, brand2, brand3, brand4,
  brand5, brand7, brand6
];
  return (
    <section className='brand-one'>
        <div className='container'>
            <div className='brand-one_inner-partner'>
                <div className='rows'>
                    <div className='brand-one_inner-partner_col-3'>
                        <div className='brand-one_inner-partner_col-3_titles'>
                            <h3>REFERENCES</h3>
                        </div>
                    </div>
                    <div className='brand-one_inner-partner_col-9'>
                        <div className='brand-one_inner-partner_col-9_main-content'>
                            <Swiper
        modules={[Autoplay]}
        spaceBetween={100}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          991: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
        }}
        className="brand-swiper"
      >
        {brandImages.map((img, index) => (
          <SwiperSlide key={index}>
           <div className='imgH'> <img src={img} alt={`Brand ${index + 1}`} /></div>
          </SwiperSlide>
        ))}
      </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
