import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import Header from "./Header/header";
import { FaAngleUp } from "react-icons/fa";
import Footer from "./Footer/footer";

const Layout = (props) => {
    const { children } = props;

    const { pathname } = useLocation();
    const [text, setText] = useState("");
    const [speaker, setSpeaker] = useState(false);

    const changeSpeakSwitcher = (value) => {
        setSpeaker(value);
    };
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        document.onmouseup = () => {
            if (speaker && text !== window.getSelection().toString()) {
                window.responsiveVoice.speak(
                    window.getSelection().toString(),
                    "Russian Female"
                );
                setText(window.getSelection().toString());
            }
        };
    }, [speaker]);

    return (
        <div className={pathname === "/" ? "page-wrapper1" : "page-wrapper2"}>
            <>
                <Header speaker={speaker} changeSpeakSwitcher={changeSpeakSwitcher} />
                <div className="page-content">{children}</div>{" "}
                {showTopBtn && (
                    <button className="scrollToHome " onClick={goToTop}>
                        <FaAngleUp color="white" />
                    </button>
                )}{" "}
                <Footer />
            </>
        </div>
    );
};

export default Layout;