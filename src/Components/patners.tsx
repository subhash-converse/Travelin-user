import React from "react";
import { Carousel } from "react-responsive-carousel";
import Carowsal from "./carousal";
import LastMainDeals from "../Mock/PackageData";

const Patners = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="yellow content-head-1 Play-fair">Our Partners</h1>
        <h1 className="content-head-2 Play-fair">
          <span className="text-[#17233E]">Our Awesome </span>
          <span className="text-[#777777]">Partners</span>
        </h1>
        <p className="text-[#777F94] content-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className='className="w-full flex justify-center p-4  background-travelers"'>
          <div className='lg:max-w-[1200px] grid grid-cols-1 '>
        <Carowsal carouselData={LastMainDeals}/>
        </div>
      </div>
    </div>
  );
};

export default Patners;
