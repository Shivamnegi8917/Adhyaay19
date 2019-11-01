import React from "react";
import { Component } from "react";
import Particles from "react-particles-js";
import ImageSlider from "./ImageSlider";

//images
import lanternImage1 from "../images/lantern1.png";
import lanternImage2 from "../images/lantern2.png";
import lanternImage3 from "../images/lantern3.png";
import lanternImage4 from "../images/lantern4.png";
import glowImage from "../images/glow.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Sec1 from "../images/sec/sec1.jpeg";
import Sec2 from "../images/sec/sec2.jpeg";
import Sec3 from "../images/sec/sec3.jpeg";

import hangingLanternImage from "../images/hangingLantern.png";

class About extends Component {
  render() {
    return (
      <>
        <div className="animation-wrapper">
          <div className="particle-js-wrapper">
            <Particles
              params={{
                particles: {
                  number: {
                    value: 160,
                    density: {
                      enable: false
                    }
                  },
                  color: {
                    value: "#D4AF37"
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      speed: 4,
                      size_min: 0.3
                    }
                  },
                  line_linked: {
                    enable: false
                  },
                  move: {
                    random: true,
                    speed: 1,
                    direction: "top",
                    out_mode: "out"
                  }
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble"
                    },
                    onclick: {
                      enable: true,
                      mode: "repulse"
                    }
                  },
                  modes: {
                    bubble: {
                      distance: 250,
                      duration: 2,
                      size: 0,
                      opacity: 0
                    },
                    repulse: {
                      distance: 400,
                      duration: 4
                    }
                  }
                }
              }}
            />
          </div>

          <div className="image">
            <img src={lanternImage1} alt="lantern" />
            <img src={glowImage} alt="glow" />
          </div>
          <div className="image">
            <img src={lanternImage2} alt="lantern" />
            <img src={glowImage} alt="glow" />
          </div>
          <div className="image">
            <img src={lanternImage3} alt="lantern" />
            <img src={glowImage} alt="glow" />
          </div>
          <div className="image">
            <img src={lanternImage4} alt="lantern" />
            <img src={glowImage} alt="glow" />
          </div>

          <div className="image">
            <img src={glowImage} alt="lantern" />
          </div>
          <div className="image">
            <img src={glowImage} alt="lantern" />
          </div>
          <div className="image">
            <img src={glowImage} alt="lantern" />
          </div>
          <div className="image">
            <img src={glowImage} alt="lantern" />
          </div>
          <div className="image">
            <img src={glowImage} alt="lantern" />
          </div>
        </div>
        <div className="container cars">
          <ImageSlider />
        </div>
      </>
    );
  }
}

export default About;
