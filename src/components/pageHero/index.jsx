import React from "react";
import "./style.scss";
const PageHero = ({ title }) => {
  return (
    <div className="page-header">
      <div className="page-hero"></div>
      <div className="container">
          <div className="page-header_innerHead">
              <ul className="bread-crumb">
                <li className="li-pull">
                  <a href="/" className="breads">
                    Home
                  </a>
                </li>
                <li>
                    <span>/</span>
                </li>
                <li className="li-pull">{title}</li>
              </ul>
              <h2 className="title-pages">{title}</h2>
          </div>
        </div>
    </div>
  );
};

export default PageHero;
