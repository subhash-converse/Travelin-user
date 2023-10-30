// <========== hooks ==========>
import { useState } from "react";

// <========== mock data ==========>
import carouselData from "../Mock/PackageData";

// <========== Components ==========>
import Card from "./Card";

const BestTourPackages = () => {
  const [btnOff, setBtnOn] = useState(false);

  const showPackages = () => {
    setBtnOn(!btnOff);
  };

  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center p-[50px] pt-[104px]">
          <h1 className="yellow content-head-1 Play-fair">Top Pick</h1>
          <h1 className="content-head-2 Play-fair">
            <span className="text-[#17233E]">Best </span>
            <span className="text-[#029E9D]">Tour Packages</span>
          </h1>
          <p className="text-[#777F94] content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="w-full flex flex-col items-center  px-4">
          <div className="lg:max-w-[1290px] grid gap-[31px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {carouselData.map((data) => {
              let filter = data.catogory.find(
                (a) => a.toLowerCase().trim() === "best tour package"
              );
              if (filter) {
                return <Card data={data} />;
              } else {
                return null;
              }
            })}
            
          </div>
          <div className="flex justify-center mt-[32px]">
              <button className="tour-pic-btn" onClick={showPackages}>
                {btnOff ? "close" : "view All Packages"}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BestTourPackages;
