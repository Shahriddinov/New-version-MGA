import React, { useEffect, Component } from "react";
import "./homeServies.scss";
import { FaPlus } from "react-icons/fa";
import Aos from "aos";

import servies1 from "../../assests/images/servies/ARXITEKTURA.png";
import servies2 from "../../assests/images/servies/CNC.png";
import servies3 from "../../assests/images/servies/LASER.png";
import servies4 from "../../assests/images/servies/POLIGRAFYA.png";
import servies5 from "../../assests/images/servies/POLIYGRAFYA.png";
import servies6 from "../../assests/images/servies/TABLICHKA.png";
import servies7 from "../../assests/images/servies/UV.png";
import servies8 from "../../assests/images/servies/YOLLANTIRMA.png";
import hoverImg1 from "../../assests/images/s/ARXITEKTURA.png";
import hoverImg2 from "../../assests/images/s/CNC.png";
import hoverImg3 from "../../assests/images/s/LASER.png";
import hoverImg4 from "../../assests/images/s/POLIGRAFYA.png";
import hoverImg5 from "../../assests/images/s/POLIYGRAFYA.png";
import hoverImg6 from "../../assests/images/s/TABLICHKA.png";
import hoverImg7 from "../../assests/images/s/UV.png";
import hoverImg8 from "../../assests/images/s/YOLLANTIRMA.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function HomeServices() {
    const { t } = useTranslation();
  
  const servicesData = [
    {
      id: 1,
      image: servies2,
      hoverImage: hoverImg2,
      title: "CNC",
    },
    {
      id: 2,
      image: servies3,
      hoverImage: hoverImg3,
      title: "LASER",
    },
    {
      id: 3,
      image: servies4,
      hoverImage: hoverImg4,
      title: "POLIGRAFYA",
    },
    {
      id: 4,
      image: servies5,
      hoverImage: hoverImg5,
      title: "POLIYGRAFYA",
    },
    {
      id: 5,
      image: servies6,
      hoverImage: hoverImg6,
      title: "TABLICHKA",
    },
    {
      id: 6,
      image: servies7,
      hoverImage: hoverImg7,
      title: "UV",
    },
    {
      id: 7,
      image: servies8,
      hoverImage: hoverImg8,
      title: "YOLLANTIRMA",
    },
    {
      id: 8,
      image: servies1,
      hoverImage: hoverImg1,
      title: "ARXITEKTURA",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="services">
      <div className="services_iServices">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          {t("servies")}
        </div>
      </div>

      <div className="services_show"></div>
      <div className="services_bad">
        <div className="container">
          <div className="services_bad_double">
            {servicesData.map((item, index) => (
              <motion.a
                whileTap={{ scale: 0.8 }}
                href="/gallery"
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
                className="services_bad_double_serviceAbout"
                key={index}
                initial={{ opacity: 0, y: 50 }} // Initial state before scroll
                animate={{ opacity: 1, y: 0 }} // Final state after scroll
                transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
                viewport={{ once: true }} // Ensure animation occurs only once
                whileHover={{ scale: 1.05 }} // Scale effect on hover
                // whileTap={{ scale: 0.95 }} // Scale effect on tap
              >
                <div className="zoom"></div>
                <img
                  className="services_bad_double_serviceAbout_seven default-img"
                  src={item.hoverImage}
                  alt="Default"
                />
                <img
                  className="services_bad_double_serviceAbout_seven hover-img"
                  src={item.image}
                  alt="Hover"
                />{" "}
                <div className="services_bad_double_serviceAbout_laser">
                  {item?.title}
                </div>
                <div>
                  <FaPlus className="services_bad_double_serviceAbout_plus" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
