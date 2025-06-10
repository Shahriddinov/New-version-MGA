import React, {useEffect} from 'react';
import "./partner.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from "swiper/modules";
import akfa from "../../assests/images/partner/akfa.jpg"
import Artel from "../../assests/images/partner/artel.jpg";
import avant from "../../assests/images/partner/avant.jpg";
import koch from "../../assests/images/partner/koch.jpg";
import Cola from "../../assests/images/partner/coca cola.jpg";
import crowne from "../../assests/images/partner/crowne plaza.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Partner = () => {
    const datas = [
        {
            id: 0,
            images:akfa
        },
        {
            id: 1,
            images:Artel
        },
        {
            id: 2,
            images:koch
        },
        {
            id: 4,
            images:Cola
        },
        {
            id: 5,
            images:crowne
        },
        {
            id: 6,
            images:avant
        },
    ]
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (

           <div className="partner">
               <div className="auto-container">
                   <Swiper

                       slidesPerView={7} // Default number of slides to show
                       spaceBetween={30} // Default space between slides
                       modules={[Pagination, Autoplay]}
                       loop={true}
                       autoplay={{
                           delay: 2000,
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
                               slidesPerView: 5,
                               spaceBetween: 30
                           },
                           // When window width is >= 1440px
                           1440: {
                               slidesPerView: 4,
                               spaceBetween: 30
                           }
                       }}
                   >
                       {
                           datas.map((item, index) => (
                               <SwiperSlide
                                   key={index}
                                   // data-aos="zoom-in"
                                   className="partner_cc">
                                   <a href="#" target="_blank" rel="noopener noreferrer" >
                                       <img className="partner_cc_sliderImg"
                                            src={item.images}
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
