import React, { useEffect } from "react";
import "./homeServies.scss";
import { FaPlus } from "react-icons/fa";
import Aos from "aos";


import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function HomeServices({ servicesData }) {
  const { t } = useTranslation();

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
              {servicesData.map((item, index) => {
                  const virtualId = servicesData.length - index;

                  return (
                      item.image &&
                      item.title && (
                          <motion.a
                              key={virtualId}
                              className="services_bad_double_serviceAbout"
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.2 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                          >
                              <div className="zoom"></div>
                              <img
                                  className="services_bad_double_serviceAbout_seven"
                                  src={item.image}
                                  alt={item.title || "Service"}
                              />
                              <div className="services_bad_double_serviceAbout_laser">
                                 {item.title}
                              </div>
                              <div>
                                  <FaPlus className="services_bad_double_serviceAbout_plus" />
                              </div>
                          </motion.a>
                      )
                  );
              })}


          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
