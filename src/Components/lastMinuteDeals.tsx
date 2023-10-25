import React from "react";
import Card from "./card";
import carouselData from "../Mock/PackageData"
import { url } from "inspector";
import parashoot from "../Assets/Images/parashoot.png"
import LongCard from "./longCard";
import GetToKnowUs from "./getToKnowus";

const LastMinuteDeals = () => {
  return (
    <div>
      <div>
      <div style={{backgroundImage : `url(${parashoot})`}}>
        <div className="flex flex-col justify-center items-center p-[50px]">
          <h1 className="yellow content-head-1 Play-fair">Top Deals</h1>
          <h1 className="content-head-2 Play-fair">
            <span className="text-[#17233E]">The Last </span>
            <span className="text-[#029E9D]">Minute Deals</span>
          </h1>
          <p className="text-[#777F94] content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="w-full flex justify-center p-4">
          <div className="lg:max-w-[1200px] grid grid-cols-1 lg:grid-cols-5 gap-6 ">
            <div className="col-span-3 grid gap-5 grid-cols-1 md:grid-cols-2">
            {carouselData.map((data) => {
              let filter = (data.catogory).find((a)=>((a.toLowerCase()).trim() == "last minute deals"))
                if (filter) {
                  return <Card data={data} />;
                } else {
                  return null;
                }
            }
              )}
            </div>
              
            <div className="col-span-2 grid gap-6">
            {carouselData.map((data) => {
              let filter = (data.catogory).find((a)=>((a.toLowerCase()).trim() == "long card"))
                if (filter) {
                  return <LongCard data={data} />;
                } else {
                  return null;
                }
            }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    
  );
};

export default LastMinuteDeals;
