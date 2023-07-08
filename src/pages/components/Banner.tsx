import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderImg1 from "../../images/slider/sliderImg_1.jpg";
import sliderImg2 from "../../images/slider/sliderImg_2.jpg";
import sliderImg3 from "../../images/slider/sliderImg_3.jpg";
import sliderImg4 from "../../images/slider/sliderImg_4.jpg";

export default function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image src={sliderImg1} alt="slider image 1" />
        </div>
        <div>
          <Image src={sliderImg2} alt="slider image 2" />
        </div>
        <div>
          <Image src={sliderImg3} alt="slider image 3" />
        </div>
        <div>
          <Image src={sliderImg4} alt="slider image 4" />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
}
