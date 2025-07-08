import React, { useEffect } from "react";
import logo from "../../../assests/images/white-logo.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

import { GrSend } from "react-icons/gr";
import {

  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTelegram,
  
  FaPhoneVolume
} from "react-icons/fa6";
import { MdOutlineNavigateNext } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-bg"></div>
      <div className="site-footer__top">
        <div className="container">
          <div className="rows">
            <div className="site-footer__top_col3 fadeInUp animated">
              <div className="footer-widget">
                <div className="footer-widget__logo">
                  <a href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className="footer-wigdet_text-box">
                  <p className="footer-widget_text-box_des">
                    Outdoor Factory, founded in 2010, is a design and build
                    company specializing in making dreams come true.
                  </p>
                </div>
                <div className="footer-widget__social">
                    <a href="/" className="fa-you">
                    < FaYoutube/>
                    </a>
                    <a href="/" className="fa-you">
                    < FaFacebookF/>
                    </a>
                    <a href="/" className="fa-you">
                    <FaInstagram/>
                    </a>
                    <a href="/" className="fa-you">
                    <FaTelegram/>
                    </a>
                </div>
              </div>
            </div>
            <div className="site-footer__top_col3 fadeInUp animated">
                <div className="footer-widget">
                    <div className="footer-widget_explore clearfix">
                        <h3 className="footer-widget_explore__exTitle">
                            Quick Menu
                        </h3>
                        <ul className="footer-widget_explore-list clearfix">
                            <li>
                                <a href="/about" className="lists"> <MdOutlineNavigateNext/> About Us</a>
                            </li>
                            <li>
                                <a href="/about" className="lists"> <MdOutlineNavigateNext/> Services</a>
                            </li>
                            <li>
                                <a href="/about" className="lists"> <MdOutlineNavigateNext/> Gallery</a>
                            </li>
                            <li>
                                <a href="/about" className="lists"> <MdOutlineNavigateNext/> About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="site-footer__top_col3 fadeInUp animated">
                <div className="footer-widget">
                    <div className="footer-widget_explore clearfix">
                        <h3 className="footer-widget_explore__exTitle">
                            Our Work
                        </h3>
                        <ul className="footer-widget_explore-list clearfix">
                            <li>
                                <a href="/about" className="lists"> <MdOutlineNavigateNext/> Theme Parks</a>
                            </li>
                            <li>
                                <a href="/about" className="lists"> <MdOutlineNavigateNext/>Museums</a>
                            </li>
                            <li>
                                <a href="/about" className="lists"> <MdOutlineNavigateNext/>City Architecture</a>
                            </li>
                            <li>
                                <a href="/about" className="lists"> <MdOutlineNavigateNext/>Digital Experience</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="site-footer__top_col3 fadeInUp animated">
                <div className="footer-widget">
                    <div className="footer-widget_explore clearfix">
                        <h3 className="footer-widget_explore__exTitle">
                            Our Work
                        </h3>
                        <ul className="footer-widget_explore-list clearfix">
                            <li className="foot-icon">
                               <div className="call-icon">
                                <FaPhoneVolume className="phone-call"/>
                               </div>
                               <div className="call-text">
                                <h5 className="call-text-h5">Call anytime</h5>
                                <p className="call-text-pp">
                                  <a className="call-text-aa" href="tel:+99801234567">+998901234567</a>
                                </p>
                               </div>
                            </li>
                           <li className="foot-icon">
                               <div className="call-icon">
                                <MdOutlineEmail className="phone-call"/>
                               </div>
                               <div className="call-text">
                                <h5 className="call-text-h5">Send email</h5>
                                <p className="call-text-pp">
                                  <a className="call-text-aa" href="mailto:info@outdoorfactory.com">info@outdoor.com</a>
                                </p>
                               </div>
                            </li>
                           <li className="foot-icon">
                               <div className="call-icon">
                                <GrMapLocation className="phone-call"/>
                               </div>
                               <div className="call-text">
                                <h5 className="call-text-h5">Uniq Office, Ayazağa Cad</h5>
                                <p className="call-text-pp">
                                  <a className="call-text-aa" href="mailto:info@outdoorfactory.com">Sariyer, ISTANBUL</a>
                                </p>
                               </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="site-footer__bottom_binner">
            <div className="bText">© 2025 Mga Reklama </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
