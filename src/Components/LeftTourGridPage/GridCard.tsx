import React, { useState } from "react";

import carouselData from "../../Mock/PackageData";

// ................Components.....................
import LeftGridCard from "./LeftGridCard";
import CardCarousel from "./CardCarousel";
import {
  faAngleDown,
  faArrowRightLong,
  faBars,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeftLineCard from "./LeftLineCard";
import { Link } from "react-router-dom";
import CatogoryFilterForm from "./CatogoryFilterForm";
import DurationFilterForm from "./DurationFilterForm";
import PriceFilterForm from "./PriceFilterForm";

const GridCard = () => {
  const [grid, setGrid] = useState(true);
  const [expand, setExpand] = useState(false);

  // ........Card type(grid & bar)...........
  const cardType = (icon: string) => {
    if (icon === "bar") {
      setGrid(false);
    } else {
      setGrid(true);
    }
  };
  // ........Load more.............
  const expandBlock = () => {
    return setExpand(true);
  };


    // ........catogory filter.............
    // ........duration filter.............
    // .........price filter...............


  return (
    <>
      <div className="w-full flex justify-center text-[16px] text-[#777777] font-thin ">
        <div className="w-full flex flex-col lg:max-w-[1290px] lg:flex-row  mt-[52px]">
          <div
            className={"w-full lg:w-[66.66%] flex flex-col  px-4  items-center"}
          >
            <div className="mb-[35px] md:flex md:justify-between md:w-full">
              <div className="flex items-center">
                <h1 className="">Showing 1-5 of 80 results</h1>
              </div>
              <div className={`flex gap-5 items-center`}>
                <FontAwesomeIcon
                  icon={faBars}
                  className={`p-2 rounded-md icon-bar ${
                    !grid ? "card-type" : ""
                  }`}
                  id="bar"
                  onClick={() => {
                    cardType("bar");
                  }}
                />
                <FontAwesomeIcon
                  icon={faTableCells}
                  id="grid"
                  className={`p-2 rounded-md icon-bar ${
                    grid ? "card-type" : ""
                  }`}
                  onClick={() => {
                    cardType("grid");
                  }}
                />
                <div className="dropdown inline-block relative ">
                  <button className="nav w-[150px] font-semibold py-2 px-4 border rounded-lg inline-flex justify-between items-center">
                    <span>Sort By </span>
                    <span>
                      <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                  </button>

                  <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                    <li>
                      <Link
                        className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                        to="#"
                      >
                        Sort By
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                        to="#"
                      >
                        Average rating
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                        to="#"
                      >
                        Price: low to high
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap"
                        to="#"
                      >
                        Price: high to low
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`grid grid-cols-1 md:w- ${
                grid ? "md:grid-cols-2" : ""
              } overflow-x-hidden gap-7 pb-5 mt-5 px-1 h-[4500px]  md:max-h-[2180px] lg:max-h-[2150px] xl:max-h-[2380px]  ${
                expand ? "overflow-scroll" : "overflow-hidden"
              }`}
            >
              {carouselData.map((data) => {
                let filter = data.pages_for_show.find(
                  (a) => a.toLowerCase().trim() === "left grid"
                );
                if (filter) {
                  return grid ? (
                    <LeftGridCard data={data} />
                  ) : (
                    <LeftLineCard data={data} />
                  );
                } else {
                  return null;
                }
              })}
            </div>

            <div className="flex relative top-0 justify-center">
              <div>
                <button
                  id="loagMore"
                  className=" button tour-pic-btn py-[8px] flex flex-row gap-2"
                  onClick={() => {
                    expandBlock();
                  }}
                >
                  <div className="text">
                    Load more{" "}
                    <span>
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className=" w-full lg:w-[33.33%]">
            <div className="pl-[24px] pr-[15px] sticky top-0">
              <div>
                <CatogoryFilterForm  />
              </div>

              <div>
                <DurationFilterForm />
              </div>

              <div>
                <PriceFilterForm />
              </div>

              <div className="  pb-[30px] mb-[32px]">
                <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">
                  Related Destinations
                </h1>
                <div className=" ">
                  <CardCarousel carouselData={carouselData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridCard;
