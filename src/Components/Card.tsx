// <========== icons ==========>
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// <========== images ==========>
import topPick1 from "../Assets/Images/TopPick1.jpg";

import React from "react";

interface data {
  data: {
    image: any;
    country: string;
    touristPlace: string;
    reviewsStar: number;
    description: string;
    catogory: string[];
    price: number;
    territory: string;
    days: number;
    guideName?: string;
    position?: string;
  };
}

const Card: React.FC<data> = (props) => {
  return (
    <div className="bg-white main-input img-radius w-full  lg:h-[510px]  xl:h-[570px]">
      <div
        style={{ backgroundImage: `url(${topPick1})` }}
        className="background-top-pick w-full h-[190px] rounded-t-xl md:h-[221px] xl:h-[274px] flex items-end "
      >
        <div className="w-full text-[16px] font-semibold  px-[24px] flex justify-end">
          <button className="tour-pic-btn relative top-[28px]">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span> {`${props.data.days} Days Tours`} </span>
          </button>
        </div>
      </div>

      <div className=" p-[24px] pt-[40px] ">
        <h3 className="Play-fair text-[18px] text-[#777777] mb-2">
          {props.data.country}
        </h3>
        <h3 className="Play-fair text-[21px] lg:text-[26px] mb-2">{props.data.territory}</h3>
        <div className="mb-4">
          <span>Stars</span>
          <span>(12)</span>
        </div>
        <p className="text-[#777777] text-[16px] mb-4">{props.data.description}</p>
        <div>
          <span className="text-[#777777] text-[20px] font-bold">{`$${props.data.price}`}</span>{" "}
          <span> | </span> <span className="text-[16px] text-[#777777]">Per person</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
