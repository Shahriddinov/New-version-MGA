// src/components/Language/Language.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import i18next from "i18next";
import { languageChange } from "../../reduxToolkit/languageSlice";
import "./style.scss";

const Language = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleChangeLanguage = (lang) => {
    if (lang === language) return;
    i18next.changeLanguage(lang)
      .then(() => dispatch(languageChange(lang)))
      .catch((err) => console.error("Language change error:", err));
  };

  return (
    <div className="lang-simple">
      <span
        className={`lang-item ${language === "en" ? "active" : ""}`}
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </span>
      <span className="divider">|</span>
      <span
        className={`lang-item ${language === "ru" ? "active" : ""}`}
        onClick={() => handleChangeLanguage("ru")}
      >
        RU
      </span>
    </div>
  );
};

export default Language;
