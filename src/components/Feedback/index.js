import React from 'react';
import "./style.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import one from "../../assests/images/testi-image-1.jpg"
import two from "../../assests/images/testi-image-3.jpg"

const Feedback = () => {
    const testimonials = [
        {
            name: 'MARK PINE',
            title: 'Co- Founder at Houzz',
            quote: 'We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.',
            image: one,
        },
        {
            name: 'MISSAR HUB',
            title: 'Co- Founder at Houzz',
            quote: 'We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.',
            image: two,
        },
        {
            name: 'JACK WILLSHERE',
            title: 'Co- Founder at Houzz',
            quote: 'We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.',
            image: '/images/person3.jpg',
        },
        {
            name: 'JACK WILLSHERE',
            title: 'Co- Founder at Houzz',
            quote: 'We know that sometimes it’s difficult to get to the phone if you are in the middle of something and you don’t want to miss.',
            image: '/images/person3.jpg',
        },
    ];
    return (
        <div className="testimonials">
            <div className="auto-container">
                <div className="secTitle">
                    <h2 className="what">WHAT CLIENT SAY </h2>
                    <div className="text">
                        Real Estate agents are Property consisting of land and the buildings on it, along with its seds
                        naturals resources such seds as crops, minerals, or water
                    </div>
                </div>
                <div className="testimonial-carousel">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index} className="slides">
                               <div className="absalut">
                                   <div className="testimonial-card">
                                       <figure className="card_img">
                                           <img src={t.image} alt={t.name} className="avatar"/>

                                       </figure>
                                       <h3 className="names">{t.name}</h3>
                                       <p  className="designation">{t.title}</p>
                                       <p className="quote">“{t.quote}”</p>
                                   </div>
                               </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Feedback;