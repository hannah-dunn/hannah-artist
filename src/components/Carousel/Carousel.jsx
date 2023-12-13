import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.scss";

const CarouselItem = () => {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel
          autoPlay
          interval="3000"
          axis="horizontal"
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
        >
          <div className="carouselpics">
            <img src="/1DD27797-9A71-447E-8D9B-3DB1B45C9FE7 (1).jpeg" />
          </div>
          <div>
            <img src="/IMG_0684.JPG" />
          </div>
          <div>
            <img src="/IMG_0776.PNG" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselItem;
