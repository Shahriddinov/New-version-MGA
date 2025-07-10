import React from "react";
import "./contact.scss";
import PageHero from "../../components/pageHero";
import contactImg from "../../assests/images/contact-page-shape-1.png";


const Contact = () => {
  const title = "Contact Us";
  return (
    <div className="contact">
      <PageHero title={title} />
      <div className="contact-page">
        <div className="contact-page-shape-1 float-bob-x">
          <img src={contactImg} alt="contact img" />
        </div>
        <div className="container">
          <div className="contact-row">
            <div className="col-xl-8">
              <div className="col-xl-8_cont-left">
                <div className="col-xl-8_cont-left_cont-title">
                  <span className="col-xl-8_cont-left_cont-title_taglines">
                    Contact Us
                  </span>
                  <h2 className="col-xl-8_cont-left_cont-title_heading">
                    Feel Free to Write
                  </h2>
                  <div className="title-line"></div>
                </div>
                <div className="col-xl-8_cont-left_form">
                  <form className="validation" noValidate="noValidate">
                    <div className="form-group">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="name"
                            placeholder="Your Name"
                            name="name"
                            className="commet-box"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                            className="commet-box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="phone"
                            placeholder="Phone Number"
                            name="phone"
                            className="commet-box"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            placeholder="Subject"
                            name="text"
                            className="commet-box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="message">
                      <textarea
                        name=""
                        id=""
                        className="textarea"
                        placeholder="Write  a message"
                      ></textarea>
                    </div>
                    <div className="btn-box">
                      <button type="submit" className="form-btn">
                        Send a Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="col-xl-4_cont-right">
                <div className="col-xl-4_cont-right_details">
                  <ul className="col-xl-4_cont-right_details_list">
                    <li>
                        <span>Call anytime</span>
                        <p className="col-xl-4_cont-right_details_list_phone">
                            <a href="tel:+998901234567" className="col-xl-4_cont-right_details_list_phone">+998901234567</a>
                        </p>
                    </li>
                    <li>
                        <span>Send Email</span>
                        <p className="col-xl-4_cont-right_details_list_phone">
                            <a href="tel:+998901234567" className="col-xl-4_cont-right_details_list_phone">+info@outdoorfactory.com</a>
                        </p>
                    </li>
                    <li>
                        <span>Visit Office</span>
                        <p className="col-xl-4_cont-right_details_list_phone">
                            <a href="tel:+998901234567" className="col-xl-4_cont-right_details_list_phone">Uniq Office, Ayazağa Cad. 4/B 34396 Sariyer, ISTANBUL</a>
                        </p>
                    </li>
                    <li>
                        <span>USA</span>
                        <p className="col-xl-4_cont-right_details_list_phone">
                            <a href="tel:+998901234567" className="col-xl-4_cont-right_details_list_phone">4 Deveaux Ct S.Barrington, Il 60010</a>
                        </p>
                    </li>
                    <li>
                        <span>MILAN</span>
                        <p className="col-xl-4_cont-right_details_list_phone">
                            <a href="tel:+998901234567" className="col-xl-4_cont-right_details_list_phone">Via Sant'Orsola 8/A Milan, Lombardy 20148, IT</a>
                        </p>
                    </li>
                    <li>
                        <span>TASHKENT</span>
                        <p className="col-xl-4_cont-right_details_list_phone">
                            <a href="tel:+998901234567" className="col-xl-4_cont-right_details_list_phone">Ташкент -Узбекистан , Шайхантахурсий район, улица Укчи, 3-А дом</a>
                        </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <a
          href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Ташкент
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/?ll=69.322203%2C41.303646&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.321825%2C41.303496&whatshere%5Bzoom%5D=16&z=17.2"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Улица Махтумкули, 3/4 — Яндекс Карты
        </a>
        <iframe
          className="contact-map-iframe"
          src="https://yandex.uz/map-widget/v1/?ll=69.322203%2C41.303646&mode=whatshere&whatshere%5Bpoint%5D=69.321825%2C41.303496&whatshere%5Bzoom%5D=16&z=17.2"
          width="100%"
          height="100%"
         
          allowFullScreen="true"
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
