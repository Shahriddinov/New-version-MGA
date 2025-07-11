import React, { useEffect } from "react";
import "./pession.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Pession() {
    const { t } = useTranslation();
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true, // faqat bir marta animatsiya bajariladi
      offset: 120,
    });
  }, []);
  return (
    <div className="pession">
      <div className="container">
        <div className="pession_rows">
          <div className="pession_rows_lefts">
            <div className="col-2">
              <div
                className="m"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              ></div>
            </div>
            <div className="col-2">
              <div
                className="g"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              ></div>
            </div>
            <div className="col-2">
              <div
                className="a"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
              ></div>
            </div>
          </div>
          <div className="pession_rows_rights">
            <section className="aboutCompany" data-aos="zoom-in"
               >
              <div className="aboutCompany__content" data-aos="fade-up">
                <h2 className="aboutCompany__title">
                  ÜZERİNİZDEKİ <span className="highlight">BASKIYI</span>{" "}
                  ALIRIZ!
                </h2>
                <p className="aboutCompany__text">
                  {t("desAbout")}
                </p>
                <button className="aboutCompany__btn">TÜMÜNÜ OKU</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
