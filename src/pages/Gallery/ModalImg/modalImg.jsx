import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaTimes } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./modalImg.scss";
import img1 from "../../../assests/images/gallery/pro1.jpg";
import img2 from "../../../assests/images/gallery/pro2.png"; // 3-chi rasm uchun
import img3 from "../../../assests/images/gallery/pro3.png";

const ModalCarousel = ({ onClose }) => {
  return (
    <div className="modal-gallery">
      <div className="modal-gallery__content">
        <button className="modal-gallery__close" onClick={onClose}>
          <FaTimes />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="custom-swiper"
        >
          <SwiperSlide><img src={img1} alt="slide1" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="slide2" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="slide3" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ModalCarousel;
