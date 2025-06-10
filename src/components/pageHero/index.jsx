import React from 'react';
import './style.scss'
const PageHero = ({title}) => {
    return (
        <div className="page-hero">
            <div className="auto-container">
                <div className="content-box">
                    <h1 className="title-pages">{title}</h1>
                    <div className="bread-crumb">
                        <ul className="bread-crumb pull-right">
                            <li>
                                <a href="/" className="breads">Home</a>
                            </li>
                            <li className="main-hero">
                                {title}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHero;