import React, {useEffect} from 'react';
import "./video.scss"
import {useDispatch, useSelector} from "react-redux";
import { getYou} from "../../../../reduxToolkit/youTubeSlice";
const Video = () => {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.language.language);
    const loading = useSelector((state) => state.youTubeSlice.loading);
    const youTubeData = useSelector((state) => state.youTubeSlice.youTubeData);


    useEffect(() => {
        dispatch(getYou());
    }, [dispatch,lan]);

    return (
        <div className="video">
                <div className="container">
                    <iframe
                        className="video_link"
                        src={`https://www.youtube.com/embed/${youTubeData[0]?.url}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>

                </div>
        </div>
    );
};

export default Video;