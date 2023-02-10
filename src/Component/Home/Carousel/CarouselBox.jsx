import React from "react";
import { Carousel } from "flowbite-react";

const CarouselBox = () => {
  return (
    <div className="h-56 sm:h-96 xl:h-[26rem]">
      <Carousel>
        <img
          src="https://icms-image.slatic.net/images/ims-web/663ca507-1cd9-4850-aaa8-baba2da879b9.jpg"
          alt="..."
        />
        <img
          src="https://icms-image.slatic.net/images/ims-web/903cb434-a950-4ecd-8cf7-479849e7d39b.jpg"
          alt="..."
        />
        <img
          src="https://icms-image.slatic.net/images/ims-web/00f9c2d7-4036-4380-aff6-62227fdbf5ea.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default CarouselBox;
