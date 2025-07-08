import React from "react";
import "./serves.scss";
import PageHero from "../../components/pageHero";

import NewLetter from "../../components/newLetter";
import HomeServices from "../../components/HomeServies";
const Serves = () => {
  const title = "Services ";
  return (
    <section className="section-serves">
      <PageHero title={title} />
     <HomeServices/>
      <NewLetter />
    </section>
  );
};

export default Serves;
