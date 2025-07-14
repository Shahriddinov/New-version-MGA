import React, { useState } from "react";
import "./contact.scss";
import PageHero from "../../components/pageHero";
import contactImg from "../../assests/images/contact-page-shape-1.png";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { sendContact } from "../../reduxToolkit/messageSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContact(form))
      .unwrap()
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  const title = t("contact");

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
                  <form className="validation" noValidate onSubmit={handleSubmit}>
                    <div className="form-group">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="commet-box"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className="commet-box"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="commet-box"
                            value={form.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="commet-box"
                            value={form.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="message">
                      <textarea
                        name="message"
                        className="textarea"
                        placeholder="Write a message"
                        value={form.message}
                        onChange={handleChange}
                        required
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

            {/* Right contact info */}
            <div className="col-xl-4">
              <div className="col-xl-4_cont-right">
                <div className="col-xl-4_cont-right_details">
                  <ul className="col-xl-4_cont-right_details_list">
                    <li>
                      <span>Call anytime</span>
                      <p className="col-xl-4_cont-right_details_list_phone">
                        <a href="tel:+998901234567">+998901234567</a>
                      </p>
                    </li>
                    <li>
                      <span>Send Email</span>
                      <p className="col-xl-4_cont-right_details_list_phone">
                        <a href="mailto:info@outdoorfactory.com">
                          info@outdoorfactory.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <span>TASHKENT</span>
                      <p className="col-xl-4_cont-right_details_list_phone">
                        Ташкент - Узбекистан, улица Укчи, 3-А дом
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <iframe
          className="contact-map-iframe"
          src="https://yandex.uz/map-widget/v1/?ll=69.322203%2C41.303646&mode=whatshere&whatshere%5Bpoint%5D=69.321825%2C41.303496&whatshere%5Bzoom%5D=16&z=17.2"
          width="100%"
          height="100%"
          title="Our location"
          allowFullScreen
          style={{ position: "relative" }}
        ></iframe>
      </div>

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
