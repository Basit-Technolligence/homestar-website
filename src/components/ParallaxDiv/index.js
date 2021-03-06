import React, { useEffect } from "react";
import "./style.css";
import { Parallax, Background } from "react-parallax";
import Aos from "aos";
import "aos/dist/aos.css";

const ParallaxDiv = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <Parallax
      bgImage={require("../../images/cover2.jpg")}
      strength={600}
      bgImageStyle={{ maxWidth: "100%" }}
    >
      <div style={{ height: "500px" }}>
        <div className="textContainer">
          <p data-aos="fade-up" className="bigText">
            Don't need to travel long distances to reach preferred physical
            store
          </p>
          <p data-aos="fade-down" className="smallText">
            An e-commerce store can be accessed and viewed from anywhere by an
            unbounded number of internet users.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxDiv;
