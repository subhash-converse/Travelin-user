// <========== images ==========>
import mountain from "../Assets/Images/mountain.png";

// <========== icons ==========>
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FindHolidayForm = () => {
  return (
    <div className=" z-10 flex flex-col items-center lg:relative top-[-90px] lg:h-[70px]">
      <div className="flex w-full ">
        <img
          src={mountain}
          alt="mountain"
          className="w-[50%] rotate mountain-back lg:max-h-[130px] flex justify-center mt-8 lg:mt-0 z-10 "
        />
        <img
          src={mountain}
          alt="mountain"
          className="w-[50%] rotate mountain-back lg:max-h-[130px] flex justify-center mt-8 lg:mt-0 z-10 "
        />
      </div>
      <div className="px-4 z-10  w-full flex justify-center lg:relative top-[-120px] ">
        <div className=" relative  main-input w-full h-full lg:max-w-[1200px]  flex flex-col rounded-xl bg-white lg:flex-row ">
          <div className="w-full py-[40px] flex bg-[#029E9D] text-white justify-center items-center  rounded-t-md lg:rounded-none lg:rounded-l-xl lg:w-[250px] ">
            <div className="lg:w-[30%] lg:flex justify-end  ">
              <LocationOnOutlinedIcon
                style={{ height: "50", width: "50px" }}
                className="h-[39px]  justify-around"
              />
            </div>
            <span className="text-[22px] flex-wrap lg:w-[70%] text-center Play-fair">
              Find Your Holidays
            </span>
          </div>
          <form
            className="w-full  flex flex-col gap-[9px] px-[15px] md:px-[26px] justify-between items-center lg:flex-row lg:px-[26px]"
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

            <button className="bg-[#029E9D] text-white rounded-[12PX]  h-[49px] w-full lg:w-[185px] mb-4 lg:mb-0 flex gap-2 justify-center items-center">
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
  );
};

export default FindHolidayForm;
