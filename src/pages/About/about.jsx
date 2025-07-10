import React from "react";
import "./about.scss";
import PageHero from "../../components/pageHero";
import Partner from "../../components/Partner";
import NewLetter from "../../components/newLetter";
import Pession from "../../components/Pession";

const About = () => {
  const title = "ABOUT";
  return (
    <>
      <>
        <PageHero title={title} />
        <Pession/>
        <div className="container">
          <iframe width="100%" height="650" src="https://www.youtube.com/embed/55_3tE4tNno?si=HhSWORimHpjlHZQv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <Partner/>
        <NewLetter/>
      </>
    </>
  );
};

export default About;
