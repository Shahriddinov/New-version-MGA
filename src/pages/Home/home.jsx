import React, {useEffect} from 'react';
import "./home.scss"
import Hero from "../../components/Hero/hero";
import {useDispatch, useSelector} from "react-redux";
import {getSlider} from "../../reduxToolkit/sliderSlice";
import Company from "../../components/Company/company";
import Serves from "../../components/Serves/serves";
import Video from "./component/Video/video";
import Partner from "../../components/Partner/partner";

const Home = () => {
    const dispatch = useDispatch();
    const sliderData = useSelector((state) => state.sliderSlice.sliderData);
    const error = useSelector((state) => state.sliderSlice.error);
    const loading = useSelector((state) => state.sliderSlice.loading);
    useEffect(() => {
            dispatch(getSlider());
    }, [dispatch]);
    return (
        <div className="home">
            <Hero sliderData={sliderData} error={error} loading={loading}/>
            <Company/>
            <Serves/>
            <Video/>

        </div>
    );
};

export default Home;