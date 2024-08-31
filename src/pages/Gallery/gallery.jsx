import React, { useEffect, useState } from 'react';
import "./gallery.scss";
import { getGallery } from "../../reduxToolkit/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import Aos from 'aos';
import 'aos/dist/aos.css';
import GalleryImg from "../../assests/images/gallery.png";
import { baseUrlImg } from "../../serves/api/utilis";
import { Modal, ModalContent } from "./ModalImg/modalImg";
import LoadingPage from "../../components/Loading/LoadingPage";

const Gallery = () => {
    const lan = useSelector((state) => state.language.language);
    const dispatch = useDispatch();
    const galleryData = useSelector((state) => state.gallerySlice.galleryData);
    const loading = useSelector((state) => state.gallerySlice.loading);
    const [isOpen, setIsopen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    useEffect(() => {
        dispatch(getGallery());
    }, [dispatch, lan]);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsopen(true);
    };

    const closeModal = () => {
        setIsopen(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
    };

    if (loading) {
        return <LoadingPage />;
    }

    const handleImageError = (e) => {
        e.target.src = GalleryImg; // Fallback image in case of error
    };

    return (
        <div className="gallery">
            <div className="container">
                <div className="gallery_headG">
                    <img src={GalleryImg} width="100%" height="100%" alt="Default Gallery" loading="lazy" />
                </div>

                <div className="gallery_Items">
                    {galleryData.map((item, index) => (
                        <div key={index} className="gallery_Items_imgCard" onClick={() => openModal(index)}>
                            <img
                                src={`${baseUrlImg}/${item.photo}`}
                                alt={item.alt || "Gallery Image"}
                                onError={handleImageError} // Fallback on error
                                loading="lazy" // Lazy loading
                                 />
                        </div>
                    ))}
                </div>
            </div>
            {isOpen && (
                <Modal onOpen={closeModal}>
                    <ModalContent onClose={closeModal}>
                        <span style={{ cursor: "pointer", fontSize: "40px", color: "#f1f1f1" }} onClick={handlePrev}>&lt;</span>
                        <img
                            src={`${baseUrlImg}/${galleryData[currentIndex].photo}`}
                            alt={galleryData[currentIndex].alt || "Gallery Image"}
                            onError={handleImageError}
                            style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                        />
                        <span style={{ cursor: "pointer", fontSize: "40px", color: "#f1f1f1" }} onClick={handleNext}>&gt;</span>
                    </ModalContent>
                </Modal>
            )}
        </div>
    );
};

export default Gallery;
