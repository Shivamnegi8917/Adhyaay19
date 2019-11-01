import React from "react";
import ImageGallery from "react-image-gallery";

import G1 from "../images/adhyaay/g1.JPG";
import G2 from "../images/adhyaay/g2.JPG";
import G3 from "../images/adhyaay/g3.JPG";
import G4 from "../images/adhyaay/g4.JPG";
import G5 from "../images/adhyaay/g5.JPG";
import G6 from "../images/adhyaay/g6.JPG";
import G10 from "../images/adhyaay/g10.jpeg";
import G12 from "../images/adhyaay/g12.jpeg";
import G13 from "../images/adhyaay/g13.jpeg";
import G14 from "../images/adhyaay/g14.jpeg";

class Gallery extends React.Component {
  render() {
    const images = [
      {
        original: G1,
        thumbnail: G1
      },
      {
        original: G3,
        thumbnail: G3
      },
      {
        original: G4,
        thumbnail: G4
      },
      {
        original: G5,
        thumbnail: G5
      },
      {
        original: G6,
        thumbnail: G6
      },
      {
        original: G10,
        thumbnail: G10
      },
      {
        original: G12,
        thumbnail: G12
      },
      {
        original: G13,
        thumbnail: G13
      },
      {
        original: G14,
        thumbnail: G14
      }
    ];

    return <ImageGallery items={images} showThumbnails="false" />;
  }
}

export default Gallery;
