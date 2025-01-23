import React, { useContext, useState, useEffect, version } from 'react';
import Logos from "../../../assests/images/Log.png";
import Logo from "../../../assests/images/2.png";
import { MdOutlineLightMode } from "react-icons/md";
import Language from "../../Language/language";
import { useTranslation } from 'react-i18next';
import { GrayContext } from "../../../context/GrayContext";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const { grayScale } = useContext(GrayContext);
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`head ${isScrolled ? 'head--scrolled' : ''}`}>
            <div className="container">
                <div className="head__header">
                    <div className="head__header__logo">
                        <img className="head__header__logo__img" src={isDarkMode ? Logo : Logos} alt="logo" />
                    </div>
                    <div
                        className={`head__header__burger ${isOpen ? 'head__header__burger--open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <FaBars size={24} color="#333" />
                    </div>
                    <nav className={`head__header__nav ${isOpen ? 'head__header__nav--open' : ''}`}>
                        <ul className="head__header__nav-list">
                            <li className="head__header__nav-item"><a href="/" className="head__header__nav-link">{t("main")}</a></li>
                            <li className="head__header__nav-item"><a href="/about" className="head__header__nav-link">{t("about")}</a></li>
                            <li className="head__header__nav-item"><a href="/gallery" className="head__header__nav-link">{t("gallery")}</a></li>
                            <li className="head__header__nav-item"><a href="/contact" className="head__header__nav-link">{t("contact")}</a></li>
                            <li className="head__header__nav-item">
                                <button className="head__header__dark-mode-toggle" onClick={() => grayScale()}>
                                    <MdOutlineLightMode fontSize="18px" />
                                </button>
                            </li>
                            <li className="head__header__nav-item">
                                <Language />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
