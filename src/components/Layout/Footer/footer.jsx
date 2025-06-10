import React, {useEffect} from "react";
import logo from "../../../assests/images/2.png"
import {MdOutlineEmail} from "react-icons/md";
import {GrSend} from "react-icons/gr";
import {FaPhoneVolume, FaFacebookF, FaYoutube, FaInstagram, FaTelegram, FaBars} from "react-icons/fa6";

const Footer = () => {
    return <div className="footer">
        <div className="top-footer">
            <div className="auto-container">
                <div className="row">
                    <div className="col-3">
                        <div className="widget">
                            <a href="/">
                                <img className="footLog" src={logo} alt="Footer Logo"/>
                            </a>
                        </div>
                        <div className="textWidget">
                            © Copyrights 2025 Mga Reklama <br/>
                            All rights reserved.
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="widget-title">Userful Links</div>
                        <div className="menuFooter">
                            <ul className="two-footer">
                                <li className="two-item">
                                    <a className="two-item" href="/">Home</a>
                                </li>
                                <li className="two-item">
                                    <a className="two-item" href="/about">About</a>
                                </li>
                                <li className="two-item">
                                    <a className="two-item" href="/serves">Serves</a>
                                </li>
                                <li className="two-item">
                                    <a className="two-item" href="/gallery">Gallery</a>
                                </li>
                                <li className="two-item">
                                    <a className="two-item" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="widget-title">LEGAL</div>
                        <div className="menuFooter">
                            <ul className="two-footer">
                                <li className="two-item">
                                    <a className="two-item" href="#">Terms & Conditions</a>
                                </li>
                                <li className="two-item">
                                    <a className="two-item" href="#">Privacy Policy</a>
                                </li>
                                <li className="two-item">
                                    <a className="two-item" href="#">Terms of Sales</a>
                                </li>
                                <li className="two-item">
                                    <a className="two-item" href="#">Whitepaper</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="widget-title">SUBSCRIBE</div>
                        <div className="menuFooter">
                            <div className="two-footer">
                                <div className="subscribe-area">
                                    <div className="form-group">
                                        <input type="email" name="Email" className="form-control" placeholder="Email"/>
                                        <MdOutlineEmail className="emailIcon"/>
                                        <button type="submit" className="sub-btn"><GrSend /></button>
                                    </div>
                                </div>
                                <ul className="socials">
                                    <li className="footItem">
                                        <a className="footItem" href="#"><FaFacebookF/></a>
                                    </li>
                                    <li className="footItem">
                                        <a className="footItem" href="#"><FaYoutube/></a>
                                    </li>
                                    <li className="footItem">
                                        <a className="footItem" href="#"><FaInstagram/></a>
                                    </li>
                                    <li className="footItem">
                                        <a className="footItem" href="#"><FaTelegram/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Footer;
