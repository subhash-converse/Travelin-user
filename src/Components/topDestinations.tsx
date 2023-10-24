import React from "react";

import destination1 from "../Assets/Images/destination2.jpg";

// <========== mock data ==========>
import carouselData from "../Mock/PackageData"
import BestTourPackages from "./best-tourpackages";


const TopDestinations = () => {
  return (
    <div>
      <div className="px-4">
        <div className="flex flex-col justify-center items-center p-[50px]">
          <h1 className="yellow content-head-1 Play-fair">Top Destinations</h1>
          <h1 className="content-head-2 Play-fair">
            <span className="text-[#17233E]">Explore </span>
            <span className="text-[#029E9D]">Top Destinations</span>
          </h1>
          <p className="text-[#777F94] content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

     
          <div className="flex flex-col items-center ">
          <div
            className="
            grid grid-cols-1 gap-5
            md:grid-cols-2 
            lg:grid-cols-4 ]
            xl:max-w-[1200px] xl:min-w-[1200px] "
          >
             {carouselData.map((data) =>(
            <div
              style={{ backgroundImage: `url(${destination1})` }}
              className="background-img img-radius h-[380px] 
              md:col-span-2  flex items-end
              lg:row-span-2  lg:h-[687px]"
            >
              <div className="w-full flex justify-between p-[24px]">
                <div className="Play-fair">
                  <h3 className="yellow">{data.country}</h3>
                  <h3 className="white">{data.territory}</h3>
                </div>
                <button className="destination-btn">{`${data.days} days`}</button>
              </div>
            </div>
            ))}
          </div>
        </div>
        
        
      </div>

      <div>
        <BestTourPackages />
      </div>
    </div>
  );
};

export default TopDestinations;
