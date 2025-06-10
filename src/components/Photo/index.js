import React, {useState} from 'react';
import "./photo.scss";
import three from "../../assests/images/gallery/3.jpg";

const Photo = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleImageClick = () => {
        setIsFullScreen(true);
    };

    const handleFullScreenClose = () => {
        setIsFullScreen(false);
    };
    return (
        <>
            <div className="images-container">
                <div className="heigh clearfix">
                    <div className="image-box">
                        <div className="gallery-container">
                            <div className="image-wrapper" onClick={handleImageClick}>
                                <img src={three} alt="Gallery" className="gallery-image"/>
                                <div className="overlay">
                                    <div className="plus-icon">+</div>
                                </div>
                                <div className="border-wrapper"></div>
                            </div>

                            {isFullScreen && (
                                <div className="fullscreen" onClick={handleFullScreenClose}>
                                    <img src={three} alt="Fullscreen"/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="image-box">
                        <div className="gallery-container">
                            <div className="image-wrapper" onClick={handleImageClick}>
                                <img src={three} alt="Gallery" className="gallery-image"/>
                                <div className="overlay">
                                    <div className="plus-icon">+</div>
                                </div>
                                <div className="border-wrapper"></div>
                            </div>

                            {isFullScreen && (
                                <div className="fullscreen" onClick={handleFullScreenClose}>
                                    <img src={three} alt="Fullscreen"/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="image-box">
                        <div className="gallery-container">
                            <div className="image-wrapper" onClick={handleImageClick}>
                                <img src={three} alt="Gallery" className="gallery-image"/>
                                <div className="overlay">
                                    <div className="plus-icon">+</div>
                                </div>
                                <div className="border-wrapper"></div>
                            </div>

                            {isFullScreen && (
                                <div className="fullscreen" onClick={handleFullScreenClose}>
                                    <img src={three} alt="Fullscreen"/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="image-box">
                        <div className="gallery-container">
                            <div className="image-wrapper" onClick={handleImageClick}>
                                <img src={three} alt="Gallery" className="gallery-image"/>
                                <div className="overlay">
                                    <div className="plus-icon">+</div>
                                </div>
                                <div className="border-wrapper"></div>
                            </div>

                            {isFullScreen && (
                                <div className="fullscreen" onClick={handleFullScreenClose}>
                                    <img src={three} alt="Fullscreen"/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="image-box">
                        <div className="gallery-container">
                            <div className="image-wrapper" onClick={handleImageClick}>
                                <img src={three} alt="Gallery" className="gallery-image"/>
                                <div className="overlay">
                                    <div className="plus-icon">+</div>
                                </div>
                                <div className="border-wrapper"></div>
                            </div>

                            {isFullScreen && (
                                <div className="fullscreen" onClick={handleFullScreenClose}>
                                    <img src={three} alt="Fullscreen"/>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="image-box">
                        <div className="gallery-container">
                            <div className="image-wrapper" onClick={handleImageClick}>
                                <img src={three} alt="Gallery" className="gallery-image"/>
                                <div className="overlay">
                                    <div className="plus-icon">+</div>
                                </div>
                                <div className="border-wrapper"></div>
                            </div>

                            {isFullScreen && (
                                <div className="fullscreen" onClick={handleFullScreenClose}>
                                    <img src={three} alt="Fullscreen"/>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="image-box">
                        <div className="gallery-container">
                            <div className="image-wrapper" onClick={handleImageClick}>
                                <img src={three} alt="Gallery" className="gallery-image"/>
                                <div className="overlay">
                                    <div className="plus-icon">+</div>
                                </div>
                                <div className="border-wrapper"></div>
                            </div>

                            {isFullScreen && (
                                <div className="fullscreen" onClick={handleFullScreenClose}>
                                    <img src={three} alt="Fullscreen"/>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="image-box">
                        <div className="gallery-container">
                            <div className="image-wrapper" onClick={handleImageClick}>
                                <img src={three} alt="Gallery" className="gallery-image"/>
                                <div className="overlay">
                                    <div className="plus-icon">+</div>
                                </div>
                                <div className="border-wrapper"></div>
                            </div>

                            {isFullScreen && (
                                <div className="fullscreen" onClick={handleFullScreenClose}>
                                    <img src={three} alt="Fullscreen"/>
                                </div>
                            )}
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Photo;