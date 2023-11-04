import React from "react";

import carouselData from "../../Mock/PackageData";

// ................Components.....................
import Card from "../HomePage/Card";
import CardCarousel from "./CardCarousel";
import { faAngleDown, faBars, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GridCard = () => {
  return (
    <>
      <div className="w-full flex justify-center text-[16px] text-[#777777] font-thin ">
        <div className="lg:max-w-[1290px] flex mt-[52px]">
          <div className="w-[66.66%]">
            <div className="w-full flex justify-between items-center mb-[35px] ">
              <h1>Showing 1-5 of 80 results</h1>
              <div className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faTableCells} />
                <div className="dropdown inline-block relative ">
                  <button className="nav w-[150px] font-semibold py-2 px-4 border rounded-lg inline-flex justify-between items-center">
                    <span>Sort By{" "}</span>
                    <span><FontAwesomeIcon icon={faAngleDown} /></span>
                  </button>

                  <ul className="dropdown-content absolute hidden nav w-[180px]  pt-1 z-10">
                    <li><a className="rounded-t bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                           Sort By
                        </a>
                    </li>
                    <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                            Average rating
                        </a>
                    </li>
                    <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                            Price: low to high
                        </a>
                    </li>
                    <li><a className="bg-white hover:bg-[#868686] hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                            Price: high to low
                        </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" grid grid-cols-2 gap-7 px-4 py-5">
              {carouselData.map((data) => {
                let filter = data.catogory.find(
                  (a) => a.toLowerCase().trim() === "left grid"
                );
                if (filter) {
                  return <Card data={data} />;
                } else {
                  return null;
                }
              })}
            </div>
          </div>

          <div className="w-[33.33%]">
            <div className="pl-[24px] pr-[15px] relative">
              <div className=" border-b-[1px] border-dashed border-[#777777] pb-[30px] mb-[32px]">
                <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">Categories Type</h1>
                <div className="grid grid-cols-1 gap-3">
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="Tours" type="checkbox" />
                    <label htmlFor="Tours">Tours</label>
                    </div>
                    <div><h2>92</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="Attractions" type="checkbox" />
                    <label htmlFor="Attractions">Attractions</label>
                    </div>
                    <div><h2>22</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="DayTrips" type="checkbox" />
                    <label htmlFor="DayTrips"> Day Trips</label>
                    </div>
                    <div><h2>35</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="OutdoorActivities" type="checkbox" />
                    <label htmlFor="OutdoorActivities">Tours</label>
                    </div>
                    <div><h2>41</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="Concert&Show" type="checkbox" />
                    <label htmlFor="Concert&Show">Concert & Show</label>
                    </div>
                    <div><h2>61</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="Indoor" type="checkbox" />
                    <label htmlFor="Indoor">Indoor</label>
                    </div>
                    <div><h2>18</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="SightSeeing" type="checkbox" />
                    <label htmlFor="SightSeeing">Sight Seeing</label>
                    </div>
                    <div><h2>88</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="Travels" type="checkbox" />
                    <label htmlFor="Travels">Travels</label>
                    </div>
                    <div><h2>92</h2></div>
                  </div>
                </div>
              </div>

              <div className=" border-b-[1px] border-dashed border-[#777777] pb-[30px] mb-[32px]">
                <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">Duration Type</h1>
                <div className="grid grid-cols-1 gap-3">
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="Tours" type="checkbox" />
                    <label htmlFor="Tours">up to 1 hour</label>
                    </div>
                    <div><h2>92</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="Attractions" type="checkbox" />
                    <label htmlFor="Attractions">1 to 2 hour</label>
                    </div>
                    <div><h2>22</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="DayTrips" type="checkbox" />
                    <label htmlFor="DayTrips">  2 to 4 hour</label>
                    </div>
                    <div><h2>35</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="OutdoorActivities" type="checkbox" />
                    <label htmlFor="OutdoorActivities">4 to 8 hour</label>
                    </div>
                    <div><h2>41</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable">
                    <input id="Concert&Show" type="checkbox" />
                    <label htmlFor="Concert&Show"> 8 to 1 Day</label>
                    </div>
                    <div><h2>61</h2></div>
                  </div>
                  <div className="checkbox-inputs">
                    <div className="input-lable"> 
                    <input id="Indoor" type="checkbox" />
                    <label htmlFor="Indoor"> 1 Day to 2 Days</label>
                    </div>
                    <div><h2>18</h2></div>
                  </div>
                </div>
              </div>
                
              <div className=" border-b-[1px] border-dashed border-[#777777] pb-[30px] mb-[32px]">
                <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">Duration Type</h1>
                  <h2 className="mb-[16px]">Price Range</h2>
                  <input type="range" className="w-full" />
                

              </div>

              <div className=" border-b-[1px] border-dashed border-[#777777] pb-[30px] mb-[32px]">
                <h1 className="text-[26px] Play-fair text-[#17233E] border-b-[1px] mb-[30px] pb-[10px] ">Related Destinations</h1>
                 <div className=" ">
                 <CardCarousel carouselData={carouselData}  />
   
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
