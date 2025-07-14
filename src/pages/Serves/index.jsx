import React, { useEffect } from "react";
import "./serves.scss";
import PageHero from "../../components/pageHero";

import NewLetter from "../../components/newLetter";
import HomeServices from "../../components/HomeServies";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../reduxToolkit/servesSlice";
const Serves = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const services = useSelector(
    (state) => state.servicesSlider?.servicesData);

  const title = t("serves");
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <section className="section-serves">
      <PageHero title={title} />
      <HomeServices servicesData={services}  />
      <NewLetter />
    </section>
  );
};

export default Serves;
