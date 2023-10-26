import React from "react";
import mountainWithPeoples from "../Assets/Images/mountain-with-people.png";
import mountain2 from "../Assets/Images/mountain2.png";
import { url } from "inspector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const ExploreYourLife = () => {
  return (
      <div style={{ backgroundImage: `url(${mountainWithPeoples})` }} className="bg-no-repeat -500">
        <div className="flex flex-col justify-center items-center p-[50px] ">
          <h1 className="yellow content-head-1 Play-fair">
            Love Where Your're Going
          </h1>
          <h1 className="content-head-2 Play-fair">
            <span className="text-[#17233E]">Explore Your Life, </span>
            <span className="yellow">Travel Where You</span>
            <h2 className="yellow">Want!</h2>
          </h1>
          <p className="text-[#777F94] content-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center p-0">
          <div className=" flex justify-center items-center ">
            <FontAwesomeIcon
              icon={faCirclePlay}
              className="h-[70px] w-[70px] text-[#777]"
            />
          </div>
          <div className="">
          <img className="rotate" src={mountain2} alt="mountain" />
          </div>
        </div>
        
      </div>
    
  );
};

export default ExploreYourLife;
