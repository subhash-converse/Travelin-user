// <========== react ==========>
import React from 'react'

// <========== images ==========>
import mountain from "../Assets/Images/mountain.png";

// <========== icons ==========>
import {
    faMagnifyingGlass,
    faMapLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// <========== components ==========>
import TopDestination from './coreFutures';

const FindHolidayForm = () => {
  return (
    <div>
      <div
    style={{ backgroundImage: `url(${mountain})` }}
    className=" mountain-back lg:min-h-[172px] flex justify-center px-4 mt-8 lg:mt-0 z-10 lg:pt-[100px]"
  >
    <div className=" main-input h-full w-[1200px] flex flex-col rounded-md bg-white lg:flex-row ">
      <div className="w-full py-[30px] flex bg-[#029E9D] text-white justify-center items-center gap-2 rounded-t-md lg:rounded-none lg:rounded-l-md lg:w-[20%] ">
        <div className="lg:w-[30%] lg:flex justify-end  ">
          <FontAwesomeIcon
            className="h-[39px]  justify-around"
            icon={faMapLocationDot}
          />
        </div>
        <span className="text-[22px] flex-wrap lg:w-[70%]">
          Find Your Holidays
        </span>
      </div>
      <form
        className="w-full  flex flex-col gap-3 justify-evenly items-center lg:flex-row lg:px-3  "
        action=""
      >
        <div className="input-outerDiv mt-5 lg:mt-0">
          <select name="" id="" className="input">
            <option value="" hidden>
              Destination
            </option>
            <option value="india">India</option>
            <option value="india">India</option>
            <option value="india">India</option>
            <option value="india">India</option>
          </select>
        </div>

        <div className="input-outerDiv">
          <input type="date" className="input" />
        </div>

        <div className="input-outerDiv">
          <select name="" id="" className="input">
            <option value="" hidden>
              Travel Type
            </option>
            <option value="City Tour">City Tour</option>
            <option value="Family Tour">Family Tour</option>
          </select>
        </div>

        <div className="input-outerDiv">
          <select className="input" name="" id="">
            <option value="" defaultValue={""} selected hidden>
              Travel Duration
            </option>
            <option value="2 days">2 days</option>
            <option value="4 days">4 days</option>
            <option value="6 days">6 days</option>
            <option value="india">10 days</option>
          </select>
        </div>

        <button className="bg-[#029E9D] text-white rounded-md  h-[49px] w-[80%] mb-4 lg:mb-0 flex gap-2 justify-center items-center">
          <span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" text-[12px]"
            />
          </span>
          <span>Search Now</span>
        </button>
      </form>
    </div>
  </div>
   
    </div>
  )
}

export default FindHolidayForm