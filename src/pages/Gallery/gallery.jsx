import React, { useState } from "react";
import "./gallery.scss";
import { FaPlus } from "react-icons/fa";

import PageHero from "../../components/pageHero";
import gallery1 from "../../assests/images/gallery/pro1.jpg";
import gallery2 from "../../assests/images/gallery/pro2.png";
import gallery3 from "../../assests/images/gallery/pro3.png";
import gallery4 from "../../assests/images/gallery/pro4.jpg";
import gallery5 from "../../assests/images/gallery/pro5.jpg";
import gallery6 from "../../assests/images/gallery/pro6.jpg";
import ModalCarousel from "./ModalImg/modalImg";
import NewLetter from "../../components/newLetter";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const title = "Gallery";

  // Rasm ma'lumotlari
  const galleryImages = [
    { id: 1, src: gallery1, alt: "gallery one" },
    { id: 2, src: gallery2, alt: "gallery two" },
    { id: 3, src: gallery3, alt: "gallery three" },
    { id: 4, src: gallery4, alt: "gallery four" },
    { id: 5, src: gallery5, alt: "gallery five" },
    { id: 6, src: gallery6, alt: "gallery six" },
  ];

  return (
    <div className="gallery">
      <PageHero title={title} />

      <section className="similar-project">
        <div className="container">
          <div className="rows">
            {galleryImages.map((image, index) => (
              <div className="col-xl-4" key={image.id}>
                <div
                  className="col-xl-4__single"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="col-xl-4__imgs">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="gallery__image"
                    />
                    {hoveredIndex === index && (
                      <div className="col-xl-4__iconGallery">
                        <button
                          className="img-group"
                          onClick={() => setShowModal(true)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <iframe
            width="100%"
            height="658"
            src="https://www.youtube-nocookie.com/embed/55_3tE4tNno?si=0QoqzGLYnPJqg8bE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* MODAL */}
      {showModal && <ModalCarousel onClose={() => setShowModal(false)} />}

      <NewLetter />
    </div>
  );
};

export default Gallery;
