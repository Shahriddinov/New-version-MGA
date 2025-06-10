import React, {useEffect, useState} from "react";
import {MdEmail} from "react-icons/md";
import {FaPhoneVolume, FaFacebookF, FaYoutube, FaInstagram, FaTelegram, FaBars} from "react-icons/fa6";
import logo from "../../../assests/images/2.png";
import {FaTimes} from "react-icons/fa";

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
        setMenuOpen(false); // mobil menyuni yopish
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="main-header header-style-two">
                <div className="header-top">
                    <div className="auto-container clearfix">
                        <div className="top-right">
                            <ul className="info clearfix">
                                <li className="email">
                                    <a className="hover" href="#">
                                        <MdEmail className="icon"/>
                                        companymail@gmailcom
                                    </a>
                                </li>
                                <li className="phone">
                                    <a href="tel:+998901234567" className="hover">
                                        <FaPhoneVolume className="icon"/>
                                        +99890 123 45 67
                                    </a>
                                </li>
                            </ul>
                            <div className="social-links clearfix">
                                <a href="#" title="Facebook" className="social-links-link">
                                    <FaFacebookF className="iconHover"/>
                                </a>
                                <a href="#" title="You tube" className="social-links-link">
                                    <FaYoutube className="iconHover"/>
                                </a>
                                <a href="#" title="Instagram" className="social-links-link">
                                    <FaInstagram className="iconHover"/>
                                </a>
                                <a href="#" title="Telegram" className="social-links-link">
                                    <FaTelegram className="iconHover"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`header-lower ${isFixed ? "fixed" : ""}`}>
                <div className="auto-container">
                    <div className="lower-outer">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} alt="Logo" className="logos"/>
                            </a>
                        </div>

                        <div className="main-menu actives"
                            // className={`main-menu ${menuOpen ? "open" : ""}`}
                        >
                            <ul className={menuOpen ? "navigation actives": "navigation"}>
                                <li className="menu-item">
                                    <a
                                        href="/"
                                        className={`items ${activeIndex === 0 ? "active" : ""}`}
                                        onClick={() => handleMenuItemClick(0)}
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li className="menu-item">

                                    <a
                                        href="/about"
                                        className={`items ${activeIndex === 1 ? "active" : ""}`}
                                        onClick={() => handleMenuItemClick(1)}
                                    >
                                        ABOUT US
                                    </a>
                                </li>
                                <li className="menu-item">

                                    <a
                                        href="/serves"
                                        className={`items ${activeIndex === 2 ? "active" : ""}`}
                                        onClick={() => handleMenuItemClick(2)}
                                    >
                                        SERVES
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="/gallery"
                                        className={`items ${activeIndex === 3 ? "active" : ""}`}
                                        onClick={() => handleMenuItemClick(3)}
                                    >
                                        GALLERY
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        href="/contact"
                                        className={`items ${activeIndex === 4 ? "active" : ""}`}
                                        onClick={() => handleMenuItemClick(4)}
                                    >
                                        CONTACT
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="mobileIcon" onClick={toggleMenu}>
                            {menuOpen ? <FaTimes/> : <FaBars/>}
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;
