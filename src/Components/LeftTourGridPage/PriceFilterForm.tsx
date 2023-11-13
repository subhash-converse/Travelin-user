import React, { useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";

const PriceFilterForm = () => {
 

  return (
    <>
      <div className=" border-b-[1px] border-dashed border-[#777777] pb-[60px] mb-[32px] ">
        <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">
          Duration Type
        </h1>
        <h2 className="mb-[16px]">Price Range</h2>
        <MultiRangeSlider
          min={0}
          max={2000}
          onChange={({ min, max }) => {
            let priceArray: any = [0,20000];
            priceArray[0] = min;
            priceArray[1] = max;
            {console.log(priceArray)}
          }}
        />
      </div>
    </>
  );
};

export default PriceFilterForm;
