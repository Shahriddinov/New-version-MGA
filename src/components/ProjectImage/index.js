import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import img1 from "../../assests/images/gallery/project-2-thumb-3.png";
import img2 from "../../assests/images/gallery/project-1-thumb-1.jpg";
// import img3 from "../../assests/images/gallery/project-2-thumb-2.png";

import thumb1 from "../../assests/images/gallery/project-1-1.png";
import thumb2 from "../../assests/images/gallery/project-1-2.png";
import thumb3 from "../../assests/images/gallery/project-1-3.png";

import "./style.scss";

const slides = [
  {
    image: img1,
    title: "REGNUM CARYA",
    text: "We specialize in designing, manufacturing, and installing creative attraction spaces...",
  },
  {
    image: img2,
    title: "ANIMAL FARM",
    text: "Our Animal Farm project offers a special experience...",
  },
  {
    image: img2,
    title: "KIDS TOWN",
    text: "Children will have the opportunity to immerse themselves in various roles...",
  },
];

const thumbs = [thumb1, thumb2, thumb3];

export default function ProductImage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="product-image">
      <div className="container">
        <div className="section-title">
          <span className="section-title__tagline">Successful Project</span>
          <h2 className="section-title__title">
            Keep your Eye on Our <br /> Latest Projects
          </h2>
          <span className="section-title__line"></span>
        </div>

        <div className="product-image_innerBox">
          <div className="product-image_innerBox__main-content">
            <Swiper
              modules={[Navigation, Thumbs, Autoplay]}
              spaceBetween={72}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={{
                prevEl: ".product-image_innerBox__nav .swiper-button-prev",
                nextEl: ".product-image_innerBox__nav .swiper-button-next",
              }}
              className="main-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="rows">
                    <div className="col-lg-6">
                      <div className="product-image_innerBox__left">
                        <div className="product-image_innerBox__img">
                          <img src={slide.image} alt={slide.title} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="product-image_innerBox__right">
                        <div className="product-image_innerBox__content-box">
                          <div className="product-image_innerBox__content">
                            <h4 className="product-image_innerBox__title">
                              {slide.title}
                            </h4>
                            <p className="product-image_innerBox__text">
                              {slide.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="product-image_innerBox__thumb-box">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              spaceBetween={16}
              watchSlidesProgress
              modules={[Thumbs]}
              loop={true}
              className="thumb-swiper"
            >
              {thumbs.map((thumb, index) => (
                <SwiperSlide key={index}>
                  <div className="product-image_innerBox__img-holder">
                    <img src={thumb} alt={`Thumb ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="product-image_innerBox__nav">
              <div className="swiper-button-prev">
                <GrFormPrevious />
              </div>
              <div className="swiper-button-next">
                <GrFormNext />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
