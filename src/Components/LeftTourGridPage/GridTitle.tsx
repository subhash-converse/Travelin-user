import React from "react";

// ..............Images.................
import mountain from "../../Assets/Images/HomeImage/mountain.png";

const GridTitle = () => {
  return (
    <>
      <div className="fix-image h-[354px] w-full relative ">
        <div className="bg-black opacity-[0.6] absolute w-full h-full  "></div>
        <div className="absolute top-[40%] ld:top-[25%] flex justify-center w-full">
          <div className="text-center white ">
            <h1 className="text-[24px] md:text-[58px] Play-fair">TOUR GRID</h1>
            <h3 className="flex gap-2 justify-center">
              <span>Home</span>
              <span>|</span>
              <span>Tour Grid Leftside</span>
            </h3>
          </div>
        </div>
        <div className="">
          <div className="flex  absolute bottom-[-1px]">
            <img className=" rotate w-[33.34%]" src={mountain} alt="mountain" />
            <img
              className="relative left-[-1px] rotate w-[33.33%]"
              src={mountain}
              alt="mountain"
            />
            <img
              className="relative left-[-3px] rotate w-[33.48%]"
              src={mountain}
              alt="mountain"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default GridTitle;
