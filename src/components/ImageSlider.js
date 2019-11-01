import React from "react";
import Sec1 from "../images/sec/sec1.jpeg";
import Sec2 from "../images/sec/sec2.jpeg";
import Sec3 from "../images/sec/sec3.jpeg";
import Sec4 from "../images/sec/sec4.jpeg";

class ImageSlider extends React.Component {
  render() {
    return (
      <div className="slider-wrapper">
        <div className="container">
          <div className="slider">
            <div className="slide slide1">
              <img src={Sec2} alt="" className="responsive-image img1" />
              <div className="caption">
                <h2>Dhruv Kaul</h2>
                <p>Cultural Secretary</p>
              </div>
            </div>
            <div className="slide slide2">
              <img src={Sec1} alt="" className="responsive-image img2" />
              <div className="caption">
                <h2>Vishal Singh</h2>
                <p>Literary Secretary</p>
              </div>
            </div>
            <div className="slide slide3">
              <img src={Sec3} alt="" className="responsive-image img3" />
              <div className="caption">
                <h2>Yashi Rai </h2>
                <p>Hobby secretary</p>
              </div>
            </div>
            <div className="slide slide4">
              <img src={Sec4} alt="" className="responsive-image img4" />
              <div className="caption">
                <h2>Swarn Srivastava</h2>
                <p>Photography secretary</p>
              </div>
            </div>
            <div className="slide slide1">
              <img src={Sec1} alt="" className="responsive-image img1" />
              <div className="caption">
                <h2>Dhruv Kaul</h2>
                <p>Cultural Secretary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
