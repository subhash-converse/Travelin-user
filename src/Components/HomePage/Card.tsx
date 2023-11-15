// <========== icons ==========>
import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// <========== images ==========>
import React from "react";

// <========== interface ==========>
import { PackageContent } from "../../interface/common";

const Card = (props: { data: PackageContent[] }) => {
  return (
    <>
      {props.data.map((data) => (
        <div
          key={`Card-${data.id}`}
          className="last-deal card-hover btn-fromLeft card-line  bg-white main-input rounded-t-xl w-full  lg:h-[510px]  xl:h-[570px]  rounded-xl"
        >
          <div className="image-box rounded-t-xl">
            <div
              style={{ backgroundImage: `url(${data.image})` }}
              className="image background-top-pick w-full h-[190px] rounded-t-xl md:h-[221px] xl:h-[274px] flex items-end"
            ></div>
          </div>

          <div className=" p-[24px] pt-[32px] ">
            <div className="flex">
              <h3 className="Play-fair text-[18px] text-[#777777]">
                {data.country}
              </h3>
              <div className="w-full text-[16px] font-semibold  px-[24px] flex justify-end ">
                <button className="tour-pic-btn relative top-[-60px]">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <span> {`${data.days} Days Tours`} </span>
                </button>
              </div>
            </div>
            <h3 className="Play-fair text-[21px] lg:text-[26px] mb-2">
              {data.territory}
            </h3>
            <div className="rating-main pb-1">
              <div className="rating text-[#FDC703]  ">
                <span className="fa fa-star checked">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="fa fa-star checked">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="fa fa-star checked">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="fa fa-star checked">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="fa fa-star checked">
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span className="ms-2 white">(18)</span>
              </div>
            </div>
            <p className="text-[#777777] text-[16px] mb-4">
              {data.description}
            </p>
            <div>
              <span className="text-[#777777] text-[20px] font-bold">{`$${data.price}`}</span>{" "}
              <span> | </span>{" "}
              <span className="text-[16px] text-[#777777]">Per person</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
