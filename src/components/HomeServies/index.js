import React, { useEffect, Component } from "react";
import "./homeServies.scss";
import { FaPlus } from "react-icons/fa";
import Aos from "aos";

import servies1 from "../../assests/images/servies/ECO PECHAT.png";
import servies2 from "../../assests/images/servies/juyuan.png";
import servies3 from "../../assests/images/servies/LAZER.png";
import servies4 from "../../assests/images/servies/PLOTER RESKA.png";
import servies5 from "../../assests/images/servies/SHROKAFORMATNI PECHAT.png";
import servies6 from "../../assests/images/servies/UV PECHAT00.png";
import servies7 from "../../assests/images/servies/CNC rover.png";
import servies8 from "../../assests/images/servies/LASER.png";


import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function HomeServices() {
    const { t } = useTranslation();
  
  const servicesData = [
    {
      id: 1,
      image: servies1,
      title: "ECO PECHAT",
    },
    {
      id: 2,
      image: servies2,
      title: "Juyuan",
    },
    {
      id: 3,
      image: servies3,
      title: "LAZER",
    },
    {
      id: 4,
      image: servies4,
      title: "PLOTER RESKA",
    },
    {
      id: 5,
      image: servies5,
      title: "SHROKAFORMATNI PECHAT",
    },
    {
      id: 6,
      image: servies6,
      title: "UV PECHAT",
    },
    {
      id: 7,
      image: servies7,
      title: "CNC rover",
    },
    {
      id: 8,
      image: servies8,
      title: "LASER",
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
                  className="services_bad_double_serviceAbout_seven "
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
