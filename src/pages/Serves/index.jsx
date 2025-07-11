import React from "react";
import "./serves.scss";
import PageHero from "../../components/pageHero";

import NewLetter from "../../components/newLetter";
import HomeServices from "../../components/HomeServies";
import { useTranslation } from "react-i18next";
const Serves = () => {
     const { t } = useTranslation();
  
  const title = t('serves');
  return (
    <section className="section-serves">
      <PageHero title={title} />
     <HomeServices/>
      <NewLetter />
    </section>
  );
};

export default Serves;
